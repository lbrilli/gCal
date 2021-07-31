class Api::UsersController < ApplicationController
    
    def create
        @user = User.new(user_params)
        if @user.save
            # login user
            render "api/calendars" #up for debate... should I add a default calendar to each user? could a user show page really be a page of calendars?
        else
            render :json @user.errors.full_messages, status: 422
    end


    private

    def user_params
        params.require(:user).permit(:username, :password)
    end
end
