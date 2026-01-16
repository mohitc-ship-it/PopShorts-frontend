"use client"

import { Button } from "@/components/ui/button"
import { BarChart3, Download, Share2, Trash2, Edit, Plus, LogOut, Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const shorts = [
    {
      id: 1,
      title: "The Secret to Viral Content",
      views: 125400,
      likes: 8432,
      shares: 1203,
      status: "Published",
      date: "2024-01-15",
    },
    {
      id: 2,
      title: "10 YouTube Tips Nobody Tells You",
      views: 98230,
      likes: 6542,
      shares: 892,
      status: "Published",
      date: "2024-01-14",
    },
    {
      id: 3,
      title: "Why Your Shorts Aren't Getting Views",
      views: 54120,
      likes: 3421,
      shares: 456,
      status: "Draft",
      date: "2024-01-13",
    },
    {
      id: 4,
      title: "Monetization Secrets Revealed",
      views: 243890,
      likes: 15632,
      shares: 3421,
      status: "Published",
      date: "2024-01-12",
    },
  ]

  const stats = [
    { label: "Total Views", value: "521,640", trend: "+12.5%" },
    { label: "Total Likes", value: "35,027", trend: "+8.3%" },
    { label: "Total Shorts", value: "24", trend: "+4" },
    { label: "Avg. Engagement", value: "6.8%", trend: "+2.1%" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? "w-64" : "w-20"
          } border-r border-border bg-background transition-all duration-300 flex flex-col`}
        >
          <div className="flex items-center justify-between p-6">
            {sidebarOpen && <span className="text-xl font-bold text-primary">PopShorts</span>}
            <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(!sidebarOpen)} className="p-0 h-auto">
              <Menu className="w-5 h-5" />
            </Button>
          </div>

          <nav className="flex-1 space-y-2 px-4">
            {[
              { label: "Dashboard", active: true },
              { label: "Create New", active: false },
              { label: "Analytics", active: false },
              { label: "Settings", active: false },
            ].map((item, i) => (
              <button
                key={i}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  item.active ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
                }`}
              >
                {sidebarOpen ? item.label : item.label.charAt(0)}
              </button>
            ))}
          </nav>

          <div className="p-4 border-t border-border">
            <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground">
              <LogOut className="w-4 h-4 mr-2" />
              {sidebarOpen && "Sign Out"}
            </Button>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          {/* Header */}
          <header className="border-b border-border bg-background sticky top-0 z-10">
            <div className="px-8 py-6 flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
                <p className="text-muted-foreground">Welcome back, Creator!</p>
              </div>
              <Link href="/create">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 flex gap-2">
                  <Plus className="w-4 h-4" />
                  Create New Short
                </Button>
              </Link>
            </div>
          </header>

          {/* Stats Grid */}
          <section className="px-8 py-8">
            <div className="grid md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="border border-border rounded-lg p-6 bg-muted/30">
                  <p className="text-muted-foreground text-sm font-medium mb-2">{stat.label}</p>
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-3xl font-bold text-foreground">{stat.value}</h3>
                    <span className="text-primary text-sm font-semibold">{stat.trend}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Shorts Table */}
          <section className="px-8 py-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-foreground">Your Shorts</h2>
              <Button variant="outline" className="border-border bg-transparent">
                Filter
              </Button>
            </div>

            <div className="border border-border rounded-lg overflow-hidden bg-background">
              <table className="w-full">
                <thead className="border-b border-border bg-muted/50">
                  <tr>
                    <th className="text-left px-6 py-4 font-semibold text-foreground">Title</th>
                    <th className="text-left px-6 py-4 font-semibold text-foreground">Views</th>
                    <th className="text-left px-6 py-4 font-semibold text-foreground">Engagement</th>
                    <th className="text-left px-6 py-4 font-semibold text-foreground">Status</th>
                    <th className="text-left px-6 py-4 font-semibold text-foreground">Date</th>
                    <th className="text-left px-6 py-4 font-semibold text-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {shorts.map((short, i) => (
                    <tr key={i} className="border-t border-border hover:bg-muted/30 transition-colors">
                      <td className="px-6 py-4 font-medium text-foreground">{short.title}</td>
                      <td className="px-6 py-4 text-muted-foreground">{short.views.toLocaleString()}</td>
                      <td className="px-6 py-4 text-muted-foreground">
                        {short.likes.toLocaleString()} likes · {short.shares.toLocaleString()} shares
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`text-xs font-semibold px-3 py-1 rounded-full ${
                            short.status === "Published"
                              ? "bg-primary/20 text-primary"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {short.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-muted-foreground text-sm">{short.date}</td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm" className="p-0 h-auto">
                            <BarChart3 className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                          </Button>
                          <Button variant="ghost" size="sm" className="p-0 h-auto">
                            <Edit className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                          </Button>
                          <Button variant="ghost" size="sm" className="p-0 h-auto">
                            <Share2 className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                          </Button>
                          <Button variant="ghost" size="sm" className="p-0 h-auto">
                            <Download className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                          </Button>
                          <Button variant="ghost" size="sm" className="p-0 h-auto">
                            <Trash2 className="w-4 h-4 text-muted-foreground hover:text-red-500" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
