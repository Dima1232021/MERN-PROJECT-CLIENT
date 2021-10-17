import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import moment from 'moment'
import useWindowSize from '../../../hooks/useWindowSize'
import './chart.scss'




function Chart({ userData = [], dataKey, nameInTooltip }) {
	const { width } = useWindowSize()
	const getDeviceConfig = () => {
		if (width >= 320 && width < 720) {
			return 1;
		} else if (width >= 720 && width < 1024) {
			return 3;
		} else {
			return 4;
		}
	};

	const data = userData.map(currentValue => ({ ...currentValue, date: moment(currentValue.date).format('MMM D') }))


	const CustomizedDot = (props) => {
		const { cx, cy, payload } = props;

		if (payload.date == data[0].date || payload.date == data[data.length - 1].date) {
			return (
				<circle cx={cx} cy={cy} r={10} fill="#3A80BA" />
			);
		}

		return (
			false
		);
	};

	return (
		<ResponsiveContainer width="100%" aspect={getDeviceConfig()} className='chart'>
			<LineChart
				data={data}
				margin={{
					top: 8, right: 15, bottom: 0, left: 20,
				}}
			>
				<CartesianGrid vertical={false} />
				<XAxis
					dataKey='date'
					axisLine={false}
					tickLine={false}
					tickMargin={12}
					stroke='#CCCCCC'
					padding={{ left: 10, right: 10 }}
				/>
				<YAxis
					axisLine={false}
					tickLine={false}
					width={30}
					stroke='#CCCCCC'
					tickCount={6}
				/>
				<Tooltip cursor={false}
					formatter={(value, props) => ([value, nameInTooltip, props])}
				/>

				<Line type="monotone" dataKey={dataKey} stroke="#3A80BA" strokeWidth={4} dot={<CustomizedDot />} />

			</LineChart>
		</ResponsiveContainer>
	);
}

export default Chart;