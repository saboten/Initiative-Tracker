class Monster < ActiveRecord::Base
  attr_accessible :name, :descriptor, :notes, :ac, :fort, :ref, :will, :current_hp, :max_hp, :initiative, :stat_block
  has_attached_file :stat_block
  belongs_to :battle
  has_many :attacks
end
