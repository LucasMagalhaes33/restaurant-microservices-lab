/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/restaurant-microservices-lab/src/app.controller.ts"
/*!*****************************************************************!*\
  !*** ./apps/restaurant-microservices-lab/src/app.controller.ts ***!
  \*****************************************************************/
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./apps/restaurant-microservices-lab/src/app.service.ts");
let AppController = class AppController {
    appService;
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);


/***/ },

/***/ "./apps/restaurant-microservices-lab/src/app.module.ts"
/*!*************************************************************!*\
  !*** ./apps/restaurant-microservices-lab/src/app.module.ts ***!
  \*************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_controller_1 = __webpack_require__(/*! ./app.controller */ "./apps/restaurant-microservices-lab/src/app.controller.ts");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./apps/restaurant-microservices-lab/src/app.service.ts");
const pedidos_module_1 = __webpack_require__(/*! ./pedidos/pedidos.module */ "./apps/restaurant-microservices-lab/src/pedidos/pedidos.module.ts");
const pagamento_module_1 = __webpack_require__(/*! ./pagamento/pagamento.module */ "./apps/restaurant-microservices-lab/src/pagamento/pagamento.module.ts");
const fiscal_module_1 = __webpack_require__(/*! ./fiscal/fiscal.module */ "./apps/restaurant-microservices-lab/src/fiscal/fiscal.module.ts");
const cozinha_facade_module_1 = __webpack_require__(/*! ./cozinha-facade/cozinha-facade.module */ "./apps/restaurant-microservices-lab/src/cozinha-facade/cozinha-facade.module.ts");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const throttler_1 = __webpack_require__(/*! @nestjs/throttler */ "@nestjs/throttler");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            throttler_1.ThrottlerModule.forRoot([{ ttl: 60000, limit: 20 }]),
            pedidos_module_1.PedidosModule,
            pagamento_module_1.PagamentoModule,
            fiscal_module_1.FiscalModule,
            cozinha_facade_module_1.CozinhaFacadeModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);


/***/ },

/***/ "./apps/restaurant-microservices-lab/src/app.service.ts"
/*!**************************************************************!*\
  !*** ./apps/restaurant-microservices-lab/src/app.service.ts ***!
  \**************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);


/***/ },

/***/ "./apps/restaurant-microservices-lab/src/common/guards/service-token.guard.ts"
/*!************************************************************************************!*\
  !*** ./apps/restaurant-microservices-lab/src/common/guards/service-token.guard.ts ***!
  \************************************************************************************/
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServiceTokenGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
let ServiceTokenGuard = class ServiceTokenGuard {
    configService;
    constructor(configService) {
        this.configService = configService;
    }
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const tokenRecebido = request.headers['x-service-token'];
        const tokenEsperado = this.configService.get('SERVICE_TOKEN');
        if (tokenRecebido !== tokenEsperado) {
            throw new common_1.UnauthorizedException('Token de serviço inválido ou ausente');
        }
        return true;
    }
};
exports.ServiceTokenGuard = ServiceTokenGuard;
exports.ServiceTokenGuard = ServiceTokenGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], ServiceTokenGuard);


/***/ },

/***/ "./apps/restaurant-microservices-lab/src/cozinha-facade/cozinha-facade.controller.ts"
/*!*******************************************************************************************!*\
  !*** ./apps/restaurant-microservices-lab/src/cozinha-facade/cozinha-facade.controller.ts ***!
  \*******************************************************************************************/
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
exports.CozinhaFacadeController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const axios_1 = __webpack_require__(/*! @nestjs/axios */ "@nestjs/axios");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const service_token_guard_1 = __webpack_require__(/*! ../common/guards/service-token.guard */ "./apps/restaurant-microservices-lab/src/common/guards/service-token.guard.ts");
let CozinhaFacadeController = class CozinhaFacadeController {
    httpService;
    configService;
    constructor(httpService, configService) {
        this.httpService = httpService;
        this.configService = configService;
    }
    async encaminhar(dto) {
        const url = this.configService.get('COZINHA_SERVICE_URL') ?? 'http://localhost:3001/cozinha';
        const resposta = await (0, rxjs_1.firstValueFrom)(this.httpService.post(url, dto));
        return resposta.data;
    }
};
exports.CozinhaFacadeController = CozinhaFacadeController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CozinhaFacadeController.prototype, "encaminhar", null);
exports.CozinhaFacadeController = CozinhaFacadeController = __decorate([
    (0, common_1.Controller)('cozinha'),
    (0, common_1.UseGuards)(service_token_guard_1.ServiceTokenGuard),
    __metadata("design:paramtypes", [typeof (_a = typeof axios_1.HttpService !== "undefined" && axios_1.HttpService) === "function" ? _a : Object, typeof (_b = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _b : Object])
], CozinhaFacadeController);


/***/ },

/***/ "./apps/restaurant-microservices-lab/src/cozinha-facade/cozinha-facade.module.ts"
/*!***************************************************************************************!*\
  !*** ./apps/restaurant-microservices-lab/src/cozinha-facade/cozinha-facade.module.ts ***!
  \***************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CozinhaFacadeModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const axios_1 = __webpack_require__(/*! @nestjs/axios */ "@nestjs/axios");
const cozinha_facade_controller_1 = __webpack_require__(/*! ./cozinha-facade.controller */ "./apps/restaurant-microservices-lab/src/cozinha-facade/cozinha-facade.controller.ts");
let CozinhaFacadeModule = class CozinhaFacadeModule {
};
exports.CozinhaFacadeModule = CozinhaFacadeModule;
exports.CozinhaFacadeModule = CozinhaFacadeModule = __decorate([
    (0, common_1.Module)({
        imports: [axios_1.HttpModule],
        controllers: [cozinha_facade_controller_1.CozinhaFacadeController],
    })
], CozinhaFacadeModule);


/***/ },

/***/ "./apps/restaurant-microservices-lab/src/fiscal/fiscal.module.ts"
/*!***********************************************************************!*\
  !*** ./apps/restaurant-microservices-lab/src/fiscal/fiscal.module.ts ***!
  \***********************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FiscalModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let FiscalModule = class FiscalModule {
};
exports.FiscalModule = FiscalModule;
exports.FiscalModule = FiscalModule = __decorate([
    (0, common_1.Module)({})
], FiscalModule);


/***/ },

/***/ "./apps/restaurant-microservices-lab/src/pagamento/pagamento.module.ts"
/*!*****************************************************************************!*\
  !*** ./apps/restaurant-microservices-lab/src/pagamento/pagamento.module.ts ***!
  \*****************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PagamentoModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let PagamentoModule = class PagamentoModule {
};
exports.PagamentoModule = PagamentoModule;
exports.PagamentoModule = PagamentoModule = __decorate([
    (0, common_1.Module)({})
], PagamentoModule);


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

/***/ "./apps/restaurant-microservices-lab/src/pedidos/pedidos-service.service.ts"
/*!**********************************************************************************!*\
  !*** ./apps/restaurant-microservices-lab/src/pedidos/pedidos-service.service.ts ***!
  \**********************************************************************************/
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
exports.PedidosService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const pedido_criado_v1_event_1 = __webpack_require__(/*! ./events/pedido-criado-v1.event */ "./apps/restaurant-microservices-lab/src/pedidos/events/pedido-criado-v1.event.ts");
let PedidosService = class PedidosService {
    natsClient;
    constructor(natsClient) {
        this.natsClient = natsClient;
    }
    async criarPedido(dto) {
        const evento = (0, class_transformer_1.plainToInstance)(pedido_criado_v1_event_1.PedidoCriadoV1Event, dto);
        const erros = await (0, class_validator_1.validate)(evento);
        if (erros.length > 0) {
            throw new common_1.BadRequestException('Payload de pedido inválido: ' + JSON.stringify(erros));
        }
        this.natsClient.emit('pedido.criado.v1', evento);
        return { status: 'pedido criado', dto: evento };
    }
};
exports.PedidosService = PedidosService;
exports.PedidosService = PedidosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('NATS_CLIENT')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
], PedidosService);


/***/ },

/***/ "./apps/restaurant-microservices-lab/src/pedidos/pedidos.controller.ts"
/*!*****************************************************************************!*\
  !*** ./apps/restaurant-microservices-lab/src/pedidos/pedidos.controller.ts ***!
  \*****************************************************************************/
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
exports.PedidosController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const throttler_1 = __webpack_require__(/*! @nestjs/throttler */ "@nestjs/throttler");
const pedidos_service_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module './pedidos.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
let PedidosController = class PedidosController {
    pedidosService;
    constructor(pedidosService) {
        this.pedidosService = pedidosService;
    }
    criar(dto) {
        return this.pedidosService.criarPedido(dto);
    }
};
exports.PedidosController = PedidosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PedidosController.prototype, "criar", null);
exports.PedidosController = PedidosController = __decorate([
    (0, common_1.UseGuards)(throttler_1.ThrottlerGuard),
    (0, common_1.Controller)('pedidos'),
    __metadata("design:paramtypes", [typeof (_a = typeof pedidos_service_1.PedidosService !== "undefined" && pedidos_service_1.PedidosService) === "function" ? _a : Object])
], PedidosController);


/***/ },

/***/ "./apps/restaurant-microservices-lab/src/pedidos/pedidos.module.ts"
/*!*************************************************************************!*\
  !*** ./apps/restaurant-microservices-lab/src/pedidos/pedidos.module.ts ***!
  \*************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PedidosModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const pedidos_controller_1 = __webpack_require__(/*! ./pedidos.controller */ "./apps/restaurant-microservices-lab/src/pedidos/pedidos.controller.ts");
const pedidos_service_service_1 = __webpack_require__(/*! ./pedidos-service.service */ "./apps/restaurant-microservices-lab/src/pedidos/pedidos-service.service.ts");
let PedidosModule = class PedidosModule {
};
exports.PedidosModule = PedidosModule;
exports.PedidosModule = PedidosModule = __decorate([
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
        controllers: [pedidos_controller_1.PedidosController],
        providers: [pedidos_service_service_1.PedidosService]
    })
], PedidosModule);


/***/ },

/***/ "@nestjs/axios"
/*!********************************!*\
  !*** external "@nestjs/axios" ***!
  \********************************/
(module) {

module.exports = require("@nestjs/axios");

/***/ },

/***/ "@nestjs/common"
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
(module) {

module.exports = require("@nestjs/common");

/***/ },

/***/ "@nestjs/config"
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
(module) {

module.exports = require("@nestjs/config");

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

/***/ "@nestjs/throttler"
/*!************************************!*\
  !*** external "@nestjs/throttler" ***!
  \************************************/
(module) {

module.exports = require("@nestjs/throttler");

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

/***/ },

/***/ "rxjs"
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
(module) {

module.exports = require("rxjs");

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
/*!*******************************************************!*\
  !*** ./apps/restaurant-microservices-lab/src/main.ts ***!
  \*******************************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./apps/restaurant-microservices-lab/src/app.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

})();

/******/ })()
;