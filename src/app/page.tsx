import { Content } from "@/components/ui/content";
import { Header } from "@/components/ui/header";

export default function Home() {
	return (
		<div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
			<Header className="row-start-1" />
			<Content className="row-start-2" />
		</div>
	);
}
