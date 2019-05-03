import React from 'react'

import Header     from '../components/Header/index'
import Profile    from '../components/Profile/index'
import Education  from '../components/Education/index'
import Skills     from '../components/Skills/index'
import Experience from '../components/Experience/index'
import Projects   from '../components/Projects/index'
import Awards   	from '../components/Awards/index'
import Interests  from '../components/Interests/index'

import './style.scss'

const App = () => (
	<div className = 'resume-container'>
		<div className = 'resume'>
			<Header />
			<Profile />
			<Skills />
			<Experience />
			<Education />
			<Projects />
			<Awards />
			<Interests />
		</div>
	</div>

)

export default App
