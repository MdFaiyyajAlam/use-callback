import { useState, useCallback} from 'react'

function Counter() {

    const [count, setCount] = useState(0)

    const increament = useCallback(() => {
        setCount(prev => prev + 1)
    }, [])


  return (
    <article className="card">
      <h2>Counter</h2>
      <p className="count">{count}</p>
      <button className="primary-btn" onClick={increament}>Increase</button>
    </article>
  )
}

export default Counter