//criei a interface
interface HomeButtonProps {
  title: string;
  personalizado: boolean;
  width?: string;
  height?: string;
  bk_color?: string;
  color?: string;
}

//criando o componente
export default function HomeButton({
  //a props está sendo tudo isso da "variavel" interface: 
  title, 
  personalizado,
  width,
  height,
  bk_color,
  color,
}: HomeButtonProps) {
  //ternário: se tem personalizado, se não só mostra o tile
  return personalizado ? (
    <button
      style={{
        backgroundColor: bk_color || "#f1f1f1",//recebe o valor da props OU o o que colocar 
        color: color || "#ff0000",
        width: width || "20px",
        height: height || "10px",
      }}
    >
      {title}
    </button>
  ) : (
    <button>{title}</button>
  );
}