import React from 'react'
import { Home, Users, Cpu, Mail, BookOpen } from 'lucide-react'
import { NavBar } from "./tubelight-navbar"

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '#/', icon: Home },
    { name: 'How We Work', url: '#/how-we-work', icon: BookOpen },
    { name: 'What We Build', url: '#/what-we-build', icon: Cpu },
    { name: 'About', url: '#/about', icon: Users },
    { name: 'Contact', url: '#/contact', icon: Mail }
  ]

  return <NavBar items={navItems} />
}
