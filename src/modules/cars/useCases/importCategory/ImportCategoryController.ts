import { Request, Response } from "express";
import { container } from "tsyringe";

import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
  handle(request: Request, response: Response): Response {
    const { file } = request;
    const importCategoriesUseCase = container.resolve(ImportCategoryUseCase);
    importCategoriesUseCase.execute(file);
    return response.status(201).send();
  }
}

export { ImportCategoryController };
