import React, { useState } from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./HelpPage.css"; // Import the CSS file

const HelpPage = () => {
  const [textAreaVisibility, setTextAreaVisibility] = useState(Array(5).fill(false));

  // Function to toggle visibility of text area based on index
  const toggleVisibility = (index) => {
      const updatedVisibility = [...textAreaVisibility];
      updatedVisibility[index] = !updatedVisibility[index];
      setTextAreaVisibility(updatedVisibility);
  };


  return (
    <div className="help-page-container">
      <Typography variant="h1" className="help-page-title" style={{ fontFamily: "Rubik, sans-serif" }}>
        Help Center
      </Typography>
      <Typography
        variant="h1"
        className="help-page-title1"
        style={{ fontFamily: "Rubik, sans-serif" }}
      >
        Welcome to Nova Community Help Center
      </Typography>
      <Typography variant="body1" className="help-page-text" style={{ fontFamily: "Rubik, sans-serif" }}>
        Welcome to the Nova Community Help Center, your gateway to a supportive
        and inclusive space within the Nova Wellness ecosystem. Here, we're
        dedicated to fostering connections, providing guidance, and empowering
        individuals on their wellness journeys. At Nova Community, we recognize
        that navigating life's challenges can be daunting, but you're never
        alone. Our Help Center is designed to be your trusted companion,
        offering a wealth of resources to help you navigate the intricacies of
        our platform and make meaningful connections with others. Whether you're
        seeking advice, sharing your experiences, or simply looking to connect
        with like-minded individuals, our comprehensive guide is here to assist
        you every step of the way. From user registration and profile
        customization to engaging with fellow members and exploring shared
        interests, our Help Center covers it all. And as part of the Nova
        Wellness family, we're committed to providing you with a safe, welcoming
        environment where you can share your struggles, celebrate your
        victories, and support one another with compassion and understanding. So
        come join us on this journey toward holistic well-being. Together, we
        can build a stronger, more connected community where every voice is
        valued, and every story matters. Welcome to the Nova Community Help
        Center – your trusted partner on the path to wellness.
      </Typography>
      <div className="help-page-section">
        <Typography variant="h2" className="help-page-section-title" style={{ fontFamily: "Rubik, sans-serif" }}>
          1. Getting Started
        </Typography>
        <Typography variant="body1" className="help-page-section-text" style={{ fontFamily: "Rubik, sans-serif" }}>
          <strong>User Registration and Login:</strong>If you're new to Nova
          Community, signing up is a breeze. Simply click on the "Sign Up"
          button and provide us with your first name, last name, occupation, and
          location. You can also upload a profile picture to personalize your
          account. Once registered, log in using your credentials to access your
          account.
          <ul>
            <li>
              After clicking on the "Sign Up" button, you'll be prompted to
              create a unique username and password to secure your account.
              Choose a password that's both strong and memorable to ensure the
              security of your personal information.
            </li>
            <li>
              As part of the registration process, you'll have the option to
              provide additional details such as your email address and date of
              birth. This information helps us personalize your experience and
              keep you informed about relevant updates and events within the
              Nova Community.
            </li>
            <li>
              Upon successful registration, you'll receive a confirmation email
              containing a verification link. Click on the link to verify your
              email address and activate your account. Verifying your email
              ensures that you receive important notifications and updates from
              Nova Community.
            </li>
            <li>
              If you encounter any difficulties during the registration process
              or have questions about account security, don't hesitate to reach
              out to our dedicated support team. We're here to assist you with
              any concerns and ensure a smooth onboarding experience.
            </li>
            <li>
              Once logged in, take some time to explore the various features and
              functionalities of the Nova Community platform. From connecting
              with other members to accessing resources and participating in
              discussions, there's a wealth of opportunities waiting for you to
              discover.
            </li>
          </ul>
        </Typography>
        <Typography variant="body1" className="help-page-section-text" style={{ fontFamily: "Rubik, sans-serif" }}>
          <strong>Exploring Your Profile Page:</strong>Your profile page on Nova
          Community serves as your personal space within the platform, where you
          can manage your presence and interact with others effectively. Let's
          break down what you can find on your profile page:
          <ul>
            <li>
              <strong>Important Statistics:</strong> This section provides you
              with valuable insights into your activity and engagement on Nova
              Community. You can see metrics such as the number of friends you
              have, who has viewed your profile, and how your posts are being
              received. These statistics help you understand your social
              networking presence and measure the impact of your contributions.
            </li>
            <li>
              <strong>Profile Customization:</strong> Nova Community allows you
              to personalize your profile to reflect your identity and
              interests. You can showcase details such as your occupation,
              location, and educational background. Additionally, you have the
              option to link your Twitter and LinkedIn profiles, enabling other
              community members to connect with you across different platforms.
            </li>
            <li>
              <strong>Activity Feed:</strong> Stay updated with the latest
              interactions related to your profile through the activity feed.
              Here, you can view recent comments on your posts, friend requests,
              and notifications. The activity feed keeps you connected and
              engaged with the Nova Community community, ensuring you don't miss
              any important updates.
            </li>
            <li>
              <strong>Privacy Settings:</strong> Nova Community prioritizes your
              privacy and gives you control over who can view your profile
              information and activity. You can customize your privacy settings
              to ensure you feel comfortable and secure while interacting with
              others. Tailor the visibility settings for different aspects of
              your profile based on your preferences.
            </li>
            <li>
              <strong>Profile Editing:</strong> Nova Community makes it easy to
              update and edit your profile information as needed. Whether you've
              changed jobs, moved to a new location, or developed new interests,
              you can modify your profile details at any time. Keeping your
              profile up-to-date ensures that other community members have
              accurate information about you, facilitating meaningful
              connections.
            </li>
          </ul>
        </Typography>
      </div>
      <div className="help-page-section">
        <Typography variant="h2" className="help-page-section-title" style={{ fontFamily: "Rubik, sans-serif" }}>
          2. Interacting with Others
        </Typography>
        <Typography variant="body1" className="help-page-section-text" style={{ fontFamily: "Rubik, sans-serif" }}>
          <strong>Commenting on Posts:</strong> Engage with other users by
          adding comments to their posts. Share your thoughts, ask questions, or
          simply show your appreciation for their content.
          <ul>
            <li>
              <strong>Engagement and Support:</strong> Commenting allows users
              to engage with others in a supportive environment, especially for
              individuals facing challenges or struggles. It provides a platform
              to share experiences openly.
            </li>
            <li>
              <strong>Connection and Companionship:</strong> Commenting fosters
              connections and companionship among users by providing a space
              where individuals can find empathy, understanding, and
              encouragement from others who may relate to their experiences.
            </li>
            <li>
              <strong>Constructive Dialogue:</strong> Users can participate in
              constructive dialogue by asking questions, offering advice, and
              providing relevant information through comments. This contributes
              to a culture of learning and mutual support within the community.
            </li>
            <li>
              <strong>Positive Atmosphere:</strong> Commenting allows users to
              express appreciation for each other's content, maintaining a
              positive and uplifting atmosphere within the community. It's a way
              to show support, encouragement, and gratitude.
            </li>
            <li>
              <strong>Empowerment and Personal Growth:</strong> Active
              participation in commenting empowers users to voice their
              opinions, share insights, and contribute to meaningful
              discussions. It facilitates personal growth, self-expression, and
              the development of communication skills.
            </li>
            <li>
              <strong>Validation and Recognition:</strong> Commenting provides
              an opportunity for users to validate and recognize each other's
              experiences, achievements, and contributions. It reinforces a
              sense of value, belonging, and appreciation within the community.
            </li>
            <li>
              <strong>Community Building:</strong> Ultimately, commenting on
              posts plays a crucial role in community building. It strengthens
              bonds, fosters connections, and creates a sense of belonging among
              users, contributing to a vibrant and thriving online community
              focused on mutual support and empowerment.
            </li>
          </ul>
        </Typography>
        <Typography variant="body1" className="help-page-section-text" style={{ fontFamily: "Rubik, sans-serif" }}>
          <strong>Liking Posts:</strong> Spread positivity and support by liking
          posts that resonate with you. It's a great way to show your support
          for other users' content.
          <ul>
            <li>
              <strong>Spread Positivity and Support:</strong> Liking posts
              allows users to spread positivity and show support for each
              other's content. By liking a post, users can express appreciation
              for the content shared by others, creating a supportive and
              encouraging atmosphere within the community.
            </li>
            <li>
              <strong>Acknowledge Resonance:</strong> Liking posts indicates
              that the content resonates with the user. It serves as a way to
              acknowledge the value of the content and the effort put into
              creating it. Users can use likes to recognize posts that they find
              interesting, insightful, or inspiring.
            </li>
            <li>
              <strong>Encourage Engagement:</strong> Liking posts encourages
              engagement and interaction among users. When users see that their
              posts are being liked by others, it motivates them to continue
              sharing content and participating in discussions. This cycle of
              engagement fosters a sense of community and connection among
              users.
            </li>
            <li>
              <strong>Show Appreciation:</strong> Liking posts is a simple yet
              meaningful way to show appreciation for other users'
              contributions. Whether it's a heartfelt story, a helpful tip, or a
              creative piece of content, likes convey gratitude and recognition
              for the effort and thoughtfulness behind the post.
            </li>
            <li>
              <strong>Build Relationships:</strong> Liking posts can help users
              build relationships and connections within the community. It's a
              non-verbal way to establish rapport with other users and initiate
              interactions. Over time, consistent liking can lead to mutual
              support, collaboration, and friendship among community members.
            </li>
            <li>
              <strong>Enhance Visibility:</strong> Posts with a higher number of
              likes tend to receive more visibility within the community. When
              users like a post, it increases its visibility in the feed, making
              it more likely to be seen by others. This increased visibility can
              lead to more engagement and interaction with the post, amplifying
              its impact.
            </li>
          </ul>
        </Typography>
      </div>
      <div className="help-page-section">
        <Typography variant="h2" className="help-page-section-title" style={{ fontFamily: "Rubik, sans-serif" }}>
          3. Finding Users
        </Typography>
        <Typography variant="body1" className="help-page-section-text" style={{ fontFamily: "Rubik, sans-serif" }}>
          <strong>Using the Search Functionality:</strong> Looking for a
          specific user? Utilize the search box located in the navbar to find
          other users' profile pages. Simply enter their name or username, and
          we'll do the rest.
          <ul>
            <li>
              Navigate to the Search Box: The search box is conveniently located
              in the navigation bar at the top of the Nova Community platform.
              Users can easily access it from any page within the community.
            </li>
            <li>
              Specify Search Criteria: To find a specific user, simply enter
              their name or username into the search box. Users can enter either
              full names or partial names to initiate a search.
            </li>
            <li>
              Initiate Search: Once the search criteria are entered, users can
              initiate the search by pressing the search button or hitting the
              Enter key. Nova Community will then process the search query and
              retrieve relevant results.
            </li>
            <li>
              Review Search Results: After initiating the search, Nova Community
              will display a list of search results that match the specified
              criteria. Users can scroll through the results to find the desired
              user profile.
            </li>
            <li>
              Access User Profile: Upon finding the desired user profile in the
              search results, users can click on the profile link to access the
              user's profile page. Here, they can view details about the user,
              such as their bio, posts, and activity.
            </li>
          </ul>
        </Typography>
      </div>
      <div className="help-page-section">
        <Typography variant="h2" className="help-page-section-title" style={{ fontFamily: "Rubik, sans-serif" }}>
          4. Coming Soon: Message and Notifications
        </Typography>
        <Typography variant="body1" className="help-page-section-text" style={{ fontFamily: "Rubik, sans-serif" }}>
          At Nova Community, we're constantly striving to improve and enhance
          your experience on our platform. While our message and notification
          features are currently under development, rest assured that our team
          is working diligently to bring them to you as soon as possible.
          <p>
            We understand the importance of staying connected and informed
            within the community, which is why we're prioritizing the
            development of these features. Our goal is to provide you with a
            seamless and enjoyable experience on Nova Community, and the
            addition of message and notification functionalities will play a
            significant role in achieving that goal. These features will enable
            you to stay updated on important events, messages from other users,
            and notifications related to your activity on the platform.
          </p>
          <p>
            We appreciate your patience and understanding as we work to
            implement these features. In the meantime, we encourage you to keep
            an eye out for updates and announcements regarding the progress of
            our development efforts. Your feedback and support are invaluable to
            us as we strive to make Nova Community the best it can be. Thank you
            for being a part of our community, and we look forward to bringing
            you exciting new features in the near future.
          </p>
        </Typography>
      </div>
      <div className="help-page-section">
        <Typography variant="h2" className="help-page-section-title" style={{ fontFamily: "Rubik, sans-serif" }}>
          5. Advertisements
        </Typography>
        <Typography variant="body1" className="help-page-section-text" style={{ fontFamily: "Rubik, sans-serif" }}>
          At Nova Community, we're committed to delivering a top-notch platform
          where you can connect, share experiences, and engage meaningfully with
          others. To sustain and enhance our platform, we rely on various
          revenue streams, including advertisements. You may come across ads
          like the Peridot and Chocolates promotion on our site.
          <p>
            We understand that ads may not be everyone's preference, but we
            strive to ensure that the ads displayed on Nova Community are
            relevant, unobtrusive, and aligned with our community values. By
            engaging with ads that interest you, you directly contribute to Nova
            Community's sustainability.
          </p>
          <p>
            Additionally, we're excited to showcase our Instagram account,
            Peridot and Chocolates, dedicated to celebrating the joy of periods
            and chocolates. Follow us at @peridotandchocolates for a delightful
            journey filled with wellness, self-care, and, of course, a bit of
            chocolatey indulgence!
          </p>
        </Typography>
      </div>
      <div className="help-page-section">
      <div className="faq-container">
                            <h2>Frequently Asked Questions (FAQ)</h2>
                            {/* FAQ items */}
                            {[1, 2, 3, 4, 5].map((question, index) => (
                                <div key={index} className="faq-item">
                                    <button className="openTextAreaBtn" onClick={() => toggleVisibility(index)}>
                                        {index === 0 && <b>Q1. How do I create a new post?</b>}
                                        {index === 1 && <b>Q2. Can I share my personal experiences and stories on Nova Community?</b>}
                                        {index === 2 && <b>Q3. How can I interact with other users?</b>}
                                        {index === 3 && <b>Q4. Is Nova Community inclusive of all women?</b>}
                                        {index === 4 && <b>Q5. Are there specific topics I can discuss on Nova Community?</b>}
                                    </button>
                                    {/* Conditionally rendering text area based on visibility state */}
                                    {textAreaVisibility[index] && (
                                        <div className="textAreaContainer" style={{ fontFamily: 'Rubik, san-serif' }}>
                                            {/* Custom text content for each question */}
                                            {index === 0 && (
                                                <div>
                                                    <p>
                                                    To create a new post on Nova Community, simply navigate to the 'Create Post' option located on the homepage or within the relevant community section. Click on it, and you'll be directed to a page where you can compose your post. Add a catchy title, write your content, and attach any relevant images or links. Once you're satisfied, hit the 'Post' button, and your content will be shared with the community.
                                                    </p>
                                                    <p>
                                                        Things like healthy eating and exercise can help you feel better no matter where you are in your monthly cycle. Try incorporating these things into your daily routine and see how it makes you feel!
                                                    </p>
                                                </div>
                                            )}
                                            {index === 1 && (
                                                <div>
                                                    <p>
                                                    Absolutely! Nova Community provides a safe and supportive space for women to share their personal experiences, stories, and challenges. Whether it's about overcoming obstacles, celebrating achievements, or seeking advice, you're encouraged to share your journey with the community. Your stories can inspire and empower others, fostering a sense of connection and solidarity among women.
                                                    </p>
                                                    <p>
                                                        If you don’t want to become pregnant, we recommend using a condom or alternate form of birth control, or abstaining from sexual activity.
                                                    </p>
                                                </div>
                                            )}
                                            {index === 2 && (
                                                <div>
                                                    <p>
                                                    You can interact with other users on Nova Community by liking, commenting, and sharing their posts. Additionally, you can send friend requests to connect with users whose content or profiles you find interesting.</p>
                                                    <ul>
                                                        <li>If your discharge is white with a texture resembling cottage cheese and you are itchy, you could have a yeast infection.</li>
                                                        <li>If you notice a fishy-smelling discharge that may be accompanied by pain or irregular bleeding, you may have a bacterial infection. These types of infections are typically caused by regular douching or wiping from back to front after using the restroom.</li>
                                                        <li>If your discharge is foul-smelling and/or frothy, it could be a sign of a sexually transmitted infection, like chlamydia, gonorrhea, or trichomoniasis.</li>
                                                    </ul>
                                                </div>
                                            )}
                                            {index === 3 && (
                                                <div>
                                                    <p>
                                                    Yes, Nova Community is inclusive and welcomes women from all backgrounds, identities, and experiences. We believe in creating a diverse and inclusive space where every woman feels valued, respected, and heard.
                                                    </p>
                                                </div>
                                            )}
                                            {index === 4 && (
                                                <div>
                                                    <p>
                                                    Nova Community covers a wide range of topics related to women's health, wellness, and empowerment. You're welcome to discuss various aspects of women's lives, including mental health, reproductive health, self-care practices, lifestyle tips, and more. Our goal is to provide a supportive platform where women can engage in open and meaningful conversations about their well-being and personal development.
                                                    </p>
                                                    <p>
                                                        Yes! Both partners can play a role in caring for each other’s sexual health. While a woman may visit her gynecologist for a Pap smear and pelvic exam, men can talk to their healthcare provider to learn about how they can be supportive of their partner's sexual health.
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
      </div>
      <Button
        variant="contained"
        component={Link}
        to="/home"
        className="help-page-back-button"
        style={{ fontFamily: "Rubik, sans-serif" }}
      >
        Back to Home
      </Button>
    </div>
  );
};

export default HelpPage;
