import express from 'express';
import path from 'path';
import router from './routes/createProject'; // Assuming this file exports a router

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the Vite client directory
app.use(express.static(path.join(__dirname, '../client/dist')));

// Parse JSON request bodies
app.use(express.json());

// API logging middleware
app.use('/api', (_req: any, _res: any, next: () => void) => {
  console.log('API request received at: ', new Date());
  next();
});

// API routes
app.use('/api', router);

// Redirect all non-API routes to the React index.html
app.get(/^(?!\/api).*/, (_req: any, res: { sendFile: (arg0: any) => void; }) => {
  res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});