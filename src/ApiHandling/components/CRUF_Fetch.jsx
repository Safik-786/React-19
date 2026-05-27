import { useEffect, useState } from "react";
import { get, set } from "react-hook-form";

const API_URL = "https://69832df99c3efeb892a4bc8e.mockapi.io/users";
const API_KEY = "YOUR_API_KEY";

export default function CRUD_Fetch() {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [editingId, setEditingId] = useState(null);

    // READ
    const getUsers = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    // CREATE
    const createUser = async () => {
        if (!name || !email) return;

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": API_KEY,
                },
                body: JSON.stringify({
                    name,
                    email,
                }),
            });

            const newUser = await response.json();

            // setUsers([...users, newUser]);
            // setName("");
            // setEmail("");

            getUsers(); // ✅ fetch updated list after creation
            setName("");
            setEmail("");
        } catch (error) {
            console.error("Error creating user:", error);
        }
    };

    // UPDATE
    const updateUser = async (id) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": API_KEY,
                },
                body: JSON.stringify({
                    name: name,
                }),
            });

            const updatedUser = await response.json();

            getUsers(); // ✅ fetch updated list after update
            setName("");


        } catch (error) {
            console.error("Error updating user:", error);
        }
    };


    const handleUpdate = (user) => {
        setName(user.name);
        // setEmail(user.email);

        setEditingId(user.id);

        // console.log(user)

        // updateUser(user.id);

    }

    // DELETE
    const deleteUser = async (id) => {
        try {
            await fetch(`${API_URL}/${id}`, {
                method: "DELETE",
                headers: {
                    "x-api-key": API_KEY,
                },
            });
            // setUsers(users.filter((user) => user.id !== id));
            getUsers(); // ✅ fetch updated list after deletion
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editingId) {
            updateUser(editingId);
            setEditingId(null);
        } else {
            createUser();
            // getUsers(); // ✅ fetch updated list after creation
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h1>CRUD App</h1>

            <form action="" onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Name"
                    className="border m-5"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Email"
                    className="border m-5"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <button type="submit" className="border m-5">
                    {editingId ? `Update User (${editingId})` : "Add User"}
                </button>
            </form>

            <hr />

            {[...users].reverse().map((user) => (
                <div
                    key={user.id}
                    style={{
                        border: "1px solid #ccc",
                        marginBottom: "10px",
                        padding: "10px",
                    }}
                >
                    <p>
                        <strong>{user.name}</strong>
                    </p>

                    <p>{user.email}</p>

                    <button onClick={() => handleUpdate(user)}>
                        Update
                    </button>

                    <button
                        onClick={() => deleteUser(user.id)}
                        style={{ marginLeft: "10px" }}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}