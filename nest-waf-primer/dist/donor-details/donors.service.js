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
exports.donorService = void 0;
const common_1 = require("@nestjs/common");
const azure_database_1 = require("@nestjs/azure-database");
const donor_entity_1 = require("./donor.entity");
let donorService = class donorService {
    constructor(catRepository) {
        this.catRepository = catRepository;
    }
    async find(rowKey, donor) {
        return this.catRepository.find(rowKey, donor);
    }
    async findAll() {
        return this.catRepository.findAll();
    }
    async create(donor) {
        return this.catRepository.create(donor);
    }
    async update(rowKey, donor) {
        return this.catRepository.update(rowKey, donor);
    }
    async delete(rowKey, donor) {
        return this.catRepository.delete(rowKey, donor);
    }
};
donorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, azure_database_1.InjectRepository)(donor_entity_1.donor)),
    __metadata("design:paramtypes", [Object])
], donorService);
exports.donorService = donorService;
//# sourceMappingURL=donors.service.js.map