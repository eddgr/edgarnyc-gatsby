import { useEffect } from 'react'

const Resume = () => {
  useEffect(() => {
    window.location.href = process.env.GATSBY_RESUME
  }, [])
  return null
}

export default Resume
