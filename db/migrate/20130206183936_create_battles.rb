class CreateBattles < ActiveRecord::Migration
  def change
    create_table :battles do |t|
      t.string :name
      t.text :initiative_order
      t.timestamps
    end
  end
end
