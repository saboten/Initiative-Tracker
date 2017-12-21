class SkillChallenge < ActiveRecord::Base
  attr_accessible :present_players, :selected_players
  serialize :present_players
  serialize :selected_players
  
  def player_array
    array = []
    read_attribute(:present_players).each {|player_id| array.push(Player.find(player_id))}
    return array
  end
end
