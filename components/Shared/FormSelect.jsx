"use client"
import SelectOption from "./SelectOption";

const FormSelect = ({title, onChange, placeholder, options, fieldName, addClass}) => {
    return(<div className={`flex-col-start gap-y-2.5 ${addClass}`}>
                <label className="font-paragraph-md text-white">{title}</label>
                <SelectOption
                    onChange={onChange}  
                    name={placeholder} 
                    options={options}
                    fieldName={fieldName}/>
            </div>)
}

export default FormSelect;