import React, { useState } from 'react'

function App() {
  const data = ['ahmed', 'ali', 'samy', 'ramy']
  const [result, setResult] = useState([])

  const handleChange = (e) => {
    setResult((oldResult) => {
      const name = e.target.name
      if (oldResult.indexOf(name) == -1) {
        return [...oldResult, name]
      } else {
        const newData = oldResult.filter((item) => item !== name)
        return newData
      }
    })
  }

  return (
    <div className='App'>
      <form>
        {data.map((item, index) => {
          return (
            <div key={index}>
              <input
                type='checkbox'
                id={index}
                name={item}
                onClick={handleChange}
              />
              <label htmlFor={index}>{item}</label>
            </div>
          )
        })}
      </form>
      <section className='results'>
        {result.length === 0 ? (
          <article>no selected data to show</article>
        ) : (
          result.map((item, index) => {
            return <article key={index}>{item}</article>
          })
        )}
      </section>
    </div>
  )
}

export default App
