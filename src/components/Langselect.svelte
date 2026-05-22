<script lang="ts">
  import * as DropdownMenu from "./dropdown-menu";

  import mk from "../img/flags/Flag_of_North_Macedonia.big.png"
  import en from "../img/flags/Flag_of_the_United_Kingdom_(1-2).big.png"
  import gr from "../img/flags/Flag_of_Greece.big.png"


import mk_small from "../img/flags/Flag_of_North_Macedonia.svg.png"
import en_small from "../img/flags/Flag_of_the_United_Kingdom_(3-5).svg.png"
import gr_small from "../img/flags/Flag_of_Greece.svg.png"
import bg_small from "../img/flags/Flag_of_Bulgaria.svg.png"

    import { onMount } from "svelte";

  let lang:String = "mk"
  const localUrl:String =  import.meta.env.PUBLIC_URLBASE;
  const Navbar = () =>{

    let url:any = window.location.href
    if (url.substring(localUrl.length, localUrl.length + 2) === "mk")
      {
        lang = "mk" 
      }
    if(url.substring(localUrl.length, localUrl.length + 2) === "en")
      {
        lang = "en" 
      }

    if(url.substring(localUrl.length, localUrl.length + 2) === "gr")
      {
        lang = "gr" 
      }
  }

  onMount(()=>{
    Navbar();
  })

  const langs:string[] = ["mk", "en", "gr"];
  const currentLang:string = window.location.href.substring(localUrl.length, localUrl.length + 2)

  const changeLang = (lang:string) => {
    let url:string = window.location.href
    switch (lang) 
    {
      case "en":
        if(langs.includes(url.substring(localUrl.length, localUrl.length + 2)))
        {
          location.href = url.replace(currentLang, "en")
        }else {
          location.href = "/en"
        }

        break;


      case "gr":
        if(langs.includes(url.substring(localUrl.length, localUrl.length + 2)))
        {
          location.href = url.replace(currentLang, "gr")
        }else {
          location.href = "/gr"
        }

        break;

      case "mk":
        if(langs.includes(url.substring(localUrl.length, localUrl.length + 2)))
        {
          location.href = url.replace(currentLang, "mk")
        }else {
          location.href = "/mk"
        }

        break;
      }
    }
</script>
 
<div class="fixed lg:block hidden bottom-10 left-10 z-50">
{#if lang === "mk"}
<DropdownMenu.Root>
  <DropdownMenu.Trigger><div class="w-20 h-20"><img class="object-scale-down rounded-full" alt="mk" src={mk.src}/><div/></DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Group>
      <DropdownMenu.Item>
          <button on:click={()=>changeLang("en")} class="w-full h-full justify-center items-center flex py-1  hover:bg-slate-200">EN<img alt="en" class="ml-2" src={en_small.src}/></button>
</DropdownMenu.Item>
      <DropdownMenu.Item>
          <button on:click={()=>changeLang("gr")} class="w-full h-full justify-center items-center flex py-1  hover:bg-slate-200">GR<img alt="gr" class="ml-2" src={gr_small.src}/></button>
</DropdownMenu.Item>
    </DropdownMenu.Group>
  </DropdownMenu.Content>
</DropdownMenu.Root>
{:else if lang === "en"}
<DropdownMenu.Root>
  <DropdownMenu.Trigger><div class="w-20 h-20"><img class="object-scale-down rounded-full" alt="en" src={en.src}/><div/></DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Group>
      <DropdownMenu.Item>
          <button on:click={()=>changeLang("mk")} class="w-full h-full justify-center items-center flex py-1  hover:bg-slate-200">MK<img alt="mk" class="ml-2" src={mk_small.src}/></button>
</DropdownMenu.Item>
      <DropdownMenu.Item>
          <button on:click={()=>changeLang("gr")} class="w-full h-full justify-center items-center flex py-1  hover:bg-slate-200">GR<img alt="gr" class="ml-2" src={gr_small.src}/></button>
</DropdownMenu.Item>
    </DropdownMenu.Group>
  </DropdownMenu.Content>
</DropdownMenu.Root>
  {:else if lang === "gr"}
<DropdownMenu.Root>
  <DropdownMenu.Trigger><div class="w-20 h-20"><img class="object-scale-down rounded-full" alt="gr" src={gr.src}/><div/></DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Group>
      <DropdownMenu.Item>
          <button on:click={()=>changeLang("en")} class="w-full h-full justify-center items-center flex py-1  hover:bg-slate-200">EN<img alt="en" class="ml-2" src={en_small.src}/></button>
</DropdownMenu.Item>
      <DropdownMenu.Item>
          <button on:click={()=>changeLang("mk")} class="w-full h-full justify-center items-center flex py-1  hover:bg-slate-200">MK<img alt="mk" class="ml-2" src={mk_small.src}/></button>
</DropdownMenu.Item>
    </DropdownMenu.Group>
  </DropdownMenu.Content>
</DropdownMenu.Root>
{/if}
</div>
