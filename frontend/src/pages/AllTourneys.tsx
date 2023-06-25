import NavBar from '../components/NavBar'
import TourneyIndivListing from '../components/TourneyIndivListing'
import axios from 'axios'
import { useState } from 'react'
const url = "https://django-backend-p3s7.onrender.com/api/get"

export default function AllTourney() {
  const [data, setData] = useState([]);

  axios.get(url).then(function (response) {
    setData(response.data);
  });

  return (
    <>
      <NavBar />
      <ul className="list-group list-group-flush">
        <li className="list-group-item fw-bold fs-3">All Tournaments</li>
        <li className="list-group-item fs-5">
          See below for a list of all ongoing tournaments! Newer tournaments are
          appended at the bottom of the webpage.
        </li>
      </ul>
      <div className="row">
        <div className="col"></div>
        <table className="table table-striped w-75">
          <thead>
            <tr>
              <th scope="col">Hall Name</th>
              <th scope="col">Name</th>
              <th scope="col">Matriculation Number</th>
              <th scope="col">No. of players</th>
              <th scope="col">Sport</th>
              <th scope="col">Bracket Type</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <TourneyIndivListing data={item} />
            ))}
          </tbody>
        </table>
        <div className="col"></div>
      </div>
    </>
  );
}
