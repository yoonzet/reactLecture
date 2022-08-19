import React, { Component } from 'react'

class HelloClass extends Component {
    render() {
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