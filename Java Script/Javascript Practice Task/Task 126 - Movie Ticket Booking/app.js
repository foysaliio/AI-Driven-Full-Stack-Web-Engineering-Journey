function bookTicket(movie, seats = 1, pricePerSeat = 300) {
  if (typeof movie !== "string") {
    return "Invalid";
  }

  if (seats < 0 || pricePerSeat < 0) {
    return "Invalid";
  }
  const total = seats * pricePerSeat;
  return `${movie}: ${seats} seat(s), Total ৳${total}`;
}

console.log(bookTicket("Dune"));
console.log(bookTicket("Dune", 3));
console.log(bookTicket("Dune", 2, 450));
console.log(bookTicket(123, 2));
