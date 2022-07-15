import data from '../Data'

function Card(props) {

  return (
    <>
      <article className="flex flex-col space-y-6 h-max w-full md:space-x-5 md:flex-row md:items-center md:h-[16rem] md:space-y-0">
        <img src={props.imageUrl} alt="location image" className="h-full w-full rounded-lg md:w-[13rem]" />
        <div className="flex flex-col ml-0">
          <div className="flex items-center space-x-5 mb-2 md:mb-0">
            <div className="flex items-center space-x-2">
              <i className="fa-solid fa-location-dot text-lightRed md:w-[0.6rem] md:h-[1rem]"></i>
              <h4 className="text-dark text-[10.24px] font-normal tracking-widest uppercase md:text-[1rem]">{props.location}</h4>
            </div>
            <a href={props.googleMapsUrl} target='_blank' className='text-[10.24px] font-normal text-gray border-b border-gray md:text-[1rem]'>View on Google Maps</a>
          </div>
          <h1 className="text-dark text-[1.9rem] font-bold capitalize mb-4 md:text-[2.4rem]">{props.title}</h1>
          <p className='text-dark text-[0.9rem] font-bold mb-2 md:text-[1rem]'>{props.startDate} - {props.endDate}</p>
          <p className="text-dark text-[0.9rem] font-light max-w-lg md:text-[1rem]">{props.description}</p>
        </div>
      </article>
      <hr className='text-gray opacity-10 last:hidden' />
    </>
  )
}

function Cards() {
  const info = data.map((item, index) => {
    return (
      <Card
        key={index}
        {...item}
      />
    )
  })
  return (
    <div className='flex flex-col space-y-7 bg-white p-10 lg:max-w-5xl lg:mx-auto'>
      {info}
    </div>
  )
}

export default Cards