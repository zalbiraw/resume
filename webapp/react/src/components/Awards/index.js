import React from 'react'

const Awards = () => (
	<section className = 'row awards'>
		<article className = 'column left'>
			<div className = 'title'>
				<i className = 'fas fa-trophy' />
				Awards
			</div>
		</article>
		<article className = 'column right'>
			<div className = 'award'>
				<div className = 'award-info'>
					<div className = 'title'>
						Julian Davies Silver Medalist
					</div>
					<div className = 'from'>
						Western University
					</div>
				</div>
				<div className = 'date'>
					2017
				</div>
			</div>
			<div className = 'award'>
				<div className = 'award-info'>
					<div className = 'title'>
						Dean's Honour Roll
					</div>
					<div className = 'from'>
						Western University
					</div>
				</div>
				<div className = 'date'>
					<div className = 'from'>
						2012
					</div>
					<div className = 'to'>
						2017
					</div>
				</div>
			</div>
		</article>
	</section>
)

export default Awards
