class CreateMonsterTemplates < ActiveRecord::Migration
  def change
    create_table :monster_templates do |t|
      t.string :name
      t.integer :ac, :fort, :ref, :will, :max_hp, :init_mod
      t.timestamps
    end
  end
end
