import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Bookmarks from './Component/Bookmarks/Bookmarks'
import Header from './Component/Header/Header'

function App() {


  return (
    <>
      <div className='container mx-auto'>
        <Header></Header>
        <div className='md:flex'>
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>
        </div>
      </div>


    </>
  )
}

export default App
