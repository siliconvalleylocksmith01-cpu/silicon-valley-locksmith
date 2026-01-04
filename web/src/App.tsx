import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Building2, 
  Phone, 
  Check, 
  Mail, 
  Clock, 
  MapPin, 
  Home, 
  Car, 
  ShieldCheck
} from 'lucide-react'
import { useEffect, useState } from 'react'

const PHONE = '669-400-6680'
const EMAIL = 'Siliconvalleylocksmith.01@gmail.com'

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const serviceAreas = [
    'Hayward', 'Union City', 'Fremont', 'Milpitas', 'Downtown San Jose',
    'Santa Clara', 'Cupertino', 'Campbell', 'Los Gatos', 'Los Altos',
    'Sunnyvale', 'Mountain View', 'Palo Alto', 'Morgan Hill', 'Alviso', 'Gilroy'
  ]

  const residentialServices = [
    'Lock Installation & Repair',
    'Deadbolt Installation',
    'Lock Rekeying',
    'Emergency Lockout Service',
    'Master Key Systems',
    'High-Security Locks'
  ]

  const commercialServices = [
    'Master Key Systems',
    'Access Control Systems',
    'Panic Bar Installation',
    'Lock Rekeying & Repair',
    'High-Security Locks',
    'Safe Installation & Repair'
  ]

  const automotiveServices = [
    'Car Lockout Service',
    'Transponder Key Programming',
    'Key Cutting & Duplication',
    'Ignition Repair & Replacement',
    'Broken Key Extraction',
    'Emergency Auto Locksmith'
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Call Button */}
      <div 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg py-2 md:py-3' : 'bg-white py-3 md:py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
            aria-label="Scroll to top"
          >
            <img 
              src="/logo-new.png.png"
              alt="Silicon Valley Locksmith Logo" 
              className="w-[60px] md:w-[100px] h-auto object-contain"
            />
            <span className="text-[#4DB3D3] font-bold text-base md:text-2xl">Silicon Valley Locksmith</span>
          </button>
          <a href={`tel:${PHONE}`}>
            <Button 
              size="lg" 
              className="bg-[#4DB3D3] text-white hover:bg-[#3da3c3] font-bold shadow-lg text-sm md:text-base px-4 md:px-6 py-2 md:py-3"
            >
              <Phone className="mr-1 md:mr-2 h-4 md:h-5 w-4 md:w-5" />
              CALL NOW: {PHONE}
            </Button>
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
        style={{
          backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url(https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=2000)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto max-w-5xl text-center text-white">
          <div className="mb-8 inline-flex items-center gap-2 bg-[#4DB3D3] px-6 py-2 rounded-full">
            <ShieldCheck className="w-5 h-5" />
            <span className="font-semibold">Licensed & Insured</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Reliable Automotive, Residential & Commercial<br />
            <span className="text-[#4DB3D3]">Locksmith Services in Silicon Valley</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-6 text-gray-300">
            Fast arrival, licensed & insured, serving all surrounding areas
          </p>
          
          <div className="flex items-center justify-center gap-2 mb-8 text-yellow-400 text-lg md:text-xl font-semibold">
            <span className="text-3xl">⭐</span>
            <span>First-Time Customers Get 15% OFF — Call Now!</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${PHONE}`}>
              <Button 
                size="lg" 
                className="bg-[#4DB3D3] hover:bg-[#3da3c3] text-white font-bold text-lg px-8 py-6 w-full sm:w-auto"
              >
                <Phone className="mr-2 h-6 w-6" />
                Call Now: {PHONE}
              </Button>
            </a>
            <a href={`mailto:${EMAIL}`}>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/10 text-white border-white hover:bg-white/20 font-bold text-lg px-8 py-6 w-full sm:w-auto backdrop-blur-sm"
              >
                <Mail className="mr-2 h-6 w-6" />
                Email Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-4 border-[#4DB3D3] shadow-2xl">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="mb-6">
                <div className="inline-block p-6 bg-[#4DB3D3] rounded-full mb-4">
                  <span className="text-5xl md:text-7xl font-bold text-white">15%</span>
                </div>
                <Badge className="text-lg px-4 py-2 bg-yellow-400 text-slate-900 hover:bg-yellow-500">
                  OFF
                </Badge>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                First-Time Customer Discount
              </h2>
              
              <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-2xl mx-auto">
                Get 15% OFF your first service with Silicon Valley Locksmith. Fast, reliable, and affordable locksmith solutions for all your security needs.
              </p>
              
              <a href={`tel:${PHONE}`}>
                <Button 
                  size="lg" 
                  className="bg-[#4DB3D3] hover:bg-[#3da3c3] text-white font-bold text-lg px-8 py-4"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Claim Your Discount
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Residential Locksmith Section */}
      <section id="residential" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#4DB3D3] rounded-full mb-4">
              <Home className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Secure Your Home With Trusted Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protect your family and property with our comprehensive residential locksmith services. 
              From emergency lockouts to complete security system installations, we're here to help 24/7.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {residentialServices.map((service, index) => (
              <Card key={index} className="border-2 hover:border-[#4DB3D3] transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#4DB3D3]/10 rounded-lg flex items-center justify-center">
                      <Check className="w-6 h-6 text-[#4DB3D3]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-slate-900">{service}</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Locksmith Section */}
      <section id="commercial" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#4DB3D3] rounded-full mb-4">
              <Building2 className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Strong Security for Your Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Keep your business secure with our professional commercial locksmith services. 
              We provide advanced security solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commercialServices.map((service, index) => (
              <Card key={index} className="border-2 hover:border-[#4DB3D3] transition-all hover:shadow-lg bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#4DB3D3]/10 rounded-lg flex items-center justify-center">
                      <Check className="w-6 h-6 text-[#4DB3D3]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-slate-900">{service}</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Automotive Locksmith Section */}
      <section id="automotive" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#4DB3D3] rounded-full mb-4">
              <Car className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Car Lockouts & On-Site Car Key Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Locked out of your car? Need a new key? Our mobile automotive locksmiths 
              come to you with professional on-site services throughout Silicon Valley.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automotiveServices.map((service, index) => (
              <Card key={index} className="border-2 hover:border-[#4DB3D3] transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#4DB3D3]/10 rounded-lg flex items-center justify-center">
                      <Check className="w-6 h-6 text-[#4DB3D3]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-slate-900">{service}</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#4DB3D3] rounded-full mb-4">
              <MapPin className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Proudly Serving Silicon Valley
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Fast and reliable locksmith services across the entire Silicon Valley region
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {serviceAreas.map((area, index) => (
              <div 
                key={index} 
                className="bg-slate-800 hover:bg-[#4DB3D3] transition-colors p-4 rounded-lg text-center"
              >
                <span className="font-semibold">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#4DB3D3] to-[#3da3c3]">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Need a Locksmith? We're Here to Help!
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Phone className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-2">Call Us</h3>
                <a href={`tel:${PHONE}`} className="text-lg hover:underline">
                  {PHONE}
                </a>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Mail className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-2">Email Us</h3>
                <a href={`mailto:${EMAIL}`} className="text-sm hover:underline break-all">
                  {EMAIL}
                </a>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-2">Working Hours</h3>
                <p className="text-lg">Monday - Sunday</p>
                <p className="text-lg">6:00 AM - 12:00 AM</p>
              </CardContent>
            </Card>
          </div>
          
          <a href={`tel:${PHONE}`}>
            <Button 
              size="lg" 
              className="bg-white text-[#4DB3D3] hover:bg-gray-100 font-bold text-xl px-12 py-8 shadow-xl"
            >
              <Phone className="mr-3 h-7 w-7" />
              Call Now for Immediate Service
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <button 
                onClick={scrollToTop}
                className="flex items-center gap-2 mb-4 cursor-pointer hover:opacity-80 transition-opacity"
                aria-label="Scroll to top"
              >
                <img 
                  src="/logo-new.png.png"
                  alt="Silicon Valley Locksmith Logo" 
                  className="w-[100px] h-auto object-contain"
                />
                <span className="font-bold text-base">Silicon Valley Locksmith</span>
              </button>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#4DB3D3]" />
                  <span className="font-semibold">Licensed & Insured</span>
                </div>
                <p className="text-sm">License ID: 8007</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4 text-[#4DB3D3]">Contact</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                  <a href={`tel:${PHONE}`} className="hover:text-white">
                    {PHONE}
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                  <a href={`mailto:${EMAIL}`} className="hover:text-white break-all">
                    {EMAIL}
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4 text-[#4DB3D3]">Hours</h3>
              <div className="text-gray-300 text-sm space-y-1">
                <p className="font-semibold">Monday - Sunday</p>
                <p>6:00 AM - 12:00 AM</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4 text-[#4DB3D3]">Service Areas</h3>
              <div className="text-gray-300 text-sm space-y-1">
                {serviceAreas.slice(0, 6).map((area, index) => (
                  <p key={index}>{area}</p>
                ))}
                <p className="text-[#4DB3D3]">+ more areas</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Silicon Valley Locksmith. All rights reserved.</p>
            <p className="mt-2">Professional Locksmith Services • Licensed & Insured • License ID: 8007</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
