function solve(tickets, sortCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let result = tickets.map(t => {
        let [destination, price, status] = t.split('|');
        return new Ticket(destination, price, status);
    });

    result.sort((a, b) => {
        if (sortCriteria === 'price') {
            return a.price - b.price;
        } else {
            return a[sortCriteria].localeCompare(b[sortCriteria]);
        }
    });

    return result;
}