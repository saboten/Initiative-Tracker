class MonstersController < ApplicationController
  def show
    @monster = Monster.find(params[:id])
    render @monster
  end
  
  def edit_descriptor
    monster = Monster.find(params[:id])
    monster.descriptor = params[:descriptor]
    monster.save!
    render :text => monster.full_name
  end
end
