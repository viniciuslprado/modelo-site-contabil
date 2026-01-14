import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
	{
		question: "Quanto tempo leva para abrir uma empresa?",
		answer:
			"O prazo para abertura de uma empresa varia de acordo com o tipo societário e a localidade. Em média, o processo leva de 15 a 30 dias úteis, considerando a obtenção de CNPJ, inscrições estaduais e municipais, alvarás e licenças necessárias. Nossa equipe trabalha para agilizar ao máximo esse processo.",
	},
	{
		question: "Quais documentos são necessários para abrir uma empresa?",
		answer:
			"Os documentos básicos incluem: RG e CPF dos sócios, comprovante de residência, certidão de casamento (se aplicável), contrato de locação ou documento do imóvel sede, e definição do objeto social da empresa. Dependendo da atividade, podem ser necessários documentos específicos como licenças sanitárias ou ambientais.",
	},
	{
		question: "Posso usar meu endereço residencial como sede da empresa?",
		answer:
			"Sim, é possível utilizar o endereço residencial como sede da empresa em muitos casos, especialmente para atividades de prestação de serviços ou comércio eletrônico. Porém, é necessário verificar as restrições do condomínio (se houver) e as regulamentações municipais específicas.",
	},
	{
		question: "Como funciona a troca de contador?",
		answer:
			"A troca de contador é um processo simples e não gera custos extras. Solicitamos ao contador atual toda a documentação contábil da empresa (livros, balancetes, obrigações acessórias) através de uma carta de transferência. Após receber os documentos, assumimos todas as responsabilidades contábeis sem interrupção nos serviços.",
	},
	{
		question: "Qual o custo dos serviços de contabilidade?",
		answer:
			"Os honorários contábeis variam de acordo com o porte da empresa, regime tributário, número de funcionários e complexidade das operações. Oferecemos uma análise gratuita para apresentar uma proposta personalizada que atenda às necessidades específicas do seu negócio.",
	},
];

const FAQ = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	return (
		<section id="faq" className="py-24">
			<div className="container-custom">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-center mb-12"
				>
					<span className="text-primary font-semibold text-sm uppercase tracking-wider">
						FAQ
					</span>
					<h2 className="section-title mt-2">
						Perguntas{" "}
						<span className="text-gradient-gold">frequentes</span>
					</h2>
					<p className="section-subtitle mx-auto mt-4 text-secondary-foreground/70">
						Tire suas dúvidas sobre nossos serviços e processos contábeis
					</p>
				</motion.div>

				<div className="max-w-3xl mx-auto">
					<div className="text-white">
						{faqs.map((faq, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.3, delay: index * 0.1 }}
								className="border-b border-secondary-foreground/10 last:border-0"
							>
								<button
									onClick={() =>
										setOpenIndex(openIndex === index ? null : index)
									}
									className="w-full py-6 flex items-center justify-between text-left"
									aria-expanded={openIndex === index}
								>
									<span className="font-display text-lg font-medium text-secondary-foreground pr-4">
										{faq.question}
									</span>
									<ChevronDown
										className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-200 ${
											openIndex === index ? "rotate-180" : ""
										}`}
									/>
								</button>
								<AnimatePresence>
									{openIndex === index && (
										<motion.div
											initial={{ height: 0, opacity: 0 }}
											animate={{ height: "auto", opacity: 1 }}
											exit={{ height: 0, opacity: 0 }}
											transition={{ duration: 0.2 }}
											className="overflow-hidden"
										>
											<p className="pb-6 text-secondary-foreground/70 leading-relaxed">
												{faq.answer}
											</p>
										</motion.div>
									)}
								</AnimatePresence>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQ;
