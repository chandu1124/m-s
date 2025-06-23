import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { gtagEvent, getDeviceInfo } from "./lib/gtag";

const queryClient = new QueryClient();

function AnalyticsTracker() {
  const location = useLocation();
  useEffect(() => {
    const device = getDeviceInfo();
    gtagEvent({
      action: "page_view",
      category: "Page",
      label: location.pathname,
      value: device.deviceLabel,
      device_type: device.deviceType,
      device_vendor: device.deviceVendor,
      device_model: device.deviceModel,
      os: device.os,
      browser: device.browser,
      page_path: location.pathname,
      timestamp: Date.now(),
    });
  }, [location.pathname]);
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnalyticsTracker />
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
