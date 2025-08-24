import axios from 'axios';

async function fetchData() {
  try {
    const response = await axios.get('http://localhost/api/getAllData', {
      headers: {
        'type': 'clips',
        'sortby': 'createAt',
        'sortorder': -1,
        'limit': 2
      },
    });

    console.log(response.data);
  } catch (err) {
    console.error('Error:', err);
  }
}

fetchData();