/**
 * these example written from the following youtube course
 * typescript 5 decorators - full course
 * link: https://www.youtube.com/watch?v=1hq_tNPWASM
 */

// CLASS DECORATORS

// @printDecoratorData
@withEmploymentDateOnPrototype
// @withEmploymentDate
class Manager {
  task: string = "Simple task";
  project: string = "Simple project";

  constructor() {
    console.log("Initializing the manager class");
  }
}

// const manager = new Manager();
// console.log(manager);

function withEmploymentDateOnPrototype(value: Function) {
  value.prototype.employmentDateOnPrototype = new Date().toISOString();
}

// function printDecoratorData(value: Function, context: ClassDecoratorContext) {
//   console.log("Value");
//   console.log(value);
//   console.log("Context");
//   console.log(context);
//   context.addInitializer(() => {
//     console.log("Initialized class " + context.name);
//   });
// }

// Output (@printDecoratorData)

// Value
// value: class
// Context
// {kind: 'class', name: 'Manager' etc}

function withEmploymentDate<T extends { new (...args: any[]): {} }>(
  baseClass: T,
  context: ClassDecoratorContext
) {
  return class extends baseClass {
    employmentDate = new Date().toISOString();
    constructor(...args: any[]) {
      super(...args);
      console.log("Adding employment date to " + context.name);
    }
  };
}

// FIELD DECORATORS
