import React from 'react'

const Experience = () => (
	<section className = 'row experience'>
		<article className = 'column left'>
			<div className = 'title'>
				<i className = 'fas fa-briefcase' />
				Experience
			</div>
		</article>
		<article className = 'column right'>
			<div className = 'jobs'>
				<div className = 'job'>
					<div className = 'header'>
						<div className = 'title'>
							Intermediate Full Stack Developer
						</div>
						<div className = 'duration'>
							<div className = 'from'>
								Apr 2017
							</div>
							<div className = 'to'>
								Apr 2019
							</div>
						</div>
					</div>
					<div className = 'company'>
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
						<div className = 'duration'>
							<div className = 'from'>
								Sep 2015
							</div>
							<div className = 'to'>
								Aug 2016
							</div>
						</div>
					</div>
					<div className = 'company'>
						London Life, London, ON, CA
					</div>
					<ul>
						<li>
							Automated repository migrations by repurposing selenium
							scripts which led to a 90% reduction of the project cost
							from $10,000 to $1,000.
						</li>
						<li>
							Prototyped a design for web application by creating
							photoshop mockups which led to my appointment as a lead
							role on the design and development of the application.
						</li>
						<li>
							Spearheaded a group of developers in developing a
							complex data collection application by assigning tasks
							and conducting code reviews.
						</li>
					</ul>
				</div>
				<div className = 'job'>
					<div className = 'header'>
						<div className = 'title'>
							Naval Warfare Officer
						</div>
						<div className = 'duration'>
							<div className = 'from'>
								Jun 2017
							</div>
							<div className = 'to'>
								Ongoing
							</div>
						</div>
					</div>
					<div className = 'company'>
						HMCS PREVOST, Canadian Armed Forces, London, ON, CA
					</div>
				</div>
			</div>
		</article>
	</section>
)

export default Experience
