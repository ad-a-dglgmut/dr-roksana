<script>
  import { onMount } from 'svelte';
  let isLoaded = false;

  onMount(() => {
    const handleLoad = () => {
      isLoaded = true;
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  });
</script>

{#if !isLoaded}
  <div class="preloader">
    <div class="spinner">
      Loading...
    </div>
  </div>
{/if}

<style>
  .preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  }

  .spinner {
    font-size: 1.5rem;
    color: #333;
  }
</style>
