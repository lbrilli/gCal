import React from "react";
import CalendarsContainer from './calendar_index_container'
import { Link } from "react-router-dom";
import * as DateFns from "date-fns"

class CalendarShow extends React.Component {
    constructor (props) {
        super (props)
        this.state = {name:'', timezone:'', ownerId: props.currentUser}
    }
    

    render () {
        const date = new Date()

        const makeSmallCalendar = () => {
            let dates = []
            for (let i = 0; i < 35; i++) {
            let sMon = DateFns.startOfMonth(date);
            let sWeek = DateFns.startOfWeek(sMon);
            dates.push(<button className="small-calendar-button">{String(DateFns.format(DateFns.add(DateFns.startOfWeek(sWeek), { days: i }), 'd'))}</button>)
            }
            return dates
        }

        const smallCalendar = makeSmallCalendar();

        const makeHourColumn = () => {
            let times = []
            for (let i = 1; i < 24; i++) {
                if (i < 12) {
                    times.push(<div>{i} AM</div>)
                } else if (i === 12) {
                    times.push(<div>{i} PM</div>)
                } else {
                    times.push(<div>{i-12} PM</div>)
                }
            }
            return times
        }

        const hourColumn = makeHourColumn();

        const makeMainCalendar = () => {
            let hours = []
            for (let i = 1; i < 24; i++) {
                for (let j = 1; j < 8; j++) {
                    hours.push(<div className="grid-item" id={`${i}-${j}`}></div>)
                }
            }
            return hours;
        }

        const hourBlocks = makeMainCalendar();

        return (
            <>
                <div className="left-column">
                    <Link to="/events/new" className="create">+ Create</Link>

                    <div className="month">
                        {DateFns.format(date, 'MMMM')} {DateFns.getYear(date)}
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
                        {smallCalendar}
                    </div>

                    <div className="calendar-index">
                        <CalendarsContainer />
                        <br />
                        <Link to="/calendars/new" className="new-calendar-button">+ New Calendar</Link>
                    </div>


                </div>

                <div className="main-calendar">

                    <div className="time-and-hours">
                        <div className="time-column">
                            <div className="time-column-title">{DateFns.format(date, 'O')}
                                {hourColumn}
                            </div>
                        </div>

                        <div className="single-hours-column">
                            <div>SUN <br /> <h2>{String(DateFns.format(DateFns.startOfWeek(date), 'd'))}</h2> </div>
                            <div>MON <br /> <h2>{String(DateFns.format(DateFns.add(DateFns.startOfWeek(date), { days: 1 }), 'd'))}</h2> </div>
                            <div>TUE <br /> <h2>{String(DateFns.format(DateFns.add(DateFns.startOfWeek(date), { days: 2 }), 'd'))}</h2> </div>
                            <div>WED <br /> <h2>{String(DateFns.format(DateFns.add(DateFns.startOfWeek(date), { days: 3 }), 'd'))}</h2> </div>
                            <div>THUR <br /> <h2>{String(DateFns.format(DateFns.add(DateFns.startOfWeek(date), { days: 4 }), 'd'))}</h2> </div>
                            <div>FRI <br /> <h2>{String(DateFns.format(DateFns.add(DateFns.startOfWeek(date), { days: 5 }), 'd'))}</h2> </div>
                            <div>SAT <br /> <h2>{String(DateFns.format(DateFns.add(DateFns.startOfWeek(date), { days: 6 }), 'd'))}</h2> </div>
                            {hourBlocks}
                        </div>
                    </div>
                </div>
            </>
        )
    }


}

export default CalendarShow;