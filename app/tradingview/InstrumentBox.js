import React from 'react'

const getBackgroundClass = (status) => {
  switch (status) {
    case 'Bull':
      return 'background--bull'
    case 'Extended bull':
      return 'background--extended-bull'
    case 'Bear':
      return 'background--bear'
    case 'Extended bear':
      return 'background--extended-bear'
    default:
      return ''
  }
}

const InstrumentBox = ({ instrument }) => {
  const { name, price, status, time } = instrument
  const backgroundClass = getBackgroundClass(status)
  return <div className={`instrument ${backgroundClass}`}>
    <div className="instrument__top">
      <h1>{name}</h1>
      <p>{price}</p>
    </div>
    <div className="instrument__bottom">
      <p>{status}</p>
      <p>{time}</p>
    </div>
    {/* <div className="status-line"></div> */}
  </div>
}

export default InstrumentBox
