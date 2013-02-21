module BattlesHelper
  
  def creature_id_string(creature)
    "creatures-"+ creature.class.to_s.downcase + "_" + creature.id.to_s
  end
  
  def highlight_alias(creature)
    creature.alias.sub(creature.name) {|s| '<span style="font-weight: normal; text-decoration: none;">' + s + '</span>'}
  end
  
  def creature_block_class(creature, battle)
    if creature_id_string(creature) == battle.active_creature
      return "creature_block active_creature_block"
    else
      return "creature_block"
    end
  end
  
  def creature_hp_class(creature)
    return "creature_block_hp temp_creature_hp" if creature.current_hp > creature.max_hp
    return "creature_block_hp" if creature.current_hp > (creature.max_hp / 2)    
    return "creature_block_hp hurt_creature_hp" if (1..(creature.max_hp / 2)) === creature.current_hp
    return "creature_block_hp dead_creature_hp" if creature.current_hp <= 0
  end
  
  def creature_list_item_data(creature)
    return {:url => monster_path(:id => creature.id), 
            :full_name => creature.alias, 
            :type => "monster"} if creature.is_a? Monster
    return {:full_name => creature.name, 
            :type => "player"} if creature.is_a? Player
  end
  
  def creature_name_cell(creature)
    return  content_tag "td",
            highlight(creature.alias,creature.name),
            :colspan => 4,
            :class => "creature_block_full_name monster_block_full_name",
            :data => {:target_id => creature_id_string(creature)} if creature.is_a? Monster
    return  content_tag "td",
            "* " + creature.name,
            :colspan => 4,
            :class => "creature_block_full_name player_block_full_name",
            :data => {:target_id => creature_id_string(creature)} if creature.is_a? Player
  end
end
