import Image from 'next/image'

export default function Content() {
  return (
    <div className="w-full flex flex-col lg:flex-row">
        <div className="w-1/2 p-10">
            <div className="absolute lg:fixed">
                <p className="text-2xl text-amber-400">Alexandre Lunardi</p>
                <p className="text-lg text-amber-300">Software Developer | Freelancer</p>
                <p className="text-md text-amber-200">I create things for the web</p>
            </div>
        </div>
        <div className="w-1/2 p-10 text-amber-200">
            About me
        </div>
    </div>
  )
}