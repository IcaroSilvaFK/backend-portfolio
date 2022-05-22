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
exports.DeleteUserRoute = void 0;
const deleteUser_use_case_1 = require("../use-cases/deleteUser.use-case");
const deleteUser_repositorie_1 = require("../repositories/deleteUser.repositorie");
class DeleteUserRoute {
    static deleteUser(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            console.log(id);
            if (!id) {
                return response.status(400).json({ message: "Id is missing a type" });
            }
            try {
                const DeleUser = new deleteUser_repositorie_1.DeleteUser();
                const DeleUserUseCase = new deleteUser_use_case_1.DeleUSerUseCase(DeleUser);
                yield DeleUserUseCase.execute(id);
                return response.status(200).json({ message: "User delete success" });
            }
            catch (error) {
                return response.status(500).json({ message: "Internal Server Error" });
            }
        });
    }
}
exports.DeleteUserRoute = DeleteUserRoute;
