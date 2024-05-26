import {makeInstaller} from '@xs-element/utils'

import components from "./components.ts";
import "@xs-element/theme/index.css"
const installer = makeInstaller(components)

export * from "@xs-element/components"
export default installer;
