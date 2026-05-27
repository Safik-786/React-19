import React, { useState, useEffect, useRef } from "react";  

  

const InfiniteScrollAPI = () => {  

  const [posts, setPosts] = useState([]);  
  const [page, setPage] = useState(1);  
  const [loading, setLoading] = useState(false);  
  const [hasMore, setHasMore] = useState(true);  
  const observerRef = useRef(null);  

  

  // Fetch posts from API  

  const fetchPosts = async () => {  
    if (loading) return;  
    setLoading(true);  
    try {  
      const res = await fetch(  
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`  
      );  
      const data = await res.json();  
      // if no more data  
      if (data.length === 0) {  
        setHasMore(false);  
      } else {  
        setPosts((prev) => [...prev, ...data]);  
      }  
    } catch (error) {  
      console.error("Error fetching posts:", error);  
    }  
    setLoading(false);  
  };  

  

  // Observe the loader div  

  useEffect(() => {  

    const observer = new IntersectionObserver(  
      (entries) => {  
        const target = entries[0];  
        if (target.isIntersecting && hasMore) {  
          setPage((prev) => prev + 1);  
        }  
      },  
      { threshold: 1.0 }  
    );  
    if (observerRef.current) observer.observe(observerRef.current);  
    
    return () => observer.disconnect();  
  }, [hasMore]);  

  

  // Fetch data whenever page changes  

  useEffect(() => {  
    fetchPosts();  
  }, [page]);  

  

  return (  

    <div className="p-6">  
      <h2 className="text-xl font-bold mb-4">Infinite Scroll with API (JSONPlaceholder)</h2>  
      <ul className="space-y-2">  
        {posts.map((post) => (  
          <li key={post.id} className="p-4 bg-gray-100 rounded shadow">  
            <h3 className="font-semibold">{post.title}</h3>  
            <p className="text-gray-600">{post.body}</p>  
          </li>  
        ))}  
      </ul>  

  

      {/* Observer div */}  

      {hasMore && (  
        <div ref={observerRef} className="mt-6 text-center text-blue-500">  
          {loading ? "Loading more..." : "Scroll to load more ↓"}  
        </div>  
      )}  

  

      {!hasMore && (  
        <p className="mt-6 text-center text-gray-500">No more posts to load</p>  
      )}  
    </div>  

  );  

};  

  

export default InfiniteScrollAPI;  