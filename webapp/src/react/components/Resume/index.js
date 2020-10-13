import React from 'react';

import Header     from '../Header/index';
import Profile    from '../Profile/index';
import Education  from '../Education/index';
import Skills     from '../Skills/index';
import Experience from '../Experience/index';
import Projects   from '../Projects/index';
import Awards     from '../Awards/index';
import Interests  from '../Interests/index';

const section = (component, title, className, icon) => (
  <section className = {'row ' + className}>
    <article className = 'column left'>
      <div className = 'title'>
        { icon ? <i className = {'fas fa-' + icon} /> : null }
        {title}
      </div>
    </article>
    {component}
  </section>
);

export default () => (
  <div className = 'resume-container'>
    <div className = 'resume'>
      {section(<Header />,     'Zaid Albirawi', 'header')}
      {section(<Profile />,    'Profile',       'profile',    'user')}
      {section(<Skills />,     'Skills',        'skills',     'star')}
      {section(<Experience />, 'Experience',    'experience', 'briefcase')}
      {section(<Education />,  'Education',     'education',  'graduation-cap')}
      {section(<Projects />,   'Projects',      'projects',   'pencil-ruler')}
      {section(<Awards />,     'Awards',        'awards',     'trophy')}
      {section(<Interests />,  'Interests',     'interests',  'futbol')}
    </div>
  </div>
);
