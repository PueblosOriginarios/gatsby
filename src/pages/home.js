import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Page } from "../components/Page/index";
import useHome from "../hooks/useHome";
import { Seo } from "../components/seo";

// dynamic zone components
import {
  Banner,
  BannerDoble,
  DualSymmetric,
  DualAsymmetric,
  CarouselImages,
  TextBlock,
} from "../components/index";

const bodyComponents = {
  banner: (data) => <Banner data={data} key={data?.id} />,
  bannerDoble: (data) => <BannerDoble data={data} key={data?.id} />,
  dualSymmetric: (data) => <DualSymmetric data={data} key={data?.id} />,
  dualAsymmetric: (data) => <DualAsymmetric data={data} key={data?.id} />,
  carousel: (data) => <CarouselImages data={data} key={data?.id} />,
  textBlock: (data) => <TextBlock data={data} key={data?._key} />,
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
