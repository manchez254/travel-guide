import Navbar from '../components/Navbar'

function Home() {
  return (
    <>
      <Navbar />
      <div className="hero">
        <h1>Explore the World's<br />Green Wonders 🌍</h1>
        <p>Handpicked eco-friendly destinations for the conscious traveller.</p>
        <a href="/destinations" className="btn">Explore Destinations</a>
      </div>

      <div className="section">
        <h2>Why Travel Green?</h2>
        <div className="features">
          <div className="feature-card">
            <span>🌱</span>
            <h3>Sustainable</h3>
            <p>Every destination is chosen for its low environmental impact.</p>
          </div>
          <div className="feature-card">
            <span>🦜</span>
            <h3>Wildlife Friendly</h3>
            <p>Experience nature without disturbing local ecosystems.</p>
          </div>
          <div className="feature-card">
            <span>🏡</span>
            <h3>Community First</h3>
            <p>Support local guides, lodges, and family-run businesses.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
