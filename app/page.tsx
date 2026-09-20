import Image from "next/image";
import SkillsCarousel from "./components/Carousel";
import SkillsCarousel2 from "./components/SkillsCarousel";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-screen flex-col overflow-hidden bg-[#08090d] text-white">
      <header className="absolute inset-x-0 top-0 z-50 h-16 px-6 py-3 lg:px-10">
        <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/15 bg-white/[0.04] shadow-[0_8px_40px_rgba(0,0,0,0.18)] backdrop-blur-2xl backdrop-saturate-150">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.08] via-transparent to-transparent" />

          <nav className="relative flex h-full items-center justify-center gap-1">
            {["Sobre mim", "Habilidades", "Projetos", "Trajetória"].map((item) => (
              <button
                key={item}
                className="font-display cursor-pointer rounded-xl px-5 py-2 text-sm text-white/60 transition-all duration-300 hover:bg-white/10 hover:text-white hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.04)]"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="h-screen w-screen overflow-x-hidden">
        {/*Banner Inicial */}
        <div className="pointer-events-none relative flex min-h-screen w-full items-center overflow-hidden">
          <div className="absolute inset-0 bg-[#0d101e]" />

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(79,70,229,0.24),transparent_35%),radial-gradient(circle_at_82%_70%,rgba(0,178,223,0.14),transparent_30%)]" />
          {/* Fundo */}
          <Image
            src="/image/perfil/fundo-geometric-zoom.jpg"
            alt=""
            fill
            className="object-cover opacity-30 mix-blend-screen"
            priority
          />
          <div className="absolute bottom-0 z-30 h-20 w-screen bg-linear-to-t from-[#1d2034] to-transparent" />

          <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-[#08090d]/90 via-[#08090d]/40 to-transparent" />
          <div className="relative z-20 flex w-full items-center px-8 pt-16 lg:px-20">
            <div className="max-w-5xl">
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs tracking-[0.3em] text-white/40 uppercase">
                  Full Stack Developer · Data & BI · Cloud
                </span>
              </div>

              {/* Título */}
              <h1 className="font-display mt-7 max-w-5xl text-6xl leading-[0.88] font-medium tracking-[-0.055em] text-white sm:text-6xl lg:text-[6rem]">
                Construo software
                <br />
                <span className="text-blue-100/20 text-shadow-black/20 text-shadow-md">
                  que conecta
                </span>
                <br />
                dados e negócio.
              </h1>

              {/* Descrição */}
              <p className="mt-7 mb-32 max-w-3xl font-sans text-base leading-relaxed text-white/50">
                Desenvolvedor Full Stack com experiência em BI, dados e tecnologia aplicada a
                negócios. Construo aplicações de ponta a ponta, conectando front-end, back-end,
                APIs, bancos de dados, cloud e DevOps para transformar necessidades de negócio em
                soluções digitais.
              </p>
            </div>
            {/* Stack */}
            <div className="absolute bottom-5 left-0 w-5xl">
              <SkillsCarousel />
            </div>
          </div>

          <div className="pointer-events-none absolute right-12 bottom-0 z-20 h-[75vh] lg:right-0 lg:h-[90vh]">
            {/* Glow atrás da foto */}
            <div className="absolute bottom-[10%] left-1/2 h-[45%] w-[55%] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[100px]" />

            <Image
              src="/image/perfil/foto-dark.png"
              alt="Gerson"
              width={420}
              height={560}
              className="relative h-full w-auto object-contain drop-shadow-[0_12px_40px_rgba(0,178,223,0.35)]"
              priority
            />
          </div>
        </div>
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#1d2034] px-8 py-20 lg:px-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.12),transparent_25%),radial-gradient(circle_at_80%_40%,rgba(34,211,238,0.1),transparent_20%)]" />

          <div className="relative z-10 grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="font-mono text-xs tracking-[0.3em] text-white/40 uppercase">
                  Sobre mim
                </span>
              </div>

              <h2 className="font-display text-3xl font-medium tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                Transformo ideias em soluções digitais com impacto real.
              </h2>

              <div className="lg:text-md mt-8 space-y-4 text-sm leading-relaxed text-white/60">
                <p>
                  Sou Desenvolvedor Full Stack com foco em desenvolvimento web, dados, BI e cloud.
                  Trabalho com tecnologias como Next.js, React, TypeScript, Python, SQL, Power BI e
                  Azure para criar soluções que conectam tecnologia, experiência do usuário e
                  estratégia de negócio.
                </p>

                <p>
                  Minha atuação vai do front-end ao back-end, passando por APIs, bancos de dados,
                  automações e infraestrutura. Acredito que o melhor software é aquele que resolve
                  um problema de verdade, melhora processos e entrega valor de forma clara e
                  escalável.
                </p>

                <p>
                  Além da parte técnica, gosto de pensar em negócio: entender o contexto, mapear
                  necessidades e transformar desafios em soluções que geram eficiência, organização
                  e tomada de decisão mais inteligente.
                </p>
              </div>
            </div>

            <div className="absolute top-14 right-5 w-96">
              <div className="top-0 rounded-4xl border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="font-mono text-[10px] tracking-[0.35em] text-cyan-300/80 uppercase">
                      Stack
                    </div>
                    <p className="mt-4 text-2xl font-medium text-white">Full Stack</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="font-mono text-[10px] tracking-[0.35em] text-cyan-300/80 uppercase">
                      Foco
                    </div>
                    <p className="mt-4 text-2xl font-medium text-white">Dados & BI</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:col-span-2">
                    <div className="font-mono text-[10px] tracking-[0.35em] text-cyan-300/80 uppercase">
                      Abordagem
                    </div>
                    <p className="mt-4 text-lg leading-relaxed text-white/70">
                      Criar soluções com clareza, qualidade técnica e foco em impacto real para
                      usuários e negócios.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
