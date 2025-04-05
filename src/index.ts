import { type Faker, fakerJA } from '@faker-js/faker';

declare module '@faker-js/faker' {
  interface NumberModule {
    smallint(): number;
  }
}

export const faker: Faker = fakerJA;

faker.number.smallint = function () {
  return faker.number.int({ min: 0, max: 32767 });
};
