import { Category } from "../../model/category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {
    // lets us this.categoriesRepository as categoriesRepository
  }
  execute(): Category[] {
    const categories = this.categoriesRepository.list();
    return categories;
  }
}

export { ListCategoriesUseCase };
