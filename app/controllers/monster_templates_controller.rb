class MonsterTemplatesController < ApplicationController
  require 'fileutils'
  
  def index
    @monsters = MonsterTemplate.all
  end
  
  def new
    @monster_template = MonsterTemplate.new
    @new_attack = Attack.new
  end
  
  def create
    if @monster_template = MonsterTemplate.create(params[:monster_template])
      flash[:notice] = "Successfully created #{@monster_template.name}"
      redirect_to monster_templates_path
    else
      render :action => 'new'
    end
  end
  
  def edit
    @monster_template = MonsterTemplate.find(params[:id])
    @new_attack = Attack.new
    @attacks = @monster_template.attacks
  end
  
  def update
    @monster_template = MonsterTemplate.find(params[:id])
    if @monster_template.update_attributes(params[:monster_template])
      flash[:notice] = "Successfully updated #{@monster_template.name}"
      redirect_to monster_templates_path
    else
      render :action => 'edit'
    end
  end
  
  def destroy
    @monster_template = MonsterTemplate.find(params[:id])
    @monster_template.destroy
    flash[:notice] = "Successfully destroyed monster"
    redirect_to monster_templates_path
  end
  
  def preview_image
    tmp = params[:file].tempfile
    file = File.join("public", "preview_image.png")
    FileUtils.cp tmp.path, file
    render :partial => "preview_image"
  end
end
