import React from 'react';
import headShot from './headshot.png';

const Profile = () => (
  <article className = 'row profile'>
		<div>
			<img src ={headShot.src} />
		</div>
		<div className = 'name'>
			Zaid Albirawi
		</div>
  </article>
);

export default Profile;
