import axios from 'axios';

async function fetchData() {
  try {
    const response = await axios.get('http://localhost/api/add', {
      headers: {
        'key': 'gxKgVoKnpyzu2aZbboZH9R8RvQEKCw5m',
        'url': 'https://archive.org/download/20250421-onerous-abstruse-mom-you-why-y-sb-2c-azw-mcnrz-oki-source/20250421_OnerousAbstruseMomYouWHY-ySb2cAzwMCNrzOKI_source.ia.mp4',  
        'type': 'clips',  
        'title': 'Exemple de vidéo',  
        'description': 'Une description courte de la vidéo',  
        'cc': 'Sous-titres en français',
        'picture': "https://archive.org/download/20250421-onerous-abstruse-mom-you-why-y-sb-2c-azw-mcnrz-oki-source/__ia_thumb.jpg" 
      },
    });

    console.log(response.data);
  } catch (err) {
    console.error('Error:', err);
  }
}

fetchData();