"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createApp_controller_1 = require("../createApp/controllers/createApp_controller");
const router = (0, express_1.Router)();
router.post('/create-project', createApp_controller_1.createProject);
exports.default = router;
