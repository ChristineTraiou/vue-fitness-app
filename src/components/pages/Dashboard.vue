<script setup>
    import {gymHealthFacts} from '../../utils/index.js'
    import Grid from '../Grid.vue'

    const randomNumber = Math.floor(Math.random() * gymHealthFacts.length);
    const todaysFact = gymHealthFacts[randomNumber];
    
    //Need Access to <Grid/>
    const props = defineProps({
        selectWorkout: Function,
    })
</script>

<template>
    <section id="dashboard" class="gap-8">
        <div class="card tip-container sm:gap-4">
            <h2>Welcome here!</h2>
            <h3>Daily tip:</h3>
            <p>{{todaysFact}}</p>
            <button type="button">Start Workout <span aria-hidden="true">&rarr;</span></button>
        </div>
        <Grid v-bind="props"/>
    </section>
</template>

<!--
<style scoped>
    .tip-container, .tip-container div, #dashboard {
        display: flex;
    }

    .tip-container,#dashboard {
       flex-direction: column;
    }

    #dashboard {
       gap: 2rem;
    }

    .tip-container {
       gap: 0.5rem;
    }

    @media (min-width: 640px) {
         .tip-container {
            gap: 1rem;
        }
    }
</style>
-->