InitiativeTracker::Application.routes.draw do
  resources :players

  #Monster Template routes
  resources :monster_templates
  post "/monster_templates/preview_image" => 'monster_templates#preview_image', :as => :preview_image
  
  resources :stat_blocks
  
  #Battle routes
  resources :battles
  post "/battles/:id/edit_name" => 'battles#edit_name', :as => :edit_battle_name
  post "/battles/:id/add_monsters" => 'battles#add_monsters', :as => :add_monsters
  post "/battles/:id/add_players" => 'battles#add_players', :as => :add_players
  post "/battles/:id/remove_creature" => 'battles#remove_creature', :as => :remove_creature
  post "/battles/:id/sync_order" => 'battles#sync_order', :as => :sync_order
  post "/battles/:id/update_active_creature" => 'battles#update_active_creature', :as => :update_active_creature
  post "/battles/:id/update_damage" => 'battles#update_damage', :as => :update_damage
  get "/battles/:id/order_by_initiative" => 'battles#order_by_initiative', :as => :order_by_initiative
  post "/battles/:id/full_heal_creature" => 'battles#full_heal_creature', :as => :full_heal_creature
  
  #Skill Challenge routes
  get "/skill_challenge" => 'skill_challenge#index', :as => :skill_challenge
  post "/skill_challenge/add_players" => 'skill_challenge#add_players', :as => :add_players_to_skill_challenge
  get "/skill_challenge/remove_player/:id" => 'skill_challenge#remove_player', :as => :remove_player_from_skill_challenge
  post "/skill_challenge/update_selected_players" => 'skill_challenge#update_selected_players', :as => :update_selected_players
  
  #Monster routes
  resources :monsters
  post "/monsters/:id/edit_alias" => 'monsters#edit_alias', :as => :edit_alias
  post "/monsters/:id/update_notes" => 'monsters#update_notes', :as => :update_notes

  root :to => 'battles#index'
  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  # root :to => 'welcome#index'

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id))(.:format)'
end
