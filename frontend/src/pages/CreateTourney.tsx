import NavBar from '../components/NavBar'
import TourneyForm from '../components/TourneyForm'

export default function CreateTourney() {
  return (
    <>
      <NavBar />
      <div className="row">
        <div className="col"></div>
        <span className="col-5 text-center fs-5 py-3">
          Fill in and submit this form to create a new tournament bracket! Click "See all tournaments" to find
          your newly created tournament.
          <br /><br />
          Note: One student number can only be registered for one tournament.
        </span>
        <div className="col"></div>
        <hr />
      </div>
      <TourneyForm />
    </>
  )
}