<script lang="ts">
  import * as Card from "./card/index.js";
  import * as Carousel from "./carousel/index.js";
  import { type CarouselAPI } from "./carousel/context.js";

type CarouselItems = {
  name:string
  content:string
}
  export let reviews:CarouselItems[];

  let api:CarouselAPI;
  let count:number;
  let current:number;

  $: if(api) {
    count = api.scrollSnapList().length;
    current = api.selectedScrollSnap() + 1;
    api.on("select", () => {
      current = api.selectedScrollSnap() + 1;
    });
  }
</script>

<div class="flex justify-center mt-20 h-full w-full">
<Carousel.Root bind:api class="md:w-full lg:hidden h-full max-w-xs md:max-w-full">
  <Carousel.Content>
    {#each reviews as review}
      <Carousel.Item class="md:basis-1/2 ">
        <div class="p-1">
          <Card.Root class="h-full">
            <Card.Content
              class="flex aspect-square  justify-center p-6"
            > 
              <div >
                <p class="text-red-500 text-3xl font-semibold">{review.name}</p>
                <p class=" text-xl mt-10">{review.content}</p>
              </div>
                 
            </Card.Content>
          </Card.Root>
        </div>
      </Carousel.Item>
    {/each}
  </Carousel.Content>
  <Carousel.Previous class="hidden"/>
  <Carousel.Next class="hidden"/>
</Carousel.Root>
</div>
<div class="w-full text-gray-500  flex lg:hidden justify-center mt-10">
  {current}/{count}
</div>
<div class="w-full hidden lg:flex mt-20 overflow-x-scroll">
    {#each reviews as review}
        <div class="mx-3">
          <Card.Root class="h-full w-[450px]">
            <Card.Content
              class="flex aspect-square  justify-center p-6"
            > 
              <div> 
                <p class="text-red-500 text-3xl font-semibold">{review.name}</p>
                <p class=" text-xl mt-10">{review.content}</p>
              </div>
                 
            </Card.Content>
          </Card.Root>
        </div>
    {/each}
</div>
