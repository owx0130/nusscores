import NavBar from "../components/NavBar";
import TourneyForm from "../components/TourneyForm";
import TourneyIndivListing from "../components/TourneyIndivListing";
import axios from "axios";
import { useState } from "react";
const url = "http://localhost:8000/api/get";

export default function CreateTourney() {
  const [data, setData] = useState([]);

  axios
    .get(url)
    .then(function (response) {
      setData(response.data.slice(-1));
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <>
      <NavBar />
      <div className="row">
        <div className="col"></div>
        <span className="col-5 text-center fs-5 py-3">
          Fill in and submit this form to create a new tournament bracket! Click
          "See all tournaments" to find your newly created tournament.
          <br />
          <br />
          Note: One student number can only be registered for one tournament.
        </span>
        <div className="col"></div>
        <hr />
      </div>
      <TourneyForm />
      <div className="row" style={{padding: 50 }}>
        <div className="col"></div>
        <table className="table table-striped w-75" >
          <thead >
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
//
    