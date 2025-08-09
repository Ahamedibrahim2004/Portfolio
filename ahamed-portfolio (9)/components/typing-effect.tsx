"use client"

import { useState, useEffect } from "react"

interface TypingEffectProps {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delay?: number
}

export function TypingEffect({ words, typingSpeed = 150, deletingSpeed = 100, delay = 1000 }: TypingEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout

    const handleTyping = () => {
      const fullText = words[currentWordIndex]
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1))
        timer = setTimeout(handleTyping, deletingSpeed)
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1))
        timer = setTimeout(handleTyping, typingSpeed)
      }

      if (!isDeleting && currentText === fullText) {
        clearTimeout(timer)
        timer = setTimeout(() => setIsDeleting(true), delay)
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false)
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
        clearTimeout(timer)
        timer = setTimeout(handleTyping, 500) // Small delay before typing next word
      }
    }

    timer = setTimeout(handleTyping, typingSpeed)

    return () => clearTimeout(timer)
  }, [currentWordIndex, currentText, isDeleting, words, typingSpeed, deletingSpeed, delay])

  return (
    <span className="font-mono text-blue-600 dark:text-blue-400">
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  )
}
