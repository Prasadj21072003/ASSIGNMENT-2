import Seventhsection from "@/components/Seventhsection";
import Fourthsection from "@/components/Fourthsection";
import Nav from "@/components/Nav";
import Secondsection from "@/components/Secondsection";
import Sixthsection from "@/components/Sixthsection";
import Fifthsection from "@/components/Fifthsection";
import Thirdsection from "@/components/Thirdsection";
import Topsection from "@/components/Topsection";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-between 2xl:pl-[120px] md:py-[30px] py-[20px] px-[5px]">
      <div className=" h-full w-full overflow-x-hidden relative">
        <Nav />
        <Topsection />
        <Secondsection />
        <Thirdsection />
        <Fourthsection />
        <Fifthsection />
        <Sixthsection />
        <Seventhsection />
      </div>
    </main>
  );
}
