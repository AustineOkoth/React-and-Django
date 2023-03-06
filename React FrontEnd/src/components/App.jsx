import React from 'react'
import Blog from "./Blog"
import Create from "./Create"
import Delete from "./Delete"
import Update from "./Update"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react'
function App() {

  useEffect(() => {

  }, [])

  
  return (
    <div className='App'>

      <Router>
        <Routes>
            <Route path="/blog" element={< Blog />} />
            < Route path='/create' element={< Create />} />
            < Route path='/delete' element={< Delete />} />
            < Route path='/update' element={< Update />} />
        </Routes>
      </Router>
    </div>
  );
}

export default React.memo(App);