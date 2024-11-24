import { Copy, Spinner } from "@phosphor-icons/react";
import React, { useState } from "react";


function CopyWrapper({ text, children }: { text: string, children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div
      className="flex items-center gap-2 w-full cursor-pointer"
      onClick={() => {
        setIsLoading(true);

        navigator.clipboard.writeText(text).finally(() => setIsLoading(false));
      }}
    >
      {children}
      {isLoading ? (
        <Spinner
          className="cursor-pointer"
          color="#64748B"
          style={{ height: 16, width: 16 }}
          weight="regular"
          data-testid="loader-circle"
        />
      ) : (
        <Copy
          className="cursor-pointer"
          color="#64748B"
          style={{ height: 16, width: 16 }}
          weight="regular"
          data-testid="copy-icon"
        />
      )}
    </div>
  );
}

export default CopyWrapper;
