import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
    fetchUsers,
    createUser,
    updateUser,
    deleteUser,
} from "./useUsersApi";
import { useState } from "react";
import { set } from "react-hook-form";

export default function CRUDTanstack() {
    const queryClient = useQueryClient();

    const [isOpen, setIsOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [deletingId, setDeletingId] = useState(null);


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const { data: users = [], isLoading } = useQuery({
        queryKey: ["users"],
        queryFn: fetchUsers,
    });

    const createMutation = useMutation({
        mutationFn: createUser,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["users"] });
            closeModal();
        },
    });

    const updateMutation = useMutation({
        mutationFn: updateUser,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["users"] });
            closeModal();
        },
    });

    const deleteMutation = useMutation({
        mutationFn: deleteUser,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["users"] });
            setDeletingId(null);
        },
    });

    const openCreateModal = () => {
        setIsEdit(false);
        setCurrentUser(null);
        setName("");
        setEmail("");
        setIsOpen(true);
    };

    const openEditModal = (user) => {
        setIsEdit(true);
        setCurrentUser(user);
        setName(user.name);
        setEmail(user.email);
        setIsOpen(true);
    };

    const closeModal = () => {
        if (
            createMutation.isPending ||
            updateMutation.isPending
        )
            return;
        setIsOpen(false);
        setIsEdit(false);
        setCurrentUser(null);
        setName("");
        setEmail("");
    };

    const handleSubmit = () => {
        if (!name || !email) return;

        if (isEdit) {
            updateMutation.mutate({
                id: currentUser.id,
                data: { name, email },
            });
        } else {
            createMutation.mutate({ name, email });
        }
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-10 w-10 border-4 border-blue-600 border-t-transparent" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-3xl mx-auto bg-white shadow rounded p-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Users CRUD</h2>
                    <button
                        onClick={openCreateModal}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        + Add User
                    </button>
                </div>

                {/* USERS LIST */}
                <div className="space-y-3">
                    {users.map((user) => (
                        <div
                            key={user.id}
                            className="flex justify-between items-center border rounded p-4"
                        >
                            <div>
                                <p className="font-semibold">{user.name}</p>
                                <p className="text-sm text-gray-600">{user.email}</p>
                            </div>

                            <div className="flex gap-2">
                                <button
                                    onClick={() => openEditModal(user)}
                                    disabled={deleteMutation.isPending}
                                    className="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500 text-sm disabled:opacity-50"
                                >
                                    Edit
                                </button>

                                <button
                                    onClick={() => {
                                        deleteMutation.mutate(user.id)
                                        setDeletingId(user.id)
                                    }}
                                    disabled={deleteMutation.isPending}
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm disabled:opacity-50 flex items-center gap-1"
                                >
                                    {deleteMutation.isPending && deletingId === user.id ? (
                                        <>
                                            <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                                            Deleting...
                                        </>
                                    ) : (
                                        "Delete"
                                    )}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* MODAL */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="bg-white rounded-lg w-full max-w-md p-6">
                        <h3 className="text-xl font-bold mb-4">
                            {isEdit ? "Edit User" : "Add User"}
                        </h3>

                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-400"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div className="flex justify-end gap-3 mt-6">
                            <button
                                onClick={closeModal}
                                disabled={
                                    createMutation.isPending ||
                                    updateMutation.isPending
                                }
                                className="px-4 py-2 border rounded disabled:opacity-50"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={handleSubmit}
                                disabled={
                                    createMutation.isPending ||
                                    updateMutation.isPending
                                }
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2"
                            >
                                {(createMutation.isPending ||
                                    updateMutation.isPending) && (
                                        <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                                    )}
                                {isEdit
                                    ? updateMutation.isPending
                                        ? "Updating..."
                                        : "Update"
                                    : createMutation.isPending
                                        ? "Creating..."
                                        : "Create"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
