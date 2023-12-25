import "./index.css"

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = latestMatchDetails

  return (
    <div className="cont">
      <div className="competing-container">
        <h1 className="competingTeam">{competingTeam}</h1>
        <h1 className="date">{date}</h1>
        <p className="head">{venue}</p>
        <p className="para">{result}</p>
      </div>
      <img
        className="competingLogo"
        src={competingLogo}
        alt={`latest match ${competingTeam}`}
      />
      <div className="details-cont">
        <p className="head">First Innings</p>
        <p className="para">{firstInnings}</p>
        <p className="head">Second Innings</p>
        <p className="para">{secondInnings}</p>
        <p className="head">Man Of The Match</p>
        <p className="para">{manOfTheMatch}</p>
        <p className="head">Umpires</p>
        <p className="para">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
