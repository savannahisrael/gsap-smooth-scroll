gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
  smooth: 2 });


const LOGO = document.querySelector(".menu__logo");
const HERO = document.querySelector(".hero");
const TEXT_REVEALS = [...document.querySelectorAll(".text-reveal")];
const LINE_1 = document.querySelector(".text-1");
const LINE_2 = document.querySelector(".text-2");
const LINE_3 = document.querySelector(".text-3");
const IMAGE_ZOOM_TRIGGER = document.querySelector(".natural");
const IMAGE_ZOOM_IMAGE = document.querySelector(".natural__background");
const IMAGE_ZOOM_CONTENT = document.querySelector(".natural__content");
const BG_X = [...document.querySelectorAll(".bg--x")];
const BG_Y = [...document.querySelectorAll(".bg--y")];

const IMAGES_1 = [...document.querySelectorAll(".locations--image-1 img")];
const IMAGES_2 = [...document.querySelectorAll(".locations--image-2 img")];
const IMAGES_3 = [...document.querySelectorAll(".locations--image-3 img")];
const IMAGES_4 = [...document.querySelectorAll(".locations--image-4 img")];
const IMAGES_5 = [...document.querySelectorAll(".locations--image-5 img")];
const TITLES = [...document.querySelectorAll(".locations__titles span")];
const LOCATIONS_BACKGROUND = document.querySelector(".locations__location");

const setInitialStates = () => {
  gsap.set(LOGO, { y: "-22rem", scale: 8 });
  gsap.set(IMAGE_ZOOM_CONTENT, { y: 40, opacity: 0 });
  gsap.set([TITLES[1], TITLES[2]], { y: "100%" });
  gsap.set(
  [
  IMAGES_1[1],
  IMAGES_2[1],
  IMAGES_3[1],
  IMAGES_4[1],
  IMAGES_5[1],
  IMAGES_1[2],
  IMAGES_2[2],
  IMAGES_3[2],
  IMAGES_4[2],
  IMAGES_5[2]],

  {
    scale: 1.5,
    y: 150 });


};

const animateLogo = () => {
  const tl = gsap.timeline();

  tl.to(LOGO, {
    y: 0,
    scale: 1,
    scrollTrigger: {
      trigger: HERO,
      start: "top top",
      end: "bottom top",
      scrub: 0.5 } });



  return tl;
};

const textReveal = () => {
  TEXT_REVEALS.forEach(text => {
    const span = text.getElementsByTagName("span")[0];
    gsap.to(span, {
      y: 0,
      scrollTrigger: {
        trigger: span,
        start: "top bottom-=10%",
        end: "+=500",
        scrub: true } });


  });
};

const imageZoom = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: IMAGE_ZOOM_TRIGGER,
      start: "top top",
      end: "+=1500",
      pin: true,
      scrub: true } });



  tl.to(BG_X, {
    scaleX: 0 }).

  to(
  BG_Y,
  {
    scaleY: 0 },

  0).

  to(
  IMAGE_ZOOM_IMAGE,
  {
    scale: 1 },

  0).

  to(
  IMAGE_ZOOM_CONTENT,
  {
    y: 0,
    opacity: 1 },

  "-=70%");


  return tl;
};

const lineAnimation = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: LINE_1,
      start: "top+=200px bottom",
      end: "top top",
      scrub: true } });



  const overlay1 = LINE_1.getElementsByTagName("div")[0];
  const overlay2 = LINE_2.getElementsByTagName("div")[0];
  const overlay3 = LINE_3.getElementsByTagName("div")[0];

  tl.to(overlay1, {
    scaleX: 0 }).

  to(overlay2, {
    scaleX: 0 }).

  to(overlay3, {
    scaleX: 0 });


  return tl;
};

const locationsAnimation = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".locations__location",
      start: "top top",
      end: "+=1500",
      pin: true,
      scrub: true } });



  tl.addLabel("first").
  to(TITLES[0], {
    y: "-100%" }).

  to(
  TITLES[1],
  {
    y: 0 },

  0).

  addLabel("second").
  to(TITLES[1], {
    y: "-100%" }).

  to(
  TITLES[2],
  {
    y: 0 },

  "<").

  to(
  IMAGES_1[0],
  {
    y: "-110%",
    scale: 1.1 },

  "first").

  to(
  IMAGES_2[0],
  {
    y: "-110%",
    scale: 1.1 },

  "first").

  to(
  IMAGES_3[0],
  {
    y: "-110%",
    scale: 1.1 },

  "first").

  to(
  IMAGES_4[0],
  {
    y: "-110%",
    scale: 1.1 },

  "first").

  to(
  IMAGES_5[0],
  {
    y: "-110%",
    scale: 1.1 },

  "first").

  to(
  IMAGES_1[1],
  {
    y: 0,
    scale: 1 },

  "first").

  to(
  IMAGES_2[1],
  {
    y: 0,
    scale: 1 },

  "first").

  to(
  IMAGES_3[1],
  {
    y: 0,
    scale: 1 },

  "first").

  to(
  IMAGES_4[1],
  {
    y: 0,
    scale: 1 },

  "first").

  to(
  IMAGES_5[1],
  {
    y: 0,
    scale: 1 },

  "first").

  to(
  IMAGES_1[1],
  {
    y: "-110%",
    scale: 1.1 },

  "second").

  to(
  IMAGES_2[1],
  {
    y: "-110%",
    scale: 1.1 },

  "second").

  to(
  IMAGES_3[1],
  {
    y: "-110%",
    scale: 1.1 },

  "second").

  to(
  IMAGES_4[1],
  {
    y: "-110%",
    scale: 1.1 },

  "second").

  to(
  IMAGES_5[1],
  {
    y: "-110%",
    scale: 1.1 },

  "second").


  to(
  IMAGES_1[2],
  {
    y: 0,
    scale: 1 },

  "second").

  to(
  IMAGES_2[2],
  {
    y: 0,
    scale: 1 },

  "second").

  to(
  IMAGES_3[2],
  {
    y: 0,
    scale: 1 },

  "second").

  to(
  IMAGES_4[2],
  {
    y: 0,
    scale: 1 },

  "second").

  to(
  IMAGES_5[2],
  {
    y: 0,
    scale: 1 },

  "second").

  to(
  LOCATIONS_BACKGROUND,
  {
    backgroundColor: "#cedae0" },

  "first").

  to(
  LOCATIONS_BACKGROUND,
  {
    backgroundColor: "#d4e0cf" },

  "second");


  return tl;
};

const master = gsap.timeline();

master.
add(setInitialStates()).
add(animateLogo()).
add(textReveal()).
add(imageZoom()).
add(lineAnimation()).
add(locationsAnimation());