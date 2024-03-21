interface imputProps {
  type: string;
  placeholder: string;
  name: string;
  id: string;
  size: number;
}

export function Imput_Cntc({ type, name, id, placeholder, size }: imputProps) {
  return (
    <div className="mt-3 mx-5 flex flex-col">
      <label form={id} className="pb-2 text-black dark:text-white font-bold">
        {placeholder} :
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        size={size}
        className="border-0 border-l-4 rounded-md p-2 mb-1 focus:outline-none
        bg-white text-grayblack
        dark:bg-darkblue dark:text-graywhite
        hover:border-blue hover:text-blue 
        focus:border-blue focus:text-blue transition-all duration-500"
      />
    </div>
  );
}
