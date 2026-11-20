import React, { useState } from "react";
import {
  LayoutDashboard,
  UploadCloud,
  Database,
  AlertTriangle,
  Wrench,
  ShieldCheck,
  FileBarChart,
  Settings,
  Bell,
  ChevronRight,
  Menu,
  X,
  Sparkles,
} from "lucide-react";

import Upload from "./components/pages/Upload";
import Dashboard from "./components/pages/Dashboard";
import Profiling from "./components/pages/Profiling";
import Issues from "./components/pages/Issues";
import Repair from "./components/pages/Repair";
import Validation from "./components/pages/Validation";
import Reports from "./components/pages/Reports";

import "./App.css";

const navigation = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Upload", icon: UploadCloud },
  { name: "Profiling", icon: Database },
  { name: "Issues", icon: AlertTriangle },
  { name: "Repair", icon: Wrench },
  { name: "Validation", icon: ShieldCheck },
  { name: "Reports", icon: FileBarChart },
];

export default function App() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const changePage = (page) => {
    setActivePage(page);
    setSidebarOpen(false);
  };

  const pages = {
    Dashboard: <Dashboard />,
    Upload: <Upload />,
    Profiling: <Profiling />,
    Issues: <Issues />,
    Repair: <Repair />,
    Validation: <Validation />,
    Reports: <Reports />,
  };

  return (
    <div className="app-shell">
      <aside className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
        <div className="brand">
          <div className="brand-logo">
            <Database size={23} />
          </div>

          <div>
            <h2>DataFix</h2>
            <span>DATA INTELLIGENCE</span>
          </div>

          <button
            className="mobile-close"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <div className="nav-label">WORKSPACE</div>

        <nav className="sidebar-nav">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                className={`nav-item ${
                  activePage === item.name ? "active" : ""
                }`}
                onClick={() => changePage(item.name)}
              >
                <Icon size={19} />
                <span>{item.name}</span>

                {activePage === item.name && (
                  <span className="active-indicator" />
                )}
              </button>
            );
          })}
        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-help">
            <div className="help-icon">
              <Sparkles size={18} />
            </div>
            <strong>DataFix Engine</strong>
            <p>Autonomous data quality and repair.</p>
          </div>

          <button className="nav-item settings-item">
            <Settings size={19} />
            <span>Settings</span>
          </button>

          <div className="user-profile">
            <div className="user-avatar">DF</div>
            <div>
              <strong>DataFix User</strong>
              <small>Workspace</small>
            </div>
          </div>
        </div>
      </aside>

      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <main className="main-area">
        <header className="topbar">
          <div className="topbar-left">
            <button
              className="mobile-menu"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={21} />
            </button>

            <div className="breadcrumb">
              <span>Workspace</span>
              <ChevronRight size={15} />
              <strong>{activePage}</strong>
            </div>
          </div>

          <div className="topbar-right">
            <div className="system-status">
              <span className="live-dot" />
              System Ready
            </div>

            <button className="icon-button" title="Notifications">
              <Bell size={19} />
            </button>

            <div className="top-avatar">DF</div>
          </div>
        </header>

        <div className="page-content">
          {pages[activePage]}
        </div>

        <footer className="app-footer">
          <span>DataFix © 2026</span>
          <span>Autonomous Data Quality Engine</span>
        </footer>
      </main>
    </div>
  );
}