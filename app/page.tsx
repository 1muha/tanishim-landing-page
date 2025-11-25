"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, Zap, Search, ArrowRight, Mic2, Clock, Brain, ZapIcon } from "lucide-react"
import { LanguageSelector } from "@/components/language-selector"
import { translations, type Language } from "@/lib/translations"

export default function Home() {
  const [language, setLanguage] = useState<Language>("uz")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLanguage = localStorage.getItem("language")
    if (savedLanguage && ["en", "ru", "uz"].includes(savedLanguage)) {
      setLanguage(savedLanguage as Language)
    } else {
      setLanguage("uz")
    }
  }, [])

  const handleLanguageChange = (newLanguage: string) => {
    const lang = newLanguage as Language
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  if (!mounted) return null

  const t = translations[language]

  return (
    <div className="bg-background text-foreground">
      <nav className="fixed top-0 w-full z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="TANISHIM"
              className="h-8 w-auto"
              style={{
                filter: "brightness(1.15) saturate(1.3)",
              }}
            />
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="text-sm hover:text-accent transition">
              {t.nav.features}
            </a>
            <a href="#how-it-works" className="text-sm hover:text-accent transition">
              {t.nav.howItWorks}
            </a>
            <a href="#mvp" className="text-sm hover:text-accent transition">
              {t.nav.mvp}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSelector currentLanguage={language} onLanguageChange={handleLanguageChange} />
  <Button className="...">
    {translations[lang].nav.getStarted}
  </Button>
          </div>
        </div>
      </nav>

      {/* ... existing hero section ... */}
      <section className="pt-32 pb-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-50"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
            <span className="text-sm font-semibold text-accent">{t.hero.badge}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight text-foreground">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance max-w-2xl mx-auto">
            {t.hero.description}
          </p>
          <div className="grid grid-cols-3 gap-4 mb-12 max-w-lg mx-auto">
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-accent/20">
              <div className="text-3xl font-bold text-accent">15</div>
              <div className="text-xs text-muted-foreground mt-1">Seconds</div>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-accent/20">
              <div className="text-3xl font-bold text-accent">∞</div>
              <div className="text-xs text-muted-foreground mt-1">Contacts</div>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-accent/20">
              <div className="text-3xl font-bold text-accent">AI</div>
              <div className="text-xs text-muted-foreground mt-1">Powered</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-base" asChild>
              <a href="https://effervescent-ptarmigan-99.convex.app/" target="_blank" rel="noopener noreferrer">
                {t.hero.cta} <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-base bg-white border-border" asChild>
              <a href="https://t.me/tanishim_bot" target="_blank" rel="noopener noreferrer">
                {t.hero.watchDemo}
              </a>
            </Button>
          </div>
          <div className="relative w-full h-80 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl border border-border flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(82,118,180,0.05),transparent_70%)]"></div>
            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center animate-pulse">
                <Mic2 className="w-10 h-10 text-accent-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">{t.hero.placeholder}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 px-4 bg-accent/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">{t.features.title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.features.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-xl bg-card border border-border hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition hover:bg-accent/5">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{t.features.voiceCapture.title}</h3>
              <p className="text-muted-foreground mb-4">{t.features.voiceCapture.description}</p>
              <div className="flex items-center gap-2 text-sm font-semibold text-accent">
                <Mic2 className="w-4 h-4" />
                15 seconds
              </div>
            </div>

            <div className="group p-8 rounded-xl bg-card border border-border hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition hover:bg-accent/5">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{t.features.aiProcessing.title}</h3>
              <p className="text-muted-foreground mb-4">{t.features.aiProcessing.description}</p>
              <div className="flex items-center gap-2 text-sm font-semibold text-accent">
                <ZapIcon className="w-4 h-4" />
                Instant parsing
              </div>
            </div>

            <div className="group p-8 rounded-xl bg-card border border-border hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition hover:bg-accent/5">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Search className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{t.features.smartSearch.title}</h3>
              <p className="text-muted-foreground mb-4">{t.features.smartSearch.description}</p>
              <div className="flex items-center gap-2 text-sm font-semibold text-accent">
                <Search className="w-4 h-4" />
                By role
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">{t.howItWorks.title}</h2>
            <p className="text-lg text-muted-foreground">{t.howItWorks.subtitle}</p>
          </div>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="inline-block px-4 py-2 bg-accent/15 rounded-lg border border-accent/20 mb-4">
                  <span className="text-sm font-bold text-accent">01</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">{t.howItWorks.step1.title}</h3>
                <p className="text-muted-foreground text-lg">{t.howItWorks.step1.description}</p>
              </div>
              <div className="flex-1 h-64 bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl border border-border flex items-center justify-center">
                <Mic2 className="w-16 h-16 text-accent opacity-50" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="flex-1">
                <div className="inline-block px-4 py-2 bg-accent/15 rounded-lg border border-accent/20 mb-4">
                  <span className="text-sm font-bold text-accent">02</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">{t.howItWorks.step2.title}</h3>
                <p className="text-muted-foreground text-lg">{t.howItWorks.step2.description}</p>
              </div>
              <div className="flex-1 h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-border flex items-center justify-center">
                <Zap className="w-16 h-16 text-accent opacity-50" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="inline-block px-4 py-2 bg-accent/15 rounded-lg border border-accent/20 mb-4">
                  <span className="text-sm font-bold text-accent">03</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">{t.howItWorks.step3.title}</h3>
                <p className="text-muted-foreground text-lg">{t.howItWorks.step3.description}</p>
              </div>
              <div className="flex-1 h-64 bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl border border-border flex items-center justify-center">
                <Search className="w-16 h-16 text-accent opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mvp" className="py-24 px-4 bg-accent/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-foreground">{t.mvp.title}</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-center">{t.mvp.description}</p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card border border-border rounded-xl p-12 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition">
              <MessageCircle className="w-16 h-16 text-accent mx-auto mb-6" />
              <p className="text-lg font-semibold mb-6 text-foreground text-center">{t.mvp.joinTelegram}</p>
              <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                <a href="https://t.me/tanishim_bot" target="_blank" rel="noopener noreferrer">
                  MVP-ni sinab ko'ring
                </a>
              </Button>
              <p className="text-sm text-muted-foreground mt-6 text-center">
                {t.mvp.feedback} <br />
                {t.mvp.contact}
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-12 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition">
              <Zap className="w-16 h-16 text-accent mx-auto mb-6" />
              <p className="text-lg font-semibold mb-6 text-foreground text-center">{t.mvp.webMvp}</p>
              <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                <a href="https://effervescent-ptarmigan-99.convex.app/" target="_blank" rel="noopener noreferrer">
                  Website ochish
                </a>
              </Button>
              <p className="text-sm text-muted-foreground mt-6 text-center">
                {t.mvp.feedback} <br />
                {t.mvp.contact}
              </p>
            </div>
          </div>

          <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mx-auto w-fit">
            <p className="text-sm text-accent">{t.mvp.hiring}</p>
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{t.cta.title}</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">{t.cta.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <a href="https://effervescent-ptarmigan-99.convex.app/" target="_blank" rel="noopener noreferrer">
                {t.cta.getStartedNow}
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-white border-border" asChild>
              <a href="https://t.me/tanishim_bot" target="_blank" rel="noopener noreferrer">
                {t.cta.visitMvp}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-accent/5 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <Mic2 className="w-5 h-5 text-accent-foreground" />
                </div>
                <span className="font-bold text-foreground">TANISHIM</span>
              </div>
              <p className="text-sm text-muted-foreground">{t.footer.tagline}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">{t.footer.product}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#features" className="hover:text-accent transition">
                    {t.footer.productLinks.features}
                  </a>
                </li>
                <li>
                  <a href="#mvp" className="hover:text-accent transition">
                    {t.footer.productLinks.mvp}
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/tanishim_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition"
                  >
                    {t.footer.productLinks.telegramBot}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">{t.footer.connect}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="https://t.me/tanishim_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition"
                  >
                    {t.footer.connectLinks.telegram}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition">
                    {t.footer.connectLinks.twitter}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition">
                    {t.footer.connectLinks.linkedin}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">{t.footer.legal}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-accent transition">
                    {t.footer.legalLinks.privacy}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition">
                    {t.footer.legalLinks.terms}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>{t.footer.copyright}</p>
            <p>{t.footer.builtWith}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
