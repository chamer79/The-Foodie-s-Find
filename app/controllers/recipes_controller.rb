class RecipesController < ApplicationController
  before_action :set_recipe, only: [:show, :update, :destroy, :add_category]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /recipes
  def index
    @recipes = Recipe.all

    render json: @recipes
  end

  # GET /recipes/1
  def show
    render json: @recipe, include: :categories
  end

  # POST /recipes
  def create
    @recipe = Recipe.new(recipe_params)
    @recipe.user = @current_user

    if @recipe.save
      render json: @recipe, status: :created
    else
      render json: @recipe.errors, status: :unprocessable_entity
    end
  end

  # PUT /recipes/1
  def update
    if @recipe.update(recipe_params)
      render json: @recipe
    else
      render json: @recipe.errors, status: :unprocessable_entity
    end
  end

  # DELETE /recipes/1
  def destroy
    @recipe.destroy
  end

  def add_category
    @category = Category.find(params[:category_id])
    @category.recipes << @recipe

    render json: @recipe, include: :categories
  end

  private
    def set_recipe
      @recipe = Recipe.find(params[:id])
    end

    def recipe_params
      params.require(:recipe).permit(:name, :type_id, :prep_time, :baking_cooking_time, :servings, :ingredients, :directions)
    end
end
