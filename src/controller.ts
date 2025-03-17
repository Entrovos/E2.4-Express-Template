import { Request, Response } from "express";
import { database, Pokemon } from "./model";

/**
 * TODO: Copy the route handling logic from the previous exercise
 * into these functions. Make the necessary changes on the response of the express module.
 * You will need to use the array from the model.ts file to handle the requests.
 */

// GET /
export const getHome = (req: Request, res: Response) => {
	res.status(200).json({ message: "Hello from the Pokemon Server!" });
};

// GET /pokemon
export const getAllPokemon = (req: Request, res: Response) => {
	const url = new URL(req.url!, `http://${req.headers.host}`);
	const queryParams = url.searchParams;

	if (queryParams.size > 0) {
		const typeFilter = queryParams.get("type");
		const sortBy = queryParams.get("sortBy");

		let result: Pokemon[] = [];

		if (typeFilter) {
			result = database.filter((pokemon) => pokemon.type === typeFilter);
		}

		if (sortBy) {
			result = database.sort((pokemon1, pokemon2) =>
				pokemon1.name < pokemon2.name ? -1 : 1,
			);
		}

		res.status(200).json({ message: "All Pokemon:", payload: result });
	} else {
		res.status(200).json({ message: "All Pokemon:", payload: database });
	}
};

// GET /pokemon/:id
export const getOnePokemon = (req: Request, res: Response) => {
	// Find Pokemon by ID
	const urlParts = req.url.split("/");
	const pokemonId = parseInt(urlParts[2]);

	const foundPokemon = database.find((pokemon) => pokemon.id === pokemonId);

	if (foundPokemon) {
		res.status(200).json({
			message: "Pokemon found",
			payload: foundPokemon,
		});
	} else {
		res.status(400).json({ message: "Pokemon not found" });
	}
};

// POST /pokemon
export const createPokemon = (req: Request, res: Response) => {
	const newPokemon = req.body;
	// Add basic data logic (you'd likely use a database in a real application)
	newPokemon.id = database.length + 1; // Simple ID assignment
	database.push(newPokemon);

	let body = ""; // To store incoming data
	body += chunk.toString();

	res.status(201).json({
		message: "Pokemon created!",
		payload: newPokemon,
	});
};

// PUT /pokemon/:id
export const updatePokemon = (req: Request, res: Response) => {};

// DELETE /pokemon/:id
export const deletePokemon = (req: Request, res: Response) => {};
