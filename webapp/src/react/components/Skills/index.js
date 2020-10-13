import React from 'react';

export default () => (
  <article className = 'column right'>
    <div className = 'skill languages'>
      <div className = 'title'>
        Languages
      </div>
      <ul>
        <li className = 'familiar'>Assembly</li>
        <li className = 'proficient'>C</li>
        <li className = 'familiar'>C++</li>
        <li className = 'proficient'>HTML/CSS</li>
        <li className = 'familiar'>Java</li>
        <li className = 'proficient'>JavaScript/ES6</li>
        <li className = 'familiar'>PHP</li>
        <li className = 'familiar'>Python</li>
      </ul>
    </div>
    <div className = 'skill frameworks'>
      <div className = 'title'>
        Frameworks
      </div>
      <ul>
        <li className = 'familiar'>Cucumber</li>
        <li className = 'familiar'>CUDA</li>
        <li className = 'familiar'>Enzyme</li>
        <li className = 'familiar'>Express</li>
        <li className = 'familiar'>Flask</li>
        <li className = 'proficient'>Git</li>
        <li className = 'familiar'>Hadoop</li>
        <li className = 'familiar'>JUnit</li>
        <li className = 'proficient'>Laravel</li>
        <li className = 'familiar'>Mocha</li>
        <li className = 'familiar'>NGINX</li>
        <li className = 'familiar'>Node.js</li>
        <li className = 'familiar'>Pandas</li>
        <li className = 'familiar'>phpUnit</li>
        <li className = 'proficient'>React.js</li>
        <li className = 'familiar'>Selenium</li>
        <li className = 'familiar'>webpack</li>
      </ul>
    </div>
    <div className = 'skill platforms'>
      <div className = 'title'>
        Platforms
      </div>
      <ul>
        <li className = 'proficient'>Docker</li>
        <li className = 'familiar'>Linux</li>
        <li className = 'familiar'>MacOS</li>
        <li className = 'familiar'>Vagrant</li>
      </ul>
      <div className = 'filler' />
      <div className = 'indicators'>
        <div className = 'proficient indicator'>Proficient</div>
        <div className = 'familiar indicator'>Familiar</div>
      </div>
    </div>
  </article>
);
