import { PlayerActor } from "./actor.mjs";
import { SorcererData } from "./data-models.mjs"

Hooks.once("init", () => {
    CONFIG.Actor.dataModels.character = SorcererData;
    CONFIG.Actor.documentClass = PlayerActor
})