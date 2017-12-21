# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20130620174604) do

  create_table "attacks", :force => true do |t|
    t.string   "name"
    t.string   "damage_roll"
    t.integer  "attack_mod"
    t.integer  "monster_template_id"
    t.datetime "created_at",          :null => false
    t.datetime "updated_at",          :null => false
  end

  create_table "battles", :force => true do |t|
    t.string   "name"
    t.string   "active_creature"
    t.text     "initiative_order"
    t.datetime "created_at",       :null => false
    t.datetime "updated_at",       :null => false
  end

  create_table "monster_templates", :force => true do |t|
    t.string   "name"
    t.integer  "ac"
    t.integer  "fort"
    t.integer  "ref"
    t.integer  "will"
    t.integer  "max_hp"
    t.integer  "init_mod"
    t.string   "stat_block_file_name"
    t.string   "stat_block_content_type"
    t.integer  "stat_block_file_size"
    t.datetime "stat_block_updated_at"
    t.datetime "created_at",              :null => false
    t.datetime "updated_at",              :null => false
  end

  create_table "monsters", :force => true do |t|
    t.string   "alias"
    t.text     "notes"
    t.integer  "current_hp"
    t.integer  "initiative"
    t.integer  "battle_id"
    t.integer  "monster_template_id"
    t.datetime "created_at",          :null => false
    t.datetime "updated_at",          :null => false
  end

  create_table "players", :force => true do |t|
    t.string   "name"
    t.text     "notes"
    t.integer  "ac"
    t.integer  "fort"
    t.integer  "ref"
    t.integer  "will"
    t.integer  "current_hp"
    t.integer  "max_hp"
    t.integer  "initiative"
    t.datetime "created_at",    :null => false
    t.datetime "updated_at",    :null => false
    t.integer  "str"
    t.integer  "con"
    t.integer  "dex"
    t.integer  "int"
    t.integer  "wis"
    t.integer  "cha"
    t.integer  "acrobatics"
    t.integer  "arcana"
    t.integer  "athletics"
    t.integer  "bluff"
    t.integer  "diplomacy"
    t.integer  "dungeoneering"
    t.integer  "endurance"
    t.integer  "heal"
    t.integer  "history"
    t.integer  "insight"
    t.integer  "intimidate"
    t.integer  "nature"
    t.integer  "perception"
    t.integer  "religion"
    t.integer  "stealth"
    t.integer  "streetwise"
    t.integer  "thievery"
  end

  create_table "skill_challenges", :force => true do |t|
    t.text     "present_players"
    t.text     "selected_players"
    t.datetime "created_at",       :null => false
    t.datetime "updated_at",       :null => false
  end

end
