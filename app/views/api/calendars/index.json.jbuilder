json.array! @calendars do |calendar| 
    json.extract! calendar, :owner_id, :timezone, :name
end