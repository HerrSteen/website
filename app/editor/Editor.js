import React, { useState, useEffect } from 'react'
import Toolbar from './Toolbar'
import Wordbar from './Wordbar'
import {setFocusClass, countWords, setCarretAtEnd} from './helper'
import Logo from './Logo'
import localStorage from '../localStorage'

let previosKeyDown, editor

const resetEditor = () => {
  editor.innerHTML = '<div class="editor__line">&nbsp</div>'
  setCarretAtEnd(editor)
}

const onKeyDown = (evt) => {
  const {target} = evt
  const selectedElement = window.getSelection().focusNode.parentNode
  setFocusClass(target, selectedElement)
}

const onMouseUp = () => {
  const selectedElement = window.getSelection().focusNode.parentNode
  setFocusClass(editor, selectedElement)
}

const updateWordCount = (setWordCount) => {
  const newWords = countWords(editor)
  const storedWords = localStorage.getWordCount()
  const accCount = storedWords + newWords
  localStorage.setWordCount(accCount)
  setWordCount(accCount)
}

const Editor = () => {
  const [isReadMode, setIsReadMode] = useState(localStorage.getValue('isReadMode'))
  const [showLogo, setShowLogo] = useState(false)
  const [isDefaultTheme, setTheme] = useState(localStorage.getValue('isDefaultTheme'))
  const [wordCount, setWordCount] = useState(localStorage.getWordCount())
  const readModeClass = isReadMode ? ' readMode' : ''

  window.onkeydown = ({key}) => {
    if (previosKeyDown === 'Control' && key === 'Backspace') {
      updateWordCount(setWordCount)
      resetEditor()
    }

    if (previosKeyDown === 'Control' && key === 'Enter') {
      setShowLogo(false)
      setCarretAtEnd(editor)
    }
    previosKeyDown = key
  }

  useEffect(() => {
    editor.innerHTML = '<div class="editor__line">&nbsp</div>'
  }, [editor])

  const themeClass = isDefaultTheme ? '' : 'theme-white'

  return (
    <div className={`${themeClass} wrapper`}>
      <Wordbar wordCount={wordCount} />
      <div className={`editor ${readModeClass}`}>
        {
          showLogo && <Logo onClick={() => {
            setShowLogo(true)
            resetEditor()
          }}/>
        }
        <div
          className="editor__page"
          contentEditable="true"
          spellCheck="false"
          suppressContentEditableWarning="true"
          ref={node => {
            editor = node
          }}
          onKeyDown={(e) => {
            onKeyDown(e)
            setWordCount(0)
          }}
          onMouseUp={onMouseUp}
          >
          <div className="editor__line"> </div>
        </div>
      </div>
      <Toolbar
        onResetClick={() => {
          updateWordCount(setWordCount)
          resetEditor()
        }}
        onChangeThemeClick={() => {
          localStorage.setValue('isDefaultTheme', !isDefaultTheme)
          setTheme(!isDefaultTheme)
        }}
        onReadModeClick={() => {
          localStorage.setValue('isReadMode', !isReadMode)
          setIsReadMode(!isReadMode)
          setCarretAtEnd(editor)
        }}
       />
    </div>
  )
}

export default Editor
