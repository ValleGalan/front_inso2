import React, { useState, useEffect, createContext } from "react";
//import { useUser } from "../hooks";

export const AuthContext = createContext({
    auth: undefined,
    login: () => null,
    logout: () => null,
});
