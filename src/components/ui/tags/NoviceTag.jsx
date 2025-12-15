const NoviceTag = ({ children }) => {
  return (
    <div className="animate-subtleShake py-0.5 px-2 text-[#C4EBFC] text-xs tracking-tight rounded-full bg-gradient-to-b from-[#C4EBFC]/50 to-[#3FC4FF]/50 backdrop-blur-sm outline outline-1 outline-offset-[-1px] outline-[#C4EBFC]/90">
      {children}
    </div>
  )
}

export default NoviceTag
