import React, { createContext, useState } from "react";

// Membuat konteks global
export const GlobalContext = createContext();

// Membuat komponen penyedia konteks
export const GlobalProvider = ({ children }) => {
  const [images, setImages] = useState([
    {
      image: "assets/img/artist/harry.webp",
      name: "Harry Styles",
      kategori: "Music",
    },
    {
      image: "assets/img/artist/zayn.webp",
      name: "Zayn Malik",
      kategori: "Music",
    },
    {
      image: "assets/img/artist/louis.jpg",
      name: "Louis Tomlinson",
      kategori: "Music",
    },
    {
      image: "assets/img/artist/liam.jpg",
      name: "Liam Payne",
      kategori: "Music",
    },
    {
      image: "assets/img/artist/niall.webp",
      name: "Niall Horan",
      kategori: "Music",
    },
    {
      image: "assets/img/artist/charlie.jpg",
      name: "Charlie Puth",
      kategori: "Music",
    },
    {
      image: "assets/img/artist/justin.jpg",
      name: "Justin Beiber",
      kategori: "Music",
    },
    {
      image: "assets/img/atlet/cristiano-ronaldo.jpeg",
      name: "Cristiano Ronaldo",
      kategori: "Sport",
    },
    {
      image: "assets/img/atlet/messi.webp",
      name: "Lionel Messi",
      kategori: "Sport",
    },
    {
      image: "assets/img/atlet/neymar.jpg",
      name: "Neymar JR",
      kategori: "Sport",
    },
    {
      image: "assets/img/atlet/mbappe.jpg",
      name: "Kylian Mbappe",
      kategori: "Sport",
    },
    {
      image: "assets/img/atlet/haaland.jpg",
      name: "Erling Haaland",
      kategori: "Sport",
    },
    {
      image: "assets/img/atlet/irfan.jpg",
      name: "Irfan Bahcdim",
      kategori: "Sport",
    },
    {
      image: "assets/img/anime/boruto.jpg",
      name: "Boruto Uzumaki",
      kategori: "Anime",
    },
    {
      image: "assets/img/anime/Kawaki.webp",
      name: "Kawaki Uzumaki KW",
      kategori: "Anime",
    },
    {
      image: "assets/img/anime/sarada.jpg",
      name: "Sarada Uchiha",
      kategori: "Anime",
    },
    {
      image: "assets/img/anime/mitsuki.jpg",
      name: "Mitsuki",
      kategori: "Anime",
    },
    {
      image: "assets/img/anime/naruto.webp",
      name: "Uzumaki Naruto",
      kategori: "Anime",
    },
    {
      image: "assets/img/anime/sasuke.jpg",
      name: "Uchiha Sasuke",
      kategori: "Anime",
    },
    {
      image: "assets/img/anime/eren.jpg",
      name: "Eren Yeager",
      kategori: "Anime",
    },
  ]);

  return (
    <GlobalContext.Provider value={{ images, setImages }}>
      {children}
    </GlobalContext.Provider>
  );
};
