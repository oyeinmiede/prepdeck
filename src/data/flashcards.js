export const flashcards = [
    // Core Web & JS
    {
        id: 'html-sem-1',
        category: 'core',
        topic: 'HTML Semantics',
        question: 'Why use <article> or <nav> instead of <div>?',
        answer: 'Semantic tags communicate meaning to browsers, screen readers, and search engines. They improve accessibility (landmarks for AT navigation), SEO, and code readability — a <div> tells you nothing about its purpose.'
    },
    {
        id: 'html-sem-2',
        category: 'core',
        topic: 'HTML Semantics',
        question: 'What is the difference between <section> and <div>?',
        answer: '<section> represents a thematic grouping of content, typically with a heading, and is exposed to accessibility trees as a landmark. <div> is a generic, non-semantic container used purely for styling/layout hooks.'
    },
    {
        id: 'css-spec-1',
        category: 'core',
        topic: 'CSS Specificity',
        question: 'How is CSS specificity calculated?',
        answer: 'As a 4-part tuple: inline styles, then ID selectors, then class/attribute/pseudo-class selectors, then element/pseudo-element selectors. Higher tiers always outrank lower ones regardless of count (e.g. one ID beats a hundred classes).'
    },
    {
        id: 'css-spec-2',
        category: 'core',
        topic: 'CSS Specificity',
        question: 'Why is overusing !important considered bad practice?',
        answer: 'It overrides normal cascade rules, making styles hard to predict and debug, and forces other developers to use !important to override it, creating an escalating specificity war. Better fix: reduce selector specificity or reorganize source order.'
    },
    {
        id: 'flexbox-1',
        category: 'core',
        topic: 'Flexbox',
        question: 'What is the difference between justify-content and align-items?',
        answer: 'justify-content aligns items along the main axis (row by default); align-items aligns items along the cross axis (column by default). If flex-direction is column, the axes swap.'
    },
    {
        id: 'flexbox-2',
        category: 'core',
        topic: 'Flexbox',
        question: 'What does flex: 1 shorthand actually set?',
        answer: 'It sets flex-grow: 1, flex-shrink: 1, flex-basis: 0%. The item grows/shrinks to fill available space and ignores its content size as a starting basis.'
    },
    {
        id: 'grid-1',
        category: 'core',
        topic: 'CSS Grid',
        question: 'When would you choose Grid over Flexbox?',
        answer: 'Grid excels at two-dimensional layouts (rows and columns simultaneously) like page layouts or dashboards. Flexbox is better for one-dimensional layouts like navbars or lists that flow in a single direction.'
    },
    {
        id: 'grid-2',
        category: 'core',
        topic: 'CSS Grid',
        question: 'What does grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) do?',
        answer: 'Creates as many 200px-minimum columns as fit the container, each stretching to fill remaining space equally. auto-fit collapses empty tracks, unlike auto-fill which leaves them as blank space.'
    },
    {
        id: 'resp-1',
        category: 'core',
        topic: 'Responsive Design',
        question: 'What is the difference between mobile-first and desktop-first CSS?',
        answer: 'Mobile-first writes base styles for small screens and uses min-width media queries to add complexity for larger screens. Desktop-first does the reverse with max-width queries. Mobile-first generally produces leaner CSS since simple layouts are the default.'
    },
    {
        id: 'resp-2',
        category: 'core',
        topic: 'Responsive Design',
        question: 'What is the difference between relative units like rem and vw?',
        answer: 'rem is relative to the root font-size, ideal for consistent, accessible typography/spacing that respects user zoom settings. vw is relative to viewport width, useful for fluid layout elements but risky for text since it ignores user font preferences.'
    },
    {
        id: 'dom-1',
        category: 'core',
        topic: 'DOM',
        question: 'What is the DOM?',
        answer: 'The Document Object Model is a tree-structured, in-memory representation of an HTML document that JavaScript can read and manipulate. Each element, attribute, and piece of text becomes a node in the tree.'
    },
    {
        id: 'dom-2',
        category: 'core',
        topic: 'DOM',
        question: 'Why is direct DOM manipulation considered expensive?',
        answer: 'Changes can trigger reflow (recalculating layout/geometry) and repaint (redrawing pixels), both of which are costly, especially in loops. Batching reads/writes or using requestAnimationFrame reduces layout thrashing.'
    },
    {
        id: 'vdom-1',
        category: 'core',
        topic: 'Virtual DOM',
        question: 'What problem does the Virtual DOM solve?',
        answer: 'Direct DOM updates are slow. The Virtual DOM is a lightweight JS representation of the UI; React diffs the new virtual tree against the previous one and applies only the minimal set of real DOM changes needed.'
    },
    {
        id: 'vdom-2',
        category: 'core',
        topic: 'Virtual DOM',
        question: 'Does the Virtual DOM always make React faster than direct DOM manipulation?',
        answer: 'Not inherently — diffing itself has a cost. Its real value is developer ergonomics: you write declarative UI code and React figures out efficient updates, rather than hand-optimizing every DOM mutation yourself.'
    },
    {
        id: 'evloop-1',
        category: 'core',
        topic: 'Event Loop',
        question: 'Explain the event loop in one sentence.',
        answer: 'JS is single-threaded and runs the call stack to completion, then the event loop pulls tasks from the callback/microtask queues (microtasks like Promises first, then macrotasks like setTimeout) once the stack is empty.'
    },
    {
        id: 'evloop-2',
        category: 'core',
        topic: 'Event Loop',
        question: 'Why does setTimeout(fn, 0) not run immediately?',
        answer: 'It still gets queued as a macrotask and only runs after the current call stack is empty and all pending microtasks (e.g. resolved Promises) have been processed.'
    },
    {
        id: 'closures-1',
        category: 'core',
        topic: 'Closures',
        question: 'What is a closure?',
        answer: 'A function that retains access to variables from its enclosing lexical scope even after that outer function has returned. The inner function "closes over" those variables.'
    },
    {
        id: 'closures-2',
        category: 'core',
        topic: 'Closures',
        question: 'Give a practical use case for closures.',
        answer: 'Creating private state, e.g. a counter factory: function makeCounter() { let count = 0; return () => ++count; } — count is inaccessible from outside but persists across calls.'
    },
    {
        id: 'hoisting-1',
        category: 'core',
        topic: 'Hoisting',
        question: 'What gets hoisted in JavaScript?',
        answer: 'var declarations and function declarations are hoisted to the top of their scope (var initialized as undefined, functions fully). let/const are hoisted too but stay in the "temporal dead zone" until their declaration line, throwing a ReferenceError if accessed earlier.'
    },
    {
        id: 'hoisting-2',
        category: 'core',
        topic: 'Hoisting',
        question: 'What is the temporal dead zone?',
        answer: 'The period between entering a scope and the point where a let/const variable is declared. Accessing the variable during this window throws a ReferenceError, even though it exists in scope.'
    },
    {
        id: 'promises-1',
        category: 'core',
        topic: 'Promises',
        question: 'What are the three states of a Promise?',
        answer: 'Pending (initial), fulfilled (resolved successfully with a value), and rejected (failed with a reason). Once settled (fulfilled/rejected), a Promise cannot change state again.'
    },
    {
        id: 'promises-2',
        category: 'core',
        topic: 'Promises',
        question: 'What is the difference between Promise.all and Promise.allSettled?',
        answer: 'Promise.all rejects immediately if any promise rejects, discarding other results. Promise.allSettled waits for all promises to settle and returns an array of {status, value/reason} for every one, regardless of failures.'
    },
    {
        id: 'async-1',
        category: 'core',
        topic: 'Async/Await',
        question: 'What does async/await actually do under the hood?',
        answer: 'It is syntactic sugar over Promises. await pauses execution of the async function (without blocking the thread) until the Promise settles, making asynchronous code read like synchronous code.'
    },
    {
        id: 'async-2',
        category: 'core',
        topic: 'Async/Await',
        question: 'How do you properly catch errors in async/await code?',
        answer: 'Wrap the await calls in try/catch. Without it, a rejected Promise inside an async function becomes an unhandled rejection rather than a caught error.'
    },
    {
        id: 'bubble-1',
        category: 'core',
        topic: 'Event Bubbling & Capturing',
        question: 'What is the difference between event bubbling and capturing?',
        answer: 'Capturing phase: the event travels from the root down to the target element. Bubbling phase: after hitting the target, it travels back up to the root. addEventListener listens in bubbling phase by default unless the third argument is true.'
    },
    {
        id: 'bubble-2',
        category: 'core',
        topic: 'Event Bubbling & Capturing',
        question: 'What is event delegation and why use it?',
        answer: 'Attaching a single listener to a parent element and using event.target to handle events from its children, relying on bubbling. It reduces memory usage versus per-child listeners and automatically handles dynamically added children.'
    },
    // React
    {
        id: 'lifecycle-1',
        category: 'react',
        topic: 'React Lifecycle',
        question: 'What are the three phases of a React component lifecycle?',
        answer: 'Mounting (component created and inserted into the DOM), updating (re-rendering due to state/props changes), and unmounting (component removed from the DOM). Hooks map to these via useEffect.'
    },
    {
        id: 'lifecycle-2',
        category: 'react',
        topic: 'React Lifecycle',
        question: 'How does useEffect map to class lifecycle methods?',
        answer: 'useEffect(fn, []) approximates componentDidMount. useEffect(fn, [dep]) approximates componentDidUpdate for that dependency. The cleanup function returned from useEffect approximates componentWillUnmount.'
    },
    {
        id: 'hooks-1',
        category: 'react',
        topic: 'React Hooks',
        question: 'What are the Rules of Hooks?',
        answer: 'Only call hooks at the top level (never in loops, conditions, or nested functions) and only call them from React function components or custom hooks. This ensures React can track hook call order consistently across renders.'
    },
    {
        id: 'hooks-2',
        category: 'react',
        topic: 'React Hooks',
        question: 'What problem do custom hooks solve?',
        answer: 'They let you extract and reuse stateful logic (e.g. data fetching, form handling) across components without changing component hierarchy, unlike older patterns like render props or HOCs.'
    },
    {
        id: 'stateprops-1',
        category: 'react',
        topic: 'State vs Props',
        question: 'What is the core difference between state and props?',
        answer: 'Props are passed down from a parent and are read-only from the child\'s perspective. State is local, mutable data owned and managed by the component itself, and updating it triggers a re-render.'
    },
    {
        id: 'stateprops-2',
        category: 'react',
        topic: 'State vs Props',
        question: 'Can a child component modify props it receives?',
        answer: 'No — mutating props directly breaks React\'s unidirectional data flow. Instead, the child calls a callback function passed down as a prop, letting the parent update its own state, which then flows back down.'
    },
    {
        id: 'context-1',
        category: 'react',
        topic: 'Context API',
        question: 'What problem does the Context API solve?',
        answer: 'Prop drilling — passing data through many intermediate components that don\'t need it just to reach a deeply nested child. Context lets any descendant subscribe to shared data directly.'
    },
    {
        id: 'context-2',
        category: 'react',
        topic: 'Context API',
        question: 'What is a downside of overusing Context for frequently-changing state?',
        answer: 'Every consumer of a context re-renders whenever the context value changes, even if it only cares about part of it. For high-frequency updates, this can hurt performance versus more targeted state management.'
    },
    {
        id: 'memo-1',
        category: 'react',
        topic: 'Memoization',
        question: 'What is the difference between useMemo and useCallback?',
        answer: 'useMemo memoizes a computed value, recalculating only when dependencies change. useCallback memoizes a function reference itself, useful for preventing unnecessary re-renders of children that receive that function as a prop.'
    },
    {
        id: 'memo-2',
        category: 'react',
        topic: 'Memoization',
        question: 'When is React.memo actually worth using?',
        answer: 'When a component re-renders often with the same props and the render itself is expensive. Overusing it on cheap components adds comparison overhead without meaningful benefit — it is a performance tool, not a default.'
    },
    // Performance & Architecture
    {
        id: 'debounce-1',
        category: 'perf',
        topic: 'Debouncing vs Throttling',
        question: 'What is the difference between debouncing and throttling?',
        answer: 'Debouncing delays execution until a pause in events (e.g. runs once after typing stops). Throttling executes at most once per fixed interval regardless of how many events fire, ensuring steady, regular execution.'
    },
    {
        id: 'debounce-2',
        category: 'perf',
        topic: 'Debouncing vs Throttling',
        question: 'Give an example use case for each.',
        answer: 'Debouncing: search-as-you-type input, to avoid firing an API call on every keystroke. Throttling: scroll or resize handlers, where you want periodic updates without flooding the callback.'
    },
    {
        id: 'ssr-1',
        category: 'perf',
        topic: 'SSR vs CSR vs SSG',
        question: 'Briefly contrast SSR, CSR, and SSG.',
        answer: 'CSR (Client-Side Rendering): browser downloads a near-empty HTML shell and JS builds the page. SSR (Server-Side Rendering): server renders HTML per request. SSG (Static Site Generation): HTML is pre-built at build time and served as static files.'
    },
    {
        id: 'ssr-2',
        category: 'perf',
        topic: 'SSR vs CSR vs SSG',
        question: 'What is a key tradeoff of SSR versus CSR?',
        answer: 'SSR improves initial load performance and SEO since users see meaningful content faster, but adds server load per request and complexity (data fetching on the server). CSR shifts that cost to the client after an initial blank/loading state.'
    },
    {
        id: 'hydration-1',
        category: 'perf',
        topic: 'Hydration',
        question: 'What is hydration in the context of SSR?',
        answer: 'The process where React attaches event listeners and internal state to server-rendered static HTML on the client, turning it into a fully interactive app without re-rendering the DOM from scratch.'
    },
    {
        id: 'hydration-2',
        category: 'perf',
        topic: 'Hydration',
        question: 'What causes a hydration mismatch error?',
        answer: 'When the HTML rendered on the server differs from what React would render on the client (e.g. using Date.now() or window in initial render), React detects the DOM mismatch and warns or throws.'
    },
    {
        id: 'codesplit-1',
        category: 'perf',
        topic: 'Code Splitting',
        question: 'What is code splitting and why does it matter?',
        answer: 'Breaking a large JS bundle into smaller chunks loaded on demand rather than all upfront, reducing initial load time. In React/Vite, this is commonly done with dynamic import() and React.lazy.'
    },
    {
        id: 'codesplit-2',
        category: 'perf',
        topic: 'Code Splitting',
        question: 'How does route-based code splitting typically work in a React app?',
        answer: 'Each route/page component is wrapped in React.lazy(() => import(\'./Page\')) and rendered inside a <Suspense> boundary, so its JS chunk only loads when the user navigates to that route.'
    },
    {
        id: 'lazy-1',
        category: 'perf',
        topic: 'Lazy Loading',
        question: 'What is lazy loading applied to images, and how do you implement it natively?',
        answer: 'Deferring image loading until they are near the viewport, reducing initial page weight. Natively, add loading="lazy" to an <img> tag; the browser handles the intersection logic automatically.'
    },
    {
        id: 'lazy-2',
        category: 'perf',
        topic: 'Lazy Loading',
        question: 'What is the difference between lazy loading and code splitting?',
        answer: 'Code splitting is about JS bundle size — deferring chunks of code. Lazy loading is a broader concept that also applies to assets like images, fonts, or components, deferring anything until it is actually needed.'
    },
    {
        id: 'webperf-1',
        category: 'perf',
        topic: 'Web Performance',
        question: 'Name the three Core Web Vitals.',
        answer: 'LCP (Largest Contentful Paint — loading speed), INP (Interaction to Next Paint — responsiveness), and CLS (Cumulative Layout Shift — visual stability). Google uses these as key UX/ranking signals.'
    },
    {
        id: 'webperf-2',
        category: 'perf',
        topic: 'Web Performance',
        question: 'What commonly causes a poor CLS score, and how do you fix it?',
        answer: 'Images or ads without reserved dimensions causing content to jump as they load, or web fonts swapping in late (FOIT/FOUT). Fix by setting explicit width/height or aspect-ratio, and reserving space for dynamic content.'
    },
    // Security & A11y
    {
        id: 'auth-1',
        category: 'security',
        topic: 'Authentication Basics',
        question: 'What is the difference between authentication and authorization?',
        answer: 'Authentication verifies who you are (login, credentials). Authorization determines what you\'re allowed to do once identified (permissions, roles, access control).'
    },
    {
        id: 'auth-2',
        category: 'security',
        topic: 'Authentication Basics',
        question: 'What is the difference between a session-based and token-based (JWT) auth flow?',
        answer: 'Session-based: server stores session state and the client holds a session ID cookie; the server looks up state on each request. Token-based: the server issues a signed JWT containing claims; the client sends it each request and the server verifies it statelessly without a lookup.'
    },
    {
        id: 'xss-1',
        category: 'security',
        topic: 'XSS / CSRF / CORS',
        question: 'What is XSS and how do frameworks like React mitigate it by default?',
        answer: 'Cross-Site Scripting: injecting malicious script into a page, often via unsanitized user input rendered as HTML. React escapes values rendered in JSX by default, preventing raw HTML injection unless you explicitly use dangerouslySetInnerHTML.'
    },
    {
        id: 'xss-2',
        category: 'security',
        topic: 'XSS / CSRF / CORS',
        question: 'What is CORS and why does it exist?',
        answer: 'Cross-Origin Resource Sharing is a browser security mechanism that restricts web pages from making requests to a different origin than the one that served the page, unless the server explicitly allows it via response headers. It protects users from malicious cross-origin requests using their credentials.'
    },
    {
        id: 'a11y-1',
        category: 'security',
        topic: 'Accessibility',
        question: 'What is the purpose of ARIA attributes, and when should you avoid them?',
        answer: 'ARIA attributes (e.g. aria-label, role) convey semantics to assistive technology when native HTML can\'t express it. The rule of thumb: prefer native semantic elements first — "no ARIA is better than bad ARIA," since incorrect ARIA can make accessibility worse.'
    },
    {
        id: 'a11y-2',
        category: 'security',
        topic: 'Accessibility',
        question: 'What does keyboard accessibility require at minimum?',
        answer: 'All interactive elements must be reachable and operable via Tab/Enter/Space without a mouse, with a visible focus indicator, and in a logical tab order matching the visual layout.'
    },
    // Day-to-Day
    {
        id: 'git-1',
        category: 'workflow',
        topic: 'Git Workflows',
        question: 'What is the difference between git merge and git rebase?',
        answer: 'Merge creates a new commit joining two histories, preserving branch history as-is. Rebase replays your branch\'s commits on top of another branch, producing a linear history but rewriting commit hashes — riskier on shared/public branches.'
    },
    {
        id: 'git-2',
        category: 'workflow',
        topic: 'Git Workflows',
        question: 'What is a typical feature-branch workflow?',
        answer: 'Branch off main for each feature/fix, commit incrementally, open a pull request for review, then merge (often squash-merge) back into main once approved and CI passes, keeping main always deployable.'
    },
    {
        id: 'test-1',
        category: 'workflow',
        topic: 'Testing Awareness',
        question: 'What is the difference between unit, integration, and end-to-end tests?',
        answer: 'Unit tests check a single function/component in isolation. Integration tests check how multiple units work together (e.g. a component with its hooks). E2E tests simulate real user flows across the whole app, often in a browser.'
    },
    {
        id: 'test-2',
        category: 'workflow',
        topic: 'Testing Awareness',
        question: 'Why does React Testing Library encourage testing behavior over implementation?',
        answer: 'It queries the DOM the way a user would (by text, role, label) rather than component internals, so tests stay valid through refactors and actually verify what users experience, not incidental implementation details.'
    },
    // additional expanded questions (80 new items)
    { id: 'html-sem-7', category: 'core', topic: 'HTML Semantics', question: 'Which HTML attribute makes an input required for form submission?', answer: 'The required attribute. Adding it to an input, select, or textarea prevents form submission until the field has a value, and triggers the browser\'s built-in validation UI.' },
    { id: 'html-sem-8', category: 'core', topic: 'HTML Semantics', question: 'Which rel value on a <link> tag indicates a stylesheet?', answer: 'rel="stylesheet". It tells the browser to parse and apply the linked file as CSS, as opposed to values like icon (favicon) or preload (prefetch hint).' },
    { id: 'css-spec-7', category: 'core', topic: 'CSS Specificity', question: 'Among an ID selector, a class selector, an element selector, and an attribute selector, which is least specific?', answer: 'The element selector (e.g. div). Specificity ranks roughly: inline styles > IDs > classes/attributes/pseudo-classes > element/type selectors, so a bare element selector loses to all the others.' },
    { id: 'css-spec-8', category: 'core', topic: 'CSS Specificity', question: 'What determines which CSS rule wins when multiple selectors target the same element?', answer: 'The cascade: source order, specificity, and importance (like !important) combine to decide the winning rule — not just one factor alone.' },
    { id: 'flexbox-7', category: 'core', topic: 'Flexbox', question: 'Which property adds spacing between flex items without adding margin to individual children?', answer: 'gap (or row-gap/column-gap). It creates space between flex items directly on the flex container, avoiding manual margins on children.' },
    { id: 'flexbox-8', category: 'core', topic: 'Flexbox', question: 'What does align-self do in a flex layout?', answer: 'It overrides align-items for a single flex item, letting that one item align differently on the cross axis than its siblings.' },
    { id: 'grid-7', category: 'core', topic: 'CSS Grid', question: 'What are named grid areas used for in CSS Grid?', answer: 'They let you reference layout regions by name (via grid-template-areas and grid-area) instead of row/column line numbers, making grid layouts more readable and easier to rearrange.' },
    { id: 'grid-8', category: 'core', topic: 'CSS Grid', question: 'When is it appropriate to use fr units in CSS Grid?', answer: 'When you want to distribute remaining space proportionally among tracks, rather than setting fixed pixel widths — fr units adapt to the available space in the container.' },
    { id: 'resp-7', category: 'core', topic: 'Responsive Design', question: 'Which HTML attribute provides alternative image sources for different resolutions or viewport widths?', answer: 'srcset. It lets the browser choose the most appropriate image file based on device pixel density or viewport size, often paired with the sizes attribute.' },
    { id: 'resp-8', category: 'core', topic: 'Responsive Design', question: 'Which meta tag is essential for responsive layouts to render correctly on mobile?', answer: '<meta name="viewport" content="width=device-width, initial-scale=1">. Without it, mobile browsers default to a desktop-width viewport and scale the page down.' },
    { id: 'dom-7', category: 'core', topic: 'DOM', question: 'Which DOM method returns a live HTMLCollection that updates automatically as the DOM changes?', answer: 'getElementsByClassName (and similarly getElementsByTagName). In contrast, querySelectorAll returns a static NodeList that doesn\'t reflect later DOM changes.' },
    { id: 'dom-8', category: 'core', topic: 'DOM', question: 'Which DOM method appends a node as the last child of a parent element?', answer: 'appendChild. It inserts the given node at the end of the parent\'s child list, moving it there if it already exists elsewhere in the document.' },
    { id: 'vdom-5', category: 'core', topic: 'Virtual DOM', question: 'Why are key props important when rendering lists in React?', answer: 'Keys help React match elements between renders during reconciliation, so it can correctly identify which items changed, were added, or were removed instead of re-rendering the whole list.' },
    { id: 'vdom-6', category: 'core', topic: 'Virtual DOM', question: 'What is reconciliation in React?', answer: 'The process of comparing the new virtual DOM tree against the previous one and computing the minimal set of real DOM updates needed to bring them in sync.' },
    { id: 'evloop-5', category: 'core', topic: 'Event Loop', question: 'Which API schedules a callback to run after a delay?', answer: 'setTimeout. It queues the callback as a macrotask to run after at least the specified delay, once the call stack is clear.' },
    { id: 'evloop-6', category: 'core', topic: 'Event Loop', question: 'Between the microtask queue and macrotask queue, which has priority in the JS event loop?', answer: 'The microtask queue. All pending microtasks (like resolved Promise callbacks) run to completion before the event loop picks up the next macrotask (like a setTimeout callback).' },
    { id: 'closures-5', category: 'core', topic: 'Closures', question: 'How can closures lead to unexpected memory retention?', answer: 'A closure keeps a reference to its outer scope\'s variables alive as long as the closure itself is reachable, so large objects captured in that scope won\'t be garbage collected even if no longer needed elsewhere.' },
    { id: 'hoisting-5', category: 'core', topic: 'Hoisting', question: 'What happens when you access a let variable before its declaration line?', answer: 'A ReferenceError is thrown. let (and const) are hoisted but remain in a "temporal dead zone" until their declaration executes, unlike var which would just be undefined.' },
    { id: 'promises-5', category: 'core', topic: 'Promises', question: 'How do you chain promises so operations run sequentially?', answer: 'Return a promise from within a .then() callback and chain the next .then() onto it — e.g. promise.then(() => next()) — so each step waits for the previous one to resolve.' },
    { id: 'async-5', category: 'core', topic: 'Async/Await', question: 'Why is it good practice to wrap await calls in try/catch?', answer: 'It lets you handle promise rejections cleanly at the point of failure, converting an unhandled rejection into a catchable error with normal synchronous-style control flow.' },
    { id: 'bubble-5', category: 'core', topic: 'Event Bubbling & Capturing', question: 'Which method prevents an event\'s default browser behavior (like a link navigating or a form submitting)?', answer: 'event.preventDefault(). This is distinct from event.stopPropagation(), which stops the event from bubbling/capturing further but doesn\'t cancel the default action.' },
    { id: 'hooks-5', category: 'react', topic: 'React Hooks', question: 'What does useState return?', answer: 'An array pair: the current state value and a setter function to update it, typically destructured as const [state, setState] = useState(initial).' },
    { id: 'lifecycle-6', category: 'react', topic: 'React Lifecycle', question: 'Why include dependencies in a useEffect dependency array?', answer: 'So the effect re-runs only when one of those values actually changes, keeping it in sync with the data it relies on instead of running on every render or never re-running at all.' },
    { id: 'lifecycle-7', category: 'react', topic: 'React Lifecycle', question: 'Where should the key prop be placed when rendering a list in React?', answer: 'Directly on the top-level element returned for each list item (the component or element in the .map() call), not on some nested child or the surrounding fragment.' },
    { id: 'stateprops-5', category: 'react', topic: 'State vs Props', question: 'How do you provide default values for props in a function component?', answer: 'Use default parameters in the function signature (e.g. function Card({ title = "Untitled" })) or, in older patterns, a defaultProps static property on the component.' },
    { id: 'context-5', category: 'react', topic: 'Context API', question: 'How can you avoid unnecessary re-renders caused by React Context?', answer: 'Memoize the value passed to the Provider (e.g. with useMemo), since a new object literal on every render causes all consumers to re-render even if the underlying data hasn\'t changed.' },
    { id: 'memo-5', category: 'react', topic: 'Memoization', question: 'What should you measure before reaching for memoization (useMemo/React.memo)?', answer: 'The actual render cost of the component and whether its props are stable between renders — memoization adds its own overhead and only pays off when re-renders are genuinely expensive and avoidable.' },
    { id: 'debounce-5', category: 'perf', topic: 'Debouncing vs Throttling', question: 'Which parameter controls how long a debounced function waits before executing?', answer: 'The timeout/delay value passed to the debounce function — it defines how long to wait after the last call before actually invoking the underlying function.' },
    { id: 'debounce-6', category: 'perf', topic: 'Debouncing vs Throttling', question: 'What guarantee does throttling provide about how often a function runs?', answer: 'It ensures the function executes at most once per specified interval, regardless of how many times the triggering event fires during that window.' },
    { id: 'ssr-5', category: 'perf', topic: 'SSR vs CSR vs SSG', question: 'What kind of pages is Static Site Generation (SSG) best suited for?', answer: 'Pages that are mostly static and cacheable — content that doesn\'t need to be freshly computed per request, so it can be pre-rendered at build time and served instantly from a CDN.' },
    { id: 'ssr-6', category: 'perf', topic: 'SSR vs CSR vs SSG', question: 'How can server-side rendered (SSR) responses be cached to improve performance?', answer: 'Using a CDN or server-side caching layer to store rendered HTML for a period, so repeat requests skip re-running the render on the server.' },
    { id: 'hydration-5', category: 'perf', topic: 'Hydration', question: 'What practice reduces the risk of hydration mismatches in SSR apps?', answer: 'Avoiding non-deterministic values (like Date.now() or Math.random()) and direct window/document access during the initial render, since these can produce different output on the server than on the client.' },
    { id: 'codesplit-5', category: 'perf', topic: 'Code Splitting', question: 'What\'s a key benefit of code splitting for mobile users specifically?', answer: 'A smaller initial JavaScript download, which matters more on mobile where bandwidth and CPU are typically more constrained than on desktop.' },
    { id: 'lazy-5', category: 'perf', topic: 'Lazy Loading', question: 'How can you defer webfont loading to improve Largest Contentful Paint (LCP)?', answer: 'Use font-display: swap (or similar), which lets the browser render text with a fallback font immediately and swap in the custom font once it loads, instead of blocking text rendering.' },
    { id: 'webperf-5', category: 'perf', topic: 'Web Performance', question: 'What\'s the primary performance benefit of using a CDN?', answer: 'It serves static assets from edge locations physically closer to users, reducing network latency compared to fetching everything from a single origin server.' },
    { id: 'auth-5', category: 'security', topic: 'Authentication Basics', question: 'What is a refresh token used for?', answer: 'Obtaining new access tokens without forcing the user to re-authenticate once their current access token expires — it\'s typically longer-lived and stored more securely than the access token.' },
    { id: 'auth-6', category: 'security', topic: 'Authentication Basics', question: 'Why is it generally discouraged to store JWTs in localStorage?', answer: 'localStorage is accessible to any JavaScript running on the page, making tokens stored there vulnerable to theft via XSS. Sensitive tokens are usually better kept in httpOnly cookies, which JavaScript can\'t read.' },
    { id: 'xss-8', category: 'security', topic: 'XSS / CSRF / CORS', question: 'What\'s a server-side mitigation for XSS attacks?', answer: 'Sanitizing and escaping user input before rendering it, so any HTML/JS the user submitted is treated as plain text rather than executable markup.' },
    { id: 'xss-9', category: 'security', topic: 'XSS / CSRF / CORS', question: 'What\'s a common mitigation against CSRF attacks?', answer: 'Using SameSite cookies and/or CSRF tokens — SameSite restricts when cookies are sent cross-site, and CSRF tokens verify that a request genuinely originated from your own app\'s forms.' },
    { id: 'a11y-5', category: 'security', topic: 'Accessibility', question: 'Which HTML element improves accessibility for site navigation?', answer: 'The <nav> element. It\'s a landmark role that screen readers can use to let users jump directly to navigation, instead of relying on a generic <div>.' },
    { id: 'a11y-6', category: 'security', topic: 'Accessibility', question: 'Which attribute associates a <label> with its corresponding input?', answer: 'The for attribute on the label (written as htmlFor in JSX), matched to the input\'s id. This lets clicking the label focus the input and gives screen reader users clear context.' },
    { id: 'git-8', category: 'workflow', topic: 'Git Workflows', question: 'What is trunk-based development?', answer: 'A workflow where developers use short-lived feature branches merged back into the main (trunk) branch frequently, minimizing long-running divergence and merge conflicts.' },
    { id: 'git-9', category: 'workflow', topic: 'Git Workflows', question: 'How do you undo a commit without rewriting existing history?', answer: 'git revert. It creates a new commit that undoes the changes of a previous one, preserving history — unlike git reset --hard, which rewrites the branch pointer and discards commits.' },
    { id: 'git-10', category: 'workflow', topic: 'Git Workflows', question: 'What does the "CD" stand for in CI/CD?', answer: 'Continuous Delivery or Continuous Deployment — automatically preparing (and in the deployment case, releasing) every change that passes the pipeline, following on from Continuous Integration.' },
    { id: 'test-8', category: 'workflow', topic: 'Testing Awareness', question: 'Which type of test typically runs fastest during local development?', answer: 'Unit tests. They test small, isolated pieces of code without spinning up a browser, network calls, or a full app, making them quick to run frequently.' },
    { id: 'test-9', category: 'workflow', topic: 'Testing Awareness', question: 'Why use mocks in unit tests?', answer: 'To isolate the unit under test by replacing its external dependencies (APIs, databases, modules) with controlled stand-ins, so the test verifies the unit\'s own logic rather than its dependencies\' behavior.' },
    { id: 'test-10', category: 'workflow', topic: 'Testing Awareness', question: 'What is a flaky test?', answer: 'A test that sometimes passes and sometimes fails without any changes to the code being tested, usually due to timing issues, shared state, or reliance on external/non-deterministic factors.' },
    { id: 'html-sem-9', category: 'core', topic: 'HTML Semantics', question: 'How do you safely make a link open in a new tab?', answer: 'Use target="_blank" together with rel="noopener noreferrer". The rel attributes prevent the new page from accessing window.opener, closing a security gap, and avoid leaking the referrer.' },
    { id: 'resp-9', category: 'core', topic: 'Responsive Design', question: 'Which media query targets screens wider than 768px?', answer: '@media (min-width: 768px). min-width queries apply styles at or above a breakpoint, which is the basis of a mobile-first responsive approach.' },
    { id: 'dom-9', category: 'core', topic: 'DOM', question: 'Which DOM method clones a node along with all of its children?', answer: 'cloneNode(true). Passing true performs a deep clone including descendants; cloneNode(false) (or no argument) clones only the node itself.' },
    { id: 'evloop-7', category: 'core', topic: 'Event Loop', question: 'Which API schedules a microtask rather than a macrotask?', answer: 'Promise.resolve().then(...) (and other Promise callbacks). Microtasks run before the next macrotask (like setTimeout or setInterval), giving them higher priority in the event loop.' },
    { id: 'closures-6', category: 'core', topic: 'Closures', question: 'How does currying often make use of closures?', answer: 'A curried function returns a chain of functions, each closing over the arguments already supplied, preserving them until the final call actually executes with the full argument set.' },
    { id: 'promises-6', category: 'core', topic: 'Promises', question: 'How should errors in a promise chain be handled?', answer: 'With a .catch() at the end of the chain, which catches any rejection from earlier .then() steps — centralizing error handling instead of wrapping each step individually.' },
    { id: 'async-6', category: 'core', topic: 'Async/Await', question: 'How can you add a timeout to an awaited promise?', answer: 'Race the original promise against a timeout promise using Promise.race() — whichever settles first (the real result or the timeout rejection) determines the outcome.' },
    { id: 'lifecycle-8', category: 'react', topic: 'React Lifecycle', question: 'What do React error boundaries catch?', answer: 'Errors thrown during rendering, in lifecycle methods, and in constructors of their child component tree. They don\'t catch errors in event handlers, async code, or errors in the boundary itself.' },
    { id: 'lifecycle-9', category: 'react', topic: 'React Lifecycle', question: 'What is React\'s Suspense used for?', answer: 'Showing a fallback UI while waiting for lazy-loaded components or asynchronously-fetched data to become ready, rather than rendering an incomplete or broken UI in the meantime.' },
    { id: 'webperf-6', category: 'perf', topic: 'Web Performance', question: 'What tool audits a web page for performance, accessibility, and best practices?', answer: 'Lighthouse. It generates scored reports across categories like performance, accessibility, SEO, and best practices, along with specific actionable recommendations.' },
    { id: 'xss-10', category: 'security', topic: 'XSS / CSRF / CORS', question: 'Which HTTP header helps mitigate XSS by restricting where scripts can be loaded from?', answer: 'Content-Security-Policy (CSP). It lets you whitelist trusted sources for scripts, styles, and other resources, blocking inline or third-party scripts not explicitly allowed.' },
    { id: 'a11y-7', category: 'security', topic: 'Accessibility', question: 'What is aria-live used for?', answer: 'Announcing dynamic content changes to screen reader users — content added or updated inside an element with aria-live gets read out automatically, even without the user\'s focus being on it.' },
    { id: 'git-11', category: 'workflow', topic: 'Git Workflows', question: 'What makes a code review constructive rather than just critical?', answer: 'Explaining the reasoning behind a suggested change and offering concrete alternatives, rather than only flagging problems — this helps the author learn and keeps the review collaborative.' },
    { id: 'test-11', category: 'workflow', topic: 'Testing Awareness', question: 'What is a contract test?', answer: 'A test that verifies the interactions between two services (e.g. a consumer and a provider API) match an agreed-upon contract, catching integration-breaking changes without needing full end-to-end tests.' },
    { id: 'webperf-7', category: 'perf', topic: 'Web Performance', question: 'Which image format often provides the best compression for photographic images on the web?', answer: 'WebP. It typically achieves smaller file sizes than PNG or GIF at comparable visual quality, especially for photos, while still supporting transparency and animation.' }
];     