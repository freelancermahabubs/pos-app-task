"use client";

import {Inter} from "next/font/google";
import "./globals.css";
import {Provider} from "react-redux";

// import {PersistGate} from "redux-persist/integration/react";
import { store} from "@/redux/store";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
      {/* </PersistGate> */}
    </Provider>
  );
}
