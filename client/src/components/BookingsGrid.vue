<template>
    <div class='booking-wrapper'> 
    <booking v-for="(booking, index) in bookings" :key="index" :booking="booking"/>  
    </div>
</template>

<script>
import {eventBus} from '@/main.js'
import hotelService from '@/services/hotelService.js'
import Booking from './Bookings'

export default {

}
</script>

<style>

</style>