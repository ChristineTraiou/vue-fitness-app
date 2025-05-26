<script setup>
    import {ref} from 'vue'
    import {workoutProgram} from './utils/index.js'
    import Workout from './components/pages/Workout.vue'
    import Dashboard from './components/pages/Dashboard.vue'
    import Welcome from './components/pages/Welcome.vue'
    import Layout from './components/layouts/Layout.vue'
    
    //Initialize 
    const defaultData = {};

    //workoutIdx => :Key, workoutProgram => Object {0:,1:,2:,...}
    for (let workoutIdx in workoutProgram) {
        const workoutData = workoutProgram[workoutIdx];

        defaultData[workoutIdx] = {};
        
        //e => element of Array, workoutData.workout => Array of workout objects [{name:,sets:,reps:}, {name:,sets,reps}, ...]
        for (let e of workoutData.workout){
            defaultData[workoutIdx][e.name] = ''
        }
    }
    
    const selectedDisplay = ref(1);
    const selectedWorkout = ref(-1);
    const data = ref(defaultData);

    //Change Page
    function changeDisplay(idx){
        selectedDisplay.value = 3;
        selectedDisplay.value = idx;
    }

    //Select Workout
    function selectWorkout(idx){
        selectWorkout.value = idx;
    }

    //Save Workout
    function saveWorkout(){
        
    }
</script>

<template>
    <Layout>
        <Welcome 
            :changeDisplay="changeDisplay"
            v-if="selectedDisplay == 1"/>
        <Dashboard 
            :selectWorkout="selectWorkout"
            v-if = "selectedDisplay == 2"/>
        <Workout 
            :data = "data" 
            :selectedWorkout = "selectedWorkout" 
            v-if = "workoutProgram?.[selectedWorkout]"/>
    </Layout>
</template>

<style scoped>

</style>
