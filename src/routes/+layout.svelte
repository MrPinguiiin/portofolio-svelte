<script>
    import { onMount } from 'svelte';

    onMount(() => {
        const script = document.createElement('script');
        script.src = "https://cdn.jsdelivr.net/npm/particles.js";
        // script.onload = () => {
        //     particlesJS.load('particles-js', '/particlesjs-config.json', function() {
        //         console.log('callback - particles.js config loaded');
        //     });
        // };
        document.body.appendChild(script);
    });
</script>

<slot />
