import { axiosWithAuth } from '../../utils/auth/axiosWithAuth';
import {history} from '../../index'

export const [SET_ERROR, REGISTER_ADMIN] = ['SET_ERROR', 'REGISTER_ADMIN',];


export const registerAdmin = (userObj) => dispatch => {
  axiosWithAuth.post('/welcome/register', userObj).then(res => {
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('role', res.data.createdUser.role);
    history.push('/login')
    dispatch({type: REGISTER_ADMIN, payload: res.data.createdUser})
  })
    .catch((err) => {
    dispatch({type: SET_ERROR, payload: err.message})
  })

}