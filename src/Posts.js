import Post from './Post';

function Posts(inputProps) {
  const showPost = (post) => {
    return (
      <Post post={post} key={post.id} />
    );
  }

  return (
    <div>
      {inputProps.posts && inputProps.posts.map(post => showPost(post))}
    </div>
  );
}

export default Posts;
