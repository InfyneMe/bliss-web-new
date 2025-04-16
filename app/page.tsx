'use client'
import Image from "next/image"
import Link from "next/link"
import { useEffect,useState } from "react"
import { ChevronRight, ShoppingCart, Star, Truck, Clock, Shield } from "lucide-react"

import { Button } from "@/components/ui/button";
import clsx from 'clsx';

const backgroundImages = [
  "/hero-image9.jpg",
  "/hero-image8.jpg",
  "/hero-image6.jpg",
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handleShopNowClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/logo1.png"
              alt="Bliss Logo"
              width={80}
              height={80}
              className="rounded-md"
            />
            <span className="text-xl font-bold tracking-tight"></span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="#products" className="text-sm font-medium transition-colors hover:text-primary">
              Products
            </Link>
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="rounded-full">
              <ShoppingCart className="h-4 w-4" />
              <span className="sr-only">Shopping Cart</span>
            </Button>
            <Button className="hidden md:flex" onClick={handleShopNowClick}>Shop Now</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[500px] overflow-hidden">
          {/* <div className="absolute inset-0 -z-10 bg-[url('/header-image5.jpg?height=1080&width=1920')] bg-cover bg-center bg-no-repeat" /> */}
          {backgroundImages.map((img, index) => (
            <div
              key={index}
              className={clsx(
                "absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 -z-20",
                {
                  "opacity-100": index === currentImage,
                  "opacity-0": index !== currentImage,
                }
              )}
              style={{ backgroundImage: `url('${img}')` }}
            />
          ))}
          <div className="absolute inset-0 -z-10 bg-black/50" /> {/* Dark overlay for better text readability */}
          <div className="container flex flex-col items-center justify-center space-y-4 py-24 text-center md:py-32">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Fresh & Natural <span className="text-green-300">Groceries</span>
            </h1>
            <p className="max-w-[700px] text-white md:text-xl">
              Premium quality drinking water, noodles, pasta, and vermicelli delivered to your doorstep.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-green-600 hover:bg-green-700" onClick={handleShopNowClick}>
                Shop Now
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="/explore">
                <Button size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20 border-white">
                  Explore Bliss
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative bg-white rounded-lg shadow-lg max-w-md w-full p-6">
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                onClick={closeModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Modal Content */}
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-red-100 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
                    />
                  </svg>
                </div>
                <h2 className="mt-4 text-2xl font-bold text-gray-800">Oops!</h2>
                <p className="mt-2 text-gray-600">
                  We are currently not operating in your city.
                </p>
                <div className="mt-6">
                  <Button
                    className="px-6 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700"
                    onClick={closeModal}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Featured Products */}
        <section id="products" className="py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Products</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Discover our range of high-quality products made with the finest ingredients.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Product 1 - Water */}
              <div className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-md">
                <div className="aspect-square overflow-hidden rounded-md">
                  <Image
                    src="/water.jpg"
                    alt="Bliss Mineral Water"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Bliss Mineral Water</h3>
                  <p className="text-sm text-muted-foreground h-12 overflow-hidden">Pure and refreshing natural mineral water</p>
                  <div className="mt-2 flex items-center justify-between">
                    {/* <span className="font-medium">Rs -1.99</span> */}
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 w-80">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>

              {/* Product 2 - Noodles */}
              <div className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-md">
                <div className="aspect-square overflow-hidden rounded-md">
                  <Image
                    src="/noodles.jpg"
                    alt="Bliss Instant Noodles"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Bliss Instant Noodles</h3>
                  <p className="text-sm text-muted-foreground h-12 overflow-hidden">Ready in 3 minutes, perfect for quick meals</p>
                  <div className="mt-2 flex items-center justify-between">
                  {/* <span className="font-medium">₹30</span> */}
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 w-80">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>

              {/* Product 3 - Pasta */}
              <div className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-md">
                <div className="aspect-square overflow-hidden rounded-md">
                  <Image
                    src="/pasta.jpg"
                    alt="Bliss Premium Pasta"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Bliss Premium Pasta</h3>
                  <p className="text-sm text-muted-foreground h-12 overflow-hidden">Made with durum wheat semolina</p>
                  <div className="mt-2 flex items-center justify-between">
                    {/* <span className="font-medium">₹50</span> */}
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 w-80">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>

              {/* Product 4 - Vermicelli */}
              <div className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-md">
                <div className="aspect-square overflow-hidden rounded-md">
                  <Image
                    src="/vermicilli.jpg"
                    alt="Bliss Vermicelli"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Bliss Vermicelli</h3>
                  <p className="text-sm text-muted-foreground h-12 overflow-hidden">Thin, versatile pasta for soups and desserts</p>
                  <div className="mt-2 flex items-center justify-between">
                    {/* <span className="font-medium">₹20</span> */}
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 w-80">
                      View More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-green-50 py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Bliss?</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                We're committed to providing the highest quality products with exceptional service.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Star className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">Premium Quality</h3>
                <p className="mt-2 text-muted-foreground">
                  All our products are made with the finest ingredients for superior taste and nutrition.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Truck className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">Fast Delivery</h3>
                <p className="mt-2 text-muted-foreground">
                  We deliver your groceries right to your doorstep within 24 hours of ordering.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">24/7 Support</h3>
                <p className="mt-2 text-muted-foreground">
                  Our customer service team is available around the clock to assist you.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">Secure Payments</h3>
                <p className="mt-2 text-muted-foreground">
                  Shop with confidence knowing your payment information is always secure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Don't just take our word for it. Here's what our customers have to say about Bliss.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <Image
                    src="/review1.jpg"
                    alt="Customer"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">Sarah Johnson</h3>
                    <div className="flex text-yellow-400">
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  "Bliss water is the best I've ever tasted! So pure and refreshing. Their delivery is always on time
                  too."
                </p>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <Image
                    src="/review3.jpg"
                    alt="Customer"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">Swift Chen</h3>
                    <div className="flex text-yellow-400">
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  "The pasta from Bliss is exceptional quality. It cooks perfectly every time and tastes just like
                  homemade."
                </p>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <Image
                    src="/review2.jpg"
                    alt="Customer"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">Emily Rodriguez</h3>
                    <div className="flex text-yellow-400">
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  "Bliss noodles are my go-to for quick meals. They're delicious and so convenient. I'm a customer for
                  life!"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-green-600 py-16 md:py-24 text-white">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Stay Updated</h2>
              <p className="max-w-[700px] text-green-50 md:text-lg">
                Subscribe to our newsletter for exclusive offers, recipes, and product updates.
              </p>
              <div className="mt-6 flex w-full max-w-md flex-col gap-2 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-md border border-green-400 bg-white px-4 py-2 text-black flex-1"
                />
                <Button className="bg-white text-green-600 hover:bg-green-50">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="border-t bg-background">
        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <Image
                  src="/logo1.png"
                  alt="Bliss Logo"
                  width={100}
                  height={100}
                  className="rounded-md"
                />
                {/* <span className="text-xl font-bold tracking-tight">Bliss</span> */}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">Premium quality groceries for a healthier lifestyle.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#products" className="text-sm text-muted-foreground hover:text-foreground">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <ul className="mt-4 space-y-2">
                <li className="text-sm text-muted-foreground">Udharband Durganagr Pt V</li>
                <li className="text-sm text-muted-foreground">help@bliss.org.in</li>
                <li className="text-sm text-muted-foreground">+91 8638160049</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Follow Us</h3>
              <div className="mt-4 flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Bliss Grocery. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
