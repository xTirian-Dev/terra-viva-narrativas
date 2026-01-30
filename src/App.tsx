import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Reportagens from "./pages/Reportagens";
import ReportagemDetalhe from "./pages/ReportagemDetalhe";
import Personagens from "./pages/Personagens";
import PersonagemDetalhe from "./pages/PersonagemDetalhe";
import SobreProjeto from "./pages/SobreProjeto";
import SobreAutor from "./pages/SobreAutor";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/reportagens" element={<Reportagens />} />
          <Route path="/reportagens/:slug" element={<ReportagemDetalhe />} />
          <Route path="/personagens" element={<Personagens />} />
          <Route path="/personagens/:slug" element={<PersonagemDetalhe />} />
          <Route path="/sobre-projeto" element={<SobreProjeto />} />
          <Route path="/sobre-autor" element={<SobreAutor />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
