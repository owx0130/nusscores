import { useLocation } from "react-router-dom";
import EditForm from "../components/EditForm";
import NavBar from "../components/NavBar";

export default function EditTourney() {
  let { state } = useLocation();
  console.log(state)

  return (
    <>
      <NavBar />
      <div className="row">
        <div className="col"></div>
        <span className="col-5 text-center fs-5 py-3">
          Fill in your student number and change the desired fields accordingly.
          <br />
          <br />
          Leave unchanged fields blank/in default state.
        </span>
        <div className="col"></div>
      </div>
      <hr />
      <EditForm data={state}/>
    </>
  );
}
