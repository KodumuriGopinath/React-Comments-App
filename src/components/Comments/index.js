import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    backgroundColoursList: initialContainerBackgroundClassNames,
    newLists: [],
    name: '',
    comment: '',
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
    }
    this.setState(prevState => ({
      backgroundColoursList: [...prevState.backgroundColoursList],
      newLists: [...newComment],
      name: '',
      comment: '',
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {name, newLists, comment} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">Comments</h1>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
          <form
            className="input-and-button-container"
            onSubmit={this.onAddComment}
          >
            <p>Say something about 4.0 Technologies</p>
            <input
              className="input"
              value={name}
              onChange={this.onChangeName}
              placeholder="Your Name"
            />
            <textarea
              className="text-area"
              value={comment}
              onChange={this.onChangeComment}
              placeholder="Your Comment"
            />
            <button type="submit" className="button">
              Add Comment
            </button>
          </form>
        </div>
        <hr />
        <div className="num-2-and-text">
          <p className="num-2">2</p>
          <p>Comments</p>
        </div>
        <div>
          <ul className="list-items-container">
            {newLists.map(eachItem => (
              <CommentItem key={eachItem.id} commentDetails={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
