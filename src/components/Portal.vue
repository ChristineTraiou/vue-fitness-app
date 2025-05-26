<script setup>  
    const {closePortal} = defineProps({
        closePortal:Function,
    })
</script>

<template>
    <Teleport to="#portal">
        <div class="fixed top-0 left-0 w-screen h-screen bg-gray-300 portal-container bg-opacity-70">
            <div class="fixed flex flex-col -translate-x-1/2 -translate-y-1/2 top-2/4 left-2/4 max-w-[calc(100vw-60px)] max-h-[calc(100vh-60px)] sm:w-auto sm:h-auto w-full h-full items-center justify-center">
                <button 
                    class="mb-1 ml-auto mr-0 popup-close w-fit" 
                    aria-label="Popup schließen"
                    @click="closePortal">×
                </button>
                <slot/> 
            </div>     
        </div>
    </Teleport>
</template>
<!--
<style scoped>
    .portal-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 1001;
    }

    .portal-underlay {
        position: absolute;
        inset: 0;
        background-color: var(--background-primary);
        opacity: 0.7;
        z-index: 999;
        border: none;
        padding: 0;
    }

    .portal-content {
        position: absolute;
        z-index: 1000;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 600px;
        max-width: 90vw;
        max-height: 80vh;
        display: grid;
        place-items: center;
        background: var(--background-primary);
        background-color: green;
        color: white;
        border-radius: var(--border-radius-small);
        border: 1px solid var(--background-muted);
        padding: 1rem;
    }
</style>
-->