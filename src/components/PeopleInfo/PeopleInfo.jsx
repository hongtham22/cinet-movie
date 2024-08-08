import './PeopleInfo.css'
import imgCast from '../../assets/img/img-cast.jpg'

function PeopleInfo() {
  return (
    <div className="people-info">
      <div className="img-cast">
        <img src={imgCast} alt="img-cast" />
      </div>

      <h3 className='personal-info'>Personal Info</h3>

      <div className="known-for">
          <h3>Known For</h3>
          <p>Acting</p>
      </div>

      <div className="known-credits">
        <h3>Known Credits</h3>
        <p>68</p>
      </div>

      <div className="gender">
        <h3>Gender</h3>
        <p>Female</p>
      </div>

      <div className="birthday">
        <h3>Birthday</h3>
        <p>September 12, 1997 <span className='age'>(26 years old)</span></p>
      </div>

      <div className="place-of-birthday">
        <h3>Place of Birth</h3>
        <p>Spokane, Washington, USA</p>
      </div>

      <div className="also-know-as">
        <h3>Also Known As</h3>
        <p>Sydney Bernice Sweeney</p>
        <p>시드니 스위니</p>
        <p> 西德妮·斯威尼</p>
        <p>シドニー・スウィーニー</p>
      </div>



      

    </div>
  )
}

export default PeopleInfo