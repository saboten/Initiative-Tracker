class MonsterTemplate < ActiveRecord::Base
  attr_accessible :name, :ac, :fort, :ref, :will, :max_hp, :init_mod, :stat_block, :attacks_attributes
  has_many :attacks, :dependent => :destroy
  has_many :monsters, :dependent => :destroy
  has_attached_file :stat_block
  accepts_nested_attributes_for :attacks, :reject_if => lambda { |a| a[:name].blank? or a[:attack_mod].blank? }, :allow_destroy => true
  
  default_scope order('created_at DESC')
  
  validates :ac, :fort, :ref, :will, :max_hp, :init_mod, :numericality => { :only_integer => true, :greater_than_or_equal_to => 0 }
  validates :name, :presence => true
  
  def create_new_monster(descriptor = nil)
    prng = Random.new
    monster = Monster.create( :alias => descriptor.nil? ? read_attribute(:name) : "#{descriptor} #{read_attribute(:name)}", 
                              :current_hp => read_attribute(:max_hp), 
                              :monster_template_id => read_attribute(:id),
                              :initiative => prng.rand(1..20) + read_attribute(:init_mod))
    return monster
  end
end
