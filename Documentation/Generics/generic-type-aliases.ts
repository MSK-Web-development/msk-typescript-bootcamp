/*
? Generic type alias annotations
*/

// A generic type
type CarModel<Type> = Type;

// A generic type with unions
type VehicleModel<Type> = Type | number | string | number[];

// A generic object type
type Vehicle<Type> = {
    model: Type,
    make: string
}
