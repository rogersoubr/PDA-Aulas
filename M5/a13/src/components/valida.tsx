"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
//import { email } from "zod/v4-mini";
// constante de objeto para erros e validação 
const schema = z.object({
    nome: z.string().min(4, "Seu nome deve conter no mínimo 4 letras"),
    idade: z.number().min(18, "Deve ser igual ou meior que 18 anos").max(100,"Deve ser igual ou meior que 18 anos, manor que 100"),
    email: z.string().email("Email inválido"),
    senha: z.string().min(5, "Sua senha deve conter no mínimo 5 letras"),
});

export default function FormularioValidado() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = () => {
    alert("Formulário submetido!");
  };

  useEffect(() => {
    console.log("Re-Renderizando");
  }, [register]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white flex p-2 gap-x-2"
    >
        {/* NOME */}
        <div>
            <label className="text-black">Nome</label>
            <input
            {...register("nome")}
            className="text-black w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.nome && (
            <span className="text-red-600">{errors.nome.message as string}</span>
            )}
        </div>

        {/* IDADE */}
        <div>
            <label className="text-black">Idade</label>
            <input
            {...register("idade")}
            className="text-black w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.idade && (
            <span className="text-red-600">{errors.idade.message as string}</span>
            )}
        </div>

        {/* EMAIL */}
        <div>
            <label className="text-black">Email</label>
            <input
            {...register("email")}
            className="text-black w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.email && (
            <span className="text-red-600">{errors.email.message as string}</span>
        )}
        </div>

        {/* SENHA */}
        <div>
            <label className="text-black">Senha</label>
            <input
            {...register("senha")}
            className="text-black w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.senha && (
            <span className="text-red-600">{errors.senha.message as string}</span>
        )}
      </div>


      <button type="submit" className="text-black">
        Enviar
      </button>
    </form>
  );
}
