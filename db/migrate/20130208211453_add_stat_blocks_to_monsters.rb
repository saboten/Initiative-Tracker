class AddStatBlocksToMonsters < ActiveRecord::Migration
  def self.up
    add_attachment :monsters, :stat_block
    add_attachment :monster_templates, :stat_block
  end

  def self.down
    remove_attachment :monsters, :stat_block
    remove_attachment :monster_templates, :stat_block
  end
end
