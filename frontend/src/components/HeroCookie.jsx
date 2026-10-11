import { useId } from "react";

/* Cookie géant dessiné en SVG : tourne au défilement (voir .cookie-scroll-spin dans index.css) */
export default function HeroCookie() {
  const id = useId();
  return (
    <div
      className="cookie-scroll-spin relative mx-auto h-[440px] w-[440px] tablet:h-[400px] tablet:w-[400px] mobile:h-[300px] mobile:w-[300px]"
      data-testid="hero-cookie"
    >
      <svg
        viewBox="0 0 420 420"
        role="img"
        aria-label="Cookie géant Mille Pépites, croqué et constellé de pépites"
        className="h-full w-full drop-shadow-[0_36px_60px_rgba(46,27,18,0.20)]"
      >
        <defs>
          <mask id={id}>
            <rect width="420" height="420" fill="#fff" />
            <circle cx="406" cy="22" r="84" fill="#000" />
          </mask>
        </defs>
        <g mask={`url(#${id})`}>
          <circle cx="210" cy="210" r="192" fill="#7A4A2A" />
          <circle cx="210" cy="210" r="152" fill="#8A5636" opacity="0.5" />
          <path
            d="M 96 150 A 130 130 0 0 1 180 88"
            fill="none"
            stroke="#F6EEE3"
            strokeOpacity="0.22"
            strokeWidth="26"
            strokeLinecap="round"
          />
          <ellipse cx="150" cy="150" rx="17" ry="22" fill="#4A2A16" transform="rotate(-18 150 150)" />
          <ellipse cx="262" cy="122" rx="15" ry="20" fill="#F6EEE3" transform="rotate(14 262 122)" />
          <ellipse cx="312" cy="212" rx="16" ry="21" fill="#C08552" transform="rotate(-30 312 212)" />
          <ellipse cx="252" cy="292" rx="17" ry="22" fill="#4A2A16" transform="rotate(22 252 292)" />
          <ellipse cx="152" cy="278" rx="15" ry="20" fill="#F6EEE3" transform="rotate(-12 152 278)" />
          <ellipse cx="112" cy="216" rx="14" ry="18" fill="#C08552" transform="rotate(30 112 216)" />
          <ellipse cx="206" cy="204" rx="19" ry="25" fill="#4A2A16" transform="rotate(-8 206 204)" />
          <ellipse cx="200" cy="330" rx="12" ry="16" fill="#C08552" transform="rotate(16 200 330)" />
          <ellipse cx="298" cy="150" rx="10" ry="13" fill="#4A2A16" transform="rotate(-40 298 150)" />
          <circle cx="176" cy="108" r="6" fill="#F6EEE3" opacity="0.8" />
          <circle cx="330" cy="262" r="6" fill="#F6EEE3" opacity="0.8" />
          <circle cx="128" cy="322" r="5" fill="#4A2A16" />
          <circle cx="246" cy="60" r="5" fill="#C08552" />
        </g>
        <circle cx="330" cy="26" r="7" fill="#7A4A2A" opacity="0.7" />
        <circle cx="352" cy="46" r="4.5" fill="#C08552" opacity="0.8" />
        <circle cx="314" cy="52" r="3.5" fill="#4A2A16" opacity="0.8" />
      </svg>
    </div>
  );
}
