import { useState } from 'react'
import Counter from './Counter'
import Parent from './Parent'
import './App.css'


function App() {
  return (
    <main className="app-shell">
      <section className="app-header">
        <p className="badge">React useCallback Demo</p>
        <h1>Simple & Beautiful Components</h1>
        <p className="subtitle">Clean card layout with smooth buttons and balanced spacing.</p>
      </section>

      <section className="cards-grid">
        <Counter />
        <Parent />
      </section>
    </main>
  )
}

export default App
