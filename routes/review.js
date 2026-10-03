const express = require("express")
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const reviewController = require("../controllers/reviews.js")
const {isLoggedIn,validateReview,isReviewAuthor}= require("../middleware.js");

//Reviews  // Post route
router.post('/',isLoggedIn,validateReview,wrapAsync(reviewController.createListing));

// Delete Review Route 
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.destroyListing));

module.exports= router;