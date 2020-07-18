import {Context} from "react";
import {Theme} from "@material-ui/core";

export interface Settings {
    direction: string,
    responsiveFontSizes: true,
    theme: string
}

export interface CustomTheme extends Theme {
    name: string
}