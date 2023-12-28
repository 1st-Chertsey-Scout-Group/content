module.exports = {
  layout: "sections-page",
  tags:[
    "squirrels"
  ],
  eleventyNavigation: {
    parent: "sections-squirrels",
    visible: true
  },
  eleventyComputed: {
    eleventyNavigation: {
      title: (data) => data.title,
    },
  },
};
