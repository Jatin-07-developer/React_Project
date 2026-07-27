import React, { Children } from 'react'

const AuthContext = ({Children}) => {
  return (
    <div>{Children}</div>
  )
}

export default AuthContext