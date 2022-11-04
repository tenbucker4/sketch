import React, { useState } from 'react'
import "../styles/Home.css"

const Home = () => {
	const [menuOpen, setMenuOpen] = useState(false);

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
			<button className='toggle-nav' onClick={() => setMenuOpen(prev => !prev)}>
				<div className='hamburger'>
					<span className={menuOpen ? "hamburger-bun top-bun active" : "hamburger-bun top-bun"}></span>
					<span className={menuOpen ? "hamburger-bun bottom-bun active" : "hamburger-bun bottom-bun"}></span>
				</div>
			</button>
			{/* <nav>Nav</nav> */}
		</>
        
    )
}

export default Home