import React from 'react'
import classnames from 'classnames'
import { FaPlayCircle } from 'react-icons/fa';
import { Assets } from 'assets'

import styles from '../carousel.mod.scss';


const Article = ({

  url,
  text,
  paidPost

}) => {

  const imageStyle = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return (

    <div className={styles.articleContainer}>
      <div className={classnames(styles.imageContainer)}
        style={imageStyle} />
      {
        paidPost && (
          <img className={styles.paidPost} src={Assets.paidPostLabel} />
        )
      }
      <div className={styles.caption}>
        <div className={styles.overlay} />
        <div className={styles.text}>{text}</div>
        <div className={styles.readMore}>
          <button className={styles.readMoreButton}>
            <FaPlayCircle />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Article