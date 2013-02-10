class CreateBattlesPlayersJoinTable < ActiveRecord::Migration
  def change
    create_table :battles_players, :id => false do |t|
      t.integer :battle_id
      t.integer :player_id
    end
  end
end
