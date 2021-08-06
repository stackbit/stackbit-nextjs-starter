export default function Bolt(props) {
    return (
        <svg className={`w-${props.size} h-${props.size} text-deep-purple-accent-400`} stroke="currentColor" viewBox="0 0 52 52">
            <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23" />
        </svg>
    );
}
