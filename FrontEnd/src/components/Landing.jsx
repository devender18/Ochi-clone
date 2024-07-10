export default function Landing() {
  return (
    <div className="font-bold w-full h-screen bg-custombg pt-2">
        <div className="mt-40 px-20">
            {["we create", "eye-opening", "presentation"].map((item,index)=>{
                return(
                    <div key={index} className="text-9xl">
                        {item.toUpperCase()}
                    </div>

                )
                
            })}
        </div>
      
    </div>
  );
}
