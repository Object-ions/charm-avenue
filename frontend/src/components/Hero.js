import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Hero = () => {
  return (
    <Container fluid className="Hero-container">
      <Row>
        <Col>
          <div className="video-wrapper">
            <video
              id="video-08bed15e9f27f268ff3143c41c-desktop"
              muted
              loop
              playsInline
              autoPlay
              src="https://res.cloudinary.com/kendra-scott/video/upload/q_auto:best/v1717599265/homepage-imageuploader/Summer%202024/summer2VID_d.mp4"
              poster="https://res.cloudinary.com/kendra-scott/video/upload/q_auto:best/v1717599265/homepage-imageuploader/Summer%202024/summer2VID_d.mp4"
              className="cld-video-player"
              data-cld-public-id="https://res.cloudinary.com/kendra-scott/video/upload/q_auto:best/v1717599265/homepage-imageuploader/Summer%202024/summer2VID_d.mp4"
              data-video-url="https://res.cloudinary.com/kendra-scott/video/upload/q_auto:best/v1717599265/homepage-imageuploader/Summer%202024/summer2VID_d.mp4"
              data-cld-poster-options='{ "publicId" : "https://res.cloudinary.com/kendra-scott/video/upload/q_auto:best/v1717599265/homepage-imageuploader/Summer%202024/summer2VID_d.mp4" }'
              data-cld-transformation='{ "streaming_profile": "sfcc" }'
              data-cld-autoplay="true"
              data-cld-source-types='["hls","dash", "webp", "ogg", "mp4", "mov"]'
              data-desktop-video-url="https://res.cloudinary.com/kendra-scott/video/upload/q_auto:best/v1717599265/homepage-imageuploader/Summer%202024/summer2VID_d.mp4#t=0.1"
              data-desktop-poster="https://res.cloudinary.com/kendra-scott/video/upload/q_auto:best/v1717599265/homepage-imageuploader/Summer%202024/summer2VID_d.mp4"
            ></video>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
