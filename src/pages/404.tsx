import React from "react";
import { Page } from "../components/Page";
import { Link } from "gatsby";
import { Section } from "../components/Section";
import { Seo } from "../components/seo";

export default function NotFoundPage(): React.ReactElement {
  return (
    <>
      <Seo title='404: Not found' description='' keywords='' />
      <Page>
        <Section heading='Página No encontrada' anchor='404'>
          <Link
            to={`/`}
          >
            Volver al inicio
          </Link>
        </Section>
      </Page>
    </>
  );
}
