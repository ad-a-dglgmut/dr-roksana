<script lang="ts">
  import { Map } from 'mapbox-gl';
  import mapboxgl from 'mapbox-gl';
  import 'mapbox-gl/dist/mapbox-gl.css';
  import { onMount, onDestroy } from 'svelte';
  let map:any
  let mapContainer:any
  let lng:number, lat:number, zoom:number
  lat = 41.43236
  lng = 22.64482
  zoom = 18 

  onMount(() => {
    const initialState = { lng: lng, lat: lat, zoom: zoom };


    let map = new Map({
    container: mapContainer,
    accessToken:"pk.eyJ1IjoiZHJyb2tzYW5hcGIiLCJhIjoiY2x6a2RqcGp2MTBxajJscXg2NHFxNWdnNSJ9.b0Hg1aI5UWbW-QlrNSbkkA",
    style: `mapbox://styles/drroksanapb/clzkdoc7e007r01pe2qsqcu76`,
    center: [initialState.lng, initialState.lat],
    zoom: initialState.zoom,
    scrollZoom: true
  });

    map.on('load', () => {
      // Add marker after the map has finished loading
      new mapboxgl.Marker({
        color: '#000000', 
      }).setLngLat([22.64482, 41.43236]).addTo(map);
    });
    


  })


  onDestroy(() => {
    map.remove();
  });
</script>
<div class="w-full lg:w-fit">
  <div class="rounded-xl" id="map" bind:this={mapContainer}></div>
</div>
<style>

#map {
    width: 100%;
    height: 500px;
  }
@media (min-width: 1024px) {
#map {
    height: 400px;
    width:400px;
  }
}


@media (min-width: 1580px) {
#map {
    height: 700px;
    width:700px;
  }
}
</style>
