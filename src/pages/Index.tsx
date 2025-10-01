import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const services = [
    {
      icon: 'Sparkles',
      title: 'Изготовление на заказ',
      description: 'Создаём уникальные украшения по индивидуальным эскизам с учётом всех пожеланий'
    },
    {
      icon: 'Wrench',
      title: 'Ремонт изделий',
      description: 'Профессиональный ремонт ювелирных украшений любой сложности'
    },
    {
      icon: 'Gem',
      title: 'Реставрация',
      description: 'Бережное восстановление антикварных и семейных драгоценностей'
    },
    {
      icon: 'Settings',
      title: 'Огранка камней',
      description: 'Высококачественная огранка драгоценных и полудрагоценных камней'
    }
  ];

  const portfolio = [
    {
      image: '/img/2d097385-989d-4621-9125-afec18f1f661.jpg',
      title: 'Обручальные кольца',
      category: 'Изготовление'
    },
    {
      image: '/img/81631785-1920-44af-9d4b-be477ffcf2b7.jpg',
      title: 'Реставрация антикварного колье',
      category: 'Реставрация'
    },
    {
      image: '/img/89dd3ca0-7d61-4dde-85a4-89361a2ab4fc.jpg',
      title: 'Коллекция колец с бриллиантами',
      category: 'Портфолио'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Gem" className="text-primary" size={28} />
              <h1 className="text-2xl font-playfair font-bold">Ювелирная Мастерская</h1>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-sm hover:text-primary transition-colors">Главная</a>
              <a href="#about" className="text-sm hover:text-primary transition-colors">О мастерской</a>
              <a href="#services" className="text-sm hover:text-primary transition-colors">Услуги</a>
              <a href="#portfolio" className="text-sm hover:text-primary transition-colors">Портфолио</a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button variant="outline" className="hidden md:block">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>
        </nav>
      </header>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-primary font-medium text-xl">Мастерство с 2010 года</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight">
                Ювелирное<br />
                <span className="bg-gradient-to-r from-primary to-amber-600 bg-clip-text text-transparent">
                  искусство
                </span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Создаём, восстанавливаем и ремонтируем ювелирные изделия с безупречным качеством и вниманием к каждой детали
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-amber-600 hover:opacity-90">
                  Наши услуги
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline">
                  Портфолио работ
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-amber-600/20 rounded-3xl blur-3xl"></div>
              <img 
                src="/img/2d097385-989d-4621-9125-afec18f1f661.jpg" 
                alt="Ювелирные изделия"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-12 bg-primary"></div>
            <span className="text-primary font-medium">О нас</span>
            <div className="h-px w-12 bg-primary"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">О мастерской</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Более 25 лет мы создаём украшения, которые становятся частью важнейших моментов в жизни наших клиентов. 
            Наша команда мастеров сочетает традиционные техники ювелирного искусства с современными технологиями, 
            что позволяет воплощать в жизнь самые смелые идеи.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-playfair font-bold text-primary mb-2">25+</div>
              <p className="text-muted-foreground">лет опыта</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-playfair font-bold text-primary mb-2">5000+</div>
              <p className="text-muted-foreground">довольных клиентов</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-playfair font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">качество работ</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-12 bg-primary"></div>
              <span className="text-primary font-medium">Услуги</span>
              <div className="h-px w-12 bg-primary"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Наши услуги</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Предлагаем полный спектр ювелирных услуг от изготовления до реставрации
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon as any} className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-playfair font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-12 bg-primary"></div>
              <span className="text-primary font-medium">Работы</span>
              <div className="h-px w-12 bg-primary"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Портфолио</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Примеры наших работ по изготовлению и реставрации ювелирных изделий
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="px-2">
                  <span className="text-xs text-primary font-medium">{item.category}</span>
                  <h3 className="text-xl font-playfair font-semibold mt-1">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-12 bg-primary"></div>
              <span className="text-primary font-medium">Контакты</span>
              <div className="h-px w-12 bg-primary"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-muted-foreground">
              Готовы обсудить ваш проект или ответить на любые вопросы
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-playfair font-semibold mb-6">Наши контакты</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Адрес</p>
                    <p className="text-muted-foreground">Москва, ул. Арбат, д. 10</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">info@jewelry.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Часы работы</p>
                    <p className="text-muted-foreground">Пн-Пт: 10:00 - 20:00<br/>Сб-Вс: 11:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Имя</label>
                    <Input 
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input 
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Сообщение</label>
                    <Textarea 
                      placeholder="Расскажите о вашем проекте..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-primary to-amber-600">
                    Отправить сообщение
                    <Icon name="Send" size={16} className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Gem" className="text-primary" size={24} />
            <span className="text-xl font-playfair font-bold">ЮВЕЛИРНАЯ</span>
          </div>
          <p className="text-muted-foreground mb-4">Ювелирная мастерская полного цикла</p>
          <p className="text-sm text-muted-foreground">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;