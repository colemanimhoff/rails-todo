Rails.application.routes.draw do
  namespace :v1 do
    resources :todos
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
