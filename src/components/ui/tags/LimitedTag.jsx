const LimitedTag = ({ children }) => {
  return (
    <div className="py-0.5 px-2 text-[#EAEAEA]  text-xs tracking-tight rounded-full shadow-[inset_0_2px_5px_#B4B4B4,inset_0_-2px_1px_#8F8F8F] bg-gradient-to-t  from-[#999999]/50 to-[#717171]/50 backdrop-blur-sm outline outline-1 outline-offset-[-1px] outline-[#AFAFAF]/90">
      {children}
    </div>
  )
}

export default LimitedTag
