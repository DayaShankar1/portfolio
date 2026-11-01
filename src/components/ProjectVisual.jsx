export default function ProjectVisual({ type }) {
  if (type === 'portal') {
    return (
      <div className="project-visual visual-portal" aria-hidden="true">
        <div className="ui-window portal-window">
          <div className="ui-topbar">
            <span className="ui-logo">EHM</span>
            <span />
            <i />
          </div>
          <div className="portal-shell">
            <div className="portal-sidebar">
              <b />
              <span /><span /><span /><span />
            </div>
            <div className="portal-main">
              <div className="portal-heading"><b>Employee overview</b><i /></div>
              <div className="portal-stats"><span /><span /><span /></div>
              <div className="portal-chart">
                <i /><i /><i /><i /><i /><i /><i />
              </div>
              <div className="portal-table"><span /><span /><span /><span /></div>
            </div>
          </div>
        </div>
        <span className="visual-index">01</span>
      </div>
    )
  }

  if (type === 'chatbot') {
    return (
      <div className="project-visual visual-chatbot" aria-hidden="true">
        <span className="chat-orbit chat-orbit--one" />
        <span className="chat-orbit chat-orbit--two" />
        <div className="chat-window">
          <div className="chat-head"><i /> SIH / ASSIST</div>
          <p className="chat-bubble chat-bubble--bot">How can I help you today?</p>
          <p className="chat-bubble chat-bubble--user">Find the right information.</p>
          <div className="chat-input">Type a question <span>↗</span></div>
        </div>
        <b className="chat-code">&lt;AI / UI&gt;</b>
      </div>
    )
  }

  if (type === 'weather') {
    return (
      <div className="project-visual visual-weather" aria-hidden="true">
        <div className="weather-sun" />
        <span className="weather-city">PATNA / IN</span>
        <strong>28°</strong>
        <div className="weather-meta"><span>Clear sky</span><span>Feels like 30°</span></div>
        <div className="weather-days"><i>MON</i><i>TUE</i><i>WED</i><i>THU</i></div>
      </div>
    )
  }

  if (type === 'seo') {
    return (
      <div className="project-visual visual-seo" aria-hidden="true">
        <div className="seo-ring"><strong>86</strong><span>SEO score</span></div>
        <div className="seo-list"><span /><span /><span /><span /></div>
        <b>ANALYZE<br />IMPROVE<br />REPEAT</b>
      </div>
    )
  }

  if (type === 'spotify') {
    return (
      <div className="project-visual visual-spotify" aria-hidden="true">
        <div className="record"><i /></div>
        <div className="track-copy"><span>NOW PLAYING</span><strong>Midnight<br />Frequency</strong><i /></div>
        <div className="sound-bars"><span /><span /><span /><span /><span /><span /><span /></div>
      </div>
    )
  }

  return (
    <div className="project-visual visual-simon" aria-hidden="true">
      <div className="simon-board">
        <span /><span /><span /><span />
        <b>04</b>
      </div>
      <strong>WATCH.<br />REMEMBER.<br />REPEAT.</strong>
    </div>
  )
}
