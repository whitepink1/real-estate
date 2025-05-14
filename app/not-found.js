import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex-col-center w-full h-[50vh] gap-y-5 mx-auto'>
      <h2 className='font-h3'>Page Not Found</h2>
      <p className='font-paragraph text-grey-60'>Could not find requested resource</p>
      <Link href="/" className='w-fit px-6 py-4 font-paragraph text-white border-2 border-grey-15 rounded-xl'>Return Home</Link>
    </div>
  )
}