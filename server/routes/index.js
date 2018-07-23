module.exports = app => {

    /**
     * @RentalsApiRoutes
     */
    app.use('/api/v1/rentals', require('../api/v1/rentals'));

};