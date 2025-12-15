const BtnSecondary = ({ children, onClick, mode = 'light', add, icon }) => {
  const dark = 'text-white-100'
  const light = 'text-[#232829]/50'
  return (
    <button
      onClick={onClick}
      type="button"
      className={`${add} shadow-[inset_0_0px_4px_#FFF3E7]  py-3 px-6 rounded-full bg-white-100/20 backdrop-blur-sm border-[0.5px] border-white-100
       hover:scale-105 duration-300 ${icon && 'space-x-1 items-center flex'} `}
    >
      {icon && (
        <img
          className={`${mode === 'dark' && 'invert'} w-[15px] h-[15px]`}
          src={icon}
          alt={`${icon}+btn_icon`}
        />
      )}
      <div className="relative ">
        <p className={`${mode === 'dark' ? light : `${dark}`} leading-none z-10 relative text-sm tracking-tighter`}>{children} </p>
        <p className="absolute top-0 blur-[10px] leading-none text-sm tracking-tighter text-white-100"> {children}</p>
      </div>
    </button>
  )
}

export default BtnSecondary
