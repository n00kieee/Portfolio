<template>
  <svg width="18" height="18" viewBox="0 0 18 18" style="transform: rotate(90deg);">
    <mask id="moon-mask-main-nav">
      <rect x="0" y="0" width="18" height="18" fill="#FFF"></rect>
      <circle cx="25" cy="0" r="8" fill="black"></circle>
    </mask>
    <circle cx="9" cy="9" fill="var(--color-text)" mask="url(#moon-mask-main-nav)" r="5"></circle>
    <g>
      <circle cx="17" cy="9" r="1.5" fill="var(--color-text)"></circle>
      <circle cx="13" cy="15.928203" r="1.5" fill="var(--color-text)"></circle>
      <circle cx="5" cy="15.928203" r="1.5" fill="var(--color-text)"></circle>
      <circle cx="1" cy="9" r="1.5" fill="var(--color-text)"></circle>
      <circle cx="5" cy="2.071797" r="1.5" fill="var(--color-text)"></circle>
      <circle cx="13" cy="2.071797" r="1.5" fill="var(--color-text)"></circle>
    </g>
  </svg>
</template>
