require "json"

namespace :data do
  desc "import data from files to database"
  task :import do
    file = File.read('temp.json')
    dataCurr = JSON.parse(file)
    file2 = File.read('names.json')
    names = JSON.parse(file2)
    dataCurr['rates'].each do |country_code, rate|
        time = Time.new
        c = Country.new
        c.country_code = country_code
        c.rate = rate
        c.date = time.strftime("%Y-%m-%d")
        c.name = names[country_code]
        c.save
    end
  end

  desc "add days data to the database"
  task :addDay, [:date] do |t, args|
    file2 = File.read('names.json')
    names = JSON.parse(file2)

    uri = URI.parse('https://openexchangerates.org/api/historical/'+args[:date]+'.json?app_id=926356a8ee584b54aaefb3e3f1b55644')
    http = Net::HTTP.new(uri.host, uri.port)
    http.use_ssl = true

    request = Net::HTTP::Get.new(uri.request_uri)

    response = http.request(request)
    data = JSON.parse(response.body)

    data['rates'].each do |country_code, rate|
        c = Day.new
        c.country_code = country_code
        c.rate = rate
        c.date = args[:date]
        c.save
    end


  end
end






