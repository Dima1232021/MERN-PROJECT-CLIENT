import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { changePageAction, changeReferenceNumberAction } from '../../../reducers/usersReducer';
import './pagination.scss'

function Pagination() {
	const dispatch = useDispatch()
	const pages = useSelector(state => state.users.pages)
	const currentlyPage = useSelector(state => state.users.currentlyPage)
	const referenceNumber = useSelector(state => state.users.referenceNumber)

	let pagesArray = useMemo(() => getPagesArray(), [referenceNumber])

	function getPagesArray() {
		let mas = []
		let a = referenceNumber
		let b = referenceNumber + 4
		for (; a <= b; a++) {
			mas.push(a)
		}
		return mas
	}

	function shrinkPage() {
		let difference = referenceNumber - 5
		if (referenceNumber === 1) {
			return null
		}
		if (referenceNumber > 5) {
			dispatch(changePageAction(difference+4))
			dispatch(changeReferenceNumberAction(difference))
			console.log('difference:', difference)
		} else {
			dispatch(changePageAction(5))
			dispatch(changeReferenceNumberAction(1))
		}
	}

	function enlargeThePage() {
		let sum = referenceNumber + 5
		let difference = pages - 4
		if (sum <= difference) {
			dispatch(changePageAction(sum))
			dispatch(changeReferenceNumberAction(sum))
		} else {
			dispatch(changePageAction(difference))
			dispatch(changeReferenceNumberAction(difference))
		}
	}


	return (
		<div className='pagination' >
			<div className="pagination__row">
				<div className='pagination__arrow' onClick={shrinkPage}>
					<i className={`pagination__arrow-left ${referenceNumber === 1 && 'disabled'}`}></i>
				</div>
				<ul className='pagination__list'>
					{
						pagesArray.map(currentValue => {
							return (<li
								onClick={() => dispatch(changePageAction(currentValue))}
								key={currentValue}
								className={`pagination__item ${currentValue === currentlyPage && 'activ'}`}
							>
								{currentValue}
							</li>)
						})
					}
				</ul>
				<div className='pagination__arrow' onClick={enlargeThePage}>
					<i className={`pagination__arrow-right ${referenceNumber === pages - 4 && 'disabled'}`}></i>
				</div>
			</div>
		</div >
	);
}

export default Pagination;