import React from "react";
import { Card, Container, Placeholder, Row } from "react-bootstrap";

export default function HomePg() {
  return (
    <Container>
      <div className="d-flex aligns-items-center justify-content-center">
        <svg
          width="400"
          height="400"
          id="logo"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 216 90.38"
        >
          <polygon points="24.59 32.32 24.59 45.9 11.61 45.9 11.61 32.32 0 32.32 0 71.39 11.61 71.39 11.61 56.02 24.59 56.02 24.59 71.39 36.2 71.39 36.2 32.32 24.59 32.32" />
          <polygon points="146.03 58.71 146.03 48.59 136.79 48.59 136.79 48.58 130.45 48.58 130.45 48.59 125.07 48.59 125.07 58.71 146.03 58.71" />
          <polygon points="146.03 74.97 146.03 64.85 136.79 64.85 136.79 64.84 130.45 64.84 130.45 64.85 125.07 64.85 125.07 74.97 146.03 74.97" />
          <polygon points="146.03 90.38 146.03 80.26 136.79 80.26 136.79 80.25 130.45 80.25 130.45 80.26 125.07 80.26 125.07 90.38 146.03 90.38" />
          <polygon points="146.03 10.12 146.03 0 136.79 0 136.79 0 130.45 0 130.45 0 125.07 0 125.07 10.12 146.03 10.12" />
          <polygon points="146.03 25.96 146.03 15.84 136.79 15.84 136.79 15.83 130.45 15.83 130.45 15.84 125.07 15.84 125.07 25.96 146.03 25.96" />
          <polygon points="162.84 61.27 162.84 56.08 174.57 56.08 174.57 45.95 162.84 45.95 162.84 42.45 176.63 42.45 176.63 32.33 162.84 32.33 155.27 32.33 151.22 32.33 138.33 32.33 138.33 32.32 126.72 32.32 126.72 32.33 120.22 32.33 120.22 32.32 108.61 32.32 108.61 52.24 94.38 32.32 82.77 32.32 82.77 71.39 94.38 71.39 94.38 51.55 108.61 71.39 120.22 71.39 120.22 42.45 151.22 42.45 151.22 71.39 157.36 71.39 162.84 71.39 177.27 71.39 177.27 61.27 162.84 61.27" />
          <path d="m66.33,32.32v23.87c-.09,1.11-.85,5.91-6.42,5.91-6.91,0-6.86-5.95-6.86-5.95v-23.82h-11.61v24.67c.25,2.73,1.8,11.21,11.61,14.05,2.04.59,4.42.94,7.23.94,2.3,0,4.3-.29,6.04-.8,9.52-2.74,11.31-11.79,11.61-14.67v-24.19h-11.61.01Z" />
          <path d="m203.12,71.39h12.88l-10.25-16.53c2.65-1.09,5.49-3.04,6.49-6.47.38-1.29.6-2.81.6-4.6,0-1.46-.34-3.01-.83-4.05-3.14-6.57-10.29-7.35-12.44-7.41h-17.75v39.06h11.61v-14.71h.99l8.69,14.71h0Zm-2.22-27.45c.24,3.62-3.23,3.8-3.23,3.8h-4.23v-5.91h4.26c.71.06,2.8.14,3.2,2.11Z" />
        </svg>
      </div>

      {/* create icons for the home page. orange circles with white outline icons OR orange icons  */}

      <Row md={2} xs={1} lg={4} className="g-3">
        {/* <img
            src="public/home-imgs/img-1.JPG"
            style={{ width: "875px", height: "1575px" }}
          />
          <img
            src="public/home-imgs/img-2.JPG"
            style={{ width: "775px", height: "1375px" }}
          />
          <img
            src="public/home-imgs/img-3.JPG"
            style={{ width: "875px", height: "1575px" }}
          />
          <img
            src="public/home-imgs/img-4.JPG"
            style={{ width: "875px", height: "1575px" }}
          /> */}
      </Row>
    </Container>
  );
}
