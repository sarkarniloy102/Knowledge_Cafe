import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Bookmarks from './Component/Bookmarks/Bookmarks'
import Header from './Component/Header/Header'

function App() {
  const [bookmarks, setbookmarks] = useState([]);
  const [readingtime, setreadingtime] = useState(0);

  const handlebookmarks = blog => {
    const newbookmarks = [...bookmarks, blog];
    setbookmarks(newbookmarks);
  }

  const handlereadingtime = time => {
    setreadingtime(readingtime + time);
  }

  return (
    <>
      <div className='container mx-auto'>
        <Header></Header>
        <div className='md:flex gap-10 mt-10'>
          <Blogs handlebookmarks={handlebookmarks} handlereadingtime={handlereadingtime}></Blogs>
          <Bookmarks bookmarks={bookmarks} readingtime={readingtime} ></Bookmarks>
        </div>
      </div>


    </>
  )
}

export default App
