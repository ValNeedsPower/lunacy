const Heading = ({ children, mode = 'dark', add }) => {
  const dark = 'bg-[linear-gradient(0deg,rgba(5,6,37,1)_0%,rgba(5,6,37,0.25)_100%)]'
  const light = 'bg-[linear-gradient(0deg,rgba(255,243,231,1)_0%,rgba(255,243,231,0.25)_100%)] '

  return (
    <span
      className={`
    ${mode === 'dark' ? `${dark} ` : light}
    ${add ? add : 'mt-[164px] text-[90px] bg-clip-text text-transparent leading-[100px]'}
    tracking-tighter
    font-semibold
  `}
    >
      {children}
    </span>
  )
}

export default Heading
