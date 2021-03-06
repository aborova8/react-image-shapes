import React from 'react'

function ReactImageShapes({
  image,
  width,
  height,
  type,
  alt,
  mode,
  cutPercentage
}) {
  function renderType() {
    switch (type) {
      case 'cut-top-left':
        if (cutPercentage && mode === 'x') {
          return `polygon(0 ${cutPercentage}%, 100% 0, 100% 100%, 0% 100%)`
        } else if (cutPercentage && mode === 'y') {
          return `polygon(${cutPercentage}% 0, 100% 0, 100% 100%, 0% 100%)`
        } else return 'none'
      case 'cut-top-right':
        if (cutPercentage && mode === 'x') {
          return `polygon(0 0, ${cutPercentage}% 0, 100% 100%, 0% 100%)`
        } else if (cutPercentage && mode === 'y') {
          return `polygon(0 0, 100% ${cutPercentage}%, 100% 100%, 0% 100%)`
        } else return 'none'
      case 'cut-bottom-left':
        if (cutPercentage && mode === 'x') {
          return `polygon(0 0, 100% 0, 100% 100%, ${cutPercentage}% 100%)`
        } else if (cutPercentage && mode === 'y') {
          return `polygon(0 0, 100% 0, 100% 100%, 0 ${cutPercentage}%)`
        } else return 'none'
      case 'cut-bottom-right':
        if (cutPercentage && mode === 'x') {
          return `polygon(0 0, 100% 0, ${cutPercentage}% 100%, 0 100%)`
        } else if (cutPercentage && mode === 'y') {
          return `polygon(0 0, 100% 0, 100% ${cutPercentage}%, 0 100%)`
        } else return 'none'
      case 'triangle':
        return 'polygon(50% 0%, 0% 100%, 100% 100%)'
      case 'trapezoid':
        return 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)'
      case 'parallelogram':
        return 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)'
      case 'rhombus':
        return 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
      case 'pentagon':
        return 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'
      case 'hexagon':
        return 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
      case 'heptagon':
        return 'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)'
      case 'octagon':
        return 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
      case 'decagon':
        return 'polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)'
      case 'bevel':
        return 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'
      case 'rabbet':
        return 'polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)'
      case 'left-arrow':
        return 'polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%)'
      case 'right-arrow':
        return 'polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)'
      case 'left-point':
        return 'polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)'
      case 'right-point':
        return 'polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)'
      case 'left-chevron':
        return 'polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)'
      case 'right-chevron':
        return 'polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)'
      case 'star':
        return 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
      case 'cross':
        return 'polygon(10% 25%, 35% 25%, 35% 0%, 65% 0%, 65% 25%, 90% 25%, 90% 50%, 65% 50%, 65% 100%, 35% 100%, 35% 50%, 10% 50%)'
      case 'message':
        return 'polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)'
      case 'close':
        return 'polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)'
      case 'frame':
        return 'polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%)'
      case 'circle':
        return 'circle(50% at 50% 50%)'
      case 'ellipse':
        return 'ellipse(25% 40% at 50% 50%)'
      default:
        return 'none'
    }
  }

  return (
    <div>
      <img
        src={image}
        alt={alt || 'url'}
        width={width || 'unset'}
        height={height || 'unset'}
        style={{ clipPath: renderType() }}
      />
    </div>
  )
}

export default ReactImageShapes
