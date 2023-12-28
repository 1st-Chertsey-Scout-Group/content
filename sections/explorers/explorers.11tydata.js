module.exports = {
  layout: "sections-page",
  tags:[
    "explorers"
  ],
  eleventyNavigation: {
    parent: "sections-explorers",
    visible: true
  },
  eleventyComputed: {
    eleventyNavigation: {
      title: (data) => data.title,
    },
  },
};
