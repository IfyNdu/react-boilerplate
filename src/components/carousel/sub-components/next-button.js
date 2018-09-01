import React from 'react'
import classNames from 'classnames'
import { FaAngleRight } from 'react-icons/fa';

import styles from '../carousel.mod.scss';


const NextSlide = ({ nextSlide }) => {

  return (
    <div className={classNames(
      [styles.articleSlider],
      [styles.next])}
      onClick={nextSlide}>
      <FaAngleRight className={styles.sliderButton} />
    </div>
  )
}

export default NextSlide