class MonsterTemplate < ActiveRecord::Base
  attr_accessible :name, :ac, :fort, :ref, :will, :max_hp, :init_mod
  has_many :attacks
end
