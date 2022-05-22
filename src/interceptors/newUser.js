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
exports.NewUser = void 0;
const create_repositorie_1 = require("../repositories/create.repositorie");
const submitEmail_use_case_1 = require("../use-cases/submitEmail.use-case");
class NewUser {
    static NewUserRoute(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email } = request.body;
            if (!email) {
                return response.status(400).json({ message: "Email is missing a type" });
            }
            try {
                const createNewUserRepositorie = new create_repositorie_1.CreateUser();
                const createUserUseCase = new submitEmail_use_case_1.ISubmitEmailUseCase(createNewUserRepositorie);
                const { message } = yield createUserUseCase.execute({ email });
                if (message === "Email exists") {
                    return response.status(400).json({ message });
                }
                return response.status(201).json({ message });
            }
            catch (error) {
                return response.status(500).json({ message: "Internal Server Error" });
            }
        });
    }
}
exports.NewUser = NewUser;
