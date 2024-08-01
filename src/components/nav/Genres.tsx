import { useState } from "react"


const Genres = () => {

  const itemMenu=[
    { text: 'Home', icon:'ph-fill ph-house'},
    { text: 'Animation', icon:'ph-fill ph-house'},
    { text: 'Mystery', icon:'ph-fill ph-house'},
    { text: 'More', icon:'ph-fill ph-house'}
  ]
  const [select,setSelect] = useState('Home')
  
  return (
    <ul className='text-lg place-items-center flex basis-full justify-between text-gray-200 text cursor-pointer'>
      {itemMenu.map((item, index)=><li key={index} onClick={()=>setSelect(item.text)}
       className={`${select === item.text && 'bg-opacity-20 bg-gray-400 rounded-full'} transition-all duration-600 flex items-center gap-2 px-6 py-2 `}>
        {item.text}
        <i className={item.icon}/>
      </li>)}
    </ul>
  )
}

export default Genres