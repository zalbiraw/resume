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
					Maintaining a 4.0
				</div>
			</div>
		</div>
		<div className = 'degree'>
			<div className = 'column'>
				<div className = 'title'>
					<div>Bachelor of Science in <span>Computer Science</span></div>
				</div>
				<div className = 'institute'>
					Western University, London, ON, CA
				</div>
				<ul className = 'details'>
					<li className = 'bullet-style'>Honours and Specialization</li>
					<li className = 'bullet-style'>Minor in Applications of Computer Science</li>
					<li className = 'bullet-style'>Science Internship Program</li>
				</ul>
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
