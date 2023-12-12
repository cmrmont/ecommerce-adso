import mongoose from 'mongoose';

/* estados de mi conexión a la db 
0 = disconnected
1 = connected
2 = connecting
3 = disconnecting */

const mongoConnection = {
  isConnected: 0,
};

export const connect = async () => {
  // revisamos si estamos conectados
  if (mongoConnection.isConnected) {
    console.log('Ya estamos conectados');
    return;
  }

  // revision si existe conexion
  if (mongoose.connections.length > 0) {
    mongoConnection.isConnected = mongoose.connections[0].readyState;

    if (mongoConnection.isConnected === 1) {
      console.log('Usando conexión anterior');
      return;
    }

    await mongoose.disconnect();
  }

  const mongoURI = 'mongodb://localhost:27017/ecommercedb'; // Reemplazar con el nombre de mi base de datos

  await mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoConnection.isConnected = 1;
  console.log('Conectado a MongoDB:', mongoURI);
};

export const disconnect = async () => {
  if (process.env.NODE_ENV === 'development') return;

  if (mongoConnection.isConnected === 0) return;

  await mongoose.disconnect();
  mongoConnection.isConnected = 0;

  console.log('Desconectado de MongoDB');
};
