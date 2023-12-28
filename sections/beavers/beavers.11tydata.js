module.exports = {
  layout: "sections-page",
  tags:[
    "Beavers"
  ],
  eleventyNavigation: {
    parent: "sections-beavers",
    visible: true
  },
  eleventyComputed: {
    eleventyNavigation: {
      title: (data) => data.title,
    },
  },
};
