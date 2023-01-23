module.exports = {
    // options...
    devServer: {
        disableHostCheck: true
    },
    publicPath: process.env.NODE_ENV === "production" ? "/v-day-proj-v2/" : "/"
};
