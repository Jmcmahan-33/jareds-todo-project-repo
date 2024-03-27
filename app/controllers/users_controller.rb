class UsersController < ApplicationController
    # skip_before_action :authorize, only: [:create]
    # show all users 
    def index
        render json: User.all
    end
    # create a user and test in postman
    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end



    private 
    def user_params 
        params.permit(:username, :password) 
    end
end
