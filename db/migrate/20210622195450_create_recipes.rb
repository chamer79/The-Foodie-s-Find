class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :prep_time
      t.string :baking_cooking_time
      t.string :servings
      t.string :directions

      t.timestamps
    end
  end
end
