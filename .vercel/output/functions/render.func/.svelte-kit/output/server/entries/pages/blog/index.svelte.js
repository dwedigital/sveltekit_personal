import { c as create_ssr_component, b as each, e as escape } from "../../../_app/immutable/chunks/index-511472e1.js";
async function load({ fetch }) {
  const res = await fetch("/api/blog");
  return { props: { posts: await res.json() } };
}
const Blog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  console.log(posts);
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  return `<div>${each(posts["data"], (post) => {
    return `<p>${escape(post.attributes.Title)}</p>
        <p>${escape(post.attributes.content)}</p>`;
  })}</div>`;
});
export {
  Blog as default,
  load
};
