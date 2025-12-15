const SubHeading = ({ children, mode = 'dark', add }) => {
  const dark = 'text-white-100'
  const light = 'text-[#050625]'

  return (
    <p
      className={`
    ${mode === 'light' ? `${dark} ` : light}
    ${add}
    text-[28px] leading-[35px] mt-2
  `}
    >
      {children}
    </p>
  )
}

export default SubHeading
