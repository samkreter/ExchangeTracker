require 'sinatra'
require 'pry'

require 'sinatra/activerecord'

require_relative 'lib/models/country'
require_relative 'lib/models/day'

configure do
  set :public_folder, File.expand_path('dist')
  set :database, {adapter: "sqlite3", database: "exchangeTracker.sqlite3"}
end

get '/api/countries' do
  content_type :json
  binding.pry
end

get '*' do
  send_file 'dist/index.html'
end