import PeopleContent from '../../components/PeopleContent/PeopleContent'
import PeopleInfo from '../../components/PeopleInfo/PeopleInfo'
import './PeopleDetail.css'

function PeopleDetail() {
  return (
    <div className='people-detail'>
        <PeopleInfo></PeopleInfo>
        <PeopleContent></PeopleContent>
    </div>
  )
}

export default PeopleDetail