import Image from "next/image";

export function AppPreview() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
              A familiar experience, <br />
              <span className="text-primary">refined for riders.</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Our interface is designed to be intuitive and fast. Find a ride, check the details, and book your seat in just a few taps.
            </p>
            <ul className="space-y-4">
              {[
                "Clean and modern map interface",
                "Real-time driver location tracking",
                "Secure in-app payments",
                "Verified driver profiles",
              ].map((item, index) => (
                <li key={index} className="flex items-center text-lg">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2 flex justify-center relative">
            {/* Glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[600px] bg-primary/20 blur-[100px] rounded-full -z-10" />
            
            {/* Phone Mockup Frame */}
            <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                    <Image
                      src="/app-screenshot.png" 
                      alt="Pillion App Interface"
                      width={272}
                      height={572}
                      className="object-cover w-full h-full"
                    />
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
