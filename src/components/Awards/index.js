import React from 'react';

const Awards = () => (
	<article className = 'row'>
		<div className = 'title'>
			<i className = 'fas fa-trophy' />
			Honors & Awards
		</div>
		<div className = 'award'>
			<div className = 'column'>
				<div className = 'title'>
					Dean's Honour Roll
				</div>
				<div className = 'issuer'>
					<div className = 'column'>
						Western University
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
			</div>
		</div>
		<div className = 'award'>
			<div className = 'column'>
				<div className = 'title'>
					Julian Davies Silver Medalist
				</div>
				<div className = 'issuer'>
					<div className = 'column'>
						Western University
					</div>
					<div className = 'column'>
						<div className = 'date'>
							<div>
								2017
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</article>
);

export default Awards;
