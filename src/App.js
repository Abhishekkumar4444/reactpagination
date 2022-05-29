import React, { useState, useEffect } from "react"
import axios from "axios"
import "./App.css"
import Posts from "./components/Posts"
import Pagination from "./components/Pagination"

function App() {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage] = useState(10)
  const url = "https://jsonplaceholder.typicode.com/posts"
  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true)
      const res = await axios.get(url)
      setPosts(res.data)
      setIsLoading(false)
    }
    fetchPosts()
  }, [])

  //get currnet posts
  const indexOfLastPost = currentPage * postPerPage
  const indexofFirstPost = indexOfLastPost - postPerPage
  const currentPosts = posts.slice(indexofFirstPost, indexOfLastPost)

  //change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  return (
    <div className="container">
      <h1 className="text-primary mb-3 text-center">My Blog</h1>
      <Posts posts={currentPosts} isLoading={isLoading} />
      <Pagination
        postPerPage={postPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  )
}

export default App
