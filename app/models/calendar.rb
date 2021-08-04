class Calendar < ApplicationRecord
    validates :owner_id, presence: true, uniqueness: true

    belongs_to :user,
    foreign_key: :owner_id,
    class_name: :User

    has_many :events,
    foreign_key: :calendar_id,
    class_name: :Event

end
