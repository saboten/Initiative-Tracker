class MonstersController < ApplicationController
  def show
    @monster = Monster.find(params[:id])
    render @monster
  end
end
