interface textAreaProps {
  placeholder: string;
  name: string;
  id: string;
  rows: number;
}

export function TextArea_Ctnc({ name, id, placeholder, rows }: textAreaProps) {
  return (
    <div className="mt-3 mx-5 flex flex-col">
      <label form={id} className="pb-2 text-black dark:text-white font-bold">
        {placeholder} :
      </label>
      <textarea
        name={name}
        id={id}
        placeholder={placeholder}
        rows={rows}
        className=" border-0 border-l-4 rounded-md p-2 mb-1 focus:outline-none
      bg-white text-grayblack
      dark:bg-darkblue dark:text-graywhite
      hover:border-blue hover:text-blue 
      focus:border-blue focus:text-blue transition-all duration-500"
      />
    </div>
  );
}
