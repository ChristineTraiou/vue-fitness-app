<script setup>
    import profilePicWebp from '../../assets/img/GitHub_ProfilePicture.webp'
    import profilePicJpg from '../../assets/img/GitHub_ProfilePicture.jpg'  
</script>

<template>
    <header class="container w-full max-w-xl p-4">
        <h1>Hello User</h1>
    </header>

    <main class="container w-full max-w-xl p-4">
        <slot />
    </main>

    <footer class="container flex flex-col items-center w-full max-w-xl gap-2 py-8 pb-12">
        <small class="text-center">Created by 
            <a 
                href="https://github.com/ChristineTraiou" 
                target="_blank" 
                rel="noopener noreferrer"
                class="flex items-center gap-2 p-2 no-underline duration-200 border-2 border-transparent rounded-full hover:border-blue-800"
            >               
                <picture>
                    <source 
                        :srcset="profilePicWebp" 
                        type="image/webp" 
                    />
                    <img
                        :src="profilePicJpg"
                        alt="Profile Picture of Christine Traiou"
                        loading="lazy"
                        class="border-2 border-gray-100 rounded-full shadow-md aspect-square"
                        width="132"
                        height="132"
                        style="width: 44px; height: 44px;"
                    />
                </picture>
                <span>Christine Traiou</span>
                <span class="text-2xl fa-brands fa-github" aria-hidden="true"></span>
            </a>
        </small>
    </footer>
</template>

<style scoped>
</style>