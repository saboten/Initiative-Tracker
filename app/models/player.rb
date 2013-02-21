class Player < ActiveRecord::Base
  attr_accessible :name, :notes, :ac, :fort, :ref, :will, :current_hp, :max_hp, :initiative
  
  validates :ac, :fort, :ref, :will, :max_hp, :numericality => { :only_integer => true, :greater_than_or_equal_to => 0 }
  validates :name, :presence => true
end
