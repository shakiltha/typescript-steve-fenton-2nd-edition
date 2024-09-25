// Generic Functions

function reverse<T>(list: T[]): T[] {
  const reversedList: T[] = [];

  for (let i = list.length - 1; i >= 0; i--) {
    reversedList.push(list[i]);
  }
  return reversedList;
}

const letters = ["a", "b", "c", "d"];
// d, c, b, a+
const reversedLetters = reverse<string>(letters);

const numbers = [1, 2, 3, 4];

// 4, 3, 2, 1
const reversedNumbers = reverse<number>(numbers);

class CustomerId {
  constructor(private customerIdValue: number) {}
  get value() {
    return this.customerIdValue;
  }
}

class Customer {
  constructor(public id: CustomerId, public name: string) {}
}

interface Repository<T, TId> {
  getById(id: TId): T;
  persist(model: T): TId;
}

class CustomerRepository implements Repository<Customer, CustomerId> {
  constructor(private customers: Customer[]) {}

  getById(id: CustomerId) {
    return this.customers[id.value];
  }

  persist(customer: Customer) {
    this.customers[customer.id.value] = customer;
    return customer.id;
  }
}

export {};
