"use client";

import { useEffect } from "react";
import { supabase } from "../lib/supabaseClient.js";

export default function Home() {
  useEffect(() => {
    useEffect(() => {
      checkConnection();
    }, []);

    async function checkConnection() {
      const { data, error } = await supabase
        .from("mahasiswa")
        .select("*")
        .limit(1);

      if (error) {
        console.error("Error fetching data:", error.message);
        alert("Gagal konek ke database supabase" + error.message);
      } else {
        console.log("Data fetched successfully:", data);
        alert("Berhasil konek ke database supabase");
      }
    }
    
  });
}
