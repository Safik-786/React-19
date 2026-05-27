// App.jsx
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { axiosInstancs } from "../ApiHandling/api/axios";

export default function App() {
    const queryClient = useQueryClient();
    const [title, setTitle] = useState("");

    const fetchData = async () => {
        const res = await axiosInstancs.get("/users");
        return res.data;
    }

    const createPostFunction = async (newPost) => {
        const res = await axiosInstancs.post("/users", newPost);
        return res.data;
    }

    // READ (GET)
    const { data: users, isLoading, isError, error} = useQuery({
        queryKey: ["users"],
        queryFn: fetchData
    });

    // CREATE (POST)
    const createPost = useMutation({
        mutationFn: createPostFunction,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["users"] });
        },
        onError: (error) => {
            console.error("Error creating post:", error);
        }
    });

    // ✅ UPDATE (PUT)
    const updatepost = useMutation({
        mutationFn: async (updatedPost,  id) => {
            const res = await axiosInstancs.put(`/users/${id}`, updatedPost);
            return res.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["users"] });
        },
    });

    updatepost.mutateAsync({ title: "Updated Title" }, 1) // Example usage: update post with ID 1

    // ✅ DELETE (DELETE)
    const deletePost = useMutation({
        mutationFn: async (id) => {
            await axiosInstancs.delete(`/users/${id}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["users"] });
        },
    });

    if (isLoading) return <p>Loading...</p>;

    if (isError) return <p>Error: {error.message}</p>;

    let formData={"title":title,"body":"Demo body","userId":1}

    const handleCreatepost = () => {
        createPost.mutateAsync(formData);
        setTitle("");
    }
createPost.isError
createPost.isPending

    return (
        <div style={{ padding: 20 }}>
            <h1>CRUD with TanStack Query + Axios</h1>

            {/* CREATE */}
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="New post title"
            />
            <button
                onClick={() =>
                    createPost.mutate({ title, body: "Demo body", userId: 1 })
                }
            >
                Add Post
            </button>

            <hr />

            {/* READ */}
            {users?.map((post) => (
                <div key={post.id} style={{ marginBottom: 10 }}>
                    <strong>{post.title}</strong>

                    {/* UPDATE */}
                    <button
                        onClick={() =>
                            updatePost.mutate({
                                ...post,
                                title: post.title + " (Updated)",
                            })
                        }
                        style={{ marginLeft: 10 }}
                    >
                        Update
                    </button>

                    {/* DELETE */}
                    <button
                        onClick={() => deletePost.mutate(post.id)}
                        style={{ marginLeft: 5 }}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}