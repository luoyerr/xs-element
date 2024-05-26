import type {App , Plugin} from "vue";
import {each} from "lodash-es";


type SFCWithInstall<T> = T & Plugin;

export function makeInstaller(componets:Plugin[]) {
    const installer = (app:App) => each(componets,(c)=> app.use(c))

    return installer as Plugin;
}

export const withInstall = <T>(componets:T)  => {
    (componets as SFCWithInstall<T>).install = (app : App) => {
        const name = (componets as any).name;
        app.component(name,componets as Plugin)
    }
    return componets as SFCWithInstall<T>
}
