// Write your code here
import TeamCard from '../TeamCard'
import './index.css'

const Home = async () => {
  const response = await fetch('https://apis.ccbp.in/ipl')

  const data = await response.json()
  const updatedData = data.teams.map(each => ({
    id: each.id,
    name: each.name,
    teamUrl: each.team_image_url,
  }))

  return (
    <div className="the-container">
      <div className="head-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          className="logo-image"
          alt="ipl logo"
        />
        <h1 className="heading">IPL Dashboard</h1>
      </div>
      <ul>
        {updatedData.map(each => (
          <TeamCard key={each.id} details={each} />
        ))}
      </ul>
    </div>
  )
}
export default Home
