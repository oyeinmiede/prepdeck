// src/pages/Quiz.jsx
import { useState, useCallback } from 'react'
import { CheckCircle2, XCircle, RotateCcw, Trophy, ChevronRight } from 'lucide-react'
import { quiz } from '../data/quiz'
import { useQuizHistory } from '../hooks/useQuizHistory'
import './Quiz.css'

const CATEGORIES = [
  { id: 'all', label: 'All Categories' },
  { id: 'core', label: 'Core Web & JS' },
  { id: 'react', label: 'React' },
  { id: 'perf', label: 'Performance & Architecture' },
  { id: 'security', label: 'Security & A11y' },
  { id: 'workflow', label: 'Day-to-Day' }
]

const COUNT_OPTIONS = [5, 10, 15]

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
      ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function buildQuestion(q) {
  const correctText = q.options[q.correctIndex]
  const options = shuffle(q.options)
  return { ...q, options, correctIndex: options.indexOf(correctText) }
}

export default function Quiz() {
  const [phase, setPhase] = useState('setup')
  const [category, setCategory] = useState('all')
  const [questions, setQuestions] = useState([])
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [correctCount, setCorrectCount] = useState(0)
  const { recordAttempt, getLastAttempt, stats } = useQuizHistory()

  const available = category === 'all' ? quiz : quiz.filter((q) => q.category === category)

  const startQuiz = useCallback((count) => {
    setQuestions(shuffle(available).slice(0, count).map(buildQuestion))
    setIndex(0)
    setSelected(null)
    setCorrectCount(0)
    setPhase('active')
  }, [available])

  const selectAnswer = useCallback((optIndex) => {
    if (selected !== null) return
    setSelected(optIndex)
    if (optIndex === questions[index].correctIndex) setCorrectCount((c) => c + 1)
  }, [selected, questions, index])

  const nextQuestion = useCallback(() => {
    if (index + 1 < questions.length) {
      setIndex((i) => i + 1)
      setSelected(null)
      return
    }
    const total = questions.length
    recordAttempt({ category, totalQuestions: total, correctCount, scorePercent: Math.round((correctCount / total) * 100) })
    setPhase('summary')
  }, [index, questions.length, category, correctCount, recordAttempt])

  const restart = useCallback(() => {
    setPhase('setup')
    setQuestions([])
  }, [])

  if (phase === 'setup') {
    return <QuizSetup category={category} setCategory={setCategory} available={available} onStart={startQuiz} lastAttempt={getLastAttempt()} stats={stats} />
  }
  if (phase === 'active') {
    const question = questions[index]
    return <QuizActive question={question} index={index} total={questions.length} selected={selected} correctCount={correctCount} onSelect={selectAnswer} onNext={nextQuestion} />
  }
  return <QuizSummary total={questions.length} correctCount={correctCount} onRestart={restart} onRetry={() => startQuiz(questions.length)} />
}

function QuizSetup({ category, setCategory, available, onStart, lastAttempt, stats }) {
  const maxAvailable = available.length
  const countChoices = [...COUNT_OPTIONS.filter((c) => c < maxAvailable), maxAvailable]

  return (
    <div className="quiz-page">
      <div className="quiz-setup">
        <h1>Quiz</h1>
        <p className="quiz-subtitle">Test yourself with multiple-choice questions sourced from your flashcard bank.</p>
        {stats.attemptsCount > 0 && (
          <div className="quiz-last-attempt">
            <Trophy size={16} />
            <span>Last attempt: {lastAttempt.correctCount}/{lastAttempt.totalQuestions} ({lastAttempt.scorePercent}%) · {stats.attemptsCount} total attempts</span>
          </div>
        )}
        <h2 className="quiz-section-label">Category</h2>
        <div className="quiz-category-grid">
          {CATEGORIES.map((c) => (
            <button key={c.id} className={`quiz-category-btn ${category === c.id ? 'active' : ''}`} onClick={() => setCategory(c.id)}>
              {c.label}
            </button>
          ))}
        </div>
        <h2 className="quiz-section-label">Number of questions</h2>
        <div className="quiz-count-grid">
          {countChoices.map((c) => (
            <button key={c} className="quiz-count-btn" onClick={() => onStart(c)}>
              {c === maxAvailable ? `All (${c})` : c}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function QuizActive({ question, index, total, selected, correctCount, onSelect, onNext }) {
  const answered = selected !== null

  return (
    <div className="quiz-page">
      <div className="quiz-active">
        <div className="quiz-progress-row">
          <span className="quiz-progress-label">Question {index + 1} of {total}</span>
          <span className="quiz-score-label">Score: {correctCount}/{index + (answered ? 1 : 0)}</span>
        </div>
        <div className="quiz-progress-bar"><div className="quiz-progress-fill" style={{ width: `${((index + (answered ? 1 : 0)) / total) * 100}%` }} /></div>
        <span className="quiz-topic-tag">{question.topic}</span>
        <h2 className="quiz-question">{question.question}</h2>
        <div className="quiz-options">
          {question.options.map((opt, i) => {
            let stateClass = ''
            if (answered && i === question.correctIndex) stateClass = 'correct'
            else if (answered && i === selected) stateClass = 'wrong'
            return (
              <button key={i} className={`quiz-option ${stateClass}`} onClick={() => onSelect(i)} disabled={answered}>
                <span>{opt}</span>
                {answered && i === question.correctIndex && <CheckCircle2 size={18} />}
                {answered && i === selected && i !== question.correctIndex && <XCircle size={18} />}
              </button>
            )
          })}
        </div>
        {answered && (
          <button className="quiz-next-btn" onClick={onNext}>
            {index + 1 < total ? 'Next Question' : 'See Results'}
            <ChevronRight size={18} />
          </button>
        )}
      </div>
    </div>
  )
}

function QuizSummary({ total, correctCount, onRestart, onRetry }) {
  const percent = Math.round((correctCount / total) * 100)
  const message = percent >= 80 ? "Strong work — you're interview-ready on this set." : percent >= 50 ? 'Solid attempt. A few more passes will lock it in.' : 'Worth revisiting these flashcards before the next attempt.'

  return (
    <div className="quiz-page">
      <div className="quiz-summary">
        <Trophy size={40} className="quiz-summary-icon" />
        <h1>{correctCount}/{total}</h1>
        <p className="quiz-summary-percent">{percent}%</p>
        <p className="quiz-summary-message">{message}</p>
        <div className="quiz-summary-actions">
          <button className="quiz-btn-secondary" onClick={onRestart}><RotateCcw size={16} />New Quiz</button>
          <button className="quiz-btn-primary" onClick={onRetry}>Retry Same Set</button>
        </div>
      </div>
    </div>
  )
}