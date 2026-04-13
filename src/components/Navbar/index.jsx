const Navbar = () => {
  const handleInputChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <p>Mi boletera</p>
      <input
        type="text"
        placeholder="Busca tu evento favorito"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Navbar;
