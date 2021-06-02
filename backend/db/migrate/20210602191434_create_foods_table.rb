class CreateFoodsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :foods do |t|
      t.string :text
      t.integer :meal_id
    end
  end
end
