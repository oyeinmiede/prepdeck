import { flashcards } from '../data/flashcards'

const CATEGORY_META = [
    { key: 'core', label: 'Core Web & JS' },
    { key: 'react', label: 'React' },
    { key: 'perf', label: 'Performance & Architecture' },
    { key: 'security', label: 'Security & A11y' },
    { key: 'workflow', label: 'Day-to-Day & Behavioral' }
]

const BOX_LABELS = ['New', 'Learning', 'Reviewing', 'Almost There', 'Mastered']

function getBoxDistribution(getCardState) {
    const dist = [0, 0, 0, 0, 0]
    flashcards.forEach(c => dist[getCardState(c.id).box]++)
    return dist.map((count, box) => ({ box, label: BOX_LABELS[box], count }))
}

function getCategoryBreakdown(getCardState, history) {
    return CATEGORY_META.map(({ key, label }) => {
        const cards = flashcards.filter(c => c.category === key)
        const mastered = cards.filter(c => getCardState(c.id).box === 4).length
        const masteryPercent = cards.length ? Math.round((mastered / cards.length) * 100) : 0
        const attempts = history.filter(a => a.category === key)
        const correct = attempts.reduce((sum, a) => sum + a.correctCount, 0)
        const total = attempts.reduce((sum, a) => sum + a.totalQuestions, 0)
        const accuracyPercent = total ? Math.round((correct / total) * 100) : null
        return { key, label, cardCount: cards.length, mastered, masteryPercent, attemptsCount: attempts.length, accuracyPercent }
    })
}

function getStreak(history) {
    if (!history.length) return 0
    const dayKey = d => new Date(d).setHours(0, 0, 0, 0)
    const days = [...new Set(history.map(a => dayKey(a.date)))].sort((a, b) => b - a)
    const today = new Date().setHours(0, 0, 0, 0)
    const oneDay = 86400000
    let streak = 0
    let expected = today
    for (const day of days) {
        if (day === expected) { streak++; expected -= oneDay }
        else if (streak === 0 && day === today - oneDay) { streak++; expected = day - oneDay }
        else break
    }
    return streak
}

export { CATEGORY_META, getBoxDistribution, getCategoryBreakdown, getStreak }