import { css } from 'styled-components';

const variables = css`
  :root {
    /* Pure neutral white base — used before language is detected */
    --dark-navy: #eeeeee;
    --navy: #ffffff;
    --light-navy: #f5f5f5;
    --lightest-navy: #e8e8e8;
    --navy-shadow: rgba(0, 0, 0, 0.08);

    /* Warm charcoal text — no blue-slate tint */
    --dark-slate: #333333;
    --slate: #555555;
    --light-slate: #777777;
    --lightest-slate: #222222;
    --white: #111111;

    --nav-bg: rgba(255, 255, 255, 0.92);

    /* Default accent — English */
    --green: #00d084;
    --green-tint: rgba(0, 208, 132, 0.1);
    --pink: #f78da7;
    --blue: #8ed1fc;

    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }

  /* ─── Per-language: accent + background tint ─────────────────────────── */

  /* English — clean mint */
  [data-lang='en'] {
    --navy: #f8fffe;
    --light-navy: #edfaf6;
    --lightest-navy: #d0f5e8;
    --nav-bg: rgba(248, 255, 254, 0.92);
    --green: #00d084;
    --green-tint: rgba(0, 208, 132, 0.1);
  }

  /* Japanese — Mercari red + soft rose */
  [data-lang='ja'] {
    --navy: #fff5f5;
    --light-navy: #ffebeb;
    --lightest-navy: #ffd0d0;
    --nav-bg: rgba(255, 245, 245, 0.92);
    --green: #ff0211;
    --green-tint: rgba(255, 2, 17, 0.1);
  }

  /* Chinese — deep red + light rose */
  [data-lang='zh'] {
    --navy: #fff5f5;
    --light-navy: #ffebeb;
    --lightest-navy: #ffd0d0;
    --nav-bg: rgba(255, 245, 245, 0.92);
    --green: #cf2e2e;
    --green-tint: rgba(207, 46, 46, 0.1);
  }

  /* Arabic — amber + warm golden */
  [data-lang='ar'] {
    --navy: #fffdf0;
    --light-navy: #fef8da;
    --lightest-navy: #fceea0;
    --nav-bg: rgba(255, 253, 240, 0.92);
    --green: #fcb900;
    --green-tint: rgba(252, 185, 0, 0.1);
  }

  /* French — cyan-blue + light sky */
  [data-lang='fr'] {
    --navy: #f0f7ff;
    --light-navy: #e0eefc;
    --lightest-navy: #c0d8f8;
    --nav-bg: rgba(240, 247, 255, 0.92);
    --green: #0693e3;
    --green-tint: rgba(6, 147, 227, 0.1);
  }

  /* Spanish — vivid orange + warm peach */
  [data-lang='es'] {
    --navy: #fff8f3;
    --light-navy: #feead8;
    --lightest-navy: #fdd0a8;
    --nav-bg: rgba(255, 248, 243, 0.92);
    --green: #ff6900;
    --green-tint: rgba(255, 105, 0, 0.1);
  }

  /* German — flag red + very light rose */
  [data-lang='de'] {
    --navy: #fff5f5;
    --light-navy: #ffebeb;
    --lightest-navy: #ffd0d0;
    --nav-bg: rgba(255, 245, 245, 0.92);
    --green: #cf2e2e;
    --green-tint: rgba(207, 46, 46, 0.1);
  }

  /* Portuguese — green + light mint */
  [data-lang='pt'] {
    --navy: #f0fdf9;
    --light-navy: #ddf9ee;
    --lightest-navy: #b8f0d8;
    --nav-bg: rgba(240, 253, 249, 0.92);
    --green: #00d084;
    --green-tint: rgba(0, 208, 132, 0.1);
  }

  /* Dutch — Dutch orange + soft peach */
  [data-lang='nl'] {
    --navy: #fff8f3;
    --light-navy: #feead8;
    --lightest-navy: #fdd0a8;
    --nav-bg: rgba(255, 248, 243, 0.92);
    --green: #ff6900;
    --green-tint: rgba(255, 105, 0, 0.1);
  }
`;

export default variables;
