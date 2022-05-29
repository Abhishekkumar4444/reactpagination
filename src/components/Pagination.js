import React from "react"

function Pagination({ postPerPage, totalPosts, paginate }) {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <nav>
      <ul className="pagination justify-content-end mb-5">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
