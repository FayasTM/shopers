import Container from "@/components/Container";
import Image from "next/image";
import Banner from "@/components/Banner";
import Facilities from "@/components/Facilities";
import ProductList from "@/components/ProductList";
import Load from "@/components/Load";

export default function Home() {
  return (
    <Container className="py-10">
       {/* <Load title="Loading"/> */}
        <Banner />
        <Facilities />
        <ProductList />
    </Container>
  );
}
