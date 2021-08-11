class Event < ApplicationRecord

    belongs_to :calendar,
    foreign_key: :calendar_id,
    class_name: :Calendar

    has_one :owner,
    foreign_key: :owner_id,
    class_name: :User 
end
