<template>
  <div class="booking"> 
   <h3> Guest name: {{ booking.name }} </h3>
   <p> Guest email: {{ booking.email }} </p>   
   <p> Checked in: {{ checked }} </p>
   <button type="button" class="delete-button" v-on:click="deleteBooking"></button>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'
import hotelService from '@/services/hotelService.js'

export default {
    name:'booking',
    methods:{
        deleteBooking() {
            hotelService.deleteBooking(this.booking._id)
            .then(() => eventBus.$emit('delete-booking'))
        }
    }
}
</script>

<style>

</style>