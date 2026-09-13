import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
  const dispatch = useDispatch()

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout())
    })
  }

  return (
    <button
      onClick={logoutHandler}
      className='px-4 py-2 text-sm font-medium text-gray-300 rounded-lg transition duration-200 hover:text-white hover:bg-red-500/10'
    >
      Logout
    </button>
  )
}

export default LogoutBtn