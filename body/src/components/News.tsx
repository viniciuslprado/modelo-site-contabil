import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

const newsItems = [
	{
		date: "15 Jan 2025",
		title: "Novas regras do Imposto de Renda para 2025",
		excerpt:
			"Confira as principais mudanças na declaração do IR e prepare-se para as novas obrigações fiscais.",
		category: "Fiscal",
	},
	{
		date: "10 Jan 2025",
		title: "eSocial: Atualizações importantes para empresas",
		excerpt:
			"O governo anunciou novas funcionalidades no sistema eSocial que impactam a rotina trabalhista.",
		category: "Trabalhista",
	},
	{
		date: "05 Jan 2025",
		title: "MEI: Novo limite de faturamento em vigor",
		excerpt:
			"Microempreendedores individuais já podem contar com o novo teto de faturamento anual.",
		category: "Empresarial",
	},
];

const News = () => {
	return (
		<section id="informativo" className="py-24">
			<div className="container-custom">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
				>
					<div>
						<span className="text-primary font-semibold text-sm uppercase tracking-wider">
							Informativo
						</span>
						<h2 className="section-title mt-2">
							Fique por dentro das{" "}
							<span className="text-gradient-gold">novidades</span>
						</h2>
					</div>
					<a
						href="#"
						className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
					>
						Ver todos os artigos
						<ArrowRight size={16} />
					</a>
				</motion.div>

				<div className="grid md:grid-cols-3 gap-8">
					{newsItems.map((item, index) => (
						<motion.article
							key={item.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: index * 0.1 }}
							className="group bg-background rounded-xl overflow-hidden shadow-sm card-hover border border-border"
						>
							{/* Placeholder Image */}
							<div className="h-48 bg-secondary relative overflow-hidden">
								<div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
								<div className="absolute top-4 left-4">
									<span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded">
										{item.category}
									</span>
								</div>
							</div>

							<div className="p-6">
								<div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
									<Calendar size={14} />
									{item.date}
								</div>
								<h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
									{item.title}
								</h3>
								<p className="text-muted-foreground mt-3 line-clamp-2">
									{item.excerpt}
								</p>
								<a
									href="#"
									className="inline-flex items-center gap-2 text-primary font-medium mt-4 group-hover:gap-3 transition-all"
								>
									Leia na íntegra
									<ArrowRight size={16} />
								</a>
							</div>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	);
};

export default News;
