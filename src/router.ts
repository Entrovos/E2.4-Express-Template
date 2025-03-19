import { Router } from "express";
import {
	createPokemon,
	deletePokemon,
	getAllPokemon,
	getOnePokemon,
	updatePokemon,
} from "./controller";

const pokemonRouter: Router = Router();

/**
 * * Route registration is the process of adding a route to the routes object.
 * Populate the routes object by placing function references,
 */
pokemonRouter.get("/", getAllPokemon);

/** * TODO: route the end points to the controller functions. */
pokemonRouter.get("/:id", getOnePokemon);

pokemonRouter.post("/", createPokemon);

pokemonRouter.put("/:id", updatePokemon);

pokemonRouter.delete("/:id", deletePokemon);

export default pokemonRouter;
