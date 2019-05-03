import React from 'react'

const Projects = () => (
	<section className = 'row projects'>
		<article className = 'column left'>
			<div className = 'title'>
				<i className = 'fas fa-flask' />
				Projects
			</div>
		</article>
		<article className = 'column right'>
			<div className = 'project-list'>
				<div className = 'project'>
					<div className = 'title'>
						Parallelized Ray Tracer
					</div>
					<div className = 'github'>
						github.com/zalbiraw/IRC-Client
					</div>
					<div className = 'summary'>
							Parallelized the Ray Tracing algorithm using the CUDA
							parallel computing framework in C.
					</div>
				</div>
				<div className = 'project'>
					<div className = 'title'>
						IRC Chat Client
					</div>
					<div className = 'github'>
						github.com/zalbiraw/cuda_raytrace
					</div>
					<div className = 'summary'>
						Developed an IRC chat client and processed network
						traffic in C.
					</div>
				</div>
			</div>
		</article>
	</section>
)

export default Projects
