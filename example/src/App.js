import React from 'react'

import ReactImageShapes from 'react-image-shapes'
import 'react-image-shapes/dist/index.css'

const App = () => {
  return (
    <div>
      <ReactImageShapes 
        image="https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall.jpg" 
        width="300px"
        height="300px"
        type="triangle"
        cutPercentage='60'
        mode="y"
        alt="url"
      />
    </div>
  );
}

export default App
