import express from 'express';
import cors from 'cors';
import { 
    addRestaurant, 
    getAllRestaurants,
    getRestaurantById, 
    updateRestaurant,
    deleteRestaurant 
} from "./src/restaurants.js";

const PORT = 3030;

const app = express();
app.use(cors());
app.use(express.json());    // allow the patch and update send the body in JSON format

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})

// - API ENDPOINTS - API ROUTES

app.post('/restaurants', addRestaurant);
app.get('/restaurants', getAllRestaurants);
app.get('/restaurants/:restaurantId', getRestaurantById);
app.patch('/restaurants/:restaurantId', updateRestaurant);
app.delete('/restaurants/:restaurantId', deleteRestaurant);
