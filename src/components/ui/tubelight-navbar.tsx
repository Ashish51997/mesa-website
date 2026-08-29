"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const syncActiveTab = () => {
      const hash = window.location.hash.replace(/^#/, '');
      const matchedItem = items.find(item => {
        const path = item.url.replace(/^#/, '');
        return path === hash || (path === '/' && hash === '') || (path === '' && hash === '') || (path === '/' && hash === '/');
      });
      // Routes that aren't in the bar (Privacy, Terms) leave no tab lit, rather
      // than stranding the lamp on whichever tab was last active.
      setActiveTab(matchedItem ? matchedItem.name : "");
    };
    syncActiveTab();
    window.addEventListener("hashchange", syncActiveTab);
    return () => window.removeEventListener("hashchange", syncActiveTab);
  }, [items]);

  return (
    <div
      className={className ? className : "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6"}
    >
      <div className="tubelight-nav-container">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <a
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={`tubelight-nav-link ${isActive ? 'active' : ''}`}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="tubelight-lamp"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="tubelight-lamp-line" />
                </motion.div>
              )}
            </a>
          )
        })}
      </div>
    </div>
  )
}
