import React from 'react';

class EventForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { name: '', time_date: '', ownerId: props.currentUser }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault()
        const event = Object.assign({}, this.state)
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
                        <input type="datetime" value={this.state.time_date}
                            onChange={this.update('timezone')} className="form-field" />
                    </label>
                    <br />
                    <label>Date:
                        <input type="datetime" value={this.state.time_date}
                            onChange={this.update('timezone')} className="form-field" />
                    </label>
                    <br />
                    {this.renderErrors()}
                    <br />
                    <input type="submit" value="Create" className="submit-button" />
                </form>
            </div>
        )
    }

}

export default EventForm;