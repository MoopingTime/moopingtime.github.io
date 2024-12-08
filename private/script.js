document.getElementById('lootlabsForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const url = document.getElementById('url').value;
  const tierId = document.getElementById('tierId').value;
  const numberOfTasks = document.getElementById('tasks').value;
  const theme = document.getElementById('theme').value;
  const thumbnail = document.getElementById('thumbnail').value;

  const data = {
    title,
    url,
    tier_id: tierId,
    number_of_tasks: numberOfTasks,
    theme,
    thumbnail: thumbnail || null, // Optional field
  };

  try {
    const response = await fetch('https://moopy-api.vercel.app/api/lootlabs/content-locker', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    document.getElementById('response').innerText = JSON.stringify(result, null, 2);
  } catch (error) {
    document.getElementById('response').innerText = `Error: ${error.message}`;
  }
});
