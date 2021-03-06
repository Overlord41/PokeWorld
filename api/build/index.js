"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); //middleware que transforma el req.body a un json
const PORT = 3000;
app.get('/', (_req, res) => {
    console.log('pong');
    res.send('pong');
});
app.listen(PORT, () => {
    console.log(`Server listen in port ${PORT}`);
});
