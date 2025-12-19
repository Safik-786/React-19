import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X, Star, ChevronRight, Package, Truck, Shield, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const ProductionEcommerce = () => {
  const [cartCount, setCartCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const products = [
    { id: 1, name: 'Industrial Gear Assembly', price: '$2,499', rating: 4.8, image: '🔧', category: 'Mechanical Parts' },
    { id: 2, name: 'Precision Bearing Set', price: '$899', rating: 4.9, image: '⚙️', category: 'Components' },
    { id: 3, name: 'Hydraulic Pump Unit', price: '$3,299', rating: 4.7, image: '🔩', category: 'Hydraulics' },
    { id: 4, name: 'Steel Fabrication Kit', price: '$1,899', rating: 4.6, image: '🛠️', category: 'Materials' },
    { id: 5, name: 'Motor Control System', price: '$4,599', rating: 4.9, image: '⚡', category: 'Electronics' },
    { id: 6, name: 'Conveyor Belt Module', price: '$5,299', rating: 4.8, image: '📦', category: 'Systems' },
  ];

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          {/* Top Bar */}
          <div className="border-b border-slate-700 py-2 text-sm">
            <div className="flex justify-between items-center">
              <div className="flex gap-4">
                <span className="flex items-center gap-1"><Phone size={14} /> +1-800-PROD-123</span>
                <span className="flex items-center gap-1"><Mail size={14} /> sales@production.com</span>
              </div>
              <div className="hidden md:flex gap-3">
                <Facebook size={16} className="cursor-pointer hover:text-orange-400 transition" />
                <Twitter size={16} className="cursor-pointer hover:text-orange-400 transition" />
                <Instagram size={16} className="cursor-pointer hover:text-orange-400 transition" />
                <Linkedin size={16} className="cursor-pointer hover:text-orange-400 transition" />
              </div>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="flex items-center justify-between py-4">
            <div className="text-2xl font-bold flex items-center gap-2">
              <Package className="text-orange-400" size={32} />
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">ProIndustrial</span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-8">
              <a href="#" className="hover:text-orange-400 transition font-medium">Home</a>
              <a href="#" className="hover:text-orange-400 transition font-medium">Products</a>
              <a href="#" className="hover:text-orange-400 transition font-medium">Solutions</a>
              <a href="#" className="hover:text-orange-400 transition font-medium">About</a>
              <a href="#" className="hover:text-orange-400 transition font-medium">Contact</a>
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center bg-slate-800 rounded-lg px-4 py-2">
                <Search size={18} className="text-slate-400" />
                <input type="text" placeholder="Search products..." className="bg-transparent border-none outline-none ml-2 text-sm w-48" />
              </div>
              <button className="relative hover:scale-110 transition">
                <ShoppingCart className="text-orange-400" size={24} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </button>
              <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 flex flex-col gap-3">
              <a href="#" className="hover:text-orange-400 transition">Home</a>
              <a href="#" className="hover:text-orange-400 transition">Products</a>
              <a href="#" className="hover:text-orange-400 transition">Solutions</a>
              <a href="#" className="hover:text-orange-400 transition">About</a>
              <a href="#" className="hover:text-orange-400 transition">Contact</a>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Premium Industrial <span className="text-orange-400">Production Solutions</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              High-quality components and systems for manufacturing excellence. Trusted by industry leaders worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition transform hover:scale-105">
                Browse Catalog <ChevronRight size={20} />
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition">
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4 p-6 rounded-lg hover:shadow-lg transition">
              <div className="bg-orange-100 p-3 rounded-lg">
                <Truck className="text-orange-500" size={28} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-slate-900">Fast Delivery</h3>
                <p className="text-slate-600">Express shipping on all orders. Same-day dispatch available.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-lg hover:shadow-lg transition">
              <div className="bg-orange-100 p-3 rounded-lg">
                <Shield className="text-orange-500" size={28} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-slate-900">Quality Guarantee</h3>
                <p className="text-slate-600">ISO certified products with comprehensive warranty coverage.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-lg hover:shadow-lg transition">
              <div className="bg-orange-100 p-3 rounded-lg">
                <Package className="text-orange-500" size={28} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-slate-900">Bulk Orders</h3>
                <p className="text-slate-600">Special pricing for large quantities and repeat customers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Products</h2>
            <p className="text-slate-600 text-lg">Explore our premium range of industrial components</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 overflow-hidden">
                <div className="bg-gradient-to-br from-slate-100 to-slate-200 h-48 flex items-center justify-center text-6xl">
                  {product.image}
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-orange-500 uppercase tracking-wide">{product.category}</span>
                  <h3 className="font-bold text-xl mt-2 mb-3 text-slate-900">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-orange-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                      ))}
                    </div>
                    <span className="text-sm text-slate-600">{product.rating}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-slate-900">{product.price}</span>
                    <button 
                      onClick={addToCart}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition transform hover:scale-105"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition">
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Optimize Your Production?</h2>
          <p className="text-xl mb-8 opacity-90">Get in touch with our experts for customized solutions</p>
          <button className="bg-white text-orange-600 hover:bg-slate-100 px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105">
            Contact Sales Team
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Package className="text-orange-400" size={28} />
                <span className="text-xl font-bold">ProIndustrial</span>
              </div>
              <p className="text-slate-400 text-sm">Your trusted partner for industrial production solutions since 1995.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="flex flex-col gap-2 text-slate-400">
                <a href="#" className="hover:text-orange-400 transition">About Us</a>
                <a href="#" className="hover:text-orange-400 transition">Products</a>
                <a href="#" className="hover:text-orange-400 transition">Services</a>
                <a href="#" className="hover:text-orange-400 transition">Careers</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <div className="flex flex-col gap-2 text-slate-400">
                <a href="#" className="hover:text-orange-400 transition">Help Center</a>
                <a href="#" className="hover:text-orange-400 transition">Shipping Info</a>
                <a href="#" className="hover:text-orange-400 transition">Returns</a>
                <a href="#" className="hover:text-orange-400 transition">Warranty</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <div className="flex flex-col gap-2 text-slate-400 text-sm">
                <span className="flex items-center gap-2"><MapPin size={16} /> 123 Industrial Blvd, NY</span>
                <span className="flex items-center gap-2"><Phone size={16} /> +1-800-PROD-123</span>
                <span className="flex items-center gap-2"><Mail size={16} /> info@proindustrial.com</span>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; 2024 ProIndustrial. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductionEcommerce;