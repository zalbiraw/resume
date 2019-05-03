import React from 'react'

const Education = () => (
	<section className = 'row education'>
		<article className = 'column left'>
			<div className = 'title'>
				<i className = 'fas fa-graduation-cap' />
				Education
			</div>
		</article>
		<article className = 'column right'>
			<div className = 'degree'>
				<div className = 'column'>
					<div className = 'title'>
						Master of Science in <span>Machine Learning</span>
					</div>
					<div className = 'university'>
						Western University, London, ON, CA
					</div>
				</div>
				<div className = 'column'>
					<div className = 'graduation'>
						<div className = 'from'>
							Sep 2017
						</div>
						<div className = 'to'>
							Ongoing
						</div>
					</div>
					<div className = 'gpa'>
						4.0
					</div>
				</div>
			</div>
			<div className = 'degree'>
				<div className = 'column'>
					<div className = 'title'>
						Bachelor of Science in <span>Computer Science</span> w/ Honours and Specialization
					</div>
					<div className = 'university'>
						Western University, London, ON, CA
					</div>
				</div>
				<div className = 'column'>
					<div className = 'graduation'>
						<div className = 'from'>
							Sep 2012
						</div>
						<div className = 'to'>
							Apr 2017
						</div>
					</div>
					<div className = 'gpa'>
						3.9
					</div>
				</div>
			</div>
		</article>
	</section>
)

export default Education
