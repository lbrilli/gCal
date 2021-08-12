import React from "react";
import { Link } from "react-router-dom";

class EventShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = { name: '', time_date: '', ownerId: props.currentUser }
    }


    render() { 
        return (
            <div>
                this is an event show page
            </div>
        )
    }
}

export default EventShow;