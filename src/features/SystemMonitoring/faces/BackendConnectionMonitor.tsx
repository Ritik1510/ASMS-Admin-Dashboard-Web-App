"use client";

import { useEffect, useState } from "react";
import { useBackendHealthQuery } from "../hook/useBackendHealthQuery";

export default function BackendHealthIndicator() {
  const { data, isError } = useBackendHealthQuery();
  const [visible, setVisible] = useState(false);

  const tagCssClasses = "rounded-full border border-brand-900 px-1 py-[0.674px] text-[9px] shadow-sm backdrop-blur bg-white/30"

  useEffect(() => {
    if (data?.status !== "ok") return;

    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 15_000);

    return () => clearTimeout(timer);
  }, [data?.status]);

  if (isError) {
    return (
      <div className="fixed bottom-2 left-1/2 z-50 -translate-x-1/2">
        <div className={tagCssClasses}>
          <span className="text-destructive">Unable to connect</span>
        </div>
      </div>
    );
  }

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed bottom-2 left-1/2 z-50 -translate-x-1/2">
      <div className={tagCssClasses}>
        <span className="text-text-success">Healthy</span>
      </div>
    </div>
  );
}