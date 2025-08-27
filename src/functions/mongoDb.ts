import { MongoClient, ObjectId } from 'mongodb';

async function connectToMongoDB() {
  const client = new MongoClient("mongodb://localhost:27017/");
  await client.connect();
  return client;
}

export const addData = async (collectionName: string, data: any) => {
  if (!data || typeof data !== 'object') {
    throw new Error('Les données doivent être un objet JSON valide.');
  }

  const client = await connectToMongoDB();
  const db = client.db('AkaruuArchive');
  const collection = db.collection(collectionName);

  try {
    const result = await collection.insertOne(data);

    return result;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Erreur d'ajout des données dans la collection ${collectionName}: ${error.message}`);
    } else {
      throw new Error(`Erreur inconnue lors de l'ajout des données dans la collection ${collectionName}`);
    };
  } finally {
    await client.close();
  };;
};

export const deleteData = async (collectionName: string, id: string) => {
  const client = await connectToMongoDB();
  const db = client.db('AkaruuArchive');
  const collection = db.collection(collectionName);

  const objectId = new ObjectId(id);

  try {
    const result = await collection.deleteOne({
      _id: objectId
    });

    if (result.deletedCount === 0) {
      throw new Error(`Aucun document trouvé avec l'ID ${id}`);
    };

    return result;
  } catch (error) {
    throw error;
  } finally {
    client.close();
  };
};

export const getAllData = async (
  collectionName: string,
  sortBy: string = '_id',
  sortOrder: 1 | -1 = -1,
  limit: number = 10
) => {
  const client = await connectToMongoDB();
  const db = client.db('AkaruuArchive');
  const collection = db.collection(collectionName);

  try {
    const exampleDoc = await collection.findOne({ [sortBy]: { $exists: true } });
    if (!exampleDoc) {
      sortBy = '_id';
    }

    const results = await collection.find({})
      .sort({ [sortBy]: sortOrder })
      .limit(limit)
      .toArray();
    return results;
  } catch (error) {
    throw error;
  } finally {
    await client.close();
  };
};

export const getData = async (collectionName: string, id: any): Promise<any> => {
  const client = await connectToMongoDB();
  const db = client.db('AkaruuArchive');
  const collection = db.collection(collectionName);
  const resp = await collection.findOne({ _id: new ObjectId(id) });
  client.close();
  return resp;
};

export const search = async (
  searchText: string
): Promise<any[]> => {
  const client = await connectToMongoDB();
  const db = client.db('AkaruuArchive');

  const collectionsToSearch = ['clips', 'images', 'vods'];

  const query = {
    $or: [
      { title: { $regex: searchText, $options: 'i' } },
      { description: { $regex: searchText, $options: 'i' } },
      { cc: { $regex: searchText, $options: 'i' } }
    ]
  };

  try {
    const results: any[] = [];

    for (const name of collectionsToSearch) {
      const collection = db.collection(name);
      const docs = await collection.find(query).limit(20).toArray();
      results.push(...docs.map(doc => ({ ...doc, _collection: name })));
    };

    return results;
  } catch (error) {
    throw error;
  } finally {
    await client.close();
  };
};
