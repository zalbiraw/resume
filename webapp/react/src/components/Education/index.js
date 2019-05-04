import React from 'react'

const Education = () => (
	<article className = 'column right'>
		<div className = 'degree'>
			<div className = 'column'>
				<div className = 'title'>
					Master of Science in <span>Machine Learning</span>
				</div>
				<div className = 'institute'>
					Western University, London, ON, CA
				</div>
			</div>
			<div className = 'column'>
				<div className = 'date'>
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
					Bachelor of Science in <span>Computer Science</span> with
					Honours and Specialization
				</div>
				<div className = 'institute'>
					Western University, London, ON, CA
				</div>
			</div>
			<div className = 'column'>
				<div className = 'date'>
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
)

export default Education
