import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const clientLogos = [
	{ name: "Empresa 1", initials: "E1" },
	{ name: "Empresa 2", initials: "E2" },
	{ name: "Empresa 3", initials: "E3" },
	{ name: "Empresa 4", initials: "E4" },
	{ name: "Empresa 5", initials: "E5" },
	{ name: "Empresa 6", initials: "E6" },
	{ name: "Empresa 7", initials: "E7" },
	{ name: "Empresa 8", initials: "E8" },
];

const Clients = () => {
	return (
		<section id="clientes" className="py-16">
			<div className="container-custom">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="text-center mb-16"
					>
						<span className="block text-primary font-bold text-xs uppercase tracking-widest mb-2">
							Nossos Clientes
						</span>
						<h2 className="font-display text-3xl md:text-4xl font-extrabold text-primary mb-3">
							Empresas que <span className="text-gold">confiam em nós</span>
						</h2>
						<p className="mx-auto max-w-xl text-base md:text-lg text-secondary-foreground/90 font-normal">
							Temos orgulho de ser parceiros de empresas de diversos segmentos, contribuindo para seu crescimento e sucesso
						</p>
					</motion.div>

				<Carousel opts={{ loop: true, align: "start", dragFree: true }} plugins={[Autoplay({ delay: 2500 })]} className="mb-20">
					<CarouselContent>
						{clientLogos.map((client, index) => (
							<CarouselItem key={index} className="basis-1/2 md:basis-1/4 px-2">
								<div className="group flex flex-col items-center justify-center h-32 bg-muted rounded-lg border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
									<div className="w-14 h-14 mx-auto bg-secondary/80 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
										<span className="text-xl font-display font-bold text-muted-foreground group-hover:text-primary transition-colors">
											{client.initials}
										</span>
									</div>
									<span className="text-xs text-muted-foreground mt-2 block opacity-0 group-hover:opacity-100 transition-opacity font-medium tracking-wide">
										{client.name}
									</span>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
		</section>
	);
};

export default Clients;
