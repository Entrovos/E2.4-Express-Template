import { Request, Response } from "express";
import { database } from "./model";

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
export const getAllPokemon = (req: Request, res: Response) => {};

// GET /pokemon/:id
export const getOnePokemon = (req: Request, res: Response) => {};

// POST /pokemon
export const createPokemon = (req: Request, res: Response) => {};

// PUT /pokemon/:id
export const updatePokemon = (req: Request, res: Response) => {};

// DELETE /pokemon/:id
export const deletePokemon = (req: Request, res: Response) => {};
