import { ArrowLeft, BookOpenCheck, ExternalLink, Scale } from 'lucide-react'

export const metadata = {
  title: 'Termos de Uso | Vitalino Tech',
  description: 'Condições para uso do portal, curso e links de ofertas da Vitalino Tech.',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-grid px-4 py-10 sm:py-16">
      <article className="glass mx-auto max-w-4xl rounded-3xl p-6 sm:p-10">
        <a href="/" className="inline-flex items-center gap-2 text-sm font-bold text-brand-300 hover:text-white"><ArrowLeft size={17} /> Voltar ao site</a>

        <div className="mt-8 flex items-start gap-4">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-600/20 text-brand-300"><Scale size={28} /></span>
          <div><p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-400">Vitalino Tech</p><h1 className="mt-2 text-3xl font-black sm:text-4xl">Termos de Uso</h1><p className="mt-2 text-sm text-slate-400">Última atualização: 17 de julho de 2026</p></div>
        </div>

        <div className="mt-10 space-y-8 leading-relaxed text-slate-300">
          <section><h2 className="text-xl font-black text-white">1. Aceitação e cadastro</h2><p className="mt-3">Ao criar uma conta ou usar o site, você declara que leu estes Termos e a Política de Privacidade. Os dados informados devem ser verdadeiros. Sua senha é pessoal e não deve ser compartilhada; avise-nos caso suspeite de acesso indevido.</p></section>

          <section><h2 className="flex items-center gap-2 text-xl font-black text-white"><ExternalLink size={21} className="text-brand-300" /> 2. Ofertas e links de afiliado</h2><p className="mt-3">A Vitalino Tech seleciona produtos e fornece links para anúncios de terceiros, inclusive links de afiliado do Mercado Livre. Podemos receber comissão quando uma compra elegível é feita, sem custo adicional para o visitante. Preços, estoque, frete, garantia, entrega e condições comerciais são definidos pelo vendedor e devem ser confirmados no anúncio original antes da compra.</p></section>

          <section><h2 className="flex items-center gap-2 text-xl font-black text-white"><BookOpenCheck size={21} className="text-brand-300" /> 3. Curso e conteúdo</h2><p className="mt-3">O curso gratuito de Segurança da Informação tem finalidade educacional e preventiva. O conteúdo não substitui consultoria profissional especializada. É proibido reproduzir, vender, automatizar a extração ou usar o material para atividades ilícitas.</p></section>

          <section><h2 className="text-xl font-black text-white">4. Uso adequado</h2><p className="mt-3">Não é permitido tentar invadir, sobrecarregar, burlar controles de acesso, explorar falhas, cadastrar dados de terceiros sem autorização ou interferir no funcionamento do portal. Contas envolvidas em abuso podem ser suspensas ou removidas.</p></section>

          <section><h2 className="text-xl font-black text-white">5. Disponibilidade e responsabilidades</h2><p className="mt-3">Buscamos manter informações e serviços disponíveis e atualizados, mas podem ocorrer manutenções, falhas de terceiros ou alterações de anúncios. A Vitalino Tech não é vendedora dos produtos divulgados e não controla as transações realizadas no Mercado Livre.</p></section>

          <section><h2 className="text-xl font-black text-white">6. Alterações e contato</h2><p className="mt-3">Estes Termos podem ser atualizados para refletir melhorias, mudanças legais ou novos recursos. A data da versão vigente aparece no início desta página. Dúvidas podem ser enviadas para <a href="mailto:devrobertovitalino@gmail.com" className="font-bold text-brand-300 hover:text-white">devrobertovitalino@gmail.com</a>.</p></section>
        </div>
      </article>
    </main>
  )
}
