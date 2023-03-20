import React from 'react'

const Logo = ({ onClick }) => {
  return (
    <div className="logo__wrapper" onClick={onClick}>
      <img className="logo__image" src="/images/pnny-feather.svg" />
    </div>
  )
}

export default Logo
