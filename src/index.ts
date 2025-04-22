import app from './app';
import connectMongoDB from './config/db';

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
  await connectMongoDB();
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
  }
  catch (error) {
    console.error('Error starting server:', error);
    process.exit(1);
  }
};
startServer();