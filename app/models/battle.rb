class Battle < ActiveRecord::Base
  attr_accessible :name, :initiative_order
  has_many :monsters
  has_many :players
  
  default_scope order('created_at DESC')
end
