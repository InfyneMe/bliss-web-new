import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Search, ArrowRight, Clock, Users, Bookmark, ChefHat } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ExplorePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header - Same as home page */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image
                src="/logo1.png"
                alt="Bliss Logo"
                width={80}
                height={80}
                className="rounded-md"
                />
            </Link>
            {/* <span className="text-xl font-bold tracking-tight">Bliss</span> */}
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/#products" className="text-sm font-medium transition-colors hover:text-primary">
              Products
            </Link>
            <Link href="/explore" className="text-sm font-medium transition-colors hover:text-primary text-green-600">
              Explore
            </Link>
            <Link href="/#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="/#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="rounded-full">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
            <Button className="hidden md:flex bg-green-600 hover:bg-green-700">Shop Now</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 -z-10 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center bg-no-repeat opacity-20" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-green-50/80 via-white/90 to-white" />
          <div className="container flex flex-col items-center justify-center space-y-4 py-24 text-center md:py-32">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Explore the <span className="text-green-600">Bliss</span> Experience
            </h1>
            <p className="max-w-[800px] text-muted-foreground md:text-xl">
              Discover our complete product range, get inspired with delicious recipes, and learn creative ways to use
              our products.
            </p>
            <div className="relative mt-6 w-full max-w-2xl">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for products, recipes, or ideas..."
                className="w-full rounded-full border-green-200 pl-10 pr-4 py-6 focus-visible:ring-green-600"
              />
            </div>
          </div>
        </section>

        {/* Main Content Tabs */}
        <section className="py-12">
          <div className="container">
            <Tabs defaultValue="products" className="w-full">
              <div className="flex justify-center">
                <TabsList className="grid w-full max-w-md grid-cols-3">
                  <TabsTrigger value="products">Products</TabsTrigger>
                  <TabsTrigger value="recipes">Recipes</TabsTrigger>
                  <TabsTrigger value="ideas">Creative Ideas</TabsTrigger>
                </TabsList>
              </div>

              {/* Products Tab */}
              <TabsContent value="products" className="mt-8">
                <div className="flex flex-col gap-8">
                  {/* Category: Water */}
                  <div>
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-bold">Drinking Water</h2>
                      <Link href="#" className="flex items-center text-green-600 hover:underline">
                        View All <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                      <Card className="overflow-hidden">
                        <div className="aspect-square relative bg-green-50">
                          <Image
                            src="/sparkling water.jpg"
                            alt="Bliss Natural Spring Water"
                            fill
                            className="object-cover transition-all hover:scale-105"
                          />
                          <Badge className="absolute right-2 top-2 bg-green-600">New</Badge>
                        </div>
                        <CardHeader className="p-4">
                          <CardTitle className="text-lg">Bliss Natural Spring Water</CardTitle>
                          <CardDescription>500ml bottle</CardDescription>
                        </CardHeader>
                        <CardFooter className="flex justify-between p-4 pt-0">
                          <p className="font-medium">$1.49</p>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            Add to Cart
                          </Button>
                        </CardFooter>
                      </Card>
                      <Card className="overflow-hidden">
                        <div className="aspect-square relative bg-green-50">
                          <Image
                            src="/mineral-water.jpg"
                            alt="Bliss Mineral Water"
                            fill
                            className="object-cover transition-all hover:scale-105"
                          />
                        </div>
                        <CardHeader className="p-4">
                          <CardTitle className="text-lg">Bliss Mineral Water</CardTitle>
                          <CardDescription>1L bottle</CardDescription>
                        </CardHeader>
                        <CardFooter className="flex justify-between p-4 pt-0">
                          <p className="font-medium">$2.29</p>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            Add to Cart
                          </Button>
                        </CardFooter>
                      </Card>
                      <Card className="overflow-hidden">
                        <div className="aspect-square relative bg-green-50">
                          <Image
                            src="/sparklin.jpg"
                            alt="Bliss Sparkling Water"
                            fill
                            className="object-cover transition-all hover:scale-105"
                          />
                        </div>
                        <CardHeader className="p-4">
                          <CardTitle className="text-lg">Bliss Sparkling Water</CardTitle>
                          <CardDescription>750ml bottle</CardDescription>
                        </CardHeader>
                        <CardFooter className="flex justify-between p-4 pt-0">
                          <p className="font-medium">$1.99</p>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            Add to Cart
                          </Button>
                        </CardFooter>
                      </Card>
                      <Card className="overflow-hidden">
                        <div className="aspect-square relative bg-green-50">
                          <Image
                            src="/alkaline water.jpg"
                            alt="Bliss Alkaline Water"
                            fill
                            className="object-cover transition-all hover:scale-105"
                          />
                          <Badge className="absolute right-2 top-2 bg-green-600">Premium</Badge>
                        </div>
                        <CardHeader className="p-4">
                          <CardTitle className="text-lg">Bliss Alkaline Water</CardTitle>
                          <CardDescription>1L bottle</CardDescription>
                        </CardHeader>
                        <CardFooter className="flex justify-between p-4 pt-0">
                          <p className="font-medium">$2.99</p>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            Add to Cart
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </div>

                  {/* Category: Noodles */}
                  <div className="mt-12">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-bold">Noodles</h2>
                      <Link href="#" className="flex items-center text-green-600 hover:underline">
                        View All <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                      <Card className="overflow-hidden">
                        <div className="aspect-square relative bg-green-50">
                          <Image
                            src="/veg-noodles2.jpg"
                            alt="Bliss Instant Noodles - Vegetable"
                            fill
                            className="object-cover transition-all hover:scale-105"
                          />
                        </div>
                        <CardHeader className="p-4">
                          <CardTitle className="text-lg">Instant Noodles - Vegetable</CardTitle>
                          <CardDescription>Pack of 5</CardDescription>
                        </CardHeader>
                        <CardFooter className="flex justify-between p-4 pt-0">
                          <p className="font-medium">$3.49</p>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            Add to Cart
                          </Button>
                        </CardFooter>
                      </Card>
                      <Card className="overflow-hidden">
                        <div className="aspect-square relative bg-green-50">
                          <Image
                            src="/chicken-noodles.jpg"
                            alt="Bliss Instant Noodles - Chicken"
                            fill
                            className="object-cover transition-all hover:scale-105"
                          />
                          <Badge className="absolute right-2 top-2 bg-green-600">Bestseller</Badge>
                        </div>
                        <CardHeader className="p-4">
                          <CardTitle className="text-lg">Instant Noodles - Chicken</CardTitle>
                          <CardDescription>Pack of 5</CardDescription>
                        </CardHeader>
                        <CardFooter className="flex justify-between p-4 pt-0">
                          <p className="font-medium">$3.49</p>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            Add to Cart
                          </Button>
                        </CardFooter>
                      </Card>
                      <Card className="overflow-hidden">
                        <div className="aspect-square relative bg-green-50">
                          <Image
                            src="/egg-noodles.jpg"
                            alt="Bliss Egg Noodles"
                            fill
                            className="object-cover transition-all hover:scale-105"
                          />
                        </div>
                        <CardHeader className="p-4">
                          <CardTitle className="text-lg">Egg Noodles</CardTitle>
                          <CardDescription>400g pack</CardDescription>
                        </CardHeader>
                        <CardFooter className="flex justify-between p-4 pt-0">
                          <p className="font-medium">$2.99</p>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            Add to Cart
                          </Button>
                        </CardFooter>
                      </Card>
                      <Card className="overflow-hidden">
                        <div className="aspect-square relative bg-green-50">
                          <Image
                            src="/rice-noodles.jpg"
                            alt="Bliss Rice Noodles"
                            fill
                            className="object-cover transition-all hover:scale-105"
                          />
                        </div>
                        <CardHeader className="p-4">
                          <CardTitle className="text-lg">Rice Noodles</CardTitle>
                          <CardDescription>350g pack</CardDescription>
                        </CardHeader>
                        <CardFooter className="flex justify-between p-4 pt-0">
                          <p className="font-medium">$3.29</p>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            Add to Cart
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </div>

                  {/* Category: Pasta */}
                  <div className="mt-12">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-bold">Pasta</h2>
                      <Link href="#" className="flex items-center text-green-600 hover:underline">
                        View All <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                      <Card className="overflow-hidden">
                        <div className="aspect-square relative bg-green-50">
                          <Image
                            src="/spagiti.jpg"
                            alt="Bliss Spaghetti"
                            fill
                            className="object-cover transition-all hover:scale-105"
                          />
                        </div>
                        <CardHeader className="p-4">
                          <CardTitle className="text-lg">Spaghetti</CardTitle>
                          <CardDescription>500g pack</CardDescription>
                        </CardHeader>
                        <CardFooter className="flex justify-between p-4 pt-0">
                          <p className="font-medium">$2.49</p>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            Add to Cart
                          </Button>
                        </CardFooter>
                      </Card>
                      <Card className="overflow-hidden">
                        <div className="aspect-square relative bg-green-50">
                          <Image
                            src="/penne.jpg"
                            alt="Bliss Penne"
                            fill
                            className="object-cover transition-all hover:scale-105"
                          />
                        </div>
                        <CardHeader className="p-4">
                          <CardTitle className="text-lg">Penne</CardTitle>
                          <CardDescription>500g pack</CardDescription>
                        </CardHeader>
                        <CardFooter className="flex justify-between p-4 pt-0">
                          <p className="font-medium">$2.49</p>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            Add to Cart
                          </Button>
                        </CardFooter>
                      </Card>
                      <Card className="overflow-hidden">
                        <div className="aspect-square relative bg-green-50">
                          <Image
                            src="/fusili.jpg"
                            alt="Bliss Fusilli"
                            fill
                            className="object-cover transition-all hover:scale-105"
                          />
                        </div>
                        <CardHeader className="p-4">
                          <CardTitle className="text-lg">Fusilli</CardTitle>
                          <CardDescription>500g pack</CardDescription>
                        </CardHeader>
                        <CardFooter className="flex justify-between p-4 pt-0">
                          <p className="font-medium">$2.49</p>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            Add to Cart
                          </Button>
                        </CardFooter>
                      </Card>
                      <Card className="overflow-hidden">
                        <div className="aspect-square relative bg-green-50">
                          <Image
                            src="/weat-pasta.jpg"
                            alt="Bliss Whole Wheat Pasta"
                            fill
                            className="object-cover transition-all hover:scale-105"
                          />
                          <Badge className="absolute right-2 top-2 bg-green-600">Organic</Badge>
                        </div>
                        <CardHeader className="p-4">
                          <CardTitle className="text-lg">Whole Wheat Pasta</CardTitle>
                          <CardDescription>450g pack</CardDescription>
                        </CardHeader>
                        <CardFooter className="flex justify-between p-4 pt-0">
                          <p className="font-medium">$3.29</p>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            Add to Cart
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </div>

                  {/* Category: Vermicelli */}
                  <div className="mt-12">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-bold">Vermicelli</h2>
                      <Link href="#" className="flex items-center text-green-600 hover:underline">
                        View All <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                      <Card className="overflow-hidden">
                        <div className="aspect-square relative bg-green-50">
                          <Image
                            src="/rice-vermi.jpg"
                            alt="Bliss Rice Vermicelli"
                            fill
                            className="object-cover transition-all hover:scale-105"
                          />
                        </div>
                        <CardHeader className="p-4">
                          <CardTitle className="text-lg">Rice Vermicelli</CardTitle>
                          <CardDescription>300g pack</CardDescription>
                        </CardHeader>
                        <CardFooter className="flex justify-between p-4 pt-0">
                          <p className="font-medium">$2.79</p>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            Add to Cart
                          </Button>
                        </CardFooter>
                      </Card>
                      <Card className="overflow-hidden">
                        <div className="aspect-square relative bg-green-50">
                          <Image
                            src="/wheat-vermi.jpg"
                            alt="Bliss Wheat Vermicelli"
                            fill
                            className="object-cover transition-all hover:scale-105"
                          />
                        </div>
                        <CardHeader className="p-4">
                          <CardTitle className="text-lg">Wheat Vermicelli</CardTitle>
                          <CardDescription>300g pack</CardDescription>
                        </CardHeader>
                        <CardFooter className="flex justify-between p-4 pt-0">
                          <p className="font-medium">$2.49</p>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            Add to Cart
                          </Button>
                        </CardFooter>
                      </Card>
                      <Card className="overflow-hidden">
                        <div className="aspect-square relative bg-green-50">
                          <Image
                            src="/roasted-vermi.jpg"
                            alt="Bliss Roasted Vermicelli"
                            fill
                            className="object-cover transition-all hover:scale-105"
                          />
                          <Badge className="absolute right-2 top-2 bg-green-600">Traditional</Badge>
                        </div>
                        <CardHeader className="p-4">
                          <CardTitle className="text-lg">Roasted Vermicelli</CardTitle>
                          <CardDescription>250g pack</CardDescription>
                        </CardHeader>
                        <CardFooter className="flex justify-between p-4 pt-0">
                          <p className="font-medium">$2.99</p>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            Add to Cart
                          </Button>
                        </CardFooter>
                      </Card>
                      <Card className="overflow-hidden">
                        <div className="aspect-square relative bg-green-50">
                          <Image
                            src="/vermicilli.jpg"
                            alt="Bliss Instant Vermicelli"
                            fill
                            className="object-cover transition-all hover:scale-105"
                          />
                        </div>
                        <CardHeader className="p-4">
                          <CardTitle className="text-lg">Instant Vermicelli</CardTitle>
                          <CardDescription>Cup - 70g</CardDescription>
                        </CardHeader>
                        <CardFooter className="flex justify-between p-4 pt-0">
                          <p className="font-medium">$1.49</p>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            Add to Cart
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Recipes Tab */}
              <TabsContent value="recipes" className="mt-8">
                <div className="flex flex-col gap-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Featured Recipes</h2>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        All
                      </Button>
                      <Button variant="outline" size="sm">
                        Quick & Easy
                      </Button>
                      <Button variant="outline" size="sm">
                        Vegetarian
                      </Button>
                      <Button variant="outline" size="sm">
                        Desserts
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Recipe 1 */}
                    <Card className="overflow-hidden">
                      <div className="aspect-video relative">
                        <Image
                          src="/spice-noodles.jpg"
                          alt="Spicy Noodle Stir Fry"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                          <h3 className="text-xl font-bold">Spicy Noodle Stir Fry</h3>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Clock className="mr-1 h-4 w-4" />
                            20 mins
                          </div>
                          <div className="flex items-center">
                            <ChefHat className="mr-1 h-4 w-4" />
                            Easy
                          </div>
                          <div className="flex items-center">
                            <Users className="mr-1 h-4 w-4" />
                            Serves 2
                          </div>
                        </div>
                        <p className="mt-4 line-clamp-2">
                          A quick and delicious stir fry using our Bliss Egg Noodles with fresh vegetables and a spicy
                          sauce.
                        </p>
                      </CardContent>
                      <CardFooter className="flex justify-between p-4 pt-0">
                        <Button variant="outline" size="sm" className="gap-1">
                          <Bookmark className="h-4 w-4" />
                          Save
                        </Button>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          View Recipe
                        </Button>
                      </CardFooter>
                    </Card>

                    {/* Recipe 2 */}
                    <Card className="overflow-hidden">
                      <div className="aspect-video relative">
                        <Image
                          src="/italian-pasta.jpg"
                          alt="Classic Italian Pasta"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                          <h3 className="text-xl font-bold">Classic Italian Pasta</h3>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Clock className="mr-1 h-4 w-4" />
                            30 mins
                          </div>
                          <div className="flex items-center">
                            <ChefHat className="mr-1 h-4 w-4" />
                            Medium
                          </div>
                          <div className="flex items-center">
                            <Users className="mr-1 h-4 w-4" />
                            Serves 4
                          </div>
                        </div>
                        <p className="mt-4 line-clamp-2">
                          A traditional Italian pasta dish made with Bliss Spaghetti, fresh tomatoes, basil, and olive
                          oil.
                        </p>
                      </CardContent>
                      <CardFooter className="flex justify-between p-4 pt-0">
                        <Button variant="outline" size="sm" className="gap-1">
                          <Bookmark className="h-4 w-4" />
                          Save
                        </Button>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          View Recipe
                        </Button>
                      </CardFooter>
                    </Card>

                    {/* Recipe 3 */}
                    <Card className="overflow-hidden">
                      <div className="aspect-video relative">
                        <Image
                          src="/vermicilli.jpg"
                          alt="Sweet Vermicelli Pudding"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                          <h3 className="text-xl font-bold">Sweet Vermicelli Pudding</h3>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Clock className="mr-1 h-4 w-4" />
                            25 mins
                          </div>
                          <div className="flex items-center">
                            <ChefHat className="mr-1 h-4 w-4" />
                            Easy
                          </div>
                          <div className="flex items-center">
                            <Users className="mr-1 h-4 w-4" />
                            Serves 6
                          </div>
                        </div>
                        <p className="mt-4 line-clamp-2">
                          A delicious dessert made with Bliss Roasted Vermicelli, milk, sugar, and topped with nuts and
                          raisins.
                        </p>
                      </CardContent>
                      <CardFooter className="flex justify-between p-4 pt-0">
                        <Button variant="outline" size="sm" className="gap-1">
                          <Bookmark className="h-4 w-4" />
                          Save
                        </Button>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          View Recipe
                        </Button>
                      </CardFooter>
                    </Card>

                    {/* Recipe 4 */}
                    <Card className="overflow-hidden">
                      <div className="aspect-video relative">
                        <Image
                          src="/fresh-water.jpg"
                          alt="Refreshing Infused Water"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                          <h3 className="text-xl font-bold">Refreshing Infused Water</h3>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Clock className="mr-1 h-4 w-4" />
                            10 mins
                          </div>
                          <div className="flex items-center">
                            <ChefHat className="mr-1 h-4 w-4" />
                            Easy
                          </div>
                          <div className="flex items-center">
                            <Users className="mr-1 h-4 w-4" />
                            Serves 4
                          </div>
                        </div>
                        <p className="mt-4 line-clamp-2">
                          Turn Bliss Mineral Water into a refreshing treat with fresh fruits, herbs, and natural
                          sweeteners.
                        </p>
                      </CardContent>
                      <CardFooter className="flex justify-between p-4 pt-0">
                        <Button variant="outline" size="sm" className="gap-1">
                          <Bookmark className="h-4 w-4" />
                          Save
                        </Button>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          View Recipe
                        </Button>
                      </CardFooter>
                    </Card>

                    {/* Recipe 5 */}
                    <Card className="overflow-hidden">
                      <div className="aspect-video relative">
                        <Image
                          src="/pasta-wander.jpg"
                          alt="One-Pot Pasta Wonder"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                          <h3 className="text-xl font-bold">One-Pot Pasta Wonder</h3>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Clock className="mr-1 h-4 w-4" />
                            25 mins
                          </div>
                          <div className="flex items-center">
                            <ChefHat className="mr-1 h-4 w-4" />
                            Easy
                          </div>
                          <div className="flex items-center">
                            <Users className="mr-1 h-4 w-4" />
                            Serves 4
                          </div>
                        </div>
                        <p className="mt-4 line-clamp-2">
                          A simple yet delicious meal using Bliss Penne pasta cooked in a single pot with vegetables and
                          herbs.
                        </p>
                      </CardContent>
                      <CardFooter className="flex justify-between p-4 pt-0">
                        <Button variant="outline" size="sm" className="gap-1">
                          <Bookmark className="h-4 w-4" />
                          Save
                        </Button>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          View Recipe
                        </Button>
                      </CardFooter>
                    </Card>

                    {/* Recipe 6 */}
                    <Card className="overflow-hidden">
                      <div className="aspect-video relative">
                        <Image
                          src="/morning-vermi.jpg"
                          alt="Vermicelli Breakfast Bowl"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                          <h3 className="text-xl font-bold">Vermicelli Breakfast Bowl</h3>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Clock className="mr-1 h-4 w-4" />
                            15 mins
                          </div>
                          <div className="flex items-center">
                            <ChefHat className="mr-1 h-4 w-4" />
                            Easy
                          </div>
                          <div className="flex items-center">
                            <Users className="mr-1 h-4 w-4" />
                            Serves 2
                          </div>
                        </div>
                        <p className="mt-4 line-clamp-2">
                          Start your day with a nutritious breakfast bowl using Bliss Rice Vermicelli, fresh fruits, and
                          yogurt.
                        </p>
                      </CardContent>
                      <CardFooter className="flex justify-between p-4 pt-0">
                        <Button variant="outline" size="sm" className="gap-1">
                          <Bookmark className="h-4 w-4" />
                          Save
                        </Button>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          View Recipe
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>

                  <div className="mt-8 flex justify-center">
                    <Button className="bg-green-600 hover:bg-green-700">
                      Load More Recipes
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </TabsContent>

              {/* Creative Ideas Tab */}
              <TabsContent value="ideas" className="mt-8">
                <div className="flex flex-col gap-8">
                  <h2 className="text-2xl font-bold">Creative Ways to Use Bliss Products</h2>

                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {/* Idea 1 */}
                    <div className="flex gap-6 rounded-lg border p-6">
                      <div className="h-16 w-16 flex-shrink-0 rounded-full bg-green-100 flex items-center justify-center">
                        <Image
                          src="/placeholder.svg?height=64&width=64"
                          alt="Water Icon"
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">DIY Flavored Water Station</h3>
                        <p className="mt-2 text-muted-foreground">
                          Create a flavored water station at your next gathering using Bliss Mineral Water. Set out
                          sliced fruits, herbs like mint and basil, and edible flowers for guests to create their own
                          custom infusions.
                        </p>
                        <Link href="#" className="mt-4 inline-flex items-center text-green-600 hover:underline">
                          Learn more <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>

                    {/* Idea 2 */}
                    <div className="flex gap-6 rounded-lg border p-6">
                      <div className="h-16 w-16 flex-shrink-0 rounded-full bg-green-100 flex items-center justify-center">
                        <Image
                          src="/placeholder.svg?height=64&width=64"
                          alt="Noodle Icon"
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">Noodle Art for Kids</h3>
                        <p className="mt-2 text-muted-foreground">
                          Use uncooked Bliss pasta and noodles for creative art projects with children. Create colorful
                          necklaces, picture frames, or mosaic art with different pasta shapes.
                        </p>
                        <Link href="#" className="mt-4 inline-flex items-center text-green-600 hover:underline">
                          Learn more <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>

                    {/* Idea 3 */}
                    <div className="flex gap-6 rounded-lg border p-6">
                      <div className="h-16 w-16 flex-shrink-0 rounded-full bg-green-100 flex items-center justify-center">
                        <Image
                          src="/placeholder.svg?height=64&width=64"
                          alt="Pasta Icon"
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">Pasta Salad Bar</h3>
                        <p className="mt-2 text-muted-foreground">
                          Set up a pasta salad bar for entertaining. Cook different Bliss pasta shapes, then offer
                          various dressings, vegetables, cheeses, and proteins for a customizable meal experience.
                        </p>
                        <Link href="#" className="mt-4 inline-flex items-center text-green-600 hover:underline">
                          Learn more <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>

                    {/* Idea 4 */}
                    <div className="flex gap-6 rounded-lg border p-6">
                      <div className="h-16 w-16 flex-shrink-0 rounded-full bg-green-100 flex items-center justify-center">
                        <Image
                          src="/placeholder.svg?height=64&width=64"
                          alt="Vermicelli Icon"
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">Vermicelli Dessert Cups</h3>
                        <p className="mt-2 text-muted-foreground">
                          Create edible dessert cups using Bliss Roasted Vermicelli. Form into cup shapes, bake until
                          crisp, then fill with pudding, fruit, or ice cream for an impressive dessert presentation.
                        </p>
                        <Link href="#" className="mt-4 inline-flex items-center text-green-600 hover:underline">
                          Learn more <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>

                    {/* Idea 5 */}
                    <div className="flex gap-6 rounded-lg border p-6">
                      <div className="h-16 w-16 flex-shrink-0 rounded-full bg-green-100 flex items-center justify-center">
                        <Image
                          src="/placeholder.svg?height=64&width=64"
                          alt="Water Bottle Icon"
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">Upcycled Water Bottle Planters</h3>
                        <p className="mt-2 text-muted-foreground">
                          Repurpose Bliss water bottles into mini herb gardens or succulent planters. Cut bottles in
                          half, decorate with paint or twine, and use them to grow small plants in your kitchen.
                        </p>
                        <Link href="#" className="mt-4 inline-flex items-center text-green-600 hover:underline">
                          Learn more <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>

                    {/* Idea 6 */}
                    <div className="flex gap-6 rounded-lg border p-6">
                      <div className="h-16 w-16 flex-shrink-0 rounded-full bg-green-100 flex items-center justify-center">
                        <Image
                          src="/placeholder.svg?height=64&width=64"
                          alt="Noodle Bowl Icon"
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">Noodle Gift Baskets</h3>
                        <p className="mt-2 text-muted-foreground">
                          Create thoughtful gift baskets using Bliss products. Combine different pasta types with
                          sauces, seasonings, and a recipe card for a personalized housewarming or holiday gift.
                        </p>
                        <Link href="#" className="mt-4 inline-flex items-center text-green-600 hover:underline">
                          Learn more <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Community Ideas */}
                  <div className="mt-12">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-bold">Community Ideas</h2>
                      <Button variant="outline" className="gap-2">
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
                          className="h-4 w-4"
                        >
                          <path d="M12 5v14" />
                          <path d="M5 12h14" />
                        </svg>
                        Share Your Idea
                      </Button>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {/* Community Idea 1 */}
                      <Card>
                        <CardHeader className="pb-2">
                          <div className="flex items-center gap-2">
                            <Image
                              src="/placeholder.svg?height=40&width=40"
                              alt="User Avatar"
                              width={40}
                              height={40}
                              className="rounded-full"
                            />
                            <div>
                              <CardTitle className="text-base">Sarah J.</CardTitle>
                              <CardDescription>Posted 2 days ago</CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p>
                            I use Bliss Vermicelli to make crispy noodle nests for my Asian-inspired appetizers. They're
                            always a hit at parties!
                          </p>
                        </CardContent>
                        <CardFooter className="flex justify-between pt-0">
                          <Button variant="ghost" size="sm" className="gap-1">
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
                              className="h-4 w-4"
                            >
                              <path d="M7 10v12" />
                              <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                            </svg>
                            42
                          </Button>
                          <Button variant="ghost" size="sm">
                            Reply
                          </Button>
                        </CardFooter>
                      </Card>

                      {/* Community Idea 2 */}
                      <Card>
                        <CardHeader className="pb-2">
                          <div className="flex items-center gap-2">
                            <Image
                              src="/placeholder.svg?height=40&width=40"
                              alt="User Avatar"
                              width={40}
                              height={40}
                              className="rounded-full"
                            />
                            <div>
                              <CardTitle className="text-base">Michael T.</CardTitle>
                              <CardDescription>Posted 5 days ago</CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p>
                            I freeze Bliss water in ice cube trays with edible flowers and herbs. They look beautiful in
                            summer drinks and impress all my guests!
                          </p>
                        </CardContent>
                        <CardFooter className="flex justify-between pt-0">
                          <Button variant="ghost" size="sm" className="gap-1">
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
                              className="h-4 w-4"
                            >
                              <path d="M7 10v12" />
                              <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                            </svg>
                            36
                          </Button>
                          <Button variant="ghost" size="sm">
                            Reply
                          </Button>
                        </CardFooter>
                      </Card>

                      {/* Community Idea 3 */}
                      <Card>
                        <CardHeader className="pb-2">
                          <div className="flex items-center gap-2">
                            <Image
                              src="/placeholder.svg?height=40&width=40"
                              alt="User Avatar"
                              width={40}
                              height={40}
                              className="rounded-full"
                            />
                            <div>
                              <CardTitle className="text-base">Priya K.</CardTitle>
                              <CardDescription>Posted 1 week ago</CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p>
                            I use broken Bliss pasta pieces as a crunchy topping for my mac and cheese. The texture
                            contrast is amazing!
                          </p>
                        </CardContent>
                        <CardFooter className="flex justify-between pt-0">
                          <Button variant="ghost" size="sm" className="gap-1">
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
                              className="h-4 w-4"
                            >
                              <path d="M7 10v12" />
                              <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                            </svg>
                            29
                          </Button>
                          <Button variant="ghost" size="sm">
                            Reply
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-green-600 py-16 md:py-24 text-white">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join the Bliss Community</h2>
              <p className="max-w-[700px] text-green-50 md:text-lg">
                Subscribe to our newsletter for exclusive recipes, product updates, and special offers.
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
      <footer className="border-t bg-background">
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
                  <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#products" className="text-sm text-muted-foreground hover:text-foreground">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/explore" className="text-sm text-muted-foreground hover:text-foreground">
                    Explore
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="text-sm text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <ul className="mt-4 space-y-2">
                <li className="text-sm text-muted-foreground">123 Grocery Lane, Food City</li>
                <li className="text-sm text-muted-foreground">info@blissgrocery.com</li>
                <li className="text-sm text-muted-foreground">+1 (555) 123-4567</li>
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
