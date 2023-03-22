import React from 'react'
import { Loader } from 'semantic-ui-react'

const Loading = () => {
  return (
    <div className="loadingWrap">
      <div>
        <p>
          Pengar är som olja, när den passerar genom dina händer blir det alltid
          lite kvar på fingrarna.
        </p>
      </div>
      <Loader active inline='centered' className="loader">Laddar</Loader>
    </div>
  )
}

export default Loading
