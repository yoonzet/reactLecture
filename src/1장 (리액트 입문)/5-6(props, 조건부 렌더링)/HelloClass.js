import React, { Component } from 'react'

class HelloClass extends Component {
    render() { //render()를 꼭 적어주어야함
        const {color, hello, isSpecial} = this.props;
        return (
          <div style={{color}}>
            {isSpecial}
            {hello}
          </div>
        )
    }
}

export default HelloClass