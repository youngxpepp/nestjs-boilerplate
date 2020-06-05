import { Controller } from "@nestjs/common";
import { AppService } from "@src/service/AppService";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}
}
