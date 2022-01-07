const context = {
  title: "Welcome to Musicon",
  body: "Musicon is a budding musical storefront with a mission to share the joy of music. These magnificent auditory tools are designed with musical creators, like you, in mind. Hobbyists, beginners, and experts alike can appreciate the resplendent sounds supplied by each and every instrument we carry. Join us in delivering the euphoric vibrations of melodia to the citizens of the world!",
  instruments: [
    {
      image:
        "https://content.codecademy.com/courses/learn-handlebars/musicon/electronic-keyboard.png",
      name: "Electronic Keyboard",
      description:
        "A piano welcomed to the 21th century. Pianists celebrate the compact form factor and the diversity of synthesized rhythms all in one masterful musical machine.",
      
    },
  ],
};

const templateElement = document.getElementById("templateHB"); // get the template element

const templateSource = templateElement.innerHTML; // get the template source

const template = Handlebars.compile(templateSource); // compile the template

const compiledHtml = template(context); // compile the template with data

document.getElementById('information').innerHTML = compiledHtml; // insert the compiled html into the DOM