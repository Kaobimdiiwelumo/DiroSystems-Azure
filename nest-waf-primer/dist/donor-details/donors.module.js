"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.donorModule = void 0;
const common_1 = require("@nestjs/common");
const azure_database_1 = require("@nestjs/azure-database");
const donors_controller_1 = require("./donors.controller");
const donors_service_1 = require("./donors.service");
const donor_entity_1 = require("./donor.entity");
let donorModule = class donorModule {
};
donorModule = __decorate([
    (0, common_1.Module)({
        imports: [azure_database_1.AzureTableStorageModule.forFeature(donor_entity_1.donor)],
        providers: [donors_service_1.donorService],
        controllers: [donors_controller_1.donorController],
    })
], donorModule);
exports.donorModule = donorModule;
//# sourceMappingURL=donors.module.js.map