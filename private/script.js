document.getElementById('lootlabsForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const url = document.getElementById('url').value;
  const tierId = document.getElementById('tierId').value;
  const numberOfTasks = document.getElementById('tasks').value;
  const theme = document.getElementById('theme').value;
  const thumbnail = document.getElementById('thumbnail').value;

  const data = { title, url, tier_id: tierId, number_of_tasks: numberOfTasks, theme, thumbnail };

  const headers = {
    Authorization: '86bce6d4ce97c7c345a28274621e20a97a82a084f845560f6ead0009afa2b189',
    'Content-Type': 'application/json'
  };

  try {
    const response = await fetch('https://be.lootlabs.gg/api/lootlabs/content_locker', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    });

    const result = await response.json();
    document.getElementById('response').innerText = JSON.stringify(result, null, 2);
  } catch (error) {
    document.getElementById('response').innerText = `Error: ${error.message}`;
  }
});
