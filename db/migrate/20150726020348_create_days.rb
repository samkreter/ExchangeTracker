class CreateDays < ActiveRecord::Migration
  def change
    create_table :days do |t|
        t.string :country_code
        t.float :rate
        t.date :date
    end
  end
end
