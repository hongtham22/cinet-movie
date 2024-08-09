import { useParams } from 'react-router-dom';
import  { useEffect, useState } from 'react';
import PeopleContent from '../../components/PeopleContent/PeopleContent'
import PeopleInfo from '../../components/PeopleInfo/PeopleInfo'
import './PeopleDetail.css'

function PeopleDetail() {
  const { id } = useParams();
  const [peopleDetails, setPeopleDetails] = useState(null);
  const [peopleCredits, setPeopleCredits] = useState([]);

  useEffect(() => {
    const fetchPeopleData = async () => {

      try {

        const urlPeopleDetail = `https://api.themoviedb.org/3/person/${id}?language=en-US`;
        const urlPeopleCredits = `https://api.themoviedb.org/3/person/${id}/combined_credits?language=en-US`;
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
          }
        };

        // People Detail
        const responsePeople = await fetch(urlPeopleDetail, options);
        const dataPeopleDetail = await responsePeople.json();

        setPeopleDetails(dataPeopleDetail);

        console.log(dataPeopleDetail);

        // People Credit
        
        const responsePeopleCredit = await fetch(urlPeopleCredits, options) ;
        const dataPeopleCredit = await responsePeopleCredit.json();
        setPeopleCredits(dataPeopleCredit.cast || []);
        console.log(dataPeopleCredit);
        
      } catch (error) {
        console.log(error);
      }


    };

    fetchPeopleData();

  }, [id]);

  return (
    <div className='people-detail'>
        <PeopleInfo people = {peopleDetails}></PeopleInfo>
        <PeopleContent people = {peopleDetails}
                      credit = {peopleCredits}
        ></PeopleContent>
    </div>
  )
}

export default PeopleDetail