import React from 'react'

import Header     from '../components/Header/index'
import Profile    from '../components/Profile/index'
import Education  from '../components/Education/index'
import Skills     from '../components/Skills/index'
import Experiance from '../components/Experiance/index'
import Projects   from '../components/Projects/index'
import Awards   	from '../components/Awards/index'

import './style.scss'

const App = () => (
	<div className = 'resume-container'>
		<div className = 'resume'>
			<Header />
			<Profile />
			<Skills />
			<Experiance />
			<Education />
			<Projects />
			<Awards />
		</div>
	</div>

)

export default App
