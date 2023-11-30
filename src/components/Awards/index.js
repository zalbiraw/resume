import React from 'react';

const Awards = () => (
	<article className = 'row awards'>
		<div className = 'title'>
			<i className = 'fas fa-trophy' />
			Awards
		</div>
		<div className = 'certificate'>
			<div className = 'column'>
				<div className = 'title'>
					Dean's Honour Roll
				</div>
				<div className = 'issuer'>
					Western University
				</div>
			</div>
			<div className = 'column'>
				<div className = 'date'>
					<div className = 'from'>
						2013
					</div>
					<div className = 'to'>
						2017
					</div>
				</div>
			</div>
		</div>
		<div className = 'certificate'>
			<div className = 'column'>
				<div className = 'title'>
					Julian Davies Silver Medalist
				</div>
				<div className = 'issuer'>
					Western University
				</div>
			</div>
			<div className = 'column'>
				<div className = 'date'>
					<div>
						2017
					</div>
				</div>
			</div>
		</div>
	</article>
);

export default Awards;
