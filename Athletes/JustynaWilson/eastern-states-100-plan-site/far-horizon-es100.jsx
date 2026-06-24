// Far Horizon Endurance — Justyna's Eastern States 100 plan as a premium field dossier
// Instrument Serif + Manrope. Sand/charcoal/navy/gold. Editorial, contemplative.
// v0.7 — post-Manitou. Justyna is the favorite; descent skill corrected 0.95 → 1.05.

const fhjPalettes = {
  // Original — the current calm/editorial palette (kept for reference toggle)
  O: {
    sand: '#e8e1d4', sandDeep: '#d8cdb8', cream: '#f4efe6',
    ink: '#1c1d22', inkSoft: '#3a3a3f', navy: '#1f2a3a',
    gold: '#a8864c', goldSoft: '#c4a366', rule: 'rgba(28,29,34,0.14)',
  },
  // Option A — "Amplified": brand kept (gold), turned up + electric cobalt band
  A: {
    sand: '#ece4d4', sandDeep: '#ddd2bb', cream: '#f4f1ea',
    ink: '#16181d', inkSoft: '#4a4a4f', navy: '#15327e',
    gold: '#c47f12', goldSoft: '#f4b53f', rule: 'rgba(22,24,29,0.14)',
  },
  // Option B — "Spectrum": unified electric cobalt + blaze on cool bone
  B: {
    sand: '#e8ecf6', sandDeep: '#d6def0', cream: '#f5f2ec',
    ink: '#111319', inkSoft: '#474e5b', navy: '#1330d6',
    gold: '#ff4d12', goldSoft: '#ff8a3d', rule: 'rgba(17,19,25,0.13)',
  },
};
window.FarHorizonES100Palettes = fhjPalettes;

function FarHorizonES100({ pal }) {
  const ti = { fontFamily: '"Instrument Serif", "Times New Roman", serif', fontWeight: 400, letterSpacing: '-0.01em' };
  const sans = { fontFamily: 'Manrope, system-ui, sans-serif' };
  const mono = { fontFamily: 'ui-monospace, "JetBrains Mono", monospace', letterSpacing: '0.14em', textTransform: 'uppercase', fontSize: 11 };
  const t = pal || fhjPalettes.A;

  const SectionLabel = ({ n, children }) => (
    <div style={{ ...mono, color: t.gold, marginBottom: 22 }}>— {n} / {children}</div>
  );

  const cell = { padding: '15px 18px', borderBottom: `1px solid ${t.rule}`, fontSize: 14, verticalAlign: 'top', color: t.inkSoft };
  const headCell = { ...mono, color: t.ink, textAlign: 'left', padding: '0 18px 14px', borderBottom: `1.5px solid ${t.ink}` };

  return (
    <div style={{ background: t.cream, color: t.ink, ...sans, fontSize: 16, lineHeight: 1.6 }}>
      {/* Masthead */}
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 64px', borderBottom: `1px solid ${t.rule}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <svg width="20" height="20" viewBox="0 0 22 22"><circle cx="11" cy="11" r="10" fill="none" stroke={t.ink} strokeWidth="1.2" /><line x1="1" y1="11" x2="21" y2="11" stroke={t.ink} strokeWidth="1.2" /></svg>
          <div style={{ ...ti, fontSize: 19 }}>Far Horizon <span style={{ color: t.gold }}>Endurance</span></div>
        </div>
        <div style={{ ...mono, color: t.inkSoft }}>Athlete Dossier · Confidential</div>
      </header>

      {/* Hero */}
      <section style={{ padding: '80px 64px 64px' }}>
        <div style={{ ...mono, color: t.gold, marginBottom: 28 }}>— Race Plan No. 12 · v0.7 engine · Updated 23 June 2026 · supersedes the 8 June v0.6 dossier</div>
        <h1 style={{ ...ti, fontSize: 96, lineHeight: 0.97, margin: 0, letterSpacing: '-0.025em', maxWidth: 1100 }}>
          Eastern States 100<span style={{ color: t.gold }}>.</span><br />
          <span style={{ fontStyle: 'italic', fontSize: 60, color: t.inkSoft }}>Justyna is the favorite now — not the chaser.</span>
        </h1>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 56, gap: 64 }}>
          <p style={{ maxWidth: 560, fontSize: 18, color: t.inkSoft, margin: 0 }}>
            Waterville, Pennsylvania. One hundred and three miles of Ridge &amp; Valley singletrack and 20,833 feet of
            climbing — a climber&rsquo;s course, and Justyna is the strongest climber in the field. After a course-record win
            at Manitou, this is no longer a plan to close a gap. It is a plan for Justyna to arrive fresh and race her own day at the front.
          </p>
          <div style={{ ...ti, fontSize: 56, color: t.gold, lineHeight: 1, whiteSpace: 'nowrap' }}>08 · 08 · 26</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 0, marginTop: 56, borderTop: `1px solid ${t.rule}`, borderBottom: `1px solid ${t.rule}` }}>
          {[['103', 'miles'], ['20,833', 'feet climb'], ['17', 'aid stations'], ['36 h', 'cutoff'], ['05:00', 'start'], ['23:05', 'realistic line']].map(([n, l], i) => (
            <div key={l} style={{ padding: '28px 0', borderLeft: i > 0 ? `1px solid ${t.rule}` : 'none', paddingLeft: i > 0 ? 24 : 0 }}>
              <div style={{ ...ti, fontSize: 38, lineHeight: 1 }}>{n}</div>
              <div style={{ ...mono, color: t.inkSoft, marginTop: 10 }}>{l}</div>
            </div>
          ))}
        </div>
        <div style={{ ...mono, color: t.inkSoft, marginTop: 24 }}>Athlete · Justyna Wilson · age 50 · three-time ES100 finisher · 2025 champion · 24:49:36 Masters course record</div>
      </section>

      {/* Mantra band */}
      <section style={{ padding: '90px 64px', background: t.navy, color: t.cream, textAlign: 'center' }}>
        <div style={{ ...mono, color: t.goldSoft, marginBottom: 28 }}>— Race-day spine</div>
        <div style={{ ...ti, fontSize: 72, lineHeight: 1.08, fontStyle: 'italic' }}>
          "Climb away. <span style={{ color: t.goldSoft }}>Manage the rock.</span> Fat-fuel the first half."
        </div>
      </section>

      {/* The projection */}
      <section style={{ padding: '110px 64px' }}>
        <SectionLabel n="01">The projection</SectionLabel>
        <h2 style={{ ...ti, fontSize: 56, margin: '0 0 16px', letterSpacing: '-0.02em' }}>No single target. Three honest scenarios.</h2>
        <p style={{ maxWidth: 760, color: t.inkSoft, margin: '0 0 48px', fontSize: 17 }}>
          The v0.7 engine — its descent term corrected after Manitou — no longer reads a deficit to close. There is no
          number to chase, only the shape of the day. All three of Justyna&rsquo;s lines land at or under the women&rsquo;s course
          record of <span style={{ color: t.ink }}>~24:34</span> (N. Yokum, 2021). Race the day, not a clock.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {[
            { tag: 'Conservative', time: '24:23', pace: 'Kaylee · 27:45', note: 'A rough day, managed. Still at the women\u2019s course record and comfortably clear of the field.', faint: true },
            { tag: 'Realistic · plan to this', time: '23:05', pace: 'Kaylee · 25:25', note: 'The line to build the block around — half an hour under the course record. The head-to-head has inverted.', feature: true },
            { tag: 'Optimistic', time: '22:14', pace: 'Kaylee · 22:30', note: 'A clean day on Justyna\u2019s terms. Only Kaylee\u2019s perfect day comes close — and it still does not pass Justyna.', faint: true },
          ].map(s => (
            <div key={s.tag} style={{
              padding: 36, border: `1px solid ${s.feature ? t.gold : t.rule}`,
              background: s.feature ? t.sand : 'transparent',
              boxShadow: s.feature ? `inset 0 0 0 1px ${t.gold}` : 'none',
            }}>
              <div style={{ ...mono, color: s.feature ? t.gold : t.inkSoft, marginBottom: 24 }}>{s.tag}</div>
              <div style={{ ...ti, fontSize: 60, lineHeight: 1, color: s.faint ? t.inkSoft : t.ink }}>{s.time}</div>
              <div style={{ ...mono, color: t.inkSoft, margin: '14px 0 24px' }}>{s.pace}</div>
              <p style={{ fontSize: 14.5, color: t.inkSoft, margin: 0, lineHeight: 1.6 }}>{s.note}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 24, padding: '32px 40px', background: t.navy, color: t.cream, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap' }}>
          <div>
            <div style={{ ...mono, color: t.goldSoft, marginBottom: 10 }}>The chase has inverted · Kaylee</div>
            <div style={{ ...ti, fontSize: 26, color: t.cream, maxWidth: 640, lineHeight: 1.3 }}>
              Kaylee&rsquo;s old <span style={{ color: t.goldSoft }}>21:55</span> was overfit and has been retired. Re-anchored to her real race data she
              projects <span style={{ color: t.goldSoft }}>~25:25</span> — and on ES100&rsquo;s technical rock her one edge, descending, nearly vanishes.
            </div>
          </div>
          <div style={{ ...ti, fontSize: 72, color: t.goldSoft, lineHeight: 1, whiteSpace: 'nowrap' }}>25:25</div>
        </div>
        <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {[
            ['Why the engine moved', 'The v0.7 split-skill model retired the old single-curve fit. Kaylee\u2019s 21:55 was extrapolated from one fast, smooth, low-vertical result; the new engine grades climbing, rolling and descending separately and applies ES100\u2019s own terrain \u2014 20,833 ft and sustained technical rock \u2014 to each of them.'],
            ['Why her history moved', 'Re-scored against Kaylee\u2019s complete race record matched to terrain \u2014 not her single best day \u2014 and against her two most recent workouts on ES100-type ground, where that smooth-course speed does not transfer. Both reads converge near ~25:25.'],
          ].map(([h, d]) => (
            <div key={h} style={{ padding: '24px 28px', border: `1px solid ${t.rule}`, background: t.sand }}>
              <div style={{ ...mono, color: t.gold, marginBottom: 12 }}>{h} · Kaylee</div>
              <p style={{ fontSize: 14, color: t.inkSoft, margin: 0, lineHeight: 1.65 }}>{d}</p>
            </div>
          ))}
        </div>
        <div style={{ ...mono, color: t.inkSoft, marginTop: 24 }}>DNF risk · ~23% (a course &amp; field base rate — 50+ ultras, zero DNFs)</div>
        <div style={{ marginTop: 24, padding: '28px 34px', border: `1px dashed ${t.gold}` }}>
          <div style={{ ...mono, color: t.gold, marginBottom: 12 }}>— A note on confidence</div>
          <p style={{ fontSize: 14.5, color: t.inkSoft, margin: 0, lineHeight: 1.7, maxWidth: 920 }}>
            Every projection here is only as good as the data behind it — its <span style={{ color: t.ink }}>quantity, recency and accuracy</span>.
            These lines carry no physiological data from either athlete — and, most of all, none from Justyna, the focus of this plan —
            and the engine still holds only limited detailed workout and race-split data on Justyna herself. Read the numbers as the
            honest shape of the day, not a guarantee; they tighten as Justyna&rsquo;s physiology, her splits and the Ironstone read come in.
          </p>
          <div style={{ ...mono, marginTop: 18, display: 'flex', gap: 22, flexWrap: 'wrap' }}>
            <a href="race-history/justyna-wilson.html" style={{ color: t.gold, textDecoration: 'none', borderBottom: `1px solid ${t.gold}`, paddingBottom: 3 }}>Justyna&rsquo;s full race history →</a>
            <a href="race-history/kaylee-frederick.html" style={{ color: t.inkSoft, textDecoration: 'none', borderBottom: `1px solid ${t.rule}`, paddingBottom: 3 }}>Kaylee&rsquo;s race history →</a>
          </div>
        </div>
      </section>

      {/* What the data revealed — and what Manitou proved */}
      <section style={{ padding: '0 64px 110px' }}>
        <SectionLabel n="02">What the data revealed — and what Manitou proved</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: 64, alignItems: 'start' }}>
          <p style={{ ...ti, fontSize: 34, lineHeight: 1.25, margin: 0 }}>
            The Worlds End splits looked like a descent problem. Then Manitou settled it —
            <span style={{ color: t.gold }}> a course record on the hardest technical descents in the East, descending faster than she had climbed.</span>
          </p>
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[
                ['Climbs', '−5 sec/mi', 'Justyna is faster than Kaylee uphill. ES100 is 20,833 ft of climbing — her course, paying her every strength.', t.gold],
                ['Rolling', '+94 sec/mi', '42 minutes given up over 27 rolling miles. The one real terrain gap that remains — trainable, and the focus that stays.', t.inkSoft],
                ['Descents', '+183 sec/mi', 'The apparent headline — disproved. On smooth ground she trails only a generational descender; on rock the gap nearly closes.', t.ink],
              ].map(([k, v, d, c], i) => (
                <div key={k} style={{ padding: '24px 0', borderTop: i === 0 ? `1.5px solid ${t.ink}` : `1px solid ${t.rule}` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <span style={{ ...ti, fontSize: 26, color: t.ink }}>{k}</span>
                    <span style={{ ...ti, fontSize: 34, color: c }}>{v}</span>
                  </div>
                  <p style={{ fontSize: 14, color: t.inkSoft, margin: '10px 0 0', lineHeight: 1.6 }}>{d}</p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 14.5, color: t.inkSoft, marginTop: 28, lineHeight: 1.7 }}>
              The win condition was never &ldquo;beat Kaylee at her best.&rdquo; Justyna&rsquo;s real, durable edge is
              <span style={{ color: t.ink }}> elite climbing, hundred-mile durability, and three finishes on this exact course.</span>{' '}
              The engine&rsquo;s descent term was corrected to match what Justyna proved — skill factor 0.95 → 1.05.
            </p>
          </div>
        </div>
      </section>

      {/* The architecture — nine weeks, three races */}
      <section style={{ padding: '110px 64px', background: t.sand, borderTop: `1px solid ${t.rule}`, borderBottom: `1px solid ${t.rule}` }}>
        <SectionLabel n="03">The architecture</SectionLabel>
        <h2 style={{ ...ti, fontSize: 56, margin: '0 0 16px', letterSpacing: '-0.02em' }}>Nine weeks. Three races. One already banked.</h2>
        <p style={{ maxWidth: 780, color: t.inkSoft, margin: '0 0 48px', fontSize: 17 }}>
          We never built a peak block — Manitou and Ironstone <em>are</em> the load. Manitou is done and won; we are now in
          Week&nbsp;3, the recovery week, with Ironstone ahead. From here the single biggest job is recovery management:
          arriving at Waterville fresh, heat-ready and healthy.
        </p>
        <div style={{ background: t.cream, border: `1px solid ${t.rule}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead><tr>{['Wk', 'Dates', 'Phase', 'Vol', 'Long', 'Vert', 'Status / Focus'].map(h => <th key={h} style={{ ...headCell, padding: '16px 18px' }}>{h}</th>)}</tr></thead>
            <tbody>
              {[
                ['1', 'Jun 8–14', 'Pre-Manitou taper', '10 h', '3 h', '2,500', '\u2713 done — legs tuned', 'done'],
                ['2', 'Jun 15–21', 'MANITOU · Jun 20', '18 h', 'RACE', '15,000', '\u2713 1st F · 12:29:09 · course record · no injury', 'done'],
                ['3', 'Jun 22–28', 'Recovery', '6 h', '2 h easy', '1,000', 'NOW — protect 7–10 days · legs + CNS', 'now'],
                ['4', 'Jun 29–Jul 5', 'Build-back', '12 h', '4 h', '4,000', 'Rolling tempo + descent maintenance', false],
                ['5', 'Jul 6–12', 'IRONSTONE · Jul 11', '17 h', 'RACE', '10,000', 'Racing it + Kaylee intel', 'race'],
                ['6', 'Jul 13–19', 'Recovery + heat', '8 h', '2.5 h easy', '1,500', 'Heat block starts · sauna 4–5×/wk', false],
                ['7', 'Jul 20–26', 'Bridge to taper', '10 h', '3.5 h', '3,000', 'Final intensity + heat maintenance', false],
                ['8', 'Jul 27–Aug 2', 'Taper', '7 h', '2 h', '1,000', 'Sleep + carb-load + heat maintenance', false],
                ['9', 'Aug 3–8', 'Race week', '3 h + race', '35 min', '0', 'Eastern States · Sat 8 Aug', 'race'],
              ].map((r, i) => {
                const hl = r[7] === 'now' || r[7] === 'race';
                return (
                  <tr key={i} style={{ background: r[7] === 'now' ? t.goldSoft + '33' : (hl || r[7] === 'done' ? t.sand : 'transparent'), opacity: r[7] === 'done' ? 0.66 : 1 }}>
                    <td style={{ ...cell, ...ti, fontSize: 20, color: t.ink }}>{r[0]}</td>
                    <td style={{ ...cell, ...mono, fontSize: 11 }}>{r[1]}</td>
                    <td style={{ ...cell, color: hl ? t.gold : t.ink, fontWeight: hl ? 600 : 400, fontSize: 14 }}>{r[2]}</td>
                    <td style={{ ...cell, ...mono, fontSize: 11 }}>{r[3]}</td>
                    <td style={{ ...cell, ...mono, fontSize: 11, color: r[4] === 'RACE' ? t.gold : t.inkSoft }}>{r[4]}</td>
                    <td style={{ ...cell, ...mono, fontSize: 11, color: t.gold }}>{r[5]}</td>
                    <td style={{ ...cell, fontSize: 13.5, color: r[7] === 'now' ? t.ink : (r[7] === 'done' ? t.gold : t.inkSoft), fontWeight: r[7] === 'now' ? 600 : 400 }}>{r[6]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {[
            ['Manitou\u2019s Revenge · 54 mi · banked', 'Done, and won outright — 1st female, 12:29:09, a new course female record on the most descent-technical trail in the East. Justyna descended faster than she climbed. The descent question is answered.'],
            ['Ironstone · 100 K · ahead', 'Now she races it — not a rehearsal. A real effort and the best live read on Kaylee before August. The recovery cost afterward is managed, not ignored.'],
            ['Eastern States · 103 mi · the test', 'A climber\u2019s course that rewards her every strength. The job is no longer fitness — that is banked — but to arrive fresh, heat-ready and healthy.'],
          ].map(([h, d]) => (
            <div key={h} style={{ padding: '28px 32px', background: t.navy, color: t.cream }}>
              <div style={{ ...ti, fontSize: 24, color: t.goldSoft, marginBottom: 12 }}>{h}</div>
              <p style={{ fontSize: 14, color: 'rgba(244,239,230,0.75)', margin: 0, lineHeight: 1.65 }}>{d}</p>
            </div>
          ))}
        </div>
        <p style={{ ...mono, color: t.inkSoft, marginTop: 28, lineHeight: 1.9 }}>
          ~50 hours of racing across three events in 7 weeks · an enormous demand on a 50-year-old · recovery is the limiter · smart &gt; hard
        </p>
      </section>

      {/* Six focus areas */}
      <section style={{ padding: '110px 64px' }}>
        <SectionLabel n="04">The six focus areas</SectionLabel>
        <h2 style={{ ...ti, fontSize: 56, margin: '0 0 48px', letterSpacing: '-0.02em', maxWidth: 900 }}>
          Re-ranked by the v0.7 data and the race calendar.
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderTop: `1px solid ${t.rule}` }}>
          {[
            ['01', 'Recovery + durability', 'three races · 49 days', 'HRV/RHR-gated · protect the back-half ability that wins ES100'],
            ['02', 'Heat acclimation, full', 'PA August WBGT 24–28 °C', 'Jul 13 – Aug 2 sauna block · the biggest controllable lever, worth ~20 min'],
            ['03', 'Rolling-terrain sustained state', 'the one real terrain gap', 'Wed/Fri tempo sessions · Ironstone'],
            ['04', 'Metabolic efficiency', 'carb ceiling 60 g/hr', 'fat-max + glycogen sparing · 2:1 glucose:fructose · sodium to sweat'],
            ['05', 'Descent maintenance', 'proven at Manitou', 'keep eccentric strength + technique ticking over — no longer a build'],
            ['06', 'Aid-station efficiency', '<90 sec × 17 stops', 'free time across the day'],
          ].map(([n, title, why, where]) => (
            <div key={n} style={{ display: 'grid', gridTemplateColumns: '0.5fr 1.4fr 1fr 1.2fr', gap: 32, padding: '28px 0', borderBottom: `1px solid ${t.rule}`, alignItems: 'baseline' }}>
              <div style={{ ...ti, fontSize: 38, color: t.gold }}>{n}</div>
              <div style={{ ...ti, fontSize: 24, color: t.ink, lineHeight: 1.15 }}>{title}</div>
              <div style={{ ...mono, color: t.gold, fontSize: 10.5, lineHeight: 1.6 }}>{why}</div>
              <p style={{ fontSize: 14, color: t.inkSoft, margin: 0, lineHeight: 1.6 }}>{where}</p>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 14, color: t.inkSoft, marginTop: 24, lineHeight: 1.7, maxWidth: 820 }}>
          Dropped from the old plan: the heavy descent-technique build (proven at Manitou), the &ldquo;gut to 85+ to match
          Kaylee&rdquo; target (her ceiling is 60), and the whole &ldquo;close the gap to Kaylee&rdquo; framing.
        </p>
      </section>

      {/* The race in your head — ES100 pacing */}
      <section style={{ padding: '0 64px 110px' }}>
        <SectionLabel n="05">The race, in your head</SectionLabel>
        <h2 style={{ ...ti, fontSize: 56, margin: '0 0 48px', letterSpacing: '-0.02em', maxWidth: 940 }}>
          Even effort, not even pace. The last thirty miles win it.
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderTop: `1px solid ${t.rule}` }}>
          {[
            ['Miles 0–25', 'Settle', 'Even effort, not even pace. The first fifty are run by fuel, not legs — low-Z2, conversational. If HR drifts more than 5% at the same effort by halfway, back off: you are overcooking it.'],
            ['Miles 25–50', 'Climb away', 'Your weapon. Power-hike anything steep — over ~15% — from the gun, and press the runnable climbs. This is where the race is decided. Expect the low patch around mile 39–53: fuel through it, first caffeine here.'],
            ['Miles 50–75', 'Manage the rock', 'Quick feet, short steps, off the brakes — protect the quads for the late climbs. No risks on the technical rock; no one gains time on you there.'],
            ['Miles 75–95', 'Run the back half', 'The race is won here, on legs you saved. Sky Top → the Barrens, the dark miles. Ice in the hat at every aid since Hyner, run your checklist, keep moving.'],
            ['Miles 95–103', 'Empty it', 'You have finished this trail three times. There is nothing left to save it for — spend every last thing you brought.'],
          ].map(([dist, title, body], i) => (
            <div key={title} style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.6fr 0.3fr', gap: 40, padding: '36px 0', borderBottom: `1px solid ${t.rule}`, alignItems: 'start' }}>
              <div>
                <div style={{ ...ti, fontSize: 32, lineHeight: 1.05 }}>{title}</div>
                <div style={{ ...mono, color: t.gold, marginTop: 12 }}>{dist}</div>
              </div>
              <p style={{ fontSize: 17, color: t.inkSoft, margin: 0, lineHeight: 1.65 }}>{body}</p>
              <div style={{ ...ti, fontSize: 30, color: t.gold, textAlign: 'right' }}>{String(i + 1).padStart(2, '0')}</div>
            </div>
          ))}
        </div>
        {/* Kaylee scenarios — now the favorite */}
        <div style={{ marginTop: 56 }}>
          <div style={{ ...mono, color: t.gold, marginBottom: 24 }}>— Racing from the front</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
            {[
              ['If Kaylee leads early', 'Expected on smooth ground — let her go. The climbs and the rock bring it back. Run your own day, not hers.'],
              ['On every climb', 'This is where you take time, not give it. Press every runnable grade; power-hike the steep. The race is decided going up.'],
              ['Together at mile 80', 'Your course knowledge and back-half durability are the edge — three finishes here against her none. Race her.'],
              ['Alone at the front', 'The likeliest picture. Run your own clock — on a normal day the women\u2019s record (~24:34) is well within reach.'],
            ].map(([h, d]) => (
              <div key={h} style={{ padding: 32, border: `1px solid ${t.gold}` }}>
                <div style={{ ...ti, fontSize: 23, marginBottom: 12 }}>{h}</div>
                <p style={{ fontSize: 14.5, color: t.inkSoft, margin: 0, lineHeight: 1.6 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The two interim races — one banked, one ahead */}
      <section style={{ padding: '110px 64px', background: t.sand, borderTop: `1px solid ${t.rule}`, borderBottom: `1px solid ${t.rule}` }}>
        <SectionLabel n="06">The two interim races</SectionLabel>
        <h2 style={{ ...ti, fontSize: 56, margin: '0 0 48px', letterSpacing: '-0.02em', maxWidth: 900 }}>
          One banked. One ahead.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {[
            {
              tag: 'Race C · Manitou\u2019s Revenge · Jun 20 · DONE',
              cue: '"Descent class — passed, with a record."',
              goal: '1st female · 12:29:09 · course female record · no injury.',
              points: [
                'Won outright on the Devil\u2019s Path — the hardest technical descents on the East Coast.',
                'Justyna\u2019s own data: she descended faster than she climbed. The descent question is closed.',
                'No limiter, no injury signs — cleared, recovered, and racing Ironstone.',
                'The engine\u2019s descent term was corrected to match — skill factor 0.95 → 1.05.',
              ],
            },
            {
              tag: 'Race B · Ironstone 100K · Jul 11 · AHEAD',
              cue: '"Race it. Read Kaylee."',
              goal: 'Racing it — projection ~12:30 realistic.',
              points: [
                'Decision: Justyna races this one, not a controlled rehearsal — and that puts her at the faster end.',
                'Projection: conservative ~13:15 · realistic ~12:30 · optimistic ~11:50.',
                'The best live read on Kaylee before Aug 8 — climbing on PA grades, descending on rock, aid speed, response when chased.',
                'Recovery is the trade-off: protect the 7–10 days after before the heat block resumes.',
              ],
            },
          ].map(r => (
            <div key={r.tag} style={{ background: t.cream, border: `1px solid ${t.rule}`, padding: 36 }}>
              <div style={{ ...mono, color: t.gold, marginBottom: 18 }}>{r.tag}</div>
              <div style={{ ...ti, fontSize: 30, fontStyle: 'italic', color: t.ink, marginBottom: 8, lineHeight: 1.2 }}>{r.cue}</div>
              <div style={{ ...mono, color: t.inkSoft, marginBottom: 24 }}>Result · {r.goal}</div>
              <ol style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {r.points.map((p, i) => (
                  <li key={i} style={{ display: 'flex', gap: 16, padding: '12px 0', borderTop: `1px solid ${t.rule}` }}>
                    <span style={{ ...ti, fontSize: 22, color: t.gold, minWidth: 22 }}>{i + 1}</span>
                    <span style={{ fontSize: 14.5, color: t.inkSoft, lineHeight: 1.55 }}>{p}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 24, padding: '24px 32px', border: `1px solid ${t.gold}`, background: 'transparent' }}>
          <span style={{ ...mono, color: t.gold }}>Intel to gather at Ironstone · </span>
          <span style={{ fontSize: 14.5, color: t.inkSoft }}>
            Her climbing pace on long PA grades · her descent technique on the rock · her aid-station speed ·
            and the one that matters most — does she fold or accelerate when chased?
          </span>
        </div>
      </section>

      {/* Fueling */}
      <section style={{ padding: '110px 64px', background: t.ink, color: t.cream }}>
        <div style={{ ...mono, color: t.goldSoft, marginBottom: 22 }}>— 07 / Fueling</div>
        <h2 style={{ ...ti, fontSize: 56, margin: '0 0 48px', letterSpacing: '-0.02em' }}>
          Sixty grams an hour. <span style={{ color: t.goldSoft }}>Make every one count.</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
          <div>
            <div style={{ ...mono, color: t.goldSoft, marginBottom: 20 }}>The race-day protocol</div>
            {[
              ['Carbohydrate', '60 g/hr — her ceiling, confirmed. The plan wins on efficiency, not volume'],
              ['The blend', '2:1 glucose:fructose, sipped steady — and start the day topped off'],
              ['The strategy', 'Fat-max + glycogen sparing — stay aerobic the first fifty miles'],
              ['Heat & sodium', 'Sodium to sweat rate; ice in hat/bandana at every aid from Hyner (mile 43)'],
            ].map(([item, val]) => (
              <div key={item} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '18px 0', borderBottom: '1px solid rgba(255,255,255,0.12)', gap: 24 }}>
                <span style={{ ...ti, fontSize: 22, color: t.cream, whiteSpace: 'nowrap' }}>{item}</span>
                <span style={{ fontSize: 14.5, color: 'rgba(244,239,230,0.8)', textAlign: 'right' }}>{val}</span>
              </div>
            ))}
            <p style={{ fontSize: 14, color: 'rgba(244,239,230,0.6)', marginTop: 24, lineHeight: 1.7 }}>
              Justyna cannot out-fuel her rivals and does not need to. Sixty grams is the lid, so the race is won on metabolic
              efficiency — running the first half aerobic, sparing glycogen for the climbs that decide the day.
            </p>
          </div>
          <div>
            <div style={{ ...mono, color: t.goldSoft, marginBottom: 20 }}>Three-race load</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
              {[['54', 'Manitou mi · \u2713 won'], ['100', 'Ironstone K · Jul 11'], ['103', 'Eastern mi · Aug 8'], ['15K', 'Manitou vert'], ['10K', 'Ironstone vert'], ['20.8K', 'Eastern vert']].map(([n, l]) => (
                <div key={l} style={{ padding: 20, border: '1px solid rgba(255,255,255,0.16)' }}>
                  <div style={{ ...ti, fontSize: 38, color: t.goldSoft, lineHeight: 1 }}>{n}</div>
                  <div style={{ ...mono, color: 'rgba(244,239,230,0.6)', marginTop: 10, fontSize: 9.5 }}>{l}</div>
                </div>
              ))}
            </div>
            <div style={{ ...mono, color: t.goldSoft, margin: '36px 0 16px' }}>The 50-year-old&rsquo;s rule</div>
            <p style={{ fontSize: 14.5, color: 'rgba(244,239,230,0.8)', lineHeight: 1.7, margin: 0 }}>
              Three ultras and 46,000 feet of climbing in 49 days is an enormous demand. The fitness is banked; the only
              job left is recovery. If any monitoring trigger fires in the seven days after Ironstone, stop entirely for
              48 hours and resume only at easy effort.
            </p>
          </div>
        </div>
      </section>

      {/* Heat + recovery monitoring */}
      <section style={{ padding: '110px 64px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
        <div>
          <SectionLabel n="08">Heat &amp; acclimation</SectionLabel>
          <p style={{ ...ti, fontSize: 30, lineHeight: 1.3, margin: '0 0 24px' }}>
            Pennsylvania August runs warm and wet — WBGT 24–28 °C. <span style={{ color: t.gold }}>The sauna block is the biggest controllable lever.</span>
          </p>
          <div style={{ fontSize: 15, color: t.inkSoft, lineHeight: 1.85 }}>
            The block runs Jul 13 – Aug 2, overlapping Ironstone recovery: sauna 25 minutes after the easy run, four to
            five days a week, maintained through the taper. It is worth roughly 20 minutes on race day and all but zeroes
            the heat-DNF risk. Add no new heat stress in race week — the work is already done.
          </div>
        </div>
        <div>
          <SectionLabel n="09">Daily monitoring · age 50</SectionLabel>
          <p style={{ fontSize: 15, color: t.inkSoft, margin: '0 0 20px', lineHeight: 1.7 }}>
            Any trigger converts a hard day to easy. Two triggers over two days stops training for 48 hours. With the fitness
            banked, this is now the most important table in the plan.
          </p>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              {[
                ['HRV', '−7% from 60-day baseline, 2 days running'],
                ['Resting HR', '+5 bpm above baseline, 2 days running'],
                ['Morning energy', 'below 6/10 in the journal'],
                ['Sleep', 'under 7 hr for 2 nights running'],
                ['Body weight', '−2% sustained'],
                ['Quad soreness', 'pain on stairs persists'],
              ].map((r, i) => (
                <tr key={i}>
                  <td style={{ ...cell, color: t.ink, ...ti, fontSize: 19, width: 160 }}>{r[0]}</td>
                  <td style={{ ...cell }}>{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* DNF watch / risk */}
      <section style={{ padding: '0 64px 110px' }}>
        <SectionLabel n="10">If it goes wrong</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, marginBottom: 28 }}>
          {[
            ['Quad fatigue late', 'Heaviness on the Cedar Run rock', 'Manitou armoured these legs, but late is late. Shorten stride, lift cadence, off the brakes. Protect them on the way down for the climbs that win it.'],
            ['GI lockup', 'Can\u2019t take in fuel, rising nausea', 'Drop to 40 g/hr, water-first sipping, rebuild over 30 min. At a 60 g ceiling every gram matters — don\u2019t let one bad patch spiral.'],
            ['Heat / stopped sweating', 'Skin dry, core climbing, past Hyner', 'Force fluid + sodium, ice the hat and bandana, slow until sweating resumes. PA heat is wet heat — respect it.'],
            ['Mental confusion at 70+', 'Slow thought, the Barrens darkness', 'Central fatigue, not physical. Eat, caffeine, set a one-mile goal, restart. Never decide to drop in motion.'],
          ].map(([risk, sign, resp]) => (
            <div key={risk} style={{ padding: 28, background: t.sand, border: `1px solid ${t.rule}` }}>
              <div style={{ ...ti, fontSize: 24, marginBottom: 14 }}>{risk}</div>
              <div style={{ ...mono, color: t.gold, marginBottom: 14 }}>{sign}</div>
              <p style={{ fontSize: 14, color: t.inkSoft, margin: 0, lineHeight: 1.6 }}>{resp}</p>
            </div>
          ))}
        </div>
        <div style={{ padding: '28px 32px', background: t.navy, color: t.cream }}>
          <span style={{ ...mono, color: t.goldSoft }}>DNF watch · ~23% base rate · </span>
          <span style={{ fontSize: 15, color: 'rgba(244,239,230,0.85)' }}>
            If two of these appear together — stopped sweating, GI lockup, deep quad failure, mental confusion past mile 70 —
            take a 15-minute sit-down at the aid station, 200 ml recovery drink, a banana, then reassess. <span style={{ color: t.goldSoft }}>Never decide to drop while in motion.</span>
          </span>
        </div>
      </section>

      {/* Footer / citations */}
      <footer style={{ padding: '72px 64px', background: t.navy, color: t.cream }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64 }}>
          <div>
            <div style={{ ...ti, fontSize: 30 }}>Far Horizon Endurance</div>
            <div style={{ ...mono, color: t.goldSoft, marginTop: 16 }}>Coaching for the long journey.</div>
            <p style={{ fontSize: 14, color: 'rgba(244,239,230,0.6)', marginTop: 28, maxWidth: 340, lineHeight: 1.7 }}>
              Built on the v0.7 split-skill engine, descent skill factor 1.05 locked after Manitou. Updated 23 June 2026;
              re-run after Ironstone with the head-to-head intel, and again at T-10.
            </p>
            <div style={{ ...mono, color: t.goldSoft, marginTop: 24, marginBottom: 12 }}>Source data</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
              <a href="race-history/justyna-wilson.html" style={{ color: t.cream, textDecoration: 'none', borderBottom: '1px solid rgba(244,239,230,0.32)', paddingBottom: 3, width: 'fit-content', fontSize: 13.5 }}>Justyna Wilson — race history (52 races) →</a>
              <a href="race-history/kaylee-frederick.html" style={{ color: 'rgba(244,239,230,0.72)', textDecoration: 'none', borderBottom: '1px solid rgba(244,239,230,0.2)', paddingBottom: 3, width: 'fit-content', fontSize: 13.5 }}>Kaylee Frederick — race history (44 races) →</a>
            </div>
          </div>
          <div>
            <div style={{ ...mono, color: t.goldSoft, marginBottom: 18 }}>Selected references</div>
            <div style={{ columns: 2, columnGap: 40, fontSize: 12.5, color: 'rgba(244,239,230,0.65)', lineHeight: 1.7 }}>
              {['Maunder, Jones, Seiler 2021 — durability', 'Smyth, Waldron, Burnley 2022 — pacing', 'Vernillo / Giovanelli 2017 — downhill damage', 'Giovanelli et al. 2016 — up/downhill economy', 'Costa et al. 2017 — exercise GI syndrome', 'Podlogar, Wallis 2022 — carbohydrate ceilings', 'Périard, Racinais, Sawka 2021 — heat acclimation', 'Marcora, Staiano 2009 — mental fatigue'].map(c => (
                <div key={c} style={{ breakInside: 'avoid', marginBottom: 8 }}>{c}</div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ marginTop: 56, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.15)', display: 'flex', justifyContent: 'space-between', ...mono, color: 'rgba(244,239,230,0.5)' }}>
          <span>© 2026 Far Horizon Endurance LLC · for Justyna Wilson</span>
          <span>Eastern States 100 · Waterville PA · 08.08.2026</span>
        </div>
      </footer>
    </div>
  );
}

window.FarHorizonES100 = FarHorizonES100;
