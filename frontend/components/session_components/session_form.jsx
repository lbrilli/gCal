import React from 'react'

class SessionForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {email: '', password: ''}
    
        this.handlesSubmit = this.handlesSubmit.bind(this)
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value})
    }

    handlesSubmit(e) {
        e.preventDefault()
        const user = Object.assign({}, this.state)
        this.props.processForm(user)
    }

    renderErrors () {
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

    render () {
        return (
            <div className="login-signup-form">
                <form onSubmit={this.handlesSubmit} className="login-signup-box">
                    {this.props.formType} <br /> to continue to gCal
                    <br />
                    <label>Email:
                        <input type="text" value ={this.state.email} 
                            onChange={this.update('email')} className="form-field"/>
                    </label>
                    <br />
                    <label >Password:
                        <input type="password" value={this.state.password}
                            onChange={this.update('password')} className="form-field" />
                    </label>
                    <br />
                        {this.renderErrors()}
                    <br />
                    <input type="submit" value={this.props.formType} className="submit-button" />
                    <br />
                </form>
            </div>
        )
    }
}

export default SessionForm;