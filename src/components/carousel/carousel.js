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

    const articles = [
      {
        url: 'https://media-assets-01.thedrum.com/cache/images/thedrum-prod/s3-news-tmp-90538-14718554088_7d13917094_b--2x1--940.jpg',
        text: 'Mind-controlled robots: the factories of the future?',
        paidPost: true
      },
      {
        url: 'https://www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2F22a2b42e-c7de-11e7-9ee9-e45ae7e1cdd4.jpg?crop=4000%2C2250%2C0%2C208&resize=685',
        text: 'Hyperloop: designing the future of transport?',
        paidPost: false
      },
      {
        url: 'http://cdn2.itpro.co.uk/sites/itpro/files/styles/article_main_wide_image/public/2017/12/natwest.jpg?itok=Q4tjYL4j',
        text: 'Hyperloop: designing the future of transport? never ceases to amaze me',
        paidPost: true
      },
      {
        url: 'https://secure.i.telegraph.co.uk/multimedia/archive/01900/santander_1900603b.jpg',
        text: 'Hyperloop: designing the future of transport? never ceases to amaze me',
        paidPost: false
      },
      {
        url: 'https://cdn.ttgtmedia.com/visuals/ComputerWeekly/Hero%20Images/HSBC-UK-HQ-PR_searchsitetablet_520X173.jpg',
        text: 'Hyperloop: designing the future of transport? never ceases to amaze me',
        paidPost: false
      },
      {
        url: 'https://media.glassdoor.com/l/f7/6a/81/ec/scb-headquarter.jpg',
        text: 'Hyperloop: designing the future of transport? never ceases to amaze me',
        paidPost: true
      },
      {
        url: 'https://i0.wp.com/brandspurng.com/wp-content/uploads/2017/06/Zenith-Bank-Nigeria.jpg?fit=1068%2C580&ssl=1',
        text: 'Hyperloop: designing the future of transport? never ceases to amaze me',
        paidPost: false
      },
      {
        url: 'https://i0.wp.com/nairametrics.com/wp-content/uploads/2018/05/Diamond-Bank-560x390.jpg?w=700&ssl=1',
        text: 'Hyperloop: designing the future of transport? never ceases to amaze me',
        paidPost: true
      },
      {
        url: 'https://i1.wp.com/calabarreporters.com/wp-content/uploads/GTBank-Calabar-Marian-Branch.jpg?resize=678%2C381&ssl=1',
        text: 'Hyperloop: designing the future of transport? never ceases to amaze me',
        paidPost: true
      }
    ]

    this.state = {

      articles,
      index: 0,
      translateValue: 0
    }

  }

  componentDidMount = () => {

    Articles
      .getArticles(apiDomain)
      .then(({ articles }) => this.setState({ articles }))
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

    const position = articles.length % 3 === 0
      ? noOfRotations - 1
      : noOfRotations

    const stateValues = index === position
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

  renderSlides = () => this.state.articles.map(({ url, text, paidPost }, i) => {

    return (
      <Article {...{
        url,
        key: `article --${i}`,
        paidPost,
        text
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