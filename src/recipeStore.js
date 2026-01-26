import {create} from 'zustand'

export const useRecipeStore = create((set)=>({
    recipes : [],
    search : '',

    addRecipe : (newRecipe)=>set((state)=>({recipes: [...state.recipes, newRecipe]})),
    setRecipe : (recipes)=>set(()=>({recipes})),
    setSearch : (term)=>set({search: term })
}))

