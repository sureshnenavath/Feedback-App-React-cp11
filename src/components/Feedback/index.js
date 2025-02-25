// Write your React code here.
import {Component} from 'react'
import './index.css'
class Feedback extends Component {
  state = {isClick: true}
  onHandleClickImage = () => {
    const {isClick} = this.state
    this.setState({isClick: false})
  }
  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {isClick} = this.state
    return isClick ? (
      <div className="main-container">
        <div className="container">
          <h1 className="main-heading">
            How satisfied are you with our customer support performance
          </h1>
          <ul className="ul-container">
            {emojis.map(eachItem => (
              <li key={eachItem.id}>
                <div className="list-item">
                  <img
                    src={eachItem.imageUrl}
                    alt={eachItem.name}
                    className="image-url"
                    onClick={this.onHandleClickImage}
                  />
                  <p className="image-name">{eachItem.name}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ) : (
      <div className="main-container">
        <div className="container-thank-you">
          <img src={loveEmojiUrl} alt="love emoji" className="love-img" />
          <h1>Thank You</h1>
          <p>
            We will use your feedback to improve customer support performance
          </p>
        </div>
      </div>
    )
  }
}
export default Feedback
/* 

*/
