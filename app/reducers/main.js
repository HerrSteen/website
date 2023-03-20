const initialState = {
  editor: {
    wordCount: 0,
    storedWordCount: 0,
    isReadMode: false,
    isBoldMode: false,
    isQuickMode: false,
    suggestedWord: []
  },
  insiders: []
}

const reducer = (state = initialState, action) => {
  if (action.type === 'SET_INSIDERS') {
    return { ...state, insiders: action.insiders }
  }

  if (action.type === 'EDITOR_TOGGLE_BOLD') {
    const editor = { ...state.editor, isBoldMode: !state.editor.isBoldMode }
    return { ...state, editor }
  }

  if (action.type === 'EDITOR_TOGGLE_READ') {
    const editor = { ...state.editor, isReadMode: !state.editor.isReadMode }
    return { ...state, editor }
  }

  if (action.type === 'EDITOR_TOGGLE_QUICK') {
    const editor = { ...state.editor, isQuickMode: !state.editor.isQuickMode }
    return { ...state, editor }
  }

  if (action.type === 'EDITOR_SET_WORD_COUNT') {
    const editor = { ...state.editor, wordCount: action.wordCount }
    return { ...state, editor }
  }

  if (action.type === 'EDITOR_SET_STORED_WORD_COUNT') {
    const editor = { ...state.editor, storedWordCount: action.storedWordCount }
    return { ...state, editor }
  }

  if (action.type === 'EDITOR_SET_SUGGESTED_WORD') {
    const editor = { ...state.editor, suggestedWord: action.word }
    return { ...state, editor }
  }

  return state
}

export default reducer
