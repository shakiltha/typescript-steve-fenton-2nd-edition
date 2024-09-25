export interface Ship {
    name: string;
    port: string;
    displacement: number;
}

export class Ferry implements Ship {
    constructor(
        public name: string;
        public port: string;
        public displacement: number
    ) {}
}
const defaultDisplacement = 4000;

class privateShip implements Ship {
    constructor(
        public name: string,
        public port: string,
        public displacement: number = defaultDisplacement
    ){}
}