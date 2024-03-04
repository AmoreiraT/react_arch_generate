"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const createProject_1 = __importDefault(require("./routes/createProject")); // Assuming this file exports a router
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Serve static files from the Vite client directory
app.use(express_1.default.static(path_1.default.join(__dirname, '../client/dist')));
// Parse JSON request bodies
app.use(express_1.default.json());
// API logging middleware
app.use('/api', (_req, _res, next) => {
    console.log('API request received at: ', new Date());
    next();
});
// API routes
app.use('/api', createProject_1.default);
// Redirect all non-API routes to the React index.html
app.get(/^(?!\/api).*/, (_req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, '../client/dist', 'index.html'));
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
