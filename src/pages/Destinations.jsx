import Navbar from '../components/Navbar'

export const DESTINATIONS = [
  { id: 1, name: 'Amazon Rainforest',  country: 'Brazil',      tag: 'Jungle',   emoji: '🌳' },
  { id: 2, name: 'Faroe Islands',      country: 'Denmark',     tag: 'Coastal',  emoji: '🏔️' },
  { id: 3, name: 'Plitvice Lakes',     country: 'Croatia',     tag: 'Lakes',    emoji: '💧' },
  { id: 4, name: 'Monteverde Cloud',   country: 'Costa Rica',  tag: 'Forest',   emoji: '☁️' },
  { id: 5, name: 'Fiordland',          country: 'New Zealand', tag: 'Fjords',   emoji: '🏞️' },
  { id: 6, name: 'Daintree Rainforest',country: 'Australia',   tag: 'Jungle',   emoji: '🦎' },
]

function Destinations() {
  return (
    <>
      <Navbar />
      <div className="section">
        <h1>All Destinations</h1>
        <p className="subtitle">Click a destination to learn more.</p>
        <div className="grid">
          {DESTINATIONS.map(d => (
            <a key={d.id} href={`/destinations/${d.id}`} className="dest-card">
              <div className="dest-emoji">{d.emoji}</div>
              <div className="dest-info">
                <h2>{d.name}</h2>
                <p>{d.country}</p>
                <span className="tag">{d.tag}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default Destinations
