<script setup>
    const {changeDisplay} = defineProps ({
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
                    <i class="pl-1 fa-solid fa-check" aria-hidden="true"></i>
                    Follow a simple programm with proven results
                </li>
                <li>
                    <i class="pl-1 fa-solid fa-check" aria-hidden="true"></i>
                    Get fit, healthy, strong
                </li>
                <li>
                    <i class="pl-1 fa-solid fa-check" aria-hidden="true"></i>
                    Learn more about gym, training and technique
                </li>
            </ul>

            <h3>The training plan</h3>
            <p>This training plan follows a structure known as the <strong>Bro split</strong>.</p>
            <h4>
                <i class="mx-1 fa-solid fa-dumbbell" aria-hidden="true"></i>Push
                <i class="mx-1 fa-solid fa-arrow-right-long" aria-hidden="true"></i> 
                <i class="mx-1 fa-solid fa-weight-hanging" aria-hidden="true"></i>Pull
                <i class="mx-1 fa-solid fa-arrow-right-long" aria-hidden="true"></i>
                <i class="mx-1 fa-solid fa-bolt" aria-hidden="true"></i>Legs
                <i class="mx-1 fa-solid fa-arrow-right-long" aria-hidden="true"></i>
                <i class="mx-1 fa-solid fa-repeat" aria-hidden="true"></i>Repeat
            </h4>

            <div class="card challenge">
                <h3>Your Challenge</h3>
                <p>Complete all the workouts and track your progress along the way!</p>
                <p>Do you accept?</p>
                <button 
                    type="button"
                    @click="() => changeDisplay(2)"
                >Beginn Challenge  
                    <span aria-hidden="true">&rarr;</span>
                </button>
            </div>
        </div>
    </section>
</template>

<!--
<style scoped>
    #welcome, .benefits, .challenge {
        display: flex;
        flex-direction: column;
    }

    #welcome {
        gap:1.5rem;
    }

    .benefits {
        gap:0.5rem;
    }

    .challenge {
        gap:0.2rem;
    }


    @media (min-width: 640px) {
         #welcome {
            gap:2rem;
        }

        .benefits {
            gap:1rem;
        }
    }
</style>
-->