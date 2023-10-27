import React, { useState } from 'react'
import style from './Uploader.module.css'
import styled from 'styled-components'
import Uploading from '../Uploading/Uploading'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { uploadImage } from '../../redux/ducks/image'
import { useEffect } from 'react'

const DropImageArea = styled.div`
  border: ${(props) =>
    props.preview ? 'none' : '1px dashed #97bef4'};
  background: #f6f8fb;
  border-radius: 12px;
  width: 338px;
  height: 218.9px;
  margin-bottom: 16px;
  position: relative;
  overflow: hidden;
`

const ImageContainer = styled.div`
  width: ${(props) => (props.preview ? '100%' : '114px')};
  height: ${(props) => (props.preview ? '100%' : '88px')};
  margin: ${(props) => (props.preview ? '0' : '36px auto')};
  margin-bottom: ${(props) => (props.preview ? '0' : '32px')};
  border-radius: ${(props) => (props.preview ? '12px' : '0')};
`

const Image = styled.img`
  border-radius: ${(props) => (props.preview ? '12px' : '0')};
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export default function Uploader() {
  const [preview, setPreview] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const changeImagePreview = (e) => {
    if (!e.target.files[0]) return
    const reader = new FileReader()

    reader.readAsDataURL(e.target.files[0])
    reader.onload = (e) => {
      e.preventDefault()
      setPreview(e.target.result)
    }
  }

  const handleClick = () => {
    setPreview('')
    dispatch(uploadImage({ image: preview }))
    navigate('/uploading')
  }

  return (
    <div className={style.container}>
      <h1 className={style.title}>Upload your image</h1>
      <h3 className={style.subtitle}>File should be Jpeg, Png...</h3>
      <DropImageArea preview={preview}>
        <input
          type='file'
          className={style.file_upload_input}
          accept='image/*'
          onChange={changeImagePreview}
        />
        <ImageContainer preview={preview}>
          <Image
            src={preview ? preview : './image.svg'}
            preview={preview}
          />
        </ImageContainer>
        <p className={style.drop_image_description}>
          Drag & Drop your image here
        </p>
      </DropImageArea>
      {!preview && <p className={style.or}>Or</p>}

      <div className={style.actions_container}>
        <button className={style.button}>
          <input
            type='file'
            className={style.file_upload_input}
            accept='image/*'
            onChange={changeImagePreview}
          />
          Choose a file
        </button>
        {preview && (
          <button className={style.button} onClick={handleClick}>
            Upload image
          </button>
        )}
      </div>
    </div>
  )
}
