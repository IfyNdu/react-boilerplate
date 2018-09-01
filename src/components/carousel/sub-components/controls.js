import React from 'react'
import NextButton from './next-button'
import PreviousButton from './previous-button'

import styles from '../carousel.mod.scss';


const Controls = ({

  nextSlide,
  previousSlide

}) => {

  return (
    <div className={styles.controls} >
      <PreviousButton previousSlide={previousSlide} />
      <NextButton nextSlide={nextSlide} />
    </div>
  )
}

export default Controls