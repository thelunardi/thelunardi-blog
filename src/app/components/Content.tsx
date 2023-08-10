import Image from 'next/image'
import Menu from './Menu'
import SocialMedia from './SocialMedia'

export default function Content() {
  return (
    <div className="w-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 ml-0 lg:ml-[15vw]">
            <div className="flex flex-col justify-end lg:fixed">
              <div className="lg:h-[60vh] pt-10 flex flex-col">
                <p className="text-2xl text-amber-500">Alexandre Lunardi</p>
                <p className="text-lg text-amber-400">Software Developer | Freelancer</p>
                <p className="text-md text-amber-300">I create things for the web</p>
                <Menu />
              </div>
              <SocialMedia />
            </div>
        </div>
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0 p-0 lg:p-10 text-amber-200">
            About me
        </div>
    </div>
  )
}