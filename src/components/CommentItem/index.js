// Write your code here
import './index.css'

import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentsDetails} = props
  const {name, comment, initialClassname, date, isLiked} = commentsDetails
  const firstLetter = name[0].toUpperCase()
  const time = formatDistanceToNow(date)
  const likedUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li>
      <div>
        <div>
          <p>{firstLetter}</p>
        </div>
        <h1>{name}</h1>
        <p>{time}</p>
      </div>
      <p>{comment}</p>
      <div>
        <div>
          <img src={likedUrl} className="like-icon" />
          <button type="Button" className={likeText}>
            Like
          </button>
        </div>

        <button>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-icon"
            dat-testid="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
