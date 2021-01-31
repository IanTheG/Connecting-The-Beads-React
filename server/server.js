"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var PORT = process.env.PORT || 8080;
var corsOptions = {
    origin: 'https://localhost:1234'
};
var app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static('../client/dist'));
app.get('/*', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '../client/dist/index.html'));
});
app.listen(PORT, function () {
    console.log("Server is listening on port " + PORT);
});
