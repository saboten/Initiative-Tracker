class BattlesController < ApplicationController
  helper BattlesHelper
  layout 'battle', :only => :show
  def index
    @battles = Battle.all
  end
  
  def new
    battle = Battle.create(:name => "New Battle", :initiative_order => [])
    redirect_to battle_path(:id => battle.id)
  end
  
  def show
    @battle = Battle.find(params[:id])
    @monsters = MonsterTemplate.all
    @title = @battle.name
    #TODO Add battle-not-found code here
  end
  
  def edit_name
    battle = Battle.find(params[:id])
    battle.name = params[:name]
    battle.save!
    render :text => battle.name
  end
  
  def add_monsters
    @battle = Battle.find(params[:id])
    monster_types = params[:monsters]
    monster_types.each_pair do |k,v|
      value = v.to_i
      if value > 0
        template = MonsterTemplate.find(k)
        if value == 1
          new_monster = template.create_new_monster()
          @battle.initiative_order.push(new_monster.id_string)
          @battle.monsters.push(new_monster)
        else
          value.times do |i|
            case i%5
            when 0
              new_monster = template.create_new_monster("Red")
            when 1
              new_monster = template.create_new_monster("Blue")
            when 2
              new_monster = template.create_new_monster("Green")
            when 3
              new_monster = template.create_new_monster("Yellow")
            when 4
              new_monster = template.create_new_monster("Black")
            end
            @battle.initiative_order.push(new_monster.id_string)
            @battle.monsters.push(new_monster)
          end
        end
      end
    end
    @battle.save!
    render :partial => "initiative_order"
  end
  
  def sync_order
    @battle = Battle.find(params[:id])
    @battle.initiative_order = params[:creatures]
    @battle.save!
    render :nothing => true
  end
  
  def update_active_creature
    @battle = Battle.find(params[:id])
    @battle.active_creature = params[:active_creature]
    @battle.save!
    render :nothing => true
  end
  
  def update_damage
    @battle = Battle.find(params[:id])
    damage = params[:damage].to_i
    params[:creatures].each do |c|
      monster_id = c.delete("a-z_-")
      monster = Monster.find(monster_id)
      monster.current_hp -= damage
      monster.save!
    end
    render :partial => "initiative_order"
  end
end
