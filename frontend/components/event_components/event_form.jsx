import React from 'react';
import { Link } from 'react-router-dom';

class EventForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { name: '', time:'', date: '', ownerId: props.currentUser, calendarId: props.calendarId}

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault()
        const event = {
            name: this.state.name, 
            dateTime: new Date(this.state.date + 'T' + this.state.time), 
            ownerId: this.state.ownerId, 
            calendarId: this.state.calendarId
        }
        this.props.processForm(event)
    }


    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, idx) =>
                    <li key={`error-${idx}`}>
                        {error}
                    </li>
                )}
            </ul>
        );
    }

    render() {


        return (
            <div className="event-signup-form">
                <form onSubmit={this.handleSubmit} className="event-create-form">
                    Create a new event:
                    <br />
                    <label>Name:
                        <input type="text" value={this.state.name}
                            onChange={this.update('name')} className="form-field" />
                    </label>
                    <br />
                    <label>Time:
                        <input type="text" value={this.state.time}
                            onChange={this.update('time')} className="form-field" />
                    </label>
                    <br />
                    <label>Date:
                        <input type="text" value={this.state.date}
                            onChange={this.update('date')} className="form-field" />
                    </label>
                    <br />
                    {this.renderErrors()}
                    <br />
                    <input type="submit" value="Create" className="submit-button" />
                </form>
                <br />
                <Link to="/calendars/1">back to calendar</Link>
            </div>
        )
    }

}

export default EventForm;