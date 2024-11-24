import React, { useState } from "react";
import { Copy, LoaderCircle } from "lucide-react";


function CopyWrapper({ text, children }: { text: string, children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div
      className="flex items-center justify-between gap-4 w-full cursor-pointer"
      onClick={() => {
        setIsLoading(true);

        navigator.clipboard.writeText(text)
          .finally(() => setIsLoading(false));
      }}
    >
      { children }
      {
        isLoading
          ? <LoaderCircle className="h-5 w-5 text-accent animate-spin" data-testid="loader-circle"/>
          : <Copy className="h-5 w-5 cursor-pointer text-slate-500" data-testid="copy-icon"/>
      }
    </div>
  );
}

export default CopyWrapper;
