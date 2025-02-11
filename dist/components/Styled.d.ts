/// <reference types="react" />
export declare const StyledRoot: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const StyledItem: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const StyledItemWrapper: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const StyledIndicators: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const StyledFiberManualRecordIcon: import("@emotion/styled").StyledComponent<{
    children?: import("react").ReactNode;
    classes?: Partial<import("@mui/material").SvgIconClasses> | undefined;
    color?: "error" | "inherit" | "action" | "disabled" | "success" | "info" | "warning" | "primary" | "secondary" | undefined;
    fontSize?: "small" | "medium" | "inherit" | "large" | undefined;
    htmlColor?: string | undefined;
    inheritViewBox?: boolean | undefined;
    shapeRendering?: string | undefined;
    sx?: import("@mui/material").SxProps<import("@mui/material").Theme> | undefined;
    titleAccess?: string | undefined;
    viewBox?: string | undefined;
} & import("@mui/material/OverridableComponent").CommonProps & Omit<Pick<import("react").SVGProps<SVGSVGElement>, "string" | "filter" | "values" | "fill" | "max" | "type" | "accumulate" | "offset" | "key" | "id" | "media" | "origin" | "height" | "width" | "end" | "name" | "alignmentBaseline" | "baselineShift" | "clip" | "clipPath" | "clipRule" | "color" | "colorInterpolation" | "colorInterpolationFilters" | "cursor" | "direction" | "display" | "dominantBaseline" | "fillOpacity" | "fillRule" | "floodColor" | "floodOpacity" | "fontFamily" | "fontSize" | "fontSizeAdjust" | "fontStretch" | "fontStyle" | "fontVariant" | "fontWeight" | "imageRendering" | "letterSpacing" | "lightingColor" | "markerEnd" | "markerMid" | "markerStart" | "mask" | "opacity" | "order" | "overflow" | "paintOrder" | "pointerEvents" | "rotate" | "scale" | "shapeRendering" | "stopColor" | "stopOpacity" | "stroke" | "strokeDasharray" | "strokeDashoffset" | "strokeLinecap" | "strokeLinejoin" | "strokeMiterlimit" | "strokeOpacity" | "strokeWidth" | "textAnchor" | "textDecoration" | "textRendering" | "transform" | "unicodeBidi" | "visibility" | "wordSpacing" | "writingMode" | "alphabetic" | "hanging" | "ideographic" | "style" | "path" | "method" | "target" | "lang" | "className" | "children" | "tabIndex" | "orientation" | "local" | "x" | "y" | "mathematical" | "azimuth" | "colorRendering" | "glyphOrientationVertical" | "vectorEffect" | "additive" | "crossOrigin" | "href" | "min" | "role" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "accentHeight" | "allowReorder" | "amplitude" | "arabicForm" | "ascent" | "attributeName" | "attributeType" | "autoReverse" | "baseFrequency" | "baseProfile" | "bbox" | "begin" | "bias" | "by" | "calcMode" | "capHeight" | "clipPathUnits" | "colorProfile" | "contentScriptType" | "contentStyleType" | "cx" | "cy" | "d" | "decelerate" | "descent" | "diffuseConstant" | "divisor" | "dur" | "dx" | "dy" | "edgeMode" | "elevation" | "enableBackground" | "exponent" | "externalResourcesRequired" | "filterRes" | "filterUnits" | "focusable" | "format" | "from" | "fx" | "fy" | "g1" | "g2" | "glyphName" | "glyphOrientationHorizontal" | "glyphRef" | "gradientTransform" | "gradientUnits" | "horizAdvX" | "horizOriginX" | "in2" | "in" | "intercept" | "k1" | "k2" | "k3" | "k4" | "k" | "kernelMatrix" | "kernelUnitLength" | "kerning" | "keyPoints" | "keySplines" | "keyTimes" | "lengthAdjust" | "limitingConeAngle" | "markerHeight" | "markerUnits" | "markerWidth" | "maskContentUnits" | "maskUnits" | "mode" | "numOctaves" | "operator" | "orient" | "overlinePosition" | "overlineThickness" | "panose1" | "pathLength" | "patternContentUnits" | "patternTransform" | "patternUnits" | "points" | "pointsAtX" | "pointsAtY" | "pointsAtZ" | "preserveAlpha" | "preserveAspectRatio" | "primitiveUnits" | "r" | "radius" | "refX" | "refY" | "renderingIntent" | "repeatCount" | "repeatDur" | "requiredExtensions" | "requiredFeatures" | "restart" | "result" | "rx" | "ry" | "seed" | "slope" | "spacing" | "specularConstant" | "specularExponent" | "speed" | "spreadMethod" | "startOffset" | "stdDeviation" | "stemh" | "stemv" | "stitchTiles" | "strikethroughPosition" | "strikethroughThickness" | "surfaceScale" | "systemLanguage" | "tableValues" | "targetX" | "targetY" | "textLength" | "to" | "u1" | "u2" | "underlinePosition" | "underlineThickness" | "unicode" | "unicodeRange" | "unitsPerEm" | "vAlphabetic" | "version" | "vertAdvY" | "vertOriginX" | "vertOriginY" | "vHanging" | "vIdeographic" | "viewBox" | "viewTarget" | "vMathematical" | "widths" | "x1" | "x2" | "xChannelSelector" | "xHeight" | "xlinkActuate" | "xlinkArcrole" | "xlinkHref" | "xlinkRole" | "xlinkShow" | "xlinkTitle" | "xlinkType" | "xmlBase" | "xmlLang" | "xmlns" | "xmlnsXlink" | "xmlSpace" | "y1" | "y2" | "yChannelSelector" | "z" | "zoomAndPan" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture"> & {
    ref?: ((instance: SVGSVGElement | null) => void) | import("react").RefObject<SVGSVGElement> | null | undefined;
}, "color" | "fontSize" | "shapeRendering" | "children" | "viewBox" | "sx" | keyof import("@mui/material/OverridableComponent").CommonProps | "htmlColor" | "inheritViewBox" | "titleAccess"> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
export declare const StyledIndicatorIconButton: import("@emotion/styled").StyledComponent<{
    children?: import("react").ReactNode;
    classes?: Partial<import("@mui/material").IconButtonClasses> | undefined;
    color?: "error" | "default" | "inherit" | "success" | "info" | "warning" | "primary" | "secondary" | undefined;
    disabled?: boolean | undefined;
    disableFocusRipple?: boolean | undefined;
    edge?: false | "end" | "start" | undefined;
    size?: "small" | "medium" | "large" | undefined;
    sx?: import("@mui/material").SxProps<import("@mui/material").Theme> | undefined;
} & Omit<{
    action?: import("react").Ref<import("@mui/material").ButtonBaseActions> | undefined;
    centerRipple?: boolean | undefined;
    children?: import("react").ReactNode;
    classes?: Partial<import("@mui/material").ButtonBaseClasses> | undefined;
    disabled?: boolean | undefined;
    disableRipple?: boolean | undefined;
    disableTouchRipple?: boolean | undefined;
    focusRipple?: boolean | undefined;
    focusVisibleClassName?: string | undefined;
    LinkComponent?: import("react").ElementType<any> | undefined;
    onFocusVisible?: import("react").FocusEventHandler<any> | undefined;
    sx?: import("@mui/material").SxProps<import("@mui/material").Theme> | undefined;
    tabIndex?: number | undefined;
    TouchRippleProps?: Partial<import("@mui/material/ButtonBase/TouchRipple").TouchRippleProps> | undefined;
    touchRippleRef?: import("react").Ref<import("@mui/material/ButtonBase/TouchRipple").TouchRippleActions> | undefined;
}, "classes"> & import("@mui/material/OverridableComponent").CommonProps & Omit<Pick<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "key" | keyof import("react").ButtonHTMLAttributes<HTMLButtonElement>> & {
    ref?: ((instance: HTMLButtonElement | null) => void) | import("react").RefObject<HTMLButtonElement> | null | undefined;
}, "color" | "action" | "children" | "tabIndex" | "disabled" | "size" | "sx" | "onFocusVisible" | keyof import("@mui/material/OverridableComponent").CommonProps | "centerRipple" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "TouchRippleProps" | "touchRippleRef" | "disableFocusRipple" | "edge"> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme> & {
    $active: boolean;
}, {}, {}>;
export declare const StyledIconButton: import("@emotion/styled").StyledComponent<{
    children?: import("react").ReactNode;
    classes?: Partial<import("@mui/material").IconButtonClasses> | undefined;
    color?: "error" | "default" | "inherit" | "success" | "info" | "warning" | "primary" | "secondary" | undefined;
    disabled?: boolean | undefined;
    disableFocusRipple?: boolean | undefined;
    edge?: false | "end" | "start" | undefined;
    size?: "small" | "medium" | "large" | undefined;
    sx?: import("@mui/material").SxProps<import("@mui/material").Theme> | undefined;
} & Omit<{
    action?: import("react").Ref<import("@mui/material").ButtonBaseActions> | undefined;
    centerRipple?: boolean | undefined;
    children?: import("react").ReactNode;
    classes?: Partial<import("@mui/material").ButtonBaseClasses> | undefined;
    disabled?: boolean | undefined;
    disableRipple?: boolean | undefined;
    disableTouchRipple?: boolean | undefined;
    focusRipple?: boolean | undefined;
    focusVisibleClassName?: string | undefined;
    LinkComponent?: import("react").ElementType<any> | undefined;
    onFocusVisible?: import("react").FocusEventHandler<any> | undefined;
    sx?: import("@mui/material").SxProps<import("@mui/material").Theme> | undefined;
    tabIndex?: number | undefined;
    TouchRippleProps?: Partial<import("@mui/material/ButtonBase/TouchRipple").TouchRippleProps> | undefined;
    touchRippleRef?: import("react").Ref<import("@mui/material/ButtonBase/TouchRipple").TouchRippleActions> | undefined;
}, "classes"> & import("@mui/material/OverridableComponent").CommonProps & Omit<Pick<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "key" | keyof import("react").ButtonHTMLAttributes<HTMLButtonElement>> & {
    ref?: ((instance: HTMLButtonElement | null) => void) | import("react").RefObject<HTMLButtonElement> | null | undefined;
}, "color" | "action" | "children" | "tabIndex" | "disabled" | "size" | "sx" | "onFocusVisible" | keyof import("@mui/material/OverridableComponent").CommonProps | "centerRipple" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "TouchRippleProps" | "touchRippleRef" | "disableFocusRipple" | "edge"> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme> & {
    $alwaysVisible: boolean;
    $fullHeightHover: boolean;
}, {}, {}>;
export declare const StyledButtonWrapper: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme> & {
    $next: boolean;
    $prev: boolean;
    $fullHeightHover: boolean;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
