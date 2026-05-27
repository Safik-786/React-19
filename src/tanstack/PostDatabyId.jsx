import { useQuery } from "@tanstack/react-query";

const fetchPosts = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );

  if (!response.ok) throw new Error("Error fetching data");

  return response.json();
};

export const PostById = ({ id =3 }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts", id],

    queryFn: () => fetchPosts(id),
    // #it must be a callback function while passing id only

    staleTime: 10000,
    //   # 10 second tak if you revisit this page then no api calling
  });

  if (isLoading) return <p> Loading...</p>;

  if (error) return <p> Error occured: {error.message}</p>;

  return <>

    title:{data.title}
    {JSON.stringify(data)}

  </>;
};
