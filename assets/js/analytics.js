// Lightweight analytics wrapper (Plausible-compatible).
// Add in your HTML head: <script defer data-domain="YOUR_DOMAIN" src="https://plausible.io/js/script.js"></script>
// Then call track('EventName', {props}). Safe no-op if Plausible isn't present.

export function track(event, props){
  try {
    if (window.plausible) {
      window.plausible(event, { props });
    }
  } catch {}
}
