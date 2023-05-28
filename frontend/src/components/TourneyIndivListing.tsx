export default function TourneyIndivListing({ data }: any) {
  return (
    <>
      <ul className="list-group list-group-flush">
        <li className="list-group-item pt-5">
          <span className="text-uppercase fs-4 me-4">Hall</span>
          {data.hallname}
        </li>
        <li className="list-group-item">
          <span className="text-uppercase fs-4 me-4">Name of Requestor</span>
          {data.name}
        </li>
        <li className="list-group-item">
          <span className="text-uppercase fs-4 me-4">Student Number</span>
          {data.matricnumber}
        </li>
        <li className="list-group-item">
          <span className="text-uppercase fs-4 me-4">Number of Players</span>
          {data.players}
        </li>
        <li className="list-group-item">
          <span className="text-uppercase fs-4 me-4">Sport</span>
          {data.sport}
        </li>
        <li className="list-group-item pb-5">
          <span className="text-uppercase fs-4 me-4">Bracket Type</span>
          {data.brackettype}
        </li>
      </ul>
    </>
  );
}
