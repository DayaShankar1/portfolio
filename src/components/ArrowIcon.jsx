export default function ArrowIcon({ direction = 'diagonal' }) {
  const path =
    direction === 'left'
      ? 'M19 12H5m0 0 6-6m-6 6 6 6'
      : direction === 'right'
        ? 'M5 12h14m0 0-6-6m6 6-6 6'
        : direction === 'down'
          ? 'M12 5v14m0 0 6-6m-6 6-6-6'
          : direction === 'up'
            ? 'M12 19V5m0 0L6 11m6-6 6 6'
          : 'M7 17 17 7m0 0H8m9 0v9'

  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d={path} stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}
