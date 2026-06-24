// Shared palette A/B(/Original) switch for the ES100 brand pages.
// usePalette() — React state synced to localStorage + cross-page/tab.
// <PaletteSwitch/> — always-visible floating segmented control.
// Load AFTER React, BEFORE the page mount script.

const ES_PAL_KEY = 'es100_palette_v1';
const ES_PAL_LABELS = { O: 'Original', A: 'Amplified', B: 'Spectrum' };
const ES_PAL_SUB = {
  O: 'The current calm palette',
  A: 'Each brand, turned up — its own hue, louder',
  B: 'One unified electric system — cobalt + blaze',
};

function readVariant() {
  try {
    const v = localStorage.getItem(ES_PAL_KEY);
    return v === 'B' || v === 'O' ? v : 'A';
  } catch (e) { return 'A'; }
}

// Reload-based switch: set the choice, then re-mount the page with it.
// Mount-time palette reading is reliable; a live in-place re-render proved
// flaky under in-browser Babel + this React root, so we re-mount instead.
function es100SetPalette(v) {
  try { localStorage.setItem(ES_PAL_KEY, v); } catch (e) {}
  try { sessionStorage.setItem('es100_scroll', String(window.scrollY || 0)); } catch (e) {}
  location.reload();
}

// Restore scroll after a palette reload (no-op on first visit).
function es100RestoreScroll() {
  try {
    const y = sessionStorage.getItem('es100_scroll');
    if (y != null) { sessionStorage.removeItem('es100_scroll'); window.scrollTo(0, parseInt(y, 10) || 0); }
  } catch (e) {}
}

function usePalette() {
  const variant = readVariant();
  return { variant, setVariant: es100SetPalette };
}

function PaletteSwitch({ variant, setVariant, options, anchor }) {
  options = options || ['A', 'B'];
  const pos = anchor === 'top-right'
    ? { top: 18, right: 18 }
    : anchor === 'bottom-center'
    ? { bottom: 78, left: '50%', transform: 'translateX(-50%)' }
    : { top: 18, left: '50%', transform: 'translateX(-50%)' };
  const mono = { fontFamily: '"IBM Plex Mono", ui-monospace, monospace', letterSpacing: '0.1em', textTransform: 'uppercase' };
  return (
    <div style={{
      position: 'fixed', zIndex: 10000, ...pos,
      display: 'flex', alignItems: 'center', gap: 10,
      padding: '7px 9px 7px 16px', borderRadius: 999,
      background: 'rgba(12,13,16,0.93)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
      boxShadow: '0 12px 34px rgba(0,0,0,0.32)',
    }}>
      <div style={{ ...mono, fontSize: 9.5, color: 'rgba(255,255,255,0.5)' }}>Palette</div>
      <div style={{ display: 'flex', gap: 3, background: 'rgba(255,255,255,0.08)', borderRadius: 999, padding: 3 }}>
        {options.map(o => {
          const active = variant === o;
          return (
            <button key={o} onClick={() => setVariant(o)} title={ES_PAL_SUB[o]} style={{
              ...mono, fontSize: 11, letterSpacing: '0.06em', textTransform: 'none', fontWeight: 600,
              border: 'none', cursor: 'pointer', borderRadius: 999, padding: '7px 15px',
              background: active ? '#ffffff' : 'transparent',
              color: active ? '#0c0d10' : 'rgba(255,255,255,0.66)',
              transition: 'all .15s ease',
            }}>
              {ES_PAL_LABELS[o]}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Convenience: wrap a single brand component into a self-contained palette-aware page.
// usage: <PalettePage Component={FarHorizonES100} palettes={FarHorizonES100Palettes} />
function PalettePage({ Component, palettes, options }) {
  const { variant, setVariant } = usePalette();
  React.useEffect(() => { es100RestoreScroll(); }, []);
  const pal = palettes[variant] || palettes.A;
  return (
    <React.Fragment>
      <PaletteSwitch variant={variant} setVariant={setVariant} options={options} anchor="bottom-center" />
      <Component pal={pal} />
    </React.Fragment>
  );
}

Object.assign(window, { usePalette, PaletteSwitch, PalettePage, ES_PAL_LABELS, ES_PAL_SUB, readVariant, es100SetPalette, es100RestoreScroll });
