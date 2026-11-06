'use client'

import { useState } from 'react'
import { ArrowUpRight, Menu, MessageCircle, Sparkles, X } from 'lucide-react'

import { WHATSAPP_URL } from '@/lib/constants'
import { Logo } from './logo'

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className="announcement">
        <span>
          <Sparkles size={13} /> Acceso anticipado para negocios en Colombia.
        </span>
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
          Hablemos <ArrowUpRight size={13} />
        </a>
      </div>
      <header className="nav">
        <div className="container nav-inner">
          <Logo />
          <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
            <a href="#que-es" onClick={() => setMenuOpen(false)}>Qué es</a>
            <a href="#funciones" onClick={() => setMenuOpen(false)}>Funciones</a>
            <a href="#conexion" onClick={() => setMenuOpen(false)}>Cómo se conecta</a>
            <a href="#preguntas" onClick={() => setMenuOpen(false)}>Preguntas</a>
            <a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a>
            <div className="mobile-actions">
              <a className="btn btn-ghost" href="/login">Entrar</a>
              <a className="btn btn-dark" href="/login">
                Regístrate <ArrowUpRight size={16} />
              </a>
            </div>
          </nav>
          <div className="nav-actions">
            <a className="login-link" href="/login">Entrar</a>
            <a className="btn btn-dark" href="/login">
              Regístrate <ArrowUpRight size={16} />
            </a>
          </div>
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>
    </>
  )
}
