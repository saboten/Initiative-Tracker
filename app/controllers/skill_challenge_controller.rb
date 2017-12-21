class SkillChallengeController < ApplicationController
  layout 'battle'
  def index
    @skill_challenge = SkillChallenge.first
    @players = Player.all
  end
  
  def add_players
    @skill_challenge = SkillChallenge.first
    players = params[:players]
    players.each_value do |v|
      player = Player.find(v)
      @skill_challenge.present_players.push(player.id)
    end
    @skill_challenge.save
    render :partial => "present_players"
  end
  
  def remove_players
    @skill_challenge = SkillChallenge.first
    @skill_challenge.present_players.delete(params[:id])
    @skill_challenge.save
    render :partial => "present_players"
  end
  
  def update_selected_players
  end
end
