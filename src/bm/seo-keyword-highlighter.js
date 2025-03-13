javascript:(function(){
    const keyword = prompt('Enter keyword to highlight:');
    if (!keyword) return;
    
    const regex = new RegExp(keyword, 'gi');
    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );
    
    const nodes = [];
    while (walker.nextNode()) {
        if (walker.currentNode.nodeValue.match(regex)) {
            nodes.push(walker.currentNode);
        }
    }
    
    nodes.forEach(node => {
        const span = document.createElement('span');
        span.innerHTML = node.nodeValue.replace(regex, match => 
            `<mark style="background-color: yellow; padding: 0 2px;">${match}</mark>`
        );
        node.parentNode.replaceChild(span, node);
    });
})(); 