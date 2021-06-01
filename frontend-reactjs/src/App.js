import React from "react";
import "./App.css";
import updatedInvites from './invitations_update'

function App() {
  const [listOfInvites, setlistOfInvites] = React.useState([]);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((listOfInvites) => {
        setlistOfInvites(listOfInvites.message.invites)
      });

    const timer = setTimeout(() => {
      alert('Invite List updated')
      setlistOfInvites(updatedInvites.invites)
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <h1>List of Invites</h1>
      <table className="table">
        <thead className="tr">
          <tr>
            <th className="th">invite_id</th>
            <th className="th">sender_id</th>
            <th className="th">sig_id</th>
            <th className="th">invite</th>
            <th className="th">vector</th>
            <th className="th">invite_time</th>
            <th className="th">user_id</th>
            <th className="th">status</th>
          </tr>
        </thead>
        {listOfInvites.map((invite, i) => 
        <tbody className="tr" key={i}>
          <tr>
            <td className="td">{invite.invite_id}</td>
            <td className="td">{invite.sender_id}</td>
            <td className="td">{invite.sig_id}</td>
            <td className="td">{invite.invite}</td>
            <td className="td">{invite.vector}</td>
            <td className="td">
              {
                (new Date(invite.invite_time)).toDateString()
              }
            </td>
            <td className="td">{invite.user_id}</td>
            <td className="td">{invite.status}</td>
          </tr>
        </tbody>
        )}
      </table>
    </div>
  );
}

export default App;
