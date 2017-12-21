class AddSkillsToPlayers < ActiveRecord::Migration
  def change
    add_column :players, :str, :integer
    add_column :players, :con, :integer
    add_column :players, :dex, :integer
    add_column :players, :int, :integer
    add_column :players, :wis, :integer
    add_column :players, :cha, :integer
    add_column :players, :acrobatics, :integer
    add_column :players, :arcana, :integer
    add_column :players, :athletics, :integer
    add_column :players, :bluff, :integer
    add_column :players, :diplomacy, :integer
    add_column :players, :dungeoneering, :integer
    add_column :players, :endurance, :integer
    add_column :players, :heal, :integer
    add_column :players, :history, :integer
    add_column :players, :insight, :integer
    add_column :players, :intimidate, :integer
    add_column :players, :nature, :integer
    add_column :players, :perception, :integer
    add_column :players, :religion, :integer
    add_column :players, :stealth, :integer
    add_column :players, :streetwise, :integer
    add_column :players, :thievery, :integer
  end
end
