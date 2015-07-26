namespace :data do
  desc "import data from files to database"
  task :import => :environment do
    file = File.read('temp.json')
    data = JSON.parse(file)
    data['rates']
  end
end