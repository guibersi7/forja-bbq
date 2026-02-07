"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Minus, Plus, ShoppingBag, ArrowLeft } from "lucide-react";

const WHATSAPP_NUMBER = "5515997008154";

interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const foodItems: FoodItem[] = [
  // Lanches
  {
    id: "forja-beef",
    name: "Forja Beef",
    description: "R$ 22",
    price: 22,
    image: "/images/Forja-beef.webp",
    category: "Lanches",
  },
  {
    id: "forja-pork",
    name: "Forja Pork",
    description: "R$ 20",
    price: 20,
    image: "/images/Forja-Pork.webp",
    category: "Lanches",
  },
  {
    id: "lanche-bbq",
    name: "Lanche BBQ",
    description: "R$ 18",
    price: 18,
    image: "/images/Lanche-BBQ.webp",
    category: "Lanches",
  },
  {
    id: "x-burger-kids",
    name: "X-Burger Kids",
    description: "R$ 15",
    price: 15,
    image: "/images/Burguer-Kids.webp",
    category: "Lanches",
  },
  // Combos
  {
    id: "combo-beef",
    name: "Forja Beef + Refrigerante",
    description: "Combo com refrigerante (Economia de R$ 2,00)",
    price: 28,
    image: "/images/Forja-beef.webp",
    category: "Combos",
  },
  {
    id: "combo-pork",
    name: "Forja Pork + Refrigerante",
    description: "Combo com refrigerante (Economia de R$ 2,00)",
    price: 26,
    image: "/images/Forja-Pork.webp",
    category: "Combos",
  },
  {
    id: "combo-bbq",
    name: "Lanche BBQ + Refrigerante",
    description: "Combo com refrigerante (Economia de R$ 2,00)",
    price: 24,
    image: "/images/Lanche-BBQ.webp",
    category: "Combos",
  },
  {
    id: "combo-kids",
    name: "X-Burger Kids + Refrigerante",
    description: "Combo com refrigerante (Economia de R$ 2,00)",
    price: 21,
    image: "/images/Burguer-Kids.webp",
    category: "Combos",
  },
  // Bebidas
  {
    id: "refri-lata",
    name: "Refrigerante",
    description: "R$ 8",
    price: 8,
    image: "/images/refrigerante-1.webp",
    category: "Bebidas",
  },
  {
    id: "agua",
    name: "Água",
    description: "R$ 6",
    price: 6,
    image: "/images/agua.webp",
    category: "Bebidas",
  },
  {
    id: "suco",
    name: "Suco",
    description: "R$ 7",
    price: 7,
    image: "/images/suco.webp",
    category: "Bebidas",
  },
];

const categories = ["Lanches", "Combos", "Bebidas"];

export default function CardapioPage() {
  const [cart, setCart] = useState<Record<string, number>>({});

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) => {
      const newQty = (prev[id] || 0) + delta;
      if (newQty <= 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: newQty };
    });
  };

  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  const totalPrice = Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = foodItems.find((f) => f.id === id);
    return sum + (item?.price || 0) * qty;
  }, 0);

  const sendToWhatsApp = () => {
    if (totalItems === 0) return;

    const items = Object.entries(cart)
      .map(([id, qty]) => {
        const item = foodItems.find((f) => f.id === id);
        return `• ${qty}x ${item?.name} - R$ ${((item?.price || 0) * qty).toFixed(2)}`;
      })
      .join("\n");

    const message = `🔥 *PEDIDO FORJA BBQ* 🔥

Olá! Gostaria de fazer o seguinte pedido:

${items}

*Total: R$ ${totalPrice.toFixed(2)}*

Aguardo confirmação! 🙏`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/95 md:backdrop-blur-md border-b border-accent-metal/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="flex items-center gap-2 text-text-secondary hover:text-accent-fire transition-colors"
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
      <section className="pt-24 pb-12 bg-bg-highlight">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent-fire text-sm font-bold tracking-[0.2em] mb-4 block">
              FORJA BBQ
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-text-primary mb-4">
              CARDÁPIO
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Escolha suas delícias e faça seu pedido pelo WhatsApp. Preparamos
              tudo com muito carinho!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          {categories.map((category) => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-black text-text-primary mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-accent-fire rounded-full" />
                {category}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {foodItems
                  .filter((item) => item.category === category)
                  .map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-bg-secondary rounded-2xl p-5 border border-accent-metal/20 hover:border-accent-fire/30 transition-colors"
                    >
                      {/* Image */}
                      <div className="relative w-full h-32 bg-bg-highlight rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
                          quality={75}
                        />
                      </div>

                      <h3 className="text-lg font-bold text-text-primary mb-1">
                        {item.name}
                      </h3>
                      <p className="text-text-secondary text-sm mb-3 line-clamp-2">
                        {item.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-accent-fire font-black text-xl">
                          R$ {item.price.toFixed(2)}
                        </span>

                        <div className="flex items-center gap-2">
                          {cart[item.id] ? (
                            <>
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="w-8 h-8 rounded-full bg-bg-highlight text-text-primary hover:bg-accent-fire hover:text-white transition-colors flex items-center justify-center"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="w-8 text-center text-text-primary font-bold">
                                {cart[item.id]}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="w-8 h-8 rounded-full bg-accent-fire text-white hover:bg-accent-fire-hover transition-colors flex items-center justify-center"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </>
                          ) : (
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="px-4 py-2 rounded-full bg-accent-fire text-white text-sm font-bold hover:bg-accent-fire-hover transition-colors"
                            >
                              Adicionar
                            </button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Floating Cart */}
      {totalItems > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-0 left-0 right-0 p-4 bg-bg-secondary/95 md:backdrop-blur-md border-t border-accent-metal/20"
        >
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
            <div>
              <p className="text-text-secondary text-sm">
                {totalItems} {totalItems === 1 ? "item" : "itens"} no pedido
              </p>
              <p className="text-text-primary font-black text-xl">
                R$ {totalPrice.toFixed(2)}
              </p>
            </div>
            <button
              onClick={sendToWhatsApp}
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold px-6 py-4 rounded-full transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              Enviar Pedido
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
