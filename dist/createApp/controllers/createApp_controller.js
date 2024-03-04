"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProject = void 0;
const initReact_1 = require("../initReact");
const createProject = async (req, res) => {
    try {
        const { projectName, packageManager } = req.body;
        await (0, initReact_1.initReact)(projectName, packageManager);
        res.status(200).json({ message: 'Project created successfully!' });
    }
    catch (error) {
        res.status(500).json({ error: error?.message });
    }
};
exports.createProject = createProject;
