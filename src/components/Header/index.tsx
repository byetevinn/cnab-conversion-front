import DivHeader from "./style";

const Header = () => {
  return (
    <DivHeader>
      <div className="div_title">
        <h1>CNAB Conversion</h1>
      </div>
      <div>
        <button>Página inicial</button>
        <button>Sobre</button>
      </div>
    </DivHeader>
  );
};

export default Header;
