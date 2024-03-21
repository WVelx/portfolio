export function Btn_send() {
  return (
    <button
      type="submit"
      className="group relative inline-flex items-center px-10 py-2 overflow-hidden text-lg border-2 rounded-md
      text-black border-black 
      dark:*:text-white dark:border-white
      hover:text-white hover:bg-blue"
    >
      <span className="absolute left-0 block w-full h-0 transition-all bg-blue opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-500 ease"></span>
      <span className="absolute right-0 flex items-center justify-start w-8 h-10 duration-500 transform translate-x-full group-hover:translate-x-0 ease">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </span>
      <span className="relative">Enviar</span>
    </button>
  );
}
