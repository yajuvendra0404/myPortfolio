
// **** app initializations **** //

import "reflect-metadata";
import InitializeApp  from "./server/initializeApp.js";
import {container} from "tsyringe";

const instance = container.resolve(InitializeApp);

