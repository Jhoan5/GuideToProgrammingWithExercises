import { useEffect, useState } from 'react'

function useMarkDown(path: string, file: string): string {
  const [result, setResult] = useState<string>('')

  useEffect(() => {
    if (!file) return

    const fetchData = async () => {
      try {
        const res = await fetch(`${path}/${file}`)
        if (!res.ok) {
          throw new Error(`Network response was not ok: ${res.statusText}`)
        }
        const text = await res.text()
        setResult(text)
      } catch (err) {
        console.error(`Error fetching markdown file: ${err}`)
        setResult('')
      }
    }

    fetchData()
  }, [path, file])

  return result
}
export default useMarkDown
