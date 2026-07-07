import { useState, useMemo } from 'react';
import { Bookmark, ArrowRight } from 'lucide-react';
import { flashcards } from '../data/flashcards';
import { useBookmarks } from '../hooks/useBookmarks';
import { useFlashcards } from '../hooks/useFlashCards';
import FlipCard from '../components/FlipCard';
import './Bookmarks.css';

const CATEGORY_LABELS = {
    core: 'Core Web & JS', react: 'React', perf: 'Performance & Architecture',
    security: 'Security & A11y', workflow: 'Day-to-Day'
};

export default function Bookmarks() {
    const { bookmarkedIds, removeBookmark } = useBookmarks();
    const { rateCard } = useFlashcards();
    const [reviewMode, setReviewMode] = useState(false);
    const [index, setIndex] = useState(0);
    const [flipped, setFlipped] = useState(false);

    const cards = useMemo(() => flashcards.filter(c => bookmarkedIds.has(c.id)), [bookmarkedIds]);

    const grouped = useMemo(() => {
        return cards.reduce((acc, c) => {
            (acc[c.category] = acc[c.category] || []).push(c);
            return acc;
        }, {});
    }, [cards]);

    function startReview() {
        setIndex(0);
        setFlipped(false);
        setReviewMode(true);
    }

    function handleRate(rating) {
        const card = cards[index];
        if (!card) return;
        rateCard(card.id, rating);
        setFlipped(false);
        if (index + 1 < cards.length) setIndex(i => i + 1);
        else setReviewMode(false);
    }

    if (cards.length === 0) {
        return (
            <div className="bookmarks-page">
                <h1>Bookmarks</h1>
                <div className="empty-state">
                    <Bookmark size={32} />
                    <p>No bookmarked cards yet.</p>
                    <span>Tap the bookmark icon on any flashcard to save it here for focused review.</span>
                </div>
            </div>
        );
    }

    if (reviewMode) {
        const card = cards[index];
        return (
            <div className="bookmarks-page">
                <div className="review-header">
                    <h1>Bookmarked Review</h1>
                    <button className="btn-toggle-mode" onClick={() => setReviewMode(false)}>Exit review</button>
                </div>
                <div className="card-progress">Card {index + 1} of {cards.length}</div>
                <FlipCard card={card} flipped={flipped} onFlip={() => setFlipped(f => !f)}>
                    <button
                        className="bookmark-toggle active"
                        onClick={e => { e.stopPropagation(); removeBookmark(card.id); }}
                        title="Remove bookmark"
                    >
                        <Bookmark size={16} fill="currentColor" />
                    </button>
                </FlipCard>
                {flipped && (
                    <div className="rating-buttons">
                        <button className="rating-btn rating-hard" onClick={() => handleRate('hard')}>Hard</button>
                        <button className="rating-btn rating-medium" onClick={() => handleRate('medium')}>Medium</button>
                        <button className="rating-btn rating-easy" onClick={() => handleRate('easy')}>Easy</button>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="bookmarks-page">
            <div className="bookmarks-header">
                <div>
                    <h1>Bookmarks</h1>
                    <p className="bookmarks-subtitle">{cards.length} card{cards.length !== 1 ? 's' : ''} saved</p>
                </div>
                <button className="btn-toggle-mode" onClick={startReview}>
                    Review bookmarked <ArrowRight size={16} />
                </button>
            </div>

            {Object.entries(grouped).map(([cat, items]) => (
                <div key={cat} className="bookmark-group">
                    <h2 className="bookmark-group-title">{CATEGORY_LABELS[cat] || cat}</h2>
                    <div className="bookmark-list">
                        {items.map(c => (
                            <div key={c.id} className="bookmark-item">
                                <div>
                                    <span className="card-topic">{c.topic}</span>
                                    <p className="bookmark-question">{c.question}</p>
                                </div>
                                <button className="btn-icon" onClick={() => removeBookmark(c.id)} title="Remove bookmark">
                                    <Bookmark size={16} fill="currentColor" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}