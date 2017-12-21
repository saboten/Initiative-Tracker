class CreateSkillChallenges < ActiveRecord::Migration
  def change
    create_table :skill_challenges do |t|
      t.text :present_players, :selected_players
      t.timestamps
    end
  end
end
