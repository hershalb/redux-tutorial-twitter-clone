import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import { FavoriteBorder } from '@material-ui/icons';
import { incLikes } from './actions/postAction';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 20
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Post(inputProps) {
  const dispatch = useDispatch();
  const classes = useStyles();
  
  const updateLike = () => {
    dispatch(incLikes(inputProps.post.id));
  }

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {inputProps.post.name}
        </Typography>
        <Typography variant="h5" component="h2">
          {inputProps.post.post}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          <IconButton onClick={updateLike}>
            <FavoriteBorder/>
          </IconButton>
          {inputProps.post.likes} Likes, {inputProps.post.comments.length} Comments
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Post;