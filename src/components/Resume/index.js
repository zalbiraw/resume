import React from 'react';

import Contact      from '../Contact';
import AboutMe      from '../AboutMe';
import Education    from '../Education';
import Skills       from '../Skills';
import Experience   from '../Experience';
import Certificates from '../Certificates';
import Interests    from '../Interests';
import Profile      from '../Profile';
import Awards       from '../Awards';

const Resume = () => (
  <div className = 'resume-container'>
		<div className = 'resume'>
			<div className = 'row'>
				<div className = 'column left'>
					<Profile />
					<div className = 'ruler' />
					<Contact />
					<div className = 'ruler' />
					<AboutMe />
					<div className = 'ruler' />
					<Awards />
					<div className = 'ruler' />
					<Interests />
				</div>
				<div className = 'column right'>
					<Experience />
					<div className = 'ruler' />
					<Skills />
					<div className = 'ruler' />
					<Education />
					<div className = 'ruler' />
					<Certificates />
				</div>
			</div>
    </div>
  </div>
);

export default Resume;
