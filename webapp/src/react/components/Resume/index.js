import React from 'react'

import Header       from '../Header/index'
import Education    from '../Education/index'
import Awards   	  from '../Awards/index'
import Volunteering from '../Volunteering/index'
import Plan         from '../Plan/index'

const section = (component, title, className, icon) => (
	<section className = {'row ' + className}>
		<article className = 'column left'>
			<div className = 'title'>
				{ icon ? <i className = {'fas fa-' + icon} /> : null }
				{title}
			</div>
		</article>
		{component}
	</section>
)

const Resume = () => (
	<div className = 'resume-container'>
		<div className = 'resume'>

			{section(<Header />,       'Zaid Albirawi', 'header')}
			{section(<Education />,    'Education',     'education',    'graduation-cap')}
			{section(<Plan />,         'Plan',          'plan',         'map')}
			{section(<Awards />,       'Awards',        'awards',       'trophy')}
			{section(<Volunteering />, 'Volunteering',  'volunteering', 'hands-helping')}

		</div>
	</div>
)

export default Resume
