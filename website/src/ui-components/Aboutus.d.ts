/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AboutusOverridesProps = {
    Aboutus?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 68"?: PrimitiveOverrideProps<ViewProps>;
    "Rutgers ECE Capstone Group 19"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 69"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 70"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 71"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 72"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 73"?: PrimitiveOverrideProps<IconProps>;
    "Andrew King"?: PrimitiveOverrideProps<TextProps>;
    "Ayleen Durasno"?: PrimitiveOverrideProps<TextProps>;
    "Bobby Putra"?: PrimitiveOverrideProps<TextProps>;
    "Kieran Burns"?: PrimitiveOverrideProps<TextProps>;
    "Sunit Pradhan"?: PrimitiveOverrideProps<TextProps>;
    "Back-end/Front-end Development"?: PrimitiveOverrideProps<TextProps>;
    "Front-end Development"?: PrimitiveOverrideProps<TextProps>;
    "Drone Design"?: PrimitiveOverrideProps<TextProps>;
    APDS?: PrimitiveOverrideProps<TextProps>;
    Testing?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type AboutusProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: AboutusOverridesProps | undefined | null;
}>;
export default function Aboutus(props: AboutusProps): React.ReactElement;
