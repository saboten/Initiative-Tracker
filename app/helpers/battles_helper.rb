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
  
  def monster_hp_class(monster)
    return "creature_block_hp" if monster.current_hp > (monster.max_hp / 2)    
    return "creature_block_hp hurt_monster_hp" if (1..(monster.max_hp / 2)) === monster.current_hp
    return "creature_block_hp dead_monster_hp" if monster.current_hp <= 0
  end
end
