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
        user = User.find_by(username: username)
        if user && user.is_password?(password)
            user
        else
            nil
        end
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        password_object = BCrypt::Password.new(self.password_digest)
        password_object.is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save
        self.session_token
    end

    def ensure_session_token
        self.session_token ||=SecureRandom::urlsafe_base64
    end


end
