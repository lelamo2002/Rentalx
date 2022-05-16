import { Request, Response } from "express";

import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

class ListSpecificationsController {
  constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) {
    // sets the argument as a private
  }
  handle(request: Request, response: Response): Response {
    const specifications = this.listSpecificationsUseCase.execute();
    return response.json(specifications);
  }
}

export { ListSpecificationsController };
