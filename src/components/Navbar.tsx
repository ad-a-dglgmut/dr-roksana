import logo from "../img/logo.png" 
import {useEffect} from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { Drawer as DrawerPrimitive } from "vaul"

import { Check, ChevronDown, ChevronUp, Menu, MapPin, Phone, Mail } from "lucide-react"
import mk from "../img/flags/Flag_of_North_Macedonia.svg.png"
import en from "../img/flags/Flag_of_the_United_Kingdom_(3-5).svg.png"
import gr from "../img/flags/Flag_of_Greece.svg.png"

import { cn } from "../lib/utils.ts"

const localUrl:String =  import.meta.env.PUBLIC_URLBASE;

let url:any = window.location.href
const Navbar = () =>{
  let nav:any = <NavbarMk/> 

    if (url.substring(localUrl.length, localUrl.length + 2) === "mk")
      {
        nav = <NavbarMk/> 
      }
    if (url.substring(localUrl.length, localUrl.length + 2) === "en")
      {
        nav = <NavbarEn/>
      }

    if (url.substring(localUrl.length, localUrl.length + 2) === "gr")
      {
        nav = <NavbarGr/>
      }
  return (
    nav
  ) 
}


const NavbarMk = () => {


const components: { title: string; href: string; description: string }[] = [
  {
    title: "Естетска Стоматологија",
    href: "/mk/cosmetic_dentistry",
    description:
      "Оштетувањата на забите предизвикани од кариес, од траума можат доста успешно да се решаваат во подрачијетона естетската стоматологија.",
  },
  {
    title: "Стоматолошка протетика",
    href: "/mk/dental_prosthetics",
    description:
      "Зошто треба да се надоместат заби кои се изгубени?",
  },
  {
    title: "Детска и превентивна стоматологија",
    href: "/mk/childrens_and_preventive_dentistry",
    description:
      "Посебно сме горди што нашиот тим го нарекуваат ПРИЈАТЕЛИ НА ДЕЦАТА ...",
  },
  {
    title: "Пародонтологија",
    href: "/mk/pareodonthology",
    description: "Тоа е многу битен дел од стоматолошките третмани без кој денес неможе зда се замисли квалитетен и успешен конзервативно-протетски третман...",
  },
  {
    title: "Ласерска терапија",
    href: "/mk/laser_therapy",
    description:
      "Напредокот на ласерската технологија во последниот период дојде до степен да неговата ефикасност се користи и во секојдневната стоматолошка практика.",
  },
]

  const changeLang = (lang:string) => {
    console.log("works")
    switch (lang) 
    {
      case "en":
        if(url.includes("mk"))
        {
          location.href = url.replace("mk", "en")
        }else {
          location.href = "/en"
        }

        break;


      case "gr":
        if(url.includes("mk"))
        {
          location.href = url.replace("mk", "gr")
        }else {
          location.href = "/gr"
        }

        break;

      case "bg":
        if(url.includes("mk"))
        {
          location.href = url.replace("mk", "bg")
        }else {
          location.href = "/bg"
        }

        break;
      }
    }

  return (
    <div className="w-full fixed z-50 2xl:px-48 px-10 h-[96px] flex items-center justify-between py-2 bg-red-500">
    <div className="h-full flex items-center">
      <a href={`${import.meta.env.PUBLIC_URLBASE}mk/`}>
        <img src={logo.src} className="w-[371px] " alt="logo"/> 
      </a>
    </div>
    <div className="lg:flex hidden max-h-20 items-center text-white">
      {
        url.substring(localUrl.length, localUrl.length + 2) === "mk" ?
         <a href={`${import.meta.env.PUBLIC_URLBASE}mk/#aboutUs`} className="font-semibold text-2xl xl:text-3xl 2xl:mr-10 mr-3">За нас</a> : 
         <a href={`${import.meta.env.PUBLIC_URLBASE}#aboutUs`} className="font-semibold text-2xl xl:text-3xl 2xl:mr-10 mr-3">За нас</a> 
      }
      <NavigationMenu className="2xl:mr-10 mr-3">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className=" text-2xl xl:text-3xl font-semibold">Интервенции</NavigationMenuTrigger>
            <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-3 p-4 xl:w-[600px] xl:grid-cols-2 lg:w-[300px] ">
                          {components.map((component) => (
                            <ListItem
                              key={component.title}
                              title={component.title}
                              href={component.href}
                            >
                            {component.description}
                            </ListItem>
                          ))}
                        </ul>
          </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      {
        url.substring(localUrl.length, localUrl.length + 2) === "mk" ?
         <a href={`${import.meta.env.PUBLIC_URLBASE}mk/#reviews`} className="font-semibold text-2xl xl:text-3xl 2xl:mr-10 mr-3">Рецензии</a> : 
         <a href={`${import.meta.env.PUBLIC_URLBASE}#reviews`} className="font-semibold text-2xl xl:text-3xl 2xl:mr-10 mr-3">Рецензии</a> 
      }
      {
        url.substring(localUrl.length, localUrl.length + 2) === "mk" ?
         <a href={`${import.meta.env.PUBLIC_URLBASE}mk/#contact`} className="font-semibold text-2xl xl:text-3xl 2xl:mr-10 mr-3">Контакт</a> : 
         <a href={`${import.meta.env.PUBLIC_URLBASE}#contact`} className="font-semibold text-2xl xl:text-3xl 2xl:mr-10 mr-3">Контакт</a> 
      }
    </div>
    <div className="flex items-center lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu color="white" size="48" />
        </SheetTrigger>
          <SheetContent>
            <SheetHeader className="border-b-2 pb-4 border-white">
              <SheetTitle className="text-white font-bold text-6xl">Мени</SheetTitle>
            </SheetHeader>
            <div className="w-full flex flex-col text-center h-5/6 justify-between mt-16">
              <div className="text-white block ">
              <div className="mb-10">
                <SheetPrimitive.Close>
                {

                  url.substring(localUrl.length, localUrl.length + 2) === "mk" ?
                  <a href={`${import.meta.env.PUBLIC_URLBASE}mk/#aboutUs`} className="text-4xl">За нас</a> :
                  <a href={`${import.meta.env.PUBLIC_URLBASE}#aboutUs`} className="text-4xl">За нас</a> 
                }
                </SheetPrimitive.Close>
              </div>
              <div className="my-10">
                <Drawer>
                  <DrawerTrigger className="text-4xl">Интервенции</DrawerTrigger>
                    <DrawerContent>
                      <DrawerHeader>

                        <ul className="grid gap-3 p-4  xl:grid-cols-2  ">
                          {components.map((component) => (
                            <a href={component.href} className="block select-none space-y-1 border-y rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-200 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                              <div className="text-xl font-semibold leading-none">{component.title}</div>
                              <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                                {component.description}
                              </p>
                            </a>
                          ))}
                        </ul>
                      </DrawerHeader>
                    <DrawerFooter>
                      <DrawerClose>
                        <div className="rounded-full bg-red-500 text-white font-semibold">
                          Затвори
                        </div>
                      </DrawerClose>
                    </DrawerFooter>
                    </DrawerContent>
                </Drawer>
              </div>
              <div className="my-10">
                <SheetPrimitive.Close>
                {

                  url.substring(localUrl.length, localUrl.length + 2) === "mk" ?
                  <a href={`${import.meta.env.PUBLIC_URLBASE}mk/#contact`} className="text-4xl">Контакт</a> :
                  <a href={`${import.meta.env.PUBLIC_URLBASE}#contact`} className="text-4xl">Контакт</a> 
                }
                </SheetPrimitive.Close>
              </div>
              <div className="my-10">
                <SheetPrimitive.Close>
                {

                  url.substring(localUrl.length, localUrl.length + 2) === "mk" ?
                  <a href={`${import.meta.env.PUBLIC_URLBASE}mk/#reviews`} className="text-4xl">Рецензии</a> :
                  <a href={`${import.meta.env.PUBLIC_URLBASE}#reviews`} className="text-4xl">Рецензии</a> 
                }
                </SheetPrimitive.Close>
              </div>
              <div>
                <Select>
                  <SelectTrigger className="h-16">
                      <div className="flex text-3xl justify-center w-full ml-5">MK<img className="ml-2" src={mk.src}/></div>
                  </SelectTrigger>
                  <SelectContent className="bg-red-500 h-36">
                    <SelectGroup className="text-white">
                      <div className="w-full h-16">
                      <button onClick={()=>changeLang("en")} className="h-16 w-full flex justify-center">
                        <div  className="h-full text-2xl items-center flex py-1 hover:bg-slate-200">EN<img className="ml-2" src={en.src}/></div>
                      </button>
                      <button onClick={()=>changeLang("gr")} className="h-16 w-full flex justify-center">
                      <div   className="w-full justify-center h-full text-2xl items-center flex py-1 hover:bg-slate-200">GR<img className="ml-2" src={gr.src}/></div>
                      </button>
                      </div>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              </div>
              <div className=" text-white">
                <div className="flex items-center">
                  <MapPin className="h-14 w-14"/>
                  <p className="text-2xl">Ул. „Маршал Тито“ 113, Струмица</p>
                </div>
                <div className="flex my-8 items-center">
                  <Phone className="h-10 w-10"/>
                  <a href="tel:+38970310923" className="ml-8 text-2xl">+389 70 310 923</a>
                </div>
              </div>
            </div>
          </SheetContent>
      </Sheet>
    </div>
    </div>
  ) 
}


const NavbarEn = () => {


const components: { title: string; href: string; description: string }[] = [
  {
    title: "Cosmetic Dentistry",
    href: "/en/cosmetic_dentistry",
    description:
      "Damage to teeth caused by cavities or trauma can be effectively addressed in the field of cosmetic dentistry.",
  },
  {
    title: "Dental Prosthetics",
    href: "/en/dental_prosthetics",
    description:
      "Why should missing teeth be replaced?",
  },
  {
    title: "Children's and Preventive Dentistry",
    href: "/en/childrens_and_preventive_dentistry",
    description:
      "We are particularly proud that our team is called FRIENDS OF CHILDREN...",
  },
  {
    title: "Periodontology",
    href: "/en/pareodonthology",
    description:
      "This is a very important part of dental treatments, without which a quality and successful conservative-prosthetic treatment cannot be imagined today...",
  },
  {
    title: "Laser Therapy",
    href: "/en/laser_therapy",
    description:
      "The advancement of laser technology in recent times has reached a level where its effectiveness is also used in everyday dental practice.",
  },
];

  const changeLang = (lang:string) => {
    switch (lang) 
    {
      case "mk":
        if(url.includes("en"))
        {
          location.href = url.replace("en", "mk")
        }else {
          location.href = "/mk"
        }

        break;


      case "gr":
        if(url.includes("en"))
        {
          location.href = url.replace("en", "gr")
        }else {
          location.href = "/gr"
        }

        break;


      }
    }

  return (
    <div className="w-full fixed z-50 2xl:px-48 px-10 h-[96px] flex items-center justify-between py-2 bg-red-500">
    <div className="h-full flex items-center">
      <a href={`${import.meta.env.PUBLIC_URLBASE}en/`}>
        <img src={logo.src} className="w-[371px] " alt="logo"/> 
      </a>
    </div>
    <div className="lg:flex hidden max-h-20 items-center text-white">
      <a href={`${import.meta.env.PUBLIC_URLBASE}en/#aboutUs`} className="font-semibold text-2xl xl:text-3xl 2xl:mr-10 mr-3">About us</a>
      <NavigationMenu className="2xl:mr-10 mr-3">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className=" text-2xl xl:text-3xl font-semibold">Interventions</NavigationMenuTrigger>
            <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-3 p-4 xl:w-[600px] xl:grid-cols-2 lg:w-[300px] ">
                          {components.map((component) => (
                            <ListItem
                              key={component.title}
                              title={component.title}
                              href={component.href}
                            >
                            {component.description}
                            </ListItem>
                          ))}
                        </ul>
          </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
         <a href={`${import.meta.env.PUBLIC_URLBASE}en/#reviews`} className="font-semibold text-2xl xl:text-3xl 2xl:mr-10 mr-3">Reviews</a> 
         <a href={`${import.meta.env.PUBLIC_URLBASE}en/#contact`} className="font-semibold text-2xl xl:text-3xl 2xl:mr-10 mr-3">Contact</a>
    </div>
    <div className="flex items-center lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu color="white" size="48" />
        </SheetTrigger>
          <SheetContent>
            <SheetHeader className="border-b-2 pb-4 border-white">
              <SheetTitle className="text-white font-bold text-6xl">Menu</SheetTitle>
            </SheetHeader>
            <div className="w-full flex flex-col text-center h-5/6 justify-between mt-16">
              <div className="text-white block ">
              <div className="mb-10">
                <SheetPrimitive.Close>
                  <a href={`${import.meta.env.PUBLIC_URLBASE}en/#aboutUs`} className="text-4xl">About us</a>
                </SheetPrimitive.Close>
              </div>
              <div className="my-10">
                <Drawer>
                  <DrawerTrigger className="text-4xl">Interventions</DrawerTrigger>
                    <DrawerContent>
                      <DrawerHeader>

                        <ul className="grid gap-3 p-4  xl:grid-cols-2  ">
                          {components.map((component) => (
                            <a href={component.href} className="block select-none space-y-1 border-y rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-200 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                              <div className="text-xl font-semibold leading-none">{component.title}</div>
                              <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                                {component.description}
                              </p>
                            </a>
                          ))}
                        </ul>
                      </DrawerHeader>
                    <DrawerFooter>
                      <DrawerClose>
                        <div className="rounded-full bg-red-500 text-white font-semibold">
                          Close
                        </div>
                      </DrawerClose>
                    </DrawerFooter>
                    </DrawerContent>
                </Drawer>
              </div>
              <div className="my-10">
                <SheetPrimitive.Close>
                  <a href={`${import.meta.env.PUBLIC_URLBASE}en/#contact`} className="text-4xl">Contact</a>
                </SheetPrimitive.Close>
              </div>
              <div className="my-10">
                <SheetPrimitive.Close>
                  <a href={`${import.meta.env.PUBLIC_URLBASE}en/#reviews`} className="text-4xl">Reviews</a> 
                </SheetPrimitive.Close>
              </div>
              <div>
                <Select>
                  <SelectTrigger className="h-16">
                      <div className="flex text-3xl justify-center w-full ml-5">EN<img className="ml-2" src={en.src}/></div>
                  </SelectTrigger>
                  <SelectContent className="bg-red-500 h-36">
                    <SelectGroup className="text-white">
                      <div className="w-full h-16">
                      <button onClick={()=>changeLang("mk")} className="h-16 w-full flex justify-center">
                        <div  className="h-full text-2xl items-center flex py-1 hover:bg-slate-200">MK<img className="ml-2" src={mk.src}/></div>
                      </button>
                      <button onClick={()=>changeLang("gr")} className="h-16 w-full flex justify-center">
                      <div   className="w-full justify-center h-full text-2xl items-center flex py-1 hover:bg-slate-200">GR<img className="ml-2" src={gr.src}/></div>
                      </button>
                      </div>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              </div>
              <div className=" text-white">
                <div className="flex items-center">
                  <MapPin className="h-14 w-14"/>
                  <p className="text-2xl">Ul „Marshal Tito 113“</p>
                </div>
                <div className="flex my-8 items-center">
                  <Phone className="h-10 w-10"/>
                  <a href="tel:+38970310923" className="ml-8 text-2xl">+389 70 310 923</a>
                </div>
              </div>
            </div>
          </SheetContent>
      </Sheet>
    </div>
    </div>
  ) 
}

const NavbarGr = () => {


const components: { title: string; href: string; description: string }[] = [
  {
    title: "Αισθητική Οδοντιατρική",
    href: "/gr/cosmetic_dentistry",
    description:
      "Οι βλάβες στα δόντια που προκαλούνται από τερηδόνα ή τραυματισμούς μπορούν να αντιμετωπιστούν αποτελεσματικά στον τομέα της αισθητικής οδοντιατρικής.",
  },
  {
    title: "Οδοντιατρική Προσθετική",
    href: "/gr/dental_prosthetics",
    description:
      "Γιατί πρέπει να αντικαθίστανται τα χαμένα δόντια;",
  },
  {
    title: "Παιδιατρική και Προληπτική Οδοντιατρική",
    href: "/gr/childrens_and_preventive_dentistry",
    description:
      "Είμαστε ιδιαίτερα περήφανοι που η ομάδα μας αποκαλείται ΦΙΛΟΙ ΤΩΝ ΠΑΙΔΙΩΝ...",
  },
  {
    title: "Περιοδοντολογία",
    href: "/gr/pareodonthology",
    description:
      "Αυτή είναι ένα πολύ σημαντικό κομμάτι των οδοντιατρικών θεραπειών, χωρίς το οποίο δεν μπορεί σήμερα να φανταστεί κανείς ποιοτική και επιτυχής συντηρητική-προθετική θεραπεία...",
  },
  {
    title: "Θεραπεία με Λέιζερ",
    href: "/gr/laser_therapy",
    description:
      "Η πρόοδος της τεχνολογίας λέιζερ τον τελευταίο καιρό έχει φτάσει σε επίπεδο όπου η αποτελεσματικότητά της χρησιμοποιείται και στην καθημερινή οδοντιατρική πρακτική.",
  },
];

  const changeLang = (lang:string) => {
    switch (lang) 
    {
      case "mk":
        if(url.includes("en"))
        {
          location.href = url.replace("en", "mk")
        }else {
          location.href = "/mk"
        }

        break;


      case "en":
        if(url.includes("gr"))
        {
          location.href = url.replace("gr", "en")
        }else {
          location.href = "/en"
        }

        break;


      }
    }

  return (
    <div className="w-full fixed z-50 2xl:px-48 px-10 h-[96px] flex items-center justify-between py-2 bg-red-500">
    <div className="h-full flex items-center">
      <a href={`${import.meta.env.PUBLIC_URLBASE}gr/`}>
        <img src={logo.src} className="w-[371px] " alt="logo"/> 
      </a>
    </div>
    <div className="lg:flex hidden max-h-20 items-center text-white">
         <a href={`${import.meta.env.PUBLIC_URLBASE}gr/#aboutUs`} className="font-semibold text-2xl xl:text-3xl 2xl:mr-10 mr-3">Για εμάς</a>  
      <NavigationMenu className="2xl:mr-10 mr-3">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className=" text-2xl xl:text-3xl font-semibold">Παρεμβάσεις</NavigationMenuTrigger>
            <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-3 p-4 xl:w-[600px] xl:grid-cols-2 lg:w-[300px] ">
                          {components.map((component) => (
                            <ListItem
                              key={component.title}
                              title={component.title}
                              href={component.href}
                            >
                            {component.description}
                            </ListItem>
                          ))}
                        </ul>
          </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
         <a href={`${import.meta.env.PUBLIC_URLBASE}gr/#reviews`} className="font-semibold text-2xl xl:text-3xl 2xl:mr-10 mr-3">Κριτικές</a> 
         <a href={`${import.meta.env.PUBLIC_URLBASE}gr/#contact`} className="font-semibold text-2xl xl:text-3xl 2xl:mr-10 mr-3">Επικοινωνία</a> 
    </div>
    <div className="flex items-center lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu color="white" size="48" />
        </SheetTrigger>
          <SheetContent>
            <SheetHeader className="border-b-2 pb-4 border-white">
              <SheetTitle className="text-white font-bold text-6xl">Μενού</SheetTitle>
            </SheetHeader>
            <div className="w-full flex flex-col text-center h-5/6 justify-between mt-16">
              <div className="text-white block ">
              <div className="mb-10">
                <SheetPrimitive.Close>
                  <a href={`${import.meta.env.PUBLIC_URLBASE}gr/#aboutUs`} className="text-4xl">Για εμάς</a>
                </SheetPrimitive.Close>
              </div>
              <div className="my-10">
                <Drawer>
                  <DrawerTrigger className="text-4xl">Παρεμβάσεις</DrawerTrigger>
                    <DrawerContent>
                      <DrawerHeader>

                        <ul className="grid gap-3 p-4  xl:grid-cols-2  ">
                          {components.map((component) => (
                            <a href={component.href} className="block select-none space-y-1 border-y rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-200 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                              <div className="text-xl font-semibold leading-none">{component.title}</div>
                              <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                                {component.description}
                              </p>
                            </a>
                          ))}
                        </ul>
                      </DrawerHeader>
                    <DrawerFooter>
                      <DrawerClose>
                        <div className="rounded-full bg-red-500 text-white font-semibold">
                          Κοντά
                        </div>
                      </DrawerClose>
                    </DrawerFooter>
                    </DrawerContent>
                </Drawer>
              </div>
              <div className="my-10">
                <SheetPrimitive.Close>
                  <a href={`${import.meta.env.PUBLIC_URLBASE}gr/#contact`} className="text-4xl">Επικοινωνία</a>                 </SheetPrimitive.Close>
              </div>
              <div className="my-10">
                <SheetPrimitive.Close>
                  <a href={`${import.meta.env.PUBLIC_URLBASE}gr/#reviews`} className="text-4xl">Κριτικές</a>
                </SheetPrimitive.Close>
              </div>
              <div>
                <Select>
                  <SelectTrigger className="h-16">
                      <div className="flex text-3xl justify-center w-full ml-5">GR<img className="ml-2" src={gr.src}/></div>
                  </SelectTrigger>
                  <SelectContent className="bg-red-500 h-36">
                    <SelectGroup className="text-white">
                      <div className="w-full h-16">
                      <button onClick={()=>changeLang("en")} className="h-16 w-full flex justify-center">
                        <div  className="h-full text-2xl items-center flex py-1 hover:bg-slate-200">EN<img className="ml-2" src={en.src}/></div>
                      </button>
                      <button onClick={()=>changeLang("mk")} className="h-16 w-full flex justify-center">
                      <div   className="w-full justify-center h-full text-2xl items-center flex py-1 hover:bg-slate-200">MK<img className="ml-2" src={mk.src}/></div>
                      </button>
                      </div>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              </div>
              <div className=" text-white">
                <div className="flex items-center">
                  <MapPin className="h-14 w-14"/>
                  <p className="text-2xl">Ул. „Маршал Тито“ 113, Струмица</p>
                </div>
                <div className="flex my-8 items-center">
                  <Phone className="h-10 w-10"/>
                  <a href="tel:+38970310923" className="ml-8 text-2xl">+389 70 310 923</a>
                </div>
              </div>
            </div>
          </SheetContent>
      </Sheet>
    </div>
    </div>
  ) 
}


const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName
 
const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    )}
    {...props}
  />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName
 
const NavigationMenuItem = NavigationMenuPrimitive.Item
 
const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none font-bold text-3xl text-white"
)
 
const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="relative top-[1px] ml-1 h-6 w-6 transition duration-300 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName
 
const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 bg-white text-black md:absolute md:w-auto ",
      className
    )}
    {...props}
  />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName
 
const NavigationMenuLink = NavigationMenuPrimitive.Link
 
const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
))
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName
 
const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-200 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

const Select = SelectPrimitive.Root
 
const SelectGroup = SelectPrimitive.Group
 
const SelectValue = SelectPrimitive.Value
 
const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName
 
const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronUp />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName
 
const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronDown/>
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName
 
const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName
 
const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName
 
const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName
 
const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName


const Sheet = SheetPrimitive.Root
 
const SheetTrigger = SheetPrimitive.Trigger
 
const SheetClose = SheetPrimitive.Close
 
const SheetPortal = SheetPrimitive.Portal
 
const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName
 
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-red-500 p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)
 
interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}
 
const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      {children}
    </SheetPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName
 
const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
SheetHeader.displayName = "SheetHeader"
 
const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
SheetFooter.displayName = "SheetFooter"
 
const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName
 
const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

const Drawer = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
)
Drawer.displayName = "Drawer"
 
const DrawerTrigger = DrawerPrimitive.Trigger
 
const DrawerPortal = DrawerPrimitive.Portal
 
const DrawerClose = DrawerPrimitive.Close
 
const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/80", className)}
    {...props}
  />
))
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName
 
const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-white",
        className
      )}
      {...props}
    >
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
))
DrawerContent.displayName = "DrawerContent"
 
const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
    {...props}
  />
)
DrawerHeader.displayName = "DrawerHeader"
 
const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
  />
)
DrawerFooter.displayName = "DrawerFooter"
 
const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DrawerTitle.displayName = DrawerPrimitive.Title.displayName
 
const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DrawerDescription.displayName = DrawerPrimitive.Description.displayName
export default Navbar
