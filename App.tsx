import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  BarChart3,
  ShieldCheck,
  Users,
  ChevronRight,
  Smartphone,
  FileText,
  Lock,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";
import { DashboardDemo } from "./components/DashboardDemo";

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen font-sans text-slate-800 selection:bg-brand-200 selection:text-brand-900 overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-brand-600 text-white p-2 rounded-lg">
              <BarChart3 className="w-6 h-6" />
            </div>
            <span
              className={`text-2xl font-bold tracking-tight ${
                isScrolled ? "text-slate-900" : "text-slate-900 lg:text-white"
              }`}
            >
              Eleve<span className="text-brand-500">Conv</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {["Funcionalidades", "Compliance", "Transparência"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`font-medium hover:text-brand-500 transition-colors ${
                  isScrolled
                    ? "text-slate-600"
                    : "text-slate-100 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contato")}
              className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-brand-500/30"
            >
              Solicitar Proposta
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-slate-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X />
            ) : (
              <Menu className={isScrolled ? "text-slate-800" : "text-white"} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-4 md:hidden flex flex-col space-y-4 border-t border-slate-100">
            {["Funcionalidades", "Compliance", "Transparência", "Contato"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left text-lg font-medium text-slate-700 hover:text-brand-600 py-2 border-b border-slate-50"
                >
                  {item}
                </button>
              )
            )}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/80 to-slate-50"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/20 border border-brand-500/30 text-brand-300 mb-6 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
              <span className="text-sm font-medium">
                Em conformidade com as novas resoluções
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              A Evolução na Gestão de <br className="hidden md:block" />
              <span className="text-brand-600 bg-clip-text bg-gradient-to-r from-brand-600 to-accent-400">
                Emendas Parlamentares
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              O sistema <b>Eleve</b>
              <b className="text-brand-600">Conv</b> disponibiliza às
              prefeituras municipais e aos governos estaduais uma plataforma
              integrada para monitoramento, garantia de conformidade jurídica e
              promoção de transparência plena ao cidadão.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => scrollToSection("contato")}
                className="w-full sm:w-auto px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-brand-500/40 flex items-center justify-center gap-2"
              >
                Falar com Especialista <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollToSection("funcionalidades")}
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 rounded-xl font-bold text-lg transition-all flex items-center justify-center"
              >
                Conhecer a Plataforma
              </button>
            </div>
          </div>

          {/* Hero Dashboard Preview */}
          <div className="transform md:translate-y-12">
            <DashboardDemo />
          </div>
        </div>
      </section>

      {/* Partners / Trust Indicators */}
      <section className="bg-slate-50 py-12 border-b border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-500 font-medium mb-6 uppercase tracking-wider text-sm">
            Ideal para
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Mock Logos */}
            <div className="flex items-center gap-2 text-xl font-bold text-slate-700">
              <Users className="w-8 h-8" /> Prefeituras Municipais
            </div>
            <div className="flex items-center gap-2 text-xl font-bold text-slate-700">
              <ShieldCheck className="w-8 h-8" /> Governos Estaduais
            </div>
            <div className="flex items-center gap-2 text-xl font-bold text-slate-700">
              <FileText className="w-8 h-8" /> Gabinetes Parlamentares
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section (Crucial) */}
      <section id="compliance" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-brand-100 rounded-full blur-3xl opacity-50"></div>
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"
                  alt="Segurança Jurídica"
                  className="relative rounded-2xl shadow-2xl z-10 border border-slate-100"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl z-20 border border-slate-100">
                  <div className="flex items-center gap-3 mb-2">
                    <ShieldCheck className="w-8 h-8 text-emerald-500" />
                    <span className="font-bold text-slate-800">
                      100% Seguro
                    </span>
                  </div>
                  <p className="text-sm text-slate-500">
                    Auditável e transparente
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Adequação Completa às <br />
                <span className="text-brand-600 mb-4 mt-2">
                  Novas Resoluções - TSE
                </span>
                <a
                  href="/PDF/Resolução-TSE-Ministro-Flavio-Dino.pdf"
                  download
                  className="inline-block px-5 py-2 mt-4 rounded-md bg-brand-600 text-white font-medium hover:bg-brand-700 transition"
                >
                  Baixar Resolução em PDF
                </a>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Não corra riscos. A <b>Eleve</b>
                <b className="text-brand-600">Conv</b> foi desenvolvido por
                especialistas em gestão pública para garantir que cada etapa da
                destinação e execução das emendas siga rigorosamente a
                legislação vigente.
              </p>

              <ul className="space-y-4">
                {[
                  "Rastreabilidade total dos recursos",
                  "Relatórios automáticos para tribunais de contas",
                  "Separação clara entre emendas impositivas e discricionárias",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 bg-brand-100 p-1 rounded-full">
                      <CheckCircleIcon className="w-4 h-4 text-brand-600" />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="funcionalidades" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Tecnologia em Serviço da Gestão
            </h2>
            <p className="text-lg text-slate-600">
              Uma suite completa de ferramentas para modernizar a gestão
              pública.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={BarChart3}
              title="Dashboard Executivo"
              description="Visualização em tempo real da execução orçamentária com gráficos dinâmicos e intuitivos."
            />
            <FeatureCard
              icon={Users}
              title="Portal do Cidadão"
              description="Interface pública automática que permite ao eleitor acompanhar onde o recurso está sendo investido."
            />
            <FeatureCard
              icon={Smartphone}
              title="Acesso Mobile"
              description="Acompanhe o status das emendas direto do celular, em qualquer lugar, a qualquer hora."
            />
            <FeatureCard
              icon={FileText}
              title="Gestão Documental"
              description="Centralização de ofícios, notas técnicas e comprovantes em um único repositório digital."
            />
            <FeatureCard
              icon={Lock}
              title="Segurança de Dados"
              description="Criptografia de ponta a ponta e backups diários para garantir a integridade das informações."
            />
            <FeatureCard
              icon={ShieldCheck}
              title="Auditoria Simplificada"
              description="Exportação de dados em formatos abertos compatíveis com os sistemas de controle externo."
            />
          </div>
        </div>
      </section>

      {/* CTA Section - Contact */}
      <section
        id="contato"
        className="py-20 bg-brand-900 relative overflow-hidden"
      >
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600 rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-500 rounded-full blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Pronto para modernizar sua gestão?
              </h3>
              <p className="text-slate-600 mb-8 text-lg">
                Entre em contato com nossa equipe comercial e agende uma
                demonstração completa do sistema Eleve Conv.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-600">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 uppercase font-semibold tracking-wider">
                      Ligue Agora
                    </p>
                    <p className="text-xl font-bold text-slate-900">
                      (84) 8152-8599
                    </p>
                    <p className="text-sm text-slate-500">
                      Atendimento 24h para parlamentares
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 uppercase font-semibold tracking-wider">
                      Email Comercial
                    </p>
                    <a
                      href="mailto:actrealiza@gmail.com"
                      className="text-xl font-bold text-slate-900 hover:text-brand-600 transition-colors"
                    >
                      actrealiza@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.52 3.48A11.88 11.88 0 0 0 12 0C5.37 0 .07 5.26.07 11.88c0 2.09.55 4.14 1.6 5.95L0 24l6.35-1.65a11.98 11.98 0 0 0 5.65 1.43h.01c6.62 0 11.92-5.26 11.92-11.88 0-3.18-1.24-6.17-3.41-8.42zM12 21.11c-1.84 0-3.63-.5-5.19-1.44l-.37-.22-3.77.98 1-3.67-.24-.38a9.7 9.7 0 0 1-1.55-5.32A9.78 9.78 0 0 1 21.78 11.9c0 5.4-4.41 9.78-9.78 9.78zm5.21-7.37c-.29-.15-1.72-.85-1.98-.95-.26-.09-.45-.15-.64.15-.19.29-.74.95-.91 1.14-.17.2-.34.22-.63.07-.29-.15-1.21-.44-2.3-1.39-.85-.76-1.42-1.7-1.59-1.99-.17-.29-.02-.45.13-.59.14-.14.29-.34.43-.51.15-.17.2-.29.29-.48.1-.2.05-.37-.02-.52-.07-.15-.64-1.55-.88-2.11-.23-.55-.47-.48-.64-.48-.17 0-.37 0-.57 0-.2 0-.52.07-.8.37-.29.29-1.09 1.06-1.09 2.57 0 1.5 1.12 2.95 1.28 3.16.17.2 2.21 3.38 5.35 4.6.75.32 1.34.51 1.79.65.75.24 1.43.21 1.97.13.6-.09 1.72-.7 1.97-1.37.24-.68.24-1.26.17-1.37-.07-.1-.26-.17-.54-.32z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 uppercase font-semibold tracking-wider">
                      WhatsApp
                    </p>
                    <a
                      href="https://wa.me/558481528599"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-green-600 text-white font-semibold text-lg hover:bg-green-700 transition-colors"
                    >
                      WhatsApp — Falar com Vendedor
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 className="w-6 h-6 text-brand-500" />
                <span className="text-2xl font-bold text-white">
                  Eleve<span className="text-brand-500">Conv</span>
                </span>
              </div>
              <p className="max-w-xs text-slate-400">
                Transformando a gestão pública através da transparência e
                tecnologia. O sistema definitivo para monitoramento de emendas.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("funcionalidades")}
                    className="hover:text-brand-400 transition-colors"
                  >
                    Funcionalidades
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("compliance")}
                    className="hover:text-brand-400 transition-colors"
                  >
                    Compliance
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contato")}
                    className="hover:text-brand-400 transition-colors"
                  >
                    Contratar
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>
              &copy; {new Date().getFullYear()} EleveConv Tecnologia. Todos os
              direitos reservados.
            </p>
            <p>Desenvolvido para o futuro da MarquesChristmann.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Helper Components
const FeatureCard: React.FC<{
  icon: any;
  title: string;
  description: string;
}> = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
    <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
      <Icon className="w-7 h-7" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

const CheckCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

export default App;
