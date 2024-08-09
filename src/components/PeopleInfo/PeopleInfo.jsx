import './PeopleInfo.css'
import imgCast from '../../assets/img/img-cast.jpg'
import PropTypes from 'prop-types';


function PeopleInfo({people}) {
  if (!people) {
    return <div></div>;
  }
  const genderMap = {
    1: 'Female',
    2: 'Male',
    3: 'Non-binary',
    0: 'Not set / not specified'
  };

  const releaseDateParts = people.birthday.split('-');
  let year = releaseDateParts[0];
  let formattedDate = `${releaseDateParts[2]}/${releaseDateParts[1]}/${releaseDateParts[0]}`;

  return (
    <div className="people-info">
      <div className="img-cast">
        <img src={`${import.meta.env.VITE_IMG_URL}${ people.profile_path}`} alt="img-people" />
      </div>

      <h3 className='personal-info'>Personal Info</h3>

      <div className="known-for">
          <h3>Known For</h3>
          <p>{people.known_for_department}</p>
      </div>

      {/* <div className="known-credits">
        <h3>Known Credits</h3>
        <p>68</p>
      </div> */}

      <div className="gender">
        <h3>Gender</h3>
        <p>{genderMap[people.gender]}</p>
      </div>

      <div className="birthday">
        <h3>Birthday</h3>
        <p>{formattedDate} <span className='age'>({new Date().getFullYear()-year} years old)</span></p>
      </div>

      <div className="place-of-birthday">
        <h3>Place of Birth</h3>
        <p>{people.place_of_birth}</p>
      </div>

      <div className="also-known-as">
        <h3>Also Known As</h3>
        {people.also_known_as && people.also_known_as.map((name, index) => (
          <p key={index}>{name}</p>
        ))}
      </div>



      

    </div>
  )
}

PeopleInfo.propTypes = {
  people: PropTypes.shape({
    profile_path: PropTypes.string,
    known_for_department: PropTypes.string,
    gender: PropTypes.number,
    birthday: PropTypes.string,
    place_of_birth: PropTypes.string,
    also_known_as: PropTypes.array,
  })
}


export default PeopleInfo