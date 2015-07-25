require 'net/http'
require 'json'
require 'pry'

uri = URI.parse('https://openexchangerates.org/api/latest.json?app_id=926356a8ee584b54aaefb3e3f1b55644')
http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

response = http.request(request)
data = JSON.parse(response.body)

File.open("temp.json","w") do |f|
  f.write(data.to_json)
end

file = File.read('temp.json')
data = JSON.parse(file)
binding.pry