"use strict";
/**
 * @author @IcaroSilvaFK
 * @version 0.1
 *
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes/routes");
const app = (0, express_1.default)();
const port = 8080;
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: "*", methods: ["GET", "POST", "DELETE"] }));
app.use(routes_1.routes);
app.listen(process.env.PORT || port, () => {
    console.log(`server running at http://localhost:${port}`);
});
