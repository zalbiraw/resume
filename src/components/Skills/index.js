import React from 'react';

const Skills = () => (
  <article className = 'row'>
		<div className = 'title'>
			<i className = 'fas fa-star' />
			Skills
		</div>
    <div className = 'skill languages'>
      <div className = 'title'>
        Languages
      </div>
      <ul>
				<li className = 'intermediate'>GoLang</li>
				<li className = 'intermediate'>GraphQL</li>
				<li className = 'intermediate'>Python</li>
        <li className = 'proficient'>HTML/CSS</li>
        <li className = 'proficient'>JavaScript/ES6</li>
				<li className = 'proficient'>C</li>
				<li className = 'intermediate'>Java</li>
      </ul>
    </div>
    <div className = 'skill frameworks'>
      <div className = 'title'>
        Frameworks
      </div>
      <ul>
				<li className = 'proficient'>Kubernetes</li>
				<li className = 'proficient'>Docker</li>
				<li className = 'intermediate'>Terraform</li>
				<li className = 'intermediate'>Ansible</li>
				<li className = 'proficient'>Git</li>
        <li className = 'intermediate'>Node.js</li>
        <li className = 'intermediate'>React.js</li>
      </ul>
    </div>
    <div className = 'skill platforms'>
      <div className = 'title'>
        Platforms
      </div>
      <ul>
        <li className = 'proficient'>*nix</li>
				<li className = 'intermediate'>MacOS</li>
				<li className = 'intermediate'>AWS</li>
				<li className = 'intermediate'>GCP</li>
				<li className = 'intermediate'>Azure</li>
      </ul>
      <div className = 'filler' />
      <div className = 'indicators'>
        <div className = 'proficient indicator'>Proficient</div>
				<div className = 'intermediate indicator'>Intermediate</div>
      </div>
    </div>
  </article>
);

export default Skills;
