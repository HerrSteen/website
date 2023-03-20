export const toggleReaModeAction = isQuickMode => {
  return dispatch => {
    dispatch({
      type: 'EDITOR_TOGGLE_READ',
      isQuickMode
    })
  }
}

export const toggleBoldModeAction = () => {
  return dispatch => {
    dispatch({
      type: 'EDITOR_TOGGLE_BOLD'
    })
  }
}

export const toggleQuickModeAction = () => {
  return dispatch => {
    dispatch({
      type: 'EDITOR_TOGGLE_QUICK'
    })
  }
}

export const setStoredWordCountAction = storedWordCount => {
  return dispatch => {
    dispatch({
      type: 'EDITOR_SET_STORED_WORD_COUNT',
      storedWordCount
    })
  }
}

export const setWordCountAction = wordCount => {
  return dispatch => {
    dispatch({
      type: 'EDITOR_SET_WORD_COUNT',
      wordCount
    })
  }
}

export const setSuggestedWordAction = word => {
  return dispatch => {
    dispatch({
      type: 'EDITOR_SET_SUGGESTED_WORD',
      word
    })
  }
}
