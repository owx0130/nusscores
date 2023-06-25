import { useState } from 'react';
import axios from 'axios';
const url = "https://django-backend-p3s7.onrender.com/api/edit";

export default function TourneyIndivListing({ data }: any) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(data);
  const [error, setError] = useState('');

 

 const hallnames:string = editedData.hallname;
 const names:string = editedData.name;
 const matricnumbers:string = editedData.matricnumber;
 const playerss:number = editedData.players;
 const sport:string = editedData.sport;
 const brackettypes:string = editedData.brackettype;
 const id:string = editedData.id;
 


  const handleEdit = () => {
    setIsEditing(true);
  };


  const handleSave = () => {
    axios
      .put(url, {
        id: id,
        hallname: hallnames,
        name: names,
        matricnumber: matricnumbers,
        players: playerss,
        sports: sport,
        brackettype: brackettypes,
      }) // Assuming 'id' is the unique identifier of the data in your backend
      .then(function(response){
        // Handle successful update
        setIsEditing(false);
        console.log(response);
        // You can perform additional actions here, such as showing a success message
      })
      .catch(error => {
        // Handle error
        if (error.response) {
          // The request was made and the server responded with a status code outside the range of 2xx
          setError(error.response.data.message);
          console.log(editedData.hallname);
          console.log(names);
          console.log(matricnumbers);
          console.log(playerss);
          console.log(sport);
          console.log(brackettypes);
          console.log(editedData);
          console.log(data);
        } else if (error.request) {
          // The request was made but no response was received
          setError('No response received from the server.');
        } else {
          // Something else happened during the request
          setError('An error occurred while updating the data.');
        }
      });
      
  };

  const handleCancel = () => {
    setEditedData(data);
    setIsEditing(false);
    setError('');
  };




const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setEditedData((prevData: any) => ({ ...prevData, [name]: value }));
  
};

  return (
    <tr>
      <td>{isEditing ? <input type="text" name="hallname" value={editedData.hallname} onChange={handleChange} /> : data.hallname}</td>
      <td>{isEditing ? <input type="text" name="name" value={editedData.name} onChange={handleChange} /> : data.name}</td>
      <td>{isEditing ? <input type="text" name="matricnumber" value={editedData.matricnumber} onChange={handleChange} /> : data.matricnumber}</td>
      <td>{isEditing ? <input type="text" name="players" value={editedData.players} onChange={handleChange} /> : data.players}</td>
      <td>{isEditing ? <input type="text" name="sport" value={editedData.sport} onChange={handleChange} /> : data.sport}</td>
      <td>{isEditing ? <input type="text" name="brackettype" value={editedData.brackettype} onChange={handleChange} /> : data.brackettype}</td>
      <td>
        {isEditing ? (
          <>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <button onClick={handleEdit}>Edit</button>
        )}
        {error && <div className="error">{error}</div>}
      </td>
    </tr>
  );
}