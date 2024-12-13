const images = [
  {
    preview: "images/49506663218_8d2fa6467a_k 1.png",
    original: "images/49506663218_8d2fa6467a_k.webp",
    description: "Сіра лисиця",
  },
  {
    preview: "images/foxfb 1.png",
    original: "images/foxfb.webp",
    description: "Руда лисиця взимку, невелика відстань",
  },
  {
    preview: "images/rawImage 1.png",
    original: "images/rawImage.jpg",
    description: "Руда лисиця на фоні блакитного неба",
  },
  {
    preview: "images/Red_Fox3-5c26da63f66828ef993ade7e727a545a 1.png",
    original: "images/Red_Fox3-5c26da63f66828ef993ade7e727a545a.jpg",
    description: "Руда лисиця на зеленому фоні",
  },
  {
    preview: "images/maxresdefault 1.png",
    original: "images/maxresdefault.jpg",
    description: "Довговухі лисиці",
  },
  {
    preview: "images/killingworth-fox-facts 1.png",
    original: "images/killingworth-fox-facts.jpg",
    description: "Руда лисиця, що лежить у полі",
  },
  {
    preview: "images/1_jj818i6pGhnuWjwGOi8v8g 1.png",
    original: "images/1_jj818i6pGhnuWjwGOi8v8g.jpg",
    description: "Руда лисиця, що лежить на снігу",
  },
  {
    preview: "images/ss03 1.png",
    original: "images/ss03.jpg",
    description: "Три лисиці",
  },
  {
    preview: "images/Red-fox-Vulpes-vulpes 1.png",
    original: "images/Red-fox-Vulpes-vulpes.webp",
    description: "Лисиця, що біжить по снігу",
  },
];

const foxGallery = document.querySelector(".gallery");

images.forEach((image) => {
  const listElement = document.createElement("li");
  const imgElement = document.createElement("img");

  imgElement.src = image.preview;
  imgElement.alt = image.description;
  imgElement.setAttribute("data-source", image.original);

  listElement.appendChild(imgElement);
  foxGallery.appendChild(listElement);
});

foxGallery.addEventListener("click", function (event) {
  let target = event.target;
  if (target.tagName != "IMG") return;
  const imageLink = target.getAttribute("data-source");
  const imageAlt = target.alt;
  console.log(imageLink);

  const instance = basicLightbox.create(`
    <div style="display: flex; flex-direction: column; align-items: center;">
      <img src="${imageLink}" alt="${imageAlt}" style="max-width: 90%; max-height: 90vh;" />
      <p style="margin-top: 10px; font-size: 18px; color:white">${imageAlt}</p>
    </div>
  `);

  instance.show();
});
