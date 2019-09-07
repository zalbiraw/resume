import React from 'react'

const Experience = () => (
	<article className = 'column right'>
		<div className = 'job'>
			<div className = 'header'>
				<div className = 'title'>
					Senior Software Developer
				</div>
				<div className = 'date'>
					<div className = 'from'>
						Jun 2019
					</div>
					<div className = 'to'>
						Ongoing
					</div>
				</div>
			</div>
			<div className = 'employer'>
				OSG, London, ON, CA
			</div>
			<ul>
				<li>
					Leading the development of Check.ca with React.js and
					Laravel.
				</li>
				<li>
					Containerized the project which trimmed the initial setup
					time from 4+ hours to few minutes and enhanced the local
					development experience.
				</li>
				<li>
					Implemented front and back end unit tests and currently
					maintaining 100% line coverage.
				</li>
			</ul>
		</div>
		<div className = 'job'>
			<div className = 'header'>
				<div className = 'title'>
					Intermediate Full Stack Developer
				</div>
				<div className = 'date'>
					<div className = 'from'>
						Apr 2017
					</div>
					<div className = 'to'>
						Apr 2019
					</div>
				</div>
			</div>
			<div className = 'employer'>
				Eighty8 Ventures, London, ON, CA
			</div>
			<ul>
				<li>
					Redesigned and developed wingdeals.com which led to an
					increase in the number of participating restaurants on
					the platform.
				</li>
				<li>
					Created libraries by extracting functions from existing
					projects which led to a decrease in code redundancy.
				</li>
				<li>
					Utilized Docker to containerize projects which led to
					greater SoC.
				</li>
			</ul>
		</div>
		<div className = 'job'>
			<div className = 'header'>
				<div className = 'title'>
					Associate Software Developer
				</div>
				<div className = 'date'>
					<div className = 'from'>
						Sep 2015
					</div>
					<div className = 'to'>
						Aug 2016
					</div>
				</div>
			</div>
			<div className = 'employer'>
				London Life, London, ON, CA
			</div>
			<ul>
				<li>
					Automated repository migrations by repurposing selenium
					scripts which led to a 90% reduction of the project cost
					from $10,000 to $1,000.
				</li>
			</ul>
		</div>
		<div className = 'job'>
			<div className = 'header'>
				<div className = 'title'>
					Naval Warfare Officer
				</div>
				<div className = 'date'>
					<div className = 'from'>
						Jun 2017
					</div>
					<div className = 'to'>
						Ongoing
					</div>
				</div>
			</div>
			<div className = 'employer'>
				Canadian Armed Forces Primary Reserves
			</div>
		</div>
		<div className = 'job'>
			<div className = 'header'>
				<div className = 'title'>
					Graduate Teaching Assistant
				</div>
				<div className = 'date'>
					<div className = 'from'>
						Sep 2017
					</div>
					<div className = 'to'>
						Apr 2019
					</div>
				</div>
			</div>
			<div className = 'employer'>
				Western University, London, ON, CA
			</div>
		</div>
	</article>
)

export default Experience
