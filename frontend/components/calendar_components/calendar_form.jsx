import React from 'react';
import { Link } from 'react-router-dom';

class CalendarForm extends React.Component {
    constructor (props) {
        super (props)
        this.state = {name:'' , timezone:'', ownerId: props.currentUser}

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value})
    }

    handleSubmit(e) {
        e.preventDefault()
        const calendar = Object.assign({}, this.state)
        this.props.processForm(calendar)
    }

    renderErrors () {
        return (
            <ul>
                {this.props.errors.map((error,idx) => 
                <li key={`error-${idx}`}>
                    {error}
                </li>
                )}
            </ul>
        );
    }

    render () {
        return (
            <div className="calendar-signup-form">
                <form onSubmit={this.handleSubmit} className="calendar-create-form">
                    Create a new calendar:
                    <br />
                    <label>Name:
                        <input type="text" value={this.state.name} 
                            onChange={this.update('name')} className="form-field"/>
                    </label>
                    <br />
                    <label>Timezone:
                        <input type="text" value={this.state.timezone}
                            onChange={this.update('timezone')} className="form-field" />
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

export default CalendarForm;