import React from 'react'
import "./Tag.css";

const Tag = ({tagName,selectTag, selected}) => {
    const tagStyle = {
        HTML: {backgroundColor:"#fda821"},
        CSS: {backgroundColor:"#15b4c8"},
        Javascript: {backgroundColor:"#ffd12c"},
        React: {backgroundColor:"#4cdafc"},
        default: {backgroundColor:"#f9f9f9"},
    }
    return(
        <button 
        type='button' 
        className="tag" 
        style={selected ? tagStyle[tagName] : tagStyle.default}
        onClick={() => {selectTag(tagName)}}>

            {tagName}

        </button>
    )
}

export default Tag