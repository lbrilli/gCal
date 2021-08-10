import React from "react";
import CalendarsContainer from './calendar_index_container'
import { Link } from "react-router-dom";

class CalendarShow extends React.Component {
    constructor (props) {
        super (props)
        this.state = {name:'', timezone:'', ownerId: props.currentUser}
    }

    render () {
        return (
            <>
                <div class="small-calendar">
                    <button className="create">+ Create</button>
                    <div className="month">
                        August 2021
                    </div>

                    <div className="weekday">
                        <div>SUN</div>
                        <div>MON</div>
                        <div>TUE</div>
                        <div>WED</div>
                        <div>THUR</div>
                        <div>FRI</div>
                        <div>SAT</div>
                    </div>

                    <div className="date">
                        {/* refactor as for loop that takes in month number, days, year, etc. */}
                        <button time datetime="2021-08-01"className="small-calendar-button">1</button>
                        <button time datetime="2021-08-02">2</button>
                        <button time datetime="2021-08-03">3</button>
                        <button time datetime="2021-08-04">4</button>
                        <button time datetime="2021-08-05">5</button>
                        <button time datetime="2021-08-06">6</button>
                        <button time datetime="2021-08-07">7</button>
                        <button time datetime="2021-08-08">8</button>
                        <button time datetime="2021-08-09">9</button>
                        <button time datetime="2021-08-10">10</button>
                        <button time datetime="2021-08-11">11</button>
                        <button time datetime="2021-08-12">12</button>
                        <button time datetime="2021-08-13">13</button>
                        <button time datetime="2021-08-14">14</button>
                        <button time datetime="2021-08-15">16</button>
                        <button time datetime="2021-08-17">17</button>
                        <button time datetime="2021-08-18">18</button>
                        <button time datetime="2021-08-19">19</button>
                        <button time datetime="2021-08-20">20</button>
                        <button time datetime="2021-08-21">21</button>
                        <button time datetime="2021-08-22">22</button>
                        <button time datetime="2021-08-23">23</button>
                        <button time datetime="2021-08-24">24</button>
                        <button time datetime="2021-08-25">25</button>
                        <button time datetime="2021-08-26">26</button>
                        <button time datetime="2021-08-27">27</button>
                        <button time datetime="2021-08-28">28</button>
                        <button time datetime="2021-08-29">29</button>
                        <button time datetime="2021-08-30">30</button>
                        <button time datetime="2021-08-31">31</button>
                    </div>

                    <div className="calendar-index">
                        <CalendarsContainer />
                        <br />
                        <Link to="/calendars/new" className="new-calendar-button">+ New Calendar</Link>
                    </div>


                </div>

                <div className="main-calendar">
                    <div class="day-header">
                    </div >

                    <div className="time-and-hours">
                        <div className="time-column">
                            <div className="time-column-title">GMT-6
                                <div>1 AM</div>
                                <div>2 AM</div>
                                <div>3 AM</div>
                            </div>
                        </div>

                            {/* give each div for 7 days same class to perform styling */}
                        <div className="single-hours-column">
                            <div>SUN</div> 
                            <div>MON</div>
                            <div>TUE</div>
                            <div>WED</div>
                            <div>THUR</div>
                            <div>FRI</div>
                            <div>SAT</div>
                            {/* create a nested for loop and for each iteration set the ID to the indicies */}
                            <div className="grid-item" id="1-1">1-1</div>
                            <div id="grid-item" id="1-2">1-2</div>
                            <div id="grid-item" id="1-3">1-3</div>
                            <div id="grid-item" id="1-4">1-4</div>
                            <div id="grid-item" id="1-5">1-5</div>
                            <div id="grid-item" id="1-6">1-6</div>
                            <div id="grid-item" id="1-7">1-7</div>
                            <div id="grid-item" id="2-1">2-1</div>
                            <div id="grid-item" id="2-2">2-2</div>
                            <div id="grid-item" id="2-3">2-3</div>
                            <div id="grid-item" id="2-4">2-4</div>
                            <div id="grid-item" id="2-5">2-5</div>
                            <div id="grid-item" id="2-6">2-6</div>
                            <div id="grid-item" id="2-7">2-7</div>
                            <div id="grid-item" id="3-1">3-1</div>
                            <div id="grid-item" id="3-2">3-2</div>
                            <div id="grid-item" id="3-3">3-3</div>
                            <div id="grid-item" id="3-4">3-4</div>
                            <div id="grid-item" id="3-5">3-5</div>
                            <div id="grid-item" id="3-6">3-6</div>
                            <div id="grid-item" id="3-7">3-7</div>
                            <div id="grid-item" id="4-1">4-1</div>
                            <div id="grid-item" id="4-2">4-2</div>
                            <div id="grid-item" id="4-3">4-3</div>
                            <div id="grid-item" id="4-4">4-4</div>
                            <div id="grid-item" id="4-5">4-5</div>
                            <div id="grid-item" id="4-6">4-6</div>
                            <div id="grid-item" id="4-7">4-7</div>
                            <div id="grid-item" id="5-1">5-1</div>
                            <div id="grid-item" id="5-2">5-2</div>
                            <div id="grid-item" id="5-3">5-3</div>
                            <div id="grid-item" id="5-4">5-4</div>
                            <div id="grid-item" id="5-5">5-5</div>
                            <div id="grid-item" id="5-6">5-6</div>
                            <div id="grid-item" id="5-7">5-7</div>
                            <div id="grid-item" id="6-1">6-1</div>
                            <div id="grid-item" id="6-2">6-2</div>
                            <div id="grid-item" id="6-3">6-3</div>
                            <div id="grid-item" id="6-4">6-4</div>
                            <div id="grid-item" id="6-5">6-5</div>
                            <div id="grid-item" id="6-6">6-6</div>
                            <div id="grid-item" id="6-7">6-7</div>
                            <div id="grid-item" id="7-1">7-1</div>
                            <div id="grid-item" id="7-2">7-2</div>
                            <div id="grid-item" id="7-3">7-3</div>
                            <div id="grid-item" id="7-4">7-4</div>
                            <div id="grid-item" id="7-5">7-5</div>
                            <div id="grid-item" id="7-6">7-6</div>
                            <div id="grid-item" id="7-7">7-7</div>
                            <div id="grid-item" id="8-1">8-1</div>
                            <div id="grid-item" id="8-2">8-2</div>
                            <div id="grid-item" id="8-3">8-3</div>
                            <div id="grid-item" id="8-4">8-4</div>
                            <div id="grid-item" id="8-5">8-5</div>
                            <div id="grid-item" id="8-6">8-6</div>
                            <div id="grid-item" id="8-7">8-7</div>
                            <div id="grid-item" id="9-1">9-1</div>
                            <div id="grid-item" id="9-2">9-2</div>
                            <div id="grid-item" id="9-3">9-3</div>
                            <div id="grid-item" id="9-4">9-4</div>
                            <div id="grid-item" id="9-5">9-5</div>
                            <div id="grid-item" id="9-6">9-6</div>
                            <div id="grid-item" id="9-7">9-7</div>
                            <div id="grid-item" id="10-1">10-1</div>
                            <div id="grid-item" id="10-2">10-2</div>
                            <div id="grid-item" id="10-3">10-3</div>
                            <div id="grid-item" id="10-4">10-4</div>
                            <div id="grid-item" id="10-5">10-5</div>
                            <div id="grid-item" id="10-6">10-6</div>
                            <div id="grid-item" id="10-7">10-7</div>
                            <div id="grid-item" id="11-1">11-1</div>
                            <div id="grid-item" id="11-2">11-2</div>
                            <div id="grid-item" id="11-3">11-3</div>
                            <div id="grid-item" id="11-4">11-4</div>
                            <div id="grid-item" id="11-5">11-5</div>
                            <div id="grid-item" id="11-6">11-6</div>
                            <div id="grid-item" id="11-7">11-7</div>
                            <div id="grid-item" id="12-1">12-1</div>
                            <div id="grid-item" id="12-2">12-2</div>
                            <div id="grid-item" id="12-3">12-3</div>
                            <div id="grid-item" id="12-4">12-4</div>
                            <div id="grid-item" id="12-5">12-5</div>
                            <div id="grid-item" id="12-6">12-6</div>
                            <div id="grid-item" id="12-7">12-7</div>
                            <div id="grid-item" id="13-1">13-1</div>
                            <div id="grid-item" id="13-2">13-2</div>
                            <div id="grid-item" id="13-3">13-3</div>
                            <div id="grid-item" id="13-4">13-4</div>
                            <div id="grid-item" id="13-5">13-5</div>
                            <div id="grid-item" id="13-6">13-6</div>
                            <div id="grid-item" id="13-7">13-7</div>
                            <div id="grid-item" id="14-1">14-1</div>
                            <div id="grid-item" id="14-2">14-2</div>
                            <div id="grid-item" id="14-3">14-3</div>
                            <div id="grid-item" id="14-4">14-4</div>
                            <div id="grid-item" id="14-5">14-5</div>
                            <div id="grid-item" id="14-6">14-6</div>
                            <div id="grid-item" id="14-7">14-7</div>
                            <div id="grid-item" id="15-1">15-1</div>
                            <div id="grid-item" id="15-2">15-2</div>
                            <div id="grid-item" id="15-3">15-3</div>
                            <div id="grid-item" id="15-4">15-4</div>
                            <div id="grid-item" id="15-5">15-5</div>
                            <div id="grid-item" id="15-6">15-6</div>
                            <div id="grid-item" id="15-7">15-7</div>
                            <div id="grid-item" id="16-1">16-1</div>
                            <div id="grid-item" id="16-2">16-2</div>
                            <div id="grid-item" id="16-3">16-3</div>
                            <div id="grid-item" id="16-4">16-4</div>
                            <div id="grid-item" id="16-5">16-5</div>
                            <div id="grid-item" id="16-6">16-6</div>
                            <div id="grid-item" id="16-7">16-7</div>
                            <div id="grid-item" id="17-1">17-1</div>
                            <div id="grid-item" id="17-2">17-2</div>
                            <div id="grid-item" id="17-3">17-3</div>
                            <div id="grid-item" id="17-4">17-4</div>
                            <div id="grid-item" id="17-5">17-5</div>
                            <div id="grid-item" id="17-6">17-6</div>
                            <div id="grid-item" id="17-7">17-7</div>
                            <div id="grid-item" id="18-1">18-1</div>
                            <div id="grid-item" id="18-2">18-2</div>
                            <div id="grid-item" id="18-3">18-3</div>
                            <div id="grid-item" id="18-4">18-4</div>
                            <div id="grid-item" id="18-5">18-5</div>
                            <div id="grid-item" id="18-6">18-6</div>
                            <div id="grid-item" id="18-7">18-7</div>
                            <div id="grid-item" id="19-1">19-1</div>
                            <div id="grid-item" id="19-2">19-2</div>
                            <div id="grid-item" id="19-3">19-3</div>
                            <div id="grid-item" id="19-4">19-4</div>
                            <div id="grid-item" id="19-5">19-5</div>
                            <div id="grid-item" id="19-6">19-6</div>
                            <div id="grid-item" id="19-7">19-7</div>
                            <div id="grid-item" id="20-1">20-1</div>
                            <div id="grid-item" id="20-2">20-2</div>
                            <div id="grid-item" id="20-3">20-3</div>
                            <div id="grid-item" id="20-4">20-4</div>
                            <div id="grid-item" id="20-5">20-5</div>
                            <div id="grid-item" id="20-6">20-6</div>
                            <div id="grid-item" id="20-7">20-7</div>
                            <div id="grid-item" id="21-1">21-1</div>
                            <div id="grid-item" id="21-2">21-2</div>
                            <div id="grid-item" id="21-3">21-3</div>
                            <div id="grid-item" id="21-4">21-4</div>
                            <div id="grid-item" id="21-5">21-5</div>
                            <div id="grid-item" id="21-6">21-6</div>
                            <div id="grid-item" id="21-7">21-7</div>
                            <div id="grid-item" id="22-1">22-1</div>
                            <div id="grid-item" id="22-2">22-2</div>
                            <div id="grid-item" id="22-3">22-3</div>
                            <div id="grid-item" id="22-4">22-4</div>
                            <div id="grid-item" id="22-5">22-5</div>
                            <div id="grid-item" id="22-6">22-6</div>
                            <div id="grid-item" id="22-7">22-7</div>
                            <div id="grid-item" id="23-1">23-1</div>
                            <div id="grid-item" id="23-2">23-2</div>
                            <div id="grid-item" id="23-3">23-3</div>
                            <div id="grid-item" id="23-4">23-4</div>
                            <div id="grid-item" id="23-5">23-5</div>
                            <div id="grid-item" id="23-6">23-6</div>
                            <div id="grid-item" id="23-7">23-7</div>
                        </div>
                    </div>
                </div>
            </>
        )
    }


}

export default CalendarShow;