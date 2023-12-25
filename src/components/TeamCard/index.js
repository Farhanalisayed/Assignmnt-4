// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {details} = props
  const {id, name, teamUrl} = details

  return (
    <Link to={`/team-matches/${id}`}>
      <li>
        <img src={teamUrl} className="logo" alt={name} />
        <h1 className="head">name</h1>
      </li>
    </Link>
  )
}
export default TeamCard
