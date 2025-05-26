<script setup>
    import {workoutProgram} from '../utils/index.js'

    const workoutTypes = ['Push', 'Pull', 'Legs'];

    defineProps ({
        selectWorkout: Function,
    })

</script>

<template>
    <div id ="grid" class="grid grid-cols-2 gap-4 mt-8 sm:grid-cols-4">
        <button 
            class="flex flex-col items-start w-full card-button plan-card"
            :aria-label="`Day ${workoutIdx+ 1}: ${workoutTypes[workoutIdx % 3]} Training`"
            :key = "workoutIdx" 
            v-for = "(workout, workoutIdx) in Object.keys(workoutProgram)"
            @click="() => selectWorkout(workoutIdx)"
            disabled = ""
        >               
            <div class="flex items-center justify-between flex-1 w-full gap-2">
                <span> Day {{ workoutIdx < 9 ? '0' + (workoutIdx + 1) : workoutIdx + 1 }}</span>

                <i class="fa-solid fa-dumbbell" v-if="workoutIdx % 3 == 0" aria-hidden="true"></i>
                <i class="fa-solid fa-weight-hanging" v-if="workoutIdx % 3 == 1" aria-hidden="true"></i>
                <i class="fa-solid fa-bolt" v-if="workoutIdx % 3 == 2" aria-hidden="true"></i>
            </div>
            <span><strong>{{workoutTypes[workoutIdx % 3]}}</strong></span>
        </button>
    </div>
</template>

<!--
<style scoped>
    #grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1rem;
    }

    #grid button {
        width: 100%;
    }

    .plan-card {
        display: flex;
        flex-direction: column;
    }

     .plan-card div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 0.5rem;
    }

    .plan-card div span {
        text-align: left;
    }

      @media (min-width: 640px) {
          #grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
        }
    }
</style>
-->