import { Module } from "@nestjs/common";
import { AppController } from "@src/controller/AppController";
import { AppService } from "@src/service/AppService";

@Module({
    imports: [],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
