// App.jsx
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { axiosInstancs } from "../ApiHandling/api/axios";

export default function UseQuery() {
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
    const { data: users, isLoading, isError, error } = useQuery({
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
    const updatePost = useMutation({
        mutationFn: async ({ id, updatedPost }) => {
            const res = await axiosInstancs.put(`/users/${id}`, updatedPost);
            return res.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["users"] });
        },
    });

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

    const handleCreatePost = () => {
        createPost.mutate({ title, body: "Demo body", userId: 1 });
        setTitle("");
    };

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
                onClick={handleCreatePost}
            >
                Add Post
            </button>

            <hr />

            {/* READ */}
            {[...users]?.reverse()?.map((post) => (
                <div key={post.id} style={{ marginBottom: 10 }}>

                    <h1>{post.name}</h1>
                    <div style={{ width: "200px", height: "200px" }}>
                        <img src={post.avatar} alt="" />
                    </div>
                    <strong>{post.title}</strong>

                    {/* UPDATE */}
                    <button
                        onClick={() =>
                            updatePost.mutate({
                                id: post.id,
                                updatedPost: {
                                    ...post,
                                    title: post.title + " (Updated)",
                                },
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
