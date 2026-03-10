import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { 
  Computer, 
  Gamepad2, 
  HardDrive, 
  Shield, 
  Rocket, 
  Trophy, 
  HeartHandshake,
  Users,
  Star,
  MonitorSmartphone,
  FolderClosed,
  Wifi,
  Sparkles
} from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-orange-50">
      {/* НАВИГАЦИЯ */}
      <nav className="border-b bg-white/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Computer className="w-8 h-8 text-orange-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Компьютерная грамотность
            </span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#courses" className="hover:text-orange-500 transition">Курсы</a>
            <a href="#why" className="hover:text-orange-500 transition">Почему мы</a>
            <a href="#price" className="hover:text-orange-500 transition">Цены</a>
            <a href="#reviews" className="hover:text-orange-500 transition">Отзывы</a>
          </div>
          <div className="flex gap-3">
            <Button variant="ghost">Войти</Button>
            <Button className="bg-orange-500 hover:bg-orange-600">
              Попробовать бесплатно
            </Button>
          </div>
        </div>
      </nav>

      {/* ГЕРОЙ-БЛОК (Первый экран) */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-6">
              🚀 Для детей 7-12 лет
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Научим ребенка
              <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent block">
                дружить с компьютером
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Не просто играть в Roblox и листать YouTube, а реально понимать, 
              как работает компьютер. Первый шаг в IT без страха и скуки.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-lg px-8">
                Начать обучение
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-orange-200 hover:bg-orange-50">
                Смотреть программу
              </Button>
            </div>
            <div className="flex gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-orange-400" />
                <span>500+ учеников</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-orange-400" />
                <span>4.9 из 5</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-orange-400" />
                <span>Опыт 10+ лет</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-orange-400 rounded-full blur-3xl opacity-20"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 border">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-sm text-gray-400 ml-2">Мой первый компьютер</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <MonitorSmartphone className="w-6 h-6 text-blue-500" />
                  <span className="font-medium">Системный блок</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <HardDrive className="w-6 h-6 text-green-500" />
                  <span className="font-medium">Жесткий диск</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                  <Gamepad2 className="w-6 h-6 text-orange-500" />
                  <span className="font-medium">Игры и программы</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                  <FolderClosed className="w-6 h-6 text-purple-500" />
                  <span className="font-medium">Файлы и папки</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ПРОБЛЕМА (Для родителей) */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Узнаете своего ребенка?
          </h2>
          <p className="text-xl text-gray-500 text-center mb-12 max-w-2xl mx-auto">
            Мы помогаем, когда компьютер — это просто игрушка, а не инструмент
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-orange-100">
              <CardHeader>
                <Gamepad2 className="w-12 h-12 text-orange-500 mb-2" />
                <CardTitle>Только игры</CardTitle>
                <CardDescription>
                  Ребенок отлично играет, но не знает, как создать папку или сохранить файл
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blue-100">
              <CardHeader>
                <Wifi className="w-12 h-12 text-blue-500 mb-2" />
                <CardTitle>YouTube на повторе</CardTitle>
                <CardDescription>
                  Часами смотрит видео, но боится устанавливать новые программы
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-green-100">
              <CardHeader>
                <Computer className="w-12 h-12 text-green-500 mb-2" />
                <CardTitle>Не понимает устройство</CardTitle>
                <CardDescription>
                  Компьютер — это черный ящик. Что внутри и как работает — загадка
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-purple-100">
              <CardHeader>
                <HeartHandshake className="w-12 h-12 text-purple-500 mb-2" />
                <CardTitle>Нужна помощь</CardTitle>
                <CardDescription>
                  Любая проблема с техникой вызывает слезы и крики "Мама, помоги!"
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* КАК МЫ УЧИМ */}
      <section className="py-16" id="why">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Почему у нас всё получится
          </h2>
          <p className="text-xl text-gray-500 text-center mb-12 max-w-2xl mx-auto">
            Мы знаем подход к современным детям
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition">
              <CardHeader>
                <div className="flex justify-center">
                  <div className="p-4 bg-orange-100 rounded-full w-fit">
                    <Sparkles className="w-8 h-8 text-orange-500" />
                  </div>
                </div>
                <CardTitle className="text-2xl mt-4">Геймификация</CardTitle>
                <CardDescription className="text-base">
                  Учеба — это квест. Проходишь урок — получаешь ачивку. Собрал все — новый уровень.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-xl transition">
              <CardHeader>
                <div className="flex justify-center">
                  <div className="p-4 bg-blue-100 rounded-full w-fit">
                    <Users className="w-8 h-8 text-blue-500" />
                  </div>
                </div>
                <CardTitle className="text-2xl mt-4">На языке детей</CardTitle>
                <CardDescription className="text-base">
                  Никаких заумных слов. Процессор — это мозг, память — рабочий стол.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-xl transition">
              <CardHeader>
                <div className="flex justify-center">
                  <div className="p-4 bg-green-100 rounded-full w-fit">
                    <Rocket className="w-8 h-8 text-green-500" />
                  </div>
                </div>
                <CardTitle className="text-2xl mt-4">Сразу на практике</CardTitle>
                <CardDescription className="text-base">
                  С первого урока создаем папки, устанавливаем программы, настраиваем систему.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* ПРОГРАММА КУРСОВ */}
      <section className="bg-white py-16" id="courses">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Программа обучения
          </h2>
          <p className="text-xl text-gray-500 text-center mb-12 max-w-2xl mx-auto">
            От полного новичка до уверенного пользователя
          </p>

          <Tabs defaultValue="beginner" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="beginner">Начинающий</TabsTrigger>
              <TabsTrigger value="middle">Средний</TabsTrigger>
              <TabsTrigger value="pro">Продвинутый</TabsTrigger>
            </TabsList>
            
            <TabsContent value="beginner">
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Computer className="w-6 h-6 text-blue-500" />
                      <span className="text-sm font-medium text-blue-500">Урок 1-4</span>
                    </div>
                    <CardTitle>Железо</CardTitle>
                    <CardDescription>
                      Из чего состоит компьютер. Процессор, память, диск — на понятных примерах.
                    </CardDescription>
                    <Progress value={100} className="mt-4" />
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <MonitorSmartphone className="w-6 h-6 text-green-500" />
                      <span className="text-sm font-medium text-green-500">Урок 5-8</span>
                    </div>
                    <CardTitle>Windows</CardTitle>
                    <CardDescription>
                      Знакомство с операционной системой. Рабочий стол, панель задач, пуск.
                    </CardDescription>
                    <Progress value={60} className="mt-4" />
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <FolderClosed className="w-6 h-6 text-purple-500" />
                      <span className="text-sm font-medium text-purple-500">Урок 9-12</span>
                    </div>
                    <CardTitle>Файлы и папки</CardTitle>
                    <CardDescription>
                      Как не потерять домашку. Создаем порядок на компьютере.
                    </CardDescription>
                    <Progress value={25} className="mt-4" />
                  </CardHeader>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="middle">
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Скоро 🔜</CardTitle>
                    <CardDescription>
                      Настройка системы, установка программ, работа с документами
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="pro">
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Скоро 🔜</CardTitle>
                    <CardDescription>
                      Безопасность в интернете, сборка ПК, основы программирования
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* ПРИЗЫВ К ДЕЙСТВИЮ */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Дайте ребенку суперсилу 21 века
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Первый урок — бесплатно. Просто оставьте email, и мы пришлем запись.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Введите email" 
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
              Хочу попробовать
            </Button>
          </div>
          <p className="text-sm mt-4 opacity-75">
            Без спама. Только полезные материалы и новости курса.
          </p>
        </div>
      </section>

      {/* ПОДВАЛ */}
      <footer className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Computer className="w-6 h-6 text-orange-500" />
              <span className="font-bold">Компьютерная грамотность</span>
            </div>
            <div className="text-sm text-gray-500">
              © 2026 Школа цифровой грамотности для детей
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-orange-500">VK</a>
              <a href="#" className="text-gray-400 hover:text-orange-500">Telegram</a>
              <a href="#" className="text-gray-400 hover:text-orange-500">YouTube</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}