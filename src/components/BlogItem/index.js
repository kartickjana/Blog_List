// Write your JS code here

import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <li className="blogItem">
      <div className="blogDetailsContainer">
        <h1 className="blogTitle">{title}</h1>
        <p className="blogPublishedDate">{publishedDate} </p>
      </div>
      <p className="blogDescription">{description}</p>
    </li>
  )
}

export default BlogItem
