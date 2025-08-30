javascript:(function () {
    const inlineStyles = Array.from(document.getElementsByTagName('style'));
    const linkElements = Array.from(document.getElementsByTagName('link'));

    const win = window.open();
    if (!win) {
        alert('Popup blocked. Please allow popups for this site to view extracted stylesheets.');
        return;
    }

    const d = win.document;
    d.open();
    d.write('<!doctype html><html><head><meta charset="utf-8"></head><body></body></html>');
    d.close();

    // Ensure relative URLs resolve correctly to the source page
    const base = d.createElement('base');
    base.href = location.href;
    d.head.appendChild(base);

    const b = d.body;

    function trimText(text) {
        return (text || '').replace(/^\s*\n/, '').replace(/\s*$/, '');
    }

    function add(node) {
        b.appendChild(node);
    }

    function make(tag) {
        return d.createElement(tag);
    }

    function makeText(tag, text) {
        const el = make(tag);
        el.appendChild(d.createTextNode(text));
        return el;
    }

    // Style iframes similar to the original
    add(makeText('style', 'iframe{width:100%;height:18em;border:1px solid;}'));
    add(makeText('style', 'pre{width:100%;height:18em;border:1px solid;overflow-x:auto;}'));

    d.title = 'Style sheets in ' + location.href;
    add(makeText('h3', d.title));

    // Inline <style> blocks
    for (let i = 0; i < inlineStyles.length; i++) {
        const s = inlineStyles[i];
        const titleSuffix = s.title ? ' title="' + s.title + '"' : '';
        add(makeText('h4', 'Inline style sheet' + titleSuffix));
        add(makeText('pre', trimText(s.textContent || '')));
    }

    // <link rel="stylesheet"> blocks with iframe previews
    for (let i = 0; i < linkElements.length; i++) {
        const link = linkElements[i];
        const rel = (link.getAttribute('rel') || '');
        const tokens = rel.split(' ');
        let isStylesheet = false;
        for (let j = 0; j < tokens.length; j++) {
            if (tokens[j].toLowerCase() === 'stylesheet') {
                isStylesheet = true;
                break;
            }
        }
        if (!isStylesheet) continue;

        const titleSuffix = link.title ? ' title="' + link.title + '"' : '';
        add(makeText('h4', 'link rel="' + link.rel + '" href="' + link.href + '"' + titleSuffix));
        const iframe = make('iframe');
        iframe.src = link.href;
        add(iframe);
    }
})();