class CategoriesController < ApplicationController
  before_action :authorize_request, only: [:index]

  # GET /categories
  def index
    @categories = Category.all

    render json: @categories
  end


end
