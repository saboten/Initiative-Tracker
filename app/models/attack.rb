class Attack < ActiveRecord::Base
  attr_accessible :name, :damage_roll, :attack_mod
  belongs_to :monster_template
end
