module.exports = {
  layout: "sections-page",
  tags:[
    "young-leaders"
  ],
  eleventyNavigation: {
    parent: "sections-young-leaders",
    visible: true
  },
  eleventyComputed: {
    eleventyNavigation: {
      title: (data) => data.title,
    },
  },
};
