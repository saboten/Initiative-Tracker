class Monster < ActiveRecord::Base
  attr_accessible :alias, :notes, :current_hp, :initiative, :monster_template_id
  has_attached_file :stat_block
  belongs_to :battle
  belongs_to :monster_template
  delegate :name, :max_hp, :ac, :fort, :ref, :will, :stat_block, :attacks, :to => :monster_template, :allow_nil => true
  
  validates :alias, :presence => true
  
end
