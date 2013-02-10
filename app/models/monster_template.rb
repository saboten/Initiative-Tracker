class MonsterTemplate < ActiveRecord::Base
  attr_accessible :name, :ac, :fort, :ref, :will, :max_hp, :init_mod, :stat_block, :attacks_attributes
  has_attached_file :stat_block
  has_many :attacks, :dependent => :destroy
  has_many :monsters, :dependent => :destroy
  accepts_nested_attributes_for :attacks, :reject_if => lambda { |a| a[:name].blank? or a[:attack_mod].blank? }, :allow_destroy => true
  
  default_scope order('created_at DESC')
  
  validates :ac, :fort, :ref, :will, :max_hp, :init_mod, :numericality => { :only_integer => true, :greater_than_or_equal_to => 0 }
  validates :name, :presence => true
end
