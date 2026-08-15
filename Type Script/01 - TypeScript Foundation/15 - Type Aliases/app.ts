// A type alias allows us to create a custom name for a type.

type UserId = string | number;

let userId: UserId = 101;
console.log(userId);
userId = "user-101";
console.log(userId);

// Type aliases become especially useful when working with complex object types.

type EntryCode = boolean | number | string;

let isGateOpen: EntryCode = false;
console.log(isGateOpen);
let ticketCode: EntryCode = 4083;
console.log(ticketCode);
let lockerName: EntryCode = "ASR-93";
console.log(lockerName);
