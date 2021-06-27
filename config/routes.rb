Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  # put '/categories/:category_id/recipes/recipe:id', to: 'recipes#add_category'

  resources :users
  resources :recipes
  resources :categories, only: :index
end
