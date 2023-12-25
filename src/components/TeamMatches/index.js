import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    teamBanner: '',
    latestMatchDetails: {},
    recentMatches: [],
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({isLoading: false})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = {
        teamBannerUrl: data.team_banner_url,
        latestDetails: data.latest_match_details,
        recentMatches: data.recent_matches,
      }
      const latestMatchDetails = {
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        id: data.latest_match_details.id,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      }
      const recentMatches = data.recent_matches.map(each => ({
        umpires: each.latest_match_details.umpires,
        result: each.latest_match_details.result,
        manOfTheMatch: each.latest_match_details.man_of_the_match,
        id: each.latest_match_details.id,
        date: each.latest_match_details.date,
        venue: each.latest_match_details.venue,
        competingTeam: each.latest_match_details.competing_team,
        competingLogo: each.latest_match_details.competing_team_logo,
        firstInnings: each.latest_match_details.first_innings,
        secondInnings: each.latest_match_details.second_innings,
        matchStatus: each.latest_match_details.match_status,
      }))
      this.setState({
        teamBanner: updatedData.teamBannerUrl,
        latestMatchDetails,
        recentMatches
      })
    }
  }

  render() {
    const {teamBanner, latestMatchDetails, recentMatches} = this.state
    return (
      <div className="the-container">
        <img className="image" src={teamBanner} alt="team banner" />
        <h1 className="heading">Latest Matches</h1>
        <LatestMatch
          latestMatchDetails={latestMatchDetails}
          key={latestMatchDetails.id}
        />
        <ul>
          {recentMatches.map(each => (
            <MatchCard details={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default TeamMatches
