import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface TicketType {
  id: "diario" | "passe" | "vip";
  nome: string;
  preco: number;
  descricao: string;
}

const bilhetes: TicketType[] = [
  {
    id: "diario",
    nome: "Diário",
    preco: 15,
    descricao: "Acesso a um dia à tua escolha",
  },
  {
    id: "passe",
    nome: "Passe",
    preco: 35,
    descricao: "Acesso a todos os dias",
  },
  {
    id: "vip",
    nome: "VIP",
    preco: 75,
    descricao: "Acesso total + zona VIP + ofertas",
  },
];

function Bilhetes() {
  const navigate = useNavigate();
  const quantidade = useState({
    diario: 0,
    passe: 0,
    vip: 0,
  });

  function calcularTotal() {
    return bilhetes.reduce(
      (total, ticket) => total + ticket.preco * quantidade[0][ticket.id],
      0,
    );
  }

  function handleComprar() {
    const total = calcularTotal();
    if (total > 0) {
      navigate("/checkout", { state: { total } });
    } else {
      alert("Por favor, selecione pelo menos um bilhete antes de comprar.");
    }
  }

  function incrementarQuantidade(ticketId: TicketType["id"]) {
    quantidade[1]((prev) => ({
      ...prev,
      [ticketId]: prev[ticketId] + 1,
    }));
  }

  function diminuirQuantidade(ticketId: TicketType["id"]) {
    quantidade[1]((prev) => ({
      ...prev,
      [ticketId]: Math.max(prev[ticketId] - 1, 0),
    }));
  }

  return (
    <main className="flex flex-1 flex-col items-center justify-center p-8">
      <div className="w-full max-w-4xl">
        <h1 className="mb-8 text-center text-3xl font-bold text-amber-200">
          Bilhetes
        </h1>

        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {bilhetes.map((ticket) => (
            <div
              key={ticket.id}
              className="flex flex-col items-center justify-between rounded-xl border border-yellow-900 bg-orange-950/40 p-6 text-center shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
            >
              <div>
                <h2 className="text-xl font-bold text-amber-200">
                  {ticket.nome}
                </h2>
                <p className="my-2 text-3xl font-extrabold text-white">
                  {ticket.preco}€
                </p>
                <p className="mb-6 text-sm text-neutral-400">
                  {ticket.descricao}
                </p>
              </div>

              <div className="flex items-center justify-center gap-3">
                <button
                  type="button"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-200 text-lg font-bold text-stone-900 shadow transition hover:bg-amber-300 active:scale-95 disabled:cursor-not-allowed disabled:opacity-30 disabled:active:scale-100"
                  onClick={() => diminuirQuantidade(ticket.id)}
                >
                  −
                </button>
                <span className="text-lg font-bold text-white">
                  {quantidade[0][ticket.id]}
                </span>
                <button
                  type="button"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-200 text-lg font-bold text-stone-900 shadow transition hover:bg-amber-300 active:scale-95"
                  onClick={() => incrementarQuantidade(ticket.id)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-yellow-900 bg-orange-950/40 p-6 text-center shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
          <p className="mb-4 text-xl font-bold text-white">
            Total:{" "}
            <span className="text-2xl text-amber-200">{calcularTotal()}€</span>
          </p>
          <button
            type="button"
            className="rounded-xl bg-green-800 px-8 py-3 text-base font-bold text-white shadow-[0_2px_6px_rgba(0,0,0,0.15)] transition duration-200 ease-in-out hover:bg-green-900 hover:-translate-y-0.5 active:translate-y-0"
            onClick={handleComprar}
          >
            Comprar
          </button>
        </div>
      </div>
    </main>
  );
}

export default Bilhetes;
