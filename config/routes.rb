Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :calendars, only: [:create, :destroy, :show, :index]
    resources :events, only: [:create, :update, :destroy, :show, :index]
  end

  root to: 'static_pages#root'
end
