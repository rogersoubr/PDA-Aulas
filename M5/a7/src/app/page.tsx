import Filho from "@/components/filho/Decrementar";
import Filho2 from "@/components/filho/Delete";
import Pai from "@/components/pai/Incrementar";
import { CountProvider } from "@/context/ContadorContext";


export default function Home() {
  return (
    <>
      <CountProvider>
          <Pai></Pai>
          <Filho></Filho>
          <Filho2></Filho2>
      </CountProvider>

      {/* com ele fora, não pega nunca */}
    </>
  );
}
