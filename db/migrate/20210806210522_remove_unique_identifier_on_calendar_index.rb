class RemoveUniqueIdentifierOnCalendarIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :calendars, :owner_id
    add_index :calendars, :owner_id
  end
end
