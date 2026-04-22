"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Loading from "@/app/loading";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const pathname = usePathname();
  const [loadings, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
  }, [pathname]);

  return (
    <>
      {loadings && (
        <Loading
          key={pathname} 
          onComplete={() => setLoading(false)}
        />
      )}

 
      <main 
        className={`transition-opacity duration-1000 ease-in-out ${
          loadings ? "opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </main>
    </>
  );
}