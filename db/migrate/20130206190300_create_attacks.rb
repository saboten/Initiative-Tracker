class CreateAttacks < ActiveRecord::Migration
  def change
    create_table :attacks do |t|
      t.string :name, :damage_roll
      t.integer :attack_mod, :monster_template_id
      t.timestamps
    end
  end
end
