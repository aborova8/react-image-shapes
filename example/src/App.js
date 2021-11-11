import React from 'react'
import ReactImageShapes from "react-image-shapes";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        padding: "20px 150px"
      }}
    >
      <ReactImageShapes
        image="https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall.jpg"
        width="200px"
        height="200px"
        type="cut-top-left"
        cutPercentage={20}
        mode="y"
      />
      <ReactImageShapes
        image="https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall.jpg"
        width="200px"
        height="200px"
        type="cut-bottom-left"
        cutPercentage={20}
        mode="x"
      />
      <ReactImageShapes
        image="https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall.jpg"
        width="200px"
        height="200px"
        type="circle"
      />
      <ReactImageShapes
        image="https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall.jpg"
        width="200px"
        height="200px"
        type="triangle"
      />
      <ReactImageShapes
        image="https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall.jpg"
        width="200px"
        height="200px"
        type="hexagon"
      />
      <ReactImageShapes
        image="https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall.jpg"
        width="200px"
        height="200px"
        type="left-arrow"
      />
      <ReactImageShapes
        image="https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall.jpg"
        width="200px"
        height="200px"
        type="right-arrow"
      />
      <ReactImageShapes
        image="https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall.jpg"
        width="200px"
        height="200px"
        type="star"
      />
      <ReactImageShapes
        image="https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall.jpg"
        width="200px"
        height="200px"
        type="message"
      />
      <ReactImageShapes
        image="https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall.jpg"
        width="200px"
        height="200px"
        type="ellipse"
      />
      <ReactImageShapes
        image="https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall.jpg"
        width="200px"
        height="200px"
        type="left-point"
      />
      <ReactImageShapes
        image="https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall.jpg"
        width="200px"
        height="200px"
        type="cross"
      />
    </div>
  );
}
