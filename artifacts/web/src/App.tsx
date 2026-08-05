import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { ArrowUpRight, Box, ChevronDown, CircuitBoard, Mail, Sparkles, Wrench } from 'lucide-react';
import { useState } from 'react';
import { Route, Switch, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();

function Home() {
  const [activePanel, setActivePanel] = useState<string | null>(null);

  const panels = [
    {
      id: 'about',
      index: '01',
      title: 'Quem somos',
      description: 'Ideias com volume, detalhe e um pouco de atrevimento.',
      heading: 'Peças que começam na conversa.',
      body: 'Somos um estúdio brasileiro de criação e fabricação 3D. Misturamos modelagem, prototipagem e acabamento para transformar uma ideia rabiscada em algo que ocupa espaço.',
      tags: ['Estúdio independente', 'São Paulo · Brasil', 'Desde 2020'],
      Icon: CircuitBoard,
    },
    {
      id: 'products',
      index: '02',
      title: 'Produtos',
      description: 'Objetos autorais e soluções sob medida.',
      heading: 'Do arquivo para a sua mesa.',
      body: 'Criamos pequenas séries, peças decorativas, protótipos e presentes que não parecem ter saído de uma linha de produção. Cada produto nasce com função, personalidade e tolerância milimétrica.',
      tags: ['Peças autorais', 'Sob encomenda', 'Prototipagem'],
      Icon: Box,
    },
    {
      id: 'contact',
      index: '03',
      title: 'Fale conosco',
      description: 'Tem um arquivo, uma ideia ou só uma pergunta?',
      heading: 'Vamos dar forma ao próximo passo.',
      body: 'Mande uma mensagem com o que você tem em mente. A gente responde com clareza: materiais possíveis, prazo realista e o caminho mais inteligente para fabricar.',
      tags: ['Orçamentos', 'Parcerias', 'Projetos especiais'],
      Icon: Mail,
    },
  ];

  const togglePanel = (id: string) => {
    setActivePanel((current) => (current === id ? null : id));
  };

  return (
    <div className="site-shell">
      <header className="site-header" data-testid="header-site">
        <a className="brand-lockup" href="#inicio" data-testid="link-brand">
          <span className="brand-mark" aria-hidden="true">
            <Wrench size={22} strokeWidth={2.4} />
          </span>
          <span className="brand-name">
            Crie Aqui 3D
            <span>forma · função · futuro</span>
          </span>
        </a>
        <span className="header-note" data-testid="text-header-status">
          <span className="pulse-dot" aria-hidden="true" />
          fabricação sob demanda
        </span>
      </header>

      <main id="inicio">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <span className="eyebrow">estúdio de criação 3D</span>
            <h1 id="hero-title">Ideias que <em>ganham</em> forma.</h1>
            <p className="hero-subtitle">
              Modelamos, imprimimos e acabamos objetos para quem prefere o original ao óbvio.
            </p>
          </div>
          <div className="hero-visual" aria-label="Composição abstrata de uma peça 3D em fabricação">
            <div className="visual-field">
              <div className="model-core" aria-hidden="true" />
              <span className="visual-label">objeto 001 / em curso</span>
            </div>
            <div className="hero-stamp" aria-hidden="true">
              <span><strong>3D</strong>feito no Brasil</span>
            </div>
          </div>
        </section>

        <div className="process-strip" aria-hidden="true">
          <div className="process-track">
            <span>imaginar</span><span>modelar</span><span>imprimir</span><span>ajustar</span><span>entregar</span>
            <span>imaginar</span><span>modelar</span><span>imprimir</span><span>ajustar</span><span>entregar</span>
          </div>
        </div>

        <section className="link-section" aria-labelledby="explore-title">
          <div className="section-intro">
            <div>
              <span className="section-kicker">explore o estúdio</span>
              <h2 id="explore-title">Escolha uma porta de entrada.</h2>
            </div>
            <p className="section-hint">toque para abrir · toque de novo para fechar</p>
          </div>

          <div className="link-grid" role="list">
            {panels.map(({ id, index, title, description, Icon }) => (
              <button
                key={id}
                className={`link-card${activePanel === id ? ' is-active' : ''}`}
                type="button"
                aria-expanded={activePanel === id}
                aria-controls={`detail-${id}`}
                onClick={() => togglePanel(id)}
                data-testid={`button-menu-${id}`}
                role="listitem"
              >
                <span className="card-topline">
                  <span className="card-index">{index} / 03</span>
                  <span className="card-arrow" aria-hidden="true">
                    <ArrowUpRight size={15} strokeWidth={2.2} />
                  </span>
                </span>
                <span>
                  <Icon size={23} strokeWidth={1.8} aria-hidden="true" />
                  <span className="card-title">{title}</span>
                  <span className="card-description">{description}</span>
                </span>
              </button>
            ))}
          </div>

          {panels.map(({ id, heading, body, tags }) => (
            <div
              key={id}
              id={`detail-${id}`}
              className={`detail-panel${activePanel === id ? ' is-open' : ''}`}
              aria-hidden={activePanel !== id}
              data-testid={`panel-detail-${id}`}
            >
              <div className="detail-panel-inner">
                <div className="detail-content">
                  <div>
                    <h3>{heading}</h3>
                    <p>{body}</p>
                    {id === 'contact' && (
                      <a className="detail-link" href="mailto:oi@crieaqui3d.com.br" data-testid="link-contact-email">
                        <Mail size={15} aria-hidden="true" /> oi@crieaqui3d.com.br <ArrowUpRight size={14} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                  <ul className="detail-list" aria-label={`Detalhes de ${heading}`}>
                    {tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="link-section" aria-label="Manifesto">
          <div className="section-intro">
            <div>
              <span className="section-kicker"><Sparkles size={13} aria-hidden="true" /> nosso jeito</span>
              <h2>Precisão não precisa ser sem graça.</h2>
            </div>
            <ChevronDown size={20} aria-hidden="true" />
          </div>
        </section>
      </main>

      <footer className="site-footer" data-testid="footer-site">
        <p className="footer-copy"><strong>Brasil 2026</strong> · feito para durar</p>
        <p className="footer-meta">crie com intenção</p>
      </footer>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
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
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
