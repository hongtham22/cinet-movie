import './PeopleInfo.css';
import PropTypes from 'prop-types';

function PeopleInfo({ people }) {
  if (!people) {
    return <div>Loading...</div>;
  }

  const genderMap = {
    1: 'Female',
    2: 'Male',
    3: 'Non-binary',
    0: 'Not set / not specified'
  };

  let formattedDate = '';
  let age = '';

  if (people.birthday) {
    const releaseDateParts = people.birthday.split('-');
    const year = releaseDateParts[0];
    formattedDate = `${releaseDateParts[2]}/${releaseDateParts[1]}/${releaseDateParts[0]}`;
    age = `${new Date().getFullYear() - year} years old`;
  }

  return (
    <div className="people-info">
      <div className="img-cast">
        <img src={`${import.meta.env.VITE_IMG_URL}${people.profile_path}`} alt="img-people" />
      </div>

      <h3 className='personal-info'>Personal Info</h3>

      <div className="known-for">
        <h3>Known For</h3>
        <p>{people.known_for_department || 'Not specified'}</p>
      </div>

      <div className="gender">
        <h3>Gender</h3>
        <p>{genderMap[people.gender]}</p>
      </div>

      <div className="birthday">
        <h3>Birthday</h3>
        <p>{formattedDate} <span className='age'>({age})</span></p>
      </div>

      <div className="place-of-birthday">
        <h3>Place of Birth</h3>
        <p>{people.place_of_birth || 'Not specified'}</p>
      </div>

      <div className="also-known-as">
        <h3>Also Known As</h3>
        {people.also_known_as && people.also_known_as.length > 0 ? (
          people.also_known_as.map((name, index) => (
            <p key={index}>{name}</p>
          ))
        ) : (
          <p>Not specified</p>
        )}
      </div>
    </div>
  );
}

PeopleInfo.propTypes = {
  people: PropTypes.shape({
    profile_path: PropTypes.string,
    known_for_department: PropTypes.string,
    gender: PropTypes.number,
    birthday: PropTypes.string,
    place_of_birth: PropTypes.string,
    also_known_as: PropTypes.arrayOf(PropTypes.string),
  })
};

export default PeopleInfo;
