"use client";

import { useCartStore } from "@/app/store/cart-store";
import Link from "next/link";
import { useEffect } from "react";

export default function SuccessPage() {
  const { clearCart } = useCartStore();
  useEffect(() => {
    clearCart();
  }, [clearCart]);
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Paiement réussi !</h1>
      <p className="mb-4">
        Merci pour votre achat. Votre commande est en cours de traitement..
      </p>
      <Link href="/products" className="text-blue-600 hover:underline">
        Continuer vos achats
      </Link>
    </div>
  );
}