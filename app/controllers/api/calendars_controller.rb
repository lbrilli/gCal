class Api::CalendarsController < ApplicationController
    def create
        @calendar = Calendar.new(calendar_params)
        @calendar.owner_id = params[:calendar][:owner_id]
        if @calendar.save
            render "api/calendar/#{@calendar.id}"
        else
            render json: ["Invalid username/password combination"], status: 401
        end
    end

    def destroy
        @calendar = Calendar.find(params[:id])
        if current_user.id == @calendar.owner_id
            @calendar.destroy
            render "api/calendars"
        end
    end

    def show
        @calendar - Calendar.find(params[:id])
        render api_calendar(@calendar.id)
    end

    def index
        @calendars = Calendar.all.select{|calendar| calendar.owner_id == current_user.id}
        render "api/calendars/index"

    end

    def calendar_params
        params.require(:calendar).permit(:name, :timezone)
    end
end
