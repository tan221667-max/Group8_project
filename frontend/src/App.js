import React, { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // ✅ Lấy danh sách user khi trang load
  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  }, []);

  // ✅ Hàm thêm user mới
  const handleAddUser = () => {
    if (!name || !email) return alert("Vui lòng nhập đầy đủ thông tin!");
    fetch("http://localhost:5000/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email })
    })
      .then(res => res.json())
      .then(() => {
        setName("");
        setEmail("");
        // Sau khi thêm → reload danh sách
        return fetch("http://localhost:5000/api/users")
          .then(res => res.json())
          .then(data => setUsers(data));
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>Quản lý User (MongoDB)</h1>
      <input
        placeholder="Tên user"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleAddUser}>Thêm</button>

      <h2>Danh sách User</h2>
      <ul>
        {users.map((u) => (
          <li key={u._id}>{u.name} - {u.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;