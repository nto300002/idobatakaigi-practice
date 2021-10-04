import React from 'react'
import { ListItem,ListItemText,Avatar,ListItemAvatar,Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { gravatarPath } from "../gravatar"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

const MessageItem = ({name, text}) => {
  const classes = useStyles();
  const avatarPath = gravatarPath(name);
  return (
      <ListItem divider={true}>
        <ListItemAvatar>
          <Avatar  src={avatarPath} />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={  
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {text}
              </Typography>
          }
        />
      </ListItem>
  )
}

export default MessageItem
