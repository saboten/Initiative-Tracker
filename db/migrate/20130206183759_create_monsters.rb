class CreateMonsters < ActiveRecord::Migration
  def change
    create_table :monsters do |t|
      t.string :alias
      t.text :notes
      t.integer :current_hp, :initiative, :battle_id, :monster_template_id
      t.timestamps
    end
  end
end
