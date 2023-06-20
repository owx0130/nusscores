import { useState } from "react";
import axios from "axios";
const TOURNEY_URL = "https://django-backend-p3s7.onrender.com/api/post/";

export default function EditForm({ data }: any) {
  const [hallname, setHallName] = useState("");
  const [name, setName] = useState("");
	const [currmatricnumber, setCurrMatricNumber] = useState("");
  const [matricnumber, setMatricNumber] = useState("");
  const [players, setPlayers] = useState(0);
  const [sport, setSport] = useState("");
  const [brackettype, setBracketType] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios
      .post(TOURNEY_URL, {
        hallname: hallname,
        name: name,
        matricnumber: matricnumber,
        players: players,
        sport: sport,
        brackettype: brackettype,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setHallName("");
    setName("");
    setMatricNumber("");
    setPlayers(0);
    setSport("");
    setBracketType("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group row py-4">
          <div className="col"></div>
          <label className="col-1 col-form-label" htmlFor="usermatric">
            Enter Student Number (REQUIRED)
          </label>
          <input
            type="text"
            className="form-control w-25"
            id="usermatric"
            placeholder="Enter current student number"
            value={currmatricnumber}
            onChange={(e) => setCurrMatricNumber(e.target.value)}
          />
          <div className="col"></div>
        </div>
        <div className="form-group row pb-4">
          <div className="col"></div>
          <label className="col-1" htmlFor="hallname">
            Change hall name
          </label>
          <div className="col-3">
            <select
              className="custom-select"
              id="hallname"
              value={hallname}
              onChange={(e) => setHallName(e.target.value)}
            >
              <option selected>Name of Hall/RC</option>
              <option value="Temasek Hall">Temasek Hall</option>
              <option value="Eusoff Hall">Eusoff Hall</option>
              <option value="KEVII Hall">KEVII Hall</option>
              <option value="Kent Ridge Hall">Kent Ridge Hall</option>
              <option value="Sheares Hall">Sheares Hall</option>
            </select>
          </div>
          <div className="col"></div>
        </div>
        <div className="form-group row pb-4">
          <div className="col"></div>
          <label className="col-1 col-form-label" htmlFor="username">
            Change name
          </label>
          <input
            type="text"
            className="form-control w-25"
            id="username"
            placeholder="Enter new name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="col"></div>
        </div>
        <div className="form-group row pb-4">
          <div className="col"></div>
          <label className="col-1 col-form-label" htmlFor="usermatric">
            Change Student Number
          </label>
          <input
            type="text"
            className="form-control w-25"
            id="usermatric"
            placeholder="Enter new Student Number (must be unused)"
            value={matricnumber}
            onChange={(e) => setMatricNumber(e.target.value)}
          />
          <div className="col"></div>
        </div>
        <div className="form-group row pb-4">
          <div className="col"></div>
          <label className="col-1 col-form-label" htmlFor="players">
            Change number of players
          </label>
          <input
            type="number"
            className="form-control w-25"
            id="players"
            placeholder=""
            value={players}
            onChange={(e) => setPlayers(e.target.valueAsNumber)}
          />
          <div className="col"></div>
        </div>
        <div className="form-group row pb-4">
          <div className="col"></div>
          <label className="col-1" htmlFor="sport">
            Change sport
          </label>
          <div className="col-3">
            <select
              className="custom-select"
              id="sport"
              value={sport}
              onChange={(e) => setSport(e.target.value)}
            >
              <option selected>Sport</option>
              <option value="Football">Football</option>
              <option value="Basketball">Basketball</option>
              <option value="Swimming">Swimming</option>
              <option value="Water Polo">Water Polo</option>
              <option value="Netball">Netball</option>
            </select>
          </div>
          <div className="col"></div>
        </div>
        <div className="form-group row pb-5">
          <div className="col"></div>
          <label className="col-1" htmlFor="brackettype">
            Change Bracket Type
          </label>
          <div className="col-3">
            <select
              className="custom-select"
              id="brackettype"
              value={brackettype}
              onChange={(e) => setBracketType(e.target.value)}
            >
              <option selected>Bracket Type</option>
              <option value="Single Elimination">Single Eliminiation</option>
              <option value="Double Elimination">Double Elimination</option>
              <option value="Round Robin">Round Robin</option>
              <option value="Swiss Format">Swiss Format</option>
            </select>
          </div>
          <div className="col"></div>
        </div>
        <div className="row pt-5">
          <div className="col-5"></div>
          <button type="submit" className="btn btn-primary col">
            Submit
          </button>
          <div className="col-5"></div>
        </div>
      </form>
    </>
  );
}
