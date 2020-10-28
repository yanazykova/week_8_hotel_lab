const BaseURL = 'http://localhost:3000/api/bookings/'

export default {
    getBookings(){
        return fetch(BaseURL)
        .then(res => res.json())
    },
    postBooking(payload){
        console.log("payload for postBooking is", payload)
        console.log("the payload string applied is", JSON.stringify(payload))
        return fetch(BaseURL, {
            method:'POST',
            body: JSON.stringify(payload),
            headers: {'Content-Type': 'applicaton/json'}
        })
        .then(res => res.json())
    },
    deleteBooking(id){
        return fetch(BaseURL + id, {
            method:'DELETE'
        })
    }

}