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

const leftColumn = (title, icon) => (
		<article className = 'column left'>
			<div className = 'title'>
				{ icon ? <i className = {icon} /> : null }
				{title}
			</div>
		</article>
)

const App = () => (
	<div className = 'resume-container'>
		<div className = 'resume'>

			<section className = 'row header'>
				{leftColumn('Zaid Albirawi')}
				<Header />
			</section>

			<Profile />
			<Skills />

			<section className = 'row experience'>
				{leftColumn('Experience', 'fas fa-briefcase')}
				<Experience />
			</section>

			<section className = 'row education'>
				{leftColumn('Education', 'fas fa-graduation-cap')}
				<Education />
			</section>

			<Projects />

			<section className = 'row awards'>
				{leftColumn('Awards', 'fas fa-trophy')}
				<Awards />
			</section>

			<Interests />
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
