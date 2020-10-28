<template>
    <div class='booking-wrapper'> 
    <booking v-for="(booking, index) in bookings" :key="index" :booking="booking"/>  
    </div>
</template>

<script>
import {eventBus} from '@/main.js'
import hotelService from '@/services/hotelService.js'
import Booking from './Booking'

export default {
    name: 'bookings-grid',
    data(){
        return {
            bookings: []
        };
    },
    mounted(){
        hotelService.getBookings()
        .then(bookings 
        => this.bookings = bookings)
    },
    components:{
        'booking': Booking
    }
}
</script>

<style>

</style>