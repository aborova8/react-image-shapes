# react-image-shapes

> Give different shapes for your image

[![NPM](https://img.shields.io/npm/v/react-image-shapes.svg)](https://www.npmjs.com/package/react-image-shapes) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-image-shapes
```

## Usage

```jsx
import React, { Component } from 'react'

import ReactImageShapes from 'react-image-shapes'

class Example extends Component {
  render() {
    return <ReactImageShapes 
        image="https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall.jpg" 
        width="300px"
        height="300px"
        type="cut-top-left"
        cutPercentage={20}
        mode="y"
      />
  }
}
```

## Props
| Name | Required | Description |
| --- | --- | --- |
| `image` | True | Specify the url of the image
| `width` | False | Specify the width of the image
| `height` | False | Specify the height of the image
| `type` | True | Specify the type of the image
| `cutPercentage` | False | Specify the percentage of cut to the image
| `mode` | False | Type 'x' if you want to cut in vercical way, Type 'y' to cut in horizontal way


## Default Shapes
You can use one of the following types for your image

| type |
| --- |
| `triangle` |
| `trapezoid` |
| `parallelogram` |
| `rhombus` | 
| `pentagon` | 
| `hexagon` |
| `heptagon` |
| `octagon` |
| `decagon` |
| `bevel` |
| `rabbet` |
| `left-arrow` |
| `right-arrow` |
| `left-point` |
| `right-point` |
| `left-chevron` |
| `right-chevron` |
| `star` |
| `cross` |
| `message` |
| `close` |
| `frame` |
| `circle` |
| `ellipse` |

Example of use:
```jsx
import React, { Component } from 'react'

import ReactImageShapes from 'react-image-shapes'

class Example extends Component {
  render() {
    return <ReactImageShapes 
        image="https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall.jpg" 
        width="300px"
        height="300px"
        type="triangle"
      />
  }
}
```

## License

MIT © [aborova8](https://github.com/aborova8)
