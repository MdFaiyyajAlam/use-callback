import { useState, useCallback} from 'react'
import Child from './Child'

function Parent() {

    const [count, setCount] = useState(0)

    const handleClick = useCallback(() => {
        console.log("Button Clicked");
    }, [])


  return (
    <article className="card">
      <h2>Parent</h2>
      <p className="count">{count}</p>
      <button className="primary-btn" onClick={() => setCount((prev) => prev + 1)}>
        Parent Button
      </button>
      <Child click={handleClick} />
    </article>
  )
}

export default Parent