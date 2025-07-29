import { source } from "@/lib/source";
import { getPageTreePeers } from "fumadocs-core/server";
import { Popup, PopupContent, PopupTrigger } from "fumadocs-twoslash/ui";
import { Card } from "fumadocs-ui/components/card";
import { Cards } from "fumadocs-ui/components/card";
import { CodeBlock } from "fumadocs-ui/components/codeblock";
import { Pre } from "fumadocs-ui/components/codeblock";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import defaultMdxComponents from "fumadocs-ui/mdx";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/page";

import { notFound } from "next/navigation";

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  const path = `docs/content/docs/${page.file.path}`;

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      tableOfContent={{
        style: "clerk",
      }}
      editOnGithub={{
        repo: "full-calendar",
        owner: "jeraidi-yassir",
        sha: "main",
        path,
      }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX
          components={{
            ...defaultMdxComponents,
            pre: ({ ref: _ref, ...props }) => (
              <CodeBlock keepBackground {...props}>
                <Pre>{props.children}</Pre>
              </CodeBlock>
            ),
            Popup,
            PopupContent,
            PopupTrigger,
            Tabs,
            Tab,
            Steps,
            Step,
            DocsCategory: ({ url }: { url: string }) => (
              <DocsCategory url={url} />
            ),
          }}
        />
      </DocsBody>
    </DocsPage>
  );
}

function DocsCategory({ url }: { url: string }) {
  return (
    <Cards>
      {getPageTreePeers(source.pageTree, url).map((peer) => (
        <Card key={peer.url} title={peer.name} href={peer.url}>
          {peer.description}
        </Card>
      ))}
    </Cards>
  );
}

export function generateStaticParams() {
  return source.generateParams();
}
