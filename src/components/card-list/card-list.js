import fp from 'lodash/fp'
import React, { Component } from 'react'
import Card from './sub-components/card'
import { Articles } from 'api-service'
import { apiDomain } from '../../config'

import styles from './card-list.mod.scss';


class Carousel extends Component {

  constructor(props) {
    super(props)

    this.state = { articles: [] }

  }

  componentDidMount = () => {

    Articles
      .getArticles(apiDomain)
      .then(({ data }) => this.setState({ articles: data }))
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