import React from "react"

function Posts({ posts, isLoading }) {
  if (isLoading) {
    return (
      <div class="d-flex justify-content-center">
        <div className="spinner-border text-dangerm-5" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  }
  return (
    <nav>
      <ul className="list-group mb-4">
        {posts.map((post) => (
          <li
            key={post.id}
            className="list-group-item shadow p-2 mb-1 bg-white rounded"
          >
            {post.title}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Posts
