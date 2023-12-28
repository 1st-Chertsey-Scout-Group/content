module.exports = {
  layout: "sections-page",
  tags:[
    "cubs"
  ],
  eleventyNavigation: {
    parent: "sections-cubs",
    visible: true
  },
  eleventyComputed: {
    eleventyNavigation: {
      title: (data) => data.title,
    },
  },
};
