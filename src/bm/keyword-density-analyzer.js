javascript:(function(){
    const text = document.body.innerText;
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    const wordCount = words.length;
    const wordFreq = {};
    
    words.forEach(word => {
        if (word.length > 3) { // Ignore short words
            wordFreq[word] = (wordFreq[word] || 0) + 1;
        }
    });
    
    const sortedWords = Object.entries(wordFreq)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 10);
    
    const density = sortedWords.map(([word, count]) => ({
        word,
        count,
        percentage: ((count / wordCount) * 100).toFixed(2)
    }));
    
    const result = density.map(({word, count, percentage}) => 
        `${word}: ${count} occurrences (${percentage}%)`
    ).join('\n');
    
    alert('Top 10 Keywords by Density:\n\n' + result);
})(); 