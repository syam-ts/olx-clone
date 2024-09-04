export const Banner = ({ banner, isLong }: any) => {
  {
    return banner && isLong ? (
      <div className="h-[264px] w-[1292px] bg-gray-100 mx-80 object-center mt-5 justify-center p-4 pl-36">
        <img className="h-[230px] w-[1292px] justify-center" src={banner} />
      </div>
    ) : (
      <div className="h-[264px] w-full object-center mt-5 justify-center">
        <img className="h-[230px] w-full justify-center" src={banner} />
      </div>
    )
  }
}

//middle custom banner
export const LongBanner = () => {
  return (
    <div className="h-[264px] w-full mt-7 bg-gray-100 flex">
      <div className="ml-96">
        <img src="public/phone-app.webp" />
      </div>
      <div className="grid text-center">
        <span className="text-2xl font-semibold pt-12">TRY THE OLX APP</span>
        <span className="text-lg font-thin ">
          But, sell and find just about anything using
        </span>
        <span className="text-lg font-thin pb-32">the app on your phone</span>
      </div>
      <div>
        <span className="h-[150px] mt-4 ml-5 w-px bg-gray-800 inline-block"></span>
      </div>
      <div className="p-16">
        <span className="font-bold text-sm">GET YOUR APP TODAY</span>
        <div className="flex gap-3">
          <img src="public/appstore_2x.webp" />
          <img src="public/playstore_2x.webp" />
        </div>
      </div>
    </div>
  )
}


