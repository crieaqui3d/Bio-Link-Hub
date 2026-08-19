import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();

function Home() {
  return (
    <main className="linktree-page">
      <section className="linktree-card" aria-labelledby="brand-title">
        <header className="linktree-header">
          <span className="brand-mark" aria-hidden="true" />
          <h1 id="brand-title">Crie Aqui 3D</h1>
        </header>

        <nav className="linktree-links" aria-label="Links">
          <a href="#quem-somos">Quem somos</a>
          <a href="#produtos">Produtos</a>
          <a href="#fale-conosco">Fale conosco</a>
        </nav>

        <footer className="linktree-footer">
          <strong>Brasil 2026</strong>
        </footer>
      </section>
    </main>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;