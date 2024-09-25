// Enumerations (book-page: 10 (not pdf page))

// enum VehicleType {
//   PedalCycle,
//   MotorCycle,
//   Car,
//   Van,
//   Bus,
//   Lorry
// }

// const type = VehicleType.Lorry;
// const typeName = VehicleType[type];

enum BoxSize {
  Small,
  Medium,
}

enum BoxSize {
  Large = 2,
  XLarge,
  XXLarge,
}

const size = BoxSize.Large;

enum DiscFlags {
  None = 0,
  Drive = 1,
  Influence = 2,
  Steadiness = 4,
  Conscientiousness = 8,
}

// Using flags
let personality = DiscFlags.Drive | DiscFlags.Conscientiousness;

// Testing flags

// true
let hasD = (personality & DiscFlags.Drive) === DiscFlags.Drive;

// constant enumerations

const enum VehicleType {
  PedalCycle,
  MotorCycle,
  Car,
  Van,
  Bus,
  Lorry,
}

const type = VehicleType.Lorry;

// let type = 5 /* Lorry */ - javascript output of a constant enumeration

export {};
