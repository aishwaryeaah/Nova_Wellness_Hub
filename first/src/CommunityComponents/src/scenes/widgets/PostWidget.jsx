import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
  DeleteOutlineOutlined,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  IconButton,
  Typography,
  useTheme,
  InputBase,
  Button,
  Avatar,
} from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import Friend from "../../components/Friend";
import WidgetWrapper from "../../components/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../../state/index.js";

const PostWidget = ({
  postId,
  postUserId,
  name,
  description,
  location,
  picturePath,
  userPicturePath,
  likes,
  comments,
}) => {
  const [isComments, setIsComments] = useState(false);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const loggedInUserId = useSelector((state) => state.user._id);
  const isLiked = Boolean(likes[loggedInUserId]);
  const likeCount = Object.keys(likes).length;

  const { palette } = useTheme();
  const main = palette.neutral.main;
  const primary = palette.primary.main;
  const likeColor = isLiked ? primary : main;

  const patchLike = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/posts/${postId}/like`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId: loggedInUserId }),
        }
      );
      const updatedPost = await response.json();
      dispatch(setPost({ post: updatedPost }));
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  const handleAddComment = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/posts/${postId}/comment`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId: loggedInUserId, comment }),
        }
      );
      const updatedPost = await response.json();
      dispatch(setPost({ post: updatedPost }));
      setComment(""); // Clear the comment input field after submission
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const handleDeleteComment = async (_id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this comment?"
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `http://localhost:3001/posts/${postId}/comment/${_id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        const updatedPost = await response.json();
        dispatch(setPost({ post: updatedPost }));
      } else {
        console.error("Failed to delete comment");
      }
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  const handleLike = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/posts/${postId}/like`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId: loggedInUserId }),
        }
      );
      if (response.ok) {
        const updatedPost = await response.json();
        dispatch(setPost({ post: updatedPost }));
      } else {
        console.error("Failed to like post");
      }
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };
  

  return (
    <WidgetWrapper m="2rem 0">
      <Friend
        friendId={postUserId}
        name={name}
        subtitle={location}
        userPicturePath={userPicturePath}
      />
      <Typography color={main} sx={{ mt: "1rem" }}>
        {description}
      </Typography>
      {picturePath && (
        <img
          width="100%"
          height="auto"
          alt="post"
          style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
          src={`http://localhost:3001/assets/${picturePath}`}
        />
      )}
      <FlexBetween mt="0.25rem">
        <FlexBetween gap="1rem">
          <FlexBetween gap="0.3rem">
            <IconButton onClick={handleLike}>
              {isLiked ? (
                <FavoriteOutlined sx={{ color: likeColor }} />
              ) : (
                <FavoriteBorderOutlined />
              )}
            </IconButton>
            <Typography>{likeCount}</Typography>
          </FlexBetween>

          <FlexBetween gap="0.3rem">
            <IconButton onClick={() => setIsComments(!isComments)}>
              <ChatBubbleOutlineOutlined />
            </IconButton>
            <Typography>{comments.length}</Typography>
          </FlexBetween>
        </FlexBetween>

        <IconButton>
          <ShareOutlined />
        </IconButton>
      </FlexBetween>
      {isComments && (
        <Box mt="0.5rem">
          {comments.map(({ userId, userName, userImage, comment, _id }, i) => (
            <Box key={`${userId}-${i}`}>
              <Divider />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  m: "0.5rem 0",
                  pl: "1rem",
                }}
              >
                <Avatar src={userImage} alt={userName} sx={{ mr: "1rem" }} />
                <Typography sx={{ color: main }}>
                  <strong>{userName}:</strong> {comment}
                </Typography>
                {loggedInUserId === userId && (
                  <IconButton onClick={() => handleDeleteComment(_id)}>
                    <DeleteOutlineOutlined />
                  </IconButton>
                )}
              </Box>
            </Box>
          ))}
          <Divider />
        </Box>
      )}
      {/* Comment input field and button */}
      <Box mt="1rem" sx={{ display: "flex", alignItems: "center" }}>
        <InputBase
          placeholder="Add a comment..."
          onChange={(e) => setComment(e.target.value)}
          value={comment}
          sx={{
            flex: 1,
            backgroundColor: palette.neutral.light,
            borderRadius: "2rem",
            padding: "0.5rem 1rem",
          }}
        />
        <Button
          onClick={handleAddComment}
          sx={{
            marginLeft: "0.5rem",
            color: palette.background.alt,
            backgroundColor: palette.primary.main,
            borderRadius: "3rem",
          }}
        >
          Comment
        </Button>
      </Box>
    </WidgetWrapper>
  );
};

export default PostWidget;
