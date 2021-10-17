import React, { useState } from 'react';
import Dropdown from '../../../dropdown/Dropdown';
import moment from 'moment'

import './calendar.scss'

function Calendar({ className, selectedDay, setSelectedDay }) {
	const month = [
		{ name: 'January', value: 1 },
		{ name: 'February', value: 2 },
		{ name: 'March', value: 3 },
		{ name: 'April', value: 4 },
		{ name: 'May', value: 5 },
		{ name: 'June', value: 6 },
		{ name: 'July', value: 7 },
		{ name: 'August', value: 8 },
		{ name: 'September', value: 9 },
		{ name: 'October', value: 10 },
		{ name: 'November', value: 11 },
		{ name: 'December', value: 12 },
	]
	const year = [
		{ name: '2019', value: 2019 },
		{ name: '2020', value: 2020 },
		{ name: '2021', value: 2021 },
	]

	const [selectedMonth, setSelectedMonth] = useState(Number(moment(selectedDay).format('MM')))
	const [selectedYear, setSelectedYear] = useState(Number(moment(selectedDay).format('YYYY')))

	let startDay = moment(`${selectedYear}-${selectedMonth}-1`).startOf('month').startOf('week')

	let cloneDay = startDay.clone()

	let daysArray = [...Array(6).fill([...Array(7)])].map(event => event.map(() => cloneDay.add(1, 'day').clone()))


	return (
		<div className={`${className} block`}>
			<div className="block__row">
				<Dropdown
					items={month}
					defaultValue={selectedMonth}
					setValue={setSelectedMonth}
					className={'block'}
				/>
				<Dropdown
					items={year}
					defaultValue={selectedYear}
					setValue={setSelectedYear}
					className={'block'}
				/>
			</div>

			<div className="block__days">
				<div className="block__name-days">
					<div className="block__name-day">Sun</div>
					<div className="block__name-day">Mon</div>
					<div className="block__name-day">Tue</div>
					<div className="block__name-day">Wed</div>
					<div className="block__name-day">Thu</div>
					<div className="block__name-day">Fri</div>
					<div className="block__name-day">Sat</div>
				</div>
				{
					daysArray.map((week, index) => {
						return (
							<div key={index} className='block__days-row'>
								{week.map(day => {
									return (
										<div
											key={day.format()}
											className={`
														block__day 
														${moment(selectedDay).isSame(day, 'day') && 'activ'} 
														${moment(`${selectedYear}-${selectedMonth}`).isSame(day, 'month') && 'current-month'}
													`}
											onClick={() => setSelectedDay(day.format('YYYY-MM-DD'))}
										>
											{day.format('DD')}
										</div>
									)
								})}
							</div>
						)
					})
				}
			</div>
		</div>
	);
}

export default Calendar;