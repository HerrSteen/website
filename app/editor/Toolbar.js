import React from 'react'

const Toolbar = (props) => {
  const { onResetClick, onChangeThemeClick, onReadModeClick } = props

  return (
    <div className="wordBar__wrapper">
      <div className="wordBar__button wordBar__button--short" onClick={onChangeThemeClick}>
        <i className="fas fa-adjust" />
      </div>
      <div className="wordBar__button wordBar__button--short" onClick={onResetClick}>
        <i className="fas fa-feather-alt" />
      </div>
      <div className="wordBar__button wordBar__button--short" onClick={onReadModeClick}>
        <i className="fas fa-glasses" />
      </div>
    </div>
  )
}

export default Toolbar
