import React, { useEffect, useState } from 'react';
import { axiosInstancs } from '../api/axios';

export default function CRUD() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: '' });
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axiosInstancs.get("/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  const createUser = async () => {
    try {
      await axiosInstancs.post("/users", { name: formData.name });
      fetchUsers();
      closeForm();
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const updateUser = async () => {
    try {
      await axiosInstancs.put(`/users/${formData.id}`, formData);
      fetchUsers();
      closeForm();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const deleteUser = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) {
      return;
    }
    
    try {
      await axiosInstancs.delete(`/users/${id}`);
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleEdit = (user) => {
    setFormData({ id: user.id, name: user.name });
    setIsEditing(true);
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      updateUser();
    } else {
      createUser();
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const closeForm = () => {
    setShowForm(false);
    setIsEditing(false);
    setFormData({ name: '' });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <div className='animate-spin border-4 h-12 w-12 rounded-full border-t-transparent border-blue-500'></div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className='p-5 shadow mb-6 rounded text-end'>
        <button 
          onClick={() => setShowForm(true)}
          className='px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors'
        >
          Create New
        </button>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {[...users].reverse().map((user) => (
          <div key={user.id} className="shadow rounded-xl p-4 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">{user.name}</h3>
              <p className="text-gray-500 text-sm">ID: {user.id}</p>
              <p className="text-gray-500 text-sm">Created: {new Date(user.createdAt).toLocaleDateString()}</p>
              <div className="mt-3 space-x-2">
                <button 
                  onClick={() => handleEdit(user)}
                  className='px-3 py-1 bg-blue-100 text-blue-600 rounded hover:bg-blue-200'
                >
                  Edit
                </button>
                <button 
                  onClick={() => deleteUser(user.id)}
                  className='px-3 py-1 bg-red-100 text-red-600 rounded hover:bg-red-200'
                >
                  Delete
                </button>
              </div>
            </div>
            {user.avatar && (
              <div>
                <img 
                  src={user.avatar} 
                  height={80} 
                  width={80} 
                  alt={user.name}
                  className="rounded-full"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {showForm && (
        <div className='fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4'>
          <div className='bg-white rounded-xl p-6 w-full max-w-md'>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <h2 className='text-xl font-semibold text-blue-600 text-center mb-4'>
                {isEditing ? 'Edit User' : 'Add New User'}
              </h2>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none'
                  placeholder='Enter name'
                  required
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button 
                  type="submit"
                  className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  {isEditing ? 'Update' : 'Create'}
                </button>
                <button 
                  type="button"
                  onClick={closeForm}
                  className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}