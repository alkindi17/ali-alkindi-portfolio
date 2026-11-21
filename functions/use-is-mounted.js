import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

// False on the server and during hydration, true once running in the browser
export default function useIsMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}
