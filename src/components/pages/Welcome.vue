<script setup>
   defineProps ({
        changeDisplay: Function,
    })
</script>

<template>
    <section id="welcome" class="flex flex-col gap-6 sm:gap-8">
        <div class="flex flex-col gap-3 benefits">
            <h2>Complete this Programm</h2>
            <h3>if you want to...</h3>
            <ul>
                <li>
                    <span class="pl-1 fa-solid fa-check" aria-hidden="true"></span>
                    Follow a simple programm with proven results
                </li>
                <li>
                    <span class="pl-1 fa-solid fa-check" aria-hidden="true"></span>
                    Get fit, healthy, strong
                </li>
                <li>
                    <span class="pl-1 fa-solid fa-check" aria-hidden="true"></span>
                    Learn more about gym, training and technique
                </li>
            </ul>

            <h3>The training plan</h3>
            <p>This training plan follows a structure known as the <strong>Bro split</strong>.</p>
            <h4>
                <span class="mx-1 fa-solid fa-dumbbell" aria-hidden="true"></span>Push
                <span class="mx-1 fa-solid fa-arrow-right-long" aria-hidden="true"></span> 
                <span class="mx-1 fa-solid fa-weight-hanging" aria-hidden="true"></span>Pull
                <span class="mx-1 fa-solid fa-arrow-right-long" aria-hidden="true"></span>
                <span class="mx-1 fa-solid fa-bolt" aria-hidden="true"></span>Legs
                <span class="mx-1 fa-solid fa-arrow-right-long" aria-hidden="true"></span>
                <span class="mx-1 fa-solid fa-repeat" aria-hidden="true"></span>Repeat
            </h4>

            <div class="card challenge">
                <h3>Your Challenge</h3>
                <p>Complete all the workouts and track your progress along the way!</p>
                <p>Do you accept?</p>
                <button 
                    type="button"
                    aria-label="Beginn Challenge"
                    @click="() => changeDisplay(2)"
                >Beginn Challenge  
                    <span aria-hidden="true">&rarr;</span>
                </button>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>
