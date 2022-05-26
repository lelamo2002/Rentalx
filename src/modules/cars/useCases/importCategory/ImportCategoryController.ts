import { Request, Response } from "express";

import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
  constructor(private importCategoriesUseCase: ImportCategoryUseCase) {
    // lets us this.importCategoriesUseCase as importCategoriesUseCase
  }
  handle(request: Request, response: Response): Response {
    const { file } = request;
    this.importCategoriesUseCase.execute(file);
    return response.send();
  }
}

export { ImportCategoryController };
