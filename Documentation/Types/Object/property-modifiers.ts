/*
? Property modifiers

- Using prop modifiers, we can control the fields and their types.
*/

interface CarInterface {
    make: string; // Mandatory parameter (Read / Write)

    //* When you try to access model, it returns "undefined" (if not set)
    model?: number; // Optional (Read / Write) parameter

    //! You cannot "write" / "set" this value during usage.
    readonly sedan: boolean;

    //! "moreInfo" itself cannot be changed
    readonly moreInfo: {
        price: number, //* Price "can" be changed
        readonly topSpeed: number, //! topSpeed "cannot" be changed
        released: boolean
    }
}












