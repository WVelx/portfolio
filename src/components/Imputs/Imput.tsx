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
      <label form={id} className="pb-2 text-lightTexttitle dark:text-darkTexttitle font-bold">
        {placeholder} :
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        size={size}
        className="border-0 border-l-4 rounded-md p-2 mb-1 focus:outline-none
        bg-lightContent_1 text-lightTextnormal
        dark:bg-darkContent_1 dark:text-darkTextnormal
        hover:border-lightBlue hover:text-lightBlue dark:hover:border-darkBlue dark:hover:text-darkBlue
        focus:border-lightBlue focus:text-lightBlue dark:focus:border-darkBlue dark:focus:text-darkBlue transition-all duration-500"
      />
    </div>
  );
}
