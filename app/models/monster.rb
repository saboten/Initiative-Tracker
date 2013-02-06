class Monster < ActiveRecord::Base
  attr_accessible :name, :descriptor, :notes, :ac, :fort, :ref, :will, :current_hp, :max_hp, :initiative
  belongs_to :battle
  has_many :attacks
end
