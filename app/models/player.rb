class Player < ActiveRecord::Base
  attr_accessible :name, :notes, :ac, :fort, :ref, :will, :current_hp, :max_hp, :initiative
  has_and_belongs_to_many :battles
end
