export default function Landing() {
  return (
    <div className=" h-screen bg-custombg pt-2">
        <div className="mt-40 px-20 font-bold w-full">
            {["we create", "eye-opening", "presentation"].map((item,index)=>{
                return(
                    <div key={index} className="text-9xl">
                        {item.toUpperCase()}
                    </div>

                )
                
            })}
        </div>
        <div className="flex justify-around items-center min-h-screen">
            <div>
                <p>For public and private companies</p>
            </div>
            <div>
                <p>From the first pitch to IPO</p>
            </div>
            <div className="flex items-center">
                <div className="border-2 rounded-2xl border-black">
                    <p className="p-1 mx-2">START THE PROJECT</p>
                </div>
                <div className="rounded-full border-black border-2 h-8 w-8 flex justify-center items-center ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
    </svg>

                </div>
            </div>
        </div>
      
    </div>
  );
}
