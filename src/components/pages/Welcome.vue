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
            <ul class="ml-4 list-disc">
                <li>Follow a simple programm with proven results</li>
                <li>Get fit, healthy, strong</li>
                <li>Learn more about gym, training and technique</li>
            </ul>

            <h3>The training plan</h3>
            <p>This training plan follows a structure known as the <strong>Bro split</strong>.</p>
            <h4><i>Push <span aria-hidden="true">&rarr;</span> Pull <span aria-hidden="true">&rarr;</span> Legs <span aria-hidden="true">&rarr;</span> Repeat</i></h4>

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