export default function reducer(state={
  posts: []
}, action) {
  switch (action.type) {
    case "UPDATE_ALL_POSTS": {
      return {
        ...state,
        posts: action.payload
      }
    }
    case "CREATE_NEW_POST": {
      return {
        ...state,
        posts: [action.payload].concat(state.posts)
      }
    }
    case "INCREMENT_POST_LIKE": {
      const updatePost = state.posts.filter(post => post.id === action.payload);
      if (updatePost.length) {
        updatePost[0].likes += 1;
      }
      const posts = [...state.posts];
      return {
        ...state,
        posts
      }
    }
  }

  return state;
}