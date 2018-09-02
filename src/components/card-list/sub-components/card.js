import React from 'react'

import styles from '../card-list.mod.scss';


const Card = ({

  index,
  onChangeChecked,
  onChangeImage,
  onChangeValue,
  paidPost,
  text,
  url,


}) => {

  return (
    <form className={styles.cardContainer} >
      <div className={styles.imageContainer}>
        <img src={url} className={styles.imageUpload} />
        <div className={styles.fileUpload}>
          <label>Select a file</label>
          <hr />
          <input
            className={styles.inputFile}
            accept="image/png, image/jpeg, image/jpg"
            name='myFile'
            onChange={e => onChangeImage(e, index)}
            type='file' />
        </div>
      </div>
      <div className={styles.text}>
        <textarea
          className={styles.inputArea}
          placeholder='Edit article text...'
          onChange={e => onChangeValue(e.target, index)}
          value={text}>
        </textarea>
      </div>
      <div className={styles.paidPost}>
        <label>Is it a paid post?</label>
        <input
          checked={paidPost}
          onChange={e => onChangeChecked(e.target, index)}
          type='checkbox' />
      </div>
    </form>
  )
}

export default Card