import React, { useEffect, useState } from "react";
import axios from "axios";


function UserList() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "" });

  // ✅ Lấy danh sách users từ backend
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3000/users");
      setUsers(res.data);
    } catch (error) {
      console.error("Lỗi khi tải users:", error);
    }
  };

  // ✅ Xóa user
  const handleDelete = async (id) => {
    if (window.confirm("Bạn có chắc muốn xóa user này không?")) {
      try {
        await axios.delete(`http://localhost:3000/users/${id}`);
        setUsers(users.filter((user) => user._id !== id));
        alert("Đã xóa user thành công!");
      } catch (error) {
        console.error("Lỗi khi xóa:", error);
      }
    }
  };

  // ✅ Khi nhấn nút “Sửa” → hiển thị form
  const handleEdit = (user) => {
    setEditingUser(user);
    setFormData({ name: user.name, email: user.email });
  };

  // ✅ Cập nhật user
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/users/${editingUser._id}`, formData);
      alert("Cập nhật thành công!");
      setEditingUser(null);
      fetchUsers(); // Tải lại danh sách
    } catch (error) {
      console.error("Lỗi khi cập nhật:", error);
    }
  };

  return (
    <div>
      <h2>Danh sách người dùng</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} - {user.email}
            <button onClick={() => handleEdit(user)}>Sửa</button>
            <button onClick={() => handleDelete(user._id)}>Xóa</button>
          </li>
        ))}
      </ul>

      {editingUser && (
        <div style={{ marginTop: "20px" }}>
          <h3>Chỉnh sửa người dùng</h3>
          <form onSubmit={handleUpdate}>
            <input
              type="text"
              placeholder="Tên"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <button type="submit">Lưu</button>
            <button type="button" onClick={() => setEditingUser(null)}>
              Hủy
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
<UserForm
  selectedUser={selectedUser} // user đang sửa (nếu có)
  onSaved={fetchUsers}        // callback reload danh sách
  onCancel={() => setSelectedUser(null)} // hủy bỏ
/>


export default UserList;
