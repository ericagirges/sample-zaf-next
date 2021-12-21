import { useEffect, useState } from "react"

let zafClient = null;

export function useZafClient() {
  const [client, setClient] = useState(zafClient)

  useEffect(() => {
    // check to make sure we are not already using ZAF client OR that the client is not undefined
    if (!client && typeof window.ZAFClient !== 'undefined') {
      // save the zafClient to global scope so that it can be referenced without re-initialization later
      zafClient = window.ZAFClient.init()

      // set it to state
      setClient(zafClient)
      zafClient.invoke('resize', { height: '400px' })
    }
  }, [client])

  return client
}