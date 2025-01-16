import banner from '../../assets/banner.png'

function Banner(){
    return (
        <div className="w-full h-[25rem] relative">
           <img src={banner} className='w-full h-full' />
<div className='absolute top-10 left-0 right-0 mx-auto w-[20rem]'>
    <div className='flex flex-col gap-4'>
        <div className='font-semibold text-5xl text-white'>
crypto tracker
        </div>
        <div className='text-white text-sm text-center'>
Get all Information about crypto
        </div>
    </div>
</div>

        </div>
    )
}
export default Banner