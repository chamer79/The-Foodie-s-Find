# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Recipe.destroy_all
Category.destroy_all
User.destroy_all

#=============
#   User
#=============
@user = User.create!(username: 'meep', email: 'meep@email.com', password: '12345678')

puts "#{User.count} users created"


#=============
#  Category
#=============
@baking = Category.create!(name: 'Baking')
@savory = Category.create!(name: 'Savory')
@cocktails = Category.create!(name: 'Cocktails')

puts "#{Category.count} categories created"


#=============
#   Recipe
#=============
@test = Recipe.create!(name: 'Test Cookie', prep_time: 'Short amount of time', baking_cooking_time: 'FOREVER', servings: 'A metric butt ton', directions: 'Put the lime in the coconut.  Shake it all around. Bake at 375 degrees for 15 minutes', ingredients: '1# of this a dash of that')

puts "#{Recipe.count} recipes created"