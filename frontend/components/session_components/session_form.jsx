import React from 'react'

class SessionForm extends React.Component {
    constructor(props){
        super(props)
        this.state = { email: '', password: ''}
    
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
        );
    }

    render () {
        return (
            <div className="login-signup-form">
                <form onSubmit={this.handlesSubmit} className="login-signup-box">
                    {this.props.formType} <br /> to continue to gCal
                    <br />
                    <label>Email:
                        <input type="text" />
                    </label>
                    {/* render errors below boxes and above button */}
                    {/* button here */}
                    {/* link to other option */}
                </form>
            </div>
        )
    }
}

export default SessionForm;