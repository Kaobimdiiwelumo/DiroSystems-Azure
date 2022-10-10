"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.donorController = void 0;
const common_1 = require("@nestjs/common");
const donor_dto_1 = require("./donor.dto");
const donor_entity_1 = require("./donor.entity");
const donors_service_1 = require("./donors.service");
let donorController = class donorController {
    constructor(donorService) {
        this.donorService = donorService;
    }
    async getAlldonors() {
        return await this.donorService.findAll();
    }
    async getCat(rowKey) {
        try {
            return await this.donorService.find(rowKey, new donor_entity_1.donor());
        }
        catch (error) {
            throw new common_1.NotFoundException(error);
        }
    }
    async createdonor(donorData) {
        try {
            const donors = new donor_entity_1.donor();
            Object.assign(donor_entity_1.donor, donorData);
            return await this.donorService.create(donors);
        }
        catch (error) {
            throw new common_1.UnprocessableEntityException(error);
        }
    }
    async saveCat(rowKey, donorData) {
        try {
            const donors = new donor_entity_1.donor();
            Object.assign(donors, donorData);
            return await this.donorService.update(rowKey, donors);
        }
        catch (error) {
            throw new common_1.UnprocessableEntityException(error);
        }
    }
    async updateCatDetails(rowKey, donorData) {
        try {
            const donors = new donor_entity_1.donor();
            Object.assign(donors, donorData);
            return await this.donorService.update(rowKey, donors);
        }
        catch (error) {
            throw new common_1.UnprocessableEntityException(error);
        }
    }
    async deleteDelete(rowKey) {
        try {
            const response = await this.donorService.delete(rowKey, new donor_entity_1.donor());
            if (response.statusCode === 204) {
                return null;
            }
            else {
                throw new common_1.UnprocessableEntityException(response);
            }
        }
        catch (error) {
            throw new common_1.UnprocessableEntityException(error);
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], donorController.prototype, "getAlldonors", null);
__decorate([
    (0, common_1.Get)(':rowKey'),
    __param(0, (0, common_1.Param)('rowKey')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], donorController.prototype, "getCat", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [donor_dto_1.donorDTO]),
    __metadata("design:returntype", Promise)
], donorController.prototype, "createdonor", null);
__decorate([
    (0, common_1.Put)(':rowKey'),
    __param(0, (0, common_1.Param)('rowKey')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, donor_dto_1.donorDTO]),
    __metadata("design:returntype", Promise)
], donorController.prototype, "saveCat", null);
__decorate([
    (0, common_1.Patch)(':rowKey'),
    __param(0, (0, common_1.Param)('rowKey')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], donorController.prototype, "updateCatDetails", null);
__decorate([
    (0, common_1.Delete)(':rowKey'),
    __param(0, (0, common_1.Param)('rowKey')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], donorController.prototype, "deleteDelete", null);
donorController = __decorate([
    (0, common_1.Controller)('donors'),
    __metadata("design:paramtypes", [donors_service_1.donorService])
], donorController);
exports.donorController = donorController;
//# sourceMappingURL=donors.controller.js.map