import { Specification } from "../../model/specification";
import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";

class ListSpecificationsUseCase {
  constructor(private specificationsRepository: SpecificationsRepository) {
    // sets the argument as a private
  }
  execute(): Specification[] {
    const all = this.specificationsRepository.list();

    return all;
  }
}

export { ListSpecificationsUseCase };
