/* Ghost one-liners for the light-theme ambient layer (rendered in
   BaseLayout.astro). Purely decorative terminal snippets that
   drift up the page like a session left running behind the
   paper — IT ops meets film photography, the site's two halves.

   Order matters: each line's lane, duration, phase and resting
   spot are assigned by index in BaseLayout's CSS, so the scatter
   is identical on every visit. Keep entries short — long ones
   get clipped against narrow viewports. */

export const ambientCommands: readonly string[] = [
  'whoami',
  'uptime --pretty',
  'ls ~/film/2026',
  'tail -f /var/log/light.log',
  'git push origin main',
  'expose 1/125 f/1.8',
  'develop --roll 36exp',
  'systemctl status darkroom',
  'rsync -av ~/shots/ archive/',
  'cron 0 5 * * * sunrise',
  'make coffee && make film',
  'ping -c 3 darkroom.local',
];
