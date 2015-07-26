class CreateCountries < ActiveRecord::Migration
    def change
        create_table :countries do |t|
            t.string :country_code
            t.string :name
            t.float :rate
            t.date :date
        end
    end
end
