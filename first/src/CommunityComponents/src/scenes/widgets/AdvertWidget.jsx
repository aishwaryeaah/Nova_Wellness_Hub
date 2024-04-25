import React, { useState, useEffect } from "react";
import { Typography, useTheme } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  // Define an array of image URLs for the slider
  const imageUrls = [
    "http://localhost:3001/assets/info4.jpeg",
    "http://localhost:3001/assets/info5.jpeg", // Add URL for the next image
    // Add more image URLs as needed
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 3000); // Change interval duration (in milliseconds) as needed

    return () => clearInterval(intervalId);
  }, [imageUrls.length]);

  const handleNextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  const currentImageUrl = imageUrls[currentImageIndex];

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Follow
        </Typography>
        <Typography color={medium}>
          <a href="https://www.instagram.com/periodsandchocolates/?hl=en">
            @periodsandchocolates
          </a>
        </Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src={currentImageUrl}
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Periods And Chocolates</Typography>
        <Typography color={medium}>
          <a
            href="https://www.instagram.com/periodsandchocolates/?hl=en"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Instagram Link
          </a>
        </Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Unlock the power of women's health with Periods and Chocolates! Join us
        on Instagram for a community-driven journey through women's wellness.
        From empowering stories to essential insights, we're here to support you
        every step of the way. Follow us now for a healthier, happier you!
      </Typography>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={handleNextSlide}
          style={{
            borderRadius: "50%", // Make it round
            border: "none",
            background: palette.primary.main,
            color: "white",
            cursor: "pointer",
            fontSize: "1rem",
            transition: "background 0.3s ease",
          }}
        >
          &gt;
        </button>
      </div>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
