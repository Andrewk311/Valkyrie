/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HowitsbuiltOverridesProps = {
    Howitsbuilt?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 68"?: PrimitiveOverrideProps<ViewProps>;
    "How we built it"?: PrimitiveOverrideProps<TextProps>;
    "Vector 41"?: PrimitiveOverrideProps<IconProps>;
    "Vector 42"?: PrimitiveOverrideProps<IconProps>;
    "Vector 43"?: PrimitiveOverrideProps<IconProps>;
    "Vector 44"?: PrimitiveOverrideProps<IconProps>;
    "Vector 45"?: PrimitiveOverrideProps<IconProps>;
    "Vector 46"?: PrimitiveOverrideProps<IconProps>;
    "Vector 47"?: PrimitiveOverrideProps<IconProps>;
    "Vector 48"?: PrimitiveOverrideProps<IconProps>;
    "Vector 49"?: PrimitiveOverrideProps<IconProps>;
    "Vector 50"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type HowitsbuiltProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: HowitsbuiltOverridesProps | undefined | null;
}>;
export default function Howitsbuilt(props: HowitsbuiltProps): React.ReactElement;
