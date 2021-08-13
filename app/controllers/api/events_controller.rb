class Api::EventsController < ApplicationController

    def create
        @event = Event.new(event_params)
        if @event.save
            render "api/events/#{@event.id}"
        else
            render json: ["required fields must not be blank"], status: 401
        end
    end

    def update
        @event = Event.find(params[:id])
        if @event.update(event_params)
            render "api/event/#{@event.id}"
        else
            render "/events/new"
        end
    end

    def destroy
        @event = Event.find(params[:id])
        if current_user.id == @event.owner_id
            @event.destroy
            render "api/events"
        end
    end

    def show
        @event - Event.find(params[:id])
        render "api/events/#{@event.id}"
    end

    def event_params
        params.require(:event).permit(:name, :date_time, :owner_id, :calendar_id)
    end
end
