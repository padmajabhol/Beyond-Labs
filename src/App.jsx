import { useState } from "react";

const users = [ 
{ id: 1, name: "Rahul", status: "active" }, 
{ id: 2, name: "Anita", status: "inactive" }, 
{ id: 3, name: "Vikram", status: "active" }, 
{ id: 4, name: "Sneha", status: "inactive" }, 
{ id: 5, name: "Aman", status: "active" }, 
];


function App() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filteredUsers = users.filter((user) => {
    const matchName = user.name.toLowerCase().startsWith(search.toLowerCase());
    const matchStatus = status === 'All' || user.status === status;

    return matchName && matchStatus;
  })

  return (
    <div>
      <div>
        <input value={search} placeholder="Search user" onChange={(e) => setSearch(e.target.value)} />
        <select value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="All">All</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      {
        filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div key={user.id} style={{display: "flex", gap: "10px"}}>
              <p>Name: {user.name}</p>
              <p>Status: {user.status}</p>
              </div>
          ))
        ) : (<p>No result found</p>)
      }
    </div>
  )
}

export default App
