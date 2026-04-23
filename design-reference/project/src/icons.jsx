// Line icons — minimal stroke
const Ic = {
  arrow: (p={}) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M5 12h14M13 6l6 6-6 6"/>
    </svg>
  ),
  arrLg: (p={}) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M5 12h14M13 6l6 6-6 6"/>
    </svg>
  ),
  check: (p={}) => (
    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M4 12l5 5L20 6"/>
    </svg>
  ),
  close: (p={}) => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" {...p}>
      <path d="M6 6l12 12M18 6L6 18"/>
    </svg>
  ),
  send: (p={}) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M4 12l16-8-5 16-3-7-8-1z"/>
    </svg>
  ),
  chat: (p={}) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4-1l-4 1 1-4a8.5 8.5 0 1 1 15.5-4.5z"/>
    </svg>
  ),
  book: (p={}) => (
    <svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M6 6a2 2 0 0 1 2-2h16v22H8a2 2 0 0 0-2 2V6z"/><path d="M6 26a2 2 0 0 1 2-2h16"/>
      <path d="M11 10h10M11 14h7"/>
    </svg>
  ),
  compass: (p={}) => (
    <svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="16" cy="16" r="12"/><path d="M20 12l-3 8-8 3 3-8 8-3z"/>
    </svg>
  ),
  tools: (p={}) => (
    <svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M19 9a5 5 0 0 0-6.8 6.8L4 24l4 4 8.2-8.2A5 5 0 0 0 23 13l-3 3-3-1-1-3 3-3z"/>
    </svg>
  ),
  coin: (p={}) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" {...p}>
      <circle cx="12" cy="12" r="9"/><path d="M12 7v10M9 9.5c0-1 1.2-2 3-2s3 1 3 2-1.2 1.5-3 2-3 1-3 2 1.2 2 3 2 3-1 3-2"/>
    </svg>
  ),
  leaf: (p={}) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M20 4c-9 0-15 5-15 13a3 3 0 0 0 3 3c8 0 13-8 12-16z"/><path d="M5 20c6-4 10-8 13-14"/>
    </svg>
  ),
  wave: (p={}) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" {...p}>
      <path d="M2 8c2.5-2 5 2 7.5 0S14.5 6 17 8s5 0 5 0"/><path d="M2 14c2.5-2 5 2 7.5 0S14.5 12 17 14s5 0 5 0"/>
    </svg>
  ),
  globe: (p={}) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
      <circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>
    </svg>
  ),
  warning: (p={}) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 3l10 18H2L12 3z"/><path d="M12 10v5M12 18v.5"/>
    </svg>
  ),
  bars: (p={}) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" {...p}>
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>
    </svg>
  ),
  pdf: (p={}) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" {...p}>
      <path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/>
      <text x="7" y="17.5" fontSize="4.6" fontWeight="700" fontFamily="sans-serif" fill="currentColor" stroke="none">PDF</text>
    </svg>
  ),
  xlsx: (p={}) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" {...p}>
      <path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/>
      <text x="7" y="17.5" fontSize="4.6" fontWeight="700" fontFamily="sans-serif" fill="currentColor" stroke="none">XLS</text>
    </svg>
  ),
  doc: (p={}) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" {...p}>
      <path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/><path d="M8 12h8M8 15h5"/>
    </svg>
  ),
  search: (p={}) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" {...p}>
      <circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/>
    </svg>
  ),
  download: (p={}) => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 4v12M6 10l6 6 6-6M4 20h16"/>
    </svg>
  ),
  play: (p={}) => (
    <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" {...p}><path d="M6 4l14 8-14 8V4z"/></svg>
  ),
  phone: (p={}) => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" {...p}>
      <path d="M5 4h4l2 5-3 2a11 11 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z"/>
    </svg>
  ),
  mail: (p={}) => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <rect x="3" y="5" width="18" height="14" rx="1"/><path d="M3 6l9 7 9-7"/>
    </svg>
  ),
  pin: (p={}) => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 22s7-7 7-13a7 7 0 0 0-14 0c0 6 7 13 7 13z"/><circle cx="12" cy="9" r="2.5"/>
    </svg>
  ),
  fb: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M13 22V12h3l.5-4H13V5.5c0-1 .3-1.7 1.8-1.7H17V.2C16.6.1 15.3 0 14 0c-3 0-5 1.8-5 5v3H6v4h3v10h4z"/></svg>,
  tw: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.2 4h3L14 12.3 22.5 22H16l-5-6.5L5.2 22H2l7.8-9L1.8 4H8.5l4.5 5.9L18.2 4z"/></svg>,
  ig: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>,
  yt: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22 7s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.1-.9C16 4 12 4 12 4s-4 0-7 .2c-.5 0-1.3 0-2.1.8C2.2 5.6 2 7 2 7S1.8 8.6 1.8 10.2v1.5C1.8 13.4 2 15 2 15s.2 1.4.8 2c.8.8 1.8.8 2.2.9 1.6.2 7 .2 7 .2s4 0 7-.2c.4 0 1.3-.1 2.1-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5c0-1.6-.2-3.3-.2-3.3zM10 14V8l5 3-5 3z"/></svg>,
  li: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM3 9h3v12H3V9zm5 0h3v1.6c.4-.7 1.5-1.8 3.5-1.8 3.3 0 4 2 4 5V21h-3v-6c0-1.5-.5-2.5-2-2.5s-2.5 1-2.5 2.5V21H8V9z"/></svg>,
};

// Abstract avatar — no faces
function AvatarPH({seed=1, hue="var(--forest-2)"}){
  const layouts = [
    <g key="a"><rect width="100" height="100" fill="var(--paper-2)"/><circle cx="50" cy="42" r="20" fill={hue} opacity=".6"/><rect x="18" y="68" width="64" height="30" rx="15" fill={hue} opacity=".35"/></g>,
    <g key="b"><rect width="100" height="100" fill="var(--paper-2)"/><path d="M0 100 Q50 40 100 100Z" fill={hue} opacity=".5"/><circle cx="50" cy="42" r="18" fill={hue} opacity=".7"/></g>,
    <g key="c"><rect width="100" height="100" fill="var(--paper-2)"/><circle cx="50" cy="55" r="36" fill={hue} opacity=".25"/><circle cx="50" cy="45" r="18" fill={hue} opacity=".8"/></g>,
    <g key="d"><rect width="100" height="100" fill="var(--paper-2)"/><rect x="10" y="60" width="80" height="40" fill={hue} opacity=".45"/><circle cx="50" cy="42" r="18" fill={hue} opacity=".8"/></g>,
    <g key="e"><rect width="100" height="100" fill="var(--paper-2)"/><polygon points="50,12 90,90 10,90" fill={hue} opacity=".3"/><circle cx="50" cy="48" r="16" fill={hue} opacity=".75"/></g>,
    <g key="f"><rect width="100" height="100" fill="var(--paper-2)"/><circle cx="30" cy="30" r="20" fill={hue} opacity=".35"/><circle cx="65" cy="55" r="28" fill={hue} opacity=".6"/></g>,
  ];
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" style={{width:'100%',height:'100%'}}>
      {layouts[seed % layouts.length]}
    </svg>
  );
}

Object.assign(window, { Ic, AvatarPH });
