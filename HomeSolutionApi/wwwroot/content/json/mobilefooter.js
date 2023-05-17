function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            alert("Gmail info has been copied");
        })
        .catch((err) => {
            console.error('Failed to copy text: ', err);
        });
}
