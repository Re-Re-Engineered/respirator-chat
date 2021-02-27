import { uniqueNamesGenerator, names, Config } from 'unique-names-generator';
import { nanoid } from 'nanoid/non-secure';

const config: Config = {
  dictionaries: [names],
  style: 'capital',
  length: 1,
};

function Generate10() {
  return Array(10).fill(1).map(() => ({
    id: nanoid(10),
    person: uniqueNamesGenerator(config),
  }));
}

export {
  Generate10,
};
