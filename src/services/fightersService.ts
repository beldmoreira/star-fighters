import * as fighterRepository from "../repositories/fighterRepository.js";

export function find() {
  return fighterRepository.findFighter();
}
