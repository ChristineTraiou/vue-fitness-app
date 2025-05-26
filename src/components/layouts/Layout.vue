<script setup>

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
                <img 
                    src="https://avatars.githubusercontent.com/u/208513206?v=4" 
                    alt="Profile Picture of Christine Traiou"
                    class="border-2 border-gray-100 rounded-full shadow-md aspect-square"
                    width="44px"
                    height="44px"
                >
                <span>Christine Traiou</span>
                <i class="text-2xl fa-brands fa-github" aria-hidden="true"></i>
            </a>
        </small>
    </footer>
</template>

<!--
<style scoped>
    header, footer, main {
        margin: 0 auto;
        padding: 1rem;
        width: 100%;
        max-width: 600px;
    }

    main {
        flex: 1;
    }

    footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        padding: 2rem 0;
        padding-bottom: 3rem;
    }

    footer a {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.3rem;
        padding-right: 0.5rem;
        background-color: var(--background-muted);
        border-radius: 4rem;
        border: 1px solid transparent;
        transition-duration: 200ms;
        text-decoration: none;
    }

    footer a:hover {
        border-color: var(--color-link);
    }

    footer a img {
        width: 44px;
        height:44px;
        border-radius: 100%;
        aspect-ratio: 1/1;
    }
</style>
-->