export function track(event, props = {}) {
  try {
    if (window.posthog) window.posthog.capture(event, props);
  } catch {}
}
