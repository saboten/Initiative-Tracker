# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/
$(document).ready ->
  if $('body.skill_challenge_index').length > 0
    if $('#present_players_list').children().length > 0
      initialize_initiative_list()
    $('#show_add_players_button').click((event) -> $('#player_select').css("display","block"))
    $('#hide_add_players_button').click((event) -> hide_add_players_box())
    $('#add_players_button').click((event) -> submit_add_players())
    
    $('.creature_select_form').on("ajax:success", (event, data, status, xhr) -> 
      $('#left_column').html(data)
      initialize_initiative_list()
    )
	  
initialize_initiative_list = ->
  $('#present_players_list').sortable(
    update: (event, ui) ->
      $.post($("#present_players_list").data("update-selected-players-url"), $("#present_players_list").sortable("serialize", { expression: /(.+)[-](.+)/ })) 
  )
  $('#present_players_list').disableSelection()
  $('.remove_creature_button').click((event) -> remove_player($(this).data('url')))
  
remove_player = (url) ->
  $.get($(url, (data) ->
    $('#left_column').html(data)
    initialize_initiative_list()
  ))

submit_add_players = ->
  $('#player_select_form').submit()
  hide_add_players_box()
  
hide_add_players_box = ->
  $('.player_select_box').attr('checked', false)
  $('#player_select').css("display","none")