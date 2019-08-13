import React, { Component } from "react"
import Background from "../../content/assets/mountain.jpg"

var sectionStyle = {
  backgroundImage: `url(${Background})`,
  height: `100vh`,
  backgroundSize: `cover`,
  backgroundRepeat: `no-repeat`,
  backgroundPosition: `top center`,
}

class Section extends Component {
  render() {
    return (
      <section style={sectionStyle}>
        <div style={{ color: `purple` }}>
          <h1>Hello Gatsby!</h1>
          <p>What a world.</p>
          <img src="https://source.unsplash.com/random/400x200" alt="" />
        </div>
      </section>
    )
  }
}

export default () => <Section />
