import { useEffect, useState } from "react";
import UserData from "./components/UserData.jsx";
import './App.css'

const API = "https://jsonplaceholder.typicode.com/users";

const App = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setUsers(data);
      }
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchUsers(API);
  }, []);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th className="table-header">ID</th>
            <th className="table-header">Name</th>
            <th className="table-header">Email</th>
            <th className="table-header">Address</th>
          </tr>
        </thead>
        <tbody>
          <UserData users={users} />
        </tbody>
      </table>
    </>
  );
};

export default App;
