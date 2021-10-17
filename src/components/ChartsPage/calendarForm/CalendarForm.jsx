import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { changeDatesAction } from '../../../reducers/userReducer';
import IMG_CALENDAR from '../../../assets/img/calendar.svg'
import './calendarForm.scss'
import Calendar from './calendar/Calendar';


function CalendarForm() {

	const dispatch = useDispatch()
	const startDate = useSelector(state => state.user.startDate)
	const endDate = useSelector(state => state.user.endDate)

	const [active, setActive] = useState(false)
	const [selectedDay_1, setSelectedDay_1] = useState(startDate)
	const [selectedDay_2, setSelectedDay_2] = useState(endDate)


	function apply() {
		!moment(selectedDay_1).isAfter(selectedDay_2) ?
			dispatch(changeDatesAction({ startDate: selectedDay_1, endDate: selectedDay_2 })) :
			dispatch(changeDatesAction({ startDate: selectedDay_2, endDate: selectedDay_1 }))

		setActive(!active)
	}

	return (
		<div className='calendar'>
			<div className="calendar__row">
				<p className="calendar__text">
					Select date range
				</p>
				<div className="calendar__data" onClick={() => setActive(!active)}>
					<div className="calendar__icon">
						<img src={IMG_CALENDAR} alt="There should be a picture here" className='calendar__img' />
					</div>
					<div className="calendar__selected-dates">
						{moment(startDate).format('MMM D, YYYY')} - {moment(endDate).format('MMM D, YYYY')}
					</div>
				</div>
			</div>

			{active && <div className="calendar__calendars">

				<Calendar className={'calendar__block'} selectedDay={selectedDay_1}  setSelectedDay={setSelectedDay_1}/>

				<Calendar className={'calendar__block'} selectedDay={selectedDay_2}  setSelectedDay={setSelectedDay_2}/>
				
				<div className="calendar__block block">
					<div className="block__row">
						<button className="block__btn-apply" onClick={apply}>
							Apply
						</button>
						<p className='block__text'>
							or
						</p>
						<button className="block__btn-cancel" onClick={() => setActive(!active)}>
							Cancel
						</button>
					</div>
				</div>
			</div>}


		</div>
	);
}

export default CalendarForm;