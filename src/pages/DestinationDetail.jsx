import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { DESTINATIONS } from './Destinations'

function DestinationDetail() {
  const { id } = useParams()
  // TODO: const destination = DESTINATIONS.find(d => d.id === Number(id))
  // TODO: if (!destination) return <Navigate to="/destinations" replace />

  const destination = DESTINATIONS[0] // placeholder until you wire up useParams

  return (
    <>
      <Navbar />
      <div className="section">
        <a href="/destinations" className="back">← Back to Destinations</a>
        <div className="detail-hero">{destination.emoji}</div>
        <h1>{destination.name}</h1>
        <p className="subtitle">{destination.country} · {destination.tag}</p>
        <p className="detail-body">
          A breathtaking natural destination perfect for eco-conscious travellers.
          Guided tours available year-round with certified local experts.
        </p>
        <button className="btn">Book a Tour</button>
      </div>
    </>
  )
}

export default DestinationDetail
