import React from 'react'
import "../styles/Home.css"

const Home = () => {
    return (
		<>
			<main>
				<div className="main-left"></div>
				<div className="main-right">
					<div className="hero">
						<h1>We build designs for the future</h1>
						<div className='learn-more'>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore corporis nulla, aliquam eum qui illo?</p>
							<button>Learn More</button>
						</div>
					</div>
				</div>
			</main>
			<button className='toggle-nav'></button>
			{/* <nav>Nav</nav> */}
		</>
        
    )
}

export default Home