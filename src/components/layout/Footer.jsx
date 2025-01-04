const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <section className="flex justify-between p-4 text-primary">
      <h2 className="text-xl font-thin tracking-wider">Johan Bautista <br /> &copy;  {year}</h2>
    </section>
  )
}
export default Footer
