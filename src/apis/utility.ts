import { Genre, RestaurantMap } from '../types';

export function getRestaurantGenres(): string[] {
    return Object.values(Genre)
}