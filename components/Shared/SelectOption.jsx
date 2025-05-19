import Image from "next/image";

const SelectOption = ({img = "", name = "", options = [], fieldName = "", onChange = () => {}}) => {
    return(<div className={`flex items-center relative w-full 
                ${img ? 'px-4 h-[52px] bg-grey-08 border-2 border-grey-15 rounded-xl' 
                : 'py-4 px-5 rounded-lg bg-grey-10 border-1 border-grey-15'}`}>
        {img && <Image className="mr-2 border-r-2 pr-1 border-grey-15 aspect-square" src={img} height={25} width={25} alt={name} />}
        <select className={`${img ? 'w-full h-full font-paragraph font-light text-grey-60 appearance-none pr-6 focus:outline-none' 
                : 'w-full pr-6 font-paragraph text-grey-60 bg-grey-10 appearance-none focus:outline-none'}`}
                onChange={onChange}
                name={fieldName}
                defaultValue="">
            <option value="" disabled hidden>
                {name}
            </option>
            {options.map((item) => (
                <option key={item} value={item}>{item}</option>
            ))}
        </select>
        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
            <svg
            className={`w-4 h-4 ${img ? 'text-grey-60' : 'text-white'}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            >
            <path d="M19 9l-7 7-7-7" />
            </svg>
      </div>
    </div>)
}

export default SelectOption;