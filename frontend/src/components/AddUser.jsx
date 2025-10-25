import React, { useState } from "react";
import axios from "axios";

const AddUser = ({ onUserAdded }) => {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://0.0.0.0/0:3000/user", form);

      onUserAdded(); // gọi lại để refresh danh sách
      setForm({ name: "", email: "" });
    } catch (err) {
      console.error("Lỗi thêm user:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Thêm User mới</h3>
      <input
        name="name"
        placeholder="Tên"
        value={form.name}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <button type="submit">Thêm</button>
    </form>
  );
};

export default AddUser;