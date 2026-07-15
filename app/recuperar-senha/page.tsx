import { ArrowLeft, Mail, MessageCircle, ShieldCheck } from 'lucide-react'

export default function RecoverPasswordPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-grid px-4 py-12">
      <section className="glass w-full max-w-lg rounded-3xl p-7 sm:p-9">
        <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600/20 text-brand-400"><ShieldCheck size={28} /></div>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-400">Recuperação segura</p>
        <h1 className="mt-2 text-3xl font-black">Esqueci minha senha</h1>
        <p className="mt-4 leading-relaxed text-slate-400">
          Para proteger sua conta, solicite a recuperação diretamente à equipe Vitalino Tech. Confirme o e-mail usado no cadastro e nós orientaremos os próximos passos.
        </p>

        <div className="mt-8 grid gap-3">
          <a href="mailto:devrobertovitalino@gmail.com?subject=Recupera%C3%A7%C3%A3o%20de%20senha%20-%20Vitalino%20Tech" className="flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-3.5 font-bold hover:bg-brand-500"><Mail size={19} /> Solicitar por e-mail</a>
          <a href="https://wa.me/5567984793793?text=Ol%C3%A1%2C%20preciso%20recuperar%20minha%20senha%20na%20Vitalino%20Tech." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-3.5 font-bold hover:border-emerald-400/50 hover:bg-emerald-400/10"><MessageCircle size={19} /> Solicitar pelo WhatsApp</a>
        </div>

        <a href="/entrar" className="mt-7 flex items-center justify-center gap-2 text-sm text-slate-400 hover:text-white"><ArrowLeft size={16} /> Voltar para o login</a>
      </section>
    </main>
  )
}
