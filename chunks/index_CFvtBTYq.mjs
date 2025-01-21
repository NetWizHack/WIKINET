import { F as Fragment, _ as __astro_tag_component__, i as createVNode } from './astro/server_rZJFFFQ_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_C2jiMGov.mjs';
import 'clsx';

const frontmatter = {
  "title": "Bienvenido a la WIKINET",
  "description": "Sitio web donde encontrar documentación de servicios de red",
  "template": "splash",
  "hero": {
    "tagline": "Sitio web donde encontrar documentación de servicios de red",
    "image": {
      "file": "../../assets/houston.webp"
    },
    "actions": [{
      "text": "WIKI",
      "link": "/m8/dns/",
      "icon": "right-arrow"
    }]
  }
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  return createVNode(Fragment, {});
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}

const url = "src/content/docs/index.mdx";
const file = "/root/M7_doc/src/content/docs/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/root/M7_doc/src/content/docs/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
