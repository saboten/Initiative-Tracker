class MonstersController < ApplicationController
  def show
    @monster = Monster.find(params[:id])
    render @monster
  end
  
  def edit_alias
    monster = Monster.find(params[:id])
    monster.alias = params[:alias]
    monster.save
    render :text => monster.alias
  end
  
  def update_notes
    monster = Monster.find(params[:id])
    monster.notes = params[:notes]
    monster.save
    render :nothing => true
  end
end
