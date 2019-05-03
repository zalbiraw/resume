import React from 'react'

const Experiance = () => (
	<section className = 'row experiance'>
		<article className = 'column left'>
			<div className = 'title'>
				<i className = 'fas fa-briefcase' />
				Experiance
			</div>
		</article>
		<article className = 'column right'>
			<div className = 'jobs'>
				<div className = 'job'>
					<div className = 'title'>
						Intermediate Full Stack Developer
					</div>
					<div className = 'company'>
						<div className = 'title'>
							Eighty8 Ventures, London, ON, CA
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
							Utilizaed Docker to containerize projects which led to
							greater SoC.
						</li>
					</ul>
				</div>
				<div className = 'job'>
					<div className = 'title'>
						Associate Software Developer
					</div>
					<div className = 'company'>
						<div className = 'title'>
							London Life, London, ON, CA
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
					<ul>
						<li>
							Automated repository migrations by repurposing selenium
							scripts which led to reducing the cost of the project to
							10% of the forecasted cost of $10,000.
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
			</div>
		</article>
	</section>
)

export default Experiance
