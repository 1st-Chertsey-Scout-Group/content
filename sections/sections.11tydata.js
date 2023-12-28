module.exports = {
    layout: "sections-page",
    eleventyNavigation: {
      parent: "sections",
      visible: true
    },
    eleventyComputed: {
      eleventyNavigation: {
        title: (data) => data.title,
      },
    },
  };
  