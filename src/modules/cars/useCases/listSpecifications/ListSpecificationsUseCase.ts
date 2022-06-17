import { inject, injectable } from "tsyringe";

import { Specification } from "../../entities/specification";
import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";

@injectable()
class ListSpecificationsUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationsRepository: SpecificationsRepository
  ) {
    // sets the argument as a private
  }
  async execute(): Promise<Specification[]> {
    const all = await this.specificationsRepository.list();

    return all;
  }
}

export { ListSpecificationsUseCase };
