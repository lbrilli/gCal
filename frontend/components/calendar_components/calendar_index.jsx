import React from 'react';

const CalendarIndex = ({ calendars }) => (
    <div>
        <h3>My calendars</h3>
            <ul>
                {calendars.map(calendar => 
                    <li>
                        {calendar.name}
                    </li>
                )}
            </ul>
    </div>
);

export default CalendarIndex;