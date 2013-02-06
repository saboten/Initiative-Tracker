class BattlesController < ApplicationController
  def index
    @battles = Battle.all
  end
  
  def new
    battle = Battle.create(:name => "New Battle")
    redirect_to battle_path(:id => battle.id)
  end
  
  def show
    @battle = Battle.find(params[:id])
    #TODO Add battle-not-found code here
  end
  
  def edit_name
    battle = Battle.find(params[:id].delete("battle_name_"))
    battle.name = params[:name]
    battle.save!
    render :text => battle.name
  end
end
