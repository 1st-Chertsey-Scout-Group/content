module.exports = {
  layout: "sections-page",
  tags:[
    "scouts"
  ],
  eleventyNavigation: {
    parent: "sections-scouts",
    visible: true
  },
  eleventyComputed: {
    eleventyNavigation: {
      title: (data) => data.title,
    },
  },
};
