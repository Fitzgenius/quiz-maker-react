import React from "react"
import callAPI from "../api"

import Loading from '../components/Loading/Loading'
import QuizList from '../components/Quiz/QuizList'

type stateProps = {
  quizes: [],
  loading: boolean,
}

class Home extends React.Component<any, stateProps> {
  state: stateProps = {
    quizes: [],
    loading: true,
  }
  async componentDidMount(): Promise<void> {
    await callAPI('quiz').then(res => {
      if (res) {
        const { data } = res!
        this.setState({
          quizes: data,
          loading: false,
        })
      }
    })
    console.log("state", this.state)
  }
  render() {
    const { loading, quizes } = this.state
    return (
      <>
        { loading && quizes.length === 0 ? (
          <div>Loading</div>
        ) : (
          <div>We got quizes</div>
        )}
      </>
    )
  }
}

export default Home
