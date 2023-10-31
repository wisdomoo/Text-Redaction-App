document.addEventListener("DOMContentLoaded", () => {
    const originalText = document.getElementById("originalText");
    const redactWords = document.getElementById("redactWords");
    const redactButton = document.getElementById("redactButton");
    const redactedText = document.getElementById("redactedText");

    redactButton.addEventListener("click", () => {
        const textToRedact = originalText.value;
        const wordsToRedact = redactWords.value.split(" ");
        
        // Regular expression pattern to match specified words
        const redactPattern = new RegExp(wordsToRedact.map(word => `\\b${word}\\b`).join("|"), "gi");
        
        // Redact the specified words with asterisks
        const redacted = textToRedact.replace(redactPattern, "****");
        
        redactedText.value = redacted;
    });
});
