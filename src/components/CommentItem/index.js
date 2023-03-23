// Write your code here
import './index.css'

const CommentItem = props => {
  const {commentDetails} = props
  const {name, comment} = commentDetails
  return (
    <li>
      <div>
        <div className="list-container">
          <p className="R-name">R</p>
          <div>
            <p>{name}</p>
            <p>{comment}</p>
          </div>
          <p>2 minutes ago</p>
        </div>
        <div className="like-and-delete">
          <div className="like-and-image">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
              alt="like"
              className="image-icon"
            />
            <p>Like</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </div>
      </div>
    </li>
  )
}

export default CommentItem
