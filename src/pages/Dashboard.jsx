import { Link } from 'react-router-dom'
import { useMemo } from 'react'
import { Flame, CheckCircle2, HelpCircle, Layers, ClipboardCheck, ArrowRight } from 'lucide-react'
import { useFlashCards } from '../hooks/useFlashCards'
import { useQuizHistory } from '../hooks/useQuizHistory'
import { getStreak } from '../utils/progressStats'
import './Dashboard.css'

const topicGroups = [
  { category: 'Core Web & JS', topics: ['HTML Semantics', 'CSS Specificity', 'Flexbox', 'CSS Grid', 'Responsive Design', 'DOM', 'Virtual DOM', 'Event Loop', 'Closures', 'Hoisting', 'Promises', 'Async/Await', 'Event Bubbling & Capturing'] },
  { category: 'React', topics: ['React Lifecycle', 'React Hooks', 'State vs Props', 'Context API', 'Memoization'] },
  { category: 'Performance & Architecture', topics: ['Debouncing vs Throttling', 'SSR vs CSR vs SSG', 'Hydration', 'Code Splitting', 'Lazy Loading', 'Web Performance'] },
  { category: 'Security & A11y', topics: ['Authentication Basics', 'XSS / CSRF / CORS', 'Accessibility'] },
  { category: 'Day-to-Day & Behavioral', topics: ['Git Workflows', 'Testing Awareness', 'STAR Method Prep'] },
]

export default function Dashboard() {
  const { stats: cardStats } = useFlashCards()
  const { history, stats: quizStats } = useQuizHistory()
  const streak = useMemo(() => getStreak(history), [history])

  const stats = [
    { label: 'Cards Mastered', value: cardStats.mastered, icon: CheckCircle2, suffix: `/ ${cardStats.totalCards}` },
    { label: 'Day Streak', value: streak, icon: Flame, suffix: streak === 1 ? 'day' : 'days' },
    { label: 'Questions Answered', value: cardStats.questionsAnswered + quizStats.questionsAnswered, icon: HelpCircle, suffix: 'total' },
  ]

  const masteredRatio = cardStats.totalCards ? cardStats.mastered / cardStats.totalCards : 0
  let encouragement = { tone: 'neutral', title: 'Keep going', text: 'Small steps add up — you’re doing great.' }

  if (streak >= 7 && masteredRatio > 0.6) {
    encouragement = { tone: 'celebrate', title: 'Amazing streak', text: `🔥 ${streak} days in a row — you’re on fire, Gabrielle!` }
  } else if (streak >= 3) {
    encouragement = { tone: 'motivating', title: 'Nice streak', text: `Great work — ${streak} days straight. Keep the momentum.` }
  } else if (masteredRatio > 0.5) {
    encouragement = { tone: 'proud', title: 'Halfway there', text: `You’ve mastered ${Math.round(masteredRatio * 100)}% of topics. Solid progress.` }
  } else if (cardStats.questionsAnswered + quizStats.questionsAnswered === 0) {
    encouragement = { tone: 'welcome', title: 'Welcome', text: 'Start with one card today — consistency beats intensity.' }
  }

  return (
    <div>
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p className="subtitle">Interview prep tracker for my PipeOps frontend internship interview</p>
      </div>

      <div className={`encouragement ${encouragement.tone}`}>
        <div className="encouragement-left">
          <div className="encouragement-title">{encouragement.title}</div>
          <div className="encouragement-text">{encouragement.text}</div>
        </div>
        <div className="encouragement-cta">
          <Link to="/flashcards" className="btn-primary">Review a card</Link>
        </div>
      </div>

      <div className="disclaimer">
        <strong>Personal practice tool.</strong> PrepDeck is a self-built study aid for my own interview preparation and is not affiliated with, endorsed by, or connected to PipeOps in any way.
      </div>

      <div className="stats-grid">
        {stats.map(({ label, value, icon: Icon, suffix }) => (
          <div className="stat-card" key={label}>
            <div className="stat-icon"><Icon size={20} /></div>
            <div className="stat-value">{value} <span>{suffix}</span></div>
            <div className="stat-label">{label}</div>
          </div>
        ))}
      </div>

      <div className="quick-actions">
        <Link to="/flashcards" className="action-card flashcards">
          <div className="action-icon"><Layers size={22} /></div>
          <div>
            <div className="action-title">Review Flashcards</div>
            <div className="action-desc">Flip through topics with spaced repetition</div>
          </div>
          <ArrowRight size={18} className="action-arrow" />
        </Link>
        <Link to="/quiz" className="action-card quiz">
          <div className="action-icon"><ClipboardCheck size={22} /></div>
          <div>
            <div className="action-title">Start Mock Interview</div>
            <div className="action-desc">Timed quiz mode, simulate the real thing</div>
          </div>
          <ArrowRight size={18} className="action-arrow" />
        </Link>
      </div>

      <div className="topics-section">
        <h2>Topics Covered</h2>
        <div className="topics-grid">
          {topicGroups.map(({ category, topics }) => (
            <div className="topic-group" key={category}>
              <div className="topic-group-header">{category}</div>
              <div className="topic-chips">
                {topics.map(t => <span className="topic-chip" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <a className="slopdar-badge" href="https://slopdar.com/r/fd-prepdeck.vercel.app">
        <img src="https://slopdar.com/badge/fd-prepdeck.vercel.app.svg" alt="Slopdar score" height="28" />
      </a>
    </div>
  )
}