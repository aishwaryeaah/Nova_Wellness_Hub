import {
  ManageAccountsOutlined,
  EditOutlined,
  LocationOnOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material";
import { Box, Typography, Divider, useTheme } from "@mui/material";
import UserImage from "../../components/UserImage";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserWidget = ({ userId, picturePath }) => {
  const [user, setUser] = useState(null);
  const [twitterLink, setTwitterLink] = useState("");
  const [linkedinLink, setLinkedinLink] = useState("");
  const [editTwitter, setEditTwitter] = useState(false);
  const [editLinkedin, setEditLinkedin] = useState(false);
  const { palette } = useTheme();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;
  const main = palette.neutral.main;

  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!user) {
    return null;
  }

  const {
    firstName,
    lastName,
    location,
    occupation,
    viewedProfile,
    impressions,
    friends,
  } = user;

  const handleEditTwitter = () => {
    if (editTwitter) {
      // If already in edit mode, save the Twitter link
      handleSaveTwitter();
    }
    setEditTwitter(!editTwitter); // Toggle the edit mode
  };

  const handleEditLinkedin = () => {
    if (editLinkedin) {
      // If already in edit mode, save the LinkedIn link
      handleSaveLinkedin();
    }
    setEditLinkedin(!editLinkedin); // Toggle the edit mode
  };

  const handleSaveTwitter = () => {
    setEditTwitter(false);
    // Save Twitter link to database
  };

  const handleSaveLinkedin = () => {
    setEditLinkedin(false);
    // Save LinkedIn link to database
  };

  return (
    <WidgetWrapper>
      {/* FIRST ROW */}
      <FlexBetween
        gap="0.5rem"
        pb="1.1rem"
        onClick={() => navigate(`/profile/${userId}`)}
      >
        <FlexBetween gap="1rem">
          <UserImage image={picturePath} />
          <Box>
            <Typography
              variant="h4"
              color={dark}
              fontWeight="500"
              sx={{
                "&:hover": {
                  color: palette.primary.light,
                  cursor: "pointer",
                },
              }}
            >
              {firstName} {lastName}
            </Typography>
            <Typography color={medium}>
              {friends ? `${friends.length} friends` : "No friends"}
            </Typography>
          </Box>
        </FlexBetween>
        <ManageAccountsOutlined />
      </FlexBetween>

      <Divider />

      {/* SECOND ROW */}
      <Box p="1rem 0">
        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
          <LocationOnOutlined fontSize="large" sx={{ color: main }} />
          <Typography color={medium}>{location}</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="1rem">
          <WorkOutlineOutlined fontSize="large" sx={{ color: main }} />
          <Typography color={medium}>{occupation}</Typography>
        </Box>
      </Box>

      <Divider />

      {/* THIRD ROW */}
      <Box p="1rem 0">
        <FlexBetween mb="0.5rem">
          <Typography color={medium}>Who's viewed your profile</Typography>
          <Typography color={main} fontWeight="500">
            {viewedProfile}
          </Typography>
        </FlexBetween>
        <FlexBetween>
          <Typography color={medium}>Impressions of your post</Typography>
          <Typography color={main} fontWeight="500">
            {impressions}
          </Typography>
        </FlexBetween>
      </Box>

      <Divider />

      {/* FOURTH ROW */}
      <Box p="1rem 0">
        <Typography fontSize="1rem" color={main} fontWeight="500" mb="1rem">
          Social Profiles
        </Typography>

        <FlexBetween gap="1rem" mb="0.5rem">
          <FlexBetween gap="1rem">
            <img src="../assets/twitter.png" alt="twitter" />
            <Box>
              <Typography color={main} fontWeight="500">
                Twitter
              </Typography>
              {editTwitter ? (
                <input
                  type="text"
                  placeholder="Enter Twitter profile link"
                  value={twitterLink}
                  onChange={(e) => setTwitterLink(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    borderRadius: "0.25rem",
                    border: "1px solid #ccc",
                  }}
                />
              ) : (
                <Typography color={medium}>
                  {twitterLink ? (
                    <a
                      href={twitterLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {twitterLink}
                    </a>
                  ) : (
                    "Social Network"
                  )}
                </Typography>
              )}
            </Box>
          </FlexBetween>
          <EditOutlined sx={{ color: main }} onClick={handleEditTwitter} />
        </FlexBetween>

        <FlexBetween gap="1rem">
          <FlexBetween gap="1rem">
            <img src="../assets/linkedin.png" alt="linkedin" />
            <Box>
              <Typography color={main} fontWeight="500">
                Linkedin
              </Typography>
              {editLinkedin ? (
                <input
                  type="text"
                  placeholder="Enter LinkedIn profile link"
                  value={linkedinLink}
                  onChange={(e) => setLinkedinLink(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    borderRadius: "0.25rem",
                    border: "1px solid #ccc",
                  }}
                />
              ) : (
                <Typography color={medium}>
                  {linkedinLink ? (
                    <a
                      href={linkedinLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {linkedinLink}
                    </a>
                  ) : (
                    "Network Platform"
                  )}
                </Typography>
              )}
            </Box>
          </FlexBetween>
          <EditOutlined sx={{ color: main }} onClick={handleEditLinkedin} />
        </FlexBetween>
      </Box>
    </WidgetWrapper>
  );
};

export default UserWidget;
