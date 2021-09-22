// Another way to declare a Tuple type is with interface (With specialized properties)
interface BikeDetailsTuple {
    length: 2;

    0: number;
    1: string
};
const myBike: BikeDetailsTuple = [2021, "hero"];

// Todo: Add example usage