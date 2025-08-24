import axios from 'axios';

async function fetchData() {
  try {
    const response = await axios.get('http://localhost/api/add', {
      headers: {
        'key': 'gxKgVoKnpyzu2aZbboZH9R8RvQEKCw5m',
        'url': 'https://media.discordapp.net/attachments/.../video.mp4',  
        'type': 'clips',  
        'title': 'Exemple de vidéo',  
        'description': 'Une description courte de la vidéo',  
        'cc': 'Sous-titres en français',
        'picture': "...." 
      },
    });

    console.log(response.data);
  } catch (err) {
    console.error('Error:', err);
  }
}

fetchData();