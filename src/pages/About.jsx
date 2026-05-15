import Navbar from '../components/Navbar'

function About() {
  return (
    <>
      <Navbar />
      <div className="section">
        <h1>About WanderGreen</h1>
        <p className="subtitle">We believe travel should leave the world better than we found it.</p>

        <div className="about-block">
          <h2>Our Mission</h2>
          <p>
            WanderGreen curates eco-friendly travel experiences that connect people
            with nature while preserving it for future generations.
          </p>
        </div>

        <div className="about-block">
          <h2>What We Do</h2>
          <ul>
            <li>Vet every destination for sustainability standards</li>
            <li>Partner with local, community-owned lodges</li>
            <li>Offset 100% of tour-related carbon emissions</li>
          </ul>
        </div>

        <a href="/destinations" className="btn">Start Exploring</a>
      </div>
    </>
  )
}

export default About
