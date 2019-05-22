import React from 'react'

const Projects = () => (
	<article className = 'column right'>
		<div className = 'project'>
			<div className = 'title'>
				Parallelized Ray Tracer
			</div>
			<div className = 'github'>
				github.com/zalbiraw/cuda_raytrace
			</div>
			<div className = 'details'>
					Parallelized the Ray Tracing algorithm using the CUDA
					parallel computing framework in C.
			</div>
		</div>
		<div className = 'project'>
			<div className = 'title'>
				IRC Chat Client
			</div>
			<div className = 'github'>
				github.com/zalbiraw/IRC-Client
			</div>
			<div className = 'details'>
				Developed an IRC chat client and processed network
				traffic in C.
			</div>
		</div>
	</article>
)

export default Projects
