class Monster < ActiveRecord::Base
  attr_accessible :descriptor, :notes, :current_hp, :initiative
  has_attached_file :stat_block
  belongs_to :battle
  belongs_to :monster_template
  
  def max_hp
    parent_attribute(:max_hp)
  end
  
  def ac
    parent_attribute(:max_hp)
  end
  
  def fort
    parent_attribute(:max_hp)
  end
  
  def ref
    parent_attribute(:max_hp)
  end
  
  def will
    parent_attribute(:max_hp)
  end
  
  def stat_block
    parent_attribute(:stat_block)
  end
  
  def attacks
    parent_attribute(:attacks)
  end
  
  def parent_attribute(attribute)
    monster_template_id = read_attribute(:monster_template_id)
    unless monster_template_id.nil?
      return MonsterTemplate.find(monster_template_id).send(attribute)
    else
      return ""
    end
  end
end
