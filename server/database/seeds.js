use hotel;
db.dropDatabase();

db.bookings.insertMany([
    { 
        name: "Harrison Booth", 
        email: "h.booth@codeclan.com", 
        checked: false
    },
    {
        name: "Chris Dryden",
        email: "ch.dryden@codeclan.com",
        checked: false
    }

])