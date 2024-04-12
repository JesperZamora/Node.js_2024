// writeable is a store that we can write too
import { writable } from "svelte/store"; 

export const fridgeMessages = writable([{message: "Family Fridge Message"}]);
