// Replace with your actual API endpoint
const url = '86bce6d4ce97c7c345a28274621e20a97a82a084f845560f6ead0009afa2b189'; // Placeholder

// Replace with your actual API token (not recommended to store directly in code)
const headers = {
    Authorization: 'Bearer YOUR_API_TOKEN' // Placeholder
};

const form = document.getElementById('lootlink-form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await axios.post(url, data, { headers: headers });
    const lootlink = response.data.lootlink; // Adjust based on your API response structure
    resultDiv.textContent = `Your Lootlink: ${lootlink}`;
  } catch (error) {
    console.error(error);
    resultDiv.textContent = 'Error generating Lootlink. Check the console for details.';
  }
});
