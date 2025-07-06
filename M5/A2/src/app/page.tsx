import Cabecalho from "./components/cabecalho";
import HomeButton from "./components/homeButton";
import Texto from "./components/props1";

export default function Home() {
  return (
    //abre meio que uma tag anonima, porque vai ser exportada 
    <>
    {/* botão 1 */}
      <HomeButton title="Clique" width="200px" height="100px" bk_color="#f1f1f1" color="#ff0000" personalizado={true}></HomeButton>
      {/* busca o cabecalho */}
      <Cabecalho></Cabecalho>
      {/* pega os textos */}
      <Texto texto="oijasodijqoewij"></Texto>
      <Texto texto="sdewij"></Texto>
      <Texto texto="oiweij"></Texto>
      <Texto texto="oijqwijqoewij"></Texto>
      <Texto texto="oijasodi6549859"></Texto>
      {/* btao 2 */}
      <HomeButton title="Submit" width="500px" height="30px" bk_color="#ff0000" color="#f1f1f1" personalizado={true}></HomeButton>
      {/* botao 3, esse não é personalizado */}
      <HomeButton title="Submit" personalizado={false}></HomeButton>
    </>
  );
}
// npx create-next-app@latest .