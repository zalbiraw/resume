import React from 'react';

const Education = () => (
  <article className = 'row'>
		<div className = 'title'>
			<i className = 'fas fa-graduation-cap' />
			Education
		</div>
    <div className = 'degree'>
      <div className = 'column'>
        <div className = 'title'>
					MSc with <span>Artificial Intelligence</span> Specialization (ABD)
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
            Sep 2020
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
					BSc in <span>Computer Science</span> with
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
);

export default Education;
