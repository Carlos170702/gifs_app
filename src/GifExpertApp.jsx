import { useState } from "react"
import { AddCategory, GifGrid } from "./Components";
import { NavBar } from "./Components/NavBar";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Dragon Ball Z'])

  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);

  }

  return (
    <>
      <NavBar />

      <AddCategory onAddCategory={onAddCategory} />

      {
        categories.map((category) => (
          <GifGrid
            key={category}
            category={category}
          />
        ))
      }
    </>
  )
}
