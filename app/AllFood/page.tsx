import prisma from "../utils/connect";

   export default async function page() {
    const foods = await prisma.food.findMany()


    return (
        <div>
            {
                foods.map(food => (
                    <div key={food.id}>
                        <p>{food.image}</p>
                        <p>{food.name}</p>
                        <p>{food.description}</p>
                        <p>{food.selectedMood}</p>
                        <p>{food.selectedTime}</p>
                    </div>
                ))
            }
        </div>
    );
   }
