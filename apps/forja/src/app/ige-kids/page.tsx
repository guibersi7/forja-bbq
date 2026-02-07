"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Minus, Plus, Ticket, ArrowLeft, Star, Check } from "lucide-react";

const WHATSAPP_NUMBER = "5515997008154";

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-02-21T14:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: "DIAS" },
    { value: timeLeft.hours, label: "HORAS" },
    { value: timeLeft.minutes, label: "MIN" },
    { value: timeLeft.seconds, label: "SEG" },
  ];

  const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FF9FF3"];

  return (
    <div className="flex gap-3 md:gap-4 justify-center">
      {timeUnits.map((item, i) => (
        <div key={i} className="text-center">
          <div
            className="rounded-xl px-3 py-2 md:px-4 md:py-3 min-w-[60px] md:min-w-[70px]"
            style={{ backgroundColor: colors[i] }}
          >
            <span className="text-2xl md:text-3xl font-black text-white tabular-nums">
              {String(item.value).padStart(2, "0")}
            </span>
          </div>
          <span className="text-[10px] md:text-xs text-gray-500 mt-1 block tracking-widest font-bold">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

interface Attraction {
  id: string;
  name: string;
  description: string;
  pricePerTicket: number;
  emoji: string;
  color: string;
  bgColor: string;
}

const attractions: Attraction[] = [
  {
    id: "pula-pula",
    name: "Pula-Pula Inflável",
    description: "Cama elástica inflável gigante para a criançada pular e se divertir!",
    pricePerTicket: 5,
    emoji: "🎪",
    color: "#FF6B6B",
    bgColor: "#FF6B6B20",
  },
  {
    id: "toboga",
    name: "Tobogã Inflável",
    description: "Escorregador inflável com escalada para muita diversão.",
    pricePerTicket: 5,
    emoji: "🛝",
    color: "#4ECDC4",
    bgColor: "#4ECDC420",
  },
  {
    id: "piscina-bolinhas",
    name: "Piscina de Bolinhas",
    description: "Piscina colorida cheia de bolinhas para os pequenos.",
    pricePerTicket: 5,
    emoji: "🔵",
    color: "#45B7D1",
    bgColor: "#45B7D120",
  },
  {
    id: "pintura-facial",
    name: "Pintura Facial",
    description: "Pinturas artísticas no rosto com tintas atóxicas e laváveis.",
    pricePerTicket: 10,
    emoji: "🎨",
    color: "#F7DC6F",
    bgColor: "#F7DC6F20",
  },
  {
    id: "algodao-doce",
    name: "Algodão Doce",
    description: "Algodão doce fresquinho feito na hora!",
    pricePerTicket: 8,
    emoji: "🍭",
    color: "#FF9FF3",
    bgColor: "#FF9FF320",
  },
  {
    id: "pipoca",
    name: "Pipoca",
    description: "Pipoca quentinha e crocante para os pequenos.",
    pricePerTicket: 6,
    emoji: "🍿",
    color: "#FFEAA7",
    bgColor: "#FFEAA720",
  },
  {
    id: "oficina-arte",
    name: "Oficina de Arte",
    description: "Atividades criativas com pintura, desenho e colagem.",
    pricePerTicket: 10,
    emoji: "✂️",
    color: "#A29BFE",
    bgColor: "#A29BFE20",
  },
  {
    id: "cantinho-leitura",
    name: "Cantinho da Leitura",
    description: "Espaço tranquilo com livros e histórias bíblicas para crianças.",
    pricePerTicket: 0,
    emoji: "📚",
    color: "#55EFC4",
    bgColor: "#55EFC420",
  },
];

const ALL_ACCESS_PRICE = 40;

export default function IgeKidsPage() {
  const [tickets, setTickets] = useState<Record<string, number>>({});
  const [allAccess, setAllAccess] = useState(0);

  const updateTickets = (id: string, delta: number) => {
    setTickets((prev) => {
      const newQty = (prev[id] || 0) + delta;
      if (newQty <= 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: newQty };
    });
  };

  const totalTickets = Object.values(tickets).reduce((sum, qty) => sum + qty, 0);
  const ticketsPrice = Object.entries(tickets).reduce((sum, [id, qty]) => {
    const item = attractions.find((a) => a.id === id);
    return sum + (item?.pricePerTicket || 0) * qty;
  }, 0);
  const totalPrice = ticketsPrice + allAccess * ALL_ACCESS_PRICE;
  const hasItems = totalTickets > 0 || allAccess > 0;

  const sendToWhatsApp = () => {
    if (!hasItems) return;

    let message = `🎡 *PEDIDO IGE KIDS* 🎡

Olá! Gostaria de comprar os seguintes tickets:

`;

    if (allAccess > 0) {
      message += `⭐ *${allAccess}x PULSEIRA ALL ACCESS* - R$ ${(allAccess * ALL_ACCESS_PRICE).toFixed(2)}
(Acesso ilimitado a todos os brinquedos)

`;
    }

    if (totalTickets > 0) {
      const ticketItems = Object.entries(tickets)
        .map(([id, qty]) => {
          const item = attractions.find((a) => a.id === id);
          if (!item) return "";
          const itemTotal = item.pricePerTicket * qty;
          return `• ${qty}x ${item.name} - R$ ${itemTotal.toFixed(2)}`;
        })
        .filter(Boolean)
        .join("\n");

      message += `*Tickets Individuais:*
${ticketItems}

`;
    }

    message += `*Total: R$ ${totalPrice.toFixed(2)}*

Aguardo confirmação! 🙏`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-600 hover:text-pink-500 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-bold">VOLTAR</span>
            </Link>
            <Link href="/">
              <Image
                src="/images/preview-removebg-preview.webp"
                alt="Forja BBQ"
                width={40}
                height={40}
                className="h-10 w-auto"
                sizes="40px"
              />
            </Link>
            <div className="w-20" />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-24 pb-8 relative">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-gray-800 mb-4">
              IGE{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
                KIDS
              </span>
            </h1>
            <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Área exclusiva para a criançada! Muita diversão, brinquedos e
              alegria durante o Forja BBQ!
            </p>
            <Countdown />
          </motion.div>
        </div>
      </section>

      {/* All Access Pass */}
      <section className="py-8 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 rounded-3xl p-1"
          >
            <div className="bg-white rounded-[22px] p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 text-sm font-black tracking-wider">
                      MELHOR OPÇÃO!
                    </span>
                    <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-2">
                    🎟️ PULSEIRA ALL ACCESS
                  </h2>
                  <p className="text-gray-600 mb-4 text-lg">
                    Acesso ILIMITADO a TODOS os brinquedos o dia inteiro!
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    {["Pula-Pula", "Tobogã", "Piscina", "E mais!"].map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1 bg-gradient-to-r from-green-400 to-cyan-400 text-white text-sm font-bold px-3 py-1 rounded-full"
                      >
                        <Check className="w-4 h-4" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-center gap-4 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-6">
                  <div className="text-center">
                    <span className="text-orange-500 text-sm font-bold">Por apenas</span>
                    <p className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
                      R$ {ALL_ACCESS_PRICE}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setAllAccess((prev) => Math.max(0, prev - 1))}
                      disabled={allAccess === 0}
                      className="w-12 h-12 rounded-full bg-gray-200 text-gray-600 hover:bg-pink-500 hover:text-white transition-colors flex items-center justify-center disabled:opacity-50 font-bold text-xl"
                    >
                      <Minus className="w-6 h-6" />
                    </button>
                    <span className="w-16 text-center text-gray-800 font-black text-3xl">
                      {allAccess}
                    </span>
                    <button
                      onClick={() => setAllAccess((prev) => prev + 1)}
                      className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:opacity-90 transition-opacity flex items-center justify-center font-bold text-xl shadow-lg"
                    >
                      <Plus className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Individual Attractions */}
      <section className="py-8 pb-40 relative z-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black text-gray-800 mb-8 text-center">
            🎫 Tickets Individuais
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {attractions.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-white rounded-3xl p-4 shadow-xl hover:shadow-2xl transition-shadow"
                style={{ borderTop: `4px solid ${item.color}` }}
              >
                <div
                  className="w-full h-20 rounded-2xl mb-3 flex items-center justify-center"
                  style={{ backgroundColor: item.bgColor }}
                >
                  <span className="text-5xl">{item.emoji}</span>
                </div>

                <h3
                  className="text-base font-bold mb-1"
                  style={{ color: item.color }}
                >
                  {item.name}
                </h3>
                <p className="text-gray-500 text-xs mb-3 line-clamp-2">
                  {item.description}
                </p>

                <div className="flex items-center justify-between">
                  <span
                    className="font-black text-lg"
                    style={{ color: item.color }}
                  >
                    {item.pricePerTicket === 0
                      ? "Grátis!"
                      : `R$ ${item.pricePerTicket}`}
                  </span>

                  {item.pricePerTicket > 0 && (
                    <div className="flex items-center gap-1">
                      {tickets[item.id] ? (
                        <>
                          <button
                            onClick={() => updateTickets(item.id, -1)}
                            className="w-7 h-7 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors flex items-center justify-center"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center text-gray-800 font-bold text-sm">
                            {tickets[item.id]}
                          </span>
                          <button
                            onClick={() => updateTickets(item.id, 1)}
                            className="w-7 h-7 rounded-full text-white transition-colors flex items-center justify-center"
                            style={{ backgroundColor: item.color }}
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => updateTickets(item.id, 1)}
                          className="px-3 py-1.5 rounded-full text-white text-xs font-bold transition-opacity hover:opacity-90"
                          style={{ backgroundColor: item.color }}
                        >
                          + Add
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Cart */}
      {hasItems && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-md border-t-4 border-yellow-400 shadow-2xl"
        >
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
            <div>
              <p className="text-gray-500 text-sm">
                {allAccess > 0 && `${allAccess} pulseira(s)`}
                {allAccess > 0 && totalTickets > 0 && " + "}
                {totalTickets > 0 && `${totalTickets} ticket(s)`}
              </p>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 font-black text-2xl">
                R$ {totalPrice.toFixed(2)}
              </p>
            </div>
            <button
              onClick={sendToWhatsApp}
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold px-6 py-4 rounded-full transition-colors shadow-lg"
            >
              <Ticket className="w-5 h-5" />
              <span>Comprar Tickets</span>
              <span className="text-xl">🎉</span>
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
