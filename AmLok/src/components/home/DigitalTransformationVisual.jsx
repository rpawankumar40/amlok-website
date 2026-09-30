export default function DigitalTransformationVisual({ idPrefix = 'ecosystem' }) {
  return (
    <svg
      className="digital-ecosystem-art"
      viewBox="0 0 760 760"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id={`${idPrefix}-halo`} cx="0" cy="0" r="1" gradientTransform="translate(380 370) rotate(90) scale(340)">
          <stop stopColor="#B9DFFF" stopOpacity="0.58" />
          <stop offset="0.58" stopColor="#E1E9FF" stopOpacity="0.34" />
          <stop offset="1" stopColor="#F2F7FF" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${idPrefix}-core`} x1="277" y1="261" x2="493" y2="498" gradientUnits="userSpaceOnUse">
          <stop stopColor="#112F68" />
          <stop offset="0.55" stopColor="#2458B5" />
          <stop offset="1" stopColor="#178EA8" />
        </linearGradient>
        <linearGradient id={`${idPrefix}-ring`} x1="260" y1="279" x2="507" y2="479" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5B96FF" />
          <stop offset="0.48" stopColor="#8A72E9" />
          <stop offset="1" stopColor="#39C2C3" />
        </linearGradient>
        <linearGradient id={`${idPrefix}-link-ai`} x1="380" y1="157" x2="380" y2="258" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A46BEB" />
          <stop offset="1" stopColor="#6486EF" />
        </linearGradient>
        <linearGradient id={`${idPrefix}-link-cloud`} x1="180" y1="272" x2="294" y2="326" gradientUnits="userSpaceOnUse">
          <stop stopColor="#39B8D3" />
          <stop offset="1" stopColor="#5485E7" />
        </linearGradient>
        <linearGradient id={`${idPrefix}-link-data`} x1="580" y1="272" x2="466" y2="326" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38B89E" />
          <stop offset="1" stopColor="#507BE0" />
        </linearGradient>
        <linearGradient id={`${idPrefix}-link-apps`} x1="211" y1="505" x2="297" y2="444" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E5A15C" />
          <stop offset="1" stopColor="#7C73E4" />
        </linearGradient>
        <linearGradient id={`${idPrefix}-link-automation`} x1="380" y1="605" x2="380" y2="504" gradientUnits="userSpaceOnUse">
          <stop stopColor="#43B89A" />
          <stop offset="1" stopColor="#4C8CE3" />
        </linearGradient>
        <linearGradient id={`${idPrefix}-link-integration`} x1="550" y1="505" x2="464" y2="444" gradientUnits="userSpaceOnUse">
          <stop stopColor="#DB6EB4" />
          <stop offset="1" stopColor="#6977E5" />
        </linearGradient>
        <filter id={`${idPrefix}-glow`} x="-100%" y="-100%" width="300%" height="300%" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="12" />
        </filter>
        <filter id={`${idPrefix}-node-shadow`} x="-40%" y="-40%" width="180%" height="180%" colorInterpolationFilters="sRGB">
          <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#173C77" floodOpacity="0.16" />
        </filter>
      </defs>

      <circle cx="380" cy="370" r="340" fill={`url(#${idPrefix}-halo)`} />
      <circle cx="380" cy="370" r="287" stroke="#A8C5E3" strokeOpacity="0.38" strokeDasharray="2 11" />
      <circle cx="380" cy="370" r="245" stroke="#6D9BD4" strokeOpacity="0.2" strokeDasharray="1 9" />
      <path d="M96 322h38m488 0h42M380 35v33m0 602v36M151 558l26-26m405-405 27-27m-458 0 27 27m405 405 27 26" stroke="#7398C1" strokeOpacity="0.3" strokeWidth="1.5" />
      <circle cx="380" cy="370" r="237" stroke={`url(#${idPrefix}-ring)`} strokeOpacity="0.44" strokeDasharray="170 24 45 32" className="ecosystem-orbit" />

      <path d="M380 153C380 204 380 224 380 258" stroke={`url(#${idPrefix}-link-ai)`} strokeWidth="2.5" />
      <path d="M183 270C224 280 253 299 294 326" stroke={`url(#${idPrefix}-link-cloud)`} strokeWidth="2.5" />
      <path d="M577 270C536 280 507 299 466 326" stroke={`url(#${idPrefix}-link-data)`} strokeWidth="2.5" />
      <path d="M213 508C244 481 264 463 298 442" stroke={`url(#${idPrefix}-link-apps)`} strokeWidth="2.5" />
      <path d="M380 605C380 564 380 537 380 503" stroke={`url(#${idPrefix}-link-automation)`} strokeWidth="2.5" />
      <path d="M547 508C516 481 496 463 462 442" stroke={`url(#${idPrefix}-link-integration)`} strokeWidth="2.5" />
      <path d="M380 153C380 204 380 224 380 258M183 270C224 280 253 299 294 326M577 270C536 280 507 299 466 326M213 508C244 481 264 463 298 442M380 605C380 564 380 537 380 503M547 508C516 481 496 463 462 442" stroke="#FFFFFF" strokeOpacity="0.72" strokeWidth="1" strokeDasharray="3 15" className="ecosystem-flow" />

      <circle cx="380" cy="210" r="5" fill="#B591F5" className="ecosystem-pulse" />
      <circle cx="246" cy="300" r="5" fill="#51C8D8" className="ecosystem-pulse delay-one" />
      <circle cx="514" cy="300" r="5" fill="#47C9A3" className="ecosystem-pulse delay-two" />
      <circle cx="256" cy="477" r="5" fill="#F0AE70" className="ecosystem-pulse delay-two" />
      <circle cx="380" cy="552" r="5" fill="#56D0A9" className="ecosystem-pulse delay-one" />
      <circle cx="504" cy="477" r="5" fill="#E687C1" className="ecosystem-pulse" />

      <g className="ecosystem-core ecosystem-pulse-core">
        <circle cx="380" cy="380" r="139" fill="#578DEB" fillOpacity="0.12" filter={`url(#${idPrefix}-glow)`} />
        <circle cx="380" cy="380" r="123" fill="#F7FAFF" fillOpacity="0.7" stroke={`url(#${idPrefix}-ring)`} strokeWidth="2" />
        <circle cx="380" cy="380" r="111" fill={`url(#${idPrefix}-core)`} />
        <circle cx="380" cy="380" r="99" stroke="#FFFFFF" strokeOpacity="0.2" />
        <path d="M380 285a95 95 0 0 1 82 47" stroke="#8BDCF0" strokeOpacity="0.75" strokeWidth="2" strokeLinecap="round" />
        <circle cx="380" cy="380" r="68" fill="#FFFFFF" fillOpacity="0.07" />
        <text x="380" y="371" textAnchor="middle" fill="#FFFFFF" fontFamily="Arial,sans-serif" fontSize="31" fontWeight="700">AmLok</text>
        <path d="M340 388h80" stroke="#93DAEF" strokeOpacity="0.8" strokeWidth="1.5" />
        <text x="380" y="412" textAnchor="middle" fill="#DCEEFF" fontFamily="Arial,sans-serif" fontSize="12" fontWeight="700" letterSpacing="2.1">DIGITAL CORE</text>
        <circle cx="380" cy="300" r="4" fill="#C5A4FF" />
        <circle cx="449" cy="416" r="3.5" fill="#60E1D1" />
        <circle cx="311" cy="416" r="3.5" fill="#83D5FF" />
      </g>

      <g className="ecosystem-node node-ai" filter={`url(#${idPrefix}-node-shadow)`}>
        <circle cx="380" cy="112" r="46" fill="#F9F6FF" stroke="#D8C4F7" strokeWidth="1.5" />
        <circle cx="380" cy="112" r="34" fill="#F0E8FF" />
        <circle cx="380" cy="112" r="22" fill="#8A66D8" />
        <circle cx="380" cy="112" r="5" fill="white" /><circle cx="368" cy="105" r="3" fill="#DCD0FF" /><circle cx="393" cy="102" r="3" fill="#DCD0FF" /><circle cx="369" cy="122" r="3" fill="#DCD0FF" /><circle cx="393" cy="121" r="3" fill="#DCD0FF" />
        <path d="m368 105 12 7 13-10m-24 20 11-8 13 7m-25-16 1 16m24-19v19" stroke="#FFFFFF" strokeWidth="1.5" />
        <text x="380" y="177" textAnchor="middle" fill="#344F70" fontFamily="Arial,sans-serif" fontSize="12" fontWeight="700" letterSpacing="1.4">AI</text>
      </g>

      <g className="ecosystem-node node-cloud" filter={`url(#${idPrefix}-node-shadow)`}>
        <circle cx="144" cy="244" r="46" fill="#F2FBFF" stroke="#AFE1EC" strokeWidth="1.5" />
        <circle cx="144" cy="244" r="34" fill="#DFF6F7" />
        <path d="M126 249c0-7 5-12 12-12 2-9 9-14 18-12 7 1 12 7 13 14 6 1 10 5 10 11 0 7-5 12-12 12h-29c-7 0-12-6-12-13Z" fill="#2B9BB5" />
        <path d="M144 243v13m-6-6 6 6 6-6" stroke="#E9FDFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="144" y="309" textAnchor="middle" fill="#344F70" fontFamily="Arial,sans-serif" fontSize="12" fontWeight="700" letterSpacing="1.1">CLOUD</text>
      </g>

      <g className="ecosystem-node node-data" filter={`url(#${idPrefix}-node-shadow)`}>
        <circle cx="616" cy="244" r="46" fill="#F1FCF8" stroke="#B4E5D4" strokeWidth="1.5" />
        <circle cx="616" cy="244" r="34" fill="#E0F5EC" />
        <ellipse cx="616" cy="230" rx="17" ry="7" fill="#33A886" />
        <path d="M599 230v25c0 4 8 8 17 8s17-4 17-8v-25m-34 8c0 4 8 8 17 8s17-4 17-8m-34 8c0 4 8 8 17 8s17-4 17-8" stroke="#23866E" strokeWidth="2" />
        <path d="M607 231h18" stroke="#E7FFF6" strokeWidth="2" strokeLinecap="round" />
        <text x="616" y="309" textAnchor="middle" fill="#344F70" fontFamily="Arial,sans-serif" fontSize="12" fontWeight="700" letterSpacing="1.2">DATA</text>
      </g>

      <g className="ecosystem-node node-apps" filter={`url(#${idPrefix}-node-shadow)`}>
        <circle cx="184" cy="536" r="46" fill="#FFF9F3" stroke="#F0D0AE" strokeWidth="1.5" />
        <circle cx="184" cy="536" r="34" fill="#F9EBDD" />
        <rect x="164" y="519" width="40" height="33" rx="6" fill="#D88B4D" />
        <path d="M164 528h40" stroke="#FFEAD4" strokeWidth="2" />
        <circle cx="170" cy="524" r="1.5" fill="#FFF4E8" /><circle cx="176" cy="524" r="1.5" fill="#FFF4E8" />
        <path d="m174 539-5 4 5 4m20-8 5 4-5 4m-5-10-5 12" stroke="#FFF8F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="184" y="601" textAnchor="middle" fill="#344F70" fontFamily="Arial,sans-serif" fontSize="11" fontWeight="700" letterSpacing="0.8">APPLICATIONS</text>
      </g>

      <g className="ecosystem-node node-automation" filter={`url(#${idPrefix}-node-shadow)`}>
        <circle cx="380" cy="648" r="46" fill="#F1FCF7" stroke="#B1E5D2" strokeWidth="1.5" />
        <circle cx="380" cy="648" r="34" fill="#DDF5E9" />
        <circle cx="380" cy="648" r="16" fill="#35A984" />
        <circle cx="380" cy="648" r="5" fill="#EFFFF7" />
        <path d="M380 626v8m0 28v8m22-22h-8m-28 0h-8m37-15-6 6m-20 20-6 6m32 0-6-6m-20-20-6-6" stroke="#258F71" strokeWidth="4" strokeLinecap="round" />
        <text x="380" y="713" textAnchor="middle" fill="#344F70" fontFamily="Arial,sans-serif" fontSize="10.5" fontWeight="700" letterSpacing="0.7">AUTOMATION</text>
      </g>

      <g className="ecosystem-node node-integration" filter={`url(#${idPrefix}-node-shadow)`}>
        <circle cx="576" cy="536" r="46" fill="#FFF7FC" stroke="#E8C6E0" strokeWidth="1.5" />
        <circle cx="576" cy="536" r="34" fill="#F5E6F3" />
        <circle cx="576" cy="521" r="6" fill="#B461A2" /><circle cx="560" cy="550" r="6" fill="#677ECC" /><circle cx="592" cy="550" r="6" fill="#3B9EAA" />
        <path d="m576 527-13 18m17-18 13 18m-27 5h20" stroke="#6E76B3" strokeWidth="2.5" />
        <circle cx="576" cy="536" r="4" fill="#FFFFFF" />
        <text x="576" y="601" textAnchor="middle" fill="#344F70" fontFamily="Arial,sans-serif" fontSize="11" fontWeight="700" letterSpacing="0.8">INTEGRATION</text>
      </g>

      <circle cx="262" cy="167" r="3" fill="#9E81E0" />
      <circle cx="506" cy="167" r="3" fill="#46BEB1" />
      <circle cx="110" cy="395" r="3" fill="#49B4CE" />
      <circle cx="650" cy="395" r="3" fill="#CB75C0" />
      <circle cx="281" cy="643" r="3" fill="#E1A266" />
      <circle cx="480" cy="643" r="3" fill="#56BD9A" />
    </svg>
  );
}