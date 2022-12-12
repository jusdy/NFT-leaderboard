import { faker } from '@faker-js/faker'

export type Person = {
  position: number;
  NFTId: string;
  age: number;
  earnings: string;
  salePrice: string;
}

const range = (len: number) => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPerson = (): Person => {
  return {
    position: faker.datatype.number(20),
    NFTId: "#" + faker.datatype.number(100),
    age: faker.datatype.number(40),
    earnings: faker.datatype.number(1000) + " CRZ",
    salePrice: faker.datatype.number(1000) + " CRZ"
  }
}

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Person[] => {
    const len = lens[depth]!
    return range(len).map((d): Person => {
      return {
        ...newPerson(),
      }
    })
  }

  return makeDataLevel()
}
