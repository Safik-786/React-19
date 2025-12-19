import React, { useState } from 'react';
import { Menu, X, ChevronRight, Star, Heart, ShoppingBag, Instagram, Facebook, Twitter } from 'lucide-react';

export default function VintagePastelHomepage2() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F5F7' }}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50" style={{ backgroundColor: '#705C53' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold" style={{ color: '#EDDFE0' }}>
                Maison
              </h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'Shop', 'Collections', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="transition-all duration-300 hover:opacity-70"
                  style={{ color: '#F5F5F7' }}
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-white/10 transition-all">
                <Heart size={20} style={{ color: '#EDDFE0' }} />
              </button>
              <button className="p-2 rounded-full hover:bg-white/10 transition-all">
                <ShoppingBag size={20} style={{ color: '#EDDFE0' }} />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2"
              >
                {mobileMenuOpen ? (
                  <X size={24} style={{ color: '#EDDFE0' }} />
                ) : (
                  <Menu size={24} style={{ color: '#EDDFE0' }} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden" style={{ backgroundColor: '#705C53' }}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'Shop', 'Collections', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block px-3 py-2 rounded-md hover:bg-white/10"
                  style={{ color: '#F5F5F7' }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight" style={{ color: '#705C53' }}>
                Timeless Elegance
              </h2>
              <p className="text-lg md:text-xl" style={{ color: '#B7B7B7' }}>
                Discover our curated collection of vintage-inspired pieces that bring warmth and character to your space.
              </p>
              <button
                className="group px-8 py-4 rounded-full flex items-center space-x-2 hover:shadow-lg transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: '#705C53', color: '#F5F5F7' }}
              >
                <span>Explore Collection</span>
                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>
            
            <div className="relative">
              <div
                className="aspect-square rounded-3xl shadow-2xl"
                style={{ backgroundColor: '#EDDFE0' }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Star size={120} style={{ color: '#705C53', opacity: 0.2 }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#EDDFE0' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Handpicked Quality', desc: 'Each piece carefully selected for its unique character' },
              { title: 'Sustainable Design', desc: 'Timeless pieces that last generations' },
              { title: 'Expert Curation', desc: 'Guided by passion for vintage aesthetics' }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl hover:shadow-xl transition-all duration-300"
                style={{ backgroundColor: '#F5F5F7' }}
              >
                <div className="mb-4">
                  <Heart size={32} style={{ color: '#705C53' }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#705C53' }}>
                  {feature.title}
                </h3>
                <p style={{ color: '#B7B7B7' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collection Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12" style={{ color: '#705C53' }}>
            Featured Collections
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div
                  className="aspect-[4/5] relative"
                  style={{ backgroundColor: item % 2 === 0 ? '#EDDFE0' : '#B7B7B7' }}
                >
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <Star size={80} style={{ color: '#705C53' }} />
                  </div>
                </div>
                <div className="p-6" style={{ backgroundColor: '#F5F5F7' }}>
                  <h4 className="text-xl font-semibold mb-2" style={{ color: '#705C53' }}>
                    Vintage Collection {item}
                  </h4>
                  <p style={{ color: '#B7B7B7' }}>From $89</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#705C53' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#EDDFE0' }}>
            Join Our Community
          </h3>
          <p className="mb-8 text-lg" style={{ color: '#F5F5F7' }}>
            Subscribe to receive updates on new arrivals and exclusive offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{ backgroundColor: '#F5F5F7', color: '#705C53' }}
            />
            <button
              className="px-8 py-4 rounded-full hover:shadow-lg transition-all hover:opacity-90"
              style={{ backgroundColor: '#EDDFE0', color: '#705C53' }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#705C53' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold mb-4" style={{ color: '#EDDFE0' }}>
                Maison
              </h4>
              <p style={{ color: '#B7B7B7' }}>
                Bringing timeless elegance to modern living
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-3" style={{ color: '#EDDFE0' }}>Shop</h5>
              <ul className="space-y-2" style={{ color: '#B7B7B7' }}>
                <li><a href="#" className="hover:opacity-70">New Arrivals</a></li>
                <li><a href="#" className="hover:opacity-70">Best Sellers</a></li>
                <li><a href="#" className="hover:opacity-70">Sale</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3" style={{ color: '#EDDFE0' }}>About</h5>
              <ul className="space-y-2" style={{ color: '#B7B7B7' }}>
                <li><a href="#" className="hover:opacity-70">Our Story</a></li>
                <li><a href="#" className="hover:opacity-70">Contact</a></li>
                <li><a href="#" className="hover:opacity-70">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3" style={{ color: '#EDDFE0' }}>Follow Us</h5>
              <div className="flex space-x-4">
                <Instagram className="cursor-pointer hover:opacity-70 transition-opacity" style={{ color: '#EDDFE0' }} />
                <Facebook className="cursor-pointer hover:opacity-70 transition-opacity" style={{ color: '#EDDFE0' }} />
                <Twitter className="cursor-pointer hover:opacity-70 transition-opacity" style={{ color: '#EDDFE0' }} />
              </div>
            </div>
          </div>
          <div className="border-t pt-8 text-center" style={{ borderColor: '#B7B7B7' }}>
            <p style={{ color: '#B7B7B7' }}>
              © 2024 Maison. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}