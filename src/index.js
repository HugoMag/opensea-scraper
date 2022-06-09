const basicInfo = require("./functions/basicInfo.js");
const pageInfo = require("./functions/page.js");
const { offers, offersByUrl } = require("./functions/offers.js");
const { offersByScrolling, offersByScrollingByUrl } = require("./functions/offersByScrolling.js");
const rankings = require("./functions/rankings.js");

const OpenseaScraper = {
  basicInfo,
  offers,
  offersByUrl,
  offersByScrolling,
  offersByScrollingByUrl,
  rankings,
  pageInfo,
};

module.exports = OpenseaScraper;

