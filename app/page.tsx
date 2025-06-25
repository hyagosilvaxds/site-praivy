import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, Lock, Star, Users, Wallet } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 dark:border-gray-800">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo-praivy.png" alt="logo praivy" width="178" height="50" />
          </div>
          <nav className="hidden md:flex items-center gap-6"></nav>
          <div className="flex items-center gap-4">
            <Link
              href="https://app.praivy.com.br/login"
              className="text-sm font-medium hover:text-pink-500 transition-colors hidden sm:inline-flex"
            >
              Entrar
            </Link>
            <Link href="https://app.praivy.com.br/register">
              <Button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700">
                Criar Conta
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 -z-10" />
          <div className="container mx-auto px-4 md:px-6 lg:px-8 relative">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-20 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <Badge className="px-3 py-1 bg-purple-100 text-pink-500 dark:bg-pink-500 dark:text-purple-100 rounded-full">
                    Plataforma de Conteúdo Exclusivo
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                    Entre onde poucos têm acesso
                  </h1>
                  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg">
                    Descubra conteúdos sedutores, trocas reais e conexões que vão além da tela. Só para assinantes.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="https://app.praivy.com.br/register">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700"
                    >
                      Comece Agora
                    </Button>
                  </Link>
                  <Link href="https://app.praivy.com.br/login">
                    <Button size="lg" variant="outline">
                      Login
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-900 overflow-hidden"
                      >
                        <Image
                          src={`/profile ${i}.jpeg`}
                          alt={`Profile ${i}`}
                          width={32}
                          height={32}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <p>
                    Mais de <span className="font-bold text-black dark:text-white">50+</span> criadores com conteúdos
                    que você só vê aqui.
                  </p>
                </div>
              </div>
              <div className="relative lg:h-[600px]">
                <div className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
                  <div className="p-4 border-b dark:border-gray-700">
                    <div className="flex items-center gap-3">
                      <div className="bg-gradient-to-r from-pink-500 to-pink-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
                        C
                      </div>
                      <div>
                        <h3 className="font-semibold">Paulinha</h3>
                        <p className="text-sm text-gray-500">@paulinhasouza</p>
                      </div>
                      <Badge className="ml-auto bg-gradient-to-r from-pink-500 to-pink-600">Criadora</Badge>
                    </div>
                  </div>
                  <div className="aspect-video bg-gray-100 dark:bg-gray-700 relative">
                    <Image
                      src="/blur.jpeg"
                      alt="Preview bloqueado"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 backdrop-blur-sm bg-black/20 flex items-center justify-center">
                      <Lock className="h-12 w-12 text-white" />
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <Button size="sm" className="bg-gradient-to-r from-pink-500 to-pink-600">
                        Desbloquear
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">Conteúdo exclusivo para assinantes</h3>
                    <p className="text-sm text-gray-500 mb-4">
                      Acesse conteúdo exclusivo e interaja diretamente comigo!
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span>4.9 (120 avaliações)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-pink-500" />
                        <span>2.5k assinantes</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-1/4 -right-12 w-40 h-40 bg-pink-500 rounded-full filter blur-3xl opacity-20" />
                <div className="absolute bottom-1/4 -left-12 w-40 h-40 bg-pink-500 rounded-full filter blur-3xl opacity-20" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 px-3 py-1 bg-purple-100 text-pink-500 dark:bg-pink-500 dark:text-purple-100 rounded-full">
                Recursos
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Tudo o que você deseja, em um só lugar</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Explore conteúdos exclusivos, conecte-se diretamente com criadores e descubra um universo feito pra te
                satisfazer.
              </p>
            </div>

            <Tabs defaultValue="subscribers" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-sm grid-cols-1">
                  <TabsTrigger value="subscribers">Para Assinantes</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="subscribers" className="space-y-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 rounded-lg bg-pink-100 dark:bg-pink-900 flex items-center justify-center mb-4">
                        <Lock className="h-6 w-6 text-pink-700 dark:text-pink-500" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Conteúdo Exclusivo</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Acesse conteúdo exclusivo dos seus criadores favoritos que não está disponível em outras
                        plataformas.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 rounded-lg bg-pink-100 dark:bg-pink-900 flex items-center justify-center mb-4">
                        <CreditCard className="h-6 w-6 text-pink-700 dark:text-pink-500" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Pagamento Seguro</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Métodos de pagamento seguros e discretos para todas as suas assinaturas.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 rounded-lg bg-pink-100 dark:bg-pink-900 flex items-center justify-center mb-4">
                        <Wallet className="h-6 w-6 text-pink-700 dark:text-pink-500" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Créditos na Carteira</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Recarregue sua carteira com facilidade e aproveite seus créditos para adquirir assinaturas,
                        enviar gorjetas, comprar fotos exclusivas e muito mais. Tudo de forma prática e segura.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* User Testimonials */}
        <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 px-3 py-1 bg-purple-100 text-pink-500 dark:bg-pink-500 dark:text-purple-100 rounded-full">
                Depoimentos
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">O que nossos usuários dizem</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Confira o que nossos assinantes e criadores têm a dizer sobre a experiência na nossa plataforma.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Marcos Paulo",
                  handle: "",
                  feedback:
                    "A plataforma é incrível! Consegui me conectar com minhas criadoras de uma forma que nunca imaginei. O suporte é excelente e o sistema de pagamentos é super seguro.",
                },
                {
                  name: "João Mendes",
                  handle: "",
                  feedback:
                    "Como assinante, adoro a exclusividade do conteúdo. É ótimo poder apoiar diretamente os criadores que admiro.",
                },
                {
                  name: "Carlos Silva",
                  handle: "",
                  feedback:
                    "A interface é super intuitiva e fácil de usar. Além disso, a comunidade é muito acolhedora e respeitosa.",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="overflow-hidden group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center text-white text-xl font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500">{testimonial.handle}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{testimonial.feedback}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 px-3 py-1 bg-purple-100 text-pink-500 dark:bg-pink-500 dark:text-purple-100 rounded-full">
                Perguntas Frequentes
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Dúvidas de quem assina</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Tire suas dúvidas e aproveite ao máximo sua experiência com nossos conteúdos exclusivos.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "O que eu recebo ao assinar?",
                  answer:
                    "Você terá acesso total ao conteúdo exclusivo dos criadores que seguir — incluindo fotos, vídeos, bastidores e interações privadas. Sem censura e sem limites.",
                },
                {
                  question: "Posso cancelar minha assinatura quando quiser?",
                  answer:
                    "Sim, você pode cancelar a qualquer momento direto pelo seu painel. O acesso continua ativo até o fim do período pago.",
                },
                {
                  question: "Meu pagamento é discreto?",
                  answer:
                    "Sim, a cobrança é feita com descrição total. Nenhuma menção explícita ao conteúdo adulto aparece no extrato bancário.",
                },
                {
                  question: "Preciso verificar minha idade para acessar?",
                  answer:
                    "Sim. Apenas maiores de 18 anos podem criar uma conta. A verificação é rápida e garante um ambiente adulto seguro para todos.",
                },
                {
                  question: "Como funciona o sistema de créditos?",
                  answer:
                    "Você recarrega sua carteira com facilidade e utiliza seus créditos para adquirir assinaturas, enviar gorjetas, comprar fotos exclusivas e muito mais. Tudo de forma prática, segura e discreta.",
                },
              ].map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-pink-500 to-pink-600 text-white">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para começar sua jornada?</h2>
              <p className="text-lg mb-8 text-white/80">
                Entre para a comunidade que prefere o conteúdo do jeito que tem que ser: exclusivo e sem filtros.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="https://app.praivy.com.br/register">
                  <Button size="lg" className="bg-white text-pink-500 hover:bg-gray-100">
                    Criar Conta Grátis
                  </Button>
                </Link>
                <Link href="https://app.praivy.com.br/login">
                  <Button size="lg" variant="outline" className="text-white bg-pink-500 border-white hover:bg-white/10">
                    Login
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t dark:border-gray-800">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Image src="/logo-praivy.png" alt="logo praivy" width="178" height="50" />
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-xs">
                A plataforma que conecta criadores e fãs através de conteúdo exclusivo e interações personalizadas.
              </p>
            </div>
          </div>

          <div className="border-t dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Praivy. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-gray-500 hover:text-pink-500 transition-colors">
                Termos
              </Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-pink-500 transition-colors">
                Privacidade
              </Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-pink-500 transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
