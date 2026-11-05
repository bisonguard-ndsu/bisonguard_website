/**
 * Kit UI fragments (public/assets/ui/<name>/fragment.html), pasted and rewritten to
 * InfiniCity's own subjects. Kept as HTML strings so the kit's scripts find exactly
 * the markup they expect.
 */

const mark = `<svg class="ui-brand" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="11.2" width="5.6" height="10.8" rx="1.2"/><rect x="9.2" y="7.4" width="5.6" height="14.6" rx="1.2"/><rect x="16.4" y="2" width="5.6" height="20" rx="1.2"/></svg>`;

const rows: [string, number, string, string, string, string][] = [
  // code, tone, asset, where, status (Detected = still to grade), age
  ["R1", 2, "Stop sign R1-1", "Main Ave · track 23", "Detected", "now"],
  ["R7", 4, "No parking R7-1", "13th Ave S · track 23", "Detected", "1m"],
  ["W3", 1, "Signal ahead W3-3", "University Dr · track 21", "Detected", "3m"],
  ["R5", 3, "Do not enter R5-1", "Broadway N · track 19", "Mapped", "6m"],
  ["PV", 5, "Pothole, 0.6 m", "25th St S · segment 412", "Mapped", "8m"],
  ["R3", 2, "No U-turn R3-4", "45th St S · track 18", "Mapped", "11m"],
  ["MK", 4, "Faded stop bar", "32nd Ave S · track 18", "Mapped", "14m"],
  ["LT", 1, "Street light, out", "Sheyenne St · track 16", "Mapped", "17m"],
  ["GR", 3, "Guardrail, damaged", "I-94 ramp · track 15", "Mapped", "21m"],
  ["R2", 5, "Speed limit R2-1", "19th Ave N · track 14", "Mapped", "24m"],
];

export const assetWindow = `<div class="ui ui-panel ui-win" data-ui="window" data-open="Detected" data-work="Grading" data-done="Mapped">
  <div class="ui-win__bar">
    <span class="ui-dots" aria-hidden="true"><i></i><i></i><i></i></span>
    <span class="ui-win__crumb">${mark}AdAMS <i>/</i> <b>Signs</b></span>
    <span class="ui-spacer"></span>
    <span class="ui-win__search" aria-hidden="true"><svg class="ui-icon" viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="m10.5 10.5 3 3"/></svg><span class="ui-win__ph">Search</span><span class="ui-kbd">/</span></span>
  </div>
  <div class="ui-win__body">
    <nav class="ui-win__side" aria-hidden="true">
      <span class="ui-win__nav is-on"><svg class="ui-icon" viewBox="0 0 16 16"><path d="M8 2.5 13.5 8 8 13.5 2.5 8z"/></svg>Signs<em>118</em></span>
      <span class="ui-win__nav"><svg class="ui-icon" viewBox="0 0 16 16"><path d="M3 13.5 6 2.5M13 13.5 10 2.5M8 3.5v2M8 7.5v2M8 11.5v2"/></svg>Markings<em>64</em></span>
      <span class="ui-win__nav"><svg class="ui-icon" viewBox="0 0 16 16"><path d="M8 13.5V5M5.5 5h5M8 2.5v2.5"/></svg>Lights<em>41</em></span>
      <span class="ui-win__nav"><svg class="ui-icon" viewBox="0 0 16 16"><path d="M2.5 6.5h11M2.5 9.5h11M4 6.5v5M12 6.5v5"/></svg>Guardrails</span>
      <span class="ui-win__label">Recordings</span>
      <span class="ui-win__nav"><span class="ui-win__hash">#</span>Fargo</span>
      <span class="ui-win__nav"><span class="ui-win__hash">#</span>West Fargo</span>
    </nav>
    <div class="ui-win__main">
      <div class="ui-win__cols" aria-hidden="true"><span>Asset</span><span>Location</span><span>Status</span><span>Age</span></div>
      <ul class="ui-win__rows">
${rows
  .map(
    ([code, tone, who, sub, st, age]) =>
      `        <li class="ui-win__row" data-row><span class="ui-avatar" data-tone="${tone}">${code}</span><span class="ui-win__who">${who}</span><span class="ui-win__sub">${sub}</span><span class="ui-win__st${st === "Mapped" ? " is-done" : ""}" data-st>${st}</span><span class="ui-win__age">${age}</span></li>`,
  )
  .join("\n")}
      </ul>
    </div>
  </div>
</div>`;

export const adamsNotify = `<div class="ui ui-notify" data-ui="notify">
  <ul class="ui-notify__list" data-notify-list>
    <li class="ui-note"><span class="ui-agent ui-note__av" aria-hidden="true"></span><span class="ui-note__text"><span class="ui-note__title">Stop sign R1-1 mapped<time>now</time></span><span class="ui-note__body">Main Ave, track 23, condition good</span></span><span class="ui-btn ui-btn--sm ui-note__btn">Open</span></li>
    <li class="ui-note"><span class="ui-avatar ui-note__av" data-tone="5">PV</span><span class="ui-note__text"><span class="ui-note__title">Pothole graded severe<time>2m</time></span><span class="ui-note__body">25th St S, segment 412</span></span></li>
    <li class="ui-note"><span class="ui-note__ico"><svg class="ui-icon" viewBox="0 0 16 16"><path d="m3.5 8.4 2.8 2.8 6.2-6.4"/></svg></span><span class="ui-note__text"><span class="ui-note__title">Recording 74 processed<time>6m</time></span><span class="ui-note__body">3,085 frames, 14 signs found</span></span></li>
    <li class="ui-note"><span class="ui-avatar ui-note__av" data-tone="2">MK</span><span class="ui-note__text"><span class="ui-note__title">Stop bar marked faded<time>9m</time></span><span class="ui-note__body">32nd Ave S, track 18</span></span></li>
    <li class="ui-note"><span class="ui-avatar ui-note__av" data-tone="1">LT</span><span class="ui-note__text"><span class="ui-note__title">Street light reported out<time>12m</time></span><span class="ui-note__body">Sheyenne St, track 16</span></span></li>
  </ul>
</div>`;

export const turnflowStat = `<div class="ui ui-panel ui-stat" data-ui="stat" data-ui-opts='{"fill":true}' data-from="1906" data-to="2184" data-suffix="">
  <div class="ui-stat__head">
    <div class="ui-stat__top">
      <span class="ui-stat__label">Vehicles, Main St and 13th Ave</span>
      <span class="ui-stat__range">7:00 to 9:00<svg class="ui-icon" viewBox="0 0 16 16" aria-hidden="true"><path d="m4.5 6.5 3.5 3.5 3.5-3.5"/></svg></span>
    </div>
    <div class="ui-stat__line">
      <span class="ui-stat__num" data-stat-num>2,184</span>
      <span class="ui-chip ui-chip--plain ui-stat__delta"><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M6 9.5v-7M3 5.5l3-3 3 3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>12 movements</span>
      <span class="ui-stat__sub">in 15-minute bins</span>
    </div>
  </div>
  <div class="ui-stat__chart">
    <svg class="ui-stat__svg" viewBox="0 0 400 120" preserveAspectRatio="none" aria-hidden="true">
      <path class="ui-stat__grid" d="M0 30.5H400M0 60.5H400M0 90.5H400"/>
      <path class="ui-stat__cover" fill-rule="evenodd" d=""/>
      <g class="ui-stat__bars"><rect rx="3" x="0" y="62" width="44" height="58"/><rect rx="3" x="51" y="44" width="44" height="76"/><rect rx="3" x="102" y="26" width="44" height="94"/><rect rx="3" x="153" y="14" width="44" height="106"/><rect rx="3" x="204" y="22" width="44" height="98"/><rect rx="3" x="255" y="38" width="44" height="82"/><rect rx="3" x="306" y="50" width="44" height="70"/><rect rx="3" x="357" y="58" width="43" height="62"/></g>
    </svg>
    <div class="ui-stat__axis" aria-hidden="true"><span>7:00</span><span>8:00</span><span>9:00</span></div>
  </div>
</div>`;

const tick = `<span class="ui-check__box"><svg viewBox="0 0 16 16"><path d="m4.5 8.2 2.3 2.3 4.7-5"/></svg></span>`;
export const roadloggerChecks = `<div class="ui ui-panel ui-checks" data-ui="checklist">
  <div class="ui-checks__head">
    <div class="ui-title">Case 2318, pothole</div>
    <span class="ui-spacer"></span>
    <div class="ui-meta" data-checks-count>4 of 7</div>
  </div>
  <div class="ui-checks__bar"><i data-checks-bar style="--k:0.57"></i></div>
  <ul class="ui-checks__list">
    <li class="ui-check is-done">${tick}<span class="ui-check__label">Reported from the field</span></li>
    <li class="ui-check is-done">${tick}<span class="ui-check__label">Photo and location attached</span></li>
    <li class="ui-check is-done">${tick}<span class="ui-check__label">Triaged by the district</span></li>
    <li class="ui-check is-done">${tick}<span class="ui-check__label">Crew assigned</span></li>
    <li class="ui-check">${tick}<span class="ui-check__label">Repaired on site</span></li>
    <li class="ui-check">${tick}<span class="ui-check__label">Verified with a photo</span></li>
    <li class="ui-check">${tick}<span class="ui-check__label">Case closed</span></li>
  </ul>
</div>`;
