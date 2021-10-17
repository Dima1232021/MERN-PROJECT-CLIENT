import React from 'react';
import { NavLink } from 'react-router-dom';
import IMG_WAVE from '../../assets/img/wave.png'
import IMG_MOBILE from '../../assets/img/mobile.png'
import IMG_GROUP_1 from '../../assets/img/Group 1.png'
import IMG_GROUP_2 from '../../assets/img/Group 2.png'
import IMG_GROUP_3 from '../../assets/img/Group 3.png'
import IMG_WAVE_2 from '../../assets/img/wave_2.png'
import './MainPage.scss'

function MainPage(props) {
	return (
		<>
			<div className='main-header'>
				<img
					src={IMG_WAVE}
					className='main-header__img'
				/>
				<div className="container">
					<div className="main-header__row">
						<h2 className='main-header__logo'>AppCo</h2>
					</div>
					<div className="main-header__row">
						<div className="main-header__block">
							<div className="main-header__title"><span>Brainstorming </span> for desired perfect Usability</div>
							<div className="main-header__subtitle">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</div>
							<NavLink className='main-header__button' to='/stats'>Views Stats</NavLink>
						</div>
						<div className="main-header__block">
							<div className='main-header__image'>
								<img src={IMG_MOBILE} alt="There should be a picture here" />
							</div>
						</div>
					</div>
				</div>
			</div>


			<div className="main">
				<div className="container">
					<div className="main__title">
						<h2>
							Why <span>small business owners
								love</span> AppCo?
						</h2>
					</div>
					<div className="main__subtitle">
						<p >
							Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!
						</p>
					</div>
					<div className='main__row'>
						<div className="main__block">
							<div className="main__block-img">
								<img src={IMG_GROUP_1} alt="There should be a picture here" />
							</div>
							<h3 className='main__block-title'>Clean Design</h3>
							<p className='main__block-subtitle'>Increase sales by showing true dynamics of your website.</p>
						</div>
						<div className="main__block">
							<div className="main__block-img">
								<img src={IMG_GROUP_2} alt="There should be a picture here" />
							</div>
							<h3 className='main__block-title'>Secure Data</h3>
							<p className='main__block-subtitle'>Build your online store’s trust using Social Proof & Urgency.</p>
						</div>
						<div className="main__block">
							<div className="main__block-img">
								<img src={IMG_GROUP_3} alt="There should be a picture here" />
							</div>
							<h3 className='main__block-title'>Retina Ready</h3>
							<p className='main__block-subtitle'>Realize importance of social proof in customer’s purchase decision.</p>
						</div>
					</div>
				</div>
			</div>

			<div className='main-footer'>
				<img
					src={IMG_WAVE_2}
					className='main-footer__img'
				/>

				<div className='container'>


					<div className="main-footer__row">
						<div className='main-footer__enter-email'>
							<input
								type='email'
								className='main-footer__input'
								placeholder='Enter your email'
							/>
							<button className='main-footer__butonn'>Subscribe</button>
						</div>
					</div>


					<div className='main-footer__row'>
						<h2 className='main-footer__title'>AppCo</h2>
						<p className='main-footer__text'>
							All rights reserved by ThemeTags
						</p>
						<p className='main-footer__text'>Copyrights © 2019. </p>
					</div>
				</div>
			</div>
		</>
	);
}

export default MainPage;