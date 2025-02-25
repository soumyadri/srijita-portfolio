import { createContext, useContext } from "react";

export const LightModeContext = createContext({});

export const useLightMode: any = () => useContext(LightModeContext);