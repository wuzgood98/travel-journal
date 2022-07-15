import EarthIcon from '../assets/earth.png'

function Navbar() {
  return (
    <nav className="w-full h-[55px] bg-lightRed space-x-2 flex items-center justify-center">
      <img src={EarthIcon} alt="navbar icon" className='h-6 w-6' />
      <p className="lowercase text-white font-medium text-[14.46px]">my travel journey.</p>
    </nav>
  )
}

export default Navbar