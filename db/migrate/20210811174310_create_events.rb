class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.integer :owner_id, null:false
      t.integer :calendar_id, null: false
      t.string :name, null: false
      t.datetime :date_time, null: false
      t.timestamps
    end

    add_index :events, :owner_id
    add_index :events, :calendar_id
  end
end
