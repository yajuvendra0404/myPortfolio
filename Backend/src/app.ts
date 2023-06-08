
// **** app initializations **** //

import "reflect-metadata";
import { InitializeApp }  from "./server/initializeApp.js";
import { InjectionToken, container, registry } from "tsyringe";

registry([
        {token: "InitializeApp", useClass: InitializeApp}, // can be any provider
])

const startApp = () => {

    console.log("-----app starting -------------");
    container.resolve<InitializeApp>(InitializeApp);
    console.log("-----app started -------------");

}

startApp()


