class CreatePlayers < ActiveRecord::Migration
  def change
    create_table :players do |t|
      t.string :name
      t.text :notes
      t.integer :ac, :fort, :ref, :will, :current_hp, :max_hp, :initiative
      t.timestamps
    end
  end
end
