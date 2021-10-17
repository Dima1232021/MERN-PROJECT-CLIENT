import React, { useState } from 'react';
import './dropdown.scss'

function Dropdown({ items = [], defaultValue, setValue, className }) {
	const [active, setActive] = useState(false)

	return (
		<div className={`${className}__dropdown  dropdown`}>
			<div
				className={`${className}__btn  dropdown__btn`}
				onClick={() => setActive(!active)}
			>
				{items.filter(element => element.value === defaultValue)[0].name}
				
				<span className={`${className}__arrow  dropdown__arrow`}>
					<i className={`${active ?
						`${className}__arrow-top dropdown__arrow-top` :
						`${className}__arrow-down dropdown__arrow-down`}`}
					>
					</i>
				</span>
			</div>

			{active && <ul className={`${className}__content  dropdown__content`}>
				{items.map(currentValue => {
					return <li
						className={`${className}__item dropdown__item ${currentValue.value === defaultValue && 'activ'}`}
						key={currentValue.name}
						value={currentValue.value}
						onClick={() => { setValue(currentValue.value) }
						}
					>
						{currentValue.name}
					</li>
				})}
			</ul>}
		</div >
	);
}

export default Dropdown;