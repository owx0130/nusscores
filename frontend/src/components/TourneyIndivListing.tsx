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
        <a href="/edittourney">Edit</a>
      </td>
    </tr>
  );
}
