import { Header } from "@/src/components/Header";
import{Banner} from "@/src/components/Banner";
import { Skills } from "@/src/components/Compétences";
import { Projects } from "@/src/components/Projects";
import { Footer } from "@/src/components/footer";
export default function Page() {
  return (
    <div>
      <Header />
      <Banner/>
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}