import { useState, useEffect } from 'react';
import { TrendingUp, Users, Gift, MessageCircle, Clock, Globe, Sparkles, X, Zap, Target, Shield, Award, HeadphonesIcon, BarChart3, Heart, Menu } from 'lucide-react';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Personalized Support",
      description: "Get tailored guidance for your memecoin journey with our dedicated team across 3 timezones"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Voice Channel",
      description: "Open voice channel available around the clock for real-time communication and community bonding"
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Regular Giveaways",
      description: "Participate in frequent giveaways and earn rewards as an active community member"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Mutual Support Hub",
      description: "Connect with fellow traders in our dedicated help channel where everyone supports each other"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Coverage",
      description: "Team members active across Asia, Europe, and Americas ensuring you're never alone"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Premium Experience",
      description: "Access exclusive insights, early signals, and a supportive environment for growth"
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Lightning Fast Alerts",
      description: "Get instant notifications on trending memecoins before they pump"
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "Expert Analysis",
      description: "Deep market insights and technical analysis from experienced traders"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Safe Trading Environment",
      description: "Learn to identify scams and protect your investments"
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Proven Track Record",
      description: "Join a community with documented successful trades and wins"
    }
  ];

  const testimonials = [
    {
      name: "Alex M.",
      handle: "@alextrader",
      role: "Day Trader",
      content: "Best memecoin community I've joined. The support is incredible and the giveaways are real!",
      image: "🚀",
      likes: "234",
      time: "2h ago"
    },
    {
      name: "Sarah K.",
      handle: "@sarahcrypto",
      role: "Crypto Investor",
      content: "24/7 voice channel is a game changer. Always someone to discuss opportunities with.",
      image: "💎",
      likes: "189",
      time: "4h ago"
    },
    {
      name: "Mike R.",
      handle: "@mikerocks",
      role: "New Trader",
      content: "As a beginner, the personalized support helped me avoid costly mistakes. Worth it!",
      image: "🔥",
      likes: "312",
      time: "6h ago"
    },
    {
      name: "Emma L.",
      handle: "@emmaluv",
      role: "Active Trader",
      content: "The giveaways are legit! Just won my third one this month. This community is amazing!",
      image: "💰",
      likes: "456",
      time: "8h ago"
    },
    {
      name: "David P.",
      handle: "@davidpump",
      role: "Memecoin Expert",
      content: "Global timezone coverage means I never miss a pump. Team is always active when I need them.",
      image: "🌍",
      likes: "278",
      time: "10h ago"
    },
    {
      name: "Lisa T.",
      handle: "@lisatrades",
      role: "Community Member",
      content: "From zero to hero in 3 months thanks to the personalized guidance. Best decision ever!",
      image: "⭐",
      likes: "521",
      time: "12h ago"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-600 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10">
        <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl backdrop-blur-xl bg-black/60 border border-white/10 rounded-3xl transition-all duration-300 z-50 shadow-lg shadow-black/20">
          <nav className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="/image copy.png" alt="7d1gits" className="w-12 h-12 rounded-xl" />
              <span className="text-2xl font-bold tracking-tight">7d1gits</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#community" className="text-gray-300 hover:text-white transition-colors">Community</a>
              <a href="#benefits" className="text-gray-300 hover:text-white transition-colors">Benefits</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
              <a href="#support" className="text-gray-300 hover:text-white transition-colors">Support</a>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowModal(true)}
                className="hidden sm:block bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-2.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Join Now
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden text-gray-300 hover:text-white transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </nav>
          {menuOpen && (
            <div className="md:hidden border-t border-white/10 px-6 py-4 space-y-3">
              <a href="#home" className="block text-gray-300 hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="#features" className="block text-gray-300 hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>Features</a>
              <a href="#community" className="block text-gray-300 hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>Community</a>
              <a href="#benefits" className="block text-gray-300 hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>Benefits</a>
              <a href="#testimonials" className="block text-gray-300 hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>Testimonials</a>
              <a href="#support" className="block text-gray-300 hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>Support</a>
              <button
                onClick={() => { setShowModal(true); setMenuOpen(false); }}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-2.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
              >
                Join Now
              </button>
            </div>
          )}
        </header>

        <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-32">
          <div className="container mx-auto text-center">
            <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <img src="/image copy.png" alt="7d1gits Community" className="w-32 h-32 rounded-3xl animate-float" />
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-3xl blur-xl"></div>
                </div>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                7d1gits
              </h1>
              <p className="text-xl md:text-3xl text-gray-300 mb-4 font-light">
                Your Premier Memecoin Community
              </p>
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                Join a thriving community where traders support each other 24/7. Get personalized guidance,
                participate in regular giveaways, and access our global team across all timezones.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => setShowModal(true)}
                  className="group bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 rounded-2xl text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                >
                  <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Join the Community
                </button>
                <button
                  className="bg-white/5 backdrop-blur-sm border border-white/10 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Learn More
                </button>
              </div>
            </div>

            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s' }}>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-gray-400">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">3</div>
                <div className="text-gray-400">Timezones Covered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">1000+</div>
                <div className="text-gray-400">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">Weekly</div>
                <div className="text-gray-400">Giveaways</div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-24 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Everything You Need
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Complete support and resources to thrive in the memecoin world
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-2 animate-fade-in-up opacity-0"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="community" className="py-24 px-6 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 md:p-16">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    A Global Community That Never Sleeps
                  </h2>
                  <p className="text-gray-400 text-lg leading-relaxed mb-6">
                    With team members spanning across Asia, Europe, and the Americas, we ensure that no matter
                    your timezone, you'll always have someone to guide you through the volatile memecoin markets.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-300">Active support in Asia-Pacific (GMT+8 to GMT+10)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-300">European coverage (GMT+0 to GMT+2)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-300">Americas presence (GMT-5 to GMT-8)</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative z-10 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-2xl">
                          🌏
                        </div>
                        <div>
                          <div className="font-semibold">Asia-Pacific Team</div>
                          <div className="text-sm text-gray-400">Available 8 AM - 8 PM Local</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-2xl">
                          🌍
                        </div>
                        <div>
                          <div className="font-semibold">European Team</div>
                          <div className="text-sm text-gray-400">Available 7 AM - 7 PM Local</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-2xl">
                          🌎
                        </div>
                        <div>
                          <div className="font-semibold">Americas Team</div>
                          <div className="text-sm text-gray-400">Available 6 AM - 6 PM Local</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-20"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="py-24 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Why Choose 7d1gits?
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                More than just a community - your competitive edge in memecoin trading
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-blue-500/30 transition-all duration-300 h-full">
                    <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-cyan-950/10 to-blue-950/20"></div>
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                What Our Members Say
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Real stories from real traders in our community
              </p>
            </div>

            <div className="relative h-[600px] overflow-hidden">
              <div className="absolute inset-0 flex gap-6">
                <div className="flex-1 space-y-6 animate-scroll-up">
                  {[...testimonials, ...testimonials].map((testimonial, index) => (
                    <div
                      key={`col1-${index}`}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-3xl blur-2xl"></div>
                      <div className="relative bg-black/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 hover:border-blue-500/30 transition-all duration-300">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center text-2xl backdrop-blur-sm border border-white/10">
                              {testimonial.image}
                            </div>
                            <div>
                              <div className="font-semibold">{testimonial.name}</div>
                              <div className="text-sm text-gray-500">{testimonial.handle}</div>
                            </div>
                          </div>
                          <div className="text-xs text-gray-500">{testimonial.time}</div>
                        </div>
                        <p className="text-gray-300 leading-relaxed mb-4">{testimonial.content}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1 hover:text-red-400 transition-colors cursor-pointer">
                            <Heart className="w-4 h-4" />
                            <span>{testimonial.likes}</span>
                          </div>
                          <div className="px-2 py-1 bg-blue-500/10 rounded-lg text-blue-400 text-xs">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex-1 space-y-6 animate-scroll-up" style={{ animationDelay: '-15s' }}>
                  {[...testimonials.slice(3), ...testimonials.slice(0, 3), ...testimonials.slice(3), ...testimonials.slice(0, 3)].map((testimonial, index) => (
                    <div
                      key={`col2-${index}`}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl blur-2xl"></div>
                      <div className="relative bg-black/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 hover:border-cyan-500/30 transition-all duration-300">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-2xl backdrop-blur-sm border border-white/10">
                              {testimonial.image}
                            </div>
                            <div>
                              <div className="font-semibold">{testimonial.name}</div>
                              <div className="text-sm text-gray-500">{testimonial.handle}</div>
                            </div>
                          </div>
                          <div className="text-xs text-gray-500">{testimonial.time}</div>
                        </div>
                        <p className="text-gray-300 leading-relaxed mb-4">{testimonial.content}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1 hover:text-red-400 transition-colors cursor-pointer">
                            <Heart className="w-4 h-4" />
                            <span>{testimonial.likes}</span>
                          </div>
                          <div className="px-2 py-1 bg-cyan-500/10 rounded-lg text-cyan-400 text-xs">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex-1 space-y-6 animate-scroll-up hidden lg:block">
                  {[...testimonials.slice(2), ...testimonials.slice(0, 2), ...testimonials.slice(2), ...testimonials.slice(0, 2)].map((testimonial, index) => (
                    <div
                      key={`col3-${index}`}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-3xl blur-2xl"></div>
                      <div className="relative bg-black/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 hover:border-blue-500/30 transition-all duration-300">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center text-2xl backdrop-blur-sm border border-white/10">
                              {testimonial.image}
                            </div>
                            <div>
                              <div className="font-semibold">{testimonial.name}</div>
                              <div className="text-sm text-gray-500">{testimonial.handle}</div>
                            </div>
                          </div>
                          <div className="text-xs text-gray-500">{testimonial.time}</div>
                        </div>
                        <p className="text-gray-300 leading-relaxed mb-4">{testimonial.content}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1 hover:text-red-400 transition-colors cursor-pointer">
                            <Heart className="w-4 h-4" />
                            <span>{testimonial.likes}</span>
                          </div>
                          <div className="px-2 py-1 bg-blue-500/10 rounded-lg text-blue-400 text-xs">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/50 to-transparent pointer-events-none z-10"></div>
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none z-10"></div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-[3rem] blur-3xl"></div>
              <div className="relative bg-black/60 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-12 md:p-16 text-center">
                <div className="flex justify-center mb-8">
                  <img src="/image copy.png" alt="7d1gits" className="w-24 h-24 rounded-2xl" />
                </div>
                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                  Join the Movement
                </h2>
                <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Don't trade alone. Join thousands of memecoin traders who support each other,
                  share insights, and celebrate wins together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button
                    onClick={() => setShowModal(true)}
                    className="group bg-gradient-to-r from-blue-500 to-cyan-500 px-12 py-5 rounded-2xl text-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3"
                  >
                    Join 7d1gits Now
                    <TrendingUp className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <p className="mt-8 text-gray-500 text-sm">Free to join • Active 24/7 • All skill levels welcome</p>
              </div>
            </div>
          </div>
        </section>

        <section id="support" className="py-24 px-6 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Always Here When You Need Us
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  Our dedicated team and community members are available around the clock to answer
                  questions, share insights, and provide support during volatile market conditions.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center flex-shrink-0">
                      <HeadphonesIcon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Open Voice Channels</h3>
                      <p className="text-gray-400">Jump in anytime to discuss trades and strategies</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Live Market Updates</h3>
                      <p className="text-gray-400">Real-time alerts on market movements and opportunities</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-[3rem] blur-3xl"></div>
                <div className="relative bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-8">
                  <img src="/image copy.png" alt="Community" className="w-full h-auto rounded-3xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 py-12 px-6">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center space-x-3">
                <img src="/image copy.png" alt="7d1gits" className="w-10 h-10 rounded-lg" />
                <span className="text-xl font-bold">7d1gits</span>
              </div>
              <div className="text-gray-400 text-center md:text-left">
                <p>&copy; 2025 7d1gits Community. All rights reserved.</p>
              </div>
              <div className="flex gap-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Discord</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Telegram</a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm animate-fade-in-up">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl p-8 max-w-md w-full relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-6">
              <img src="/image copy.png" alt="7d1gits" className="w-20 h-20 rounded-2xl mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-3">Join 7d1gits</h3>
              <p className="text-gray-400">Connect with us on your preferred platform</p>
            </div>

            <div className="space-y-4">
              <a
                href="#"
                className="block w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-6 py-4 rounded-xl font-semibold text-center transition-all duration-300 transform hover:scale-105"
              >
                Join on Discord
              </a>
              <a
                href="#"
                className="block w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 px-6 py-4 rounded-xl font-semibold text-center transition-all duration-300 transform hover:scale-105"
              >
                Join on Telegram
              </a>
              <a
                href="#"
                className="block w-full bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-4 rounded-xl font-semibold text-center transition-all duration-300"
              >
                Follow on Twitter
              </a>
            </div>

            <p className="text-sm text-gray-500 text-center mt-6">
              Join thousands of traders in our community
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
