import million from "million/compiler";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
	base: "/React-Behind-The-Scenes/",
	plugins: [million.vite({ auto: true }), react()],
});
