import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ClearIcon from '@mui/icons-material/Clear';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import { blue, red } from '@mui/material/colors';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import RedditIcon from '@mui/icons-material/Reddit';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { TextField, InputAdornment } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Tooltip from '@mui/material/Tooltip';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Share = ({ open, onClose, handleClose, postimg }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth TransitionComponent={Transition} keepMounted>
      <DialogTitle style={{ justifyContent: 'center' }}>Share</DialogTitle>
      <DialogContent>
        <DialogContentText>Share this post with your friends</DialogContentText>
      </DialogContent>

      <IconButton
        aria-label="share"
        style={{ position: 'absolute', top: 16, right: 16 }}
        onClick={() => {
          handleClose(false);
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogActions style={{ justifyContent: 'center' }}>
        <Tooltip title="Share on WhatsApp">
          <IconButton sx={{ color: '#66bb6a' }} aria-label="whatsApp">
            <WhatsAppIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Share on Instagram">
          <IconButton sx={{ color: '#b388ff' }} aria-label="instagram">
            <InstagramIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Share on Facebook">
          <IconButton sx={{ color: '#3f51b5' }} aria-label="facebook">
            <FacebookIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Share on Reddit">
          <IconButton sx={{ color: '#ef5350' }} aria-label="reddit">
            <RedditIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Share on LinkdIn">
          <IconButton sx={{ color: '#1976d2' }} aria-label="linkedin">
            <LinkedInIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Send to a friend">
          <IconButton sx={{ color: '#1976d2' }} aria-label="send-to-a-friend">
            <SendIcon />
          </IconButton>
        </Tooltip>
      </DialogActions>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          <TextField
            fullWidth
            value="https://goo.gl/maps/gBcN2zv1L5j7dxzTA"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Tooltip title="Copy Link">
                    <IconButton color='primary' aria-label="copy-link">
                      <ContentCopyIcon />
                    </IconButton>
                  </Tooltip>
                </InputAdornment>
              ),
              readOnly: true
            }}
          />
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default function PostCard({ pfp, postimg, title, discription, discription2, likes, comments, setclose, type}) {
  const [expanded, setExpanded] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [saved, setSaved] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 720, margin: 'auto', boxShadow: '0px 8px 17px -8px rgba(0,0,0,0.4)' }}>
      <CardHeader
        avatar={<Avatar alt="User 1" src={pfp} />}
        action={
          <IconButton aria-label="settings" onClick={()=>{setclose(false)}}>
            <ClearIcon />
          </IconButton>
        }
        subheader="September 14, 2016"
      />
      <CardMedia component="img" height="450" image={postimg} alt="home" />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {discription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Tooltip title="Like">
          <IconButton
            aria-label="like"
            color={likes > 0 || liked ? 'error' : ''}
            onClick={() => {
              setLiked(!liked);
            }}
          >
            <Typography variant="h5" component="h2">
              {likes}
            </Typography>
            <FavoriteIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Save">
          <IconButton
            aria-label="save"
            onClick={() => {
              setSaved(!saved);
            }}
            color={saved ? 'primary' : ''}
          >
            <BookmarkIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Share">
          <IconButton
            aria-label="share"
            onClick={() => {
              setShareOpen(true);
            }}
          >
            <ShareIcon />
          </IconButton>
        </Tooltip>
        <Share
          open={shareOpen}
          onClose={() => {
            setShareOpen(false);
          }}
          handleClose={setShareOpen}
        />
        <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{discription2}</Typography>
          <Typography paragraph></Typography>
          <Typography>Set aside off of the heat to let rest for 10 minutes, and then serve.</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
