<template>
    <form v-on:submit.prevent="addBooking" method="post"> 
    <label for="name"> Guest name: </label>
    <input type="text" id="name" v-model="name" required>
    <label for="email"> Guest e-mail: </label>
    <input type="text" id="email" v-model="email" required>
    <input type="submit" value="save" id="save"> 
    </form>
</template>

<script>
import { eventBus } from '@/main.js'
import hotelService from '@/services/hotelService.js'

export default {
    name: 'booking-form',
    data(){
        return {
            name: "",
            email: ""
        }
    },
    methods: {
        addBooking(){
            const booking = {
                name: this.name, 
                email: this.email,
                checked: false
            }
            console.log("booking is", booking)
            hotelService.postBooking(booking)
            .then(res => eventBus.$emit('booking-added', res))
        }

    }

}
</script>

<style>

</style>