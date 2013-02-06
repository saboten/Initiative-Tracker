class CreateAttacks < ActiveRecord::Migration
  def change
    create_table :attacks do |t|
      t.string :name, :damage_roll
      t.integer :attack_mod
      t.timestamps
    end
  end
end
