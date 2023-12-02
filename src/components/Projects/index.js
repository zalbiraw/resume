import React from 'react';

const Projects = () => (
  <article className = 'row'>
		<div className = 'title'>
			<i className = 'fas fa-pencil-ruler' />
			Projects
		</div>
		<div className = 'project'>
			<div className = 'column'>
				<div className = 'title'>
					TF API Gateway Performance Testing Suite
				</div>
				<div className = 'github'>
					<a href = 'https://github.com/TykTechnologies/tyk-performance-testing'>github.com/TykTechnologies/tyk-performance-testing</a>
				</div>
			</div>
		</div>
		<div className = 'project'>
			<div className = 'column'>
				<div className = 'title'>
					Tyk Kubernetes Demo
				</div>
				<div className = 'github'>
					<a href = 'https://github.com/TykTechnologies/tyk-k8s-demo'>github.com/TykTechnologies/tyk-k8s-demo</a>
				</div>
			</div>
		</div>
		<div className = 'project'>
			<div className = 'column'>
				<div className = 'title'>
					Go API Test Service
				</div>
				<div className = 'github'>
					<a href = 'https://github.com/zalbiraw/go-api-test-service'>github.com/zalbiraw/go-api-test-service</a>
				</div>
			</div>
		</div>
		<div className = 'project'>
			<div className = 'column'>
				<div className = 'title'>
					IRC Chat Client
				</div>
				<div className = 'github'>
					<a href = 'https://github.com/zalbiraw/IRC-Client'>github.com/zalbiraw/IRC-Client</a>
				</div>
			</div>
		</div>
		<div className = 'project'>
			<div className = 'column'>
				<div className = 'title'>
					Parallelized Ray Tracer
				</div>
				<div className = 'github'>
					<a href = 'https://github.com/zalbiraw/cuda_raytrace'>github.com/zalbiraw/cuda_raytrace</a>
				</div>
			</div>
		</div>
  </article>
);

export default Projects;
