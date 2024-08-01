import React, { ReactNode } from 'react';
import { LiveblocksProvider, ClientSideSuspense } from '@liveblocks/react/suspense';
import Loader from '@/components/Loader';

const Provider = ({ children }: { children: ReactNode}) => {
  return (
    <LiveblocksProvider 
      authEndpoint="/api/liveblocks-auth"
      resolveUsers = {async ({ userIds }) =>{
        const response = await fetch(`/api/users?userIds=${userIds.join(',')}`);
        const users = await response.json();
        return users
      }} 
    >

      <ClientSideSuspense fallback={<Loader/>}>
        {children}
      </ClientSideSuspense>
  </LiveblocksProvider>
  )
}

export default Provider