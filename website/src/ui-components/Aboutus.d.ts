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
    "About us"?: PrimitiveOverrideProps<TextProps>;
    "Vector 35"?: PrimitiveOverrideProps<IconProps>;
    "Vector 36"?: PrimitiveOverrideProps<IconProps>;
    "Vector 37"?: PrimitiveOverrideProps<IconProps>;
    "Vector 38"?: PrimitiveOverrideProps<IconProps>;
    "Vector 39"?: PrimitiveOverrideProps<IconProps>;
    "Vector 40"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type AboutusProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: AboutusOverridesProps | undefined | null;
}>;
export default function Aboutus(props: AboutusProps): React.ReactElement;
