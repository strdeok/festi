import { IoCheckmark } from "react-icons/io5";

export function HomeIcon({ state }) {
  return (
    <svg
      width="21"
      height="18"
      viewBox="0 0 21 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.125 17V11H12.125V17H17.125V9H20.125L10.125 0L0.125 9H3.125V17H8.125Z"
        fill={state ? "#FCAF16" : "#C6C6C6"}
      />
    </svg>
  );
}

export function Polaroid({ state, size }) {
  return (
    <svg
      width={size ? size : "17"}
      height={size ? size : "18"}
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.375 0H14.375C14.9054 0 15.4141 0.210714 15.7892 0.585786C16.1643 0.960859 16.375 1.46957 16.375 2V16C16.375 16.5304 16.1643 17.0391 15.7892 17.4142C15.4141 17.7893 14.9054 18 14.375 18H2.375C1.84457 18 1.33586 17.7893 0.960786 17.4142C0.585714 17.0391 0.375 16.5304 0.375 16V2C0.375 1.46957 0.585714 0.960859 0.960786 0.585786C1.33586 0.210714 1.84457 0 2.375 0ZM2.375 2V14H14.375V2H2.375Z"
        fill={state ? "#FCAF16" : "#C6C6C6"}
      />
    </svg>
  );
}

export function Glass({ state, size }) {
  return (
    <svg
      width={size ? size : "17"}
      height={size ? size : "18"}
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.163 1.639C16.557 1.094 16.625 0 16.625 0H0.625C0.625 0 0.693 1.094 1.087 1.639L7.625 10V16H5.625C3.625 16 3.625 18 3.625 18H13.625C13.625 18 13.625 16 11.625 16H9.625V10L16.163 1.639ZM8.025 5C8.025 4.57565 8.19357 4.16869 8.49363 3.86863C8.79369 3.56857 9.20065 3.4 9.625 3.4C10.0493 3.4 10.4563 3.56857 10.7564 3.86863C11.0564 4.16869 11.225 4.57565 11.225 5C11.225 5.42435 11.0564 5.83131 10.7564 6.13137C10.4563 6.43143 10.0493 6.6 9.625 6.6C9.20065 6.6 8.79369 6.43143 8.49363 6.13137C8.19357 5.83131 8.025 5.42435 8.025 5Z"
        fill={state ? "#FCAF16" : "#C6C6C6"}
      />
    </svg>
  );
}

export function Human({ state }) {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.875 4C5.875 2.93913 6.29643 1.92172 7.04657 1.17157C7.79672 0.421427 8.81413 0 9.875 0C10.9359 0 11.9533 0.421427 12.7034 1.17157C13.4536 1.92172 13.875 2.93913 13.875 4C13.875 5.06087 13.4536 6.07828 12.7034 6.82843C11.9533 7.57857 10.9359 8 9.875 8C8.81413 8 7.79672 7.57857 7.04657 6.82843C6.29643 6.07828 5.875 5.06087 5.875 4ZM5.875 10C4.54892 10 3.27715 10.5268 2.33947 11.4645C1.40178 12.4021 0.875 13.6739 0.875 15C0.875 15.7956 1.19107 16.5587 1.75368 17.1213C2.31629 17.6839 3.07935 18 3.875 18H15.875C16.6706 18 17.4337 17.6839 17.9963 17.1213C18.5589 16.5587 18.875 15.7956 18.875 15C18.875 13.6739 18.3482 12.4021 17.4105 11.4645C16.4729 10.5268 15.2011 10 13.875 10H5.875Z"
        fill={state ? "#FCAF16" : "#C6C6C6"}
      />
    </svg>
  );
}

export function StarSm() {
  return (
    <svg
      width="36"
      height="40"
      viewBox="0 0 36 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_271_1736)">
        <path
          d="M18 4L21.7813 15.6785L32 20L21.7813 24.3215L18 36L14.2187 24.3215L4 20L14.2187 15.6785L18 4Z"
          fill="url(#paint0_diamond_271_1736)"
          fill-opacity="0.8"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_271_1736"
          x="0"
          y="0"
          width="36"
          height="40"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="2"
            result="effect1_foregroundBlur_271_1736"
          />
        </filter>
        <radialGradient
          id="paint0_diamond_271_1736"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(18 20) rotate(90) scale(16 14)"
        >
          <stop stop-color="#FCAF16" />
          <stop offset="1" stop-color="#FDFDFD" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export function StarMedium() {
  return (
    <svg
      width="83"
      height="104"
      viewBox="0 0 83 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.15" filter="url(#filter0_f_490_10286)">
        <path
          d="M47 12L56.4532 41.1964L82 52L56.4532 62.8036L47 92L37.5468 62.8036L12 52L37.5468 41.1964L47 12Z"
          fill="#FCAF16"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_490_10286"
          x="0"
          y="0"
          width="94"
          height="104"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="6"
            result="effect1_foregroundBlur_490_10286"
          />
        </filter>
      </defs>
    </svg>
  );
}

export function Starlg() {
  return (
    <svg
      width="123"
      height="150"
      viewBox="0 0 123 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_240_838)">
        <path
          d="M64 4L80.2054 55.8236L124 75L80.2054 94.1764L64 146L47.7946 94.1764L4 75L47.7946 55.8236L64 4Z"
          fill="url(#paint0_diamond_240_838)"
          fill-opacity="0.3"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_240_838"
          x="0"
          y="0"
          width="128"
          height="150"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="2"
            result="effect1_foregroundBlur_240_838"
          />
        </filter>
        <radialGradient
          id="paint0_diamond_240_838"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(64 75) rotate(90) scale(71 60)"
        >
          <stop stop-color="#FCAF16" />
          <stop offset="1" stop-color="#FDFDFD" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export function StarXl() {
  return (
    <svg
      width="164"
      height="186"
      viewBox="0 0 164 186"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.15" filter="url(#filter0_f_461_6456)">
        <path
          d="M82 12L100.906 71.1227L152 93L100.906 114.877L82 174L63.0936 114.877L12 93L63.0936 71.1227L82 12Z"
          fill="#FCAF16"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_461_6456"
          x="0"
          y="0"
          width="164"
          height="186"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="6"
            result="effect1_foregroundBlur_461_6456"
          />
        </filter>
      </defs>
    </svg>
  );
}

export function AddPolaroid() {
  return (
    <svg
      width="23"
      height="26"
      viewBox="0 0 23 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="relative left-[2px] bottom-[2px]"
    >
      <path
        d="M2.25 6H15.75C16.3467 6 16.919 6.23413 17.341 6.65087C17.7629 7.06762 18 7.63285 18 8.22222V23.7778C18 24.3671 17.7629 24.9324 17.341 25.3491C16.919 25.7659 16.3467 26 15.75 26H2.25C1.65326 26 1.08097 25.7659 0.65901 25.3491C0.237053 24.9324 0 24.3671 0 23.7778V8.22222C0 7.63285 0.237053 7.06762 0.65901 6.65087C1.08097 6.23413 1.65326 6 2.25 6ZM2.25 8.22222V21.5556H15.75V8.22222H2.25Z"
        fill="#474747"
      />
      <rect x="11" width="12" height="12" rx="6" fill="white" />
      <path
        d="M21 6.57143H17.5714V10H16.4286V6.57143H13V5.42857H16.4286V2H17.5714V5.42857H21V6.57143Z"
        fill="#474747"
      />
    </svg>
  );
}

export function AddDrinkParty() {
  return (
    <svg
      width="23"
      height="26"
      viewBox="0 0 23 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="relative left-[2px] bottom-[2px]"
    >
      <path
        d="M17.4802 7.82111C17.9235 7.21556 18 6 18 6H0C0 6 0.0764999 7.21556 0.51975 7.82111L7.875 17.1111V23.7778H5.625C3.375 23.7778 3.375 26 3.375 26H14.625C14.625 26 14.625 23.7778 12.375 23.7778H10.125V17.1111L17.4802 7.82111ZM8.325 11.5556C8.325 11.0841 8.51464 10.6319 8.85221 10.2985C9.18977 9.96508 9.64761 9.77778 10.125 9.77778C10.6024 9.77778 11.0602 9.96508 11.3978 10.2985C11.7354 10.6319 11.925 11.0841 11.925 11.5556C11.925 12.0271 11.7354 12.4792 11.3978 12.8126C11.0602 13.146 10.6024 13.3333 10.125 13.3333C9.64761 13.3333 9.18977 13.146 8.85221 12.8126C8.51464 12.4792 8.325 12.0271 8.325 11.5556Z"
        fill="#474747"
      />
      <rect x="11" width="12" height="12" rx="6" fill="white" />
      <path
        d="M21 6.57143H17.5714V10H16.4286V6.57143H13V5.42857H16.4286V2H17.5714V5.42857H21V6.57143Z"
        fill="#474747"
      />
    </svg>
  );
}

export function BackArrow() {
  return (
    <svg
      width="12"
      height="24"
      viewBox="0 0 12 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.343 12.0001L10.414 19.0711L9 20.4851L1.222 12.7071C1.03453 12.5196 0.929214 12.2653 0.929214 12.0001C0.929214 11.735 1.03453 11.4807 1.222 11.2931L9 3.51514L10.414 4.92914L3.343 12.0001Z"
        fill="black"
      />
    </svg>
  );
}

export function FilledCheckBox({ state }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="24"
        height="24"
        rx="4"
        fill={state ? "#FCAF16" : "#C9C9C9"}
      />
      <path
        d="M8.99999 16.1698L5.52999 12.6998C5.34302 12.5129 5.08942 12.4078 4.82499 12.4078C4.56057 12.4078 4.30697 12.5129 4.11999 12.6998C3.93302 12.8868 3.82797 13.1404 3.82797 13.4048C3.82797 13.5358 3.85376 13.6654 3.90387 13.7864C3.95397 13.9073 4.02741 14.0173 4.11999 14.1098L8.29999 18.2898C8.68999 18.6798 9.31999 18.6798 9.70999 18.2898L20.29 7.70983C20.477 7.52286 20.582 7.26926 20.582 7.00483C20.582 6.74041 20.477 6.48681 20.29 6.29983C20.103 6.11286 19.8494 6.00781 19.585 6.00781C19.3206 6.00781 19.067 6.11286 18.88 6.29983L8.99999 16.1698Z"
        fill="white"
      />
    </svg>
  );
}

export function Bell({ state }) {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.625 17V18H0.625V17L2.625 15V9C2.625 5.9 4.655 3.17 7.625 2.29V2C7.625 1.46957 7.83571 0.960859 8.21079 0.585786C8.58586 0.210714 9.09457 0 9.625 0C10.1554 0 10.6641 0.210714 11.0392 0.585786C11.4143 0.960859 11.625 1.46957 11.625 2V2.29C14.595 3.17 16.625 5.9 16.625 9V15L18.625 17ZM11.625 19C11.625 19.5304 11.4143 20.0391 11.0392 20.4142C10.6641 20.7893 10.1554 21 9.625 21C9.09457 21 8.58586 20.7893 8.21079 20.4142C7.83571 20.0391 7.625 19.5304 7.625 19"
        fill={state ? "#FCAF16" : "#C6C6C6"}
      />
    </svg>
  );
}

export function SnowFlake({ size, color }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 16H12.25"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M19.75 16H31"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16 1L16 12.25"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16 19.75L16 31"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M23.9688 8.03125L18.6953 13.3047"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M13.3047 18.8125L8.03126 24.0859"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M23.9688 23.9688L18.6953 18.6953"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M13.3047 13.1875L8.03126 7.91407"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function UpIcon({width, height}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_472_9428)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.0002 5.57156L8.21518 17.3566L5.85851 14.9999L18.8218 2.03656C19.1344 1.72411 19.5582 1.54858 20.0002 1.54858C20.4421 1.54858 20.866 1.72411 21.1785 2.03656L34.1418 14.9999L31.7852 17.3566L20.0002 5.57156Z"
          fill="#858585"
        />
      </g>
      <defs>
        <clipPath id="clip0_472_9428">
          <rect
            width="20"
            height="40"
            fill="white"
            transform="translate(40) rotate(90)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export function DownIcon({width, height}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_472_9431)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.9998 14.4284L31.7848 2.64344L34.1415 5.00011L21.1782 17.9634C20.8656 18.2759 20.4418 18.4514 19.9998 18.4514C19.5579 18.4514 19.134 18.2759 18.8215 17.9634L5.85815 5.00011L8.21482 2.64344L19.9998 14.4284Z"
          fill="#858585"
        />
      </g>
      <defs>
        <clipPath id="clip0_472_9431">
          <rect
            width="20"
            height="40"
            fill="white"
            transform="translate(0 20) rotate(-90)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default function PlusIcon() {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.2553 12.7813L14.0697 14.2128L15.5012 24.3984L12.106 24.8756L10.6745 14.69L0.48886 16.1215L0.011695 12.7263L10.1973 11.2948L8.76581 1.10915L12.161 0.63199L13.5925 10.8176L23.7781 9.38611L24.2553 12.7813Z"
        fill="#858585"
      />
    </svg>
  );
}

export function CameraIcon() {
  return (
    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2.5 px-10 pt-8 pb-10 rounded-2xl border border-[#f3f3f3]">
      <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-14 relative gap-2">
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 px-2.5 py-3">
          <svg
            width={36}
            height={32}
            viewBox="0 0 36 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0"
            preserveAspectRatio="none"
          >
            <path
              d="M3.6 3.55556H9L12.6 0H23.4L27 3.55556H32.4C33.3548 3.55556 34.2705 3.93016 34.9456 4.59695C35.6207 5.26375 36 6.16812 36 7.11111V28.4444C36 29.3874 35.6207 30.2918 34.9456 30.9586C34.2705 31.6254 33.3548 32 32.4 32H3.6C2.64522 32 1.72955 31.6254 1.05442 30.9586C0.379284 30.2918 0 29.3874 0 28.4444V7.11111C0 6.16812 0.379284 5.26375 1.05442 4.59695C1.72955 3.93016 2.64522 3.55556 3.6 3.55556ZM18 8.88889C15.6131 8.88889 13.3239 9.82539 11.636 11.4924C9.94821 13.1594 9 15.4203 9 17.7778C9 20.1353 9.94821 22.3962 11.636 24.0632C13.3239 25.7302 15.6131 26.6667 18 26.6667C20.3869 26.6667 22.6761 25.7302 24.364 24.0632C26.0518 22.3962 27 20.1353 27 17.7778C27 15.4203 26.0518 13.1594 24.364 11.4924C22.6761 9.82539 20.3869 8.88889 18 8.88889ZM18 12.4444C19.4322 12.4444 20.8057 13.0063 21.8184 14.0065C22.8311 15.0067 23.4 16.3633 23.4 17.7778C23.4 19.1923 22.8311 20.5488 21.8184 21.549C20.8057 22.5492 19.4322 23.1111 18 23.1111C16.5678 23.1111 15.1943 22.5492 14.1816 21.549C13.1689 20.5488 12.6 19.1923 12.6 17.7778C12.6 16.3633 13.1689 15.0067 14.1816 14.0065C15.1943 13.0063 16.5678 12.4444 18 12.4444Z"
              fill="#C6C6C6"
            />
          </svg>
        </div>
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-14 text-sm font-medium text-center text-[#969696]">
          카메라
        </p>
      </div>
    </div>
  );
}

export function ImageIcon() {
  return (
    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2 px-10 pt-8 pb-10 rounded-2xl border border-[#f3f3f3]">
      <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 px-3 py-2.5">
        <svg
          width={32}
          height={36}
          viewBox="0 0 32 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0"
          preserveAspectRatio="none"
        >
          <path
            d="M4 0H28C29.0609 0 30.0783 0.421427 30.8284 1.17157C31.5786 1.92172 32 2.93913 32 4V32C32 33.0609 31.5786 34.0783 30.8284 34.8284C30.0783 35.5786 29.0609 36 28 36H4C2.93913 36 1.92172 35.5786 1.17157 34.8284C0.421427 34.0783 0 33.0609 0 32V4C0 2.93913 0.421427 1.92172 1.17157 1.17157C1.92172 0.421427 2.93913 0 4 0ZM4 4V28H28V4H4Z"
            fill="#C6C6C6"
          />
        </svg>
      </div>
      <p className="self-stretch flex-grow-0 flex-shrink-0 w-14 text-sm font-medium text-center text-[#969696]">
        이미지
      </p>
    </div>
  );
}

export function SelectedCameraIcon() {
  return (
    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2.5 px-10 pt-8 pb-10 rounded-2xl bg-[#fff7e8] border-2 border-[#fcaf16]/30">
      <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-14 relative gap-2">
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 px-2.5 py-3">
          <svg
            width={36}
            height={32}
            viewBox="0 0 36 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0"
            preserveAspectRatio="none"
          >
            <path
              d="M3.6 3.55556H9L12.6 0H23.4L27 3.55556H32.4C33.3548 3.55556 34.2705 3.93016 34.9456 4.59695C35.6207 5.26375 36 6.16812 36 7.11111V28.4444C36 29.3874 35.6207 30.2918 34.9456 30.9586C34.2705 31.6254 33.3548 32 32.4 32H3.6C2.64522 32 1.72955 31.6254 1.05442 30.9586C0.379284 30.2918 0 29.3874 0 28.4444V7.11111C0 6.16812 0.379284 5.26375 1.05442 4.59695C1.72955 3.93016 2.64522 3.55556 3.6 3.55556ZM18 8.88889C15.6131 8.88889 13.3239 9.82539 11.636 11.4924C9.94821 13.1594 9 15.4203 9 17.7778C9 20.1353 9.94821 22.3962 11.636 24.0632C13.3239 25.7302 15.6131 26.6667 18 26.6667C20.3869 26.6667 22.6761 25.7302 24.364 24.0632C26.0518 22.3962 27 20.1353 27 17.7778C27 15.4203 26.0518 13.1594 24.364 11.4924C22.6761 9.82539 20.3869 8.88889 18 8.88889ZM18 12.4444C19.4322 12.4444 20.8057 13.0063 21.8184 14.0065C22.8311 15.0067 23.4 16.3633 23.4 17.7778C23.4 19.1923 22.8311 20.5488 21.8184 21.549C20.8057 22.5492 19.4322 23.1111 18 23.1111C16.5678 23.1111 15.1943 22.5492 14.1816 21.549C13.1689 20.5488 12.6 19.1923 12.6 17.7778C12.6 16.3633 13.1689 15.0067 14.1816 14.0065C15.1943 13.0063 16.5678 12.4444 18 12.4444Z"
              fill="#FCAF16"
            />
          </svg>
        </div>
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-14 text-sm font-medium text-center text-[#fcaf16]">
          카메라
        </p>
      </div>
    </div>
  );
}

export function SelectedImageIcon() {
  return (
    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2 px-10 pt-8 pb-10 rounded-2xl bg-[#fff7e8] border-[3px] border-[#fcaf16]/25">
      <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 px-3 py-2.5">
        <svg
          width={32}
          height={36}
          viewBox="0 0 32 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0"
          preserveAspectRatio="none"
        >
          <path
            d="M4 0H28C29.0609 0 30.0783 0.421427 30.8284 1.17157C31.5786 1.92172 32 2.93913 32 4V32C32 33.0609 31.5786 34.0783 30.8284 34.8284C30.0783 35.5786 29.0609 36 28 36H4C2.93913 36 1.92172 35.5786 1.17157 34.8284C0.421427 34.0783 0 33.0609 0 32V4C0 2.93913 0.421427 1.92172 1.17157 1.17157C1.92172 0.421427 2.93913 0 4 0ZM4 4V28H28V4H4Z"
            fill="#FCAF16"
          />
        </svg>
      </div>
      <p className="self-stretch flex-grow-0 flex-shrink-0 w-14 text-sm font-medium text-center text-[#fcaf16]">
        이미지
      </p>
    </div>
  );
}

export function CompleteIcon() {
  return (
    <>
      <div className="flex justify-center items-center rounded-full w-16 h-16 bg-[#FFF7E8]">
        <IoCheckmark fontWeight={900} size="45" color="#FCAF16" />
      </div>
    </>
  );
}

export function StartIcon() {
  return (
    <svg
      width={120}
      height={150}
      viewBox="0 0 120 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <g filter="url(#filter0_f_524_3861)">
        <path
          d="M64 4L80.2054 55.8236L124 75L80.2054 94.1764L64 146L47.7946 94.1764L4 75L47.7946 55.8236L64 4Z"
          fill="url(#paint0_diamond_524_3861)"
          fill-opacity="0.3"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_524_3861"
          x={0}
          y={0}
          width={128}
          height={150}
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feflood flood-opacity={0} result="BackgroundImageFix" />
          <feblend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <fegaussianblur
            stdDeviation={2}
            result="effect1_foregroundBlur_524_3861"
          />
        </filter>
        <radialgradient
          id="paint0_diamond_524_3861"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(64 75) rotate(90) scale(71 60)"
        >
          <stop stop-color="#FCAF16" />
          <stop offset={1} stop-color="#FDFDFD" />
        </radialgradient>
      </defs>
    </svg>
  );
}

export function RightArrow({ width, height }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.65702 12.0001L1.58602 4.92911L3.00002 3.51511L10.778 11.2931C10.9655 11.4806 11.0708 11.7349 11.0708 12.0001C11.0708 12.2653 10.9655 12.5196 10.778 12.7071L3.00001 20.4851L1.58601 19.0711L8.65702 12.0001Z"
        fill="#969696"
      />
    </svg>
  );
}
export function CloseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.00006 10.8667L2.46673 17.4001C2.22229 17.6445 1.91118 17.7667 1.5334 17.7667C1.15562 17.7667 0.844509 17.6445 0.600065 17.4001C0.35562 17.1556 0.233398 16.8445 0.233398 16.4667C0.233398 16.089 0.35562 15.7778 0.600065 15.5334L7.1334 9.00006L0.600065 2.46673C0.35562 2.22229 0.233398 1.91118 0.233398 1.5334C0.233398 1.15562 0.35562 0.844509 0.600065 0.600065C0.844509 0.35562 1.15562 0.233398 1.5334 0.233398C1.91118 0.233398 2.22229 0.35562 2.46673 0.600065L9.00006 7.1334L15.5334 0.600065C15.7778 0.35562 16.089 0.233398 16.4667 0.233398C16.8445 0.233398 17.1556 0.35562 17.4001 0.600065C17.6445 0.844509 17.7667 1.15562 17.7667 1.5334C17.7667 1.91118 17.6445 2.22229 17.4001 2.46673L10.8667 9.00006L17.4001 15.5334C17.6445 15.7778 17.7667 16.089 17.7667 16.4667C17.7667 16.8445 17.6445 17.1556 17.4001 17.4001C17.1556 17.6445 16.8445 17.7667 16.4667 17.7667C16.089 17.7667 15.7778 17.6445 15.5334 17.4001L9.00006 10.8667Z"
        fill="white"
      />
    </svg>
  );
}

export function RedCloseIcon(){
  return(<svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.00003 5.93288L1.73337 9.19954C1.61114 9.32177 1.45559 9.38288 1.2667 9.38288C1.07781 9.38288 0.922255 9.32177 0.800032 9.19954C0.67781 9.07732 0.616699 8.92177 0.616699 8.73288C0.616699 8.54399 0.67781 8.38843 0.800032 8.26621L4.0667 4.99954L0.800032 1.73288C0.67781 1.61066 0.616699 1.4551 0.616699 1.26621C0.616699 1.07732 0.67781 0.921766 0.800032 0.799544C0.922255 0.677322 1.07781 0.616211 1.2667 0.616211C1.45559 0.616211 1.61114 0.677322 1.73337 0.799544L5.00003 4.06621L8.2667 0.799544C8.38892 0.677322 8.54448 0.616211 8.73337 0.616211C8.92226 0.616211 9.07781 0.677322 9.20003 0.799544C9.32225 0.921766 9.38337 1.07732 9.38337 1.26621C9.38337 1.4551 9.32225 1.61066 9.20003 1.73288L5.93337 4.99954L9.20003 8.26621C9.32225 8.38843 9.38337 8.54399 9.38337 8.73288C9.38337 8.92177 9.32225 9.07732 9.20003 9.19954C9.07781 9.32177 8.92226 9.38288 8.73337 9.38288C8.54448 9.38288 8.38892 9.32177 8.2667 9.19954L5.00003 5.93288Z"
      fill="#FC5852"
    />
  </svg>)
}