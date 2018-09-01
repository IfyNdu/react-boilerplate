import React from 'react'
import classNames from 'classnames'
import { FaAngleLeft } from 'react-icons/fa';

import styles from '../carousel.mod.scss';


const PreviousSlide = ({ previousSlide }) => {

  return (
    <div className={classNames(
      [styles.articleSlider],
      [styles.previous])}
      onClick={previousSlide}>
      <FaAngleLeft className={styles.sliderButton} />
    </div>
  )
}

export default PreviousSlide