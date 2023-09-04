'use client'; // client component
import useFetchPosts from "@/hooks/useFetchPosts";


export default function PostFetcher() {
  const { posts, loading, error } = useFetchPosts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const randomIndex = posts ? Math.floor(Math.random() * posts.length) : 0;
  const randomPost = posts ? posts[randomIndex] : null;

  return (
    <div className="PostPage">
     <br />
      {randomPost && (
        <div>
          <h3>{randomPost.title}</h3>
          <br />
          <p>{randomPost.body}</p>
        </div>
      )}
    </div>
  );
}
