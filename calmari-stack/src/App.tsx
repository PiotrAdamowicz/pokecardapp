// import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchMeme } from './api'

function App () {
  const { isLoading, isError, data, error } = useQuery({ queryKey: ['getMeme'], queryFn: fetchMeme })
  console.log(isLoading, isError, data, error)
  let content
  if (isLoading) {
    content = <p>Loading...</p>
  } else if (isError) {
    content = <p>{error.message}</p>
  } else {
    content = data.memes.map((meme) => {
      return (
      <div key={meme.id}>
        <h1>{meme.name}</h1>
        <img src={meme.url} alt={meme.name} />
      </div>
      )
    })
  }
  return (
    <div className="App bg-slate-800 text-stone-50 w-screen h-screen">
      <h1 className="text-8xl p-8">Hello</h1>
     {content}
    </div>
  )
}

export default App
