class MonsterTemplate < ActiveRecord::Base
  attr_accessible :name, :ac, :fort, :ref, :will, :max_hp, :init_mod, :stat_block
  has_attached_file :stat_block
  has_many :attacks
  accepts_nested_attributes_for :attacks
  
  default_scope order('created_at DESC')
end
