# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

active_creature_id = null
selected_creature_id = null

$(document).ready ->
  make_order_sortable()
  initialize_active_creature()
  #$('#initiative_list li').on("mousedown", ->
  #  if old_element?
  #    old_element.css("color", "#000")
  #  old_element = $(this)
  #  $(this).css("color", "#FFF")
  #)
  $('.editable_battle_name').editable($('.editable_battle_name').data('url'), indicator: "Saving...", tooltip: "Double-click to edit", name : "name", even : "dblclick")
  $('#add_monsters_button').click((event) -> $('#monster_select_form').submit())
  $('#initiative_list li').click((event) -> set_selected_creature($(this).attr('id')))
  $('#roll_button').click((event) -> random_roll($('#roll_text').val()))
  $('#d20button').click((event) -> random_roll("1d20"))
  
  
  $('#monster_select_form').on("ajax:success", (event, data, status, xhr) -> 
    $('#left_column').html(data)
    make_order_sortable()
  
  $('#roll_text').keydown((event) -> 
    if event.which == 13
      event.preventDefault()
      random_roll($('#roll_text').val())
  )
  $(document).keydown((event) ->
    if event.target.nodeName == "INPUT"
      return
      
    if event.which == 32
      event.preventDefault()
      increment_active_creature()
  )  
  #$(document).bind('keydown', "space", increment_active_creature)
  )

random_roll = (roll_string)->
  if $("#rolls li").length > 11
    $('#rolls li:last').remove()
  roll = parse_roll(roll_string)
  $("#rolls").prepend('<li>'+roll+'</li>')
  
set_selected_creature = (id_string) ->
  $("#" + selected_creature_id).removeClass('selected_creature_block').removeAttr('style')
  selected_creature_id = id_string
  $("#" + selected_creature_id).addClass('selected_creature_block').removeAttr('style')
  $.get($("#" + selected_creature_id).data("url"), (data) -> 
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
  )
  
  
increment_active_creature = ->
  order_array = $('#initiative_list').sortable("toArray")
  index = order_array.indexOf(active_creature_id)
  $("#" + active_creature_id).removeClass('active_creature_block').removeAttr('style')
  if index + 1 == order_array.length
    index = 0
  else
    index += 1
  set_active_creature(order_array[index])
  $("#" + active_creature_id).addClass('active_creature_block').removeAttr('style')
  set_selected_creature(active_creature_id)
  
#The active creature is the creature who's turn it is
set_active_creature = (id_string) ->
  active_creature_id = id_string
  $.post($("#initiative_list").data("update-active-creature-url"), { active_creature: active_creature_id })
  
#Sets list of creatures as a sortable jQuery-ui object and adds an ajax update event.
#The list is serialized by <li> ids in the format "creature_(type)_(id)" ex. "creature_monster_5"
make_order_sortable = ->
  $('#initiative_list').sortable(
    update: (event, ui) ->
      $.post($("#initiative_list").data("sync-order-url"), $("#initiative_list").sortable("serialize", { expression: /(.+)[-](.+)/ })) 
  )
  $('#initiative_list').disableSelection()
  
initialize_active_creature = ->
  active_creature = $("#initiative_list").data("active-creature")
  element_id = '#' + active_creature
  if $(element_id).length
    active_creature_id = active_creature
  else
    set_active_creature($('#initiative_list').sortable("toArray")[0])
  set_selected_creature(active_creature_id)
  
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