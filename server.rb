require 'sinatra'

require 'sinatra/activerecord'

require_relative 'lib/models/country'
require_relative 'lib/models/day'

configure do
  set :public_folder, File.expand_path('dist')
  set :database, {adapter: "sqlite3", database: "exchangeTracker.sqlite3"}
end

get '/api/countries' do
  content_type :json
  {countries: Country.all}.to_json
end

get '/api/days' do
    content_type :json
    {days: Day.where(country_code: params[:country_code])}.to_json
end

get '*' do
  send_file 'dist/index.html'
end