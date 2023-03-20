export const setFocusClass = (element, selectedElement) => {
  element.childNodes.forEach(item => {
    item.childNodes.forEach(() => {
      if (item === selectedElement) {
        item.classList.add('focus')
      } else {
        item.classList.remove('focus')
      }
    })
  })
}

export const countWords = (element) => {
  let wordCount = 0
  element.childNodes.forEach(item => {
    wordCount += item.innerHTML
      .trim()
      .split(' ')
      .filter(el => {
        return el !== '<br>'
      }).length
  })

  return wordCount
}

export const setCarretAtPosition = (element, pos) => {
  const as = element.getElementsByClassName('editor__line')[0]
  if (!as) return
  const range = document.createRange()

  const sel = window.getSelection()
  range.setStart(as, pos)
  range.collapse(true)
  sel.removeAllRanges()
  sel.addRange(range)
}

export const setCarretAtEnd = (editor) => {
  const range = document.createRange()
  range.selectNodeContents(editor)
  range.collapse(false)
  const selection = window.getSelection()
  selection.removeAllRanges()
  selection.addRange(range)
}
