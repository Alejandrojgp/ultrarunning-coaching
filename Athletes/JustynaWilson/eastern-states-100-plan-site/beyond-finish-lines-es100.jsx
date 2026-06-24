// Beyond Finish Lines — Justyna's Eastern States 100 plan as a warm letter to the athlete
// Newsreader serif + Manrope. Earth tones, terracotta, forest, slate, gold.
// v0.7 — post-Manitou. The descent fear is gone; she races as the favorite.

const bfjPalettes = {
  // Original
  O: {
    bg: '#f7f1e8', paper: '#ede4d3', clay: '#c1654a', rust: '#8d3f29',
    ink: '#2a241d', inkSoft: '#5a4f43', slate: '#3f5b6e', forest: '#2f4a3a',
    gold: '#b88845', rule: 'rgba(42,36,29,0.13)',
  },
  // Option A — "Amplified": hot coral + vivid emerald + bright gold
  A: {
    bg: '#f8f1e7', paper: '#efe4d2', clay: '#d6502c', rust: '#a32d18',
    ink: '#251f18', inkSoft: '#564a3d', slate: '#2f6fae', forest: '#1f7a52',
    gold: '#e8a01f', rule: 'rgba(37,31,24,0.13)',
  },
  // Option B — "Spectrum": blaze + electric cobalt + dark indigo panel
  B: {
    bg: '#f7f2ea', paper: '#ece1d0', clay: '#f0410c', rust: '#b81f00',
    ink: '#1a1410', inkSoft: '#4c4234', slate: '#1f44ff', forest: '#141a2e',
    gold: '#ffb02e', rule: 'rgba(26,20,16,0.12)',
  },
};
window.BeyondFinishLinesES100Palettes = bfjPalettes;

function BeyondFinishLinesES100({ pal }) {
  const serif = { fontFamily: 'Newsreader, "Source Serif Pro", Georgia, serif', fontWeight: 400, letterSpacing: '-0.01em' };
  const sans = { fontFamily: 'Manrope, system-ui, sans-serif' };
  const mono = { fontFamily: '"IBM Plex Mono", ui-monospace, monospace', letterSpacing: '0.12em', textTransform: 'uppercase', fontSize: 11 };
  const t = pal || bfjPalettes.A;

  const Label = ({ children, color }) => <div style={{ ...mono, color: color || t.clay, marginBottom: 18 }}>— {children}</div>;
  const toneBg = (tone) => tone === 'forest' ? t.forest : tone === 'slate' ? t.slate : tone === 'clay' ? t.clay : t.paper;

  return (
    <div style={{ background: t.bg, color: t.ink, ...sans, fontSize: 16, lineHeight: 1.6 }}>
      {/* Nav */}
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '26px 60px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <svg width="26" height="26" viewBox="0 0 28 28"><path d="M2 22 Q 14 6, 26 22" fill="none" stroke={t.ink} strokeWidth="1.5" strokeLinecap="round" /><circle cx="14" cy="11" r="2" fill={t.clay} /></svg>
          <div style={{ ...serif, fontSize: 21, fontStyle: 'italic' }}>Beyond Finish Lines</div>
        </div>
        <div style={{ ...mono, color: t.inkSoft }}>Your race plan · For Justyna</div>
      </header>

      {/* Hero — letter opening */}
      <section style={{ padding: '50px 60px 70px' }}>
        <div style={{ ...mono, color: t.clay, marginBottom: 32 }}>— Race plan · Vol. XII · Written 23 June 2026 · after Manitou</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 56, alignItems: 'end' }}>
          <div>
            <h1 style={{ ...serif, fontSize: 88, lineHeight: 0.96, margin: 0, letterSpacing: '-0.03em' }}>
              Eastern States<br />100<span style={{ color: t.clay }}>.</span>
            </h1>
            <p style={{ ...serif, fontSize: 26, fontStyle: 'italic', color: t.inkSoft, margin: '28px 0 0', maxWidth: 580, lineHeight: 1.4 }}>
              Your fourth time on this trail, Justyna — and you come to it as the 2025 champion, fresh off a course-record
              win at Manitou. This isn&rsquo;t a plan to close a gap anymore. The gap you feared is gone. It&rsquo;s the plan
              to arrive at Waterville fresh, and race your own day at the front.
            </p>
          </div>
          <div style={{ background: t.paper, borderRadius: 8, padding: 32, border: `1px solid ${t.rule}` }}>
            <div style={{ ...mono, color: t.clay, marginBottom: 16 }}>The essentials</div>
            {[['Where', 'Waterville, Pennsylvania'], ['When', 'Sat 8 Aug 2026 · 05:00'], ['The course', '103 mi · 20,833 ft · 17 aid'], ['Our aim', 'race your day · 23:05 realistic'], ['You', 'Justyna · 50 · 2025 champ (24:49:36 CR)']].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: `1px solid ${t.rule}`, gap: 12 }}>
                <span style={{ ...mono, color: t.inkSoft, fontSize: 10, whiteSpace: 'nowrap' }}>{k}</span>
                <span style={{ ...serif, fontSize: 17, textAlign: 'right' }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The letter / what changed at Manitou */}
      <section style={{ padding: '90px 60px', background: t.paper, borderTop: `1px solid ${t.rule}`, borderBottom: `1px solid ${t.rule}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '0.4fr 1fr', gap: 64 }}>
          <Label>A note before we begin</Label>
          <div>
            <p style={{ ...serif, fontSize: 35, lineHeight: 1.3, margin: 0 }}>
              Justyna — everything changed at Manitou. You won it outright, a course record on the most descent-technical
              trail in the East, and your own data showed you descended faster than you climbed.
              <span style={{ color: t.clay }}> The weakness we feared was never real.</span>
            </p>
            <p style={{ fontSize: 16.5, color: t.inkSoft, marginTop: 28, lineHeight: 1.75, maxWidth: 740 }}>
              What looked like a descent problem was only ever a relative gap to a generational descender — and on this
              technical rock, that gap all but vanishes. You are the strongest climber in the field, on a climber&rsquo;s
              course. So we&rsquo;re not chasing fitness this summer; it&rsquo;s banked. The whole job now is to arrive
              fresh, heat-ready and healthy — and to race your own day. Everything below serves that.
            </p>
          </div>
        </div>
        <div style={{ marginTop: 64, padding: '56px 60px', background: t.ink, color: t.bg, borderRadius: 8, textAlign: 'center' }}>
          <div style={{ ...mono, color: t.gold, marginBottom: 24 }}>— Carry this with you</div>
          <div style={{ ...serif, fontSize: 54, fontStyle: 'italic', lineHeight: 1.12 }}>
            "Climb away. <span style={{ color: t.gold }}>Manage the rock.</span> Fat-fuel the first half."
          </div>
        </div>
      </section>

      {/* Three honest outcomes */}
      <section style={{ padding: '100px 60px' }}>
        <Label>The shape of the day</Label>
        <h2 style={{ ...serif, fontSize: 52, margin: '0 0 16px', letterSpacing: '-0.02em' }}>Three honest outcomes.</h2>
        <p style={{ maxWidth: 700, color: t.inkSoft, fontSize: 17, margin: '0 0 48px' }}>
          We plan around the middle one — but here&rsquo;s the truth of it: all three land at or under the women&rsquo;s
          course record of about 24:34. There&rsquo;s no clock to chase anymore. There&rsquo;s only your own best day,
          run patiently, on a course built for your strengths.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {[
            { tone: 'paper', tag: 'If everything clicks', time: '22:14', note: 'A clean day on your terms. You run under the course record — and even Kaylee\u2019s perfect day (22:30) doesn\u2019t catch you.' },
            { tone: 'clay', tag: 'What we plan for', time: '23:05', note: 'Solid, repeatable execution. Half an hour under the women\u2019s course record, and well clear of Kaylee\u2019s 25:25.', feature: true },
            { tone: 'paper', tag: 'A rougher day', time: '24:23', note: 'Legs that never quite arrive — and still at the course record, still comfortably ahead of the field. That\u2019s your floor now.' },
          ].map(s => (
            <div key={s.tag} style={{
              padding: 36, borderRadius: 8,
              background: s.feature ? t.clay : t.paper,
              color: s.feature ? t.bg : t.ink,
              border: `1px solid ${s.feature ? t.clay : t.rule}`,
            }}>
              <div style={{ ...mono, color: s.feature ? 'rgba(255,255,255,0.75)' : t.clay, marginBottom: 22 }}>{s.tag}</div>
              <div style={{ ...serif, fontSize: 60, lineHeight: 1 }}>{s.time}</div>
              <p style={{ fontSize: 14.5, margin: '20px 0 0', lineHeight: 1.6, opacity: s.feature ? 0.9 : 0.75 }}>{s.note}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 24, padding: '32px 40px', background: t.slate, color: t.bg, borderRadius: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
          <p style={{ ...serif, fontSize: 23, fontStyle: 'italic', margin: 0, maxWidth: 640, lineHeight: 1.35 }}>
            Don&rsquo;t carry Kaylee&rsquo;s name up the first climb. Read honestly, she&rsquo;s nearer 25:25 now — the chase
            has flipped, and the day belongs to whoever runs her own race best. That&rsquo;s you.
          </p>
          <div style={{ ...serif, fontSize: 64, color: t.gold, lineHeight: 1 }}>25:25</div>
        </div>
        <p style={{ fontSize: 15.5, color: t.inkSoft, marginTop: 28, lineHeight: 1.75, maxWidth: 840 }}>
          Why the change? Two honest reasons. The way we model finishing times was rebuilt — Kaylee&rsquo;s old 21:55 leaned
          on a single fast, smooth, low-climbing race, and the new method weighs how a runner climbs, rolls and descends
          separately, then holds that against this course&rsquo;s 20,833 feet and its long stretches of rock. And we looked
          again at her whole racing history matched to terrain — not just her best day — together with her two most recent
          sessions on ground like ours, where that flat-course speed simply doesn&rsquo;t carry. Both ways of seeing it land her near 25:25.
        </p>
        <p style={{ fontSize: 15, color: t.inkSoft, marginTop: 18, lineHeight: 1.75, maxWidth: 840 }}>
          And hold every one of these numbers lightly. A projection is only as honest as the data beneath it — how much there
          is, how recent, how clean. Right now we&rsquo;re working without any physiological numbers from you, Justyna — the
          very person this plan is for — and with only a thin record of your detailed workouts and race splits. So take these
          as the true shape of the day, not a promise; they&rsquo;ll sharpen as we feed in your own data and whatever Ironstone teaches us.
        </p>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginTop: 24, ...mono }}>
          <a href="race-history/justyna-wilson.html" style={{ color: t.clay, textDecoration: 'none', borderBottom: `1px solid ${t.clay}`, paddingBottom: 3 }}>Read Justyna&rsquo;s race history →</a>
          <a href="race-history/kaylee-frederick.html" style={{ color: t.inkSoft, textDecoration: 'none', borderBottom: `1px solid ${t.rule}`, paddingBottom: 3 }}>Kaylee&rsquo;s race history →</a>
        </div>
      </section>

      {/* The summer ahead — three races */}
      <section style={{ padding: '0 60px 100px' }}>
        <Label>The road to the start line</Label>
        <h2 style={{ ...serif, fontSize: 52, margin: '0 0 16px', letterSpacing: '-0.02em', maxWidth: 820 }}>
          Nine weeks, three races — and one is already won.
        </h2>
        <p style={{ maxWidth: 720, color: t.inkSoft, fontSize: 17, margin: '0 0 48px' }}>
          We never built a big block and hoped — the races carry the load. Manitou is done and banked, and we&rsquo;re in
          the recovery week now. At fifty, recovery isn&rsquo;t the gap between the work. It&rsquo;s where the work becomes fitness.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 48 }}>
          {[
            { tone: 'forest', ch: 'Race Three · won', name: 'Manitou\u2019s Revenge', date: 'June 20 · 54 mi', body: 'Done — and won. First female, 12:29:09, a new course record on the Devil\u2019s Path. You went to descent school and set the record. The question is answered.', feel: 'The record is yours.' },
            { tone: 'slate', ch: 'Race Two · ahead', name: 'Ironstone 100K', date: 'July 11 · 100 km', body: 'Now you race it — not a rehearsal. A real effort four weeks out, and your clearest look at Kaylee before August. The cost is recovery, and we\u2019ll protect it.', feel: 'Race it. Read her.' },
            { tone: 'clay', ch: 'Race One · the test', name: 'Eastern States 100', date: 'August 8 · 103 mi', body: 'The day it\u2019s all for — a climber\u2019s course that rewards everything you\u2019re best at. By now the fitness is banked; the only job left is to arrive fresh.', feel: 'Run your day.' },
          ].map(c => (
            <div key={c.ch} style={{ borderRadius: 8, overflow: 'hidden', background: toneBg(c.tone), color: t.bg, display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '32px 32px 24px' }}>
                <div style={{ ...mono, color: 'rgba(255,255,255,0.65)', marginBottom: 14 }}>{c.ch} · {c.date}</div>
                <div style={{ ...serif, fontSize: 36, lineHeight: 1.05, marginBottom: 20 }}>{c.name}.</div>
                <p style={{ fontSize: 14.5, color: 'rgba(255,255,255,0.85)', margin: 0, lineHeight: 1.65 }}>{c.body}</p>
              </div>
              <div style={{ marginTop: 'auto', padding: '16px 32px', background: 'rgba(0,0,0,0.18)', ...serif, fontStyle: 'italic', fontSize: 18 }}>{c.feel}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {[
            ['Weeks 1–2', 'Done — Manitou won', 'A light week to tune the legs, then the Devil\u2019s Path. You came home with the course record. \u2713'],
            ['Weeks 3–4', 'Recover, then rebuild', 'We\u2019re here now. Eight to ten true recovery days — at fifty, this isn\u2019t optional — then rolling tempo returns.'],
            ['Weeks 5–6', 'Race Ironstone, then heat', 'A real 100K and the Kaylee intel. Then the sauna block begins as you recover — heat banked for August.'],
            ['Weeks 7–9', 'Bridge, taper, race', 'One last touch of intensity, a long exhale into the taper, and a trail you\u2019ve finished three times waiting at the end.'],
          ].map(([wk, phase, note], i) => (
            <div key={wk} style={{ display: 'grid', gridTemplateColumns: '0.5fr 0.8fr 1.4fr', gap: 32, padding: '26px 0', borderTop: `1px solid ${t.rule}`, alignItems: 'baseline' }}>
              <div style={{ ...mono, color: t.slate, fontSize: 11 }}>{wk}</div>
              <div style={{ ...serif, fontSize: 24, fontStyle: 'italic', color: t.clay }}>{phase}</div>
              <p style={{ fontSize: 15.5, color: t.inkSoft, margin: 0, lineHeight: 1.6 }}>{note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Where the work goes — six focus areas */}
      <section style={{ padding: '100px 60px', background: t.paper, borderTop: `1px solid ${t.rule}` }}>
        <Label>Where the work goes</Label>
        <h2 style={{ ...serif, fontSize: 52, margin: '0 0 16px', letterSpacing: '-0.02em' }}>Six things, in order of what they’ll give back.</h2>
        <p style={{ maxWidth: 700, color: t.inkSoft, fontSize: 17, margin: '0 0 48px' }}>
          The data re-ranked everything — and Manitou rewrote the top of the list. The descents fell from a build to a
          maintenance. What matters most now is simply arriving fresh.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
          {[
            ['01', 'Recovery, above all', 'Three races in 49 days. At fifty this is the whole game now — protect the back-half strength that wins this race.'],
            ['02', 'Heat, fully banked', 'Pennsylvania August is warm and wet. The sauna block expands your blood volume — worth twenty minutes and nearly all the heat risk.'],
            ['03', 'Rolling-terrain endurance', 'The one real terrain gap left. Comfortable-hard efforts on undulating ground — the Wednesday and Friday work.'],
            ['04', 'Fueling, made efficient', 'Sixty grams an hour is your ceiling — so we win on efficiency, not volume. Stay aerobic early; spare your glycogen for the climbs.'],
            ['05', 'Descents, just maintained', 'Manitou proved them. We keep the strength and the technique ticking over — no longer chasing what you\u2019ve already shown.'],
            ['06', 'Quiet, quick aid stops', 'Free time across seventeen stations. We drill the routine until it costs you almost nothing.'],
          ].map(([n, h, d]) => (
            <div key={n} style={{ display: 'flex', gap: 24, padding: '24px 28px', background: t.bg, borderRadius: 8, border: `1px solid ${t.rule}` }}>
              <div style={{ ...serif, fontSize: 40, color: t.clay, lineHeight: 1 }}>{n}</div>
              <div>
                <div style={{ ...serif, fontSize: 25, color: t.ink, marginBottom: 6 }}>{h}</div>
                <p style={{ fontSize: 14.5, color: t.inkSoft, margin: 0, lineHeight: 1.6 }}>{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How the race will feel — the five sections as a journey */}
      <section style={{ padding: '100px 60px' }}>
        <Label>How race day will unfold</Label>
        <h2 style={{ ...serif, fontSize: 52, margin: '0 0 12px', letterSpacing: '-0.02em' }}>Five movements to a finish.</h2>
        <p style={{ color: t.inkSoft, fontSize: 16, margin: '0 0 48px', maxWidth: 680 }}>Even effort, not even pace. The race is won in the last thirty miles — so the first fifty are run by fuel, not legs. Let each section be exactly what it is.</p>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {[
            ['Miles 0–25', 'Settle in', 'Even effort, about a 9:30 feel — and run by fuel, not legs. Don\u2019t look for Kaylee. The race doesn\u2019t start here; this is just patience.', 'forest'],
            ['Miles 25–50', 'Climb away', 'Lean into your weapon. Power-hike anything steep from the gun, press the runnable climbs — this is where the race is decided. The low patch comes around 39–53: fuel through it, take your first caffeine.', 'forest'],
            ['Miles 50–75', 'Manage the rock', 'Cedar Run to Blackwell. Quick feet, short steps, off the brakes — protect your quads for the climbs still to come. No one takes time from you here.', 'slate'],
            ['Miles 75–95', 'The back half', 'Sky Top and the Barrens — the dark miles, where the race is won on legs you saved. Run your cues, ice the hat, take the caffeinated gel, keep moving.', 'clay'],
            ['Miles 95–103', 'Empty the tank', 'You\u2019ve stood here three times before. There\u2019s nothing left to save it for. Spend every last thing you brought.', 'rust'],
          ].map(([dist, name, note, tone], i) => (
            <div key={name} style={{ display: 'flex', alignItems: 'flex-start', gap: 28, padding: '24px 0', borderBottom: `1px solid ${t.rule}` }}>
              <div style={{ width: 14, height: 14, borderRadius: 999, background: tone === 'rust' ? t.rust : toneBg(tone), marginTop: 8, flexShrink: 0, border: `2px solid ${t.bg}`, boxShadow: `0 0 0 1px ${t.rule}` }} />
              <div style={{ width: 180, flexShrink: 0 }}>
                <div style={{ ...serif, fontSize: 25 }}>{name}</div>
                <div style={{ ...mono, color: t.inkSoft, fontSize: 10, marginTop: 4 }}>{dist}</div>
              </div>
              <p style={{ fontSize: 15.5, color: t.inkSoft, margin: 0, lineHeight: 1.6 }}>{note}</p>
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 40 }}>
          {[
            ['If Kaylee leads early', 'She may, on the smooth ground — let her. The climbs and the rock bring her back. Run your own patient day, not hers; you\u2019re the favorite now.'],
            ['If you\u2019re together late', 'In contact at mile 80, the edge is yours — your course knowledge, your back-half nerve, three finishes here to her none. Ahead of her? Press, and give her nothing.'],
          ].map(([h, d]) => (
            <div key={h} style={{ padding: 32, background: t.paper, borderRadius: 8, border: `1px solid ${t.rule}` }}>
              <div style={{ ...serif, fontSize: 25, marginBottom: 12, color: t.rust }}>{h}</div>
              <p style={{ fontSize: 15, color: t.inkSoft, margin: 0, lineHeight: 1.65 }}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Fueling — warm */}
      <section style={{ padding: '100px 60px', background: t.forest, color: t.bg }}>
        <Label color={t.gold}>Eating to the finish</Label>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
          <div>
            <h2 style={{ ...serif, fontSize: 50, margin: '0 0 24px', letterSpacing: '-0.02em' }}>
              Sixty grams an hour. <span style={{ fontStyle: 'italic', color: t.gold }}>Every one of them counts.</span>
            </h2>
            <p style={{ fontSize: 16.5, color: 'rgba(247,241,232,0.8)', lineHeight: 1.7, margin: '0 0 32px' }}>
              You can&rsquo;t out-eat your rivals, and you don&rsquo;t need to. Sixty grams is your ceiling — so we win on
              efficiency instead: stay aerobic through the first half, spare your glycogen for the climbs that decide the day.
              We&rsquo;ll rehearse the exact rate at Ironstone so race day asks nothing new of you.
            </p>
            <div style={{ background: 'rgba(0,0,0,0.18)', borderRadius: 8, padding: 28 }}>
              {[
                ['Carbohydrate — your ceiling, and we plan to it', '60 g/hr'],
                ['The blend, sipped steady (start topped off)', '2:1 glu:fru'],
                ['Sodium to your sweat rate, once the heat comes', 'ice the hat'],
              ].map(([item, val]) => (
                <div key={item} style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.14)', gap: 16 }}>
                  <span style={{ fontSize: 15 }}>{item}</span>
                  <span style={{ ...mono, color: t.gold, fontSize: 11, whiteSpace: 'nowrap' }}>{val}</span>
                </div>
              ))}
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 18 }}>
                <span style={{ ...serif, fontSize: 23, fontStyle: 'italic' }}>If the stomach turns</span>
                <span style={{ ...serif, fontSize: 23, color: t.gold }}>40 g · water first</span>
              </div>
            </div>
            <p style={{ fontSize: 14, color: 'rgba(247,241,232,0.6)', marginTop: 20, lineHeight: 1.6 }}>
              Ease to forty grams for an hour, sip water first, then rebuild gently. It almost always passes. Don’t panic — just keep eating.
            </p>
          </div>
          <div>
            <div style={{ ...mono, color: t.gold, marginBottom: 20 }}>The whole summer, in one frame</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {[
                ['Jun 20', 'Manitou · 54 mi · won · course record \u2713'],
                ['Jul 11', 'Ironstone · 100 km · you race it'],
                ['Aug 8', 'Eastern States · 103 mi · the day it\u2019s all for'],
              ].map(([time, what]) => (
                <div key={time} style={{ display: 'flex', gap: 20, padding: '18px 0', borderBottom: '1px solid rgba(255,255,255,0.14)' }}>
                  <span style={{ ...serif, fontSize: 26, color: t.gold, width: 96, flexShrink: 0 }}>{time}</span>
                  <span style={{ fontSize: 15.5, color: 'rgba(247,241,232,0.85)', alignSelf: 'center' }}>{what}</span>
                </div>
              ))}
            </div>
            <div style={{ ...serif, fontStyle: 'italic', fontSize: 20, color: 'rgba(247,241,232,0.85)', marginTop: 28, lineHeight: 1.5 }}>
              Three ultras, forty-six thousand feet of climbing, forty-nine days. The fitness is already banked —
              which is why <span style={{ color: t.gold }}>arriving fresh</span> is the only thing that matters now.
            </div>
          </div>
        </div>
      </section>

      {/* Heat + recovery, warm cards */}
      <section style={{ padding: '100px 60px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
        <div>
          <Label color={t.slate}>The heat, and a quiet advantage</Label>
          <div style={{ background: t.slate, color: t.bg, borderRadius: 8, padding: 32 }}>
            <p style={{ ...serif, fontSize: 24, lineHeight: 1.35, margin: '0 0 20px' }}>
              Pennsylvania in August is warm and humid — and we can turn that into an edge instead of an enemy.
            </p>
            <p style={{ fontSize: 14.5, color: 'rgba(247,241,232,0.8)', margin: 0, lineHeight: 1.65 }}>
              From mid-July, twenty-five minutes in the sauna after your easy runs, four or five days a week, right
              through the taper. Your blood volume expands, and the benefit stays with you for weeks — worth twenty
              minutes on race day and nearly all the heat risk. We add no new heat in race week — by then the work is done.
            </p>
          </div>
        </div>
        <div>
          <Label>Listening to your body</Label>
          <p style={{ ...serif, fontSize: 24, fontStyle: 'italic', color: t.inkSoft, margin: '0 0 24px', lineHeight: 1.4 }}>
            At fifty, with the fitness banked, this is the most important page now. Any one of these, and a hard day becomes an easy one — no guilt.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {[
              ['Your HRV', 'down 7% for two mornings'],
              ['Resting heart rate', 'up 5 beats for two mornings'],
              ['Morning energy', 'below a 6 out of 10'],
              ['Sleep', 'under 7 hours, two nights'],
              ['Body weight', 'down 2% and staying there'],
              ['Sore quads', 'pain on the stairs lingers'],
            ].map(([k, v]) => (
              <div key={k} style={{ background: t.paper, borderRadius: 8, padding: 18, border: `1px solid ${t.rule}` }}>
                <div style={{ ...serif, fontSize: 18, color: t.ink }}>{k}</div>
                <div style={{ fontSize: 13, color: t.inkSoft, marginTop: 4, lineHeight: 1.45 }}>{v}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13.5, color: t.inkSoft, marginTop: 16, lineHeight: 1.6 }}>
            And if two of them appear together in the week after Ironstone — we stop completely for forty-eight hours. The races are the training; rest is where they become fitness.
          </p>
        </div>
      </section>

      {/* When it gets hard */}
      <section style={{ padding: '0 60px 100px' }}>
        <Label color={t.rust}>When it gets hard — and it will</Label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
          {[
            ['When your quads start to go', 'Manitou armoured these legs — but late is late. Shorten your stride, quicken your steps, get off the brakes, and trust the work you\u2019ve already done.'],
            ['When your stomach turns', 'Nausea, no desire to eat. Ease to forty grams an hour, sip water first, and rebuild. Don\u2019t let one bad patch become a death spiral.'],
            ['When the heat presses', 'If you stop sweating, that\u2019s the warning. Force fluid and salt, ice the hat, cool down at the next aid, and slow until the sweat comes back. PA heat is wet heat — respect it.'],
            ['When the voice says quit', 'It\u2019ll come somewhere past mile 70, in the Barrens dark. That\u2019s your mind, not your body. Eat, take the caffeine, set one small goal — and never, ever decide to stop while you\u2019re still moving.'],
          ].map(([h, d]) => (
            <div key={h} style={{ padding: 32, borderRadius: 8, border: `1px solid ${t.rule}`, background: t.bg }}>
              <div style={{ ...serif, fontSize: 27, color: t.rust, marginBottom: 14 }}>{h}</div>
              <p style={{ fontSize: 15.5, color: t.inkSoft, margin: 0, lineHeight: 1.65 }}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section style={{ padding: '120px 60px', textAlign: 'center', background: t.paper, borderTop: `1px solid ${t.rule}` }}>
        <div style={{ ...mono, color: t.clay, marginBottom: 28 }}>— See you at Waterville</div>
        <h2 style={{ ...serif, fontSize: 68, lineHeight: 1.05, margin: '0 auto 28px', maxWidth: 940, letterSpacing: '-0.025em' }}>
          You already know this trail. <em style={{ fontStyle: 'italic', color: t.clay }}>This time you arrive as the favorite.</em>
        </h2>
        <p style={{ fontSize: 18, color: t.inkSoft, maxWidth: 600, margin: '0 auto', lineHeight: 1.6 }}>
          Run your patient day. You&rsquo;ve already banked the hard miles — Manitou is won, Ironstone is ahead. And whatever
          the clock says in August — a course record, a fourth title, or simply the smartest race you&rsquo;ve ever run —
          you&rsquo;ll run it as the strongest climber on a climber&rsquo;s course.
        </p>
      </section>

      {/* Footer */}
      <footer style={{ padding: '52px 60px', background: t.ink, color: t.bg }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <div style={{ ...serif, fontSize: 26, fontStyle: 'italic' }}>Beyond Finish Lines</div>
            <div style={{ ...mono, color: t.gold, marginTop: 12 }}>Endurance is bigger than race day.</div>
          </div>
          <div style={{ maxWidth: 440, fontSize: 12, color: 'rgba(247,241,232,0.55)', lineHeight: 1.7, textAlign: 'right' }}>
            <div style={{ ...mono, color: 'rgba(247,241,232,0.5)', marginBottom: 10, fontSize: 10 }}>Built on the evidence + the v0.7 engine · updated 23 June 2026</div>
            Smyth 2022 · Maunder 2021 · Vernillo/Giovanelli 2017 · Giovanelli 2016 · Costa 2017 · Podlogar 2022 · Périard 2021 · Marcora 2009
            <div style={{ display: 'flex', gap: 18, justifyContent: 'flex-end', marginTop: 16, flexWrap: 'wrap' }}>
              <a href="race-history/justyna-wilson.html" style={{ ...mono, fontSize: 10, color: t.gold, textDecoration: 'none' }}>Justyna&rsquo;s race history ↗</a>
              <a href="race-history/kaylee-frederick.html" style={{ ...mono, fontSize: 10, color: 'rgba(247,241,232,0.6)', textDecoration: 'none' }}>Kaylee&rsquo;s race history ↗</a>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 40, paddingTop: 22, borderTop: '1px solid rgba(255,255,255,0.15)', display: 'flex', justifyContent: 'space-between', ...mono, color: 'rgba(247,241,232,0.5)' }}>
          <span>© 2026 Beyond Finish Lines · for Justyna Wilson</span>
          <span>Eastern States 100 · Waterville PA · 08.08.2026</span>
        </div>
      </footer>
    </div>
  );
}

window.BeyondFinishLinesES100 = BeyondFinishLinesES100;
