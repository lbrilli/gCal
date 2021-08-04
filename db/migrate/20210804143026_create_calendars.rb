class CreateCalendars < ActiveRecord::Migration[5.2]
  def change
    create_table :calendars do |t|
      t.integer :owner_id, null: false
      t.string :name, null: false
      t.string :timezone, null: false
      t.timestamps
    end
    add_index :calendars, :owner_id, unique: true
  end
end
