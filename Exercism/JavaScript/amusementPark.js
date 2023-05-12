export function createVisitor(name, age, ticketId) {
    return { name: name, age: age, ticketId: ticketId};
}

export function revokeTicket(visitor) {
    visitor.ticketId = null;
    return visitor
}

export function ticketStatus(tickets, ticketId) {
    if (tickets[ticketId] === undefined)
      return 'unknown ticket id';
    else if (tickets[ticketId] === null)
      return 'not sold';
    else
      return `sold to ${tickets[ticketId]}`;
}

export function simpleTicketStatus(tickets, ticketId) {
    return tickets[ticketId] ?? "invalid ticket !!!";
}

export function gtcVersion(visitor) {
    if (visitor.gtc)
      return visitor.gtc.version;
    else
      return visitor.gtc;
}