const config = {
    port: process.env.PORT || 3000,
    databaseUrl: process.env.MONGODB_URI || 'mongodb://DaQa925:q1w2e3r4t5y6@ds123963.mlab.com:23963/tai8',
    JwtSecret: process.env.JWT_SECRET || 'secret'
};

export default config;