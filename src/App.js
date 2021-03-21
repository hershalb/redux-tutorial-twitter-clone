import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Grid, makeStyles, Button } from '@material-ui/core';
import { updateAllPosts, createNewPost } from './actions/postAction';
import Posts from './Posts';
import { posts as playPosts } from './playground/posts';

const useStyles = makeStyles({
  input: {
    paddingBottom: 50
  }
});

function App() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.posts);
  const [text, updateText] = useState("");
  const classes = useStyles();

  useEffect(() => {
    setTimeout(() => {
      dispatch(updateAllPosts(playPosts));
    }, 1000);
  }, [])

  const addNewPost = () => {
    const newPost = {
      'name': 'New User',
      'id': Date.now(),
      'post': text,
      'likes': 0,
      'comments': [],
      'created_at': Date.now()
    };
    dispatch(createNewPost(newPost));
    updateText("");
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs>
      </Grid>
      <Grid item xs={6}>
        <TextField
          variant="outlined"
          placeholder="What's happening?"
          value={text}
          fullWidth
          className={classes.input}
          onChange={(e) => updateText(e.target.value)}
          InputProps={{
            endAdornment: <Button onClick={addNewPost}>Post</Button>
          }}
        />
        <Posts posts={posts} />
      </Grid>
      <Grid item xs>
      </Grid>
    </Grid>
  );
}

export default App;