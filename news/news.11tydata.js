const dateFilter = require("../../../code/filters/date.filter");
const pageKeyFilter = require("../../../code/filters/page-key.filter");
const parentKeyFilter = require("../../../code/filters/parent-key.filter");


module.exports = {
  layout: "news-page",
  draft: false,
  thumbnail: "/assets/images/logo.png",
  eleventyComputed: {
    subtitle: data => `${dateFilter(data.date, "dS mmmm yyyy")} | by ${data.author}`,
    eleventyNavigation: {
      key: data => `${pageKeyFilter(data.date)}- ${data.title}`,
      parent: data => `${parentKeyFilter(data.date)}`,
      title: data => data.title
    }
    
  },
};