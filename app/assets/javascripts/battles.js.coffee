# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

active_creature_id = null
selected_creature_id = null
damaged_creature_ids = []
heal_check = false

$(document).ready ->
  if $('body.battles_show').length > 0
    if $('#initiative_list').children().length > 0
      initialize_initiative_list()
      initialize_active_creature()
    $('.editable_battle_name').editable($('.editable_battle_name').data('url'), 
      indicator : "Saving...", 
      tooltip   : "Double-click to edit", 
      name      : "name",
      id        : 'elementid',
      cssclass  : "edit_battle_name", 
      event     : "dblclick")

    $('#show_add_monsters_button').click((event) -> $('#monster_select').css("display","block"))
    $('#hide_add_monsters_button').click((event) -> hide_add_monsters_box())
    $('#add_monsters_button').click((event) -> submit_add_monsters())
    $('#show_add_players_button').click((event) -> $('#player_select').css("display","block"))
    $('#hide_add_players_button').click((event) -> hide_add_players_box())
    $('#add_players_button').click((event) -> submit_add_players())
    
    $('#cancel_damage_button').click((event) -> hide_damage_box())
    $('#add_damage_button').click((event) -> update_damage_values())
    $('#roll_button').click((event) -> random_roll($('#roll_text').val()))
    $('#d20button').click((event) -> random_roll("1d20"))

    $('.creature_select_form').on("ajax:success", (event, data, status, xhr) -> 
      $('#left_column').html(data)
      initialize_initiative_list()
      initialize_active_creature()
    )
    $('#sort_by_initiative_button').on("ajax:success", (event, data, status, xhr) -> 
      $('#left_column').html(data)
      initialize_initiative_list()
      initialize_active_creature()
    )

    $('#roll_text').keydown((event) -> 
      if event.which == 13
        event.preventDefault()
        random_roll($('#roll_text').val())
    )
    $('#add_damage_text').keydown((event) -> 
      if event.which == 13
        event.preventDefault()
        update_damage_values()
    )
    $(document).keydown((event) ->
      if event.target.nodeName == "INPUT" or event.target.nodeName == "TEXTAREA"
        return
      
      if event.which != 67
        heal_check = false
      else
        if heal_check == true
          event.preventDefault()
          heal_active_creature()
          
      if event.which == 82
        event.preventDefault()
        $('#roll_text').focus()
        
      if event.which == 72
        event.preventDefault()
        heal_check = true
    
      if event.which == 32
        event.preventDefault()
        increment_active_creature()
    )
  
#Sets list of creatures as a sortable jQuery-ui object and adds an ajax update event.
#The list is serialized by <li> ids in the format "creature_(type)_(id)" ex. "creature_monster_5"
initialize_initiative_list = ->
  $('#initiative_list').sortable(
    update: (event, ui) ->
      $.post($("#initiative_list").data("sync-order-url"), $("#initiative_list").sortable("serialize", { expression: /(.+)[-](.+)/ })) 
  )
  $('#initiative_list').disableSelection()
  $('.monster_block_full_name').click((event) -> set_selected_creature($(this).data('target-id')))
  $('.creature_block_hp').click((event) -> update_add_damage_box($(this).data('target-id')))
  
  
initialize_active_creature = ->
  active_creature = $("#initiative_list").data("active-creature")
  element_id = '#' + active_creature
  if $(element_id).length
    active_creature_id = active_creature
  else
    set_active_creature($('#initiative_list').sortable("toArray")[0])
  set_selected_creature(active_creature_id)
  
update_add_damage_box = (id_string) ->
  $("#add_damage_box").css("display", "block")
  $('#add_damage_text').focus()
  damaged_creature_ids.push(id_string)
  adding_damage_string = "Adding damage to "
  for creature_id in damaged_creature_ids
    full_name = $("#" + creature_id).data("full-name")
    adding_damage_string = adding_damage_string + full_name + ", "
  $('#adding_damage_to').html(adding_damage_string.slice(0,-2))
  
update_damage_values = ->
  posting = $.post($("#initiative_list").data("update-damage-url"), $.param({ creatures: damaged_creature_ids, damage: $('#add_damage_text').val() }))
  posting.done( (data) ->
    $('#left_column').html(data)
    initialize_initiative_list()
  )
  hide_damage_box()
  
hide_damage_box = ->
  $("#add_damage_box").css("display", "none")
  $('#add_damage_text').val("")
  damaged_creature_ids = []

submit_add_monsters = ->
  $('#monster_select_form').submit()
  hide_add_monsters_box()
  
hide_add_monsters_box = ->
  $('.monster_quantity_text').val("0")
  $('#monster_select').css("display","none")
  
submit_add_players = ->
  $('#player_select_form').submit()
  hide_add_players_box()
  
hide_add_players_box = ->
  $('.player_initiative_text').val("0")
  $('#player_select').css("display","none")

random_roll = (roll_string)->
  if $("#rolls li").length > 12
    $('#rolls li:last').remove()
  roll = parse_roll(roll_string)
  $("#rolls").prepend('<li>'+roll+'</li>')
  
set_selected_creature = (id_string) ->
  if $("#" + id_string).data('type') == "monster"
    $.get($("#" + id_string).data("url"), (data) -> 
      $("#selected_monster").html(data)
      $('.attack_button').click((event) -> 
        unless $('#roll_text').val() == "1d20+"+$(this).data("attack-mod")
          $('#roll_text').val("1d20+"+$(this).data("attack-mod"))
        else
          random_roll($('#roll_text').val())
      )
      $('.damage_button').click((event) ->
        unless $('#roll_text').val() == $(this).html()
          $('#roll_text').val($(this).html())
        else 
          random_roll($('#roll_text').val())
      )
      $('#selected_monster_full_name').editable($('#selected_monster_full_name').data('url'), 
        indicator : "Saving...", 
        tooltip   : "Double-click to edit", 
        name      : "alias",
        id        : 'elementid',
        cssclass  : "edit_monster_descriptor", 
        event     : "dblclick"
      )
      $('#notes').change( ->
        $.post($('#notes').data('update-notes-url'), {notes: $('#notes').val()})
      )
    )

heal_active_creature = ->
  if active_creature_id?
    $.post($('#initiative_list').data("heal-url"), {id_string: active_creature_id}, (data) ->
      $('#left_column').html(data)
      initialize_initiative_list()
    )
  
increment_active_creature = ->
  order_array = $('#initiative_list').sortable("toArray")
  index = order_array.indexOf(active_creature_id)
  $("#" + active_creature_id).removeClass('active_creature_block').removeAttr('style')
  loop
    if index + 1 == order_array.length
      index = 0
    else
      index += 1
    break if $("#" + order_array[index]).find('.creature_block_hp').html() > 0
  set_active_creature(order_array[index])
  $("#" + active_creature_id).addClass('active_creature_block').removeAttr('style')
  set_selected_creature(active_creature_id)
  
#The active creature is the creature who's turn it is
set_active_creature = (id_string) ->
  active_creature_id = id_string
  $.post($("#initiative_list").data("update-active-creature-url"), { active_creature: active_creature_id })
  
parse_roll = (roll_string)->
  sum = 0
  separated_rolls = roll_string.split("+")
  
  for roll in separated_rolls
    split_roll = roll.split("d")
    
    if split_roll.length == 2
      multiplier = split_roll[0]
      die_size = split_roll[1]
      for i in [0...multiplier] by 1
        sum += Math.floor((Math.random()*die_size)+1)
        
    if split_roll.length == 1
      sum += parseInt(split_roll[0])
      
  return sum