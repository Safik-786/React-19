import { useQueryClient } from "@tanstack/react-query"



const queryClient = useQueryClient()
export const useGetPostById = (id) => {
    const fetchById= async (id)=>{
        const resp= await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const data= await resp.json()
        return data
    }  
    return useQuery({
        queryKey:["post", id],
        queryFn:()=>fetchById(id)
    })      
}

export const useFectchPosts = () => {
    const fetctData= async ()=>{
        const resp= await fetch("https://jsonplaceholder.typicode.com/posts")
        const data= await resp.json()
        return data
    }
    return useQuery({
        queryKey:["posts"],
        queryFn:fetctData
     })
}


export const useCreatePost = () => {
    const createPost= async (newPost)=>{
        const resp= await fetch("https://jsonplaceholder.typicode.com/posts",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newPost)
        })
        const data= await resp.json()
        return data
    }
    return useMutation({
        mutationFn:createPost,
        onSuccess:()=>{
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ["posts"] });
        },
        onError:()=>{
                console.log("Error creating post")  
        }
    })
}