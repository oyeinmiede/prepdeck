import { useMemo } from 'react'
import { TrendingUp, Award, Flame, ListChecks } from 'lucide-react'
import { useFlashcards } from '../hooks/useFlashcards'
import { useQuizHistory } from '../hooks/useQuizHistory'
import { getBoxDistribution, getCategoryBreakdown, getStreak } from '../utils/progressStats'
import './Progress.css'

export default function Progress() {
  const { getCardState, stats: cardStats } = useFlashcards()
  const { history, stats: quizStats } = useQuizHistory()

  const boxDistribution = useMemo(() => getBoxDistribution(getCardState), [getCardState])
  const categoryBreakdown = useMemo(() => getCategoryBreakdown(getCardState, history), [getCardState, history])
  const streak = useMemo(() => getStreak(history), [history])
  const recentAttempts = useMemo(() => [...history].reverse().slice(0, 10), [history])

  return (
    <div className="progress-page">
      <div className="progress-header">
        <h1>Progress</h1>
        <p className="subtitle">Your mastery and quiz performance across all topics</p>
      </div>

      <div className="progress-summary-grid">
        <div className="summary-card">
          <div className="summary-icon"><Award size={20} /></div>
          <div className="summary-value">{cardStats.mastered} <span>/ {cardStats.totalCards}</span></div>
          <div className="summary-label">Cards Mastered</div>
        </div>
        <div className="summary-card">
          <div className="summary-icon"><TrendingUp size={20} /></div>
          <div className="summary-value">{quizStats.averageScore}<span>%</span></div>
          <div className="summary-label">Average Quiz Score</div>
        </div>
        <div className="summary-card">
          <div className="summary-icon"><Flame size={20} /></div>
          <div className="summary-value">{streak} <span>{streak === 1 ? 'day' : 'days'}</span></div>
          <div className="summary-label">Quiz Streak</div>
        </div>
        <div className="summary-card">
          <div className="summary-icon"><ListChecks size={20} /></div>
          <div className="summary-value">{quizStats.attemptsCount}</div>
          <div className="summary-label">Quiz Attempts</div>
        </div>
      </div>

      <div className="progress-section">
        <h2>Leitner Box Distribution</h2>
        <div className="box-distribution">
          {boxDistribution.map(({ box, label, count }) => (
            <div className="box-bar-row" key={box}>
              <span className="box-bar-label">{label}</span>
              <div className="box-bar-track">
                <div className="box-bar-fill" style={{ width: `${cardStats.totalCards ? (count / cardStats.totalCards) * 100 : 0}%` }} />
              </div>
              <span className="box-bar-count">{count}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="progress-section">
        <h2>By Category</h2>
        <div className="category-breakdown">
          {categoryBreakdown.map(({ key, label, mastered, cardCount, masteryPercent, accuracyPercent, attemptsCount }) => (
            <div className="category-row" key={key}>
              <div className="category-row-label">{label}</div>
              <div className="category-row-stat">
                <span className="category-row-stat-value">{masteryPercent}%</span>
                <span className="category-row-stat-sub">mastery ({mastered}/{cardCount})</span>
              </div>
              <div className="category-row-stat">
                <span className="category-row-stat-value">{accuracyPercent === null ? '—' : `${accuracyPercent}%`}</span>
                <span className="category-row-stat-sub">{attemptsCount ? `accuracy (${attemptsCount} quiz${attemptsCount === 1 ? '' : 'zes'})` : 'no quizzes yet'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="progress-section">
        <h2>Recent Quiz Attempts</h2>
        {recentAttempts.length === 0 ? (
          <p className="empty-state">No quiz attempts yet — head to the Quiz page to get started.</p>
        ) : (
          <div className="attempt-list">
            {recentAttempts.map((a, i) => (
              <div className="attempt-row" key={i}>
                <span className="attempt-date">{new Date(a.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                <span className="attempt-category">{a.category === 'all' ? 'Mixed' : a.category}</span>
                <span className="attempt-score">{a.correctCount}/{a.totalQuestions} · {a.scorePercent}%</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}