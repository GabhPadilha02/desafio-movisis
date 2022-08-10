import { ApolloProvider } from "@apollo/client";
import { client } from "./lib/apollo";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { AppProvider } from "./contexts/AppContext";

export function App() {
  return (
    <ApolloProvider client={client}>
      <AppProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AppProvider>
    </ApolloProvider>
  )
}

