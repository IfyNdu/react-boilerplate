import React from 'react'
import { Assets } from 'assets'
import Controls from './controls'

import styles from '../carousel.mod.scss';


const Footer = ({

  nextSlide,
  previousSlide

}) => {

  return (
    <div className={styles.footer}>
      <div className={styles.hairline}>
        <div className={styles.support}>
          <span className={styles.supportText}>Supported by</span>
          <img src={Assets.altran} />
        </ div>
        <Controls {...{
          nextSlide,
          previousSlide
        }} />
      </div>
    </div>
  )
}

export default Footer