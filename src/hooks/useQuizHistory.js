// src/hooks/useQuizHistory.js
import { useState, useCallback } from 'react'

const STORAGE_KEY = 'prepdeck-quiz-history'

function loadHistory() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY)
        return raw ? JSON.parse(raw) : []
    } catch {
        return []
    }
}

export function useQuizHistory() {
    const [history, setHistory] = useState(loadHistory)

    const recordAttempt = useCallback((attempt) => {
        const entry = { ...attempt, date: new Date().toISOString() }
        setHistory((prev) => {
            const next = [...prev, entry]
            localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
            return next
        })
        return entry
    }, [])

    const getLastAttempt = useCallback(() => history[history.length - 1] ?? null, [history])

    const stats = {
        attemptsCount: history.length,
        questionsAnswered: history.reduce((sum, a) => sum + a.totalQuestions, 0),
        correctAnswered: history.reduce((sum, a) => sum + a.correctCount, 0),
        averageScore: history.length
            ? Math.round(history.reduce((sum, a) => sum + a.correctCount / a.totalQuestions, 0) / history.length * 100)
            : 0
    }

    return { history, recordAttempt, getLastAttempt, stats }
}