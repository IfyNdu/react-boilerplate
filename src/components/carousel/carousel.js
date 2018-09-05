import React, { Component } from 'react'
import Article from './sub-components/article'
import CarouselHeader from './sub-components/header'
import Footer from './sub-components/footer'
import { setIndex, setTranslateValue } from './state-functions'
import { Articles } from 'api-service'
import { apiDomain } from '../../config'

import styles from './carousel.mod.scss';


class Carousel extends Component {

  constructor(props) {
    super(props)

    this.state = {

      articles: [],
      index: 0,
      translateValue: 0
    }

  }

  componentDidMount = () => {

    Articles
      .getArticles(apiDomain)
      .then(({ data }) => this.setState({ articles: data }))
      .catch(error => console.error(error))
  }

  goToPreviousSlide = () => {

    const { index, translateValue } = this.state


    if (index !== 0) {

      this.setState({
        index: setIndex(index - 1),
        translateValue: setTranslateValue(translateValue + 100)
      })
    }

  }

  goToNextSlide = () => {

    const { articles, index, translateValue } = this.state
    const noOfRotations = Math.floor(articles.length / 3)

    const endIndex = articles.length % 3 === 0
      ? noOfRotations - 1
      : noOfRotations

    const stateValues = index === endIndex
      ? {
        index: 0,
        translateValue: 0
      }
      : {
        index: setIndex(index + 1),
        translateValue: setTranslateValue(translateValue - 100)
      }

    this.setState(stateValues)
  }

  setArticleRef = element => {

    this.articleRefs.push(element)
  }

  renderSlides = () => this.state.articles.map(({ url, text, paidPost }, i) => {

    return (
      <Article {...{
        key: `article --${i}`,
        paidPost,
        text,
        url
      }} />
    )
  })

  render() {

    const { translateValue } = this.state
    const { goToNextSlide, goToPreviousSlide, renderSlides } = this

    return (
      <div className={styles.container}>
        <CarouselHeader />
        <div className={styles.carousel}
          style={{ transform: `translateX(${translateValue}%)` }}>
          {renderSlides()}
        </div>
        <Footer {...{
          nextSlide: goToNextSlide,
          previousSlide: goToPreviousSlide
        }} />
      </div>
    )
  }

}

export default Carousel