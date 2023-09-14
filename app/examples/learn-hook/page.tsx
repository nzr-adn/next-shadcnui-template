"use client";

import { use, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export default function LearnHook() {
  const [pacarSaya, setPacarSaya] = useState(0);
  const [namaPacar, setNamaPacar] = useState("");
  const tambahPacar = () => {
    setPacarSaya((prev) => prev + 1);
  };
  const kurangPacar = () => {
    setPacarSaya((prev) => prev - 1);
  };

  // Dijalankan setiap ada event di UI
  //   useEffect(() => {
  //     console.log("run effect");
  //   });

  // Dijalankan sekali saja
  //   useEffect(() => {
  //     console.log("run effect");
  //   }, []);

  // Dijalankan berdasarkan variable state berubah
  useEffect(() => {
    console.log("run effect");
    if (pacarSaya > 2) {
      setNamaPacar("Tari");
    } else {
      setNamaPacar("");
    }
  }, [pacarSaya]);

  return (
    <>
      <h1>Pacar saya ada {pacarSaya}</h1>
      <h2>Nama pacar saya {namaPacar}</h2>
      <Button onClick={tambahPacar}>Tambah Pacar</Button>
      <Button onClick={kurangPacar}>Kurang Pacar</Button>
    </>
  );
}
