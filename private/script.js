document.getElementById('createLinkButton').addEventListener('click', async () => {
    const title = document.getElementById('title').value;
    const url = document.getElementById('url').value;
    const tierId = document.getElementById('tier_id').value;
    const numberOfTasks = document.getElementById('number_of_tasks').value;
    const theme = document.getElementById('theme').value;
    const thumbnail = document.getElementById('thumbnail').value;

    // Send POST request to your Vercel backend API
    const response = await fetch('https://moopy-api.vercel.app/api/lootlabs/content-locker', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title,
            url,
            tier_id: tierId,
            number_of_tasks: numberOfTasks,
            theme,
            thumbnail: thumbnail || null, // Optional
        }),
    });

    // Process response from your backend API
    const data = await response.json();

    const resultDiv = document.getElementById('result');
    
    if (data.error) {
        resultDiv.innerHTML = `<p id="error">Error: ${data.error}</p>`;
    } else {
        resultDiv.innerHTML = `<p id="success">Link successfully created! <a href="${data.link}" target="_blank">Click here</a> to visit.</p>`;
    }
});
