export const configuration = () => ({
	port: process.env.EXPRESS_PORT || 3000,
	env: process.env.NODE_ENV
});
