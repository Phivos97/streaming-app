import Layout from "./components/layout/Layout"
import Navbar from "./components/nav/Navbar"
import Main from "./components/main/Main"
import Container from "./components/shared/Container"
import MenuScreen from "./components/main/menu-screen/MenuScreen"
import Search from "./components/nav/Search"
import Genres from "./components/nav/Genres"
import UserMenu from "./components/nav/UserMenu"
import NavMenu from "./components/nav/NavMenu"




export default function App() {
  return (
    <Layout>
      <Navbar>
        <Search/>
        <NavMenu>
          <Genres/>
          <UserMenu/>
        </NavMenu>
      </Navbar>
      <Main>
        <MenuScreen>
          <Container>
            <div className="flex flex-col gap-6 pt-6 px-8 w-full text-white justify-evenly h-full">
              <div className="flex justify-between ">
                <p>🔥New Trailer</p>
                <p>Sort by: <strong>Today</strong></p>
              </div>
              <div className="overflow-auto h-full space-y-6 rounded-t-3xl contain-content">
              <div className="flex flex-col bg-[url('/last-kingdom.jpg')] bg-cover bg-center h-56 rounded-3xl overflow-hidden  z-10 place-content-end">
              <div className="flex bg-opacity-30 backdrop-blur-xl bg-slate-600 h-[4.2rem] py-6 px-6 justify-between gap-4 items-center rounded-b-3xl ">
            <h3 className="text">The Last Kingdom: Seven Kings Must Die </h3>
            <button className="shrink-0 basis-12 h-12 bg-opacity-20 backdrop-blur-lg bg-slate-600 text-white text-2xl self-center rounded-full flex justify-center items-center">
                <i className="ph-fill ph-play text-2xl"/>
            </button>
              </div>
              </div>
              {/* SECOND */}
              <div className="bg-[url('/super-mario-bros.jpg')] bg-cover bg-center h-56 rounded-3xl overflow-hidden  z-10 place-content-end">
              <div className="flex bg-opacity-20  backdrop-blur-lg mix-blend-screen bg-slate-600 h-[4.2rem] py-6 px-6 justify-between gap-4 items-center rounded-b-3xl">
            <h3 className="text">Super Mario Bros: The Movie </h3>
            <button className="shrink-0 basis-12 h-12 bg-opacity-20 backdrop-blur-lg bg-slate-600 text-white text-2xl self-center rounded-full flex justify-center items-center">
                <i className="ph-fill ph-play text-2xl"/>
            </button>
              </div>
              </div>
              {/* THIRD */}
              <div className="bg-[url('/gladiator.jpg')] bg-cover bg-center h-56 rounded-3xl overflow-hidden  z-10 place-content-end">
              <div className="flex bg-opacity-20 backdrop-blur-lg  bg-slate-600 h-[4.2rem] py-6 px-6 justify-between gap-4 items-center rounded-b-3xl">
            <h3 className="text">Gladiator: The War Between Continents </h3>
            <button className="shrink-0 basis-12 h-12 bg-opacity-20 backdrop-blur-lg bg-slate-600 text-white text-2xl self-center rounded-full flex justify-center items-center">
                <i className="ph-fill ph-play text-2xl"/>
            </button>
              </div>
              </div>
              {/* FOURTH */}
              <div className="bg-[url('/bleach.jpg')] bg-cover bg-center h-56 rounded-3xl overflow-hidden  z-10 place-content-end">
              <div className="flex bg-opacity-20 backdrop-blur-lg rounded-b-3xl bg-slate-600 h-[4.2rem] py-6 px-6 justify-between gap-4 items-center">
            <h3 className="text">Bleach: Thousand-Year Blood War</h3>
            <button className="shrink-0 basis-12 h-12 bg-opacity-20 backdrop-blur-lg bg-slate-600 text-white text-2xl self-center rounded-full flex justify-center items-center">
                <i className="ph-fill ph-play text-2xl"/>
            </button>
              </div>
              </div>
              </div>
            </div>
          </Container>
          <Container>
            <div className="z-10 group relative w-full p-6 grid  grid-rows-[1fr,0fr,0.5fr,1fr,1fr,1fr] grid-cols-[40rem,1fr] ">
            <div className="absolute  inset-0 bg-[url('/thumb-med-spiderman.jpg')] bg-cover bg-center group-hover:scale-125 transition-transform duration-[10000ms] -z-20 ease-in "/>
            <span className="absolute inset-0 bg-gradient-to-tr from-black from-20% to-transparent to-60% opacity-100 -z-10"></span>
            <span className="w-fit text-white px-4 bg-opacity-20 backdrop-blur-lg bg-slate-600 text-center h-8 content-center rounded-full">🔥Now Trending</span>
            <div className="flex self-center row-start-3 gap-4">
            <div className="w-fit text-white px-4 bg-opacity-20 backdrop-blur-lg bg-slate-600  h-8 text-center content-center rounded-full">Animation</div>
            <div className="w-fit text-white px-4 bg-opacity-20 backdrop-blur-lg bg-slate-600  h-8 text-center content-center rounded-full">Adventure</div>
            </div>
            <h2 className="row-start-4  text-4xl text-white">Spider-Man:<br/> Across the Spider-Verse</h2>
            <p className="row-start-5 text-gray-400">Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People changed with protecting its very existence.</p>
            <div className="row-start-6  flex  gap-8">
            <button className="bg-white  h-20 w-48 text-2xl  self-center justify-self-start rounded-full flex justify-center items-center gap-6 ">
            <i className="ph-fill ph-play text-3xl"/>
              Watch</button>
            <button className="border-2 text-white h-20 w-64 text-2xl  self-center justify-self-start rounded-full flex justify-center items-center gap-6 ">
            <i className="ph-fill ph-download-simple text-3xl"></i>
              Download</button>
            <button className="border-2 text-white h-20 w-20 text-2xl  self-center justify-self-start rounded-full flex justify-center items-center gap-6 ">
            <i className="ph-fill ph-dots-three-outline text-3xl"></i>
            </button>
            </div>
            <div className="row-start-6  flex w-full gap-8 justify-end">
            <button className="bg-opacity-20 backdrop-blur-lg bg-slate-600 text-white h-20 w-20 text-2xl  self-center rounded-full flex justify-center items-center gap-6 ">
            <i className="ph ph-caret-left text-3xl"></i>
            </button>
            <button className="bg-opacity-20 backdrop-blur-lg bg-slate-600 text-white h-20 w-20 text-2xl  self-center rounded-full flex justify-center items-center gap-6 ">
            <i className="ph ph-caret-right text-3xl"></i>
            </button>
            </div>
            </div>
          </Container>
          <Container>
          <div className="flex flex-col gap-6 pt-6 px-8 w-full text-white justify-evenly h-full">
              <div className="flex justify-between ">
                <p>Continue Watching</p>
              </div>
            <div className="overflow-auto h-full space-y-8 contain-content">
            <div className="flex bg-opacity-30 h-[4.2rem] justify-between gap-4 ">
            <div className="shrink-0 basis-24 basis-26 h-20">
            <img className="h-full rounded-3xl" src='/super-mario-bros.jpg'/>
              </div>
            <div className="flex-grow overflow-hidden content-center">
            <h3 className="truncate">Lorem ipsum season 2</h3>
            <h3 className="text">Episode 6 </h3>
            </div>
            <button className="shrink-0 basis-12 h-12 bg-opacity-20 backdrop-blur-lg bg-slate-600 text-white text-2xl self-center rounded-full flex justify-center items-center">
                <i className="ph-fill ph-play text-2xl"/>
            </button>
              </div>
            <div className="flex bg-opacity-30 h-[4.2rem] justify-between gap-4 ">
            <div className=" shrink-0 basis-24 h-20">
            <img className=" h-full rounded-3xl" src='bleach.jpg'/>
              </div>
            <div className="overflow-hidden content-center">
            <h3 className="truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe delectus fugiat id molestiae corporis eveniet explicabo minus error aspernatur nemo inventore accusantium in officiis, atque, autem possimus nam veritatis repellat.</h3>
            <h3 className="text">Episode 6 </h3>
            </div>
            <button className="shrink-0 basis-12 h-12 bg-opacity-20 backdrop-blur-lg bg-slate-600 text-white text-2xl self-center rounded-full flex justify-center items-center">
                <i className="ph-fill ph-play text-2xl"/>
            </button>
              </div>
            <div className="flex bg-opacity-30 h-[4.2rem] justify-between gap-4 ">
            <div className="shrink-0 basis-24 basis-26 h-20">
            <img className="h-full rounded-3xl" src='/last-kingdom.jpg'/>
              </div>
            <div className="overflow-hidden content-center">
            <h3 className="truncate">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae dolore veritatis quam repellat natus delectus voluptatem accusamus in, voluptate molestiae aut! Pariatur quod numquam autem quis deserunt impedit? Repellat, perspiciatis?</h3>
            <h3 className="text">Episode 6 </h3>
            </div>
            <button className="shrink-0 basis-12 h-12 bg-opacity-20 backdrop-blur-lg bg-slate-600 text-white text-2xl self-center rounded-full flex justify-center items-center">
                <i className="ph-fill ph-play text-2xl"/>
            </button>
              </div>
              </div>
            </div>
          </Container>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between ">
            <h2 className="text-2xl font-semibold text-white">You might like</h2>
          <button className="bg-opacity-20 bg-gray-400 rounded-3xl px-3 w-20 text-white">
            See all
          </button>
            </div>
          <div className="flex bg-opacity-20  w-full justify-between h-full">    
          <div className=" relative grid  grid-rows-[2fr,1fr,0.7fr,4.2rem] grid-cols-[4fr,1fr] rounded-3xl w-72 px-4 pt-4 pb-6">
            <div className="absolute  inset-0 bg-[url('/thumbnails/bleach-ichigo.jpg')] rounded-3xl bg-cover bg-center -z-20"/>
            <span className="absolute inset-0 bg-gradient-to-t rounded-3xl from-black from-20% to-transparent to-60% opacity-100 -z-10"></span>
            <button className="col-start-2 text-white h-12 w-12 text-2xl  justify-self-end justify-self-start rounded-full flex justify-center items-center gap-6 bg-opacity-20 backdrop-blur-lg bg-slate-600">
            <i className="ph-fill ph-dots-three-outline text-3xl"></i>
            </button>
            <div className="flex self-center row-start-2 gap-4">
            <div className="w-fit text-white px-4 bg-opacity-20 backdrop-blur-lg bg-slate-600  h-8 text-center content-center rounded-full">Animation</div>
            {/* <div className="w-fit text-white px-4 bg-opacity-20 backdrop-blur-lg bg-slate-600  h-8 text-center content-center rounded-full">Adventure</div> */}
            </div>
            <h2 className="row-start-3 col-span-2 text-lg text-white overflow-hidden">Bleach</h2>
            <p className="row-start-4 text-gray-400 line-clamp-3 overflow-hidden">Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People changed with protecting its very existence.</p>

            <div className="row-start-4 col-start-2  flex w-full gap-8 justify-end">
            <button className="backdrop-blur-lg bg-white text-black h-12 w-12  self-center rounded-full flex justify-center items-center gap-6 ">
            <i className="ph-fill ph-play text-lg"/>
            </button>           
            </div>
            </div>
            <div className=" relative grid  grid-rows-[2fr,1fr,0.7fr,4.2rem] grid-cols-[4fr,1fr] rounded-3xl w-72 px-4 pt-4 pb-6">
            <div className="absolute  inset-0 bg-[url('/thumbnails/witcher.webp')] rounded-3xl bg-cover bg-center -z-20"/>
            <span className="absolute inset-0 bg-gradient-to-t rounded-3xl from-black from-20% to-transparent to-60% opacity-100 -z-10"></span>
            <button className="col-start-2 text-white h-12 w-12 text-2xl  justify-self-end justify-self-start rounded-full flex justify-center items-center gap-6 bg-opacity-20 backdrop-blur-lg bg-slate-600">
            <i className="ph-fill ph-dots-three-outline text-3xl"></i>
            </button>
            <div className="flex self-center row-start-2 gap-4">
            <div className="w-fit text-white px-4 bg-opacity-20 backdrop-blur-lg bg-slate-600  h-8 text-center content-center rounded-full">Fantasy</div>
            {/* <div className="w-fit text-white px-4 bg-opacity-20 backdrop-blur-lg bg-slate-600  h-8 text-center content-center rounded-full">Adventure</div> */}
            </div>
            <h2 className="row-start-3 col-span-2 text-lg text-white overflow-hidden">The Witcher</h2>
            <p className="row-start-4 text-gray-400 line-clamp-3 overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eum exercitationem, accusamus veritatis, pariatur illo, voluptate amet nihil optio distinctio iste aut suscipit nesciunt sint animi ab esse quod obcaecati.</p>

            <div className="row-start-4 col-start-2  flex w-full gap-8 justify-end">
            <button className="backdrop-blur-lg bg-white text-black h-12 w-12  self-center rounded-full flex justify-center items-center gap-6 ">
            <i className="ph-fill ph-play text-lg"/>
            </button>           
            </div>
            </div>
            <div className=" relative grid  grid-rows-[2fr,1fr,0.7fr,4.2rem] grid-cols-[4fr,1fr] rounded-3xl w-72 px-4 pt-4 pb-6">
            <div className="absolute  inset-0 bg-[url('/thumbnails/solo-leveling.jpg')] rounded-3xl bg-cover bg-center -z-20"/>
            <span className="absolute inset-0 bg-gradient-to-t rounded-3xl from-black from-20% to-transparent to-60% opacity-100 -z-10"></span>
            <button className="col-start-2 text-white h-12 w-12 text-2xl  justify-self-end justify-self-start rounded-full flex justify-center items-center gap-6 bg-opacity-20 backdrop-blur-lg bg-slate-600">
            <i className="ph-fill ph-dots-three-outline text-3xl"></i>
            </button>
            <div className="flex self-center row-start-2 gap-4">
            <div className="w-fit text-white px-4 bg-opacity-20 backdrop-blur-lg bg-slate-600  h-8 text-center content-center rounded-full">Animation</div>
            {/* <div className="w-fit text-white px-4 bg-opacity-20 backdrop-blur-lg bg-slate-600  h-8 text-center content-center rounded-full">Adventure</div> */}
            </div>
            <h2 className="row-start-3 col-span-2 text-lg text-white overflow-hidden">Solo-Leveling</h2>
            <p className="row-start-4 text-gray-400 line-clamp-3 overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, eligendi? Saepe accusantium voluptatibus autem dignissimos corporis iusto tempore, iure alias, culpa deserunt officiis in veniam at, recusandae error id nulla.</p>

            <div className="row-start-4 col-start-2  flex w-full gap-8 justify-end">
            <button className="backdrop-blur-lg bg-white text-black h-12 w-12  self-center rounded-full flex justify-center items-center gap-6 ">
            <i className="ph-fill ph-play text-lg"/>
            </button>           
            </div>
            </div>
            <div className=" relative grid  grid-rows-[2fr,1fr,0.7fr,4.2rem] grid-cols-[4fr,1fr] rounded-3xl w-72 px-4 pt-4 pb-6">
              <div className="absolute  inset-0 bg-[url('/thumbnails/argylle.webp')] rounded-3xl bg-cover bg-center -z-20"/>
              <span className="absolute inset-0 bg-gradient-to-t rounded-3xl from-black from-20% to-transparent to-60% opacity-100 -z-10"></span>
              <button className="col-start-2 text-white h-12 w-12 text-2xl  justify-self-end justify-self-start rounded-full flex justify-center items-center gap-6 bg-opacity-20 backdrop-blur-lg bg-slate-600">
              <i className="ph-fill ph-dots-three-outline text-3xl"></i>
              </button>
              <div className="flex self-center row-start-2 gap-4">
              <div className="w-fit text-white px-4 bg-opacity-20 backdrop-blur-lg bg-slate-600  h-8 text-center content-center rounded-full">Mystery</div>
              {/* <div className="w-fit text-white px-4 bg-opacity-20 backdrop-blur-lg bg-slate-600  h-8 text-center content-center rounded-full">Adventure</div> */}
              </div>
              <h2 className="row-start-3 col-span-2 text-lg text-white overflow-hidden">Argylle</h2>
              <p className="row-start-4 text-gray-400 line-clamp-3 overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sed id tempora veritatis ut in maiores eaque rerum voluptatibus dolores, nihil perferendis autem natus sapiente, itaque quas sequi minus debitis.</p>

              <div className="row-start-4 col-start-2  flex w-full gap-8 justify-end">
              <button className="backdrop-blur-lg bg-white text-black h-12 w-12  self-center rounded-full flex justify-center items-center gap-6 ">
              <i className="ph-fill ph-play text-lg"/>
              </button>           
              </div>
              </div>
            </div>
 
        
            </div>
        </MenuScreen>
      </Main>
    </Layout>
  )
}