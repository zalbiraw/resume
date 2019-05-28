import React from 'react'

const Awards = () => (
	<article className = 'column right'>
		<div className = 'award'>
			<div>
				<div className = 'title'>
					Julian Davies Silver Medalist
				</div>
				<div className = 'governing-body'>
					Western University, London, ON, CA
				</div>
			</div>
			<div className = 'date'>
				2017
			</div>
		</div>
		<div className = 'sub-element-spacing'>
			Awarded annually to a student graduating in a Computer Science program,
			who is judged to have made a significant contribution to inter-personal
			computer communications, with a particular reference to the communications
			handicapped.
		</div>
		<div className = 'award'>
			<div>
				<div className = 'title'>
					Dean's Honour Roll
				</div>
				<div className = 'governing-body'>
					Western University, London, ON, CA
				</div>
			</div>
			<div className = 'date'>
				<div className = 'from'>
					2013
				</div>
				<div className = 'to'>
					2017
				</div>
			</div>
		</div>
		<div className = 'sub-element-spacing'>
			Awarded annually to full-time students registered in the Science
			Faculty who completed a minimum of 4.0 courses during the
			fall/winter session and earned an average of 80% or more with
			no failed courses.
		</div>
	</article>
)

export default Awards
