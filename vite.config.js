import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			// eslint-disable-next-line no-undef
			"@": resolve(__dirname, "./src"),
			// eslint-disable-next-line no-undef
			"!": resolve(__dirname, "./content"),
		},
	},
});
