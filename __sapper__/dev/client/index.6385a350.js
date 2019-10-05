import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, a as space, e as element, t as text, h as claim_space, c as claim_element, b as children, f as claim_text, g as detach_dev, j as attr_dev, l as add_location, m as insert_dev, o as append_dev, n as noop } from './index.a1dc0257.js';

/* src/routes/index.svelte generated by Svelte v3.12.1 */

const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	var t0, h1, t1, t2, figure, img, t3, figcaption, t4;

	const block = {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text("HI NETLIFY!");
			t2 = space();
			figure = element("figure");
			img = element("img");
			t3 = space();
			figcaption = element("figcaption");
			t4 = text("A fly, more specifically, a netflify ;D");
			this.h();
		},

		l: function claim(nodes) {
			t0 = claim_space(nodes);

			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t1 = claim_text(h1_nodes, "HI NETLIFY!");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);

			figure = claim_element(nodes, "FIGURE", { class: true }, false);
			var figure_nodes = children(figure);

			img = claim_element(figure_nodes, "IMG", { alt: true, src: true, class: true }, false);
			var img_nodes = children(img);

			img_nodes.forEach(detach_dev);
			t3 = claim_space(figure_nodes);

			figcaption = claim_element(figure_nodes, "FIGCAPTION", {}, false);
			var figcaption_nodes = children(figcaption);

			t4 = claim_text(figcaption_nodes, "A fly, more specifically, a netflify ;D");
			figcaption_nodes.forEach(detach_dev);
			figure_nodes.forEach(detach_dev);
			this.h();
		},

		h: function hydrate() {
			document.title = "Sapper project template";
			attr_dev(h1, "class", "svelte-1kk9opm");
			add_location(h1, file, 38, 0, 444);
			attr_dev(img, "alt", "cartoon fly");
			attr_dev(img, "src", "https://www.clipartwiki.com/clipimg/detail/238-2383171_flying-clipart-cute-cute-fly-clipart.png");
			attr_dev(img, "class", "svelte-1kk9opm");
			add_location(img, file, 41, 1, 476);
			add_location(figcaption, file, 42, 1, 603);
			attr_dev(figure, "class", "svelte-1kk9opm");
			add_location(figure, file, 40, 0, 466);
		},

		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h1, anchor);
			append_dev(h1, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, figure, anchor);
			append_dev(figure, img);
			append_dev(figure, t3);
			append_dev(figure, figcaption);
			append_dev(figcaption, t4);
		},

		p: noop,
		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach_dev(t0);
				detach_dev(h1);
				detach_dev(t2);
				detach_dev(figure);
			}
		}
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment.name, type: "component", source: "", ctx });
	return block;
}

class Index extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment, safe_not_equal, []);
		dispatch_dev("SvelteRegisterComponent", { component: this, tagName: "Index", options, id: create_fragment.name });
	}
}

export default Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNjM4NWEzNTAuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
