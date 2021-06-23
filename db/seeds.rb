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

@english = Recipe.create!(name: 'English Muffins', 
  prep_time: '30 minutes + 1 day', 
  baking_cooking_time: '4 minutes per side of muffin', 
  servings: '12-16 English Muffins', 
  directions: '-In a mixing bowl, combine the yeast, sugar, and water; stir with a whisk.
  -Let the mixture sit for 5 minutes to allow the yeast to bloom.
  -Add, in order, flour, butter, and salt.
  -With a hook attachment, mix on low speed till the ingredients are incorporated. Mix on medium speed for 3-5 minutes.
  -Place dough in a lightly oiled covered bowl, and place in the fridge overnight.  This will make it easier to roll out and handle the dough.
  -On a we floured counter, roll out the dough to ¼ in thick.
  -With a 3-inch ring cutter, cut out the muffins and through away the scraps.
  -Cook the muffins 4 minutes per side on a 350 degree electric griddle.
  ', 
  ingredients: '1lb 12oz AP flour
  1/2oz salt
  1/4oz sugar
  1/4oz butter, room temperature
  1/4oz dry yeast
  2 1/4c water, body temperature
  ')
@soup_dumpling = Recipe.create!(name: 'Pork Soup Dumplings', 
  prep_time: '1 day + 3 hours', 
  baking_cooking_time: '8-10 minutes', 
  servings: '24 dumplings', 
  directions: 'Pork Jelly: 
  -Bring a pot of water to a boil. Place pork skin in the boiling water and cook for 1 minute.
  -Turn the heat off and allow contents to cool for 10-15 minutes.
  -Remove the pork skin from the pot and dump the water. While still warm, scrap off excess fat and hair from the skin. Cut the skin into thin strips.
  -Place 1 liter of water in the pot and bring to a boil. Place the pork skin, 2 scallions, sliced ginger, and Chinese cooking wine into the boiling water. Cover and allow to simmer for 20 minutes.
  -Turn off heat and allow contents to cool for 10-15 minutes. Remove the scallions and ginger.
  -In a blender, blend the pork skin and water for 2 minutes. Strain into a container.  Cover the container and place in the fridge overnight.
  
  Dumpling Dough:
  -In a bowl, combine the flour and 100ml of water till the ingredients are combines.
  -Transfer the dough to the counter and knead for 10-15 minutes.
  -Cover the dough and set aside while making the filling.
  
  Pork Filling: 
  -In a blow, mix ground pork, ginger, scallions, oyster sauce, white pepper, salt, sugar, and sesame oil for 3 minutes or until all ingredients are fully combined.
  -Add the pork jelly and stir until fully incorporated.
  
  Assembly:
  -Roll the dough out into a 1-inch diameter strip.
  -Cut the strip into about 1 ½ inch pieces. Cover the pieces with a clean kitchen towel to prevent the dough from drying out.
  -Roll a piece of dough into a circle, about 1/8 thickness. Place filling into the wrapper and pinch shut.
  -Set the dumpling aside in a lightly floured area while continuing to make dumplings.
  -Cook the dumplings in a bamboo steamer for 8-10 minutes.
  -Any uncooked dumplings can be frozen.
  ', 
  ingredients: '250gr pork skin
  1 liter water
  1Tbsp Chinese cooking wine
  5gr ginger, sliced
  2 scallion, cut ends
  200gr AP flour
  100ml water
  1lb ground pork 
  160gr pork jelly, small cubes
  9gr scallions, sliced thin
  9gr ginger, diced
  1/8tsp white pepper
  4 1/2tsp oyster sauce
  1/2tsp salt
  1tsp sugar
  1tsp sesame oil
  ')
@kalamata_martini = Recipe.create!(name: 'Kalamama Martini', 
  prep_time: '5 minutes', 
  baking_cooking_time: 'N/A', 
  servings: '1', 
  directions: '-Add all ingredients into a mixing glass with ice. Stir until well-chilled.
  -Strain contents into a chilled martini, Nick & Nora, or desired cocktail glass.
  -Garnish with a 2-3 kalamata olives.', 
  ingredients: '2 1/2oz gin
  1/2oz dry vermouth
  1/2oz kalamata olive brine
  1/4oz lemon juice')
@coffee_cake = Recipe.create!(name: 'Mum’s Coffee Cake ', 
  prep_time: '45 minutes', 
  baking_cooking_time: '1-1 1/2 hours', 
  servings: '1 loaf', 
  directions: '-Combine the flour, baking powder, baking soda, and salt together and set aside.
  -Combine the light brown sugar and cinnamon together and set aside.
  -In a bowl, mix the sugar and butter until light in color and fluffy.
  -Add the eggs and vanilla extract. Mix till all ingredients are fully combined.
  -Add the flour mixture and sour cream in parts to the egg mixture alternating between the two, starting with dry and ending with dry. Dry -> sour cream – > dry – > sour cream –> dry.  
  -In a loaf pan, place ¾ of the batter and spread evenly. Add ½ of the light brown sugar mix evenly on top of the batter.  Add remaining batter and spread evenly.  Add remaining light brown sugar mix on top.
  -Bake at a 375 degree oven for 1 1 ½ hours.', 
  ingredients: '3c AP flour
  1 1/2tsp baking powder
  1 1/2tsp baking soda
  3/4tsp salt
  6oz butter, room temperature
  1 1/2tsp vanilla extract
  3 eggs, room temperature
  1 1/2c sour cream
  1/2c light brown sugar
  1Tbsp ground cinnamon')
@croque = Recipe.create!(name: 'Croque Madame', 
  prep_time: '30-40 minutes', 
  baking_cooking_time: '5 minutes', 
  servings: '2 sandwiches', 
  directions: 'Bechamel: 
  -Add 2 Tbsp of butter to a pot and melt till it begins to bubble.
  -Add the flour and, whit a whisk, combine the two ingredients together. Continue to whisk for 2 minutes, not allowing the flour mixture to turn brown.
  -Slowly add the milk, while whisking, making sure that there are no lump. Add the herbs and spices. Cook for 10-15 minutes till mixture thickens and starts to bubble, while occasionally stirring.  
  
  -Preheat the oven to 425 degress.
  -Spread the Dijon mustard to 2 slices of bread.  Add 3 slices of ham and 1 slice of Gruyere on top of the mustard. Place the bare slice of bread on top of the cheese.
  -With the remaining butter, cook the sandwich as you would a grilled cheese sandwich.
  -Place both grilled ham and cheese sandwiches on an aluminum lined sheet tray.  Generously spread the bechamel on top of each sandwich and place a slice of Gruyere over the bechamel.
  -Place sheet tray in the oven for 5 minutes.
  -While the sandwiches are in the oven, cook a sunny-up egg.
  -Remove the sandwiches from the oven and place them on a plate. 
  -Very gingerly, place the sunny-up bird on top of the sandwich.', 
  ingredients: '1 1/2 cups milk
  5 Tbsp unsalted butter, divided
  2 Tbsp AP flour
  1/2 tsp salt
  1 pinch nutmeg
  1 bay leaf
  1 tsp thyme
  ¼ tsp rosemary
  ¼ tsp marjoram 
  1 Tbsp grated Parmesan cheese
  4 slices sourdough bread
  2 Tbsp Dijon mustard, divide
  4 slices of Gruyere cheese, divide
  6 thin slices of Black Forest ham, divide
  2 eggs')
@ricotta = Recipe.create!(name: 'Ricotta', 
  prep_time: '5 minutes ', 
  baking_cooking_time: '20-30 minutes', 
  servings: '1 1/2qt', 
  directions: '- Line a large colander or sieve with 4 layers of cheesecloth. Set aside.
  - Heat milk, buttermilk, heavy cream, and salt in a large, heavy saucepan over medium-low heat. Stir occasionally for the first 10 minutes. Continue heating, without stirring, until the temperature reaches 190 degrees. Remove from heat and let stand for 1 hour. The mixture will be separated into white curds and clear whey.
  -Using a slotted spoon, ladle approximately 1/4 of the curds into the cheesecloth-lined colander. Gather up the corners of the top cheesecloth and secure closed with a zip tie. Repeat the process till you there are no more curds remaining in the whey. (Save the whey for future cooking endeavors.) Suspend the cheeses over a large wooden spoon over a large bowl, place in the fridge, and let drain overnight.', 
  ingredients: '2qts whole milk
  1pt buttermilk
  1c heavy cream
  1 1/2tsp salt')
@tonic = Recipe.create!(name: 'Honeydew-Basil G&T', 
  prep_time: '15 minutes', 
  baking_cooking_time: '30 minutes', 
  servings: '1 drink + 1 gallon of shrub', 
  directions: '
  G&T
  -Fill a rocks glass ¾ of the way with ice.
  -Add all ingredients into the rocks glass. Stir. Sip.

  Honeydew-Basil Shrub
  -Blend honeydew and basil until smooth.
  -Place all ingredients into a pot; cook on low heat until the sugar is fully dissolved.
  -Strain and chill.', 
  ingredients: '2 1/2oz gin
  1 1/2oz tonic
  1 1/2oz honeydew-basil shrub
  
  Honeydew-Basil Shrub
  1 honeydew
  1c basil
  4c sugar
  4c water
  3/4c apple cider vinegar
  3/4c white vinegar')
@cookie = Recipe.create!(name: 'Salty Chocolate Chippers', 
  prep_time: '30 minutes', 
  baking_cooking_time: '10-12 minutes', 
  servings: '4 dozen', 
  directions: '-In a large bowl, whisk together the flour, salt, and baking soda. Set aside.
  -Beat together the butter and sugars until light in color and fluffy. Scrape down the bowl and add in the eggs and vanilla until completely incorporated. 
  -Add in half of the flour, mix for 15 seconds on high speed, then add in the rest of the flour gradually. Add the chocolate chips at the end. Cover the bowl and chill in the refrigerator for at least 6 hours.
  -Pre-heat the oven to 375 degrees F. Line two baking sheets. Scoop out the cookie dough, or roll the dough into a ball the size of 2 tablespoons. Place them on the prepared baking sheets about 1 inch apart and press down just slightly with your palm. Bake for 10-12 minutes, rotating the pans halfway through baking, until the edges of the cookies are golden brown, and the tops just start to darken.', 
  ingredients: '2 1/4c AP flour
  1Tbsp salt
  1tsp baking soda
  8oz butter
  1c dark brown sugar
  1/2c sugar
  2 eggs
  2tsp vanilla extract
  1lb mini chocolate chips')
@beatrix = Recipe.create!(name: 'The Beatrix', 
  prep_time: '10 minutes', 
  baking_cooking_time: '2 hrs', 
  servings: '1 drink + 1qt candied kalamata olives with syrup', 
  directions: '-In a shaker, add the ice, tequila, orange liquor, lime juice, grapefruit juice, and kalamata syrup and shake.
  -Strain contents into a Tom Collins glass.  Add ice and a splash of club soda.
  -Garnish with 2 candied kalamata olives.
  
  Candied Kalamata Olive Syrup
  -In a pot, bring the sugar and water to a simmer.
  -Add the olives (with some brine) and turn the heat to low.  Let the contents simmer for 2 hours or until the olives become prune-like. Add more water if the liquid becomes too thick.', 
  ingredients: '2oz blanco tequila
  1/2oz Pierre Ferrand Dry Curacao, or any smokey orange liquor
  1oz lime juice
  1/2oz grapefruit juice
  3/4oz candied kalamata syrup
  Splash club soda
  
  Candied Kalamata Olive Syrup
  20oz sugar
  20oz water
  1 1/2c kalamata olives, pitted' )


puts "#{Recipe.count} recipes created"