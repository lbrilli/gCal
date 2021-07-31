class User < ApplicationRecord
    validates :email, :password_digest, :session_token, presence: true
    validates :email, :uniqueness :true
    validates :password, length: { minimum: 8}, allow_nil: true

    after_intialize :ensure_session_token

    has_many :calendars,
        foreign_key: :owner_id,
        class: :calendar

    has_many :events,
        foreign_key: :owner_id,
        class: :event

    attr_reader :password

    def self.find_by_credentials(username, password)
    end

    def password=(password)
    end

    def is_password?(password)
    end

    def reset_session_token!
    end

    def ensure_session_token
    end

    
end
