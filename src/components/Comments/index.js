const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

class Comments extends Component {
  state = {
    userInput: '',
    commentInput: '',
    commentsList: [],
  }

  onAddComment = event => {
    event.preventDefault()
    const {userInput, commentInput} = this.state
    const initialBGcolorClassname =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * (initialContainerBackgroundClassNames.length - 1),
        )
      ]

    const newContact = {
      id: uuidv4(),
      name: userInput,
      comment: commentInput,
      isLiked: false,
      date: new Date(),
      initialClassname: initialBGcolorClassname,
    }

    this.setState(prev => ({
      commentsList: [...prev.commentsList, newContact],
      userInput: '',
      commentInput: '',
    }))
  }

  renderCommentList = () => {
    const {commentsList} = this.state

    return commentsList.map(each => (
      <CommentItem key={each.id} commentsDetails={each} />
    ))
  }

  valueUserInput = e => {
    this.setState({userInput: e.target.value})
  }

  valueCommentInput = e => {
    this.setState({commentInput: e.target.value})
  }

  render() {
    const {userInput, commentInput, commentsList} = this.state
    return (
      <div className="bg">
        <div>
          <h1>Comments</h1>
          <div className="card-1">
            <form className="details-con" onSubmit={this.onAddComment}>
              <p>say something about 4.0 Technologies</p>
              <input
                type="text"
                className="input"
                placeholder=" Your Name"
                value={userInput}
                onChange={this.valueUserInput}
              />
              <textArea
                className="commentText"
                rows="10"
                cols="50"
                placeholder=" Your Comment"
                value={commentInput}
                onChange={this.valueCommentInput}
              ></textArea>
              <button type="submit" className="btn">
                Add comment
              </button>
            </form>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                alt="comments"
                className="comments-img"
              />
            </div>
          </div>
          <hr className="separator" />
          <p>
            <span className="count">{commentsList.length}</span> Comments
          </p>
          <ul>{this.renderCommentList()}</ul>
        </div>
      </div>
    )
  }
}

export default Comments
