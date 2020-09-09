import * as PIXI from "pixi.js";
interface TextStyle {
    align?: string;
    breakWords?: boolean;
    dropShadow?: boolean;
    dropShadowAlpha?: number;
    dropShadowAngle?: number;
    dropShadowBlur?: number;
    dropShadowColor?: string | number;
    dropShadowDistance?: number;
    fill?: string | string[] | number | number[] | CanvasGradient | CanvasPattern;
    fillGradientType?: number;
    fillGradientStops?: number[];
    fontFamily?: string | string[];
    fontSize?: number | string;
    fontStyle?: string;
    fontVariant?: string;
    fontWeight?: string;
    leading?: number;
    letterSpacing?: number;
    lineHeight?: number;
    lineJoin?: string;
    miterLimit?: number;
    padding?: number;
    stroke?: string | number;
    strokeThickness?: number;
    trim?: boolean;
    textBaseline?: string;
    whiteSpace?: string;
    wordWrap?: boolean;
    wordWrapWidth?: number;
}
export interface TextStyleExtended extends TextStyle {
    valign?: "top" | "middle" | "bottom" | "baseline" | number;
    debug?: boolean;
    tagStyle?: "xml" | "bbcode";
}
export interface TextStyleSet {
    [key: string]: TextStyleExtended;
}
export interface MstDebugOptions {
    spans: {
        enabled?: boolean;
        baseline?: string;
        top?: string;
        bottom?: string;
        bounding?: string;
        text?: boolean;
    };
    objects: {
        enabled?: boolean;
        bounding?: string;
        text?: boolean;
    };
}
export interface TagData {
    name: string;
    properties: {
        [key: string]: string;
    };
}
export interface MstInteractionEvent extends PIXI.interaction.InteractionEvent {
    targetTag: TagData;
}
export default class MultiStyleText extends PIXI.Text {
    private static DEFAULT_TAG_STYLE;
    static debugOptions: MstDebugOptions;
    private textStyles;
    private hitboxes;
    constructor(text: string, styles: TextStyleSet);
    private handleInteraction;
    set styles(styles: TextStyleSet);
    setTagStyle(tag: string, style: TextStyleExtended): void;
    deleteTagStyle(tag: string): void;
    private getTagRegex;
    private getPropertyRegex;
    private getBBcodePropertyRegex;
    private _getTextDataPerLine;
    private getFontString;
    private createTextData;
    private getDropShadowPadding;
    private withPrivateMembers;
    updateText(): void;
    protected wordWrap(text: string): string;
    protected updateTexture(): void;
    private assign;
}
export {};
