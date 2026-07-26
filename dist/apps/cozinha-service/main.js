/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/cozinha-service/src/cozinha-service.controller.ts"
/*!****************************************************************!*\
  !*** ./apps/cozinha-service/src/cozinha-service.controller.ts ***!
  \****************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CozinhaServiceController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const cozinha_service_service_1 = __webpack_require__(/*! ./cozinha-service.service */ "./apps/cozinha-service/src/cozinha-service.service.ts");
const pedido_criado_v1_event_1 = __webpack_require__(/*! ../../restaurant-microservices-lab/src/pedidos/events/pedido-criado-v1.event */ "./apps/restaurant-microservices-lab/src/pedidos/events/pedido-criado-v1.event.ts");
let CozinhaServiceController = class CozinhaServiceController {
    cozinhaServiceService;
    constructor(cozinhaServiceService) {
        this.cozinhaServiceService = cozinhaServiceService;
    }
    receberPedido(dto) {
        return this.cozinhaServiceService.processarPedido(dto);
    }
    async aoReceberPedidoCriado(payload) {
        const evento = (0, class_transformer_1.plainToInstance)(pedido_criado_v1_event_1.PedidoCriadoV1Event, payload);
        const erros = await (0, class_validator_1.validate)(evento);
        if (erros.length > 0) {
            console.error('Evento pedido.criado.v1 chegou fora do contrato esperado:', erros);
            return;
        }
        console.log('Cozinha recebeu evento pedido.criado.v1 (válido):', evento);
        return this.cozinhaServiceService.processarPedido(evento);
    }
};
exports.CozinhaServiceController = CozinhaServiceController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CozinhaServiceController.prototype, "receberPedido", null);
__decorate([
    (0, microservices_1.EventPattern)('pedido.criado.v1'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CozinhaServiceController.prototype, "aoReceberPedidoCriado", null);
exports.CozinhaServiceController = CozinhaServiceController = __decorate([
    (0, common_1.Controller)('cozinha'),
    __metadata("design:paramtypes", [typeof (_a = typeof cozinha_service_service_1.CozinhaServiceService !== "undefined" && cozinha_service_service_1.CozinhaServiceService) === "function" ? _a : Object])
], CozinhaServiceController);


/***/ },

/***/ "./apps/cozinha-service/src/cozinha-service.module.ts"
/*!************************************************************!*\
  !*** ./apps/cozinha-service/src/cozinha-service.module.ts ***!
  \************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CozinhaServiceModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cozinha_service_controller_1 = __webpack_require__(/*! ./cozinha-service.controller */ "./apps/cozinha-service/src/cozinha-service.controller.ts");
const cozinha_service_service_1 = __webpack_require__(/*! ./cozinha-service.service */ "./apps/cozinha-service/src/cozinha-service.service.ts");
let CozinhaServiceModule = class CozinhaServiceModule {
};
exports.CozinhaServiceModule = CozinhaServiceModule;
exports.CozinhaServiceModule = CozinhaServiceModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [cozinha_service_controller_1.CozinhaServiceController],
        providers: [cozinha_service_service_1.CozinhaServiceService],
    })
], CozinhaServiceModule);


/***/ },

/***/ "./apps/cozinha-service/src/cozinha-service.service.ts"
/*!*************************************************************!*\
  !*** ./apps/cozinha-service/src/cozinha-service.service.ts ***!
  \*************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CozinhaServiceService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let CozinhaServiceService = class CozinhaServiceService {
    processarPedido(dto) {
        return { status: 'recebido pela cozinha', dto };
    }
};
exports.CozinhaServiceService = CozinhaServiceService;
exports.CozinhaServiceService = CozinhaServiceService = __decorate([
    (0, common_1.Injectable)()
], CozinhaServiceService);


/***/ },

/***/ "./apps/restaurant-microservices-lab/src/pedidos/events/pedido-criado-v1.event.ts"
/*!****************************************************************************************!*\
  !*** ./apps/restaurant-microservices-lab/src/pedidos/events/pedido-criado-v1.event.ts ***!
  \****************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PedidoCriadoV1Event = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class PedidoCriadoV1Event {
    item;
    mesa;
}
exports.PedidoCriadoV1Event = PedidoCriadoV1Event;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PedidoCriadoV1Event.prototype, "item", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], PedidoCriadoV1Event.prototype, "mesa", void 0);


/***/ },

/***/ "@nestjs/common"
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
(module) {

module.exports = require("@nestjs/common");

/***/ },

/***/ "@nestjs/core"
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
(module) {

module.exports = require("@nestjs/core");

/***/ },

/***/ "@nestjs/microservices"
/*!****************************************!*\
  !*** external "@nestjs/microservices" ***!
  \****************************************/
(module) {

module.exports = require("@nestjs/microservices");

/***/ },

/***/ "class-transformer"
/*!************************************!*\
  !*** external "class-transformer" ***!
  \************************************/
(module) {

module.exports = require("class-transformer");

/***/ },

/***/ "class-validator"
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
(module) {

module.exports = require("class-validator");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!******************************************!*\
  !*** ./apps/cozinha-service/src/main.ts ***!
  \******************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const cozinha_service_module_1 = __webpack_require__(/*! ./cozinha-service.module */ "./apps/cozinha-service/src/cozinha-service.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(cozinha_service_module_1.CozinhaServiceModule);
    app.connectMicroservice({
        transport: microservices_1.Transport.NATS,
        options: { servers: ['nats://localhost:4222'] },
    });
    await app.startAllMicroservices();
    await app.listen(3001);
}
bootstrap();

})();

/******/ })()
;