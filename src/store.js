import React, { createContext, useState } from "react";

// Membuat konteks global
export const GlobalContext = createContext();

// Membuat komponen penyedia konteks
export const GlobalProvider = ({ children }) => {
  const [images, setImages] = useState([
    {
      id: 1,
      image: "assets/img/artist/harry.webp",
      name: "Harry Styles",
      kategori: "Music",
    },
    {
      id: 2,
      image: "assets/img/artist/zayn.webp",
      name: "Zayn Malik",
      kategori: "Music",
    },
    {
      id: 3,
      image: "assets/img/artist/louis.jpg",
      name: "Louis Tomlinson",
      kategori: "Music",
    },
    {
      id: 4,
      image: "assets/img/artist/liam.jpg",
      name: "Liam Payne",
      kategori: "Music",
    },
    {
      id: 5,
      image: "assets/img/artist/niall.webp",
      name: "Niall Horan",
      kategori: "Music",
    },
    {
      id: 6,
      image: "assets/img/artist/charlie.jpg",
      name: "Charlie Puth",
      kategori: "Music",
    },
    {
      id: 7,
      image: "assets/img/artist/justin.jpg",
      name: "Justin Beiber",
      kategori: "Music",
    },
    {
      id: 8,
      image: "assets/img/atlet/cristiano-ronaldo.jpeg",
      name: "Cristiano Ronaldo",
      kategori: "Sport",
    },
    {
      id: 9,
      image: "assets/img/atlet/messi.webp",
      name: "Lionel Messi",
      kategori: "Sport",
    },
    {
      id: 10,
      image: "assets/img/atlet/neymar.jpg",
      name: "Neymar JR",
      kategori: "Sport",
    },
    {
      id: 11,
      image: "assets/img/atlet/mbappe.jpg",
      name: "Kylian Mbappe",
      kategori: "Sport",
    },
    {
      id: 12,
      image: "assets/img/atlet/haaland.jpg",
      name: "Erling Haaland",
      kategori: "Sport",
    },
    {
      id: 13,
      image: "assets/img/atlet/irfan.jpg",
      name: "Irfan Bahcdim",
      kategori: "Sport",
    },
    {
      id: 14,
      image: "assets/img/anime/boruto.jpg",
      name: "Boruto Uzumaki",
      kategori: "Anime",
    },
    {
      id: 15,
      image: "assets/img/anime/Kawaki.webp",
      name: "Kawaki Uzumaki KW",
      kategori: "Anime",
    },
    {
      id: 16,
      image: "assets/img/anime/sarada.jpg",
      name: "Sarada Uchiha",
      kategori: "Anime",
    },
    {
      id: 17,
      image: "assets/img/anime/mitsuki.jpg",
      name: "Mitsuki",
      kategori: "Anime",
    },
    {
      id: 18,
      image: "assets/img/anime/naruto.webp",
      name: "Uzumaki Naruto",
      kategori: "Anime",
    },
    {
      id: 19,
      image: "assets/img/anime/sasuke.jpg",
      name: "Uchiha Sasuke",
      kategori: "Anime",
    },
    {
      id: 20,
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
