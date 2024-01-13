import { Client, Databases } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65a22f59eb93ba8a15bd');

const database = new Databases(client);

export default database;