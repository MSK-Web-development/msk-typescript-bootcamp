/*
 ? Interfaces VS Type aliases | "Renaming primitives"

 NOTES:
 - Type aliases can be used to rename primitives but Interfaces can't
 */

//* Type alias able to rename
type StringPrimitive = string;

//! Error - 'string' only refers to a type, but is being used as a value here
interface StringInterface = string;