<script setup>
    import {gymHealthFacts} from '../../utils/index.js'
    import Grid from '../Grid.vue'

    const randomNumber = Math.floor(Math.random() * gymHealthFacts.length);
    const todaysFact = gymHealthFacts[randomNumber];
    
    const props = defineProps({
        selectWorkout: Function,
        firstIncompleteWorkoutIndex: Number,
        changeDisplay: Function,
        handleReset: Function,
    })

</script>

<template>
    <section id="dashboard" class="flex flex-col gap-6">
        <div class="card tip-container sm:gap-4">
            <h2>Welcome in the Fitness App!</h2>
            <h3>Daily tip:</h3>
            <p>{{todaysFact}}</p>
            <button 
                type="button"
                @click = "selectWorkout(firstIncompleteWorkoutIndex < 0 ? 0 : firstIncompleteWorkoutIndex)"
            >Start Workout <span aria-hidden="true">&rarr;</span></button>
        </div>
        <Grid 
            v-bind="props"
            :changeDisplay="changeDisplay"
            :handleReset="handleReset"
        />
    </section>
</template>

<style scoped>

</style>