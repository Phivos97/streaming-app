import Layout from "./components/layout/Layout"
import Navbar from "./components/nav/Navbar"
import Main from "./components/main/Main"
import Container from "./components/shared/Container"
import Home from "./components/main/home/Home"
import Search from "./components/nav/Search"
import Genres from "./components/nav/Genres"
import UserMenu from "./components/nav/UserMenu"
import NavMenu from "./components/nav/NavMenu"
import data from './data/data.json'
import YouMightLikeCard from "./components/main/home/you-might-like/YouMightLikeCard"
import { useEffect, useState } from "react"


export default function App() {

  const [trending, setTrending] = useState([]);
  const [trendingSlider, setTrendingSlider] = useState(0);
  const [timeWindow, setTimeWindow] = useState('day');
  const [type, setType] = useState('tv');
  const [trailer, setTrailer] = useState([]);
  const [showVideo, setShowVideo] = useState(false);
  const [videoId, setVideoId] = useState('');

  useEffect(() => {
    const fetchTrending = async (type, timeWindow) => {
      try {
        const response = await fetch(`http://localhost:3000/api/movies/trending?type=${type}&timeWindow=${timeWindow}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setTrending(data.trending);
      } catch (error) {
        console.error('Error fetching data:', error);
        // setError('Failed to fetch data. Please try again later.');
      }
    };

    fetchTrending('tv', 'day');

  },  []);

  const fetchTrailerHandler = async (type, id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/movies/trailer?type=${type}&id=${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data= await response.json();
      setTrailer(data?.trailerData);
      console.log(trailer)
      setVideoId(data.trailerData.find(video => video.type === 'Trailer').key); // Assuming data.trailer contains the YouTube video ID
      console.log(videoId)
      setShowVideo(true);
    } catch (error) {
      console.error('Error fetching data:', error);
      // setError('Failed to fetch data. Please try again later.');
    }
  };

  const baseUrl = 'https://image.tmdb.org/t/p/';
  const size = 'original'; 


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
        <Home>
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
          <div className="flex self-center row-start-3 gap-4">
            <div className="w-fit text-white px-4 bg-opacity-20 backdrop-blur-lg bg-slate-600  h-8 text-center content-center rounded-full">{trending[trendingSlider]?.genres?.map((genre, index)=> <div key={index} className="w-fit text-white px-4 bg-opacity-20 backdrop-blur-lg bg-slate-600  h-8 text-center content-center rounded-full">{genre}</div>
            )}</div>
          </div>
          <Container>
            <div className="z-10 group relative w-full p-6 grid  grid-rows-[1fr,0fr,0.5fr,0.4fr,1fr,1fr] grid-cols-[40rem,1fr] ">
            <span className="absolute inset-0 bg-gradient-to-tr from-black from-20% to-transparent to-60% opacity-100 -z-10"></span>
            <span className="w-fit text-white px-4 bg-opacity-20 backdrop-blur-lg bg-slate-600 text-center h-8 content-center rounded-full">🔥Now Trending</span>

            <img className='w-full absolute inset-0 bg-cover bg-center -z-20 ease-in' src={`${baseUrl}${size}${trending[trendingSlider]?.backdrop_path}`}/>
            <div className="flex self-center row-start-3 gap-4">
            {trending[trendingSlider]?.genres?.map((genre, index)=> <div key={index} className="w-fit text-white px-4 bg-opacity-20 backdrop-blur-lg bg-slate-600  h-8 text-center content-center rounded-full">{genre}</div>)}

            </div>
            <h2 className="row-start-4  text-4xl text-white">{trending[trendingSlider]?.title || trending[trendingSlider]?.name }</h2>
            <p className="row-start-5 text-gray-400">{trending[trendingSlider]?.overview}</p>
            <div className="row-start-6  flex  gap-8">
            <button onClick={()=> fetchTrailerHandler(trending[trendingSlider]?.media_type, trending[trendingSlider]?.id)} className="bg-white  h-20 w-48 text-2xl  self-center justify-self-start rounded-full flex justify-center items-center gap-6 ">
            <i className="ph-fill ph-play text-3xl"/>
              Watch</button>
            <button className="border-2 text-white h-20 w-64 text-2xl  self-center justify-self-start rounded-full flex justify-center items-center gap-6 ">
            <i className="ph-fill ph-download-simple text-3xl"></i>
              Download</button>
            <button  className="border-2 text-white h-20 w-20 text-2xl  self-center justify-self-start rounded-full flex justify-center items-center gap-6 ">
            <i className="ph-fill ph-dots-three-outline text-3xl"></i>
            </button>
            </div>
 
            <div className="row-start-6  flex w-full gap-8 justify-end">
            <button onClick={()=> trendingSlider > 0 && setTrendingSlider(trendingSlider -1)} className="bg-opacity-20 backdrop-blur-lg bg-slate-600 text-white h-20 w-20 text-2xl  self-center rounded-full flex justify-center items-center gap-6 ">
            <i className="ph ph-caret-left text-3xl"></i>
            </button>
            <button onClick={()=> trendingSlider < (trending.length -1) && setTrendingSlider(trendingSlider + 1)} className="bg-opacity-20 backdrop-blur-lg bg-slate-600 text-white h-20 w-20 text-2xl  self-center rounded-full flex justify-center items-center gap-6 ">
            <i className="ph ph-caret-right text-3xl"></i>
            </button>
            </div>
            </div>
          </Container>
          {showVideo && (
            <div className="z-10 fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
              <div className="relative w-full max-w-4xl">
                <iframe
                  width="100%"
                  height="500px"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="YouTube video player"
                ></iframe>

              </div>
              <button
                  className="z-60 text-xl absolute center top-40 p-2 text-white"
                  onClick={() => setShowVideo(false)}
                >
                  Close
                </button>
            </div>
          )}
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
            {data.movies.map((movie)=><YouMightLikeCard key={movie.id} title={movie.title} description={movie.description} genre={movie.genre} img={movie.img}/>)}
            </div>
          </div>
        </Home>
      </Main>
    </Layout>
  )
}