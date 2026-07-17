export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold text-blue-900">IntegriLytics</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#services" className="hover:text-blue-900 transition-colors">Services</a>
            <a href="#about" className="hover:text-blue-900 transition-colors">About</a>
            <a href="#contact" className="hover:text-blue-900 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 leading-tight mb-6">
            Your Business.<br />
            <span className="text-blue-600">Our Expertise.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Expert accounting, human resources, and business consulting in Fayetteville, NC.
            We handle the numbers and the people — so you can focus on what you do best.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
            >
              Get in Touch
            </a>
            <a
              href="#services"
              className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-700 transition-colors"
            >
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">What We Do</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Three pillars of expertise to keep your business running smoothly.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Accounting",
                description:
                  "Bookkeeping, tax preparation, financial statements, and strategic planning. We keep your finances organized and compliant.",
                icon: "📊",
              },
              {
                title: "Human Resources",
                description:
                  "Payroll processing, benefits administration, compliance, employee handbooks, and HR consulting tailored to your team.",
                icon: "👥",
              },
              {
                title: "Business Consulting",
                description:
                  "Process improvement, growth strategy, operational efficiency, and business planning to take your company to the next level.",
                icon: "📈",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all bg-white"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">About IntegriLytics</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Based in Fayetteville, North Carolina, IntegriLytics brings together decades of
            combined experience in accounting, human resources, and business strategy. We
            serve small and mid-sized businesses across the Sandhills region with the same
            care and precision we&apos;d give our own.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our name says it: <strong>Integrity</strong> + <strong>Analytics</strong>. Every
            recommendation is backed by data, every relationship built on trust.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let&apos;s Talk</h2>
          <p className="text-xl text-blue-200 mb-10 max-w-xl mx-auto">
            Ready to get your books in order, your team running smoothly, or your strategy
            dialed in? We&apos;re here.
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center text-left">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur">
              <h3 className="font-semibold mb-2 text-blue-200">📍 Location</h3>
              <p>Fayetteville, North Carolina</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur">
              <h3 className="font-semibold mb-2 text-blue-200">📧 Email</h3>
              <p>info@integrilyticsinc.com</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur">
              <h3 className="font-semibold mb-2 text-blue-200">📞 Phone</h3>
              <p>Contact us for inquiries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-blue-950 text-blue-300 text-sm text-center">
        <p>&copy; {new Date().getFullYear()} IntegriLytics Inc. All rights reserved.</p>
      </footer>
    </main>
  );
}
