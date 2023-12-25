import './index.css'

const MatchCard = props => {
  const {details} = props
  const {result, id, competingTeam, competingLogo, matchStatus} = details
  const status = matchStatus === 'Won' ? 'greeny' : 'reddy'

  return (
    <div className="cont">
      <img
        src={competingLogo}
        className="image"
        alt={`competing team ${competingTeam}`}
      />
      <h1 className="heading">{competingTeam}</h1>
      <p className="para">{result}</p>
      <p className={status}>{matchStatus}</p>
    </div>
  )
}

export default MatchCard
