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
                    aria-label="Close Popup"
                    @click="closePortal"
                >
                    ×
                </button>
                <slot /> 
            </div>     
        </div>
    </Teleport>
</template>

<style scoped>
    
</style>