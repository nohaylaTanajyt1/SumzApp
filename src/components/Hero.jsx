import {logo} from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center flex-col'> 
            <img src={logo} alt='sumz_logo'className='w-28 object-contain' />
            <button
                type='button'
                onClick={() =>
                    window.open("https://github.com/TidbitsJS/Summize", "_blank")
                }
                className='black_btn'

            >
              Github 
            </button>
        </nav>

        <h1 className='head_text'>
         Effortless Summaries, Powered by<br className='max-md:hidden' />
          <span className='pink'>Noha AI</span> 
          
        </h1>
        <h2 className='desc'>
        Summarize with ease, the power of AI at your fingertips.
        </h2>     
    </header>
  )
}

export default Hero

