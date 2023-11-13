"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const env_service_1 = require("./env/env.service");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {});
    const configService = app.get(env_service_1.EnvService);
    const port = configService.get("PORT");
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map