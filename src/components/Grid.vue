<script setup>
    import {workoutProgram} from '../utils/index.js'

    const workoutTypes = ['Push', 'Pull', 'Legs'];

   const props = defineProps({
        selectWorkout: Function,
        firstIncompleteWorkoutIndex: Number,
        changeDisplay: Function,
        handleReset: Function,
    })


</script>

<template>
    <div id ="grid" class="grid grid-cols-2 gap-4 mt-8 sm:grid-cols-4">
        <button 
            class="flex flex-col items-start w-full card-button plan-card"
            v-for = "(workout, workoutIdx) in Object.keys(workoutProgram)"
            :aria-label="`Day ${workoutIdx+ 1}: ${workoutTypes[workoutIdx % 3]} Training`"
            :key = "workoutIdx" 
            @click="() => selectWorkout(workoutIdx)"
            :disabled = "workoutIdx > 0 && workoutIdx > firstIncompleteWorkoutIndex"
        >               
            <div class="flex items-center justify-between flex-1 w-full gap-2">
                <span> Day {{ workoutIdx < 9 ? '0' + (workoutIdx + 1) : workoutIdx + 1 }}</span>

                <span class="fa-solid fa-dumbbell" v-if="workoutIdx % 3 == 0" aria-hidden="true"></span>
                <span class="fa-solid fa-weight-hanging" v-if="workoutIdx % 3 == 1" aria-hidden="true"></span>
                <span class="fa-solid fa-bolt" v-if="workoutIdx % 3 == 2" aria-hidden="true"></span>
            </div>
            <span><strong>{{workoutTypes[workoutIdx % 3]}}</strong></span>
        </button>
    </div>
    <div class="btns">
        <button 
            type="button" 
            aria-label="Return Back to Start"
            @click="() => changeDisplay(1)"
        > 
            <span class="mx-1 fa-solid fa-arrow-left" aria-hidden="true"></span>
            <span>Back</span>
        </button>

        <button 
            type="button" 
            aria-label="Reset"
            @click="handleReset"
            :disabled="firstIncompleteWorkoutIndex == 0"
        > 
            <span>Reset</span>
            <span class="mx-1 fa-solid fa-rotate-left" aria-hidden="true"></span>
        </button>
    </div>
</template>

<style scoped>
    
</style>