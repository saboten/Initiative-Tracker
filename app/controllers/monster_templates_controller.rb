class MonsterTemplatesController < ApplicationController
  
  def index
    @monsters = MonsterTemplate.all
  end
  
  def new
    @monster_template = MonsterTemplate.new
    @new_attack = Attack.new
  end
  
  def create
    @monster_template = MonsterTemplate.create(params[:monster_template])
  end
end
