const createLootLabsLink = async () => {
  // Collect form data
  const requestData = {
    title: document.querySelector('#title').value,
    url: document.querySelector('#url').value,
    tier_id: document.querySelector('#tier_id').value,
    number_of_tasks: document.querySelector('#number_of_tasks').value,
    theme: document.querySelector('#theme').value,
    thumbnail: document.querySelector('#thumbnail').value || null, // Optional
  };

  try {
    // Send a POST request to your backend API
    const response = await fetch('/api/lootlabs/content-locker', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    // Parse the response
    const result = await response.json();

    // Display the result
    if (response.ok) {
      console.log('LootLabs Link Created:', result);
      document.querySelector('#result').textContent = JSON.stringify(result, null, 2);
    } else {
      console.error('Error:', result);
      document.querySelector('#result').textContent = `Error: ${result.error}`;
    }
  } catch (error) {
    console.error('Error:', error);
    document.querySelector('#result').textContent = `Error: ${error.message}`;
  }
};

// Attach the function to the "Create Link" button
document.querySelector('#create-link-button').addEventListener('click', createLootLabsLink);
