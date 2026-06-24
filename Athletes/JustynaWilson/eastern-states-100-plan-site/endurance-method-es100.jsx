// Endurance Method — Justyna's Eastern States 100 plan as the coaching-platform UI
// IBM Plex Sans + Mono. Graphite / steel / orange. Dashboard, data-forward.
// v0.7 — post-Manitou. Justyna is the favorite; descent skill corrected 0.95 → 1.05.

const emjPalettes = {
  // Original
  O: {
    bg: '#ffffff', paper: '#f4f4f2', ink: '#0e1116', inkSoft: '#3d434b',
    graphite: '#1b1e24', steel: '#3b6791', steelDeep: '#234a72',
    orange: '#d36a3b', green: '#3f7d57', red: '#b1492f', rule: 'rgba(14,17,22,0.10)',
  },
  // Option A — "Amplified": electric blue + hot orange signal
  A: {
    bg: '#ffffff', paper: '#f2f4f7', ink: '#0d1016', inkSoft: '#3a414b',
    graphite: '#16191f', steel: '#2f5fe6', steelDeep: '#1f3fb0',
    orange: '#ff5a1f', green: '#11a06a', red: '#e23a26', rule: 'rgba(13,16,22,0.10)',
  },
  // Option B — "Spectrum": full electric cobalt + blaze
  B: {
    bg: '#ffffff', paper: '#eef1f8', ink: '#0c0e14', inkSoft: '#3b4250',
    graphite: '#11141d', steel: '#1f44ff', steelDeep: '#1233cc',
    orange: '#ff4d12', green: '#0fa46a', red: '#e8351f', rule: 'rgba(12,14,20,0.10)',
  },
};
window.EnduranceMethodES100Palettes = emjPalettes;

function EnduranceMethodES100({ pal }) {
  const sans = { fontFamily: '"IBM Plex Sans", system-ui, sans-serif' };
  const mono = { fontFamily: '"IBM Plex Mono", ui-monospace, monospace', letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: 11 };
  const t = pal || emjPalettes.A;

  const Tag = ({ children, color }) => (
    <div style={{ ...mono, color: color || t.orange, marginBottom: 16 }}>{children}</div>
  );
  const card = { background: t.bg, border: `1px solid ${t.rule}`, padding: 24 };
  const th = { ...mono, color: t.inkSoft, textAlign: 'left', padding: '12px 16px', background: t.paper, borderBottom: `1px solid ${t.rule}`, fontSize: 10 };
  const td = { padding: '13px 16px', fontSize: 13.5, color: t.inkSoft, borderBottom: `1px solid ${t.rule}`, verticalAlign: 'top' };

  // ES100 elevation profile — relentless sawtooth, 20,833 ft
  const prof = [20, 150, 60, 130, 40, 165, 70, 110, 30, 145, 55, 160, 50, 120, 35, 155, 80, 100, 25, 140, 60, 90];
  const PW = 980, PH = 120;
  const profPath = prof.map((v, i) => `${i === 0 ? 'M' : 'L'} ${(i / (prof.length - 1)) * PW} ${PH - (v / 175) * PH}`).join(' ');

  // engine prediction comparison bars (lower = faster); scale 21:00–28:00 → 0..100
  const toPct = (hh, mm) => ((hh + mm / 60) - 21) / (28 - 21) * 100;

  return (
    <div style={{ background: t.paper, color: t.ink, ...sans, fontSize: 14.5, lineHeight: 1.55 }}>
      {/* App top bar */}
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 32px', background: t.bg, borderBottom: `1px solid ${t.rule}`, position: 'sticky', top: 0, zIndex: 5 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 28, height: 28, background: t.ink, color: t.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', ...mono, fontSize: 12, letterSpacing: 0 }}>EM</div>
          <div style={{ fontSize: 15, fontWeight: 500 }}>Endurance Method</div>
          <span style={{ ...mono, color: t.inkSoft, fontSize: 10 }}>/ Platform</span>
        </div>
        <nav style={{ display: 'flex', gap: 26, fontSize: 13.5, color: t.inkSoft }}>
          <span style={{ color: t.ink, borderBottom: `2px solid ${t.orange}`, paddingBottom: 14, marginBottom: -14 }}>Race Plan</span>
          <span>Engine</span><span>Training Log</span><span>Metrics</span><span>Fueling</span>
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ ...mono, color: t.inkSoft, fontSize: 10 }}>J. WILSON</span>
          <div style={{ width: 30, height: 30, borderRadius: 999, background: t.steel }} />
        </div>
      </header>

      {/* Race header / dashboard hero */}
      <section style={{ padding: '32px 32px 24px', background: t.bg, borderBottom: `1px solid ${t.rule}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <Tag>Race Plan · ID ES100-2026 · Engine v0.7 · Status: Recovery wk · Favorite</Tag>
            <h1 style={{ fontSize: 46, fontWeight: 500, letterSpacing: '-0.03em', margin: '0 0 8px' }}>Eastern States 100</h1>
            <div style={{ fontSize: 15, color: t.inkSoft }}>Waterville, Pennsylvania · Sat 8 Aug 2026 · 05:00 start · J. Wilson, age 50 · three-time finisher · 2025 champion (24:49:36, Masters CR)</div>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button style={{ ...sans, fontSize: 13, padding: '10px 16px', background: t.bg, color: t.ink, border: `1px solid ${t.ink}`, cursor: 'pointer' }}>Export PDF</button>
            <button style={{ ...sans, fontSize: 13, padding: '10px 16px', background: t.ink, color: t.bg, border: 'none', cursor: 'pointer', fontWeight: 500 }}>Sync to watch →</button>
          </div>
        </div>
        {/* KPI row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12, marginTop: 28 }}>
          {[
            ['DISTANCE', '103', 'mi', t.ink],
            ['VERT GAIN', '20,833', 'ft', t.ink],
            ['AID STATIONS', '17', 'stops', t.ink],
            ['CUTOFF', '36:00', 'h', t.ink],
            ['REALISTIC LINE', '23:05', 'P50', t.steel],
            ['CARB CEILING', '60', 'g/h', t.orange],
          ].map(([l, v, u, c]) => (
            <div key={l} style={{ ...card, padding: '18px 20px' }}>
              <div style={{ ...mono, color: t.inkSoft, fontSize: 10 }}>{l}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 8 }}>
                <span style={{ fontSize: 30, fontWeight: 500, letterSpacing: '-0.02em', color: c }}>{v}</span>
                <span style={{ ...mono, color: t.inkSoft, fontSize: 10 }}>{u}</span>
              </div>
            </div>
          ))}
        </div>
        {/* Elevation profile */}
        <div style={{ ...card, marginTop: 12, padding: '20px 24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ ...mono, color: t.inkSoft, fontSize: 10 }}>COURSE ELEVATION PROFILE — SCHEMATIC · 20,833 FT GAIN · A CLIMBER&rsquo;S RACE</span>
            <span style={{ ...mono, color: t.orange, fontSize: 10 }}>TECHNICAL ROCK · CEDAR RUN → BLACKWELL · MI 50–75</span>
          </div>
          <svg viewBox={`0 0 ${PW} ${PH}`} style={{ width: '100%', height: 110 }} preserveAspectRatio="none">
            <defs><linearGradient id="emjg" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor={t.steel} stopOpacity="0.2" /><stop offset="100%" stopColor={t.steel} stopOpacity="0" /></linearGradient></defs>
            <rect x={PW * 0.48} y="0" width={PW * 0.24} height={PH} fill={t.orange} opacity="0.06" />
            <path d={`${profPath} L ${PW} ${PH} L 0 ${PH} Z`} fill="url(#emjg)" />
            <path d={profPath} fill="none" stroke={t.steel} strokeWidth="2" />
          </svg>
          <div style={{ display: 'flex', justifyContent: 'space-between', ...mono, color: t.inkSoft, fontSize: 9, marginTop: 4 }}>
            <span>MI 0</span><span>MI 25</span><span>MI 50</span><span>MI 75</span><span>MI 95</span><span>FIN 103</span>
          </div>
        </div>
      </section>

      {/* Engine projection module */}
      <section style={{ padding: '28px 32px' }}>
        <Tag>001 — Engine projection · v0.7 split-skill · descent factor 1.05</Tag>
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 12 }}>
          {/* projection cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
            {[
              { tag: 'CONSERVATIVE', time: '24:23', note: 'A rough day, managed. Still at the women\u2019s CR; Kaylee 27:45.', feature: false },
              { tag: 'REALISTIC · PLAN', time: '23:05', note: 'The line to plan to — 30 min under the CR. Kaylee 25:25.', feature: true },
              { tag: 'OPTIMISTIC', time: '22:14', note: 'A clean day on Justyna\u2019s terms. Only Kaylee\u2019s perfect 22:30 is close.', feature: false },
            ].map(s => (
              <div key={s.tag} style={{ ...card, borderTop: `3px solid ${s.feature ? t.orange : t.rule}` }}>
                <div style={{ ...mono, color: s.feature ? t.orange : t.inkSoft, fontSize: 10 }}>{s.tag}</div>
                <div style={{ fontSize: 40, fontWeight: 500, letterSpacing: '-0.025em', margin: '14px 0 12px', color: s.feature ? t.ink : t.inkSoft }}>{s.time}</div>
                <p style={{ fontSize: 12.5, color: t.inkSoft, margin: 0, lineHeight: 1.5 }}>{s.note}</p>
              </div>
            ))}
          </div>
          {/* comparison bars */}
          <div style={{ ...card }}>
            <div style={{ ...mono, color: t.steel, fontSize: 10, marginBottom: 18 }}>PREDICTED FINISH · LOWER IS FASTER</div>
            {[
              ['Justyna · optimistic', 22, 14, t.green, false],
              ['Justyna · realistic', 23, 5, t.steel, true],
              ['Women\u2019s CR (2021)', 24, 34, t.inkSoft, false],
              ['Kaylee · realistic', 25, 25, t.red, false],
            ].map(([name, hh, mm, c, feat]) => (
              <div key={name} style={{ marginBottom: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                  <span style={{ fontSize: 12.5, fontWeight: feat ? 600 : 400, color: feat ? t.ink : t.inkSoft }}>{name}</span>
                  <span style={{ ...mono, fontSize: 11, color: c }}>{hh}:{String(mm).padStart(2, '0')}</span>
                </div>
                <div style={{ height: 8, background: t.paper, position: 'relative' }}>
                  <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${toPct(hh, mm)}%`, background: c, opacity: feat ? 1 : 0.8 }} />
                </div>
              </div>
            ))}
            <p style={{ fontSize: 11.5, color: t.inkSoft, marginTop: 16, lineHeight: 1.5 }}>
              The head-to-head has <strong style={{ color: t.ink }}>inverted</strong>. Kaylee&rsquo;s old 21:55 was overfit; re-anchored she projects ~25:25. All three of Justyna&rsquo;s lines beat the course record.
            </p>
          </div>
        </div>
        <div style={{ ...card, marginTop: 12, display: 'flex', gap: 16, alignItems: 'center', background: t.graphite, color: t.bg, borderColor: t.graphite }}>
          <div style={{ ...mono, color: t.orange, fontSize: 10, whiteSpace: 'nowrap' }}>DIRECTIVE</div>
          <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.85)' }}>
            Justyna is the <span style={{ color: t.orange }}>favorite, not the chaser</span>. The job for the next six weeks is not to find more fitness — it is banked — but to arrive fresh, heat-ready, and healthy. ES100 is a climber&rsquo;s course, and Justyna is the strongest climber in the field.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 12 }}>
          {[
            ['ENGINE LOGIC', 'v0.7 split-skill retired the single-curve fit. Kaylee\u2019s old 21:55 was extrapolated from one fast, smooth, low-vert result; the new model grades climb / rolling / descent separately and applies ES100\u2019s 20,833 ft + technical rock to each.'],
            ['TERRAIN-MATCHED HISTORY', 'Re-scored against Kaylee\u2019s full race record matched to terrain \u2014 not her single best day \u2014 plus her two most recent ES100-terrain workouts, where smooth-course speed doesn\u2019t carry. Both reads land ~25:25.'],
          ].map(([h, d]) => (
            <div key={h} style={{ ...card, borderTop: `3px solid ${t.steel}` }}>
              <div style={{ ...mono, color: t.steel, fontSize: 10, marginBottom: 8 }}>WHY KAYLEE MOVED · {h}</div>
              <p style={{ fontSize: 12.5, color: t.inkSoft, margin: 0, lineHeight: 1.5 }}>{d}</p>
            </div>
          ))}
        </div>
        <div style={{ ...card, marginTop: 12, borderLeft: `3px solid ${t.orange}` }}>
          <div style={{ ...mono, color: t.orange, fontSize: 10, marginBottom: 8 }}>CONFIDENCE · DATA QUALITY</div>
          <p style={{ margin: 0, fontSize: 13, color: t.inkSoft, lineHeight: 1.55 }}>
            Prediction accuracy scales with the <strong style={{ color: t.ink }}>quantity, recency and accuracy</strong> of the input data.
            These projections include <strong style={{ color: t.ink }}>no physiological data</strong> from either athlete — most importantly none from
            Justyna, the focus here — and the engine holds only <strong style={{ color: t.ink }}>limited detailed workout and race-split data on Justyna</strong>.
            Treat the bands as directional; they tighten as Justyna&rsquo;s physiology, her splits and the Ironstone read are added.
          </p>
          <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap', marginTop: 14 }}>
            <a href="race-history/justyna-wilson.html" style={{ ...mono, fontSize: 10, color: t.steel, textDecoration: 'none', borderBottom: `1px solid ${t.steel}`, paddingBottom: 3 }}>JUSTYNA — RACE HISTORY →</a>
            <a href="race-history/kaylee-frederick.html" style={{ ...mono, fontSize: 10, color: t.inkSoft, textDecoration: 'none', borderBottom: `1px solid ${t.rule}`, paddingBottom: 3 }}>KAYLEE — RACE HISTORY →</a>
          </div>
        </div>
      </section>

      {/* Split-skill gap analysis */}
      <section style={{ padding: '0 32px 28px' }}>
        <Tag>002 — Split-skill analysis · Worlds End splits, settled at Manitou</Tag>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
          {[
            { k: 'CLIMBS', v: '−5', u: 'sec/mi', verdict: 'HER WEAPON', c: t.green, note: 'Faster than Kaylee uphill. ES100 is 20,833 ft — her course pays this in full.' },
            { k: 'ROLLING', v: '+94', u: 'sec/mi', verdict: 'THE REAL GAP', c: t.orange, note: '42 min over 27 rolling miles — the one terrain gap that remains. Sustained-state work + Ironstone.' },
            { k: 'DESCENTS', v: '+183', u: 'sec/mi', verdict: 'DISPROVED', c: t.steel, note: 'The apparent headline. Manitou: course record on Devil\u2019s Path, descending faster than Justyna climbed.' },
          ].map(s => (
            <div key={s.k} style={{ ...card, borderLeft: `3px solid ${s.c}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ ...mono, color: t.inkSoft, fontSize: 11 }}>{s.k}</span>
                <span style={{ ...mono, color: s.c, fontSize: 10 }}>{s.verdict}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, margin: '12px 0' }}>
                <span style={{ fontSize: 42, fontWeight: 500, letterSpacing: '-0.03em', color: s.c }}>{s.v}</span>
                <span style={{ ...mono, color: t.inkSoft, fontSize: 11 }}>{s.u}</span>
              </div>
              <p style={{ fontSize: 12.5, color: t.inkSoft, margin: 0, lineHeight: 1.5 }}>{s.note}</p>
            </div>
          ))}
        </div>
        <div style={{ ...card, marginTop: 12, display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ ...mono, color: t.steel, fontSize: 10, whiteSpace: 'nowrap' }}>FINDING</div>
          <p style={{ margin: 0, fontSize: 14, color: t.inkSoft }}>
            The descent &ldquo;weakness&rdquo; was a <strong style={{ color: t.ink }}>relative</strong> gap to a generational descender, mis-read as a flaw. Manitou settled it. Justyna&rsquo;s real, durable edge: <strong style={{ color: t.ink }}>elite climbing + 100-mile durability + three finishes on this exact course</strong>.
          </p>
        </div>
      </section>

      {/* 9-week architecture */}
      <section style={{ padding: '0 32px 28px' }}>
        <Tag>003 — 9-week architecture · the races ARE the training · now in Wk 3</Tag>
        {/* volume bars */}
        <div style={{ ...card, marginBottom: 12 }}>
          <div style={{ ...mono, color: t.inkSoft, fontSize: 10, marginBottom: 14 }}>WEEKLY VOLUME (HR) · RACE WEEKS HIGHLIGHTED · ✓ = BANKED</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(9, 1fr)', gap: 8 }}>
            {[
              ['W1', 10, 'done'], ['W2', 18, 'done'], ['W3', 6, 'now'], ['W4', 12, false], ['W5', 17, 'race'],
              ['W6', 8, false], ['W7', 10, false], ['W8', 7, false], ['W9', 26, 'race'],
            ].map(([w, v, state]) => {
              const fill = state === 'race' ? t.orange : state === 'now' ? t.green : state === 'done' ? t.inkSoft : t.steel;
              return (
                <div key={w} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: 130, background: t.paper, padding: 8, outline: state === 'now' ? `2px solid ${t.green}` : 'none', outlineOffset: -2 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v}<span style={{ ...mono, fontSize: 8, color: t.inkSoft }}>h</span></div>
                  <div style={{ height: `${(v / 26) * 100}%`, background: fill, opacity: state === 'done' ? 0.5 : 0.85, borderRadius: 2, minHeight: 4 }} />
                  <div style={{ ...mono, color: state === 'now' ? t.green : t.inkSoft, fontSize: 8, marginTop: 6, fontWeight: state === 'now' ? 700 : 400 }}>{state === 'now' ? 'NOW' : state === 'done' ? '\u2713' + w : w}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ ...card, padding: 0, overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead><tr>{['WK', 'DATES', 'PHASE', 'VOL', 'LONG', 'VERT', 'STATUS / FOCUS'].map(h => <th key={h} style={th}>{h}</th>)}</tr></thead>
            <tbody>
              {[
                ['1', 'Jun 8–14', 'Pre-Manitou taper', '10 h', '3 h', '2,500', '\u2713 done — legs tuned', 'done'],
                ['2', 'Jun 15–21', 'MANITOU · Jun 20', '18 h', 'RACE', '15,000', '\u2713 1st F · 12:29:09 · CR · no injury', 'done'],
                ['3', 'Jun 22–28', 'Recovery', '6 h', '2 h', '1,000', 'NOW — protect 7–10 days · legs + CNS', 'now'],
                ['4', 'Jun 29–Jul 5', 'Build-back', '12 h', '4 h', '4,000', 'Rolling tempo + descent maintenance', false],
                ['5', 'Jul 6–12', 'IRONSTONE · Jul 11', '17 h', 'RACE', '10,000', 'Racing it + Kaylee intel', 'race'],
                ['6', 'Jul 13–19', 'Recovery + heat', '8 h', '2.5 h', '1,500', 'Heat block starts · sauna 4–5×/wk', false],
                ['7', 'Jul 20–26', 'Bridge to taper', '10 h', '3.5 h', '3,000', 'Final intensity + heat maintenance', false],
                ['8', 'Jul 27–Aug 2', 'Taper', '7 h', '2 h', '1,000', 'Sleep + carb-load + heat maint', false],
                ['9', 'Aug 3–8', 'Race week', '3 h+', 'RACE', '0', 'EASTERN STATES · Sat 8 Aug', 'race'],
              ].map((r, i) => {
                const isNow = r[7] === 'now', isRace = r[7] === 'race', isDone = r[7] === 'done';
                return (
                  <tr key={i} style={{ background: isNow ? 'rgba(63,125,87,0.10)' : isRace ? 'rgba(211,106,59,0.07)' : (i % 2 ? t.paper : t.bg), opacity: isDone ? 0.62 : 1 }}>
                    <td style={{ ...td, fontWeight: 600, color: t.ink }}>{r[0]}</td>
                    <td style={{ ...td, ...mono, fontSize: 10, whiteSpace: 'nowrap' }}>{r[1]}</td>
                    <td style={{ ...td, color: isRace ? t.orange : t.ink, fontWeight: (isRace || isNow) ? 600 : 400, fontSize: 13 }}>{r[2]}</td>
                    <td style={{ ...td, ...mono, fontSize: 10 }}>{r[3]}</td>
                    <td style={{ ...td, ...mono, fontSize: 10, color: r[4] === 'RACE' ? t.orange : t.inkSoft }}>{r[4]}</td>
                    <td style={{ ...td, ...mono, fontSize: 10, color: t.steel }}>{r[5]}</td>
                    <td style={{ ...td, fontSize: 12.5, color: isNow ? t.green : isDone ? t.inkSoft : t.inkSoft, fontWeight: isNow ? 600 : 400 }}>{r[6]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginTop: 12 }}>
          {[['~50 h', 'racing · 3 events · 7 weeks'], ['~46,000 ft', 'total climbing · 49 days'], ['Wk 3', 'recovery — the limiter, now']].map(([n, l]) => (
            <div key={l} style={{ ...card, background: t.graphite, color: t.bg, borderColor: t.graphite }}>
              <div style={{ fontSize: 28, fontWeight: 500, color: t.orange }}>{n}</div>
              <div style={{ ...mono, color: 'rgba(255,255,255,0.6)', fontSize: 9, marginTop: 6 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Focus areas + race architecture two-up */}
      <section style={{ padding: '0 32px 28px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <div style={{ ...card }}>
          <Tag>004 — Focus areas · re-ranked for v0.7</Tag>
          {[
            ['1', 'Recovery + durability', 'the limiter', t.green],
            ['2', 'Heat acclimation, full', 'WBGT 24–28°', t.steel],
            ['3', 'Rolling-terrain sustained state', 'the real gap', t.orange],
            ['4', 'Metabolic efficiency (fuel)', '60 g/hr lid', t.orange],
            ['5', 'Descent maintenance', 'Manitou-proven', t.inkSoft],
            ['6', 'Aid-station efficiency', '<90 sec', t.inkSoft],
          ].map(([n, label, metric, c]) => (
            <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '13px 0', borderBottom: `1px solid ${t.rule}` }}>
              <div style={{ width: 26, height: 26, flexShrink: 0, background: c, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', ...mono, fontSize: 12, letterSpacing: 0 }}>{n}</div>
              <div style={{ flex: 1, fontSize: 13.5, color: t.ink, fontWeight: 500 }}>{label}</div>
              <div style={{ ...mono, fontSize: 10, color: c }}>{metric}</div>
            </div>
          ))}
          <p style={{ fontSize: 12, color: t.inkSoft, marginTop: 14, lineHeight: 1.55 }}>
            Dropped from the old plan: the heavy descent-technique build (proven at Manitou), the gut-to-85 target (her ceiling is 60), and the whole &ldquo;close the gap to Kaylee&rdquo; framing.
          </p>
        </div>
        <div style={{ ...card }}>
          <Tag>005 — ES100 race architecture · by section</Tag>
          {[
            { mi: 'MI 0–25', name: 'Settle', rule: 'Even effort, not even pace. First 50 by fuel, not legs — low-Z2, conversational.', c: t.steel },
            { mi: 'MI 25–50', name: 'Climb away', rule: 'Power-hike anything steep (>15%) from the gun; press runnable climbs. The race is decided here.', c: t.steelDeep },
            { mi: 'MI 50–75', name: 'Manage the rock', rule: 'Quick feet, short steps, off the brakes — protect the quads. No one gains time on you here.', c: t.orange },
            { mi: 'MI 75–95', name: 'Run the back half', rule: 'Won here, on legs you saved. Sky Top → Barrens. Ice the hat; first caffeine in the low patch.', c: t.steelDeep },
            { mi: 'MI 95–103', name: 'Empty it', rule: 'Spend everything. You\u2019ve finished this trail three times.', c: t.red },
          ].map(b => (
            <div key={b.mi} style={{ display: 'flex', gap: 14, padding: '12px 0', borderBottom: `1px solid ${t.rule}` }}>
              <div style={{ width: 84, flexShrink: 0 }}>
                <div style={{ ...mono, fontSize: 9.5, color: t.inkSoft }}>{b.mi}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: b.c, marginTop: 3 }}>{b.name}</div>
              </div>
              <p style={{ fontSize: 12.5, color: t.inkSoft, margin: 0, lineHeight: 1.5 }}>{b.rule}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Racing from the front */}
      <section style={{ padding: '0 32px 28px' }}>
        <Tag color={t.steel}>006 — Racing from the front · the head-to-head inverted</Tag>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
          {[
            ['KAYLEE LEADS EARLY', 'Expected on smooth ground. Don\u2019t chase — the climbs and the rock bring it back.'],
            ['ON EVERY CLIMB', 'Take time, don\u2019t give it. This is where the race is decided.'],
            ['TOGETHER @ MI 80', 'Course knowledge + back-half durability is the edge. Race her.'],
            ['ALONE AT THE FRONT', 'The likeliest picture. Run your own clock — CR ~24:34 in reach.'],
          ].map(([h, d]) => (
            <div key={h} style={{ ...card }}>
              <div style={{ ...mono, color: t.steel, fontSize: 10, marginBottom: 10 }}>{h}</div>
              <p style={{ fontSize: 13, color: t.inkSoft, margin: 0, lineHeight: 1.5 }}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interim race playbooks */}
      <section style={{ padding: '0 32px 28px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {[
          {
            n: '007', tag: 'RACE C · MANITOU · JUN 20 · DONE', goal: 'WON · 1st F · 12:29:09 · CR', cue: 'Descent class — passed, with a record.', c: t.green,
            rows: [['Result', '1st female · new course record'], ['Descents', 'faster than Justyna climbed'], ['Body', 'no injury · cleared for Ironstone'], ['Engine', 'descent skill 0.95 → 1.05']],
          },
          {
            n: '008', tag: 'RACE B · IRONSTONE · JUL 11 · RACING', goal: 'RACE IT · ~12:30 REALISTIC', cue: 'Race it. Read Kaylee. Then recover.', c: t.orange,
            rows: [['Decision', 'racing it, not a rehearsal'], ['Projection', '~13:15 / 12:30 / 11:50'], ['Intel', 'best live read on Kaylee pre-ES100'], ['Cost', 'protect 7–10 days after']],
          },
        ].map(p => (
          <div key={p.n} style={{ ...card, padding: 0, overflow: 'hidden' }}>
            <div style={{ background: p.c, color: '#fff', padding: '16px 20px' }}>
              <div style={{ ...mono, fontSize: 9, opacity: 0.85 }}>{p.n} — {p.tag}</div>
              <div style={{ fontSize: 17, fontWeight: 500, marginTop: 4 }}>{p.goal}</div>
            </div>
            <div style={{ padding: 20 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  {p.rows.map((r, i) => (
                    <tr key={i}>
                      <td style={{ ...td, ...mono, fontSize: 10, color: p.c, width: 90, borderBottom: i === p.rows.length - 1 ? 'none' : td.borderBottom }}>{r[0]}</td>
                      <td style={{ ...td, fontSize: 13, borderBottom: i === p.rows.length - 1 ? 'none' : td.borderBottom }}>{r[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div style={{ marginTop: 14, padding: '12px 14px', background: t.paper, ...sans, fontSize: 13, fontStyle: 'italic', color: t.ink }}>“{p.cue}”</div>
            </div>
          </div>
        ))}
        <div style={{ ...card, gridColumn: '1 / -1', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
          <div style={{ ...mono, color: t.orange, fontSize: 10, whiteSpace: 'nowrap', paddingTop: 2 }}>IRONSTONE INTEL</div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['climbing pace on long PA grades', 'descent technique on the rock', 'aid-station speed', 'response when chased — fold or accelerate?'].map(x => (
              <span key={x} style={{ ...mono, fontSize: 9, padding: '6px 10px', background: t.paper, color: t.inkSoft }}>{x}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Fueling + heat two-up */}
      <section style={{ padding: '0 32px 28px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <div style={{ ...card }}>
          <Tag>009 — Fueling · win on metabolic efficiency</Tag>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              {[
                ['CARBS', '60 g/hr', 'her ceiling, confirmed — make every gram count'],
                ['BLEND', '2:1', 'glucose:fructose, sipped steady · start topped off'],
                ['STRATEGY', 'fat-max', 'glycogen sparing — stay aerobic the first 50'],
                ['HEAT', 'ice', 'hat/bandana every aid from Hyner (mi 43); sodium to sweat'],
              ].map((r, i) => (
                <tr key={i}>
                  <td style={{ ...td, ...mono, fontSize: 10, color: t.inkSoft, width: 84 }}>{r[0]}</td>
                  <td style={{ ...td, ...mono, fontSize: 12, color: t.orange, fontWeight: 600, width: 78, whiteSpace: 'nowrap' }}>{r[1]}</td>
                  <td style={{ ...td, fontSize: 12.5 }}>{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ fontSize: 12, color: t.inkSoft, marginTop: 14, lineHeight: 1.55 }}>
            Justyna can&rsquo;t out-fuel her rivals and doesn&rsquo;t need to. With a 60 g/hr lid the race is won on efficiency — aerobic early, glycogen saved for the climbs that decide the day.
          </p>
        </div>
        <div style={{ ...card }}>
          <Tag color={t.green}>010 — Heat block · Jul 13 – Aug 2 · biggest controllable lever</Tag>
          <p style={{ fontSize: 13.5, color: t.inkSoft, margin: '0 0 14px', lineHeight: 1.6 }}>
            PA August runs warm and wet — <strong style={{ color: t.ink }}>WBGT 24–28 °C</strong>. The block overlaps Ironstone recovery; worth ~20 min and it all but zeroes the heat-DNF risk (Périard 2021).
          </p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['sauna 25 min post-run', '4–5 days/week', '80 °C', 'maintain through taper', 'no new heat in race week'].map(x => (
              <span key={x} style={{ ...mono, fontSize: 9, padding: '6px 10px', background: t.paper, color: t.inkSoft }}>{x}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Monitoring + DNF watch */}
      <section style={{ padding: '0 32px 28px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <div style={{ ...card, padding: 0, overflow: 'hidden' }}>
          <div style={{ padding: '16px 24px', borderBottom: `1px solid ${t.rule}` }}>
            <div style={{ ...mono, color: t.orange, fontSize: 11 }}>011 — DAILY MONITORING · AGE 50 · #1 JOB NOW</div>
            <div style={{ fontSize: 11.5, color: t.inkSoft, marginTop: 4 }}>Any trigger converts hard → easy. Two over two days = stop 48 h.</div>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              {[
                ['HRV', '−7% from baseline, 2 days'],
                ['Resting HR', '+5 bpm above baseline, 2 days'],
                ['Morning energy', 'below 6/10 in journal'],
                ['Sleep', 'under 7 hr, 2 nights'],
                ['Body weight', '−2% sustained'],
                ['Quad soreness', 'pain on stairs persists'],
              ].map((r, i) => (
                <tr key={i} style={{ background: i % 2 ? t.paper : t.bg }}>
                  <td style={{ ...td, fontWeight: 500, color: t.ink, fontSize: 13 }}>{r[0]}</td>
                  <td style={{ ...td, ...mono, fontSize: 10.5, color: t.steel }}>{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ ...card, padding: 0, overflow: 'hidden' }}>
          <div style={{ padding: '16px 24px', borderBottom: `1px solid ${t.rule}`, background: t.graphite }}>
            <div style={{ ...mono, color: t.red, fontSize: 11 }}>012 — DNF WATCH · RACE DAY · BASE RATE ~23%</div>
            <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.7)', marginTop: 4 }}>Two of these together → 15-min sit-down, reassess.</div>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              {[
                ['Stopped sweating', 'heat — force fluid + sodium, ice, cool'],
                ['GI lockup', 'drop to 40 g/hr, water-first, rebuild'],
                ['Quad failure late', 'off the brakes, shorten stride, lift cadence'],
                ['Mental confusion @ 70+', 'central fatigue — eat, caffeine, 1-mi goal'],
              ].map((r, i) => (
                <tr key={i} style={{ background: i % 2 ? t.paper : t.bg }}>
                  <td style={{ ...td, fontWeight: 500, color: t.ink, fontSize: 12.5 }}>{r[0]}</td>
                  <td style={{ ...td, fontSize: 12 }}>{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ padding: '12px 24px', ...mono, fontSize: 9.5, color: t.red }}>NEVER DECIDE TO DROP WHILE IN MOTION</div>
        </div>
      </section>

      {/* Mantra strip */}
      <section style={{ padding: '40px 32px', margin: '0 32px 28px', background: t.ink, color: t.bg, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <div style={{ ...mono, color: t.orange, fontSize: 10 }}>RACE-DAY SPINE</div>
        <div style={{ fontSize: 30, fontWeight: 500, letterSpacing: '-0.02em' }}>"Climb away. <span style={{ color: t.orange }}>Manage the rock.</span> Fat-fuel the first half."</div>
        <div style={{ ...mono, color: 'rgba(255,255,255,0.4)', fontSize: 10 }}>ES100 · 08.08.26</div>
      </section>

      {/* Footer */}
      <footer style={{ background: t.graphite, color: t.bg, padding: '32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 24 }}>
          <div style={{ maxWidth: 420 }}>
            <div style={{ ...mono, color: 'rgba(255,255,255,0.55)', fontSize: 10, marginBottom: 12 }}>ENGINE v0.7 · DESCENT SKILL 1.05 LOCKED · REV 2026-06-23 · RE-RUN AFTER IRONSTONE</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
              Maunder 2021 · Smyth 2022 · Vernillo/Giovanelli 2017 · Giovanelli 2016 · Costa 2017 · Podlogar 2022 · Périard 2021 · Marcora 2009
            </div>
            <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap', marginTop: 16 }}>
              <a href="race-history/justyna-wilson.html" style={{ ...mono, fontSize: 10, color: t.orange, textDecoration: 'none' }}>↗ JUSTYNA RACE HISTORY</a>
              <a href="race-history/kaylee-frederick.html" style={{ ...mono, fontSize: 10, color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>↗ KAYLEE RACE HISTORY</a>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 14, fontWeight: 500 }}>Endurance Method</div>
            <div style={{ ...mono, color: 'rgba(255,255,255,0.5)', fontSize: 10, marginTop: 8 }}>Method over mileage · for J. Wilson</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

window.EnduranceMethodES100 = EnduranceMethodES100;
