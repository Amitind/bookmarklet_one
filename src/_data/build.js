// Expose a simple build-time cache buster (YYYYMMDDHHmm) to append to assets
module.exports = {
  cacheBuster: (() => {
    const now = new Date();
    const pad = (num) => String(num).padStart(2, '0');
    const y = now.getFullYear();
    const m = pad(now.getMonth() + 1);
    const d = pad(now.getDate());
    const hh = pad(now.getHours());
    const mm = pad(now.getMinutes());
    return `${y}${m}${d}${hh}${mm}`;
  })(),
};


