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
Object.defineProperty(exports, "__esModule", { value: true });
exports.donor = void 0;
const azure_database_1 = require("@nestjs/azure-database");
let donor = class donor {
};
__decorate([
    (0, azure_database_1.EntityString)(),
    __metadata("design:type", String)
], donor.prototype, "name", void 0);
__decorate([
    (0, azure_database_1.EntityInt32)(),
    __metadata("design:type", Number)
], donor.prototype, "age", void 0);
donor = __decorate([
    (0, azure_database_1.EntityPartitionKey)('DonorID'),
    (0, azure_database_1.EntityRowKey)('DonorName')
], donor);
exports.donor = donor;
//# sourceMappingURL=donor.entity.js.map