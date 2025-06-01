<script setup>
    import {ref, computed, onMounted} from 'vue'
    import {workoutProgram} from './utils/index.js'
    import Workout from './components/pages/Workout.vue'
    import Dashboard from './components/pages/Dashboard.vue'
    import Welcome from './components/pages/Welcome.vue'
    import Layout from './components/layouts/Layout.vue'
    
    // Initialize 
    const defaultData = {};

    // workoutIdx => :Key, workoutProgram => Object {0:,1:,2:,...}
    for (let workoutIdx in workoutProgram) {
        const workoutData = workoutProgram[workoutIdx];

        defaultData[workoutIdx] = {};
        
        //e => element of Array, workoutData.workout => Array of workout objects [{name:,sets:,reps:}, {name:,sets,reps}, ...]
        for (let e of workoutData.workout){
            defaultData[workoutIdx][e.name] = ''
        }
    }
    
    const selectedDisplay = ref(1);
    const data = ref(defaultData);
    const selectedWorkout = ref(-1); // does not exist yet

    const isWorkoutComplete = computed(() => {
        const currWorkout = data.value?.[selectedWorkout.value];

        if (!currWorkout){
            return false
        }

        const isCompleteCheck = Object.values(currWorkout).every(ex => !!ex)
        return isCompleteCheck
    })

    const firstIncompleteWorkoutIndex = computed(()=> {
        const allWorkouts = data.value;

        if (!allWorkouts) {
            return -1
        }

        for (const [index, workout] of Object.entries(allWorkouts)){
            const isComplete = Object.values(workout).every(ex => !!ex)

            if (!isComplete) {
                return parseInt(index)
            }
        }

        return -1 //all complete
    })

    // Change Page
    function changeDisplay(idx){
        selectedDisplay.value = idx;
    }

    // Select Workout
    function selectWorkout(idx){
        selectedDisplay.value = 3;
        selectedWorkout.value = idx;  
    }

    // Save Workout
    function saveWorkout(){
        localStorage.setItem('workouts', JSON.stringify(data.value))

        selectedDisplay.value = 2
        selectedWorkout.value = -1 // deselect
    }

    // Reset All
    function handleReset(){
        data.value = Object.keys(defaultData).reduce((acc, key) => {
            acc[key] = Object.keys(defaultData[key]).reduce((exAcc, exKey) => {
            exAcc[exKey] = null;
            return exAcc;
            }, {});
            return acc;
        }, {});

        selectedDisplay.value = 2
        selectedWorkout.value = -1;
        //data.value = defaultData;
        localStorage.removeItem('workouts');
    }

    // Restore user’s progress
    onMounted(() => {
        if (!localStorage){
            return
        }

        if (localStorage.getItem('workouts')){
            const savedData = JSON.parse(localStorage.getItem('workouts'));
            data.value = savedData;
            selectedDisplay.value = 2;
        }
    });

</script>

<template>
    <Layout>
        <Welcome 
            v-if = "selectedDisplay == 1"
            :changeDisplay="changeDisplay"/>
        <Dashboard 
            v-if = "selectedDisplay == 2"
            :firstIncompleteWorkoutIndex ="firstIncompleteWorkoutIndex"
            :selectWorkout="selectWorkout"
            :changeDisplay="changeDisplay"
            :handleReset = "handleReset"/>
        <Workout 
            v-if="workoutProgram?.[selectedWorkout]"
            :data="data" 
            :isWorkoutComplete="isWorkoutComplete"
            :selectedWorkout="selectedWorkout" 
            :saveWorkout="saveWorkout"/>
    </Layout>
</template>

<style scoped>

</style>
