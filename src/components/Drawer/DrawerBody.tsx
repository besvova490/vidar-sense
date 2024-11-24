import React from 'react'

export const DrawerBody = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-6 border-b border-[#E9ECEF] max-w-full overflow-x-hidden">{children}</div>;
};
