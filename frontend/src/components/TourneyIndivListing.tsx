import { Link } from "react-router-dom";

export default function TourneyIndivListing({ data }: any) {
  return (
    <tr>
      <td>{data.hallname}</td>
      <td>{data.name}</td>
      <td>{data.matricnumber}</td>
      <td>{data.players}</td>
      <td>{data.sport}</td>
      <td>{data.brackettype}</td>
      <td>
        <Link
          to="/edittourney"
          state={{
            hallname: data.hallname,
            name: data.name,
            matricnumber: data.matricnumber,
            players: data.players,
            sport: data.sport,
            brackettype: data.brackettype,
          }}
        >
          Edit
        </Link>
      </td>
    </tr>
  );
}
