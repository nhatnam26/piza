"use client";

import { useEffect, useMemo, useState } from "react";

const SALE_DURATION_SECONDS = 60 * 1; // 10 phút

export default function FlashSale() {
  const [startTime] = useState<number>(() => Math.floor(Date.now() / 1000));
  const [now, setNow] = useState<number>(() => Math.floor(Date.now() / 1000));
  const [stockLeft, setStockLeft] = useState<number>(50);
  const [isBuying, setIsBuying] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setNow(Math.floor(Date.now() / 1000));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const timeLeft = useMemo(() => {
    const end = startTime + SALE_DURATION_SECONDS;
    return Math.max(0, end - now);
  }, [startTime, now]);

  const isSaleActive = timeLeft > 0 && stockLeft > 0;

  const handleBuy = async () => {
    if (!isSaleActive) return;

    try {
      setIsBuying(true);
      setMessage(null);

      await new Promise((r) => setTimeout(r, 700)); // delay mô phỏng

      setStockLeft((s) => s - 1);
      setMessage("Mua thành công!");
    } catch (e: any) {
      setMessage(e?.message ?? "Có lỗi xảy ra.");
    } finally {
      setIsBuying(false);
    }
  };

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-slate-900 text-white p-6 rounded-2xl border border-slate-700">
      <h1 className="text-3xl font-bold mb-3">🔥 Flash Sale</h1>

      <div className="grid grid-cols-3 text-center mb-6">
        <div>
          <p className="text-xs text-slate-400">Giá</p>
          <p className="text-lg font-semibold">0.01 IOTA</p>
        </div>
        <div>
          <p className="text-xs text-slate-400">Còn lại</p>
          <p className="text-lg font-semibold">{stockLeft}</p>
        </div>
        <div>
          <p className="text-xs text-slate-400">Thời gian</p>
          <p className="text-lg font-semibold">{formatTime(timeLeft)}</p>
        </div>
      </div>

      <button
        onClick={handleBuy}
        disabled={!isSaleActive || isBuying}
        className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 rounded-xl
          disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
      >
        {isBuying ? "Đang mua..." : isSaleActive ? "Mua ngay" : "Hết hàng hoặc hết giờ"}
      </button>

      {message && <p className="mt-4 text-emerald-300">{message}</p>}
    </div>
  );
}
