class Battle < ActiveRecord::Base
  attr_accessible :name, :initiative_order, :active_creature
  serialize :initiative_order
  has_many :monsters, :dependent => :destroy
  
  default_scope order('created_at DESC')
  
  #This is in place instead of directly serializing Monster and Player objects because Rails sometimes fails to de-serialize them correctly
  def order
    order_array = []
    read_attribute(:initiative_order).each do |creature|
      parts = creature.split("_")
      order_array.push(Monster.find(parts.last)) if(parts.first == "monster")
      order_array.push(Player.find(parts.last)) if(parts.first == "player")
    end
    return order_array
  end
end
