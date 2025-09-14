"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Moon, Sun, Menu } from "lucide-react";
import { motion } from "framer-motion";
import {
  Home,
  Folder,
  Image,
  Magicpen,
  Notification,
  Video,
  Headphone,
} from "iconsax-reactjs";

export function Navigation() {
  const [activeItem, setActiveItem] = useState("home");
  const { theme, setTheme } = useTheme();
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  

  const navItems = [
    { id: "home", href: "/", icon: Home },
    { id: "image", href: "/image", icon: Image },
    { id: "video", href: "/video", icon: Video },
    { id: "edit", href: "/edit", icon: Magicpen },
    { id: "folder", href: "/folder", icon: Folder },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-sm border-b border-gray-200/50 ${
        scrolled
          ? "bg-white/20 dark:bg-black/20 backdrop-blur-xl border border-white/30 dark:border-gray-800/50 rounded-2xl shadow-lg scale-95 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl px-4 py-2 transition-opacity duration-500"
          : "bg-transparent "
      }`}
    >
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="logo" className="w-8 h-8" />
            <span className="text-sm font-medium">benevolentambassador</span>
          </div>
          <div className="hidden md:flex items-center space-x-1 bg-[#f6f6f6] rounded-lg p-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.id;
              return (
                <Link href={item.href} key={item.id}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setActiveItem(item.id)}
                        className={`h-8 w-10 px-3 transition-all cursor-pointer ${
                          isActive
                            ? "bg-white shadow-sm text-gray-900"
                            : "text-gray-500 hover:text-gray-700 hover:bg-white/50"
                        }`}
                      >
                        <Icon className="w-4 h-4" color="#000" variant="Bold" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>{item.id}</TooltipContent>
                  </Tooltip>
                </Link>
              );
            })}
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center gap-1 bg-[#f6f6f6] dark: text-sm text-gray-600 cursor-pointer hover:text-gray-900 px-3 py-2 rounded-md hover:bg-gray-50 transition-colors">
              <Image
                color="#000000"
                variant="Bold"
                className="w-4 h-4 text-gray-600 hover:text-gray-800"
              />
              Gallery
            </div>
            <div className="flex items-center gap-1 text-sm bg-[#f6f6f6] dark: text-gray-600 cursor-pointer hover:text-gray-900 px-3 py-2 rounded-md hover:bg-gray-50 transition-colors">
              <Headphone
                color="#000000"
                variant="Bold"
                className="w-4 h-4 text-gray-600 hover:text-gray-800"
              />
              Support
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="bg-[#f6f6f6] p-0 hover:bg-gray-100 transition-colors"
            >
              <div className="text-sm bg-[#f6f6f6] dark: text-gray-600 cursor-pointer hover:text-gray-900 px-3 py-2.5 rounded-md hover:bg-gray-50 transition-colors">
                <Notification
                  color="#000000"
                  variant="Bold"
                  className="w-4 h-4 text-gray-600 hover:text-gray-800"
                />
              </div>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="cursor-pointer"
            >
              {theme === "dark" ? (
                <Sun className="h-[1.2rem] w-[1.2rem]" />
              ) : (
                <Moon className="h-[1.2rem] w-[1.2rem]" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="bg-[#f6f6f6] hover:bg-gray-100"
            >
              <Notification className="w-4 h-4" color="#000" variant="Bold" />
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="bg-[#f6f6f6] p-0 hover:bg-gray-100 transition-colors"
            >
              <div className="text-sm bg-[#f6f6f6] dark: text-gray-600 cursor-pointer hover:text-gray-900 px-3 py-2.5 rounded-md hover:bg-gray-50 transition-colors">
                <Notification
                  color="#000000"
                  variant="Bold"
                  className="w-4 h-4 text-gray-600 hover:text-gray-800"
                />
              </div>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 p-0">
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="flex flex-col gap-4 mt-6 p-4"
                >
                  {navItems.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          className="flex items-center gap-2 text-gray-700 dark:text-white hover:text-black"
                          onClick={() => setActiveItem(item.id)}
                        >
                          <Icon
                            className="w-5 h-5"
                            color={theme === "dark" ? "#ffffff" : "#000000"}
                            variant="Bold"
                          />
                          {item.id}
                        </Link>
                      </motion.div>
                    );
                  })}
                  <div className="flex items-center gap-1 bg-[#f6f6f6] dark: text-sm text-gray-600 cursor-pointer hover:text-gray-900 px-3 py-2 rounded-md hover:bg-gray-50 transition-colors w-1/2">
                    <Image
                      color="#000000"
                      variant="Bold"
                      className="w-4 h-4 text-gray-600 hover:text-gray-800"
                    />
                    Gallery
                  </div>
                  <div className="flex items-center gap-1 text-sm bg-[#f6f6f6] dark: text-gray-600 cursor-pointer hover:text-gray-900 px-3 py-2 rounded-md hover:bg-gray-50 transition-colors w-1/2">
                    <Headphone
                      color="#000000"
                      variant="Bold"
                      className="w-4 h-4 text-gray-600 hover:text-gray-800"
                    />
                    Support
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                    className="mt-4 border-2"
                  >
                    {theme === "dark" ? "Switch to Light" : "Switch to Dark"}
                  </Button>
                </motion.div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
