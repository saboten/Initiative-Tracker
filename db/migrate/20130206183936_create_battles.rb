class CreateBattles < ActiveRecord::Migration
  def change
    create_table :battles do |t|
      t.string :name, :active_creature
      t.text :initiative_order
      t.timestamps
    end
  end
end
