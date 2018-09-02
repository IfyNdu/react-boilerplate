import fp from 'lodash/fp'
import React, { Component } from 'react'
import Card from './sub-components/card'
import { Articles } from 'api-service'
import { apiDomain } from '../../config'

import styles from './card-list.mod.scss';


class Carousel extends Component {

  constructor(props) {
    super(props)

    const articles = [
      {
        id: 0,
        url: 'https://media-assets-01.thedrum.com/cache/images/thedrum-prod/s3-news-tmp-90538-14718554088_7d13917094_b--2x1--940.jpg',
        text: 'Mind-controlled robots: the factories of the future?',
        paidPost: true
      },
      {
        id: 1,
        url: 'https://www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2F22a2b42e-c7de-11e7-9ee9-e45ae7e1cdd4.jpg?crop=4000%2C2250%2C0%2C208&resize=685',
        text: 'Hyperloop: designing the future of transport?',
        paidPost: false
      },
      {
        id: 2,
        url: 'http://cdn2.itpro.co.uk/sites/itpro/files/styles/article_main_wide_image/public/2017/12/natwest.jpg?itok=Q4tjYL4j',
        text: 'Hyperloop: designing the future of transport? never ceases to amaze me',
        paidPost: true
      },
      {
        id: 3,
        url: 'https://secure.i.telegraph.co.uk/multimedia/archive/01900/santander_1900603b.jpg',
        text: 'Hyperloop: designing the future of transport? never ceases to amaze me',
        paidPost: false
      },
      {
        id: 4,
        url: 'https://cdn.ttgtmedia.com/visuals/ComputerWeekly/Hero%20Images/HSBC-UK-HQ-PR_searchsitetablet_520X173.jpg',
        text: 'Hyperloop: designing the future of transport? never ceases to amaze me',
        paidPost: false
      },
      {
        id: 5,
        url: 'https://media.glassdoor.com/l/f7/6a/81/ec/scb-headquarter.jpg',
        text: 'Hyperloop: designing the future of transport? never ceases to amaze me',
        paidPost: true
      },
      {
        id: 6,
        url: 'https://i0.wp.com/brandspurng.com/wp-content/uploads/2017/06/Zenith-Bank-Nigeria.jpg?fit=1068%2C580&ssl=1',
        text: 'Hyperloop: designing the future of transport? never ceases to amaze me',
        paidPost: false
      },
      {
        id: 7,
        url: 'https://i0.wp.com/nairametrics.com/wp-content/uploads/2018/05/Diamond-Bank-560x390.jpg?w=700&ssl=1',
        text: 'Hyperloop: designing the future of transport? never ceases to amaze me',
        paidPost: true
      },
      {
        id: 8,
        url: 'https://i1.wp.com/calabarreporters.com/wp-content/uploads/GTBank-Calabar-Marian-Branch.jpg?resize=678%2C381&ssl=1',
        text: 'Hyperloop: designing the future of transport? never ceases to amaze me',
        paidPost: true
      }
    ]

    this.state = { articles }

  }

  componentDidMount = () => {

    Articles
      .getArticles(apiDomain)
      .then(({ articles }) => this.setState({ articles }))
      .catch(error => console.error(error))
  }

  renderSlides = () => this.state.articles.map(({ id, url, text, paidPost }, index) => {

    return (
      <Card {...{
        index,
        onChangeChecked: this.handleCheck,
        onChangeImage: this.handleImageSelection,
        url,
        key: `article --${index}`,
        onChangeValue: this.handleChangeValue,
        paidPost,
        text
      }} />
    )
  })

  handleChangeValue = ({ value }, index) => this.updateArticle({
    index,
    property: 'text',
    value
  })

  handleCheck = ({ checked }, index) => this.updateArticle({
    index,
    property: 'paidPost',
    value: checked
  })

  handleImageSelection = (e, index) => {

    e.preventDefault()

    const reader = new FileReader()
    const file = e.target.files[0]

    reader.onloadend = () => this.updateArticle({
      index,
      property: 'url',
      value: reader.result
    })

    reader.readAsDataURL(file)
  }

  updateArticle = ({ index, property, value }) => {

    const articles = this.state.articles.map((item, i) => {
      return index === i
        ? {
          ...item,
          [property]: value
        }
        : item
    })

    this.setState({ articles })
  }

  render() {

    const { renderSlides } = this

    return (
      <div className={styles.cardListContainer}>
        {renderSlides()}
      </div>
    )
  }

}

export default Carousel