import axios from 'axios'
const FETCH_UPLOAD_IMAGE = 'image/FETCH_UPLOAD_IMAGE'
const FETCH_UPLOAD_SUCCESS = 'image/FETCH_UPLOAD_SUCCESS'
const FETCH_UPLOAD_ERROR = 'image/FETCH_UPLOAD_ERROR'
const RESET_MESSAGES = 'image/RESET_MESSAGES'

const initialState = {
  image: null,
  loading: false,
  error: '',
  success: ''
}

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_UPLOAD_IMAGE:
      return { ...state, loading: true }
    case FETCH_UPLOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        image: action.payload.data,
        success: action.payload.msg
      }
    case FETCH_UPLOAD_ERROR:
      return { ...state, loading: false, error: action.payload.msg }
    case RESET_MESSAGES:
      return { ...state, error: '', success: '' }

    default:
      return { ...state }
  }
}

export default imagesReducer

export const uploadImage = (body) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_UPLOAD_IMAGE })
    try {
      // const response = await axios.post("api/images", body);
      const response = await axios({
        url: '/api/images',
        method: 'POST', // PUT, DELETE, UPDATE, PATCH
        data: body, // the form data the include the large file
        maxContentLength: 'infinity', // for large content, base64
        maxBodyLength: 'infinity' // do the same above
      })
      dispatch({ type: FETCH_UPLOAD_SUCCESS, payload: response.data })
      setTimeout(() => dispatch(resetMessages()), 3000)
    } catch (error) {
      console.log(error)
      dispatch({
        type: FETCH_UPLOAD_ERROR,
        payload: error?.message || 'Error uploading this file'
      })
      setTimeout(() => dispatch(resetMessages()), 3000)
    }
  }
}

const resetMessages = () => {
  return { type: RESET_MESSAGES }
}
