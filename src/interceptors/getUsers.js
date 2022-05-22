"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUsersRoute = void 0;
const getAllEmails_use_case_1 = require("../use-cases/getAllEmails.use-case");
const getUSer_repositorie_1 = require("../repositories/getUSer.repositorie");
class GetUsersRoute {
    static getAllUsers(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const getAllEmailsRepositorie = new getUSer_repositorie_1.GetUsers();
                const getAllEmailsUseCase = new getAllEmails_use_case_1.GetAllEmails(getAllEmailsRepositorie);
                const data = yield getAllEmailsUseCase.execute();
                return response.status(200).json(data);
            }
            catch (error) {
                return response.status(500).json({ message: "Internal Server Error" });
            }
        });
    }
}
exports.GetUsersRoute = GetUsersRoute;
