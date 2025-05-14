"use client";
import SelectOption from "./Shared/SelectOption";
import { PropertySelection } from "@/constants/constant";
import SearchProperty from "./Shared/SearchProperty";

const FindProperty = () => {
    return(<div className="w-full mx-auto mb-10">
        <div className="w-full mb-10 border-bottom"
             style={{background: "linear-gradient(135deg, #262626 0%, rgba(38, 38, 38, 0) 53%)",}}>
            <div className="w-[95vw] mx-auto relative flex-col-start gap-y-3 px-4 py-12 lg:w-[92vw]">
                <h1 className="font-h1">Find Your Dream Property</h1>
                <p className="font-paragraph text-grey-60">Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey </p>
                <SearchProperty lg={true}/>
            </div>
        </div>
        <div className="flex-col-start w-[95vw] gap-y-5 mx-auto px-4 lg:w-[92vw]">
                <SearchProperty />
                <div className="flex-col-center gap-y-5 w-full p-5 bg-grey-10 rounded-xl lg:flex-between lg:gap-x-5">
                    {PropertySelection.map((item) => (
                        <SelectOption key={item.name} img={item.img} name={item.name} options={item.options}/>
                    ))}
                </div>
        </div>
    </div>)
}

export default FindProperty;