
/*
 ? Field addition
 
   New fields can be added to the interface.
   A type cannot be changed after creation.
 */

// Example Interface
interface BikeInterface {
    make: string
}
interface BikeInterface {
    model: number
}

// Example Type (can't change)
type BikeType = {
    make: string
}
//! Error - Duplicate identifier 'BikeType'
type BikeType = {
    model: number
}



