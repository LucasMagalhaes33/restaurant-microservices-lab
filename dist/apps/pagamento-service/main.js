/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/pagamento-service/src/pagamento-service.controller.ts"
/*!********************************************************************!*\
  !*** ./apps/pagamento-service/src/pagamento-service.controller.ts ***!
  \********************************************************************/
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PagamentoServiceController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const microservices_2 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const pagamento_service_service_1 = __webpack_require__(/*! ./pagamento-service.service */ "./apps/pagamento-service/src/pagamento-service.service.ts");
let PagamentoServiceController = class PagamentoServiceController {
    natsClient;
    pagamentoServiceService;
    constructor(natsClient, pagamentoServiceService) {
        this.natsClient = natsClient;
        this.pagamentoServiceService = pagamentoServiceService;
    }
    async processarPagamento(pedido) {
        const aprovado = this.pagamentoServiceService.decidirAprovacao(pedido);
        if (aprovado) {
            this.natsClient.emit('pagamento.aprovado', pedido);
        }
        else {
            this.natsClient.emit('pagamento.recusado', pedido);
        }
    }
};
exports.PagamentoServiceController = PagamentoServiceController;
__decorate([
    (0, microservices_1.EventPattern)('pedido.criado.v1'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PagamentoServiceController.prototype, "processarPagamento", null);
exports.PagamentoServiceController = PagamentoServiceController = __decorate([
    (0, common_1.Controller)(),
    __param(0, (0, common_1.Inject)('NATS_CLIENT')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_2.ClientProxy !== "undefined" && microservices_2.ClientProxy) === "function" ? _a : Object, typeof (_b = typeof pagamento_service_service_1.PagamentoServiceService !== "undefined" && pagamento_service_service_1.PagamentoServiceService) === "function" ? _b : Object])
], PagamentoServiceController);


/***/ },

/***/ "./apps/pagamento-service/src/pagamento-service.module.ts"
/*!****************************************************************!*\
  !*** ./apps/pagamento-service/src/pagamento-service.module.ts ***!
  \****************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PagamentoServiceModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const pagamento_service_controller_1 = __webpack_require__(/*! ./pagamento-service.controller */ "./apps/pagamento-service/src/pagamento-service.controller.ts");
const pagamento_service_service_1 = __webpack_require__(/*! ./pagamento-service.service */ "./apps/pagamento-service/src/pagamento-service.service.ts");
let PagamentoServiceModule = class PagamentoServiceModule {
};
exports.PagamentoServiceModule = PagamentoServiceModule;
exports.PagamentoServiceModule = PagamentoServiceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'NATS_CLIENT',
                    transport: microservices_1.Transport.NATS,
                    options: { servers: ['nats://localhost:4222'] },
                },
            ]),
        ],
        controllers: [pagamento_service_controller_1.PagamentoServiceController],
        providers: [pagamento_service_service_1.PagamentoServiceService],
    })
], PagamentoServiceModule);


/***/ },

/***/ "./apps/pagamento-service/src/pagamento-service.service.ts"
/*!*****************************************************************!*\
  !*** ./apps/pagamento-service/src/pagamento-service.service.ts ***!
  \*****************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PagamentoServiceService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let PagamentoServiceService = class PagamentoServiceService {
    decidirAprovacao(pedido) {
        return pedido.mesa % 2 === 0;
    }
};
exports.PagamentoServiceService = PagamentoServiceService;
exports.PagamentoServiceService = PagamentoServiceService = __decorate([
    (0, common_1.Injectable)()
], PagamentoServiceService);


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
/*!********************************************!*\
  !*** ./apps/pagamento-service/src/main.ts ***!
  \********************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const pagamento_service_module_1 = __webpack_require__(/*! ./pagamento-service.module */ "./apps/pagamento-service/src/pagamento-service.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(pagamento_service_module_1.PagamentoServiceModule);
    app.connectMicroservice({
        transport: microservices_1.Transport.NATS,
        options: { servers: ['nats://localhost:4222'] },
    });
    await app.startAllMicroservices();
    await app.listen(3002);
}
bootstrap();

})();

/******/ })()
;