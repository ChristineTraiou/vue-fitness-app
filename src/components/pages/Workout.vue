<script setup>
   import {ref, nextTick, computed, onMounted, onUnmounted} from 'vue'
   import {workoutProgram, exerciseDescriptions} from '../../utils/index.js'
   import Portal from '../Portal.vue'
   
   //Variables with its type, that are beeing declared outside from this File
   const {data, selectedWorkout} = defineProps({
      data: Object,
      selectedWorkout: Number,
      isWorkoutComplete: Boolean,
      saveWorkout: Function,
   })
   const workoutType = ['Push','Pull','Legs'];
   
   const {warmup, workout} = workoutProgram[selectedWorkout];
   
   // Store Value that changes
   let selectedExercise = ref(null);
   
   // Auto Update when changing
   const exerciseDescription = computed( () => exerciseDescriptions[selectedExercise.value]);

   const isOpen = ref(false);
   let previouslyFocusedElement = null;

   //PopUp Focus setzen
   function openPortal() {
      previouslyFocusedElement = document.activeElement; // Fokus merken
      isOpen.value = true;
  
      nextTick(() => {
         const popupClose = document.querySelector('.popup-close');
         
         if (popupClose) popupClose.focus();
      });
   }
   
   //PopUp mit Klick schließen
   function closePortal() {
      selectedExercise.value = null;
      previouslyFocusedElement.focus();
   }

   //PopUp mit Escape schließen
   function handleKeyDown(e) {
      if (e.key === 'Escape') closePortal();
   }

   onMounted(() => {
      document.addEventListener('keydown', handleKeyDown);
   });

   onUnmounted(() => {
      document.removeEventListener('keydown', handleKeyDown);
   });
</script>

<template>
   <Portal v-if="selectedExercise" :closePortal="closePortal">
     <div 
         class="relative p-4 overflow-y-scroll bg-white border-2 border-gray-300 exercise-description portal-content rounded-xl"
         role="dialog"
         aria-modal="true"
         aria-labelledby="Exercise Description">
         
         <h3 id="popup-heading" class="capitalize">{{selectedExercise}}</h3>
         <div>
            <small>Description</small>
            <p>{{exerciseDescription}}</p>
         </div>   
      </div>
   </Portal>

   <section id="workout-card" class="flex flex-col gap-6">
      <div class="flex flex-col plan-card card">
         <div class="flex items-center justify-between gap-4 plan-card-header">        
            <p>Day {{ selectedWorkout < 9 ? '0' + (selectedWorkout + 1) : (selectedWorkout + 1)}}</p>
            <span class="fa-solid fa-dumbbell" ></span>
         </div>
         <h2>{{workoutType[selectedWorkout%3]}} Workout</h2>
      </div>
      <div class="flex flex-col gap-8 overflow-x-scroll scrollbar">
         <table class="table-fixed">
            <caption>Warmup exercises</caption>
            <thead>
               <tr>
                  <th scope="col" class="name">Warmup</th>
                  <th scope="col">Sets</th>
                  <th scope="col">Reps</th>
                  <th scope="col" class="weights">Weights</th>
               </tr>
            </thead>
            <tbody>
               <tr :key="warmupIdx" v-for="(warmup, warmupIdx) in (warmup)">
                  <th scope="row" :id="`warmup-${warmupIdx}`" class="name"> 
                     <span :id="`warmup-name-${warmupIdx}`">{{warmup.name}}</span>
                     <button 
                        type="button" 
                        class="tooltip" 
                        :aria-labelledby="`warmup-name-${warmupIdx}`"
                        @click="() => {selectedExercise = warmup.name; openPortal();}"
                     >                   
                        <span
                           class="fa-regular fa-circle-question hover:text-blue-800" 
                           aria-hidden="true"
                        ></span>
                     </button>
                  </th>
                  <td :headers="`warmup-${warmupIdx}`">
                     <span>{{warmup.sets}}</span>
                  </td>
                  <td :headers="`warmup-${warmupIdx}`">
                     <span>{{warmup.reps}}</span>
                  </td>
                  <td :headers="`warmup-${warmupIdx}`">
                     <input 
                        type="text" 
                        class="weights max-w-[8ch]" 
                        placeholder="14kg" 
                        aria-label="Weight: in kilograms" 
                        disabled
                     >
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
      <div class="flex flex-col gap-8 overflow-x-scroll scrollbar">
         <table class="table-fixed">
            <caption>Workout exercises</caption>
            <thead>
               <tr>
                  <th scope="col" class="name">Workout</th>
                  <th scope="col">Sets</th>
                  <th scope="col">Reps</th>
                  <th scope="col" class="weights">Weights</th>
               </tr>
            </thead>
            <tbody>
               <tr :key="workoutIdx" v-for="(workout, workoutIdx) in (workout)">
                  <th scope="row" class="name" :id="`workout-${workoutIdx}`"> 
                     <span :id="`workout-name-${workoutIdx}`">{{workout.name}}</span>
                     <button 
                        type="button" 
                        class="tooltip" 
                        :aria-labelledby="`workout-name-${workoutIdx}`"
                        @click="() => {selectedExercise = workout.name; openPortal();}">
                        <span class="fa-regular fa-circle-question" aria-hidden="true"></span>
                     </button>
                  </th>
                  <td :headers="`workout-${workoutIdx}`">
                     <span>{{workout.sets}}</span>
                  </td>
                  <td :headers="`workout-${workoutIdx}`">
                     <span>{{workout.reps}}</span>
                  </td>
                  <td :headers="`workout-${workoutIdx}`">
                     <input 
                        type="text" 
                        class="weights max-w-[8ch]" 
                        placeholder="14kg" 
                        aria-label="Weight: in kilograms"
                        v-model="data[selectedWorkout][workout.name]"
                     >
                  </td>
               </tr>
            </tbody>
         </table>
      </div>

      <div class="btns">
         <button 
            type="button" 
            aria-label="Save & Exit Portal"
            @click = "saveWorkout">
            Save & Exit
            <span class="fa-solid fa-save" aria-hidden="true"></span>
         </button>
         <button 
            type="button" 
            aria-label="Complete Portal"
            @click = "saveWorkout"
            :disabled="!isWorkoutComplete">
            Complete
            <span class="fa-solid fa-check" aria-hidden="true"></span>
         </button>
      </div>
   </section>
</template>

<style scoped>

</style>