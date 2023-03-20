import React from 'react'

const WordBar = ({wordCount}) => {
  return (
    <div className="toolbar__wrapper">
    { !!wordCount && <p className="toolbar__wordcount">{ wordCount }</p> }
    </div>
  )
}

export default WordBar
