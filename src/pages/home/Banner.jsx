import bannerImg from "../../assets/banner.png"

const Banner = () => {


  return (
    <div className="flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12">
        <div className="md:w-1/2 w-full flex items-center md:justify-end">
            <img src={bannerImg} alt="" className="" />
        </div>
        <div className="md:w-1/2 w-full ">
            <h1 className='md:text-5xl text-3xl font-medium mb-7'>
               New Release This Week 
            </h1>
            <p className='mb-10 '>It's time to update your reading list with some of the latest and greatest releases in the literary world. 
                From heart-pumping thrillers to capticating memoirs, this week's new release offer something for everyone.</p>
                <button className='bg-primary/80 px-4 py-2 rounded-md hover:bg-primary text-white'>
                    Subscribe
                </button>
        </div>
        
    </div>
  )
}

export default Banner