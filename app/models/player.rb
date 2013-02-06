class Player < ActiveRecord::Base
  attr_accessible :name, :notes, :ac, :fort, :ref, :will, :current_hp, :max_hp, :initiative
  belongs_to :battle
end
