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

const section = (component, title, className, icon) => (
	<section className = {'row ' + className}>
		<article className = 'column left'>
			<div className = 'title'>
				{ icon ? <i className = {icon} /> : null }
				{title}
			</div>
		</article>
		{component}
	</section>
)

const App = () => (
	<div className = 'resume-container'>
		<div className = 'resume'>

			{section(<Header />,     'Zaid Albirawi', 'header')}
			{section(<Profile />,    'Profile',       'profile',    'fas fa-user')}
			<Skills />
			{section(<Experience />, 'Experience',    'experience', 'fas fa-briefcase')}
			{section(<Education />,  'Education',     'education',  'fas fa-graduation-cap')}
			{section(<Projects />,   'Projects',      'projects',   'fas fa-flask')}
			{section(<Awards />,     'Awards',        'awards',     'fas fa-trophy')}
			{section(<Interests />,  'Interests',     'interests',  'fas fa-futbol')}

			<section className = 'row'>
				<article className = 'column left'>
				</article>
				<article className = 'column right'>
				</article>
			</section>
		</div>
	</div>
)

export default App
