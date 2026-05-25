import React from 'react'

function Child({click}) {
    console.log("Child Component Rendered");
    return (
        <div className="child-box">
            <p>Child Component</p>
            <button className="secondary-btn" onClick={click}>Click Me</button>
        </div>
    )
}

export default React.memo(Child)