export function updateAllPosts(posts) {
  return {
    type: "UPDATE_ALL_POSTS",
    payload: posts
  };
}

export function createNewPost(post) {
  return {
    type: "CREATE_NEW_POST",
    payload: post
  }
}

export function incLikes(postId) {
  return {
    type: "INCREMENT_POST_LIKE",
    payload: postId
  }
}