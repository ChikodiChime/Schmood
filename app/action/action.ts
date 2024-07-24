"use server"
import prisma from "../utils/connect"

export async function addFood(formData: FormData) {
 
    await prisma.food.create({
        data: {
            name: formData.get('name') as string,
            image: formData.get('image') as string,
            description: formData.get('description') as string,
            selectedTime: formData.getAll('TOD') as string[],
            selectedMood: formData.getAll('mood') as string[]
        }
       
    }) 

}