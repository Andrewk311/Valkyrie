/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LandingPageOverridesProps = {
    LandingPage?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 68"?: PrimitiveOverrideProps<ViewProps>;
    logo?: PrimitiveOverrideProps<ViewProps>;
    bottle?: PrimitiveOverrideProps<IconProps>;
    "Valkyrie Landing Page"?: PrimitiveOverrideProps<TextProps>;
    "Vector 33"?: PrimitiveOverrideProps<IconProps>;
    "Vector 34"?: PrimitiveOverrideProps<IconProps>;
    "Drone 1"?: PrimitiveOverrideProps<ImageProps>;
    "TrackOrder 1"?: PrimitiveOverrideProps<ImageProps>;
    "PharmData 1"?: PrimitiveOverrideProps<ImageProps>;
    "PharmDataChart 1"?: PrimitiveOverrideProps<ImageProps>;
    "PresentationPic 1"?: PrimitiveOverrideProps<ImageProps>;
    "StoreFront 1"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type LandingPageProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: LandingPageOverridesProps | undefined | null;
}>;
export default function LandingPage(props: LandingPageProps): React.ReactElement;
