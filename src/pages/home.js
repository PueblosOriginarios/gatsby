import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Page } from "../components/Page/index";
import useHome from "../hooks/useHome";
import { Seo } from "../components/seo";

// dynamic zone components
import {
  Banner,
  BannerDoble,
  Hero,
  DualSymmetric,
  DualAsymmetric,
  Vigentes,
  CarouselImages,
} from "../components/index";

const bodyComponents = {
  banner: (data) => <Banner data={data} key={data?.id} />,
  bannerDoble: (data) => <BannerDoble data={data} key={data?.id} />,
  hero: (data) => <Hero data={data} key={data?.id} />,
  dualSymmetric: (data) => <DualSymmetric data={data} key={data?.id} />,
  dualAsymmetric: (data) => <DualAsymmetric data={data} key={data?.id} />,
  vigentes: (data) => <Vigentes data={data} key={data?.id} />,
  carousel: (data) => <CarouselImages data={data} key={data?.id} />,
};

export default function Home() {
  const dynamicZone = useHome().allSanityHome.nodes[0]?.HomeBuilder;

  return (
    <>
      <Seo title='Home' description='' keywords='' />
      <Page>
        {dynamicZone?.map((component) => {
          return bodyComponents[component?._type]
            ? bodyComponents[component._type](component)
            : null;
        })}
      </Page>
    </>
  );
}
