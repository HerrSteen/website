import React, { useState } from 'react'

const getBackgroundClass = (status) => {
  switch (status) {
    case 'bull':
      return 'background--bull'
    case 'extended bull':
      return 'background--extended-bull'
    case 'bear':
      return 'background--bear'
    case 'extended bear':
      return 'background--extended-bear'
    default:
      return ''
  }
}

const EventList = ({ events, visible }) => {
  const wrapperClass = visible ? 'instrument__events' : 'instrument__events instrument__events--hidden'

  return <div className={wrapperClass}>
    {
      events.map((event) => {
        return <div key={event.price} className="instrument__event">
          <p>{event.status}</p>
          <p>{event.price}</p>
          <p>{event.time}</p>
        </div>
      })
    }
  </div>
}

const InstrumentBox = ({ name, events }) => {
  const [showEvents, setShowEvents] = useState(false)
  const { price, status, time } = events[0]
  const backgroundClass = getBackgroundClass(status)

  return <div className={`instrument ${backgroundClass}`} onClick={() => setShowEvents(!showEvents)}>
    <div className="instrument__current">
      <div className="instrument__top">
        <h1>{name}</h1>
        <p>{price}</p>
      </div>
      <div className="instrument__bottom">
        <p>{status}</p>
        <p>{time}</p>
      </div>
    </div>
    <EventList events={events} visible={showEvents} />
  </div>
}

export default InstrumentBox
