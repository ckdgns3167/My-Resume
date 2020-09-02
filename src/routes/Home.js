import React from "react"
import axios from "axios"

/**
 * Componets
 */
import Hello from "../components/Hello"
import Header from "../components/Header"

class Home extends React.Component {
  state = {
    name: "",
    email: "",
    github: "",
    homeAddress: "",
    company: "",
    phone: "",
    birthDate: {},
    avatar_url: "",
  }
  getMyInfo = async () => {
    const {
      data: {
        info: { name, email, github, homeAddress, company, phone, birthDate },
      },
    } = await axios.get("https://myresumestrapi.herokuapp.com/my-info")
    const {
      data: { avatar },
    } = await axios.get("https://myresumestrapi.herokuapp.com/my-avatar")
    this.setState({
      name,
      email,
      github,
      homeAddress,
      company,
      phone,
      birthDate,
      avatar_url: avatar,
    })
  }
  componentDidMount() {
    this.getMyInfo()
  }
  render() {
    const { name, email, github, homeAddress, company, phone, birthDate, avatar_url } = this.state

    return (
      <div>
        <Header />
        <Hello
          name={name}
          email={email}
          github={github}
          homeAddress={homeAddress}
          company={company}
          phone={phone}
          birthDate={birthDate}
          avatar_url={avatar_url}
        />
      </div>
    )
  }
}

export default Home
