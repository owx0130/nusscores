import NavBar from '../components/NavBar'
import TourneyIndivListing from '../components/TourneyIndivListing'
import axios from 'axios'
import { useState } from 'react'
const url = "https://django-backend-p3s7.onrender.com/api/get"

export default function AllTourney() {

  const[data, setData] = useState([])

  axios.get(url)
  .then (function (response) {
    setData(response.data)
  });

  return (
    <>
      <NavBar />
      <ul className="list-group list-group-flush">
        <li className="list-group-item fw-bold fs-3">All Tournaments</li>
        <li className="list-group-item fs-5">
          See below for a list of all ongoing tournaments! Newer tournaments are appended
          at the bottom of the webpage.
        </li>
      </ul>
      {data.map((element) => <TourneyIndivListing data={element}/>)}
    </>
  )
}