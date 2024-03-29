import React from 'react';

const Certificates = () => (
  <article className = 'row'>
		<div className = 'title'>
			<i className = 'fas fa-certificate' />
			Certificates
		</div>
		<div className = 'certificate'>
			<div className = 'column'>
				<div className = 'title'>
					Certified Kubernetes Application Developer
				</div>
				<div className = 'issuer'>
					<div className = 'column'>
						The Linux Foundation
					</div>
					<div className = 'column'>
						<div className = 'date'>
							<div className = 'from'>
								May 2023
							</div>
							<div className = 'to'>
								May 2026
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className = 'certificate'>
			<div className = 'column'>
				<div className = 'title'>
					GraphQL Developer - Professional
				</div>
				<div className = 'issuer'>
					<div className = 'column'>
						Apollo GraphQL
					</div>
					<div className = 'column'>
						<div className = 'date'>
							<div>
								Jul 2022
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  </article>
);

export default Certificates;
