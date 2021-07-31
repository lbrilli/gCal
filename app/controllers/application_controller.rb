class ApplicationController < ActionController::Base

    helper_method :current_user, :logged_in?

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def logged_in?
        !!current_user
    end

    def login(user)
        user.reset_session_token!
        session[:session_token] = user.session_token
        @current_user = user

    def log_out
        current_user.reset_session_token! if logged_in?
        session[:session_token] = nil
        @current_user = nil

    def require_logged_in
        unless logged_in?
            render json: { base: ['inavlid credentials'] }, status: 401

end
