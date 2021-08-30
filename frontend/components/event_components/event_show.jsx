import React from "react";
import { Link } from "react-router-dom";

class EventShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = { name: '', timeDate: '', ownerId: props.currentUser }
    }


    render() { 
        return (
            <div>
                <h1>Hello</h1>
                {this.state.name}
                {this.state.timeDate}
            </div>
        )
    }
}

export default EventShow;