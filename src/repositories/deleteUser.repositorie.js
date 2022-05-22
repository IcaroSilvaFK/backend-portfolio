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
exports.DeleteUser = void 0;
const prisma_1 = require("../configs/prisma");
class DeleteUser {
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const emailExists = yield prisma_1.prisma.username.findFirst({
                where: {
                    id,
                },
            });
            if (!emailExists) {
                return "Id not exists";
            }
            try {
                yield prisma_1.prisma.username.delete({
                    where: {
                        id,
                    },
                });
            }
            catch (error) {
                throw new Error();
            }
        });
    }
}
exports.DeleteUser = DeleteUser;
