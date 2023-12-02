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
import Projects     from '../Projects';

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
					<Certificates />
					<div className = 'ruler' />
					<Awards />
					<div className = 'ruler' />
					<Projects />
					<div className = 'ruler' />
					<Interests />
				</div>
				<div className = 'column right'>
					<Skills />
					<div className = 'ruler' />
					<Experience />
					<div className = 'ruler' />
					<Education />
				</div>
			</div>
    </div>
  </div>
);

export default Resume;
