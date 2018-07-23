/**
 * @api {get} /users/current returns Rentals List if is success
 *
 * @apiName List Rentals
 *
 * @apiSuccess success: true {Array} Rentals Items List
 *
 * @apiError (400) {String} message Validation error
 *
 * @apiError (404) {String} Not Found
 */
exports.list = (req, res) => {
    res.json({
        success: true
    });
};