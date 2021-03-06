class ApplicationController < ActionController::Base

    before_action :underscore_params!
    helper_method :current_user, :logged_in?

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def logged_in?
        !!current_user
    end

    def log_in(user)
        user.reset_session_token!
        session[:session_token] = user.session_token
        @current_user = user
    end

    def log_out!
        current_user.reset_session_token! if logged_in?
        session[:session_token] = nil
        @current_user = nil
    end

    def require_logged_in
        unless logged_in?
            render json: { base: ['inavlid credentials'] }, status: 401
        end
    end

    def underscore_params!
    underscore_hash = -> (hash) do
        hash.transform_keys!(&:underscore)
        hash.each do |key, value|
        if value.is_a?(ActionController::Parameters)
            underscore_hash.call(value)
        elsif value.is_a?(Array)
            value.each do |item|
            next unless item.is_a?(ActionController::Parameters)
            underscore_hash.call(item)
            end
        end
        end
    end
    underscore_hash.call(params)
    end

end
