import 'github-markdown-css/github-markdown.css'
import { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import './app.css'
import Options from './components/Options'
import useMarkDown from './hooks/useMarkDown'

const files = ['C++', 'Go', 'Java', 'JavaScript', 'PHP', 'Python', 'TypeScript']
const path = '../CheatSheet'

function App() {
  const [selected, setSelected] = useState({
    fileA: files[0],
    fileB: files[1],
  })

  const [markdownContent, setMarkdownContent] = useState({
    fileA: '',
    fileB: '',
  })

  const { fileA, fileB } = selected
  const contentFileA = useMarkDown(path, fileA ? `${fileA}.md` : '')
  const contentFileB = useMarkDown(path, fileB ? `${fileB}.md` : '')

  useEffect(() => {
    setMarkdownContent({
      fileA: contentFileA,
      fileB: contentFileB,
    })
  }, [contentFileA, contentFileB])

  type FileAB = 'fileA' | 'fileB'

  function handleSelectChange(
    e: React.ChangeEvent<HTMLSelectElement>,
    fileType: FileAB,
  ) {
    setSelected((prevSelected) => ({
      ...prevSelected,
      [fileType]: e.target.value,
    }))
  }

  const filesAB: FileAB[] = ['fileA', 'fileB']

  return (
    <>
      <h2 style={{ textAlign: 'center' }}>CheatSheets Compare</h2>
      <div className="options-container">
        {filesAB.map((fileType) => (
          <select
            key={fileType}
            value={selected[fileType]}
            onChange={(e) => handleSelectChange(e, fileType)}
          >
            <Options options={files} />
          </select>
        ))}
      </div>
      <div className="markdown-container">
        {filesAB.map((fileType) => (
          <section key={fileType} className="markdown-body">
            <LoadHTML markdownText={markdownContent[fileType]} />
          </section>
        ))}
      </div>
    </>
  )
}

function LoadHTML({ markdownText }: { markdownText: string }) {
  return markdownText ? (
    <Markdown>{markdownText}</Markdown>
  ) : (
    <p>Select a file to see content.</p>
  )
}

export default App
