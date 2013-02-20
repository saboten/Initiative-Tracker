class Monster < ActiveRecord::Base
  attr_accessible :descriptor, :notes, :current_hp, :initiative, :monster_template_id
  has_attached_file :stat_block
  belongs_to :battle
  belongs_to :monster_template
  delegate :name, :max_hp, :ac, :fort, :ref, :will, :stat_block, :attacks, :to => :monster_template, :allow_nil => true
  
  def full_name
    template = MonsterTemplate.find(read_attribute(:monster_template_id))
    name = read_attribute(:descriptor) + " " + template.name
    name.strip!
    return name
  end
  
  def id_string
    "creatures-monster_" + read_attribute(:id).to_s
  end
  
end
