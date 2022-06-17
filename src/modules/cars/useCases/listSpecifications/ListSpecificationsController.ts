import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

class ListSpecificationsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const specifications = await container
      .resolve(ListSpecificationsUseCase)
      .execute();
    return response.json(specifications);
  }
}

export { ListSpecificationsController };
