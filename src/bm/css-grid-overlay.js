javascript:(function(){
    const OVERLAY_CLASS = 'css-grid-overlay__overlay';
    const ATTR_APPLIED = 'data-css-grid-overlay-applied';
    const ATTR_PREV_POS = 'data-css-grid-overlay-prev-position';
    const PANEL_ID = 'css-grid-overlay__panel';

    // Toggle off if already applied
    const existingOverlays = document.querySelectorAll('.' + OVERLAY_CLASS);
    const existingPanel = document.getElementById(PANEL_ID);
    if (existingOverlays.length || existingPanel) {
        existingOverlays.forEach(function(el){ el.remove(); });
        document.querySelectorAll('[' + ATTR_APPLIED + '="1"]').forEach(function(el){
            const prev = el.getAttribute(ATTR_PREV_POS);
            if (prev !== null) {
                el.style.position = prev;
                el.removeAttribute(ATTR_PREV_POS);
            } else {
                el.style.position = '';
            }
            el.removeAttribute(ATTR_APPLIED);
        });
        if (existingPanel) existingPanel.remove();
        return;
    }

    function isGridElement(element){
        const cs = window.getComputedStyle(element);
        return cs.display === 'grid' || cs.display === 'inline-grid';
    }

    const grids = Array.prototype.filter.call(document.querySelectorAll('*'), isGridElement);

    const panel = document.createElement('div');
    panel.id = PANEL_ID;
    panel.style.cssText = 'position:fixed;top:20px;right:20px;padding:15px;background:white;border-radius:8px;box-shadow:0 2px 10px rgba(0,0,0,0.1);z-index:2147483647;font:14px/1.4 system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;';
    panel.innerHTML = '<div style="margin-bottom:10px;"><strong>CSS Grid Elements: ' + grids.length + '</strong><button style="float:right;margin-left:10px;" aria-label="Close">&times;</button></div><div style="color:' + (grids.length ? '#4CAF50' : '#ff4444') + ';">' + (grids.length ? 'Highlighted grid containers. Click × to remove.' : 'No grid containers found.') + '</div>';
    panel.querySelector('button').onclick = function(){
        document.querySelectorAll('.' + OVERLAY_CLASS).forEach(function(el){ el.remove(); });
        document.querySelectorAll('[' + ATTR_APPLIED + '="1"]').forEach(function(el){
            const prev = el.getAttribute(ATTR_PREV_POS);
            if (prev !== null) {
                el.style.position = prev;
                el.removeAttribute(ATTR_PREV_POS);
            } else {
                el.style.position = '';
            }
            el.removeAttribute(ATTR_APPLIED);
        });
        panel.remove();
    };
    document.body.appendChild(panel);

    grids.forEach(function(gridEl){
        const overlay = document.createElement('div');
        overlay.className = OVERLAY_CLASS;
        overlay.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;background:repeating-linear-gradient(0deg, rgba(0,255,0,0.15), rgba(0,255,0,0.15) 1px, transparent 1px, transparent 12px), repeating-linear-gradient(90deg, rgba(0,255,0,0.15), rgba(0,255,0,0.15) 1px, transparent 1px, transparent 12px);pointer-events:none;z-index:2147483646;';
        const cs = window.getComputedStyle(gridEl);
        if (cs.position === 'static') {
            gridEl.setAttribute(ATTR_PREV_POS, gridEl.style.position || '');
            gridEl.style.position = 'relative';
            gridEl.setAttribute(ATTR_APPLIED, '1');
        }
        gridEl.appendChild(overlay);
    });
})();