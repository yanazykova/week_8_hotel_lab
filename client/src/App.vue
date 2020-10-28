<template>
  <main> 
  <bookings-grid></bookings-grid>
  </main>
</template>

<script>
import BookingsGrid from '@/components/BookingsGrid'


export default {
  name: 'app',
  components: {
    'bookings-grid': BookingsGrid
  }
}
</script>

<style>

</style>