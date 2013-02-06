class CreateMonsters < ActiveRecord::Migration
  def change
    create_table :monsters do |t|
      t.string :name, :descriptor
      t.text :notes
      t.integer :ac, :fort, :ref, :will, :current_hp, :max_hp, :initiative
      t.timestamps
    end
  end
end
