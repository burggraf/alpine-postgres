import { c as create_ssr_component, e as escape } from "../../chunks/index.js";
import "@ionic/core";
import "../../chunks/platform.js";
import "ionicons/icons";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".header_col.svelte-cvgm1{font-weight:bold}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<ion-header><ion-toolbar translucent="${"true"}"><ion-buttons slot="${"start"}"><ion-menu-button></ion-menu-button></ion-buttons>
		<ion-title>Main Page</ion-title></ion-toolbar></ion-header>
<ion-content class="${"ion-padding"}"><h3>PostgreSQL: ${escape("Not installed")}</h3>

	${`<ion-button expand="${"block"}" size="${"small"}" fill="${"outline"}">Install PostgreSQL 15</ion-button>

		<ion-button expand="${"block"}" size="${"small"}" fill="${"outline"}">Install PostgreSQL 14</ion-button>

		<ion-button expand="${"block"}" size="${"small"}" fill="${"outline"}">Install PostgreSQL 13</ion-button>

		<ion-button expand="${"block"}" size="${"small"}" fill="${"outline"}">Install PostgreSQL 12</ion-button>`}

	${``}

	<pre id="${"output"}"></pre>
	
</ion-content>`;
});
export {
  Page as default
};
