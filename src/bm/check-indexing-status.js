javascript:(function(){
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.google.com/search?q=site:${url}`, '_blank');
})(); 