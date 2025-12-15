const ComboTag = ({ children }) => {
  return (
    <div className="py-0.5 px-2 text-[#FDDFD6]  text-xs tracking-tight rounded-full shadow-[inset_0_2px_5px_#FFA085,inset_0_-2px_1px_#FF420B] bg-gradient-to-b  from-[#FF835F]/50 to-[#D22F00]/50 backdrop-blur-sm outline outline-1 outline-offset-[-1px] outline-[#FF835F]/90">
      {children}
    </div>
  )
}

export default ComboTag
