import { music, send, shield } from "../assets";
import axios from 'axios';

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "developers",
    title: "Developers",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: music,
    title: "Music",
    content:
      "With the music module, you can make your gaming sessions inside voice channels even more enjoyable. You can play music from numerous platforms such as Deezer, Spotify and more!",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Overwatch",
    content:
      "Introducing Overwatch - the ultimate moderation toolkit. With anti-toxicity, anti-scamming, logging and verification systems, keep your server safe and healthy with ease.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Welcome / Goodbye messages",
    content:
      "Say hello and farewell in style with Evelyn's customizable welcome and goodbye system for Discord, featuring fully customizable embeds and messages.",
  },
];

export const footerLinks = [
  {
    title: "Links",
    links: [
      {
        name: "Terms & Services",
        link: "https://www.edgeplaceholder.com/terms-and-services/",
      },
      {
        name: "Privacy Policy",
        link: "https://www.edgeplaceholder.com/terms-and-services/",
      },
    ],
  },
];
