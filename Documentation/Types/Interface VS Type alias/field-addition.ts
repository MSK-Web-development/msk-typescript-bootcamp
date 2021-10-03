
/*
 ? Interfaces VS Type aliases | "Field addition"
 
   NOTES:
   - New fields can be added to the interface.
   - A type cannot be changed after creation.
 */

// Example Type (can't change)
type BikeType = {
    make: string
}
//! Error - Duplicate identifier 'BikeType'
type BikeType = {
    model: number
}


// Example Interface
interface BikeInterface {
    make: string
}
interface BikeInterface {
    model: number
}




