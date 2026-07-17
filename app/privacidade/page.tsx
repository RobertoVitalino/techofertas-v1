import { ArrowLeft, Database, LockKeyhole, ShieldCheck, UserRoundCheck } from 'lucide-react'

export const metadata = {
  title: 'Política de Privacidade | Vitalino Tech',
  description: 'Saiba como a Vitalino Tech coleta, utiliza e protege dados pessoais.',
}

const updatedAt = '17 de julho de 2026'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-grid px-4 py-10 sm:py-16">
      <article className="glass mx-auto max-w-4xl rounded-3xl p-6 sm:p-10">
        <a href="/" className="inline-flex items-center gap-2 text-sm font-bold text-brand-300 hover:text-white"><ArrowLeft size={17} /> Voltar ao site</a>

        <div className="mt-8 flex items-start gap-4">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-600/20 text-brand-300"><ShieldCheck size={28} /></span>
          <div><p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-400">Transparência e segurança</p><h1 className="mt-2 text-3xl font-black sm:text-4xl">Política de Privacidade</h1><p className="mt-2 text-sm text-slate-400">Última atualização: {updatedAt}</p></div>
        </div>

        <div className="mt-10 space-y-8 leading-relaxed text-slate-300">
          <section><h2 className="flex items-center gap-2 text-xl font-black text-white"><Database size={21} className="text-brand-300" /> Quais dados tratamos</h2><p className="mt-3">No cadastro, coletamos nome, e-mail e, quando informado, nome de usuário. A senha nunca é armazenada em texto legível: guardamos somente uma representação criptográfica. Também registramos datas de cadastro e aceite, sessões de acesso e eventos técnicos de autenticação. Endereço de rede e identificadores usados nesses eventos são transformados em códigos não reversíveis.</p><p className="mt-3">Não armazenamos número de cartão, dados bancários ou pagamento. Compras são realizadas no ambiente do Mercado Livre, sujeito às regras daquela plataforma.</p></section>

          <section><h2 className="flex items-center gap-2 text-xl font-black text-white"><UserRoundCheck size={21} className="text-brand-300" /> Para que usamos os dados</h2><p className="mt-3">Usamos as informações para criar e autenticar a conta, liberar conteúdos do curso, manter a segurança do serviço, atender solicitações do titular e cumprir obrigações legais. Não vendemos os dados pessoais de usuários.</p></section>

          <section><h2 className="text-xl font-black text-white">Compartilhamento e operadores</h2><p className="mt-3">A infraestrutura utiliza Vercel para hospedagem e Prisma Postgres para o banco de dados. Esses fornecedores processam apenas o necessário para entregar o serviço. Links de afiliado direcionam o visitante ao Mercado Livre; a navegação e eventual compra passam a seguir também a política de privacidade do Mercado Livre.</p></section>

          <section><h2 className="flex items-center gap-2 text-xl font-black text-white"><LockKeyhole size={21} className="text-brand-300" /> Segurança e retenção</h2><p className="mt-3">Aplicamos conexão HTTPS, cookies de sessão protegidos, senhas derivadas com função criptográfica resistente, limitação de tentativas de acesso e sessões revogáveis. Nenhum sistema é totalmente imune a incidentes, mas as proteções são revisadas e atualizadas.</p><p className="mt-3">Os dados da conta permanecem enquanto ela estiver ativa ou pelo período exigido em lei. Registros técnicos de autenticação são mantidos por até 90 dias. Ao excluir a conta pela Área do Cliente, os dados cadastrais e sessões vinculadas são removidos, ressalvadas retenções legalmente obrigatórias.</p></section>

          <section><h2 className="text-xl font-black text-white">Seus direitos</h2><p className="mt-3">Você pode confirmar o tratamento, acessar e baixar seus dados, solicitar correção, informação sobre compartilhamentos, revogar consentimentos aplicáveis e excluir a conta. As opções de baixar e excluir estão disponíveis em Minha Conta.</p></section>

          <section><h2 className="text-xl font-black text-white">Contato do responsável</h2><p className="mt-3">Controlador: Vitalino Tech, responsável Roberto Vitalino, Mato Grosso do Sul. Para dúvidas ou solicitações sobre privacidade, envie um e-mail para <a href="mailto:devrobertovitalino@gmail.com" className="font-bold text-brand-300 hover:text-white">devrobertovitalino@gmail.com</a>.</p></section>
        </div>
      </article>
    </main>
  )
}
