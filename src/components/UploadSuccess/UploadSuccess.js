import React from 'react'
import LinkImage from '../LinkImage/LinkImage'
import style from './UploadSuccess.module.css'
import { useSelector } from 'react-redux'

export default function UploadedSuccess() {
  const image = useSelector((state) => state.image.image)

  return (
    <div className={style.container}>
      <div className={style.icon_container}>
        <img src='./check_circle.svg' alt='check circle' />
      </div>

      <h3 className={style.title}>Uploaded Successfully!</h3>
      <div className={style.drop_image_area}>
        <div className={style.image_container}>
          <img
            src={image.url || ''}
            alt='your uploaded resource'
            className={style.image}
          />
        </div>
      </div>
      <LinkImage />
    </div>
  )
}
