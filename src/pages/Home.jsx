import React, { useState } from 'react'
import design1 from "../designs/design-1-min.jpg"
import design2 from "../designs/design-2-min.jpg"
import "../styles/Home.css"

const Home = () => {
	const [menuOpen, setMenuOpen] = useState(false);

    return (
		<>
			<main style={{ transform: menuOpen? "translateY(-50%)" : "translateY(0)" }}>
				<div className="main-left">
					<div className="column column-left">
						<img src={design1} alt="" />
					</div>
					<div className="column column-right">
						<img src={design2} alt="" />
					</div>
				</div>
				<div className="main-right">
					<div className="hero">
						<h1>We build <span className='blue'>designs</span> for the <span className='red'>future</span></h1>
						<div className='learn-more'>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore corporis nulla, aliquam eum qui illo?</p>
							<button>Learn More</button>
						</div>
					</div>
				</div>
			</main>
			<button className='toggle-nav' style={{ backgroundColor: menuOpen? "#d21700" : "#366c8c" }} onClick={() => setMenuOpen(prev => !prev)}>
				<div className='hamburger'>
					<span className={menuOpen ? "hamburger-bun top-bun active" : "hamburger-bun top-bun"}></span>
					<span className={menuOpen ? "hamburger-bun bottom-bun active" : "hamburger-bun bottom-bun"}></span>
				</div>
			</button>
			<nav>Nav</nav>
		</>
        
    )
}

export default Home