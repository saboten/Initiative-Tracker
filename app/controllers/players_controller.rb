class PlayersController < ApplicationController
  def index
    @players = Player.all
  end
  
  def new
    @player = Player.new
  end
  
  def create
    if @player = Player.create(params[:player])
      @player.current_hp = @player.max_hp
      @player.save
      flash[:notice] = "Successfully created #{@player.name}"
      redirect_to players_path
    else
      render :action => 'new'
    end
  end
  
  def edit
    @player = Player.find(params[:id])
  end
  
  def update
    @player = Player.find(params[:id])
    if @player.update_attributes(params[:player])
      flash[:notice] = "Successfully updated #{@player.name}"
      redirect_to players_path
    else
      render :action => 'edit'
    end
  end
  
  def destroy
    @player = Player.find(params[:id])
    @player.destroy
    flash[:notice] = "Successfully destroyed player"
    redirect_to players_path
  end
end
