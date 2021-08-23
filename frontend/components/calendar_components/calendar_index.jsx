import React from 'react';
import { Link } from 'react-router-dom';

class CalendarIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.indexCalendars()
    }

    render () {
        console.log(this.props.calendars)
        return (
            <div>
                <h3>My calendars</h3>
                <ul>
                    {this.props.calendars.map(calendar => {
                        return (<li className="calendar-list-item">
                            <Link to={`/calendars/${calendar.id}`}><input type="checkbox"/>{calendar.name}</Link></li>)
                    })}
                </ul>
            </div>
        );
    }

}

export default CalendarIndex;