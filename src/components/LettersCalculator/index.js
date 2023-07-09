// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0, word: ''}

  onChangeLetters = event => {
    this.setState({word: event.target.value})
  }

  render() {
    const {count, word} = this.state
    console.log(count)
    console.log(word)
    return (
      <div>
        <div>
          <div>
            <h1>Calculate the Letters you enter</h1>
            <label htmlFor="letters">Enter the phrase</label>
            <input type="text" id="letters" onChange={this.onChangeLetters} />
            <p>No.of letters: {word.length}</p>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
