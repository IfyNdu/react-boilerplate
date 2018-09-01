import React from 'react'
import { Assets } from 'assets'

import styles from '../carousel.mod.scss';


const CarouselHeader = () => {

  return (
    <div className={styles.header}>
      <img src={Assets.logo} />
    </div>
  )
}

export default CarouselHeader