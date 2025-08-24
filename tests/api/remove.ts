import axios from 'axios';

async function fetchData() {
  try {
  const response = await axios.get('http://localhost/api/remove', {
    headers: {
      'key': 'gxKgVoKnpyzu2aZbboZH9R8RvQEKCw5m', // La clé que tu envoies
      'type': 'clips',
      'id': '68715d514e4db95de570bb64',
    },
  });

    console.log(response.data);
  } catch (err) {
    console.error('Error:', err);
  }
}

fetchData();