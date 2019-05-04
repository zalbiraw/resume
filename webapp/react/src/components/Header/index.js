import React from 'react'

const Header = () => (
	<article className = 'column right'>
		<div className = 'contact-information'>
			<div className = 'column'>
				<div className = 'cell'>
					<i className = 'fas fa-phone' />
					(226) 700 - 3397
				</div>
				<div className = 'github'>
					<i className = 'fab fa-github' />
					github.com/zalbiraw
				</div>
			</div>
			<div className = 'column'>
				<div className = 'email'>
					<i className = 'fas fa-envelope' />
					zalbiraw@gmail.com
				</div>
				<div className = 'linkedin'>
					<i className = 'fab fa-linkedin' />
					linkedin.com/in/zalbiraw
				</div>
			</div>
			<div className = 'column'>
				<div className = 'home'>
					<i className = 'fas fa-home' />
					London, ON
				</div>
				<div className = 'hackerrank'>
					<i className = 'fab fa-hackerrank' />
					hackerrank.com/zalbiraw
				</div>
			</div>
		</div>
	</article>
)

export default Header
