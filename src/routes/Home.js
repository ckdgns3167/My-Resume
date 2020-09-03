import React from "react";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Grid } from "@material-ui/core";

/**
 * Componets
 */
import Hello from "../components/Hello";
import Header from "../components/Header";

class Home extends React.Component {
  state = {
    isLoading: true,
    completed: 0,
    name: "",
    email: "",
    github: "",
    homeAddress: "",
    company: "",
    phone: "",
    birthDate: {},
    avatar_url: "",
  };

  progress = () => {
    const { completed } = this.state;

    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  };

  getMyResumeData = async () => {
    try {
      const {
        data: {
          info: { name, email, github, homeAddress, company, phone, birthDate },
        },
      } = await axios.get("https://myresumestrapi.herokuapp.com/my-info");

      const {
        data: { avatar },
      } = await axios.get("https://myresumestrapi.herokuapp.com/my-avatar");

      this.setState({
        name,
        email,
        github,
        homeAddress,
        company,
        phone,
        birthDate,
        avatar_url: avatar,
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
  /**
   * 비동기적인 처리를 위한 곳
   */
  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.getMyResumeData();
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { isLoading, name, email, github, homeAddress, company, phone, birthDate, avatar_url } = this.state;

    return isLoading ? (
      <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{ minHeight: "100vh" }}>
        <Grid item xs={3}>
          <CircularProgress variant="determinate" value={this.state.completed} />
        </Grid>
      </Grid>
    ) : (
      <div>
        <Header />
        <Hello name={name} email={email} github={github} homeAddress={homeAddress} company={company} phone={phone} birthDate={birthDate} avatar_url={avatar_url} />
      </div>
    );
  }
}

export default Home;
