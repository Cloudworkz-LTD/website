import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import OurStory from "./pages/OurStory";
import WhatWeDo from "./pages/WhatWeDo";
import Insights from "./pages/Insights";
import HowItWorks from "./pages/HowItWorks";
import SalesAsAService from "./pages/SalesAsAService";
import CloudworkzApp from "./pages/CloudworkzApp";
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
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/sales-as-a-service" element={<SalesAsAService />} />
          <Route path="/cloudworkz-app" element={<CloudworkzApp />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

const rootElement = document.getElementById("root")!;

// Store root instance globally to prevent multiple creation
declare global {
  var __reactRoot: ReturnType<typeof createRoot> | undefined;
}

if (!globalThis.__reactRoot) {
  globalThis.__reactRoot = createRoot(rootElement);
}

globalThis.__reactRoot.render(<App />);
