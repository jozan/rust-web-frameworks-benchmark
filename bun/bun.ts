Bun.serve({
    fetch() {
        return new Response("hello world");
    },
    port: 8080,
});

