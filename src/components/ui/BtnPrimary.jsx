const BtnPrimary = ({ children, add }) => {
  return (
    <button
      type="button"
      className={`${add} shadow-[inset_0_2px_1px_#FFA085,inset_0_-2px_1px_#FF420B] py-3 px-6 rounded-full bg-[linear-gradient(0deg,#FF420B_0%,#FF5D2E_36%,#FF5D2E_66%,#EF3600_100%)] border-[0.5px] border-[#DA3100]
       hover:scale-105 duration-300`}
    >
      <div className="relative ">
        <p className=" leading-none z-10 relative text-sm tracking-tighter text-[#232829] font-medium">{children} </p>
        <p className="absolute top-0 blur-[10px] leading-none text-sm tracking-tighter text-[#FFB49E]"> {children}</p>
      </div>
    </button>
  )
}

export default BtnPrimary
