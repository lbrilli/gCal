class Api::UsersController < ApplicationController
    
    def create
        @user = User.new(user_params)
        if @user.save
            log_in(@user)
            render "api/users/show" #up for debate... should I add a default calendar to each user? could a user show page really be a page of calendars?
        else
            render json: @user.errors.full_messages, status: 422
        end
    end


    private

    def user_params
        params.require(:user).permit(:email, :password)
    end
end
