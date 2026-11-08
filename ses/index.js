(() => {
    var __webpack_modules__ = {
        "./node_modules/ses/dist/ses.cjs"() {
            (functors => options => {
                "use strict";
                const {Map: Map, Object: Object, ReferenceError: ReferenceError, Reflect: Reflect, TypeError: TypeError} = globalThis;
                const {create: create, defineProperties: defineProperties, defineProperty: defineProperty, freeze: freeze, fromEntries: fromEntries, getOwnPropertyDescriptors: getOwnPropertyDescriptors, getOwnPropertyNames: getOwnPropertyNames, keys: keys} = Object;
                const {get: get, set: set} = Reflect;
                const {} = options || {};
                const cell = (name, value = undefined) => {
                    const observers = [];
                    return freeze({
                        get: freeze(() => value),
                        set: freeze(newValue => {
                            value = newValue;
                            for (const observe of observers) {
                                observe(value);
                            }
                        }),
                        observe: freeze(observe => {
                            observers.push(observe);
                            observe(value);
                        }),
                        enumerable: true
                    });
                };
                const cells = [ {
                    globalThis: cell("globalThis"),
                    Array: cell("Array"),
                    ArrayBuffer: cell("ArrayBuffer"),
                    Date: cell("Date"),
                    FinalizationRegistry: cell("FinalizationRegistry"),
                    FERAL_FLOAT64_ARRAY: cell("FERAL_FLOAT64_ARRAY"),
                    DataView: cell("DataView"),
                    JSON: cell("JSON"),
                    Map: cell("Map"),
                    Math: cell("Math"),
                    Number: cell("Number"),
                    BigInt: cell("BigInt"),
                    Object: cell("Object"),
                    Promise: cell("Promise"),
                    Proxy: cell("Proxy"),
                    Reflect: cell("Reflect"),
                    FERAL_REG_EXP: cell("FERAL_REG_EXP"),
                    Set: cell("Set"),
                    String: cell("String"),
                    Symbol: cell("Symbol"),
                    Uint8Array: cell("Uint8Array"),
                    WeakMap: cell("WeakMap"),
                    WeakSet: cell("WeakSet"),
                    Temporal: cell("Temporal"),
                    FERAL_ERROR: cell("FERAL_ERROR"),
                    RangeError: cell("RangeError"),
                    ReferenceError: cell("ReferenceError"),
                    SyntaxError: cell("SyntaxError"),
                    TypeError: cell("TypeError"),
                    AggregateError: cell("AggregateError"),
                    assign: cell("assign"),
                    create: cell("create"),
                    defineProperties: cell("defineProperties"),
                    entries: cell("entries"),
                    getOwnPropertyDescriptor: cell("getOwnPropertyDescriptor"),
                    getOwnPropertyDescriptors: cell("getOwnPropertyDescriptors"),
                    getOwnPropertyNames: cell("getOwnPropertyNames"),
                    getPrototypeOf: cell("getPrototypeOf"),
                    is: cell("is"),
                    isFrozen: cell("isFrozen"),
                    isSealed: cell("isSealed"),
                    isExtensible: cell("isExtensible"),
                    keys: cell("keys"),
                    objectPrototype: cell("objectPrototype"),
                    seal: cell("seal"),
                    preventExtensions: cell("preventExtensions"),
                    setPrototypeOf: cell("setPrototypeOf"),
                    values: cell("values"),
                    fromEntries: cell("fromEntries"),
                    freeze: cell("freeze"),
                    speciesSymbol: cell("speciesSymbol"),
                    toStringTagSymbol: cell("toStringTagSymbol"),
                    iteratorSymbol: cell("iteratorSymbol"),
                    matchAllSymbol: cell("matchAllSymbol"),
                    replaceSymbol: cell("replaceSymbol"),
                    searchSymbol: cell("searchSymbol"),
                    unscopablesSymbol: cell("unscopablesSymbol"),
                    symbolKeyFor: cell("symbolKeyFor"),
                    symbolFor: cell("symbolFor"),
                    max: cell("max"),
                    min: cell("min"),
                    trunc: cell("trunc"),
                    MAX_SAFE_INTEGER: cell("MAX_SAFE_INTEGER"),
                    isInteger: cell("isInteger"),
                    stringifyJson: cell("stringifyJson"),
                    defineProperty: cell("defineProperty"),
                    apply: cell("apply"),
                    construct: cell("construct"),
                    reflectGet: cell("reflectGet"),
                    reflectGetOwnPropertyDescriptor: cell("reflectGetOwnPropertyDescriptor"),
                    reflectHas: cell("reflectHas"),
                    reflectIsExtensible: cell("reflectIsExtensible"),
                    ownKeys: cell("ownKeys"),
                    reflectPreventExtensions: cell("reflectPreventExtensions"),
                    reflectSet: cell("reflectSet"),
                    isArray: cell("isArray"),
                    arrayPrototype: cell("arrayPrototype"),
                    arrayBufferPrototype: cell("arrayBufferPrototype"),
                    dataViewPrototype: cell("dataViewPrototype"),
                    mapPrototype: cell("mapPrototype"),
                    proxyRevocable: cell("proxyRevocable"),
                    regexpPrototype: cell("regexpPrototype"),
                    setPrototype: cell("setPrototype"),
                    stringPrototype: cell("stringPrototype"),
                    weakmapPrototype: cell("weakmapPrototype"),
                    weaksetPrototype: cell("weaksetPrototype"),
                    functionPrototype: cell("functionPrototype"),
                    promisePrototype: cell("promisePrototype"),
                    generatorPrototype: cell("generatorPrototype"),
                    iteratorPrototype: cell("iteratorPrototype"),
                    typedArrayPrototype: cell("typedArrayPrototype"),
                    uncurryThis: cell("uncurryThis"),
                    hasOwn: cell("hasOwn"),
                    arrayFilter: cell("arrayFilter"),
                    arrayForEach: cell("arrayForEach"),
                    arrayIncludes: cell("arrayIncludes"),
                    arrayJoin: cell("arrayJoin"),
                    arrayMap: cell("arrayMap"),
                    arrayFlatMap: cell("arrayFlatMap"),
                    arrayPop: cell("arrayPop"),
                    arrayPush: cell("arrayPush"),
                    arraySlice: cell("arraySlice"),
                    arraySome: cell("arraySome"),
                    arraySort: cell("arraySort"),
                    iterateArray: cell("iterateArray"),
                    arrayBufferSlice: cell("arrayBufferSlice"),
                    arrayBufferGetByteLength: cell("arrayBufferGetByteLength"),
                    typedArraySet: cell("typedArraySet"),
                    mapSet: cell("mapSet"),
                    mapGet: cell("mapGet"),
                    mapHas: cell("mapHas"),
                    mapDelete: cell("mapDelete"),
                    mapEntries: cell("mapEntries"),
                    iterateMap: cell("iterateMap"),
                    setAdd: cell("setAdd"),
                    setDelete: cell("setDelete"),
                    setForEach: cell("setForEach"),
                    setHas: cell("setHas"),
                    iterateSet: cell("iterateSet"),
                    regexpExec: cell("regexpExec"),
                    regexpReplace: cell("regexpReplace"),
                    regexpSearch: cell("regexpSearch"),
                    matchAllRegExp: cell("matchAllRegExp"),
                    sealRegexp: cell("sealRegexp"),
                    freezeRegexp: cell("freezeRegexp"),
                    stringEndsWith: cell("stringEndsWith"),
                    stringIncludes: cell("stringIncludes"),
                    stringIndexOf: cell("stringIndexOf"),
                    stringMatch: cell("stringMatch"),
                    stringSearch: cell("stringSearch"),
                    stringSlice: cell("stringSlice"),
                    stringSplit: cell("stringSplit"),
                    stringStartsWith: cell("stringStartsWith"),
                    iterateString: cell("iterateString"),
                    weakmapDelete: cell("weakmapDelete"),
                    weakmapGet: cell("weakmapGet"),
                    weakmapHas: cell("weakmapHas"),
                    weakmapSet: cell("weakmapSet"),
                    weaksetAdd: cell("weaksetAdd"),
                    weaksetHas: cell("weaksetHas"),
                    functionToString: cell("functionToString"),
                    functionBind: cell("functionBind"),
                    generatorNext: cell("generatorNext"),
                    generatorThrow: cell("generatorThrow"),
                    promiseAll: cell("promiseAll"),
                    promiseCatch: cell("promiseCatch"),
                    promiseThen: cell("promiseThen"),
                    finalizationRegistryRegister: cell("finalizationRegistryRegister"),
                    finalizationRegistryUnregister: cell("finalizationRegistryUnregister"),
                    isPrimitive: cell("isPrimitive"),
                    isError: cell("isError"),
                    identity: cell("identity"),
                    FERAL_EVAL: cell("FERAL_EVAL"),
                    FERAL_FUNCTION: cell("FERAL_FUNCTION"),
                    noEvalEvaluate: cell("noEvalEvaluate"),
                    FERAL_STACK_GETTER: cell("FERAL_STACK_GETTER"),
                    FERAL_STACK_SETTER: cell("FERAL_STACK_SETTER"),
                    AsyncGeneratorFunctionInstance: cell("AsyncGeneratorFunctionInstance")
                }, {}, {
                    makeEnvironmentCaptor: cell("makeEnvironmentCaptor"),
                    getEnvironmentOption: cell("getEnvironmentOption"),
                    getEnvironmentOptionsList: cell("getEnvironmentOptionsList"),
                    environmentOptionsListHas: cell("environmentOptionsListHas")
                }, {}, {
                    _amplifyArrayBufferForTests: cell("_amplifyArrayBufferForTests"),
                    immutableArrayBufferLibProperties: cell("immutableArrayBufferLibProperties"),
                    isBufferImmutable: cell("isBufferImmutable"),
                    sliceBufferToImmutable: cell("sliceBufferToImmutable"),
                    optTransferBufferToImmutable: cell("optTransferBufferToImmutable")
                }, {}, {}, {
                    enJoin: cell("enJoin"),
                    an: cell("an"),
                    bestEffortStringify: cell("bestEffortStringify")
                }, {}, {}, {
                    makeCacheMapKit: cell("makeCacheMapKit")
                }, {
                    makeCacheMapKit: cell("makeCacheMapKit")
                }, {
                    makeNoteLogArgsArrayKit: cell("makeNoteLogArgsArrayKit")
                }, {
                    q: cell("q"),
                    b: cell("b"),
                    X: cell("X"),
                    unredactedDetails: cell("unredactedDetails"),
                    makeError: cell("makeError"),
                    annotateError: cell("annotateError"),
                    loggedErrorHandler: cell("loggedErrorHandler"),
                    assert: cell("assert"),
                    assertEqual: cell("assertEqual"),
                    sanitizeError: cell("sanitizeError"),
                    makeAssert: cell("makeAssert")
                }, {
                    isTypedArray: cell("isTypedArray"),
                    makeHardener: cell("makeHardener")
                }, {
                    cauterizeProperty: cell("cauterizeProperty")
                }, {
                    NativeErrors: cell("NativeErrors"),
                    constantProperties: cell("constantProperties"),
                    universalPropertyNames: cell("universalPropertyNames"),
                    initialGlobalPropertyNames: cell("initialGlobalPropertyNames"),
                    sharedGlobalPropertyNames: cell("sharedGlobalPropertyNames"),
                    uniqueGlobalPropertyNames: cell("uniqueGlobalPropertyNames"),
                    FunctionInstance: cell("FunctionInstance"),
                    AsyncFunctionInstance: cell("AsyncFunctionInstance"),
                    isAccessorPermit: cell("isAccessorPermit"),
                    permitted: cell("permitted")
                }, {
                    makeIntrinsicsCollector: cell("makeIntrinsicsCollector"),
                    getGlobalIntrinsics: cell("getGlobalIntrinsics")
                }, {
                    default: cell("default")
                }, {
                    default: cell("default")
                }, {
                    default: cell("default")
                }, {
                    default: cell("default")
                }, {
                    default: cell("default")
                }, {
                    tameNaNSideChannel: cell("tameNaNSideChannel")
                }, {
                    default: cell("default")
                }, {
                    minEnablements: cell("minEnablements"),
                    moderateEnablements: cell("moderateEnablements"),
                    severeEnablements: cell("severeEnablements")
                }, {
                    default: cell("default")
                }, {
                    default: cell("default")
                }, {
                    makeEvalFunction: cell("makeEvalFunction")
                }, {
                    makeFunctionConstructor: cell("makeFunctionConstructor")
                }, {
                    setGlobalObjectSymbolUnscopables: cell("setGlobalObjectSymbolUnscopables"),
                    setGlobalObjectConstantProperties: cell("setGlobalObjectConstantProperties"),
                    setGlobalObjectMutableProperties: cell("setGlobalObjectMutableProperties"),
                    setGlobalObjectEvaluators: cell("setGlobalObjectEvaluators")
                }, {
                    alwaysThrowHandler: cell("alwaysThrowHandler"),
                    strictScopeTerminatorHandler: cell("strictScopeTerminatorHandler"),
                    strictScopeTerminator: cell("strictScopeTerminator")
                }, {
                    createSloppyGlobalsScopeTerminator: cell("createSloppyGlobalsScopeTerminator")
                }, {
                    makeEvalScopeKit: cell("makeEvalScopeKit")
                }, {
                    getSourceURL: cell("getSourceURL")
                }, {
                    rejectHtmlComments: cell("rejectHtmlComments"),
                    evadeHtmlCommentTest: cell("evadeHtmlCommentTest"),
                    rejectImportExpressions: cell("rejectImportExpressions"),
                    evadeImportExpressionTest: cell("evadeImportExpressionTest"),
                    rejectSomeDirectEvalExpressions: cell("rejectSomeDirectEvalExpressions"),
                    mandatoryTransforms: cell("mandatoryTransforms"),
                    applyTransforms: cell("applyTransforms"),
                    transforms: cell("transforms")
                }, {
                    isValidIdentifierName: cell("isValidIdentifierName"),
                    getScopeConstants: cell("getScopeConstants")
                }, {
                    makeEvaluate: cell("makeEvaluate")
                }, {
                    makeSafeEvaluator: cell("makeSafeEvaluator")
                }, {
                    tameFunctionToString: cell("tameFunctionToString")
                }, {
                    tameDomains: cell("tameDomains")
                }, {
                    tameModuleSource: cell("tameModuleSource")
                }, {
                    consoleLevelMethods: cell("consoleLevelMethods"),
                    consoleSpecialMethods: cell("consoleSpecialMethods"),
                    consoleOtherMethods: cell("consoleOtherMethods"),
                    sanitizeFormatData: cell("sanitizeFormatData"),
                    makeLoggingConsoleKit: cell("makeLoggingConsoleKit"),
                    pumpLogToConsole: cell("pumpLogToConsole"),
                    makeCausalConsole: cell("makeCausalConsole"),
                    defineCausalConsoleFromLogger: cell("defineCausalConsoleFromLogger"),
                    filterConsole: cell("filterConsole")
                }, {
                    makeRejectionHandlers: cell("makeRejectionHandlers")
                }, {
                    tameConsole: cell("tameConsole")
                }, {
                    filterFileName: cell("filterFileName"),
                    shortenCallSiteString: cell("shortenCallSiteString"),
                    tameV8ErrorConstructor: cell("tameV8ErrorConstructor")
                }, {
                    default: cell("default")
                }, {
                    makeAlias: cell("makeAlias"),
                    load: cell("load"),
                    loadNow: cell("loadNow")
                }, {
                    deferExports: cell("deferExports"),
                    getDeferredExports: cell("getDeferredExports")
                }, {
                    provideCompartmentEvaluator: cell("provideCompartmentEvaluator"),
                    compartmentEvaluate: cell("compartmentEvaluate")
                }, {
                    makeVirtualModuleInstance: cell("makeVirtualModuleInstance"),
                    makeModuleInstance: cell("makeModuleInstance")
                }, {
                    link: cell("link"),
                    instantiate: cell("instantiate")
                }, {
                    InertCompartment: cell("InertCompartment"),
                    CompartmentPrototype: cell("CompartmentPrototype"),
                    compartmentOptions: cell("compartmentOptions"),
                    makeCompartmentConstructor: cell("makeCompartmentConstructor")
                }, {
                    getAnonymousIntrinsics: cell("getAnonymousIntrinsics")
                }, {
                    tameHarden: cell("tameHarden")
                }, {
                    tameSymbolConstructor: cell("tameSymbolConstructor")
                }, {
                    tameFauxDataProperty: cell("tameFauxDataProperty"),
                    tameFauxDataProperties: cell("tameFauxDataProperties")
                }, {
                    tameRegeneratorRuntime: cell("tameRegeneratorRuntime")
                }, {
                    shimArrayBufferTransfer: cell("shimArrayBufferTransfer")
                }, {
                    chooseReporter: cell("chooseReporter"),
                    reportInGroup: cell("reportInGroup")
                }, {
                    repairIntrinsics: cell("repairIntrinsics")
                }, {}, {}, {}, {}, {} ];
                defineProperties(cells[3], getOwnPropertyDescriptors(cells[2]));
                defineProperties(cells[11], {
                    makeCacheMapKit: {
                        value: cells[10]["makeCacheMapKit"]
                    }
                });
                const namespaces = cells.map(cells => freeze(create(null, {
                    ...cells,
                    [Symbol.toStringTag]: {
                        value: "Module",
                        writable: false,
                        enumerable: false,
                        configurable: false
                    }
                })));
                for (let index = 0; index < namespaces.length; index += 1) {
                    cells[index]["*"] = cell("*", namespaces[index]);
                }
                function observeImports(map, importName, importIndex) {
                    for (const [name, observers] of map.get(importName)) {
                        const cell = cells[importIndex][name];
                        if (cell === undefined) {
                            throw new ReferenceError(`Cannot import name ${name} (has ${Object.getOwnPropertyNames(cells[importIndex]).join(", ")})`);
                        }
                        for (const observer of observers) {
                            cell.observe(observer);
                        }
                    }
                }
                functors[0]({
                    imports(entries) {
                        const map = new Map(entries);
                    },
                    liveVar: {},
                    onceVar: {
                        universalThis: cells[0].globalThis.set,
                        Array: cells[0].Array.set,
                        ArrayBuffer: cells[0].ArrayBuffer.set,
                        Date: cells[0].Date.set,
                        FinalizationRegistry: cells[0].FinalizationRegistry.set,
                        FERAL_FLOAT64_ARRAY: cells[0].FERAL_FLOAT64_ARRAY.set,
                        DataView: cells[0].DataView.set,
                        JSON: cells[0].JSON.set,
                        Map: cells[0].Map.set,
                        Math: cells[0].Math.set,
                        Number: cells[0].Number.set,
                        BigInt: cells[0].BigInt.set,
                        Object: cells[0].Object.set,
                        Promise: cells[0].Promise.set,
                        Proxy: cells[0].Proxy.set,
                        Reflect: cells[0].Reflect.set,
                        FERAL_REG_EXP: cells[0].FERAL_REG_EXP.set,
                        Set: cells[0].Set.set,
                        String: cells[0].String.set,
                        Symbol: cells[0].Symbol.set,
                        Uint8Array: cells[0].Uint8Array.set,
                        WeakMap: cells[0].WeakMap.set,
                        WeakSet: cells[0].WeakSet.set,
                        Temporal: cells[0].Temporal.set,
                        FERAL_ERROR: cells[0].FERAL_ERROR.set,
                        RangeError: cells[0].RangeError.set,
                        ReferenceError: cells[0].ReferenceError.set,
                        SyntaxError: cells[0].SyntaxError.set,
                        TypeError: cells[0].TypeError.set,
                        AggregateError: cells[0].AggregateError.set,
                        assign: cells[0].assign.set,
                        create: cells[0].create.set,
                        defineProperties: cells[0].defineProperties.set,
                        entries: cells[0].entries.set,
                        getOwnPropertyDescriptor: cells[0].getOwnPropertyDescriptor.set,
                        getOwnPropertyDescriptors: cells[0].getOwnPropertyDescriptors.set,
                        getOwnPropertyNames: cells[0].getOwnPropertyNames.set,
                        getPrototypeOf: cells[0].getPrototypeOf.set,
                        is: cells[0].is.set,
                        isFrozen: cells[0].isFrozen.set,
                        isSealed: cells[0].isSealed.set,
                        isExtensible: cells[0].isExtensible.set,
                        keys: cells[0].keys.set,
                        objectPrototype: cells[0].objectPrototype.set,
                        seal: cells[0].seal.set,
                        preventExtensions: cells[0].preventExtensions.set,
                        setPrototypeOf: cells[0].setPrototypeOf.set,
                        values: cells[0].values.set,
                        fromEntries: cells[0].fromEntries.set,
                        freeze: cells[0].freeze.set,
                        speciesSymbol: cells[0].speciesSymbol.set,
                        toStringTagSymbol: cells[0].toStringTagSymbol.set,
                        iteratorSymbol: cells[0].iteratorSymbol.set,
                        matchAllSymbol: cells[0].matchAllSymbol.set,
                        replaceSymbol: cells[0].replaceSymbol.set,
                        searchSymbol: cells[0].searchSymbol.set,
                        unscopablesSymbol: cells[0].unscopablesSymbol.set,
                        symbolKeyFor: cells[0].symbolKeyFor.set,
                        symbolFor: cells[0].symbolFor.set,
                        max: cells[0].max.set,
                        min: cells[0].min.set,
                        trunc: cells[0].trunc.set,
                        MAX_SAFE_INTEGER: cells[0].MAX_SAFE_INTEGER.set,
                        isInteger: cells[0].isInteger.set,
                        stringifyJson: cells[0].stringifyJson.set,
                        defineProperty: cells[0].defineProperty.set,
                        apply: cells[0].apply.set,
                        construct: cells[0].construct.set,
                        reflectGet: cells[0].reflectGet.set,
                        reflectGetOwnPropertyDescriptor: cells[0].reflectGetOwnPropertyDescriptor.set,
                        reflectHas: cells[0].reflectHas.set,
                        reflectIsExtensible: cells[0].reflectIsExtensible.set,
                        ownKeys: cells[0].ownKeys.set,
                        reflectPreventExtensions: cells[0].reflectPreventExtensions.set,
                        reflectSet: cells[0].reflectSet.set,
                        isArray: cells[0].isArray.set,
                        arrayPrototype: cells[0].arrayPrototype.set,
                        arrayBufferPrototype: cells[0].arrayBufferPrototype.set,
                        dataViewPrototype: cells[0].dataViewPrototype.set,
                        mapPrototype: cells[0].mapPrototype.set,
                        proxyRevocable: cells[0].proxyRevocable.set,
                        regexpPrototype: cells[0].regexpPrototype.set,
                        setPrototype: cells[0].setPrototype.set,
                        stringPrototype: cells[0].stringPrototype.set,
                        weakmapPrototype: cells[0].weakmapPrototype.set,
                        weaksetPrototype: cells[0].weaksetPrototype.set,
                        functionPrototype: cells[0].functionPrototype.set,
                        promisePrototype: cells[0].promisePrototype.set,
                        generatorPrototype: cells[0].generatorPrototype.set,
                        iteratorPrototype: cells[0].iteratorPrototype.set,
                        typedArrayPrototype: cells[0].typedArrayPrototype.set,
                        uncurryThis: cells[0].uncurryThis.set,
                        hasOwn: cells[0].hasOwn.set,
                        arrayFilter: cells[0].arrayFilter.set,
                        arrayForEach: cells[0].arrayForEach.set,
                        arrayIncludes: cells[0].arrayIncludes.set,
                        arrayJoin: cells[0].arrayJoin.set,
                        arrayMap: cells[0].arrayMap.set,
                        arrayFlatMap: cells[0].arrayFlatMap.set,
                        arrayPop: cells[0].arrayPop.set,
                        arrayPush: cells[0].arrayPush.set,
                        arraySlice: cells[0].arraySlice.set,
                        arraySome: cells[0].arraySome.set,
                        arraySort: cells[0].arraySort.set,
                        iterateArray: cells[0].iterateArray.set,
                        arrayBufferSlice: cells[0].arrayBufferSlice.set,
                        arrayBufferGetByteLength: cells[0].arrayBufferGetByteLength.set,
                        typedArraySet: cells[0].typedArraySet.set,
                        mapSet: cells[0].mapSet.set,
                        mapGet: cells[0].mapGet.set,
                        mapHas: cells[0].mapHas.set,
                        mapDelete: cells[0].mapDelete.set,
                        mapEntries: cells[0].mapEntries.set,
                        iterateMap: cells[0].iterateMap.set,
                        setAdd: cells[0].setAdd.set,
                        setDelete: cells[0].setDelete.set,
                        setForEach: cells[0].setForEach.set,
                        setHas: cells[0].setHas.set,
                        iterateSet: cells[0].iterateSet.set,
                        regexpExec: cells[0].regexpExec.set,
                        regexpReplace: cells[0].regexpReplace.set,
                        regexpSearch: cells[0].regexpSearch.set,
                        matchAllRegExp: cells[0].matchAllRegExp.set,
                        sealRegexp: cells[0].sealRegexp.set,
                        freezeRegexp: cells[0].freezeRegexp.set,
                        stringEndsWith: cells[0].stringEndsWith.set,
                        stringIncludes: cells[0].stringIncludes.set,
                        stringIndexOf: cells[0].stringIndexOf.set,
                        stringMatch: cells[0].stringMatch.set,
                        stringSearch: cells[0].stringSearch.set,
                        stringSlice: cells[0].stringSlice.set,
                        stringSplit: cells[0].stringSplit.set,
                        stringStartsWith: cells[0].stringStartsWith.set,
                        iterateString: cells[0].iterateString.set,
                        weakmapDelete: cells[0].weakmapDelete.set,
                        weakmapGet: cells[0].weakmapGet.set,
                        weakmapHas: cells[0].weakmapHas.set,
                        weakmapSet: cells[0].weakmapSet.set,
                        weaksetAdd: cells[0].weaksetAdd.set,
                        weaksetHas: cells[0].weaksetHas.set,
                        functionToString: cells[0].functionToString.set,
                        functionBind: cells[0].functionBind.set,
                        generatorNext: cells[0].generatorNext.set,
                        generatorThrow: cells[0].generatorThrow.set,
                        promiseAll: cells[0].promiseAll.set,
                        promiseCatch: cells[0].promiseCatch.set,
                        promiseThen: cells[0].promiseThen.set,
                        finalizationRegistryRegister: cells[0].finalizationRegistryRegister.set,
                        finalizationRegistryUnregister: cells[0].finalizationRegistryUnregister.set,
                        isPrimitive: cells[0].isPrimitive.set,
                        isError: cells[0].isError.set,
                        identity: cells[0].identity.set,
                        FERAL_EVAL: cells[0].FERAL_EVAL.set,
                        FERAL_FUNCTION: cells[0].FERAL_FUNCTION.set,
                        noEvalEvaluate: cells[0].noEvalEvaluate.set,
                        FERAL_STACK_GETTER: cells[0].FERAL_STACK_GETTER.set,
                        FERAL_STACK_SETTER: cells[0].FERAL_STACK_SETTER.set,
                        AsyncGeneratorFunctionInstance: cells[0].AsyncGeneratorFunctionInstance.set
                    },
                    importMeta: {}
                });
                functors[1]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./commons.js", 0);
                    },
                    liveVar: {},
                    onceVar: {},
                    importMeta: {}
                });
                functors[2]({
                    imports(entries) {
                        const map = new Map(entries);
                    },
                    liveVar: {},
                    onceVar: {
                        makeEnvironmentCaptor: cells[2].makeEnvironmentCaptor.set,
                        getEnvironmentOption: cells[2].getEnvironmentOption.set,
                        getEnvironmentOptionsList: cells[2].getEnvironmentOptionsList.set,
                        environmentOptionsListHas: cells[2].environmentOptionsListHas.set
                    },
                    importMeta: {}
                });
                functors[3]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./src/env-options.js", 2);
                    },
                    liveVar: {},
                    onceVar: {},
                    importMeta: {}
                });
                functors[4]({
                    imports(entries) {
                        const map = new Map(entries);
                    },
                    liveVar: {},
                    onceVar: {
                        amplifyArrayBuffer: cells[4]._amplifyArrayBufferForTests.set,
                        immutableArrayBufferLibProperties: cells[4].immutableArrayBufferLibProperties.set,
                        isBufferImmutable: cells[4].isBufferImmutable.set,
                        sliceBufferToImmutable: cells[4].sliceBufferToImmutable.set,
                        optTransferBufferToImmutable: cells[4].optTransferBufferToImmutable.set
                    },
                    importMeta: {}
                });
                functors[5]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./lib.js", 4);
                    },
                    liveVar: {},
                    onceVar: {},
                    importMeta: {}
                });
                functors[6]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./src/shim.js", 5);
                    },
                    liveVar: {},
                    onceVar: {},
                    importMeta: {}
                });
                functors[7]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "../commons.js", 0);
                    },
                    liveVar: {},
                    onceVar: {
                        enJoin: cells[7].enJoin.set,
                        an: cells[7].an.set,
                        bestEffortStringify: cells[7].bestEffortStringify.set
                    },
                    importMeta: {}
                });
                functors[8]({
                    imports(entries) {
                        const map = new Map(entries);
                    },
                    liveVar: {},
                    onceVar: {},
                    importMeta: {}
                });
                functors[9]({
                    imports(entries) {
                        const map = new Map(entries);
                    },
                    liveVar: {},
                    onceVar: {},
                    importMeta: {}
                });
                functors[10]({
                    imports(entries) {
                        const map = new Map(entries);
                    },
                    liveVar: {},
                    onceVar: {
                        makeCacheMapKit: cells[10].makeCacheMapKit.set
                    },
                    importMeta: {}
                });
                functors[11]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./src/cachemap.js", 10);
                    },
                    liveVar: {},
                    onceVar: {},
                    importMeta: {}
                });
                functors[12]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "@endo/cache-map", 11);
                    },
                    liveVar: {},
                    onceVar: {
                        makeNoteLogArgsArrayKit: cells[12].makeNoteLogArgsArrayKit.set
                    },
                    importMeta: {}
                });
                functors[13]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "../commons.js", 0);
                        observeImports(map, "./stringify-utils.js", 7);
                        observeImports(map, "./types.js", 8);
                        observeImports(map, "./internal-types.js", 9);
                        observeImports(map, "./note-log-args.js", 12);
                    },
                    liveVar: {},
                    onceVar: {
                        quote: cells[13].q.set,
                        bare: cells[13].b.set,
                        redactedDetails: cells[13].X.set,
                        unredactedDetails: cells[13].unredactedDetails.set,
                        makeError: cells[13].makeError.set,
                        note: cells[13].annotateError.set,
                        loggedErrorHandler: cells[13].loggedErrorHandler.set,
                        assert: cells[13].assert.set,
                        assertEqual: cells[13].assertEqual.set,
                        sanitizeError: cells[13].sanitizeError.set,
                        makeAssert: cells[13].makeAssert.set
                    },
                    importMeta: {}
                });
                functors[14]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./commons.js", 0);
                        observeImports(map, "./error/assert.js", 13);
                    },
                    liveVar: {},
                    onceVar: {
                        isTypedArray: cells[14].isTypedArray.set,
                        makeHardener: cells[14].makeHardener.set
                    },
                    importMeta: {}
                });
                functors[15]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./commons.js", 0);
                    },
                    liveVar: {},
                    onceVar: {
                        cauterizeProperty: cells[15].cauterizeProperty.set
                    },
                    importMeta: {}
                });
                functors[16]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./commons.js", 0);
                    },
                    liveVar: {},
                    onceVar: {
                        NativeErrors: cells[16].NativeErrors.set,
                        constantProperties: cells[16].constantProperties.set,
                        universalPropertyNames: cells[16].universalPropertyNames.set,
                        initialGlobalPropertyNames: cells[16].initialGlobalPropertyNames.set,
                        sharedGlobalPropertyNames: cells[16].sharedGlobalPropertyNames.set,
                        uniqueGlobalPropertyNames: cells[16].uniqueGlobalPropertyNames.set,
                        FunctionInstance: cells[16].FunctionInstance.set,
                        AsyncFunctionInstance: cells[16].AsyncFunctionInstance.set,
                        isAccessorPermit: cells[16].isAccessorPermit.set,
                        permitted: cells[16].permitted.set
                    },
                    importMeta: {}
                });
                functors[17]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./cauterize-property.js", 15);
                        observeImports(map, "./commons.js", 0);
                        observeImports(map, "./permits.js", 16);
                    },
                    liveVar: {},
                    onceVar: {
                        makeIntrinsicsCollector: cells[17].makeIntrinsicsCollector.set,
                        getGlobalIntrinsics: cells[17].getGlobalIntrinsics.set
                    },
                    importMeta: {}
                });
                functors[18]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./permits.js", 16);
                        observeImports(map, "./commons.js", 0);
                        observeImports(map, "./cauterize-property.js", 15);
                    },
                    liveVar: {},
                    onceVar: {
                        default: cells[18].default.set
                    },
                    importMeta: {}
                });
                functors[19]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./commons.js", 0);
                    },
                    liveVar: {},
                    onceVar: {
                        default: cells[19].default.set
                    },
                    importMeta: {}
                });
                functors[20]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./commons.js", 0);
                    },
                    liveVar: {},
                    onceVar: {
                        default: cells[20].default.set
                    },
                    importMeta: {}
                });
                functors[21]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./commons.js", 0);
                    },
                    liveVar: {},
                    onceVar: {
                        default: cells[21].default.set
                    },
                    importMeta: {}
                });
                functors[22]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./commons.js", 0);
                        observeImports(map, "./permits.js", 16);
                    },
                    liveVar: {},
                    onceVar: {
                        default: cells[22].default.set
                    },
                    importMeta: {}
                });
                functors[23]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./commons.js", 0);
                    },
                    liveVar: {},
                    onceVar: {
                        tameNaNSideChannel: cells[23].tameNaNSideChannel.set
                    },
                    importMeta: {}
                });
                functors[24]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./commons.js", 0);
                    },
                    liveVar: {},
                    onceVar: {
                        default: cells[24].default.set
                    },
                    importMeta: {}
                });
                functors[25]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./commons.js", 0);
                    },
                    liveVar: {},
                    onceVar: {
                        minEnablements: cells[25].minEnablements.set,
                        moderateEnablements: cells[25].moderateEnablements.set,
                        severeEnablements: cells[25].severeEnablements.set
                    },
                    importMeta: {}
                });
                functors[26]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./commons.js", 0);
                        observeImports(map, "./enablements.js", 25);
                    },
                    liveVar: {},
                    onceVar: {
                        default: cells[26].default.set
                    },
                    importMeta: {}
                });
                functors[27]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./commons.js", 0);
                        observeImports(map, "./error/assert.js", 13);
                    },
                    liveVar: {},
                    onceVar: {
                        default: cells[27].default.set
                    },
                    importMeta: {}
                });
                functors[28]({
                    imports(entries) {
                        const map = new Map(entries);
                    },
                    liveVar: {},
                    onceVar: {
                        makeEvalFunction: cells[28].makeEvalFunction.set
                    },
                    importMeta: {}
                });
                functors[29]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./commons.js", 0);
                        observeImports(map, "./error/assert.js", 13);
                    },
                    liveVar: {},
                    onceVar: {
                        makeFunctionConstructor: cells[29].makeFunctionConstructor.set
                    },
                    importMeta: {}
                });
                functors[30]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./commons.js", 0);
                        observeImports(map, "./make-eval-function.js", 28);
                        observeImports(map, "./make-function-constructor.js", 29);
                        observeImports(map, "./permits.js", 16);
                    },
                    liveVar: {},
                    onceVar: {
                        setGlobalObjectSymbolUnscopables: cells[30].setGlobalObjectSymbolUnscopables.set,
                        setGlobalObjectConstantProperties: cells[30].setGlobalObjectConstantProperties.set,
                        setGlobalObjectMutableProperties: cells[30].setGlobalObjectMutableProperties.set,
                        setGlobalObjectEvaluators: cells[30].setGlobalObjectEvaluators.set
                    },
                    importMeta: {}
                });
                functors[31]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./commons.js", 0);
                        observeImports(map, "./error/assert.js", 13);
                    },
                    liveVar: {},
                    onceVar: {
                        alwaysThrowHandler: cells[31].alwaysThrowHandler.set,
                        strictScopeTerminatorHandler: cells[31].strictScopeTerminatorHandler.set,
                        strictScopeTerminator: cells[31].strictScopeTerminator.set
                    },
                    importMeta: {}
                });
                functors[32]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./commons.js", 0);
                        observeImports(map, "./strict-scope-terminator.js", 31);
                    },
                    liveVar: {},
                    onceVar: {
                        createSloppyGlobalsScopeTerminator: cells[32].createSloppyGlobalsScopeTerminator.set
                    },
                    importMeta: {}
                });
                functors[33]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./commons.js", 0);
                        observeImports(map, "./error/assert.js", 13);
                    },
                    liveVar: {},
                    onceVar: {
                        makeEvalScopeKit: cells[33].makeEvalScopeKit.set
                    },
                    importMeta: {}
                });
                functors[34]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./commons.js", 0);
                    },
                    liveVar: {},
                    onceVar: {
                        getSourceURL: cells[34].getSourceURL.set
                    },
                    importMeta: {}
                });
                functors[35]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./commons.js", 0);
                        observeImports(map, "./get-source-url.js", 34);
                    },
                    liveVar: {},
                    onceVar: {
                        rejectHtmlComments: cells[35].rejectHtmlComments.set,
                        evadeHtmlCommentTest: cells[35].evadeHtmlCommentTest.set,
                        rejectImportExpressions: cells[35].rejectImportExpressions.set,
                        evadeImportExpressionTest: cells[35].evadeImportExpressionTest.set,
                        rejectSomeDirectEvalExpressions: cells[35].rejectSomeDirectEvalExpressions.set,
                        mandatoryTransforms: cells[35].mandatoryTransforms.set,
                        applyTransforms: cells[35].applyTransforms.set,
                        transforms: cells[35].transforms.set
                    },
                    importMeta: {}
                });
                functors[36]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./commons.js", 0);
                    },
                    liveVar: {},
                    onceVar: {
                        isValidIdentifierName: cells[36].isValidIdentifierName.set,
                        getScopeConstants: cells[36].getScopeConstants.set
                    },
                    importMeta: {}
                });
                functors[37]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./commons.js", 0);
                        observeImports(map, "./scope-constants.js", 36);
                    },
                    liveVar: {},
                    onceVar: {
                        makeEvaluate: cells[37].makeEvaluate.set
                    },
                    importMeta: {}
                });
                functors[38]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./commons.js", 0);
                        observeImports(map, "./strict-scope-terminator.js", 31);
                        observeImports(map, "./sloppy-globals-scope-terminator.js", 32);
                        observeImports(map, "./eval-scope.js", 33);
                        observeImports(map, "./transforms.js", 35);
                        observeImports(map, "./make-evaluate.js", 37);
                        observeImports(map, "./error/assert.js", 13);
                    },
                    liveVar: {},
                    onceVar: {
                        makeSafeEvaluator: cells[38].makeSafeEvaluator.set
                    },
                    importMeta: {}
                });
                functors[39]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./commons.js", 0);
                    },
                    liveVar: {},
                    onceVar: {
                        tameFunctionToString: cells[39].tameFunctionToString.set
                    },
                    importMeta: {}
                });
                functors[40]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./commons.js", 0);
                    },
                    liveVar: {},
                    onceVar: {
                        tameDomains: cells[40].tameDomains.set
                    },
                    importMeta: {}
                });
                functors[41]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./commons.js", 0);
                    },
                    liveVar: {},
                    onceVar: {
                        tameModuleSource: cells[41].tameModuleSource.set
                    },
                    importMeta: {}
                });
                functors[42]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "../commons.js", 0);
                    },
                    liveVar: {},
                    onceVar: {
                        consoleLevelMethods: cells[42].consoleLevelMethods.set,
                        consoleSpecialMethods: cells[42].consoleSpecialMethods.set,
                        consoleOtherMethods: cells[42].consoleOtherMethods.set,
                        sanitizeFormatData: cells[42].sanitizeFormatData.set,
                        makeLoggingConsoleKit: cells[42].makeLoggingConsoleKit.set,
                        pumpLogToConsole: cells[42].pumpLogToConsole.set,
                        makeCausalConsole: cells[42].makeCausalConsole.set,
                        defineCausalConsoleFromLogger: cells[42].defineCausalConsoleFromLogger.set,
                        filterConsole: cells[42].filterConsole.set
                    },
                    importMeta: {}
                });
                functors[43]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "../commons.js", 0);
                    },
                    liveVar: {},
                    onceVar: {
                        makeRejectionHandlers: cells[43].makeRejectionHandlers.set
                    },
                    importMeta: {}
                });
                functors[44]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "../commons.js", 0);
                        observeImports(map, "./assert.js", 13);
                        observeImports(map, "./console.js", 42);
                        observeImports(map, "./unhandled-rejection.js", 43);
                    },
                    liveVar: {},
                    onceVar: {
                        tameConsole: cells[44].tameConsole.set
                    },
                    importMeta: {}
                });
                functors[45]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "../commons.js", 0);
                    },
                    liveVar: {},
                    onceVar: {
                        filterFileName: cells[45].filterFileName.set,
                        shortenCallSiteString: cells[45].shortenCallSiteString.set,
                        tameV8ErrorConstructor: cells[45].tameV8ErrorConstructor.set
                    },
                    importMeta: {}
                });
                functors[46]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "../commons.js", 0);
                        observeImports(map, "../permits.js", 16);
                        observeImports(map, "./tame-v8-error-constructor.js", 45);
                    },
                    liveVar: {},
                    onceVar: {
                        default: cells[46].default.set
                    },
                    importMeta: {}
                });
                functors[47]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "@endo/env-options", 3);
                        observeImports(map, "./commons.js", 0);
                        observeImports(map, "./error/assert.js", 13);
                    },
                    liveVar: {},
                    onceVar: {
                        makeAlias: cells[47].makeAlias.set,
                        load: cells[47].load.set,
                        loadNow: cells[47].loadNow.set
                    },
                    importMeta: {}
                });
                functors[48]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./module-load.js", 47);
                        observeImports(map, "./commons.js", 0);
                        observeImports(map, "./error/assert.js", 13);
                    },
                    liveVar: {},
                    onceVar: {
                        deferExports: cells[48].deferExports.set,
                        getDeferredExports: cells[48].getDeferredExports.set
                    },
                    importMeta: {}
                });
                functors[49]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./commons.js", 0);
                        observeImports(map, "./transforms.js", 35);
                        observeImports(map, "./make-safe-evaluator.js", 38);
                    },
                    liveVar: {},
                    onceVar: {
                        provideCompartmentEvaluator: cells[49].provideCompartmentEvaluator.set,
                        compartmentEvaluate: cells[49].compartmentEvaluate.set
                    },
                    importMeta: {}
                });
                functors[50]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./error/assert.js", 13);
                        observeImports(map, "./module-proxy.js", 48);
                        observeImports(map, "./commons.js", 0);
                        observeImports(map, "./compartment-evaluate.js", 49);
                    },
                    liveVar: {},
                    onceVar: {
                        makeVirtualModuleInstance: cells[50].makeVirtualModuleInstance.set,
                        makeModuleInstance: cells[50].makeModuleInstance.set
                    },
                    importMeta: {}
                });
                functors[51]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./error/assert.js", 13);
                        observeImports(map, "./module-instance.js", 50);
                        observeImports(map, "./commons.js", 0);
                    },
                    liveVar: {},
                    onceVar: {
                        link: cells[51].link.set,
                        instantiate: cells[51].instantiate.set
                    },
                    importMeta: {}
                });
                functors[52]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./commons.js", 0);
                        observeImports(map, "./global-object.js", 30);
                        observeImports(map, "./error/assert.js", 13);
                        observeImports(map, "./permits.js", 16);
                        observeImports(map, "./module-load.js", 47);
                        observeImports(map, "./module-link.js", 51);
                        observeImports(map, "./module-proxy.js", 48);
                        observeImports(map, "./compartment-evaluate.js", 49);
                        observeImports(map, "./make-safe-evaluator.js", 38);
                    },
                    liveVar: {},
                    onceVar: {
                        InertCompartment: cells[52].InertCompartment.set,
                        CompartmentPrototype: cells[52].CompartmentPrototype.set,
                        compartmentOptions: cells[52].compartmentOptions.set,
                        makeCompartmentConstructor: cells[52].makeCompartmentConstructor.set
                    },
                    importMeta: {}
                });
                functors[53]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./commons.js", 0);
                        observeImports(map, "./compartment.js", 52);
                    },
                    liveVar: {},
                    onceVar: {
                        getAnonymousIntrinsics: cells[53].getAnonymousIntrinsics.set
                    },
                    importMeta: {}
                });
                functors[54]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./commons.js", 0);
                    },
                    liveVar: {},
                    onceVar: {
                        tameHarden: cells[54].tameHarden.set
                    },
                    importMeta: {}
                });
                functors[55]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./commons.js", 0);
                    },
                    liveVar: {},
                    onceVar: {
                        tameSymbolConstructor: cells[55].tameSymbolConstructor.set
                    },
                    importMeta: {}
                });
                functors[56]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./commons.js", 0);
                    },
                    liveVar: {},
                    onceVar: {
                        tameFauxDataProperty: cells[56].tameFauxDataProperty.set,
                        tameFauxDataProperties: cells[56].tameFauxDataProperties.set
                    },
                    importMeta: {}
                });
                functors[57]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./commons.js", 0);
                    },
                    liveVar: {},
                    onceVar: {
                        tameRegeneratorRuntime: cells[57].tameRegeneratorRuntime.set
                    },
                    importMeta: {}
                });
                functors[58]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./commons.js", 0);
                    },
                    liveVar: {},
                    onceVar: {
                        shimArrayBufferTransfer: cells[58].shimArrayBufferTransfer.set
                    },
                    importMeta: {}
                });
                functors[59]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./commons.js", 0);
                        observeImports(map, "./error/assert.js", 13);
                    },
                    liveVar: {},
                    onceVar: {
                        chooseReporter: cells[59].chooseReporter.set,
                        reportInGroup: cells[59].reportInGroup.set
                    },
                    importMeta: {}
                });
                functors[60]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "@endo/env-options", 3);
                        observeImports(map, "@endo/immutable-arraybuffer/shim.js", 6);
                        observeImports(map, "./commons.js", 0);
                        observeImports(map, "./make-hardener.js", 14);
                        observeImports(map, "./intrinsics.js", 17);
                        observeImports(map, "./permits-intrinsics.js", 18);
                        observeImports(map, "./tame-function-constructors.js", 19);
                        observeImports(map, "./tame-date-constructor.js", 20);
                        observeImports(map, "./tame-math-object.js", 21);
                        observeImports(map, "./tame-temporal-object.js", 22);
                        observeImports(map, "./tame-nan-sidechannel.js", 23);
                        observeImports(map, "./tame-regexp-constructor.js", 24);
                        observeImports(map, "./enable-property-overrides.js", 26);
                        observeImports(map, "./tame-locale-methods.js", 27);
                        observeImports(map, "./global-object.js", 30);
                        observeImports(map, "./make-safe-evaluator.js", 38);
                        observeImports(map, "./permits.js", 16);
                        observeImports(map, "./tame-function-tostring.js", 39);
                        observeImports(map, "./tame-domains.js", 40);
                        observeImports(map, "./tame-module-source.js", 41);
                        observeImports(map, "./error/tame-console.js", 44);
                        observeImports(map, "./error/tame-error-constructor.js", 46);
                        observeImports(map, "./error/assert.js", 13);
                        observeImports(map, "./get-anonymous-intrinsics.js", 53);
                        observeImports(map, "./compartment.js", 52);
                        observeImports(map, "./tame-harden.js", 54);
                        observeImports(map, "./tame-symbol-constructor.js", 55);
                        observeImports(map, "./tame-faux-data-properties.js", 56);
                        observeImports(map, "./tame-regenerator-runtime.js", 57);
                        observeImports(map, "./shim-arraybuffer-transfer.js", 58);
                        observeImports(map, "./reporting.js", 59);
                    },
                    liveVar: {},
                    onceVar: {
                        repairIntrinsics: cells[60].repairIntrinsics.set
                    },
                    importMeta: {}
                });
                functors[61]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./assert-sloppy-mode.js", 1);
                        observeImports(map, "./commons.js", 0);
                        observeImports(map, "./lockdown.js", 60);
                    },
                    liveVar: {},
                    onceVar: {},
                    importMeta: {}
                });
                functors[62]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./commons.js", 0);
                        observeImports(map, "./compartment.js", 52);
                        observeImports(map, "./tame-function-tostring.js", 39);
                        observeImports(map, "./intrinsics.js", 17);
                        observeImports(map, "./reporting.js", 59);
                    },
                    liveVar: {},
                    onceVar: {},
                    importMeta: {}
                });
                functors[63]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./commons.js", 0);
                        observeImports(map, "./error/assert.js", 13);
                    },
                    liveVar: {},
                    onceVar: {},
                    importMeta: {}
                });
                functors[64]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./commons.js", 0);
                        observeImports(map, "./error/console.js", 42);
                        observeImports(map, "./error/assert.js", 13);
                    },
                    liveVar: {},
                    onceVar: {},
                    importMeta: {}
                });
                functors[65]({
                    imports(entries) {
                        const map = new Map(entries);
                        observeImports(map, "./src/lockdown-shim.js", 61);
                        observeImports(map, "./src/compartment-shim.js", 62);
                        observeImports(map, "./src/assert-shim.js", 63);
                        observeImports(map, "./src/console-shim.js", 64);
                    },
                    liveVar: {},
                    onceVar: {},
                    importMeta: {}
                });
                return cells[cells.length - 1]["*"].get();
            })([ ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                $h͏_imports([]);
                const universalThis = globalThis;
                $h͏_once.universalThis(universalThis);
                const {Array: Array, ArrayBuffer: ArrayBuffer, Date: Date, FinalizationRegistry: FinalizationRegistry, Float64Array: FERAL_FLOAT64_ARRAY, DataView: DataView, JSON: JSON, Map: Map, Math: Math, Number: Number, BigInt: BigInt, Object: Object, Promise: Promise, Proxy: Proxy, Reflect: Reflect, RegExp: FERAL_REG_EXP, Set: Set, String: String, Symbol: Symbol, Uint8Array: Uint8Array, WeakMap: WeakMap, WeakSet: WeakSet, Temporal: Temporal} = globalThis;
                $h͏_once.Array(Array);
                $h͏_once.ArrayBuffer(ArrayBuffer);
                $h͏_once.Date(Date);
                $h͏_once.FinalizationRegistry(FinalizationRegistry);
                $h͏_once.FERAL_FLOAT64_ARRAY(FERAL_FLOAT64_ARRAY);
                $h͏_once.DataView(DataView);
                $h͏_once.JSON(JSON);
                $h͏_once.Map(Map);
                $h͏_once.Math(Math);
                $h͏_once.Number(Number);
                $h͏_once.BigInt(BigInt);
                $h͏_once.Object(Object);
                $h͏_once.Promise(Promise);
                $h͏_once.Proxy(Proxy);
                $h͏_once.Reflect(Reflect);
                $h͏_once.FERAL_REG_EXP(FERAL_REG_EXP);
                $h͏_once.Set(Set);
                $h͏_once.String(String);
                $h͏_once.Symbol(Symbol);
                $h͏_once.Uint8Array(Uint8Array);
                $h͏_once.WeakMap(WeakMap);
                $h͏_once.WeakSet(WeakSet);
                $h͏_once.Temporal(Temporal);
                const {Error: FERAL_ERROR, RangeError: RangeError, ReferenceError: ReferenceError, SyntaxError: SyntaxError, TypeError: TypeError, AggregateError: AggregateError} = globalThis;
                $h͏_once.FERAL_ERROR(FERAL_ERROR);
                $h͏_once.RangeError(RangeError);
                $h͏_once.ReferenceError(ReferenceError);
                $h͏_once.SyntaxError(SyntaxError);
                $h͏_once.TypeError(TypeError);
                $h͏_once.AggregateError(AggregateError);
                const {assign: assign, create: create, defineProperties: defineProperties, entries: entries, getOwnPropertyDescriptor: getOwnPropertyDescriptor, getOwnPropertyDescriptors: getOwnPropertyDescriptors, getOwnPropertyNames: getOwnPropertyNames, getPrototypeOf: getPrototypeOf, is: is, isFrozen: isFrozen, isSealed: isSealed, isExtensible: isExtensible, keys: keys, prototype: objectPrototype, seal: seal, preventExtensions: preventExtensions, setPrototypeOf: setPrototypeOf, values: values, fromEntries: fromEntries} = Object;
                $h͏_once.assign(assign);
                $h͏_once.create(create);
                $h͏_once.defineProperties(defineProperties);
                $h͏_once.entries(entries);
                $h͏_once.getOwnPropertyDescriptor(getOwnPropertyDescriptor);
                $h͏_once.getOwnPropertyDescriptors(getOwnPropertyDescriptors);
                $h͏_once.getOwnPropertyNames(getOwnPropertyNames);
                $h͏_once.getPrototypeOf(getPrototypeOf);
                $h͏_once.is(is);
                $h͏_once.isFrozen(isFrozen);
                $h͏_once.isSealed(isSealed);
                $h͏_once.isExtensible(isExtensible);
                $h͏_once.keys(keys);
                $h͏_once.objectPrototype(objectPrototype);
                $h͏_once.seal(seal);
                $h͏_once.preventExtensions(preventExtensions);
                $h͏_once.setPrototypeOf(setPrototypeOf);
                $h͏_once.values(values);
                $h͏_once.fromEntries(fromEntries);
                const freeze = Object.freeze;
                $h͏_once.freeze(freeze);
                const {species: speciesSymbol, toStringTag: toStringTagSymbol, iterator: iteratorSymbol, matchAll: matchAllSymbol, replace: replaceSymbol, search: searchSymbol, unscopables: unscopablesSymbol, keyFor: symbolKeyFor, for: symbolFor} = Symbol;
                $h͏_once.speciesSymbol(speciesSymbol);
                $h͏_once.toStringTagSymbol(toStringTagSymbol);
                $h͏_once.iteratorSymbol(iteratorSymbol);
                $h͏_once.matchAllSymbol(matchAllSymbol);
                $h͏_once.replaceSymbol(replaceSymbol);
                $h͏_once.searchSymbol(searchSymbol);
                $h͏_once.unscopablesSymbol(unscopablesSymbol);
                $h͏_once.symbolKeyFor(symbolKeyFor);
                $h͏_once.symbolFor(symbolFor);
                const {max: max, min: min, trunc: trunc} = Math;
                $h͏_once.max(max);
                $h͏_once.min(min);
                $h͏_once.trunc(trunc);
                const {MAX_SAFE_INTEGER: MAX_SAFE_INTEGER, isInteger: isInteger} = Number;
                $h͏_once.MAX_SAFE_INTEGER(MAX_SAFE_INTEGER);
                $h͏_once.isInteger(isInteger);
                const {stringify: stringifyJson} = JSON;
                $h͏_once.stringifyJson(stringifyJson);
                const {defineProperty: originalDefineProperty} = Object;
                const defineProperty = (object, prop, descriptor) => {
                    const result = originalDefineProperty(object, prop, descriptor);
                    if (result !== object) {
                        throw TypeError(`Please report that the original defineProperty silently failed to set ${stringifyJson(String(prop))}. (SES_DEFINE_PROPERTY_FAILED_SILENTLY)`);
                    }
                    return result;
                };
                $h͏_once.defineProperty(defineProperty);
                const {apply: apply, construct: construct, get: reflectGet, getOwnPropertyDescriptor: reflectGetOwnPropertyDescriptor, has: reflectHas, isExtensible: reflectIsExtensible, ownKeys: ownKeys, preventExtensions: reflectPreventExtensions, set: reflectSet} = Reflect;
                $h͏_once.apply(apply);
                $h͏_once.construct(construct);
                $h͏_once.reflectGet(reflectGet);
                $h͏_once.reflectGetOwnPropertyDescriptor(reflectGetOwnPropertyDescriptor);
                $h͏_once.reflectHas(reflectHas);
                $h͏_once.reflectIsExtensible(reflectIsExtensible);
                $h͏_once.ownKeys(ownKeys);
                $h͏_once.reflectPreventExtensions(reflectPreventExtensions);
                $h͏_once.reflectSet(reflectSet);
                const {isArray: isArray, prototype: arrayPrototype} = Array;
                $h͏_once.isArray(isArray);
                $h͏_once.arrayPrototype(arrayPrototype);
                const {prototype: arrayBufferPrototype} = ArrayBuffer;
                $h͏_once.arrayBufferPrototype(arrayBufferPrototype);
                const {prototype: dataViewPrototype} = DataView;
                $h͏_once.dataViewPrototype(dataViewPrototype);
                const {prototype: mapPrototype} = Map;
                $h͏_once.mapPrototype(mapPrototype);
                const {revocable: proxyRevocable} = Proxy;
                $h͏_once.proxyRevocable(proxyRevocable);
                const {prototype: regexpPrototype} = RegExp;
                $h͏_once.regexpPrototype(regexpPrototype);
                const {prototype: setPrototype} = Set;
                $h͏_once.setPrototype(setPrototype);
                const {prototype: stringPrototype} = String;
                $h͏_once.stringPrototype(stringPrototype);
                const {prototype: weakmapPrototype} = WeakMap;
                $h͏_once.weakmapPrototype(weakmapPrototype);
                const {prototype: weaksetPrototype} = WeakSet;
                $h͏_once.weaksetPrototype(weaksetPrototype);
                const {prototype: functionPrototype} = Function;
                $h͏_once.functionPrototype(functionPrototype);
                const {prototype: promisePrototype} = Promise;
                $h͏_once.promisePrototype(promisePrototype);
                const {prototype: generatorPrototype} = getPrototypeOf(function*() {});
                $h͏_once.generatorPrototype(generatorPrototype);
                const iteratorPrototype = getPrototypeOf(getPrototypeOf(arrayPrototype.values()));
                $h͏_once.iteratorPrototype(iteratorPrototype);
                const typedArrayPrototype = getPrototypeOf(Uint8Array.prototype);
                $h͏_once.typedArrayPrototype(typedArrayPrototype);
                const {bind: bind} = functionPrototype;
                const uncurryThis = bind.bind(bind.call);
                $h͏_once.uncurryThis(uncurryThis);
                if (!("hasOwn" in Object)) {
                    const ObjectPrototypeHasOwnProperty = objectPrototype.hasOwnProperty;
                    const hasOwnShim = (obj, key) => {
                        if (obj === undefined || obj === null) {
                            throw TypeError("Cannot convert undefined or null to object");
                        }
                        return apply(ObjectPrototypeHasOwnProperty, obj, [ key ]);
                    };
                    defineProperty(Object, "hasOwn", {
                        value: hasOwnShim,
                        writable: true,
                        enumerable: false,
                        configurable: true
                    });
                }
                const {hasOwn: hasOwn} = Object;
                $h͏_once.hasOwn(hasOwn);
                const arrayFilter = uncurryThis(arrayPrototype.filter);
                $h͏_once.arrayFilter(arrayFilter);
                const arrayForEach = uncurryThis(arrayPrototype.forEach);
                $h͏_once.arrayForEach(arrayForEach);
                const arrayIncludes = uncurryThis(arrayPrototype.includes);
                $h͏_once.arrayIncludes(arrayIncludes);
                const arrayJoin = uncurryThis(arrayPrototype.join);
                $h͏_once.arrayJoin(arrayJoin);
                const arrayMap = uncurryThis(arrayPrototype.map);
                $h͏_once.arrayMap(arrayMap);
                const arrayFlatMap = uncurryThis(arrayPrototype.flatMap);
                $h͏_once.arrayFlatMap(arrayFlatMap);
                const arrayPop = uncurryThis(arrayPrototype.pop);
                $h͏_once.arrayPop(arrayPop);
                const arrayPush = uncurryThis(arrayPrototype.push);
                $h͏_once.arrayPush(arrayPush);
                const arraySlice = uncurryThis(arrayPrototype.slice);
                $h͏_once.arraySlice(arraySlice);
                const arraySome = uncurryThis(arrayPrototype.some);
                $h͏_once.arraySome(arraySome);
                const arraySort = uncurryThis(arrayPrototype.sort);
                $h͏_once.arraySort(arraySort);
                const iterateArray = uncurryThis(arrayPrototype[iteratorSymbol]);
                $h͏_once.iterateArray(iterateArray);
                const arrayBufferSlice = uncurryThis(arrayBufferPrototype.slice);
                $h͏_once.arrayBufferSlice(arrayBufferSlice);
                const arrayBufferGetByteLength = uncurryThis(getOwnPropertyDescriptor(arrayBufferPrototype, "byteLength").get);
                $h͏_once.arrayBufferGetByteLength(arrayBufferGetByteLength);
                const typedArraySet = uncurryThis(typedArrayPrototype.set);
                $h͏_once.typedArraySet(typedArraySet);
                const mapSet = uncurryThis(mapPrototype.set);
                $h͏_once.mapSet(mapSet);
                const mapGet = uncurryThis(mapPrototype.get);
                $h͏_once.mapGet(mapGet);
                const mapHas = uncurryThis(mapPrototype.has);
                $h͏_once.mapHas(mapHas);
                const mapDelete = uncurryThis(mapPrototype.delete);
                $h͏_once.mapDelete(mapDelete);
                const mapEntries = uncurryThis(mapPrototype.entries);
                $h͏_once.mapEntries(mapEntries);
                const iterateMap = uncurryThis(mapPrototype[iteratorSymbol]);
                $h͏_once.iterateMap(iterateMap);
                const setAdd = uncurryThis(setPrototype.add);
                $h͏_once.setAdd(setAdd);
                const setDelete = uncurryThis(setPrototype.delete);
                $h͏_once.setDelete(setDelete);
                const setForEach = uncurryThis(setPrototype.forEach);
                $h͏_once.setForEach(setForEach);
                const setHas = uncurryThis(setPrototype.has);
                $h͏_once.setHas(setHas);
                const iterateSet = uncurryThis(setPrototype[iteratorSymbol]);
                $h͏_once.iterateSet(iterateSet);
                const regexpExec = uncurryThis(regexpPrototype.exec);
                $h͏_once.regexpExec(regexpExec);
                const regexpReplace = uncurryThis(regexpPrototype[replaceSymbol]);
                $h͏_once.regexpReplace(regexpReplace);
                const regexpSearch = uncurryThis(regexpPrototype[searchSymbol]);
                $h͏_once.regexpSearch(regexpSearch);
                const matchAllRegExp = uncurryThis(regexpPrototype[matchAllSymbol]);
                $h͏_once.matchAllRegExp(matchAllRegExp);
                const regexpDescriptors = getOwnPropertyDescriptors(regexpPrototype);
                arrayForEach(ownKeys(regexpDescriptors), key => {
                    const desc = regexpDescriptors[key];
                    desc.configurable = false;
                    if (desc.writable) desc.writable = false;
                });
                defineProperty(regexpDescriptors, "constructor", {
                    value: undefined,
                    enumerable: false,
                    configurable: false,
                    writable: false
                });
                const sealRegexp = regexp => seal(defineProperties(regexp, regexpDescriptors));
                $h͏_once.sealRegexp(sealRegexp);
                const freezeRegexp = regexp => freeze(defineProperties(regexp, regexpDescriptors));
                $h͏_once.freezeRegexp(freezeRegexp);
                const stringEndsWith = uncurryThis(stringPrototype.endsWith);
                $h͏_once.stringEndsWith(stringEndsWith);
                const stringIncludes = uncurryThis(stringPrototype.includes);
                $h͏_once.stringIncludes(stringIncludes);
                const stringIndexOf = uncurryThis(stringPrototype.indexOf);
                $h͏_once.stringIndexOf(stringIndexOf);
                const stringMatch = uncurryThis(stringPrototype.match);
                $h͏_once.stringMatch(stringMatch);
                const stringSearch = uncurryThis(stringPrototype.search);
                $h͏_once.stringSearch(stringSearch);
                const stringSlice = uncurryThis(stringPrototype.slice);
                $h͏_once.stringSlice(stringSlice);
                const stringSplit = uncurryThis(stringPrototype.split);
                $h͏_once.stringSplit(stringSplit);
                const stringStartsWith = uncurryThis(stringPrototype.startsWith);
                $h͏_once.stringStartsWith(stringStartsWith);
                const iterateString = uncurryThis(stringPrototype[iteratorSymbol]);
                $h͏_once.iterateString(iterateString);
                const weakmapDelete = uncurryThis(weakmapPrototype.delete);
                $h͏_once.weakmapDelete(weakmapDelete);
                const weakmapGet = uncurryThis(weakmapPrototype.get);
                $h͏_once.weakmapGet(weakmapGet);
                const weakmapHas = uncurryThis(weakmapPrototype.has);
                $h͏_once.weakmapHas(weakmapHas);
                const weakmapSet = uncurryThis(weakmapPrototype.set);
                $h͏_once.weakmapSet(weakmapSet);
                const weaksetAdd = uncurryThis(weaksetPrototype.add);
                $h͏_once.weaksetAdd(weaksetAdd);
                const weaksetHas = uncurryThis(weaksetPrototype.has);
                $h͏_once.weaksetHas(weaksetHas);
                const functionToString = uncurryThis(functionPrototype.toString);
                $h͏_once.functionToString(functionToString);
                const functionBind = uncurryThis(bind);
                $h͏_once.functionBind(functionBind);
                const generatorNext = uncurryThis(generatorPrototype.next);
                $h͏_once.generatorNext(generatorNext);
                const generatorThrow = uncurryThis(generatorPrototype.throw);
                $h͏_once.generatorThrow(generatorThrow);
                const {all: all} = Promise;
                const promiseAll = promises => apply(all, Promise, [ promises ]);
                $h͏_once.promiseAll(promiseAll);
                const promiseCatch = uncurryThis(promisePrototype.catch);
                $h͏_once.promiseCatch(promiseCatch);
                const promiseThen = uncurryThis(promisePrototype.then);
                $h͏_once.promiseThen(promiseThen);
                const finalizationRegistryRegister = FinalizationRegistry && uncurryThis(FinalizationRegistry.prototype.register);
                $h͏_once.finalizationRegistryRegister(finalizationRegistryRegister);
                const finalizationRegistryUnregister = FinalizationRegistry && uncurryThis(FinalizationRegistry.prototype.unregister);
                $h͏_once.finalizationRegistryUnregister(finalizationRegistryUnregister);
                const isPrimitive = val => !val || typeof val !== "object" && typeof val !== "function";
                $h͏_once.isPrimitive(isPrimitive);
                const isError = value => value instanceof FERAL_ERROR;
                $h͏_once.isError(isError);
                const identity = x => x;
                $h͏_once.identity(identity);
                const FERAL_EVAL = eval;
                $h͏_once.FERAL_EVAL(FERAL_EVAL);
                const FERAL_FUNCTION = Function;
                $h͏_once.FERAL_FUNCTION(FERAL_FUNCTION);
                const noEvalEvaluate = () => {
                    throw TypeError('Cannot eval with evalTaming set to "no-eval" (SES_NO_EVAL)');
                };
                $h͏_once.noEvalEvaluate(noEvalEvaluate);
                const makeTypeError = () => {
                    try {
                        null.null;
                        throw TypeError("obligatory");
                    } catch (error) {
                        return error;
                    }
                };
                const errorStackDesc = getOwnPropertyDescriptor(Error("obligatory"), "stack");
                const typeErrorStackDesc = getOwnPropertyDescriptor(makeTypeError(), "stack");
                let feralStackGetter;
                let feralStackSetter;
                if (typeErrorStackDesc && typeErrorStackDesc.get) {
                    if (errorStackDesc && typeof typeErrorStackDesc.get === "function" && typeErrorStackDesc.get === errorStackDesc.get && typeof typeErrorStackDesc.set === "function" && typeErrorStackDesc.set === errorStackDesc.set) {
                        feralStackGetter = freeze(typeErrorStackDesc.get);
                        feralStackSetter = freeze(typeErrorStackDesc.set);
                    } else {
                        throw TypeError("Unexpected Error own stack accessor functions (SES_UNEXPECTED_ERROR_OWN_STACK_ACCESSOR)");
                    }
                }
                const FERAL_STACK_GETTER = feralStackGetter;
                $h͏_once.FERAL_STACK_GETTER(FERAL_STACK_GETTER);
                const FERAL_STACK_SETTER = feralStackSetter;
                $h͏_once.FERAL_STACK_SETTER(FERAL_STACK_SETTER);
                const getAsyncGeneratorFunctionInstance = () => {
                    try {
                        return new FERAL_FUNCTION("return (async function* AsyncGeneratorFunctionInstance() {})")();
                    } catch (error) {
                        const err = error;
                        if (err.name === "SyntaxError") {
                            return undefined;
                        } else if (err.name === "EvalError") {
                            return async function* AsyncGeneratorFunctionInstance() {};
                        } else {
                            throw err;
                        }
                    }
                };
                const AsyncGeneratorFunctionInstance = getAsyncGeneratorFunctionInstance();
                $h͏_once.AsyncGeneratorFunctionInstance(AsyncGeneratorFunctionInstance);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let TypeError;
                $h͏_imports([ [ "./commons.js", [ [ "TypeError", [ $h͏_a => TypeError = $h͏_a ] ] ] ] ]);
                function getThis() {
                    return this;
                }
                if (getThis()) {
                    throw TypeError(`SES failed to initialize, sloppy mode (SES_NO_SLOPPY)`);
                }
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                $h͏_imports([]);
                const localThis = globalThis;
                const {Object: Object, Reflect: Reflect, Array: Array, String: String, JSON: JSON, Error: Error} = localThis;
                const {freeze: freeze} = Object;
                const {apply: apply} = Reflect;
                const uncurryThis = fn => (receiver, ...args) => apply(fn, receiver, args);
                const arrayPush = uncurryThis(Array.prototype.push);
                const arrayIncludes = uncurryThis(Array.prototype.includes);
                const stringSplit = uncurryThis(String.prototype.split);
                const q = JSON.stringify;
                const Fail = (literals, ...args) => {
                    let msg = literals[0];
                    for (let i = 0; i < args.length; i += 1) {
                        msg = `${msg}${args[i]}${literals[i + 1]}`;
                    }
                    throw Error(msg);
                };
                const makeEnvironmentCaptor = (aGlobal, dropNames = false) => {
                    const capturedEnvironmentOptionNames = [];
                    const getEnvironmentOption = (optionName, defaultSetting, optOtherValues = undefined) => {
                        typeof optionName === "string" || Fail`Environment option name ${q(optionName)} must be a string.`;
                        typeof defaultSetting === "string" || Fail`Environment option default setting ${q(defaultSetting)} must be a string.`;
                        let setting = defaultSetting;
                        const globalProcess = aGlobal.process || undefined;
                        const globalEnv = typeof globalProcess === "object" && globalProcess.env || undefined;
                        if (typeof globalEnv === "object") {
                            if (optionName in globalEnv) {
                                if (!dropNames) {
                                    arrayPush(capturedEnvironmentOptionNames, optionName);
                                }
                                const optionValue = globalEnv[optionName];
                                typeof optionValue === "string" || Fail`Environment option named ${q(optionName)}, if present, must have a corresponding string value, got ${q(optionValue)}`;
                                setting = optionValue;
                            }
                        }
                        optOtherValues === undefined || setting === defaultSetting || arrayIncludes(optOtherValues, setting) || Fail`Unrecognized ${q(optionName)} value ${q(setting)}. Expected one of ${q([ defaultSetting, ...optOtherValues ])}`;
                        return setting;
                    };
                    freeze(getEnvironmentOption);
                    const getEnvironmentOptionsList = optionName => {
                        const option = getEnvironmentOption(optionName, "");
                        return freeze(option === "" ? [] : stringSplit(option, ","));
                    };
                    freeze(getEnvironmentOptionsList);
                    const environmentOptionsListHas = (optionName, element) => arrayIncludes(getEnvironmentOptionsList(optionName), element);
                    const getCapturedEnvironmentOptionNames = () => freeze([ ...capturedEnvironmentOptionNames ]);
                    freeze(getCapturedEnvironmentOptionNames);
                    return freeze({
                        getEnvironmentOption: getEnvironmentOption,
                        getEnvironmentOptionsList: getEnvironmentOptionsList,
                        environmentOptionsListHas: environmentOptionsListHas,
                        getCapturedEnvironmentOptionNames: getCapturedEnvironmentOptionNames
                    });
                };
                $h͏_once.makeEnvironmentCaptor(makeEnvironmentCaptor);
                freeze(makeEnvironmentCaptor);
                const {getEnvironmentOption: getEnvironmentOption, getEnvironmentOptionsList: getEnvironmentOptionsList, environmentOptionsListHas: environmentOptionsListHas} = makeEnvironmentCaptor(localThis, true);
                $h͏_once.getEnvironmentOption(getEnvironmentOption);
                $h͏_once.getEnvironmentOptionsList(getEnvironmentOptionsList);
                $h͏_once.environmentOptionsListHas(environmentOptionsListHas);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                $h͏_imports([ [ "./src/env-options.js", [] ] ]);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                $h͏_imports([]);
                const {ArrayBuffer: ArrayBuffer, Object: Object, Reflect: Reflect, Symbol: Symbol, TypeError: TypeError, Uint8Array: Uint8Array, WeakMap: WeakMap, structuredClone: optStructuredClone} = globalThis;
                const {freeze: freeze, defineProperty: defineProperty, getOwnPropertyDescriptor: getOwnPropertyDescriptor, getPrototypeOf: getPrototypeOf} = Object;
                const {apply: apply, ownKeys: ownKeys} = Reflect;
                const {get: weakmapGet, set: weakmapSet, has: weakmapHas} = WeakMap.prototype;
                const {prototype: arrayBufferPrototype} = ArrayBuffer;
                const {slice: slice, transfer: optTransfer, resize: optResize, transferToFixedLength: optTransferToFixedLength} = arrayBufferPrototype;
                const {get: arrayBufferByteLength} = getOwnPropertyDescriptor(arrayBufferPrototype, "byteLength");
                const optArrayBufferDetached = getOwnPropertyDescriptor(arrayBufferPrototype, "detached")?.get;
                const optArrayBufferResizable = getOwnPropertyDescriptor(arrayBufferPrototype, "resizable")?.get;
                const optArrayBufferMaxByteLength = getOwnPropertyDescriptor(arrayBufferPrototype, "maxByteLength")?.get;
                const typedArrayPrototype = getPrototypeOf(Uint8Array.prototype);
                const {set: uint8ArraySet} = typedArrayPrototype;
                const {get: uint8ArrayBuffer} = getOwnPropertyDescriptor(typedArrayPrototype, "buffer");
                const arrayBufferSlice = (realBuffer, start = undefined, end = undefined) => apply(slice, realBuffer, [ start, end ]);
                let optArrayBufferTransfer;
                if (optTransfer) {
                    optArrayBufferTransfer = arrayBuffer => apply(optTransfer, arrayBuffer, []);
                } else if (optStructuredClone) {
                    optArrayBufferTransfer = arrayBuffer => {
                        arrayBufferSlice(arrayBuffer, 0, 0);
                        return optStructuredClone(arrayBuffer, {
                            transfer: [ arrayBuffer ]
                        });
                    };
                } else {
                    optArrayBufferTransfer = undefined;
                }
                const buffers = new WeakMap;
                const isEmulatedImmutable = buf => apply(weakmapHas, buffers, [ buf ]);
                const amplifyArrayBuffer = arrayBuffer => {
                    const result = apply(weakmapGet, buffers, [ arrayBuffer ]);
                    if (result !== undefined) {
                        return result;
                    }
                    return arrayBuffer;
                };
                $h͏_once.amplifyArrayBuffer(amplifyArrayBuffer);
                const immutableArrayBufferLibProperties = {
                    __proto__: null,
                    get byteLength() {
                        return apply(arrayBufferByteLength, amplifyArrayBuffer(this), []);
                    },
                    get detached() {
                        if (isEmulatedImmutable(this)) {
                            return false;
                        }
                        if (optArrayBufferDetached === undefined) {
                            return false;
                        }
                        return apply(optArrayBufferDetached, this, []);
                    },
                    get maxByteLength() {
                        if (isEmulatedImmutable(this)) {
                            return apply(arrayBufferByteLength, amplifyArrayBuffer(this), []);
                        }
                        if (optArrayBufferMaxByteLength === undefined) {
                            return apply(arrayBufferByteLength, this, []);
                        }
                        return apply(optArrayBufferMaxByteLength, this, []);
                    },
                    get resizable() {
                        if (isEmulatedImmutable(this)) {
                            return false;
                        }
                        if (optArrayBufferResizable === undefined) {
                            return false;
                        }
                        return apply(optArrayBufferResizable, this, []);
                    },
                    get immutable() {
                        return isEmulatedImmutable(this);
                    },
                    slice(start = undefined, end = undefined) {
                        return arrayBufferSlice(amplifyArrayBuffer(this), start, end);
                    },
                    sliceToImmutable(start = undefined, end = undefined) {
                        return sliceBufferToImmutable(amplifyArrayBuffer(this), start, end);
                    },
                    resize(newByteLength = undefined) {
                        if (isEmulatedImmutable(this)) {
                            throw TypeError("Cannot resize an immutable ArrayBuffer");
                        }
                        if (optResize === undefined) {
                            throw TypeError("Cannot resize ArrayBuffer: underlying platform lacks ArrayBuffer.prototype.resize");
                        }
                        return apply(optResize, this, [ newByteLength ]);
                    },
                    transfer(newLength = undefined) {
                        if (isEmulatedImmutable(this)) {
                            throw TypeError("Cannot detach an immutable ArrayBuffer");
                        }
                        if (optTransfer === undefined) {
                            throw TypeError("Cannot transfer ArrayBuffer: underlying platform lacks ArrayBuffer.prototype.transfer");
                        }
                        return apply(optTransfer, this, [ newLength ]);
                    },
                    transferToFixedLength(newLength = undefined) {
                        if (isEmulatedImmutable(this)) {
                            throw TypeError("Cannot detach an immutable ArrayBuffer");
                        }
                        if (optTransferToFixedLength === undefined) {
                            throw TypeError("Cannot transferToFixedLength ArrayBuffer: underlying platform lacks ArrayBuffer.prototype.transferToFixedLength");
                        }
                        return apply(optTransferToFixedLength, this, [ newLength ]);
                    },
                    transferToImmutable(newLength = undefined) {
                        if (isEmulatedImmutable(this)) {
                            throw TypeError("Cannot detach an immutable ArrayBuffer");
                        }
                        if (optTransferBufferToImmutable === undefined) {
                            throw TypeError("Cannot transfer to immutable: underlying platform lacks transfer or structuredClone");
                        }
                        return optTransferBufferToImmutable(this, newLength);
                    }
                };
                $h͏_once.immutableArrayBufferLibProperties(immutableArrayBufferLibProperties);
                for (const key of ownKeys(immutableArrayBufferLibProperties)) {
                    defineProperty(immutableArrayBufferLibProperties, key, {
                        enumerable: false
                    });
                }
                freeze(immutableArrayBufferLibProperties);
                const makeImmutableArrayBufferInternal = realBuffer => {
                    const result = {
                        __proto__: arrayBufferPrototype
                    };
                    defineProperty(result, Symbol.toStringTag, {
                        value: "ImmutableArrayBuffer",
                        writable: false,
                        enumerable: false,
                        configurable: false
                    });
                    apply(weakmapSet, buffers, [ result, realBuffer ]);
                    return result;
                };
                freeze(makeImmutableArrayBufferInternal);
                const isBufferImmutable = buffer => isEmulatedImmutable(buffer);
                $h͏_once.isBufferImmutable(isBufferImmutable);
                const sliceBufferToImmutable = (buffer, start = undefined, end = undefined) => {
                    let realBuffer = apply(weakmapGet, buffers, [ buffer ]);
                    if (realBuffer === undefined) {
                        realBuffer = buffer;
                    }
                    return makeImmutableArrayBufferInternal(arrayBufferSlice(realBuffer, start, end));
                };
                $h͏_once.sliceBufferToImmutable(sliceBufferToImmutable);
                let transferBufferToImmutable;
                if (optArrayBufferTransfer) {
                    transferBufferToImmutable = (buffer, newLength = undefined) => {
                        if (newLength === undefined) {
                            buffer = optArrayBufferTransfer(buffer);
                        } else if (optTransfer) {
                            buffer = apply(optTransfer, buffer, [ newLength ]);
                        } else {
                            buffer = optArrayBufferTransfer(buffer);
                            const oldLength = buffer.byteLength;
                            if (newLength <= oldLength) {
                                buffer = arrayBufferSlice(buffer, 0, newLength);
                            } else {
                                const oldTA = new Uint8Array(buffer);
                                const newTA = new Uint8Array(newLength);
                                apply(uint8ArraySet, newTA, [ oldTA ]);
                                buffer = apply(uint8ArrayBuffer, newTA, []);
                            }
                        }
                        const result = makeImmutableArrayBufferInternal(buffer);
                        return result;
                    };
                } else {
                    transferBufferToImmutable = undefined;
                }
                const optTransferBufferToImmutable = transferBufferToImmutable;
                $h͏_once.optTransferBufferToImmutable(optTransferBufferToImmutable);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let immutableArrayBufferLibProperties;
                $h͏_imports([ [ "./lib.js", [ [ "immutableArrayBufferLibProperties", [ $h͏_a => immutableArrayBufferLibProperties = $h͏_a ] ] ] ] ]);
                const {ArrayBuffer: ArrayBuffer, Object: Object} = globalThis;
                const {getOwnPropertyDescriptors: getOwnPropertyDescriptors, defineProperties: defineProperties} = Object;
                const {prototype: arrayBufferPrototype} = ArrayBuffer;
                if (!("sliceToImmutable" in arrayBufferPrototype)) {
                    defineProperties(arrayBufferPrototype, getOwnPropertyDescriptors(immutableArrayBufferLibProperties));
                }
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                $h͏_imports([ [ "./src/shim.js", [] ] ]);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let Set, String, isArray, arrayJoin, arraySlice, arraySort, arrayMap, keys, fromEntries, freeze, is, isError, setAdd, setHas, stringIncludes, stringStartsWith, stringifyJson, toStringTagSymbol;
                $h͏_imports([ [ "../commons.js", [ [ "Set", [ $h͏_a => Set = $h͏_a ] ], [ "String", [ $h͏_a => String = $h͏_a ] ], [ "isArray", [ $h͏_a => isArray = $h͏_a ] ], [ "arrayJoin", [ $h͏_a => arrayJoin = $h͏_a ] ], [ "arraySlice", [ $h͏_a => arraySlice = $h͏_a ] ], [ "arraySort", [ $h͏_a => arraySort = $h͏_a ] ], [ "arrayMap", [ $h͏_a => arrayMap = $h͏_a ] ], [ "keys", [ $h͏_a => keys = $h͏_a ] ], [ "fromEntries", [ $h͏_a => fromEntries = $h͏_a ] ], [ "freeze", [ $h͏_a => freeze = $h͏_a ] ], [ "is", [ $h͏_a => is = $h͏_a ] ], [ "isError", [ $h͏_a => isError = $h͏_a ] ], [ "setAdd", [ $h͏_a => setAdd = $h͏_a ] ], [ "setHas", [ $h͏_a => setHas = $h͏_a ] ], [ "stringIncludes", [ $h͏_a => stringIncludes = $h͏_a ] ], [ "stringStartsWith", [ $h͏_a => stringStartsWith = $h͏_a ] ], [ "stringifyJson", [ $h͏_a => stringifyJson = $h͏_a ] ], [ "toStringTagSymbol", [ $h͏_a => toStringTagSymbol = $h͏_a ] ] ] ] ]);
                const enJoin = (terms, conjunction) => {
                    if (terms.length === 0) {
                        return "(none)";
                    } else if (terms.length === 1) {
                        return terms[0];
                    } else if (terms.length === 2) {
                        const [first, second] = terms;
                        return `${first} ${conjunction} ${second}`;
                    } else {
                        return `${arrayJoin(arraySlice(terms, 0, -1), ", ")}, ${conjunction} ${terms[terms.length - 1]}`;
                    }
                };
                $h͏_once.enJoin(enJoin);
                const an = str => {
                    str = `${str}`;
                    if (str.length >= 1 && stringIncludes("aeiouAEIOU", str[0])) {
                        return `an ${str}`;
                    }
                    return `a ${str}`;
                };
                $h͏_once.an(an);
                freeze(an);
                const bestEffortStringify = (payload, spaces = undefined) => {
                    const seenSet = new Set;
                    const replacer = (_, val) => {
                        switch (typeof val) {
                          case "object":
                            {
                                if (val === null) {
                                    return null;
                                }
                                if (setHas(seenSet, val)) {
                                    return "[Seen]";
                                }
                                setAdd(seenSet, val);
                                if (isError(val)) {
                                    return `[${val.name}: ${val.message}]`;
                                }
                                if (toStringTagSymbol in val) {
                                    return `[${val[toStringTagSymbol]}]`;
                                }
                                if (isArray(val)) {
                                    return val;
                                }
                                const names = keys(val);
                                if (names.length < 2) {
                                    return val;
                                }
                                let sorted = true;
                                for (let i = 1; i < names.length; i += 1) {
                                    if (names[i - 1] >= names[i]) {
                                        sorted = false;
                                        break;
                                    }
                                }
                                if (sorted) {
                                    return val;
                                }
                                arraySort(names);
                                const entries = arrayMap(names, name => [ name, val[name] ]);
                                return fromEntries(entries);
                            }

                          case "function":
                            {
                                return `[Function ${val.name || "<anon>"}]`;
                            }

                          case "string":
                            {
                                if (stringStartsWith(val, "[")) {
                                    return `[${val}]`;
                                }
                                return val;
                            }

                          case "undefined":
                          case "symbol":
                            {
                                return `[${String(val)}]`;
                            }

                          case "bigint":
                            {
                                return `[${val}n]`;
                            }

                          case "number":
                            {
                                if (is(val, NaN)) {
                                    return "[NaN]";
                                } else if (val === Infinity) {
                                    return "[Infinity]";
                                } else if (val === -Infinity) {
                                    return "[-Infinity]";
                                }
                                return val;
                            }

                          default:
                            {
                                return val;
                            }
                        }
                    };
                    try {
                        return stringifyJson(payload, replacer, spaces);
                    } catch (_err) {
                        return "[Something that failed to stringify]";
                    }
                };
                $h͏_once.bestEffortStringify(bestEffortStringify);
                freeze(bestEffortStringify);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                $h͏_imports([]);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                $h͏_imports([]);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                $h͏_imports([]);
                const {Error: Error, TypeError: TypeError, WeakMap: WeakMap} = globalThis;
                const {parse: parse, stringify: stringify} = JSON;
                const {isSafeInteger: isSafeInteger} = Number;
                const {freeze: freeze} = Object;
                const {toStringTag: toStringTagSymbol} = Symbol;
                const UNKNOWN_KEY = Symbol("UNKNOWN_KEY");
                const deepCopyJsonable = (value, reviver) => {
                    const encoded = stringify(value);
                    const decoded = parse(encoded, reviver);
                    return decoded;
                };
                const freezingReviver = (_name, value) => freeze(value);
                const deepCopyAndFreezeJsonable = value => deepCopyJsonable(value, freezingReviver);
                const appendNewCell = (prev, id, data) => {
                    const next = prev?.next;
                    const cell = {
                        id: id,
                        next: next,
                        prev: prev,
                        data: data
                    };
                    prev.next = cell;
                    next.prev = cell;
                    return cell;
                };
                const moveCellAfter = (cell, prev, next = prev.next) => {
                    if (cell === prev || cell === next) return;
                    const {prev: oldPrev, next: oldNext} = cell;
                    oldPrev.next = oldNext;
                    oldNext.prev = oldPrev;
                    cell.prev = prev;
                    cell.next = next;
                    prev.next = cell;
                    next.prev = cell;
                };
                const resetCell = (cell, oldKey, makeMap) => {
                    if (oldKey !== UNKNOWN_KEY) {
                        cell.data.delete(oldKey);
                        return;
                    }
                    if (cell.data.clear) {
                        cell.data.clear();
                        return;
                    }
                    if (!makeMap) {
                        throw Error("internal: makeMap is required with UNKNOWN_KEY");
                    }
                    cell.data = makeMap();
                };
                const zeroMetrics = freeze({
                    totalQueryCount: 0,
                    totalHitCount: 0
                });
                const makeCacheMapKit = (capacity, options = {}) => {
                    if (!isSafeInteger(capacity) || capacity < 0) {
                        throw TypeError("capacity must be a non-negative safe integer number <= 2**53 - 1");
                    }
                    const makeMap = (MaybeCtor => {
                        try {
                            MaybeCtor();
                            return MaybeCtor;
                        } catch (_err) {
                            const constructNewMap = () => new MaybeCtor;
                            return constructNewMap;
                        }
                    })(options.makeMap ?? WeakMap);
                    const tag = makeMap().clear === undefined ? "WeakCacheMap" : "CacheMap";
                    const keyToCell = makeMap();
                    const head = {
                        id: 0,
                        next: undefined,
                        prev: undefined,
                        data: {
                            has: () => {
                                throw Error("internal: sentinel head cell has no data");
                            }
                        }
                    };
                    head.next = head;
                    head.prev = head;
                    let cellCount = 0;
                    const metrics = deepCopyJsonable(zeroMetrics);
                    const getMetrics = () => deepCopyAndFreezeJsonable(metrics);
                    const touchKey = key => {
                        metrics.totalQueryCount += 1;
                        const cell = keyToCell.get(key);
                        if (!cell?.data.has(key)) return undefined;
                        metrics.totalHitCount += 1;
                        moveCellAfter(cell, head);
                        return cell;
                    };
                    const has = key => {
                        const cell = touchKey(key);
                        return cell !== undefined;
                    };
                    freeze(has);
                    const get = key => {
                        const cell = touchKey(key);
                        return cell?.data.get(key);
                    };
                    freeze(get);
                    const set = (key, value) => {
                        let cell = touchKey(key);
                        if (cell) {
                            cell.data.set(key, value);
                            return implementation;
                        }
                        if (cellCount < capacity) {
                            cell = appendNewCell(head, cellCount + 1, makeMap());
                            cellCount += 1;
                            cell.data.set(key, value);
                        } else if (capacity > 0) {
                            cell = head.prev;
                            resetCell(cell, UNKNOWN_KEY, makeMap);
                            cell.data.set(key, value);
                            moveCellAfter(cell, head);
                        }
                        if (cell) keyToCell.set(key, cell);
                        return implementation;
                    };
                    freeze(set);
                    const {delete: deleteEntry} = {
                        delete: key => {
                            const cell = keyToCell.get(key);
                            if (!cell?.data.has(key)) {
                                keyToCell.delete(key);
                                return false;
                            }
                            moveCellAfter(cell, head.prev);
                            resetCell(cell, key);
                            keyToCell.delete(key);
                            return true;
                        }
                    };
                    freeze(deleteEntry);
                    const implementation = {
                        has: has,
                        get: get,
                        set: set,
                        delete: deleteEntry,
                        [toStringTagSymbol]: tag
                    };
                    freeze(implementation);
                    const kit = {
                        cache: implementation,
                        getMetrics: getMetrics
                    };
                    return freeze(kit);
                };
                $h͏_once.makeCacheMapKit(makeCacheMapKit);
                freeze(makeCacheMapKit);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                $h͏_imports([ [ "./src/cachemap.js", [] ] ]);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let makeCacheMapKit;
                $h͏_imports([ [ "@endo/cache-map", [ [ "makeCacheMapKit", [ $h͏_a => makeCacheMapKit = $h͏_a ] ] ] ] ]);
                const {freeze: freeze} = Object;
                const {isSafeInteger: isSafeInteger} = Number;
                const defaultLoggedErrorsBudget = 1e3;
                const defaultArgsPerErrorBudget = 100;
                const makeNoteLogArgsArrayKit = (errorsBudget = defaultLoggedErrorsBudget, argsPerErrorBudget = defaultArgsPerErrorBudget) => {
                    if (!isSafeInteger(argsPerErrorBudget) || argsPerErrorBudget < 1) {
                        throw TypeError("argsPerErrorBudget must be a safe positive integer number");
                    }
                    const {cache: noteLogArgsArrayMap} = makeCacheMapKit(errorsBudget);
                    const addLogArgs = (error, logArgs) => {
                        const logArgsArray = noteLogArgsArrayMap.get(error);
                        if (logArgsArray !== undefined) {
                            if (logArgsArray.length >= argsPerErrorBudget) {
                                logArgsArray.shift();
                            }
                            logArgsArray.push(logArgs);
                        } else {
                            noteLogArgsArrayMap.set(error, [ logArgs ]);
                        }
                    };
                    freeze(addLogArgs);
                    const takeLogArgsArray = error => {
                        const result = noteLogArgsArrayMap.get(error);
                        noteLogArgsArrayMap.delete(error);
                        return result;
                    };
                    freeze(takeLogArgsArray);
                    return freeze({
                        addLogArgs: addLogArgs,
                        takeLogArgsArray: takeLogArgsArray
                    });
                };
                $h͏_once.makeNoteLogArgsArrayKit(makeNoteLogArgsArrayKit);
                freeze(makeNoteLogArgsArrayKit);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let RangeError, TypeError, WeakMap, arrayJoin, arrayMap, arrayPop, arrayPush, assign, freeze, defineProperty, freezeRegexp, globalThis, is, isError, regexpSearch, stringEndsWith, stringIndexOf, stringSlice, stringStartsWith, weakmapDelete, weakmapGet, weakmapHas, weakmapSet, AggregateError, getOwnPropertyDescriptors, ownKeys, create, objectPrototype, hasOwn, an, bestEffortStringify, makeNoteLogArgsArrayKit;
                $h͏_imports([ [ "../commons.js", [ [ "RangeError", [ $h͏_a => RangeError = $h͏_a ] ], [ "TypeError", [ $h͏_a => TypeError = $h͏_a ] ], [ "WeakMap", [ $h͏_a => WeakMap = $h͏_a ] ], [ "arrayJoin", [ $h͏_a => arrayJoin = $h͏_a ] ], [ "arrayMap", [ $h͏_a => arrayMap = $h͏_a ] ], [ "arrayPop", [ $h͏_a => arrayPop = $h͏_a ] ], [ "arrayPush", [ $h͏_a => arrayPush = $h͏_a ] ], [ "assign", [ $h͏_a => assign = $h͏_a ] ], [ "freeze", [ $h͏_a => freeze = $h͏_a ] ], [ "defineProperty", [ $h͏_a => defineProperty = $h͏_a ] ], [ "freezeRegexp", [ $h͏_a => freezeRegexp = $h͏_a ] ], [ "globalThis", [ $h͏_a => globalThis = $h͏_a ] ], [ "is", [ $h͏_a => is = $h͏_a ] ], [ "isError", [ $h͏_a => isError = $h͏_a ] ], [ "regexpSearch", [ $h͏_a => regexpSearch = $h͏_a ] ], [ "stringEndsWith", [ $h͏_a => stringEndsWith = $h͏_a ] ], [ "stringIndexOf", [ $h͏_a => stringIndexOf = $h͏_a ] ], [ "stringSlice", [ $h͏_a => stringSlice = $h͏_a ] ], [ "stringStartsWith", [ $h͏_a => stringStartsWith = $h͏_a ] ], [ "weakmapDelete", [ $h͏_a => weakmapDelete = $h͏_a ] ], [ "weakmapGet", [ $h͏_a => weakmapGet = $h͏_a ] ], [ "weakmapHas", [ $h͏_a => weakmapHas = $h͏_a ] ], [ "weakmapSet", [ $h͏_a => weakmapSet = $h͏_a ] ], [ "AggregateError", [ $h͏_a => AggregateError = $h͏_a ] ], [ "getOwnPropertyDescriptors", [ $h͏_a => getOwnPropertyDescriptors = $h͏_a ] ], [ "ownKeys", [ $h͏_a => ownKeys = $h͏_a ] ], [ "create", [ $h͏_a => create = $h͏_a ] ], [ "objectPrototype", [ $h͏_a => objectPrototype = $h͏_a ] ], [ "hasOwn", [ $h͏_a => hasOwn = $h͏_a ] ] ] ], [ "./stringify-utils.js", [ [ "an", [ $h͏_a => an = $h͏_a ] ], [ "bestEffortStringify", [ $h͏_a => bestEffortStringify = $h͏_a ] ] ] ], [ "./types.js", [] ], [ "./internal-types.js", [] ], [ "./note-log-args.js", [ [ "makeNoteLogArgsArrayKit", [ $h͏_a => makeNoteLogArgsArrayKit = $h͏_a ] ] ] ] ]);
                const declassifiers = new WeakMap;
                const quote = (value, spaces = undefined) => {
                    const result = freeze({
                        toString: freeze(() => bestEffortStringify(value, spaces))
                    });
                    weakmapSet(declassifiers, result, value);
                    return result;
                };
                $h͏_once.quote(quote);
                freeze(quote);
                const canBeBare = freezeRegexp(/^[\w:-]( ?[\w:-])*$/);
                const bare = (text, spaces = undefined) => {
                    if (typeof text !== "string" || regexpSearch(canBeBare, text) === -1) {
                        return quote(text, spaces);
                    }
                    const result = freeze({
                        toString: freeze(() => text)
                    });
                    weakmapSet(declassifiers, result, text);
                    return result;
                };
                $h͏_once.bare(bare);
                freeze(bare);
                const hiddenDetailsMap = new WeakMap;
                const getMessageString = ({template: template, args: args}) => {
                    const parts = [ template[0] ];
                    for (let i = 0; i < args.length; i += 1) {
                        const arg = args[i];
                        let argStr;
                        if (weakmapHas(declassifiers, arg)) {
                            argStr = `${arg}`;
                        } else if (isError(arg)) {
                            argStr = `(${an(arg.name)})`;
                        } else {
                            argStr = `(${an(typeof arg)})`;
                        }
                        arrayPush(parts, argStr, template[i + 1]);
                    }
                    return arrayJoin(parts, "");
                };
                const DetailsTokenProto = freeze({
                    toString() {
                        const hiddenDetails = weakmapGet(hiddenDetailsMap, this);
                        if (hiddenDetails === undefined) {
                            return "[Not a DetailsToken]";
                        }
                        return getMessageString(hiddenDetails);
                    }
                });
                freeze(DetailsTokenProto.toString);
                const redactedDetails = (template, ...args) => {
                    const detailsToken = freeze({
                        __proto__: DetailsTokenProto
                    });
                    weakmapSet(hiddenDetailsMap, detailsToken, {
                        template: template,
                        args: args
                    });
                    return detailsToken;
                };
                $h͏_once.redactedDetails(redactedDetails);
                freeze(redactedDetails);
                const unredactedDetails = (template, ...args) => {
                    args = arrayMap(args, arg => weakmapHas(declassifiers, arg) ? arg : quote(arg));
                    return redactedDetails(template, ...args);
                };
                $h͏_once.unredactedDetails(unredactedDetails);
                freeze(unredactedDetails);
                const getLogArgs = ({template: template, args: args}) => {
                    const logArgs = [ template[0] ];
                    for (let i = 0; i < args.length; i += 1) {
                        let arg = args[i];
                        if (weakmapHas(declassifiers, arg)) {
                            arg = weakmapGet(declassifiers, arg);
                        }
                        const prevLiteralPart = arrayPop(logArgs) || "";
                        const trimmedPrev = stringEndsWith(prevLiteralPart, " ") ? stringSlice(prevLiteralPart, 0, -1) : prevLiteralPart;
                        if (trimmedPrev !== "") {
                            arrayPush(logArgs, trimmedPrev);
                        }
                        const nextLiteralPart = template[i + 1];
                        const trimmedNext = stringStartsWith(nextLiteralPart, " ") ? stringSlice(nextLiteralPart, 1) : nextLiteralPart;
                        arrayPush(logArgs, arg, trimmedNext);
                    }
                    if (logArgs[logArgs.length - 1] === "") {
                        arrayPop(logArgs);
                    }
                    return logArgs;
                };
                const hiddenMessageLogArgs = new WeakMap;
                let errorTagNum = 0;
                const errorTags = new WeakMap;
                const tagError = (err, optErrorName = err.name) => {
                    let errorTag = weakmapGet(errorTags, err);
                    if (errorTag !== undefined) {
                        return errorTag;
                    }
                    errorTagNum += 1;
                    errorTag = `${optErrorName}#${errorTagNum}`;
                    weakmapSet(errorTags, err, errorTag);
                    return errorTag;
                };
                const sanitizeError = error => {
                    const descs = getOwnPropertyDescriptors(error);
                    const {name: _nameDesc, message: _messageDesc, errors: _errorsDesc = undefined, cause: _causeDesc = undefined, stack: _stackDesc = undefined, code: codeDesc = undefined, ...restDescs} = descs;
                    const restNames = ownKeys(restDescs);
                    if (codeDesc?.value !== undefined && typeof codeDesc.value !== "string") {
                        arrayPush(restNames, "code");
                    }
                    if (restNames.length >= 1) {
                        for (const name of restNames) {
                            delete error[name];
                        }
                        const dropped = create(objectPrototype, restDescs);
                        const droppedDetails = redactedDetails`originally with properties ${quote(dropped)}`;
                        note(error, droppedDetails);
                    }
                    for (const name of ownKeys(error)) {
                        const desc = descs[name];
                        if (desc && hasOwn(desc, "get")) {
                            const value = error[name];
                            defineProperty(error, name, {
                                value: value
                            });
                        }
                    }
                    freeze(error);
                };
                $h͏_once.sanitizeError(sanitizeError);
                const makeError = (optDetails, errConstructor, {errorName: errorName = undefined, cause: cause = undefined, errors: errors = undefined, sanitize: sanitize = true, code: code = undefined} = {}) => {
                    let details = optDetails ?? redactedDetails`Assert failed`;
                    const errCtor = errConstructor ?? globalThis.Error;
                    if (typeof details === "string") {
                        details = redactedDetails([ details ]);
                    }
                    const hiddenDetails = weakmapGet(hiddenDetailsMap, details);
                    if (hiddenDetails === undefined) {
                        throw TypeError(`unrecognized details ${quote(details)}`);
                    }
                    const messageString = getMessageString(hiddenDetails);
                    const opts = cause && {
                        cause: cause
                    };
                    let error;
                    if (typeof AggregateError !== "undefined" && errCtor === AggregateError) {
                        error = AggregateError(errors || [], messageString, opts);
                    } else {
                        const ErrorCtor = errCtor;
                        error = ErrorCtor(messageString, opts);
                        if (errors !== undefined) {
                            defineProperty(error, "errors", {
                                value: errors,
                                writable: true,
                                enumerable: false,
                                configurable: true
                            });
                        }
                    }
                    if (code !== undefined) {
                        defineProperty(error, "code", {
                            value: code,
                            writable: true,
                            enumerable: false,
                            configurable: true
                        });
                    }
                    weakmapSet(hiddenMessageLogArgs, error, getLogArgs(hiddenDetails));
                    if (errorName !== undefined) {
                        tagError(error, errorName);
                    }
                    if (sanitize) {
                        sanitizeError(error);
                    }
                    return error;
                };
                $h͏_once.makeError(makeError);
                freeze(makeError);
                const {addLogArgs: addNoteLogArgs, takeLogArgsArray: takeAllNoteLogArgs} = makeNoteLogArgsArrayKit();
                const hiddenNoteCallbacks = new WeakMap;
                const note = (error, detailsNote) => {
                    if (typeof detailsNote === "string") {
                        detailsNote = redactedDetails([ detailsNote ]);
                    }
                    const hiddenDetails = weakmapGet(hiddenDetailsMap, detailsNote);
                    if (hiddenDetails === undefined) {
                        throw TypeError(`unrecognized details ${quote(detailsNote)}`);
                    }
                    const logArgs = getLogArgs(hiddenDetails);
                    const callbacks = weakmapGet(hiddenNoteCallbacks, error);
                    if (callbacks !== undefined) {
                        for (const callback of callbacks) {
                            callback(error, logArgs);
                        }
                    } else {
                        addNoteLogArgs(error, logArgs);
                    }
                };
                $h͏_once.note(note);
                freeze(note);
                const defaultGetStackString = error => {
                    if (!("stack" in error)) {
                        return "";
                    }
                    const stackString = `${error.stack}`;
                    const pos = stringIndexOf(stackString, "\n");
                    if (stringStartsWith(stackString, " ") || pos === -1) {
                        return stackString;
                    }
                    return stringSlice(stackString, pos + 1);
                };
                const loggedErrorHandler = {
                    getStackString: globalThis.getStackString || defaultGetStackString,
                    tagError: error => tagError(error),
                    resetErrorTagNum: () => {
                        errorTagNum = 0;
                    },
                    getMessageLogArgs: error => weakmapGet(hiddenMessageLogArgs, error),
                    takeMessageLogArgs: error => {
                        const logArgs = weakmapGet(hiddenMessageLogArgs, error);
                        weakmapDelete(hiddenMessageLogArgs, error);
                        return logArgs;
                    },
                    takeNoteLogArgsArray: (error, callback) => {
                        const logArgsArray = takeAllNoteLogArgs(error);
                        if (callback !== undefined) {
                            const callbacks = weakmapGet(hiddenNoteCallbacks, error);
                            if (callbacks) {
                                arrayPush(callbacks, callback);
                            } else {
                                weakmapSet(hiddenNoteCallbacks, error, [ callback ]);
                            }
                        }
                        return logArgsArray || [];
                    }
                };
                $h͏_once.loggedErrorHandler(loggedErrorHandler);
                freeze(loggedErrorHandler);
                const makeAssert = (optRaise = undefined, unredacted = false) => {
                    const details = unredacted ? unredactedDetails : redactedDetails;
                    const assertFailedDetails = details`Check failed`;
                    const fail = (optDetails = assertFailedDetails, errConstructor = undefined, options = undefined) => {
                        const reason = makeError(optDetails, errConstructor, options);
                        if (optRaise !== undefined) {
                            optRaise(reason);
                        }
                        throw reason;
                    };
                    freeze(fail);
                    const Fail = (template, ...args) => fail(details(template, ...args));
                    const assert = (condition, optDetails = undefined, errConstructor = undefined, options = undefined) => {
                        condition || fail(optDetails, errConstructor, options);
                    };
                    const equal = (actual, expected, optDetails = undefined, errConstructor = undefined, options = undefined) => {
                        is(actual, expected) || fail(optDetails || details`Expected ${actual} is same as ${expected}`, errConstructor || RangeError, options);
                    };
                    freeze(equal);
                    const assertTypeof = (specimen, typename, optDetails) => {
                        if (typeof specimen === typename) {
                            return;
                        }
                        typeof typename === "string" || Fail`${quote(typename)} must be a string`;
                        if (optDetails === undefined) {
                            const typeWithDeterminer = an(typename);
                            optDetails = details`${specimen} must be ${bare(typeWithDeterminer)}`;
                        }
                        fail(optDetails, TypeError);
                    };
                    freeze(assertTypeof);
                    const assertString = (specimen, optDetails = undefined) => assertTypeof(specimen, "string", optDetails);
                    const assertionFunctions = {
                        equal: equal,
                        typeof: assertTypeof,
                        string: assertString,
                        fail: fail
                    };
                    const assertionUtilities = {
                        makeError: makeError,
                        note: note,
                        details: details,
                        Fail: Fail,
                        quote: quote,
                        bare: bare
                    };
                    const deprecated = {
                        error: makeError,
                        makeAssert: makeAssert
                    };
                    const finishedAssert = assign(assert, {
                        ...assertionFunctions,
                        ...assertionUtilities,
                        ...deprecated
                    });
                    return freeze(finishedAssert);
                };
                $h͏_once.makeAssert(makeAssert);
                freeze(makeAssert);
                const assert = makeAssert();
                $h͏_once.assert(assert);
                const assertEqual = assert.equal;
                $h͏_once.assertEqual(assertEqual);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let Set, String, TypeError, WeakSet, globalThis, apply, arrayForEach, defineProperty, freeze, getOwnPropertyDescriptor, getOwnPropertyDescriptors, getPrototypeOf, isInteger, isPrimitive, hasOwn, ownKeys, preventExtensions, setAdd, setForEach, setHas, toStringTagSymbol, typedArrayPrototype, weaksetAdd, weaksetHas, FERAL_STACK_GETTER, FERAL_STACK_SETTER, isError, assert;
                $h͏_imports([ [ "./commons.js", [ [ "Set", [ $h͏_a => Set = $h͏_a ] ], [ "String", [ $h͏_a => String = $h͏_a ] ], [ "TypeError", [ $h͏_a => TypeError = $h͏_a ] ], [ "WeakSet", [ $h͏_a => WeakSet = $h͏_a ] ], [ "globalThis", [ $h͏_a => globalThis = $h͏_a ] ], [ "apply", [ $h͏_a => apply = $h͏_a ] ], [ "arrayForEach", [ $h͏_a => arrayForEach = $h͏_a ] ], [ "defineProperty", [ $h͏_a => defineProperty = $h͏_a ] ], [ "freeze", [ $h͏_a => freeze = $h͏_a ] ], [ "getOwnPropertyDescriptor", [ $h͏_a => getOwnPropertyDescriptor = $h͏_a ] ], [ "getOwnPropertyDescriptors", [ $h͏_a => getOwnPropertyDescriptors = $h͏_a ] ], [ "getPrototypeOf", [ $h͏_a => getPrototypeOf = $h͏_a ] ], [ "isInteger", [ $h͏_a => isInteger = $h͏_a ] ], [ "isPrimitive", [ $h͏_a => isPrimitive = $h͏_a ] ], [ "hasOwn", [ $h͏_a => hasOwn = $h͏_a ] ], [ "ownKeys", [ $h͏_a => ownKeys = $h͏_a ] ], [ "preventExtensions", [ $h͏_a => preventExtensions = $h͏_a ] ], [ "setAdd", [ $h͏_a => setAdd = $h͏_a ] ], [ "setForEach", [ $h͏_a => setForEach = $h͏_a ] ], [ "setHas", [ $h͏_a => setHas = $h͏_a ] ], [ "toStringTagSymbol", [ $h͏_a => toStringTagSymbol = $h͏_a ] ], [ "typedArrayPrototype", [ $h͏_a => typedArrayPrototype = $h͏_a ] ], [ "weaksetAdd", [ $h͏_a => weaksetAdd = $h͏_a ] ], [ "weaksetHas", [ $h͏_a => weaksetHas = $h͏_a ] ], [ "FERAL_STACK_GETTER", [ $h͏_a => FERAL_STACK_GETTER = $h͏_a ] ], [ "FERAL_STACK_SETTER", [ $h͏_a => FERAL_STACK_SETTER = $h͏_a ] ], [ "isError", [ $h͏_a => isError = $h͏_a ] ] ] ], [ "./error/assert.js", [ [ "assert", [ $h͏_a => assert = $h͏_a ] ] ] ] ]);
                const typedArrayToStringTag = getOwnPropertyDescriptor(typedArrayPrototype, toStringTagSymbol);
                assert(typedArrayToStringTag);
                const getTypedArrayToStringTag = typedArrayToStringTag.get;
                assert(getTypedArrayToStringTag);
                const isTypedArray = object => {
                    const tag = apply(getTypedArrayToStringTag, object, []);
                    return tag !== undefined;
                };
                $h͏_once.isTypedArray(isTypedArray);
                const isCanonicalIntegerIndexString = propertyKey => {
                    const n = +String(propertyKey);
                    return isInteger(n) && String(n) === propertyKey;
                };
                const freezeTypedArray = array => {
                    preventExtensions(array);
                    arrayForEach(ownKeys(array), name => {
                        const desc = getOwnPropertyDescriptor(array, name);
                        assert(desc);
                        if (!isCanonicalIntegerIndexString(name)) {
                            defineProperty(array, name, {
                                ...desc,
                                writable: false,
                                configurable: false
                            });
                        }
                    });
                };
                const makeHardener = () => {
                    if (typeof globalThis.harden === "function") {
                        const safeHarden = globalThis.harden;
                        return safeHarden;
                    }
                    const hardened = new WeakSet;
                    const {harden: harden} = {
                        harden(root) {
                            const toFreeze = new Set;
                            function enqueue(val) {
                                if (isPrimitive(val)) {
                                    return;
                                }
                                const type = typeof val;
                                if (type !== "object" && type !== "function") {
                                    throw TypeError(`Unexpected typeof: ${type}`);
                                }
                                if (weaksetHas(hardened, val) || setHas(toFreeze, val)) {
                                    return;
                                }
                                setAdd(toFreeze, val);
                            }
                            const baseFreezeAndTraverse = obj => {
                                if (isTypedArray(obj)) {
                                    freezeTypedArray(obj);
                                } else {
                                    freeze(obj);
                                }
                                const descs = getOwnPropertyDescriptors(obj);
                                const proto = getPrototypeOf(obj);
                                enqueue(proto);
                                arrayForEach(ownKeys(descs), name => {
                                    const desc = descs[name];
                                    if (hasOwn(desc, "value")) {
                                        enqueue(desc.value);
                                    } else {
                                        enqueue(desc.get);
                                        enqueue(desc.set);
                                    }
                                });
                            };
                            const freezeAndTraverse = FERAL_STACK_GETTER === undefined && FERAL_STACK_SETTER === undefined ? baseFreezeAndTraverse : obj => {
                                if (isError(obj)) {
                                    const stackDesc = getOwnPropertyDescriptor(obj, "stack");
                                    if (stackDesc && stackDesc.get === FERAL_STACK_GETTER && stackDesc.configurable) {
                                        defineProperty(obj, "stack", {
                                            value: apply(FERAL_STACK_GETTER, obj, [])
                                        });
                                    }
                                }
                                return baseFreezeAndTraverse(obj);
                            };
                            const dequeue = () => {
                                setForEach(toFreeze, freezeAndTraverse);
                            };
                            const markHardened = value => {
                                weaksetAdd(hardened, value);
                            };
                            const commit = () => {
                                setForEach(toFreeze, markHardened);
                            };
                            enqueue(root);
                            dequeue();
                            commit();
                            return root;
                        }
                    };
                    return harden;
                };
                $h͏_once.makeHardener(makeHardener);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let hasOwn;
                $h͏_imports([ [ "./commons.js", [ [ "hasOwn", [ $h͏_a => hasOwn = $h͏_a ] ] ] ] ]);
                const cauterizeProperty = (obj, prop, known, subPath, {warn: warn, error: error}) => {
                    if (!known) {
                        warn(`Removing ${subPath}`);
                    }
                    try {
                        delete obj[prop];
                    } catch (err) {
                        const reason = err;
                        if (hasOwn(obj, prop)) {
                            if (typeof obj === "function" && prop === "prototype") {
                                obj.prototype = undefined;
                                if (obj.prototype === undefined) {
                                    warn(`Tolerating undeletable ${subPath} === undefined`);
                                    return;
                                }
                            }
                            error(`failed to delete ${subPath}`, reason);
                        } else {
                            error(`deleting ${subPath} threw`, reason);
                        }
                        throw err;
                    }
                };
                $h͏_once.cauterizeProperty(cauterizeProperty);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let arrayPush, arrayForEach;
                $h͏_imports([ [ "./commons.js", [ [ "arrayPush", [ $h͏_a => arrayPush = $h͏_a ] ], [ "arrayForEach", [ $h͏_a => arrayForEach = $h͏_a ] ] ] ] ]);
                const constantProperties = {
                    Infinity: Infinity,
                    NaN: NaN,
                    undefined: undefined
                };
                $h͏_once.constantProperties(constantProperties);
                const universalPropertyNames = {
                    isFinite: "isFinite",
                    isNaN: "isNaN",
                    parseFloat: "parseFloat",
                    parseInt: "parseInt",
                    decodeURI: "decodeURI",
                    decodeURIComponent: "decodeURIComponent",
                    encodeURI: "encodeURI",
                    encodeURIComponent: "encodeURIComponent",
                    Array: "Array",
                    ArrayBuffer: "ArrayBuffer",
                    BigInt: "BigInt",
                    BigInt64Array: "BigInt64Array",
                    BigUint64Array: "BigUint64Array",
                    Boolean: "Boolean",
                    DataView: "DataView",
                    EvalError: "EvalError",
                    Int8Array: "Int8Array",
                    Int16Array: "Int16Array",
                    Int32Array: "Int32Array",
                    Map: "Map",
                    Number: "Number",
                    Object: "Object",
                    Promise: "Promise",
                    Proxy: "Proxy",
                    RangeError: "RangeError",
                    ReferenceError: "ReferenceError",
                    Set: "Set",
                    String: "String",
                    SyntaxError: "SyntaxError",
                    TypeError: "TypeError",
                    Uint8Array: "Uint8Array",
                    Uint8ClampedArray: "Uint8ClampedArray",
                    Uint16Array: "Uint16Array",
                    Uint32Array: "Uint32Array",
                    URIError: "URIError",
                    WeakMap: "WeakMap",
                    WeakSet: "WeakSet",
                    Iterator: "Iterator",
                    AsyncIterator: "AsyncIterator",
                    AggregateError: "AggregateError",
                    JSON: "JSON",
                    Reflect: "Reflect",
                    TextEncoder: "TextEncoder",
                    TextDecoder: "TextDecoder",
                    escape: "escape",
                    unescape: "unescape",
                    ModuleSource: "ModuleSource",
                    lockdown: "lockdown",
                    harden: "harden",
                    HandledPromise: "HandledPromise"
                };
                $h͏_once.universalPropertyNames(universalPropertyNames);
                const initialGlobalPropertyNames = {
                    Date: "%InitialDate%",
                    Error: "%InitialError%",
                    RegExp: "%InitialRegExp%",
                    Math: "%InitialMath%",
                    Temporal: "%InitialTemporal%",
                    Float16Array: "Float16Array",
                    Float32Array: "Float32Array",
                    Float64Array: "Float64Array",
                    getStackString: "%InitialGetStackString%"
                };
                $h͏_once.initialGlobalPropertyNames(initialGlobalPropertyNames);
                const sharedGlobalPropertyNames = {
                    Date: "%SharedDate%",
                    Error: "%SharedError%",
                    RegExp: "%SharedRegExp%",
                    Symbol: "%SharedSymbol%",
                    Math: "%SharedMath%",
                    Temporal: "%SharedTemporal%"
                };
                $h͏_once.sharedGlobalPropertyNames(sharedGlobalPropertyNames);
                const uniqueGlobalPropertyNames = {
                    globalThis: "%UniqueGlobalThis%",
                    eval: "%UniqueEval%",
                    Function: "%UniqueFunction%",
                    Compartment: "%UniqueCompartment%"
                };
                $h͏_once.uniqueGlobalPropertyNames(uniqueGlobalPropertyNames);
                const NativeErrors = [ EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError ];
                $h͏_once.NativeErrors(NativeErrors);
                if (typeof AggregateError !== "undefined") {
                    arrayPush(NativeErrors, AggregateError);
                }
                const FunctionInstance = {
                    "[[Proto]]": "%FunctionPrototype%",
                    length: "number",
                    name: "string"
                };
                $h͏_once.FunctionInstance(FunctionInstance);
                const AsyncFunctionInstance = {
                    "[[Proto]]": "%AsyncFunctionPrototype%"
                };
                $h͏_once.AsyncFunctionInstance(AsyncFunctionInstance);
                const fn = FunctionInstance;
                const asyncFn = AsyncFunctionInstance;
                const getter = {
                    get: fn,
                    set: "undefined"
                };
                const accessor = {
                    get: fn,
                    set: fn
                };
                const strict = function() {
                    "use strict";
                };
                arrayForEach([ "caller", "arguments" ], prop => {
                    try {
                        strict[prop];
                    } catch (e) {
                        if (e.message === "Restricted in strict mode") {
                            FunctionInstance[prop] = accessor;
                        }
                    }
                });
                const isAccessorPermit = permit => permit === getter || permit === accessor;
                $h͏_once.isAccessorPermit(isAccessorPermit);
                function NativeError(prototype) {
                    return {
                        "[[Proto]]": "%SharedError%",
                        prototype: prototype
                    };
                }
                function NativeErrorPrototype(constructor) {
                    return {
                        "[[Proto]]": "%ErrorPrototype%",
                        constructor: constructor,
                        message: "string",
                        name: "string",
                        toString: false,
                        cause: false
                    };
                }
                function TypedArray(prototype) {
                    return {
                        "[[Proto]]": "%TypedArray%",
                        BYTES_PER_ELEMENT: "number",
                        prototype: prototype
                    };
                }
                function TypedArrayPrototype(constructor) {
                    return {
                        "[[Proto]]": "%TypedArrayPrototype%",
                        BYTES_PER_ELEMENT: "number",
                        constructor: constructor
                    };
                }
                const CommonMath = {
                    E: "number",
                    LN10: "number",
                    LN2: "number",
                    LOG10E: "number",
                    LOG2E: "number",
                    PI: "number",
                    SQRT1_2: "number",
                    SQRT2: "number",
                    "@@toStringTag": "string",
                    abs: fn,
                    acos: fn,
                    acosh: fn,
                    asin: fn,
                    asinh: fn,
                    atan: fn,
                    atanh: fn,
                    atan2: fn,
                    cbrt: fn,
                    ceil: fn,
                    clz32: fn,
                    cos: fn,
                    cosh: fn,
                    exp: fn,
                    expm1: fn,
                    floor: fn,
                    fround: fn,
                    hypot: fn,
                    imul: fn,
                    log: fn,
                    log1p: fn,
                    log10: fn,
                    log2: fn,
                    max: fn,
                    min: fn,
                    pow: fn,
                    round: fn,
                    sign: fn,
                    sin: fn,
                    sinh: fn,
                    sqrt: fn,
                    tan: fn,
                    tanh: fn,
                    trunc: fn,
                    f16round: fn,
                    sumPrecise: fn,
                    idiv: false,
                    idivmod: false,
                    imod: false,
                    imuldiv: false,
                    irem: false,
                    mod: false,
                    irandom: false
                };
                const permitted = {
                    "[[Proto]]": null,
                    "%ThrowTypeError%": fn,
                    Infinity: "number",
                    NaN: "number",
                    undefined: "undefined",
                    "%UniqueEval%": fn,
                    isFinite: fn,
                    isNaN: fn,
                    parseFloat: fn,
                    parseInt: fn,
                    decodeURI: fn,
                    decodeURIComponent: fn,
                    encodeURI: fn,
                    encodeURIComponent: fn,
                    Object: {
                        "[[Proto]]": "%FunctionPrototype%",
                        assign: fn,
                        create: fn,
                        defineProperties: fn,
                        defineProperty: fn,
                        entries: fn,
                        freeze: fn,
                        fromEntries: fn,
                        getOwnPropertyDescriptor: fn,
                        getOwnPropertyDescriptors: fn,
                        getOwnPropertyNames: fn,
                        getOwnPropertySymbols: fn,
                        getPrototypeOf: fn,
                        is: fn,
                        isExtensible: fn,
                        isFrozen: fn,
                        isSealed: fn,
                        keys: fn,
                        preventExtensions: fn,
                        prototype: "%ObjectPrototype%",
                        seal: fn,
                        setPrototypeOf: fn,
                        values: fn,
                        "RegisteredSymbol(harden)": {
                            ...fn,
                            isFake: "boolean"
                        },
                        hasOwn: fn,
                        groupBy: fn,
                        __getClass: false
                    },
                    "%ObjectPrototype%": {
                        "[[Proto]]": null,
                        constructor: "Object",
                        hasOwnProperty: fn,
                        isPrototypeOf: fn,
                        propertyIsEnumerable: fn,
                        toLocaleString: fn,
                        toString: fn,
                        valueOf: fn,
                        "--proto--": accessor,
                        __defineGetter__: fn,
                        __defineSetter__: fn,
                        __lookupGetter__: fn,
                        __lookupSetter__: fn
                    },
                    "%UniqueFunction%": {
                        "[[Proto]]": "%FunctionPrototype%",
                        prototype: "%FunctionPrototype%"
                    },
                    "%InertFunction%": {
                        "[[Proto]]": "%FunctionPrototype%",
                        prototype: "%FunctionPrototype%"
                    },
                    "%FunctionPrototype%": {
                        apply: fn,
                        bind: fn,
                        call: fn,
                        constructor: "%InertFunction%",
                        toString: fn,
                        "@@hasInstance": fn,
                        caller: false,
                        arguments: false,
                        fileName: false,
                        lineNumber: false
                    },
                    Boolean: {
                        "[[Proto]]": "%FunctionPrototype%",
                        prototype: "%BooleanPrototype%"
                    },
                    "%BooleanPrototype%": {
                        constructor: "Boolean",
                        toString: fn,
                        valueOf: fn
                    },
                    "%SharedSymbol%": {
                        "[[Proto]]": "%FunctionPrototype%",
                        asyncIterator: "symbol",
                        for: fn,
                        hasInstance: "symbol",
                        isConcatSpreadable: "symbol",
                        iterator: "symbol",
                        keyFor: fn,
                        match: "symbol",
                        matchAll: "symbol",
                        prototype: "%SymbolPrototype%",
                        replace: "symbol",
                        search: "symbol",
                        species: "symbol",
                        split: "symbol",
                        toPrimitive: "symbol",
                        toStringTag: "symbol",
                        unscopables: "symbol",
                        asyncDispose: "symbol",
                        dispose: "symbol",
                        useSimple: false,
                        useSetter: false,
                        operatorSet: false
                    },
                    "%SymbolPrototype%": {
                        constructor: "%SharedSymbol%",
                        description: getter,
                        toString: fn,
                        valueOf: fn,
                        "@@toPrimitive": fn,
                        "@@toStringTag": "string"
                    },
                    "%InitialError%": {
                        "[[Proto]]": "%FunctionPrototype%",
                        prototype: "%ErrorPrototype%",
                        captureStackTrace: fn,
                        stackTraceLimit: accessor,
                        prepareStackTrace: accessor,
                        isError: fn
                    },
                    "%SharedError%": {
                        "[[Proto]]": "%FunctionPrototype%",
                        prototype: "%ErrorPrototype%",
                        captureStackTrace: fn,
                        stackTraceLimit: accessor,
                        prepareStackTrace: accessor,
                        isError: fn
                    },
                    "%ErrorPrototype%": {
                        constructor: "%SharedError%",
                        message: "string",
                        name: "string",
                        toString: fn,
                        at: false,
                        stack: accessor,
                        cause: false
                    },
                    EvalError: NativeError("%EvalErrorPrototype%"),
                    RangeError: NativeError("%RangeErrorPrototype%"),
                    ReferenceError: NativeError("%ReferenceErrorPrototype%"),
                    SyntaxError: NativeError("%SyntaxErrorPrototype%"),
                    TypeError: NativeError("%TypeErrorPrototype%"),
                    URIError: NativeError("%URIErrorPrototype%"),
                    AggregateError: NativeError("%AggregateErrorPrototype%"),
                    "%EvalErrorPrototype%": NativeErrorPrototype("EvalError"),
                    "%RangeErrorPrototype%": NativeErrorPrototype("RangeError"),
                    "%ReferenceErrorPrototype%": NativeErrorPrototype("ReferenceError"),
                    "%SyntaxErrorPrototype%": NativeErrorPrototype("SyntaxError"),
                    "%TypeErrorPrototype%": NativeErrorPrototype("TypeError"),
                    "%URIErrorPrototype%": NativeErrorPrototype("URIError"),
                    "%AggregateErrorPrototype%": NativeErrorPrototype("AggregateError"),
                    Number: {
                        "[[Proto]]": "%FunctionPrototype%",
                        EPSILON: "number",
                        isFinite: fn,
                        isInteger: fn,
                        isNaN: fn,
                        isSafeInteger: fn,
                        MAX_SAFE_INTEGER: "number",
                        MAX_VALUE: "number",
                        MIN_SAFE_INTEGER: "number",
                        MIN_VALUE: "number",
                        NaN: "number",
                        NEGATIVE_INFINITY: "number",
                        parseFloat: fn,
                        parseInt: fn,
                        POSITIVE_INFINITY: "number",
                        prototype: "%NumberPrototype%"
                    },
                    "%NumberPrototype%": {
                        constructor: "Number",
                        toExponential: fn,
                        toFixed: fn,
                        toLocaleString: fn,
                        toPrecision: fn,
                        toString: fn,
                        valueOf: fn
                    },
                    BigInt: {
                        "[[Proto]]": "%FunctionPrototype%",
                        asIntN: fn,
                        asUintN: fn,
                        prototype: "%BigIntPrototype%",
                        bitLength: false,
                        fromArrayBuffer: false,
                        tdiv: false,
                        fdiv: false,
                        cdiv: false,
                        ediv: false,
                        tdivrem: false,
                        fdivrem: false,
                        cdivrem: false,
                        edivrem: false,
                        sqrt: false,
                        sqrtrem: false,
                        floorLog2: false,
                        ctz: false
                    },
                    "%BigIntPrototype%": {
                        constructor: "BigInt",
                        toLocaleString: fn,
                        toString: fn,
                        valueOf: fn,
                        "@@toStringTag": "string"
                    },
                    "%InitialMath%": {
                        ...CommonMath,
                        random: fn
                    },
                    "%SharedMath%": {
                        ...CommonMath,
                        random: fn
                    },
                    "%InitialDate%": {
                        "[[Proto]]": "%FunctionPrototype%",
                        now: fn,
                        parse: fn,
                        prototype: "%DatePrototype%",
                        UTC: fn
                    },
                    "%SharedDate%": {
                        "[[Proto]]": "%FunctionPrototype%",
                        now: fn,
                        parse: fn,
                        prototype: "%DatePrototype%",
                        UTC: fn
                    },
                    "%DatePrototype%": {
                        constructor: "%SharedDate%",
                        getDate: fn,
                        getDay: fn,
                        getFullYear: fn,
                        getHours: fn,
                        getMilliseconds: fn,
                        getMinutes: fn,
                        getMonth: fn,
                        getSeconds: fn,
                        getTime: fn,
                        getTimezoneOffset: fn,
                        getUTCDate: fn,
                        getUTCDay: fn,
                        getUTCFullYear: fn,
                        getUTCHours: fn,
                        getUTCMilliseconds: fn,
                        getUTCMinutes: fn,
                        getUTCMonth: fn,
                        getUTCSeconds: fn,
                        setDate: fn,
                        setFullYear: fn,
                        setHours: fn,
                        setMilliseconds: fn,
                        setMinutes: fn,
                        setMonth: fn,
                        setSeconds: fn,
                        setTime: fn,
                        setUTCDate: fn,
                        setUTCFullYear: fn,
                        setUTCHours: fn,
                        setUTCMilliseconds: fn,
                        setUTCMinutes: fn,
                        setUTCMonth: fn,
                        setUTCSeconds: fn,
                        toDateString: fn,
                        toISOString: fn,
                        toJSON: fn,
                        toLocaleDateString: fn,
                        toLocaleString: fn,
                        toLocaleTimeString: fn,
                        toString: fn,
                        toTimeString: fn,
                        toUTCString: fn,
                        valueOf: fn,
                        "@@toPrimitive": fn,
                        getYear: fn,
                        setYear: fn,
                        toGMTString: fn,
                        toTemporalInstant: fn
                    },
                    String: {
                        "[[Proto]]": "%FunctionPrototype%",
                        fromCharCode: fn,
                        fromCodePoint: fn,
                        prototype: "%StringPrototype%",
                        raw: fn,
                        fromArrayBuffer: false
                    },
                    "%StringPrototype%": {
                        length: "number",
                        charAt: fn,
                        charCodeAt: fn,
                        codePointAt: fn,
                        concat: fn,
                        constructor: "String",
                        endsWith: fn,
                        includes: fn,
                        indexOf: fn,
                        lastIndexOf: fn,
                        localeCompare: fn,
                        match: fn,
                        matchAll: fn,
                        normalize: fn,
                        padEnd: fn,
                        padStart: fn,
                        repeat: fn,
                        replace: fn,
                        replaceAll: fn,
                        search: fn,
                        slice: fn,
                        split: fn,
                        startsWith: fn,
                        substring: fn,
                        toLocaleLowerCase: fn,
                        toLocaleUpperCase: fn,
                        toLowerCase: fn,
                        toString: fn,
                        toUpperCase: fn,
                        trim: fn,
                        trimEnd: fn,
                        trimStart: fn,
                        valueOf: fn,
                        "@@iterator": fn,
                        at: fn,
                        isWellFormed: fn,
                        toWellFormed: fn,
                        unicodeSets: fn,
                        substr: fn,
                        anchor: fn,
                        big: fn,
                        blink: fn,
                        bold: fn,
                        fixed: fn,
                        fontcolor: fn,
                        fontsize: fn,
                        italics: fn,
                        link: fn,
                        small: fn,
                        strike: fn,
                        sub: fn,
                        sup: fn,
                        trimLeft: fn,
                        trimRight: fn,
                        compare: false,
                        __quote: false
                    },
                    "%StringIteratorPrototype%": {
                        "[[Proto]]": "%IteratorPrototype%",
                        next: fn,
                        "@@toStringTag": "string"
                    },
                    "%InitialRegExp%": {
                        "[[Proto]]": "%FunctionPrototype%",
                        prototype: "%RegExpPrototype%",
                        "@@species": getter,
                        escape: fn,
                        input: false,
                        $_: false,
                        lastMatch: false,
                        "$&": false,
                        lastParen: false,
                        "$+": false,
                        leftContext: false,
                        "$`": false,
                        rightContext: false,
                        "$'": false,
                        $1: false,
                        $2: false,
                        $3: false,
                        $4: false,
                        $5: false,
                        $6: false,
                        $7: false,
                        $8: false,
                        $9: false
                    },
                    "%SharedRegExp%": {
                        "[[Proto]]": "%FunctionPrototype%",
                        prototype: "%RegExpPrototype%",
                        "@@species": getter,
                        escape: fn
                    },
                    "%RegExpPrototype%": {
                        constructor: "%SharedRegExp%",
                        exec: fn,
                        dotAll: getter,
                        flags: getter,
                        global: getter,
                        hasIndices: getter,
                        ignoreCase: getter,
                        "@@match": fn,
                        "@@matchAll": fn,
                        multiline: getter,
                        "@@replace": fn,
                        "@@search": fn,
                        source: getter,
                        "@@split": fn,
                        sticky: getter,
                        test: fn,
                        toString: fn,
                        unicode: getter,
                        unicodeSets: getter,
                        compile: false
                    },
                    "%RegExpStringIteratorPrototype%": {
                        "[[Proto]]": "%IteratorPrototype%",
                        next: fn,
                        "@@toStringTag": "string"
                    },
                    Array: {
                        "[[Proto]]": "%FunctionPrototype%",
                        from: fn,
                        isArray: fn,
                        of: fn,
                        prototype: "%ArrayPrototype%",
                        "@@species": getter,
                        at: fn,
                        fromAsync: fn
                    },
                    "%ArrayPrototype%": {
                        length: "number",
                        concat: fn,
                        constructor: "Array",
                        copyWithin: fn,
                        entries: fn,
                        every: fn,
                        fill: fn,
                        filter: fn,
                        find: fn,
                        findIndex: fn,
                        flat: fn,
                        flatMap: fn,
                        forEach: fn,
                        includes: fn,
                        indexOf: fn,
                        join: fn,
                        keys: fn,
                        lastIndexOf: fn,
                        map: fn,
                        pop: fn,
                        push: fn,
                        reduce: fn,
                        reduceRight: fn,
                        reverse: fn,
                        shift: fn,
                        slice: fn,
                        some: fn,
                        sort: fn,
                        splice: fn,
                        toLocaleString: fn,
                        toString: fn,
                        unshift: fn,
                        values: fn,
                        "@@iterator": fn,
                        "@@unscopables": {
                            "[[Proto]]": null,
                            copyWithin: "boolean",
                            entries: "boolean",
                            fill: "boolean",
                            find: "boolean",
                            findIndex: "boolean",
                            flat: "boolean",
                            flatMap: "boolean",
                            includes: "boolean",
                            keys: "boolean",
                            values: "boolean",
                            at: "boolean",
                            findLast: "boolean",
                            findLastIndex: "boolean",
                            toReversed: "boolean",
                            toSorted: "boolean",
                            toSpliced: "boolean",
                            with: "boolean",
                            group: "boolean",
                            groupToMap: "boolean",
                            groupBy: "boolean"
                        },
                        findLast: fn,
                        findLastIndex: fn,
                        toReversed: fn,
                        toSorted: fn,
                        toSpliced: fn,
                        with: fn,
                        group: fn,
                        groupToMap: fn,
                        groupBy: fn,
                        at: fn
                    },
                    "%ArrayIteratorPrototype%": {
                        "[[Proto]]": "%IteratorPrototype%",
                        next: fn,
                        "@@toStringTag": "string"
                    },
                    "%TypedArray%": {
                        "[[Proto]]": "%FunctionPrototype%",
                        from: fn,
                        of: fn,
                        prototype: "%TypedArrayPrototype%",
                        "@@species": getter
                    },
                    "%TypedArrayPrototype%": {
                        buffer: getter,
                        byteLength: getter,
                        byteOffset: getter,
                        constructor: "%TypedArray%",
                        copyWithin: fn,
                        entries: fn,
                        every: fn,
                        fill: fn,
                        filter: fn,
                        find: fn,
                        findIndex: fn,
                        forEach: fn,
                        includes: fn,
                        indexOf: fn,
                        join: fn,
                        keys: fn,
                        lastIndexOf: fn,
                        length: getter,
                        map: fn,
                        reduce: fn,
                        reduceRight: fn,
                        reverse: fn,
                        set: fn,
                        slice: fn,
                        some: fn,
                        sort: fn,
                        subarray: fn,
                        toLocaleString: fn,
                        toString: fn,
                        values: fn,
                        "@@iterator": fn,
                        "@@toStringTag": getter,
                        at: fn,
                        findLast: fn,
                        findLastIndex: fn,
                        toReversed: fn,
                        toSorted: fn,
                        with: fn
                    },
                    BigInt64Array: TypedArray("%BigInt64ArrayPrototype%"),
                    BigUint64Array: TypedArray("%BigUint64ArrayPrototype%"),
                    Float16Array: TypedArray("%Float16ArrayPrototype%"),
                    Float32Array: TypedArray("%Float32ArrayPrototype%"),
                    Float64Array: TypedArray("%Float64ArrayPrototype%"),
                    Int16Array: TypedArray("%Int16ArrayPrototype%"),
                    Int32Array: TypedArray("%Int32ArrayPrototype%"),
                    Int8Array: TypedArray("%Int8ArrayPrototype%"),
                    Uint16Array: TypedArray("%Uint16ArrayPrototype%"),
                    Uint32Array: TypedArray("%Uint32ArrayPrototype%"),
                    Uint8ClampedArray: TypedArray("%Uint8ClampedArrayPrototype%"),
                    Uint8Array: {
                        ...TypedArray("%Uint8ArrayPrototype%"),
                        fromBase64: fn,
                        fromHex: fn
                    },
                    "%BigInt64ArrayPrototype%": TypedArrayPrototype("BigInt64Array"),
                    "%BigUint64ArrayPrototype%": TypedArrayPrototype("BigUint64Array"),
                    "%Float16ArrayPrototype%": TypedArrayPrototype("Float16Array"),
                    "%Float32ArrayPrototype%": TypedArrayPrototype("Float32Array"),
                    "%Float64ArrayPrototype%": TypedArrayPrototype("Float64Array"),
                    "%Int16ArrayPrototype%": TypedArrayPrototype("Int16Array"),
                    "%Int32ArrayPrototype%": TypedArrayPrototype("Int32Array"),
                    "%Int8ArrayPrototype%": TypedArrayPrototype("Int8Array"),
                    "%Uint16ArrayPrototype%": TypedArrayPrototype("Uint16Array"),
                    "%Uint32ArrayPrototype%": TypedArrayPrototype("Uint32Array"),
                    "%Uint8ClampedArrayPrototype%": TypedArrayPrototype("Uint8ClampedArray"),
                    "%Uint8ArrayPrototype%": {
                        ...TypedArrayPrototype("Uint8Array"),
                        setFromBase64: fn,
                        setFromHex: fn,
                        toBase64: fn,
                        toHex: fn
                    },
                    Map: {
                        "[[Proto]]": "%FunctionPrototype%",
                        "@@species": getter,
                        prototype: "%MapPrototype%",
                        groupBy: fn
                    },
                    "%MapPrototype%": {
                        clear: fn,
                        constructor: "Map",
                        delete: fn,
                        entries: fn,
                        forEach: fn,
                        get: fn,
                        getOrInsert: fn,
                        getOrInsertComputed: fn,
                        has: fn,
                        keys: fn,
                        set: fn,
                        size: getter,
                        values: fn,
                        "@@iterator": fn,
                        "@@toStringTag": "string"
                    },
                    "%MapIteratorPrototype%": {
                        "[[Proto]]": "%IteratorPrototype%",
                        next: fn,
                        "@@toStringTag": "string"
                    },
                    Set: {
                        "[[Proto]]": "%FunctionPrototype%",
                        prototype: "%SetPrototype%",
                        "@@species": getter,
                        groupBy: false
                    },
                    "%SetPrototype%": {
                        add: fn,
                        clear: fn,
                        constructor: "Set",
                        delete: fn,
                        entries: fn,
                        forEach: fn,
                        has: fn,
                        keys: fn,
                        size: getter,
                        values: fn,
                        "@@iterator": fn,
                        "@@toStringTag": "string",
                        intersection: fn,
                        union: fn,
                        difference: fn,
                        symmetricDifference: fn,
                        isSubsetOf: fn,
                        isSupersetOf: fn,
                        isDisjointFrom: fn
                    },
                    "%SetIteratorPrototype%": {
                        "[[Proto]]": "%IteratorPrototype%",
                        next: fn,
                        "@@toStringTag": "string"
                    },
                    WeakMap: {
                        "[[Proto]]": "%FunctionPrototype%",
                        prototype: "%WeakMapPrototype%"
                    },
                    "%WeakMapPrototype%": {
                        constructor: "WeakMap",
                        delete: fn,
                        get: fn,
                        getOrInsert: fn,
                        getOrInsertComputed: fn,
                        has: fn,
                        set: fn,
                        "@@toStringTag": "string"
                    },
                    WeakSet: {
                        "[[Proto]]": "%FunctionPrototype%",
                        prototype: "%WeakSetPrototype%"
                    },
                    "%WeakSetPrototype%": {
                        add: fn,
                        constructor: "WeakSet",
                        delete: fn,
                        has: fn,
                        "@@toStringTag": "string"
                    },
                    ArrayBuffer: {
                        "[[Proto]]": "%FunctionPrototype%",
                        isView: fn,
                        prototype: "%ArrayBufferPrototype%",
                        "@@species": getter,
                        fromString: false,
                        fromBigInt: false
                    },
                    "%ArrayBufferPrototype%": {
                        byteLength: getter,
                        constructor: "ArrayBuffer",
                        slice: fn,
                        "@@toStringTag": "string",
                        concat: false,
                        transfer: fn,
                        resize: fn,
                        resizable: getter,
                        maxByteLength: getter,
                        transferToFixedLength: fn,
                        detached: getter,
                        transferToImmutable: fn,
                        sliceToImmutable: fn,
                        immutable: getter
                    },
                    SharedArrayBuffer: false,
                    "%SharedArrayBufferPrototype%": false,
                    DataView: {
                        "[[Proto]]": "%FunctionPrototype%",
                        BYTES_PER_ELEMENT: "number",
                        prototype: "%DataViewPrototype%"
                    },
                    "%DataViewPrototype%": {
                        buffer: getter,
                        byteLength: getter,
                        byteOffset: getter,
                        constructor: "DataView",
                        getBigInt64: fn,
                        getBigUint64: fn,
                        getFloat16: fn,
                        getFloat32: fn,
                        getFloat64: fn,
                        getInt8: fn,
                        getInt16: fn,
                        getInt32: fn,
                        getUint8: fn,
                        getUint16: fn,
                        getUint32: fn,
                        setBigInt64: fn,
                        setBigUint64: fn,
                        setFloat16: fn,
                        setFloat32: fn,
                        setFloat64: fn,
                        setInt8: fn,
                        setInt16: fn,
                        setInt32: fn,
                        setUint8: fn,
                        setUint16: fn,
                        setUint32: fn,
                        "@@toStringTag": "string"
                    },
                    Atomics: false,
                    JSON: {
                        parse: fn,
                        stringify: fn,
                        "@@toStringTag": "string",
                        rawJSON: fn,
                        isRawJSON: fn
                    },
                    Iterator: {
                        "[[Proto]]": "%FunctionPrototype%",
                        prototype: "%IteratorPrototype%",
                        from: fn,
                        zip: fn,
                        zipKeyed: fn,
                        concat: fn
                    },
                    "%IteratorPrototype%": {
                        "@@iterator": fn,
                        constructor: "Iterator",
                        map: fn,
                        filter: fn,
                        take: fn,
                        drop: fn,
                        flatMap: fn,
                        reduce: fn,
                        toArray: fn,
                        forEach: fn,
                        some: fn,
                        every: fn,
                        find: fn,
                        "@@toStringTag": "string",
                        toAsync: fn,
                        "@@dispose": false
                    },
                    "%WrapForValidIteratorPrototype%": {
                        "[[Proto]]": "%IteratorPrototype%",
                        next: fn,
                        return: fn
                    },
                    "%IteratorHelperPrototype%": {
                        "[[Proto]]": "%IteratorPrototype%",
                        next: fn,
                        return: fn,
                        "@@toStringTag": "string"
                    },
                    AsyncIterator: {
                        "[[Proto]]": "%FunctionPrototype%",
                        prototype: "%AsyncIteratorPrototype%",
                        from: fn
                    },
                    "%AsyncIteratorPrototype%": {
                        "@@asyncIterator": fn,
                        constructor: "AsyncIterator",
                        map: fn,
                        filter: fn,
                        take: fn,
                        drop: fn,
                        flatMap: fn,
                        reduce: fn,
                        toArray: fn,
                        forEach: fn,
                        some: fn,
                        every: fn,
                        find: fn,
                        "@@toStringTag": "string",
                        "@@asyncDispose": false
                    },
                    "%WrapForValidAsyncIteratorPrototype%": {
                        "[[Proto]]": "%AsyncIteratorPrototype%",
                        next: fn,
                        return: fn
                    },
                    "%AsyncIteratorHelperPrototype%": {
                        "[[Proto]]": "%AsyncIteratorPrototype%",
                        next: fn,
                        return: fn,
                        "@@toStringTag": "string"
                    },
                    "%InertGeneratorFunction%": {
                        "[[Proto]]": "%InertFunction%",
                        prototype: "%Generator%"
                    },
                    "%Generator%": {
                        "[[Proto]]": "%FunctionPrototype%",
                        constructor: "%InertGeneratorFunction%",
                        prototype: "%GeneratorPrototype%",
                        "@@toStringTag": "string"
                    },
                    "%InertAsyncGeneratorFunction%": {
                        "[[Proto]]": "%InertFunction%",
                        prototype: "%AsyncGenerator%"
                    },
                    "%AsyncGenerator%": {
                        "[[Proto]]": "%FunctionPrototype%",
                        constructor: "%InertAsyncGeneratorFunction%",
                        prototype: "%AsyncGeneratorPrototype%",
                        length: "number",
                        "@@toStringTag": "string"
                    },
                    "%GeneratorPrototype%": {
                        "[[Proto]]": "%IteratorPrototype%",
                        constructor: "%Generator%",
                        next: fn,
                        return: fn,
                        throw: fn,
                        "@@toStringTag": "string"
                    },
                    "%AsyncGeneratorPrototype%": {
                        "[[Proto]]": "%AsyncIteratorPrototype%",
                        constructor: "%AsyncGenerator%",
                        next: fn,
                        return: fn,
                        throw: fn,
                        "@@toStringTag": "string"
                    },
                    HandledPromise: {
                        "[[Proto]]": "Promise",
                        applyFunction: fn,
                        applyFunctionSendOnly: fn,
                        applyMethod: fn,
                        applyMethodSendOnly: fn,
                        get: fn,
                        getSendOnly: fn,
                        prototype: "%PromisePrototype%",
                        resolve: fn
                    },
                    ModuleSource: {
                        "[[Proto]]": "%AbstractModuleSource%",
                        prototype: "%ModuleSourcePrototype%"
                    },
                    "%ModuleSourcePrototype%": {
                        "[[Proto]]": "%AbstractModuleSourcePrototype%",
                        constructor: "ModuleSource",
                        "@@toStringTag": "string",
                        bindings: getter,
                        needsImport: getter,
                        needsImportMeta: getter,
                        imports: getter,
                        exports: getter,
                        reexports: getter
                    },
                    "%AbstractModuleSource%": {
                        "[[Proto]]": "%FunctionPrototype%",
                        prototype: "%AbstractModuleSourcePrototype%"
                    },
                    "%AbstractModuleSourcePrototype%": {
                        constructor: "%AbstractModuleSource%"
                    },
                    Promise: {
                        "[[Proto]]": "%FunctionPrototype%",
                        all: fn,
                        allSettled: fn,
                        any: fn,
                        prototype: "%PromisePrototype%",
                        race: fn,
                        reject: fn,
                        resolve: fn,
                        withResolvers: fn,
                        "@@species": getter,
                        try: fn
                    },
                    "%PromisePrototype%": {
                        catch: fn,
                        constructor: "Promise",
                        finally: fn,
                        then: fn,
                        "@@toStringTag": "string",
                        "UniqueSymbol(async_id_symbol)": accessor,
                        "UniqueSymbol(trigger_async_id_symbol)": accessor,
                        "UniqueSymbol(destroyed)": accessor
                    },
                    "%InertAsyncFunction%": {
                        "[[Proto]]": "%InertFunction%",
                        prototype: "%AsyncFunctionPrototype%"
                    },
                    "%AsyncFunctionPrototype%": {
                        "[[Proto]]": "%FunctionPrototype%",
                        constructor: "%InertAsyncFunction%",
                        length: "number",
                        "@@toStringTag": "string"
                    },
                    Reflect: {
                        apply: fn,
                        construct: fn,
                        defineProperty: fn,
                        deleteProperty: fn,
                        get: fn,
                        getOwnPropertyDescriptor: fn,
                        getPrototypeOf: fn,
                        has: fn,
                        isExtensible: fn,
                        ownKeys: fn,
                        preventExtensions: fn,
                        set: fn,
                        setPrototypeOf: fn,
                        "@@toStringTag": "string"
                    },
                    Proxy: {
                        "[[Proto]]": "%FunctionPrototype%",
                        revocable: fn
                    },
                    "%Temporal.PlainDatePrototype%": {
                        constructor: "%Temporal.PlainDate%",
                        era: accessor,
                        eraYear: accessor,
                        calendarId: accessor,
                        year: accessor,
                        month: accessor,
                        monthCode: accessor,
                        day: accessor,
                        dayOfWeek: accessor,
                        dayOfYear: accessor,
                        weekOfYear: accessor,
                        yearOfWeek: accessor,
                        daysInWeek: accessor,
                        daysInMonth: accessor,
                        daysInYear: accessor,
                        monthsInYear: accessor,
                        inLeapYear: accessor,
                        toPlainYearMonth: fn,
                        toPlainMonthDay: fn,
                        add: fn,
                        subtract: fn,
                        with: fn,
                        withCalendar: fn,
                        until: fn,
                        since: fn,
                        equals: fn,
                        toPlainDateTime: fn,
                        toZonedDateTime: fn,
                        toString: fn,
                        toLocaleString: fn,
                        toJSON: fn,
                        valueOf: fn,
                        "@@toStringTag": "string"
                    },
                    "%Temporal.PlainDate%": {
                        "[[Proto]]": "%FunctionPrototype%",
                        length: "number",
                        name: "string",
                        prototype: "%Temporal.PlainDatePrototype%",
                        from: fn,
                        compare: fn
                    },
                    "%Temporal.PlainTimePrototype%": {
                        constructor: "%Temporal.PlainTime%",
                        hour: accessor,
                        minute: accessor,
                        second: accessor,
                        millisecond: accessor,
                        microsecond: accessor,
                        nanosecond: accessor,
                        add: fn,
                        subtract: fn,
                        with: fn,
                        until: fn,
                        since: fn,
                        round: fn,
                        equals: fn,
                        toLocaleString: fn,
                        toString: fn,
                        toJSON: fn,
                        valueOf: fn,
                        "@@toStringTag": "string"
                    },
                    "%Temporal.PlainTime%": {
                        "[[Proto]]": "%FunctionPrototype%",
                        length: "number",
                        name: "string",
                        prototype: "%Temporal.PlainTimePrototype%",
                        from: fn,
                        compare: fn
                    },
                    "%Temporal.PlainDateTimePrototype%": {
                        constructor: "%Temporal.PlainDateTime%",
                        calendarId: accessor,
                        era: accessor,
                        eraYear: accessor,
                        year: accessor,
                        month: accessor,
                        monthCode: accessor,
                        day: accessor,
                        hour: accessor,
                        minute: accessor,
                        second: accessor,
                        millisecond: accessor,
                        microsecond: accessor,
                        nanosecond: accessor,
                        dayOfWeek: accessor,
                        dayOfYear: accessor,
                        weekOfYear: accessor,
                        yearOfWeek: accessor,
                        daysInWeek: accessor,
                        daysInMonth: accessor,
                        daysInYear: accessor,
                        monthsInYear: accessor,
                        inLeapYear: accessor,
                        with: fn,
                        withCalendar: fn,
                        withPlainTime: fn,
                        add: fn,
                        subtract: fn,
                        until: fn,
                        since: fn,
                        round: fn,
                        equals: fn,
                        toLocaleString: fn,
                        toJSON: fn,
                        toString: fn,
                        valueOf: fn,
                        toZonedDateTime: fn,
                        toPlainDate: fn,
                        toPlainTime: fn,
                        "@@toStringTag": "string"
                    },
                    "%Temporal.PlainDateTime%": {
                        "[[Proto]]": "%FunctionPrototype%",
                        length: "number",
                        name: "string",
                        prototype: "%Temporal.PlainDateTimePrototype%",
                        from: fn,
                        compare: fn
                    },
                    "%Temporal.ZonedDateTimePrototype%": {
                        constructor: "%Temporal.ZonedDateTime%",
                        timeZoneId: accessor,
                        calendarId: accessor,
                        era: accessor,
                        eraYear: accessor,
                        year: accessor,
                        month: accessor,
                        monthCode: accessor,
                        day: accessor,
                        hour: accessor,
                        minute: accessor,
                        second: accessor,
                        millisecond: accessor,
                        microsecond: accessor,
                        nanosecond: accessor,
                        epochMilliseconds: accessor,
                        epochNanoseconds: accessor,
                        dayOfWeek: accessor,
                        dayOfYear: accessor,
                        weekOfYear: accessor,
                        yearOfWeek: accessor,
                        hoursInDay: accessor,
                        daysInWeek: accessor,
                        daysInMonth: accessor,
                        daysInYear: accessor,
                        monthsInYear: accessor,
                        inLeapYear: accessor,
                        offsetNanoseconds: accessor,
                        offset: accessor,
                        with: fn,
                        withCalendar: fn,
                        withPlainTime: fn,
                        withTimeZone: fn,
                        add: fn,
                        subtract: fn,
                        until: fn,
                        since: fn,
                        round: fn,
                        equals: fn,
                        toLocaleString: fn,
                        toString: fn,
                        toJSON: fn,
                        valueOf: fn,
                        startOfDay: fn,
                        getTimeZoneTransition: fn,
                        toInstant: fn,
                        toPlainDate: fn,
                        toPlainTime: fn,
                        toPlainDateTime: fn,
                        "@@toStringTag": "string"
                    },
                    "%Temporal.ZonedDateTime%": {
                        "[[Proto]]": "%FunctionPrototype%",
                        length: "number",
                        name: "string",
                        prototype: "%Temporal.ZonedDateTimePrototype%",
                        from: fn,
                        compare: fn
                    },
                    "%Temporal.DurationPrototype%": {
                        constructor: "%Temporal.Duration%",
                        years: accessor,
                        months: accessor,
                        weeks: accessor,
                        days: accessor,
                        hours: accessor,
                        minutes: accessor,
                        seconds: accessor,
                        milliseconds: accessor,
                        microseconds: accessor,
                        nanoseconds: accessor,
                        sign: accessor,
                        blank: accessor,
                        with: fn,
                        negated: fn,
                        abs: fn,
                        add: fn,
                        subtract: fn,
                        round: fn,
                        total: fn,
                        toLocaleString: fn,
                        toString: fn,
                        toJSON: fn,
                        valueOf: fn,
                        "@@toStringTag": "string"
                    },
                    "%Temporal.Duration%": {
                        "[[Proto]]": "%FunctionPrototype%",
                        length: "number",
                        name: "string",
                        prototype: "%Temporal.DurationPrototype%",
                        from: fn,
                        compare: fn
                    },
                    "%Temporal.InstantPrototype%": {
                        constructor: "%Temporal.Instant%",
                        epochMilliseconds: accessor,
                        epochNanoseconds: accessor,
                        add: fn,
                        subtract: fn,
                        until: fn,
                        since: fn,
                        round: fn,
                        equals: fn,
                        toLocaleString: fn,
                        toString: fn,
                        toJSON: fn,
                        valueOf: fn,
                        toZonedDateTimeISO: fn,
                        "@@toStringTag": "string"
                    },
                    "%Temporal.Instant%": {
                        "[[Proto]]": "%FunctionPrototype%",
                        length: "number",
                        name: "string",
                        prototype: "%Temporal.InstantPrototype%",
                        from: fn,
                        fromEpochMilliseconds: fn,
                        fromEpochNanoseconds: fn,
                        compare: fn
                    },
                    "%Temporal.PlainYearMonthPrototype%": {
                        constructor: "%Temporal.PlainYearMonth%",
                        calendarId: accessor,
                        era: accessor,
                        eraYear: accessor,
                        year: accessor,
                        month: accessor,
                        monthCode: accessor,
                        daysInYear: accessor,
                        daysInMonth: accessor,
                        monthsInYear: accessor,
                        inLeapYear: accessor,
                        with: fn,
                        add: fn,
                        subtract: fn,
                        until: fn,
                        since: fn,
                        equals: fn,
                        toLocaleString: fn,
                        toString: fn,
                        toJSON: fn,
                        valueOf: fn,
                        toPlainDate: fn,
                        "@@toStringTag": "string"
                    },
                    "%Temporal.PlainYearMonth%": {
                        "[[Proto]]": "%FunctionPrototype%",
                        length: "number",
                        name: "string",
                        prototype: "%Temporal.PlainYearMonthPrototype%",
                        from: fn,
                        compare: fn
                    },
                    "%Temporal.PlainMonthDayPrototype%": {
                        constructor: "%Temporal.PlainMonthDay%",
                        calendarId: accessor,
                        monthCode: accessor,
                        day: accessor,
                        with: fn,
                        equals: fn,
                        toLocaleString: fn,
                        toString: fn,
                        toJSON: fn,
                        valueOf: fn,
                        toPlainDate: fn,
                        "@@toStringTag": "string"
                    },
                    "%Temporal.PlainMonthDay%": {
                        "[[Proto]]": "%FunctionPrototype%",
                        length: "number",
                        name: "string",
                        prototype: "%Temporal.PlainMonthDayPrototype%",
                        from: fn
                    },
                    "%Temporal.Now%": {
                        instant: fn,
                        timeZoneId: fn,
                        plainDateTimeISO: fn,
                        zonedDateTimeISO: fn,
                        plainDateISO: fn,
                        plainTimeISO: fn,
                        "@@toStringTag": "string"
                    },
                    "%InitialTemporal%": {
                        Now: "%Temporal.Now%",
                        PlainDate: "%Temporal.PlainDate%",
                        PlainTime: "%Temporal.PlainTime%",
                        PlainDateTime: "%Temporal.PlainDateTime%",
                        ZonedDateTime: "%Temporal.ZonedDateTime%",
                        Duration: "%Temporal.Duration%",
                        Instant: "%Temporal.Instant%",
                        PlainYearMonth: "%Temporal.PlainYearMonth%",
                        PlainMonthDay: "%Temporal.PlainMonthDay%",
                        "@@toStringTag": "string"
                    },
                    "%SharedTemporal%": {
                        PlainDate: "%Temporal.PlainDate%",
                        PlainTime: "%Temporal.PlainTime%",
                        PlainDateTime: "%Temporal.PlainDateTime%",
                        ZonedDateTime: "%Temporal.ZonedDateTime%",
                        Duration: "%Temporal.Duration%",
                        Instant: "%Temporal.Instant%",
                        PlainYearMonth: "%Temporal.PlainYearMonth%",
                        PlainMonthDay: "%Temporal.PlainMonthDay%",
                        "@@toStringTag": "string"
                    },
                    TextEncoder: {
                        "[[Proto]]": "%FunctionPrototype%",
                        prototype: "%TextEncoderPrototype%"
                    },
                    "%TextEncoderPrototype%": {
                        constructor: "TextEncoder",
                        encode: fn,
                        encodeInto: fn,
                        encoding: getter,
                        "@@toStringTag": "string",
                        "RegisteredSymbol(nodejs.util.inspect.custom)": false
                    },
                    TextDecoder: {
                        "[[Proto]]": "%FunctionPrototype%",
                        prototype: "%TextDecoderPrototype%"
                    },
                    "%TextDecoderPrototype%": {
                        constructor: "TextDecoder",
                        decode: fn,
                        encoding: getter,
                        fatal: getter,
                        ignoreBOM: getter,
                        "@@toStringTag": "string",
                        "RegisteredSymbol(nodejs.util.inspect.custom)": false
                    },
                    escape: fn,
                    unescape: fn,
                    "%UniqueCompartment%": {
                        "[[Proto]]": "%FunctionPrototype%",
                        prototype: "%CompartmentPrototype%",
                        toString: fn
                    },
                    "%InertCompartment%": {
                        "[[Proto]]": "%FunctionPrototype%",
                        prototype: "%CompartmentPrototype%",
                        toString: fn
                    },
                    "%CompartmentPrototype%": {
                        constructor: "%InertCompartment%",
                        evaluate: fn,
                        globalThis: getter,
                        name: getter,
                        import: asyncFn,
                        load: asyncFn,
                        importNow: fn,
                        module: fn,
                        __noNamespaceBox__: getter,
                        "@@toStringTag": "string"
                    },
                    lockdown: fn,
                    harden: {
                        ...fn,
                        isFake: "boolean"
                    },
                    "%InitialGetStackString%": fn
                };
                $h͏_once.permitted(permitted);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let cauterizeProperty, TypeError, WeakSet, arrayFilter, create, defineProperty, entries, freeze, getOwnPropertyDescriptor, getOwnPropertyDescriptors, globalThis, is, isPrimitive, hasOwn, values, weaksetHas, constantProperties, sharedGlobalPropertyNames, universalPropertyNames, permitted;
                $h͏_imports([ [ "./cauterize-property.js", [ [ "cauterizeProperty", [ $h͏_a => cauterizeProperty = $h͏_a ] ] ] ], [ "./commons.js", [ [ "TypeError", [ $h͏_a => TypeError = $h͏_a ] ], [ "WeakSet", [ $h͏_a => WeakSet = $h͏_a ] ], [ "arrayFilter", [ $h͏_a => arrayFilter = $h͏_a ] ], [ "create", [ $h͏_a => create = $h͏_a ] ], [ "defineProperty", [ $h͏_a => defineProperty = $h͏_a ] ], [ "entries", [ $h͏_a => entries = $h͏_a ] ], [ "freeze", [ $h͏_a => freeze = $h͏_a ] ], [ "getOwnPropertyDescriptor", [ $h͏_a => getOwnPropertyDescriptor = $h͏_a ] ], [ "getOwnPropertyDescriptors", [ $h͏_a => getOwnPropertyDescriptors = $h͏_a ] ], [ "globalThis", [ $h͏_a => globalThis = $h͏_a ] ], [ "is", [ $h͏_a => is = $h͏_a ] ], [ "isPrimitive", [ $h͏_a => isPrimitive = $h͏_a ] ], [ "hasOwn", [ $h͏_a => hasOwn = $h͏_a ] ], [ "values", [ $h͏_a => values = $h͏_a ] ], [ "weaksetHas", [ $h͏_a => weaksetHas = $h͏_a ] ] ] ], [ "./permits.js", [ [ "constantProperties", [ $h͏_a => constantProperties = $h͏_a ] ], [ "sharedGlobalPropertyNames", [ $h͏_a => sharedGlobalPropertyNames = $h͏_a ] ], [ "universalPropertyNames", [ $h͏_a => universalPropertyNames = $h͏_a ] ], [ "permitted", [ $h͏_a => permitted = $h͏_a ] ] ] ] ]);
                const isFunction = obj => typeof obj === "function";
                function initProperty(obj, name, desc) {
                    if (hasOwn(obj, name)) {
                        const preDesc = getOwnPropertyDescriptor(obj, name);
                        if (!preDesc || !is(preDesc.value, desc.value) || preDesc.get !== desc.get || preDesc.set !== desc.set || preDesc.writable !== desc.writable || preDesc.enumerable !== desc.enumerable || preDesc.configurable !== desc.configurable) {
                            throw TypeError(`Conflicting definitions of ${name}`);
                        }
                    }
                    defineProperty(obj, name, desc);
                }
                function initProperties(obj, descs) {
                    for (const [name, desc] of entries(descs)) {
                        initProperty(obj, name, desc);
                    }
                }
                function sampleGlobals(globalObject, newPropertyNames) {
                    const newIntrinsics = {
                        __proto__: null
                    };
                    for (const [globalName, intrinsicName] of entries(newPropertyNames)) {
                        if (hasOwn(globalObject, globalName)) {
                            newIntrinsics[intrinsicName] = globalObject[globalName];
                        }
                    }
                    return newIntrinsics;
                }
                const makeIntrinsicsCollector = reporter => {
                    const intrinsics = create(null);
                    let pseudoNatives;
                    const addIntrinsics = newIntrinsics => {
                        initProperties(intrinsics, getOwnPropertyDescriptors(newIntrinsics));
                    };
                    freeze(addIntrinsics);
                    const completePrototypes = () => {
                        for (const [name, intrinsic] of entries(intrinsics)) {
                            if (isPrimitive(intrinsic)) {
                                continue;
                            }
                            if (!hasOwn(intrinsic, "prototype")) {
                                continue;
                            }
                            const permit = permitted[name];
                            if (typeof permit !== "object") {
                                throw TypeError(`Expected permit object at permits.${name}`);
                            }
                            const namePrototype = permit.prototype;
                            if (!namePrototype) {
                                cauterizeProperty(intrinsic, "prototype", false, `${name}.prototype`, reporter);
                                continue;
                            }
                            if (typeof namePrototype !== "string" || !hasOwn(permitted, namePrototype)) {
                                throw TypeError(`Unrecognized ${name}.prototype permits entry`);
                            }
                            const intrinsicPrototype = intrinsic.prototype;
                            if (hasOwn(intrinsics, namePrototype)) {
                                if (intrinsics[namePrototype] !== intrinsicPrototype) {
                                    throw TypeError(`Conflicting bindings of ${namePrototype}`);
                                }
                                continue;
                            }
                            intrinsics[namePrototype] = intrinsicPrototype;
                        }
                    };
                    freeze(completePrototypes);
                    const finalIntrinsics = () => {
                        freeze(intrinsics);
                        pseudoNatives = new WeakSet(arrayFilter(values(intrinsics), isFunction));
                        return intrinsics;
                    };
                    freeze(finalIntrinsics);
                    const isPseudoNative = obj => {
                        if (!pseudoNatives) {
                            throw TypeError("isPseudoNative can only be called after finalIntrinsics");
                        }
                        return weaksetHas(pseudoNatives, obj);
                    };
                    freeze(isPseudoNative);
                    const intrinsicsCollector = {
                        addIntrinsics: addIntrinsics,
                        completePrototypes: completePrototypes,
                        finalIntrinsics: finalIntrinsics,
                        isPseudoNative: isPseudoNative
                    };
                    freeze(intrinsicsCollector);
                    addIntrinsics(constantProperties);
                    addIntrinsics(sampleGlobals(globalThis, universalPropertyNames));
                    return intrinsicsCollector;
                };
                $h͏_once.makeIntrinsicsCollector(makeIntrinsicsCollector);
                const getGlobalIntrinsics = (globalObject, reporter) => {
                    const {addIntrinsics: addIntrinsics, finalIntrinsics: finalIntrinsics} = makeIntrinsicsCollector(reporter);
                    addIntrinsics(sampleGlobals(globalObject, sharedGlobalPropertyNames));
                    return finalIntrinsics();
                };
                $h͏_once.getGlobalIntrinsics(getGlobalIntrinsics);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let permitted, FunctionInstance, isAccessorPermit, Map, String, Symbol, TypeError, arrayFilter, arrayIncludes, arrayMap, entries, getOwnPropertyDescriptor, getPrototypeOf, isPrimitive, mapGet, hasOwn, ownKeys, symbolKeyFor, cauterizeProperty;
                $h͏_imports([ [ "./permits.js", [ [ "permitted", [ $h͏_a => permitted = $h͏_a ] ], [ "FunctionInstance", [ $h͏_a => FunctionInstance = $h͏_a ] ], [ "isAccessorPermit", [ $h͏_a => isAccessorPermit = $h͏_a ] ] ] ], [ "./commons.js", [ [ "Map", [ $h͏_a => Map = $h͏_a ] ], [ "String", [ $h͏_a => String = $h͏_a ] ], [ "Symbol", [ $h͏_a => Symbol = $h͏_a ] ], [ "TypeError", [ $h͏_a => TypeError = $h͏_a ] ], [ "arrayFilter", [ $h͏_a => arrayFilter = $h͏_a ] ], [ "arrayIncludes", [ $h͏_a => arrayIncludes = $h͏_a ] ], [ "arrayMap", [ $h͏_a => arrayMap = $h͏_a ] ], [ "entries", [ $h͏_a => entries = $h͏_a ] ], [ "getOwnPropertyDescriptor", [ $h͏_a => getOwnPropertyDescriptor = $h͏_a ] ], [ "getPrototypeOf", [ $h͏_a => getPrototypeOf = $h͏_a ] ], [ "isPrimitive", [ $h͏_a => isPrimitive = $h͏_a ] ], [ "mapGet", [ $h͏_a => mapGet = $h͏_a ] ], [ "hasOwn", [ $h͏_a => hasOwn = $h͏_a ] ], [ "ownKeys", [ $h͏_a => ownKeys = $h͏_a ] ], [ "symbolKeyFor", [ $h͏_a => symbolKeyFor = $h͏_a ] ] ] ], [ "./cauterize-property.js", [ [ "cauterizeProperty", [ $h͏_a => cauterizeProperty = $h͏_a ] ] ] ] ]);
                function removeUnpermittedIntrinsics(intrinsics, markVirtualizedNativeFunction, reporter) {
                    const primitives = [ "undefined", "boolean", "number", "string", "symbol" ];
                    const wellKnownSymbolNames = new Map(Symbol ? arrayMap(arrayFilter(entries(permitted["%SharedSymbol%"]), ([name, permit]) => permit === "symbol" && typeof Symbol[name] === "symbol"), ([name]) => [ Symbol[name], `@@${name}` ]) : []);
                    function asStringPropertyName(path, prop) {
                        if (typeof prop === "string") {
                            return prop;
                        }
                        const wellKnownSymbol = mapGet(wellKnownSymbolNames, prop);
                        if (typeof prop === "symbol") {
                            if (wellKnownSymbol) {
                                return wellKnownSymbol;
                            } else {
                                const registeredKey = symbolKeyFor(prop);
                                if (registeredKey !== undefined) {
                                    return `RegisteredSymbol(${registeredKey})`;
                                } else {
                                    return `Unique${String(prop)}`;
                                }
                            }
                        }
                        throw TypeError(`Unexpected property name type ${path} ${prop}`);
                    }
                    function visitPrototype(path, obj, protoName) {
                        if (isPrimitive(obj)) {
                            throw TypeError(`Object expected: ${path}, ${String(obj)}, ${protoName}`);
                        }
                        const proto = getPrototypeOf(obj);
                        if (proto === null && protoName === null) {
                            return;
                        }
                        if (protoName !== undefined && typeof protoName !== "string") {
                            throw TypeError(`Malformed permit ${path}.__proto__`);
                        }
                        if (proto === intrinsics[protoName || "%ObjectPrototype%"]) {
                            return;
                        }
                        throw TypeError(`Unexpected [[Prototype]] at ${path}.__proto__ (expected ${protoName || "%ObjectPrototype%"})`);
                    }
                    function isAllowedPropertyValue(path, value, prop, permit) {
                        if (typeof permit === "object") {
                            visitProperties(path, value, permit);
                            return true;
                        }
                        if (permit === false) {
                            return false;
                        }
                        if (typeof permit === "string") {
                            if (arrayIncludes(primitives, permit)) {
                                if (prop === "prototype" || prop === "constructor") {
                                    throw new TypeError(`At ${path} expected intrinsic, not ${permit}`);
                                }
                                if (typeof value !== permit) {
                                    throw TypeError(`At ${path} expected ${permit} not ${typeof value}`);
                                }
                                return true;
                            }
                            if (hasOwn(intrinsics, permit)) {
                                if (value !== intrinsics[permit]) {
                                    throw TypeError(`Does not match permit for ${path}`);
                                }
                                return true;
                            }
                        }
                        throw TypeError(`Unexpected property ${prop} with permit ${permit} at ${path}`);
                    }
                    function isAllowedProperty(path, obj, prop, permit) {
                        const desc = getOwnPropertyDescriptor(obj, prop);
                        if (!desc) {
                            throw TypeError(`Property ${prop} not found at ${path}`);
                        }
                        if (hasOwn(desc, "value")) {
                            if (isAccessorPermit(permit)) {
                                throw TypeError(`Accessor expected at ${path}`);
                            }
                            return isAllowedPropertyValue(path, desc.value, prop, permit);
                        }
                        if (!isAccessorPermit(permit)) {
                            throw TypeError(`Accessor not expected at ${path}`);
                        }
                        return isAllowedPropertyValue(`${path}<get>`, desc.get, prop, permit.get) && isAllowedPropertyValue(`${path}<set>`, desc.set, prop, permit.set);
                    }
                    function getSubPermit(obj, permit, prop) {
                        const permitProp = prop === "__proto__" ? "--proto--" : prop;
                        if (hasOwn(permit, permitProp)) {
                            return permit[permitProp];
                        }
                        if (typeof obj === "function") {
                            if (hasOwn(FunctionInstance, permitProp)) {
                                return FunctionInstance[permitProp];
                            }
                        }
                        return undefined;
                    }
                    function visitProperties(path, obj, permit) {
                        if (obj === undefined || obj === null) {
                            return;
                        }
                        const protoName = permit["[[Proto]]"];
                        visitPrototype(path, obj, protoName);
                        if (typeof obj === "function") {
                            markVirtualizedNativeFunction(obj);
                        }
                        for (const prop of ownKeys(obj)) {
                            const propString = asStringPropertyName(path, prop);
                            const subPath = `${path}.${propString}`;
                            const subPermit = getSubPermit(obj, permit, propString);
                            if (!subPermit || !isAllowedProperty(subPath, obj, prop, subPermit)) {
                                cauterizeProperty(obj, prop, subPermit === false, subPath, reporter);
                            }
                        }
                    }
                    visitProperties("intrinsics", intrinsics, permitted);
                }
                $h͏_once.default(removeUnpermittedIntrinsics);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let FERAL_FUNCTION, SyntaxError, TypeError, defineProperties, getPrototypeOf, setPrototypeOf, freeze, AsyncGeneratorFunctionInstance;
                $h͏_imports([ [ "./commons.js", [ [ "FERAL_FUNCTION", [ $h͏_a => FERAL_FUNCTION = $h͏_a ] ], [ "SyntaxError", [ $h͏_a => SyntaxError = $h͏_a ] ], [ "TypeError", [ $h͏_a => TypeError = $h͏_a ] ], [ "defineProperties", [ $h͏_a => defineProperties = $h͏_a ] ], [ "getPrototypeOf", [ $h͏_a => getPrototypeOf = $h͏_a ] ], [ "setPrototypeOf", [ $h͏_a => setPrototypeOf = $h͏_a ] ], [ "freeze", [ $h͏_a => freeze = $h͏_a ] ], [ "AsyncGeneratorFunctionInstance", [ $h͏_a => AsyncGeneratorFunctionInstance = $h͏_a ] ] ] ] ]);
                function tameFunctionConstructors() {
                    try {
                        FERAL_FUNCTION.prototype.constructor("return 1");
                    } catch (_err) {
                        return freeze({});
                    }
                    const newIntrinsics = {};
                    function repairFunction(name, intrinsicName, declaration) {
                        let FunctionInstance;
                        try {
                            FunctionInstance = (0, eval)(declaration);
                        } catch (e) {
                            if (e instanceof SyntaxError) {
                                return;
                            }
                            throw e;
                        }
                        const FunctionPrototype = getPrototypeOf(FunctionInstance);
                        const InertConstructor = function() {
                            throw TypeError("Function.prototype.constructor is not a valid constructor.");
                        };
                        defineProperties(InertConstructor, {
                            prototype: {
                                value: FunctionPrototype
                            },
                            name: {
                                value: name,
                                writable: false,
                                enumerable: false,
                                configurable: true
                            }
                        });
                        defineProperties(FunctionPrototype, {
                            constructor: {
                                value: InertConstructor
                            }
                        });
                        if (InertConstructor !== FERAL_FUNCTION.prototype.constructor) {
                            setPrototypeOf(InertConstructor, FERAL_FUNCTION.prototype.constructor);
                        }
                        newIntrinsics[intrinsicName] = InertConstructor;
                    }
                    repairFunction("Function", "%InertFunction%", "(function(){})");
                    repairFunction("GeneratorFunction", "%InertGeneratorFunction%", "(function*(){})");
                    repairFunction("AsyncFunction", "%InertAsyncFunction%", "(async function(){})");
                    if (AsyncGeneratorFunctionInstance !== undefined) {
                        repairFunction("AsyncGeneratorFunction", "%InertAsyncGeneratorFunction%", "(async function*(){})");
                    }
                    return newIntrinsics;
                }
                $h͏_once.default(tameFunctionConstructors);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let Date, TypeError, apply, construct, defineProperties;
                $h͏_imports([ [ "./commons.js", [ [ "Date", [ $h͏_a => Date = $h͏_a ] ], [ "TypeError", [ $h͏_a => TypeError = $h͏_a ] ], [ "apply", [ $h͏_a => apply = $h͏_a ] ], [ "construct", [ $h͏_a => construct = $h͏_a ] ], [ "defineProperties", [ $h͏_a => defineProperties = $h͏_a ] ] ] ] ]);
                function tameDateConstructor() {
                    const OriginalDate = Date;
                    const DatePrototype = OriginalDate.prototype;
                    const tamedMethods = {
                        now() {
                            throw TypeError("secure mode Calling %SharedDate%.now() throws");
                        }
                    };
                    const makeDateConstructor = ({powers: powers = "none"} = {}) => {
                        let ResultDate;
                        if (powers === "original") {
                            ResultDate = function Date(...rest) {
                                if (new.target === undefined) {
                                    return apply(OriginalDate, undefined, rest);
                                }
                                return construct(OriginalDate, rest, new.target);
                            };
                        } else {
                            ResultDate = function Date(...rest) {
                                if (new.target === undefined) {
                                    throw TypeError("secure mode Calling %SharedDate% constructor as a function throws");
                                }
                                if (rest.length === 0) {
                                    throw TypeError("secure mode Calling new %SharedDate%() with no arguments throws");
                                }
                                return construct(OriginalDate, rest, new.target);
                            };
                        }
                        defineProperties(ResultDate, {
                            length: {
                                value: 7
                            },
                            prototype: {
                                value: DatePrototype,
                                writable: false,
                                enumerable: false,
                                configurable: false
                            },
                            parse: {
                                value: OriginalDate.parse,
                                writable: true,
                                enumerable: false,
                                configurable: true
                            },
                            UTC: {
                                value: OriginalDate.UTC,
                                writable: true,
                                enumerable: false,
                                configurable: true
                            }
                        });
                        return ResultDate;
                    };
                    const InitialDate = makeDateConstructor({
                        powers: "original"
                    });
                    const SharedDate = makeDateConstructor({
                        powers: "none"
                    });
                    defineProperties(InitialDate, {
                        now: {
                            value: OriginalDate.now,
                            writable: true,
                            enumerable: false,
                            configurable: true
                        }
                    });
                    defineProperties(SharedDate, {
                        now: {
                            value: tamedMethods.now,
                            writable: true,
                            enumerable: false,
                            configurable: true
                        }
                    });
                    defineProperties(DatePrototype, {
                        constructor: {
                            value: SharedDate
                        }
                    });
                    return {
                        "%InitialDate%": InitialDate,
                        "%SharedDate%": SharedDate
                    };
                }
                $h͏_once.default(tameDateConstructor);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let Math, TypeError, create, getOwnPropertyDescriptors, objectPrototype;
                $h͏_imports([ [ "./commons.js", [ [ "Math", [ $h͏_a => Math = $h͏_a ] ], [ "TypeError", [ $h͏_a => TypeError = $h͏_a ] ], [ "create", [ $h͏_a => create = $h͏_a ] ], [ "getOwnPropertyDescriptors", [ $h͏_a => getOwnPropertyDescriptors = $h͏_a ] ], [ "objectPrototype", [ $h͏_a => objectPrototype = $h͏_a ] ] ] ] ]);
                function tameMathObject() {
                    const originalMath = Math;
                    const initialMath = originalMath;
                    const {random: _, ...otherDescriptors} = getOwnPropertyDescriptors(originalMath);
                    const tamedMethods = {
                        random() {
                            throw TypeError("secure mode %SharedMath%.random() throws");
                        }
                    };
                    const sharedMath = create(objectPrototype, {
                        ...otherDescriptors,
                        random: {
                            value: tamedMethods.random,
                            writable: true,
                            enumerable: false,
                            configurable: true
                        }
                    });
                    return {
                        "%InitialMath%": initialMath,
                        "%SharedMath%": sharedMath
                    };
                }
                $h͏_once.default(tameMathObject);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let freeze, getOwnPropertyDescriptors, create, objectPrototype, getPrototypeOf, ownKeys, fromEntries, TypeError, arrayPush, Temporal, permitted;
                $h͏_imports([ [ "./commons.js", [ [ "freeze", [ $h͏_a => freeze = $h͏_a ] ], [ "getOwnPropertyDescriptors", [ $h͏_a => getOwnPropertyDescriptors = $h͏_a ] ], [ "create", [ $h͏_a => create = $h͏_a ] ], [ "objectPrototype", [ $h͏_a => objectPrototype = $h͏_a ] ], [ "getPrototypeOf", [ $h͏_a => getPrototypeOf = $h͏_a ] ], [ "ownKeys", [ $h͏_a => ownKeys = $h͏_a ] ], [ "fromEntries", [ $h͏_a => fromEntries = $h͏_a ] ], [ "TypeError", [ $h͏_a => TypeError = $h͏_a ] ], [ "arrayPush", [ $h͏_a => arrayPush = $h͏_a ] ], [ "Temporal", [ $h͏_a => Temporal = $h͏_a ] ] ] ], [ "./permits.js", [ [ "permitted", [ $h͏_a => permitted = $h͏_a ] ] ] ] ]);
                const tameTemporalObject = () => {
                    if (Temporal === undefined) {
                        return {};
                    }
                    if (typeof Temporal !== "object") {
                        throw new TypeError(`unexpected typeof Temporal: ${typeof Temporal}`);
                    }
                    if (getPrototypeOf(Temporal) !== objectPrototype) {
                        throw new TypeError(`unexpected Temporal __proto__: ${getPrototypeOf(Temporal)}`);
                    }
                    const initialTemporal = Temporal;
                    const {Now: _, ...otherDescriptors} = getOwnPropertyDescriptors(initialTemporal);
                    const sharedTemporal = create(objectPrototype, otherDescriptors);
                    const initialTemporalPermit = permitted["%InitialTemporal%"];
                    const intrinsicEntries = [];
                    for (const topName of ownKeys(Temporal)) {
                        const topPermitName = initialTemporalPermit[topName];
                        const topPermit = permitted[topPermitName];
                        if (typeof topPermit === "object") {
                            const topVal = initialTemporal[topName];
                            arrayPush(intrinsicEntries, [ topPermitName, topVal ]);
                        }
                    }
                    const result = {
                        ...fromEntries(intrinsicEntries),
                        "%InitialTemporal%": initialTemporal,
                        "%SharedTemporal%": sharedTemporal
                    };
                    return result;
                };
                freeze(tameTemporalObject);
                const {default: $c͏_default} = {
                    default: tameTemporalObject
                };
                $h͏_once.default($c͏_default);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let RangeError, dataViewPrototype, MAX_SAFE_INTEGER, apply, defineProperty, entries, getOwnPropertyDescriptor, hasOwn, is, max, trunc, uncurryThis;
                $h͏_imports([ [ "./commons.js", [ [ "RangeError", [ $h͏_a => RangeError = $h͏_a ] ], [ "dataViewPrototype", [ $h͏_a => dataViewPrototype = $h͏_a ] ], [ "MAX_SAFE_INTEGER", [ $h͏_a => MAX_SAFE_INTEGER = $h͏_a ] ], [ "apply", [ $h͏_a => apply = $h͏_a ] ], [ "defineProperty", [ $h͏_a => defineProperty = $h͏_a ] ], [ "entries", [ $h͏_a => entries = $h͏_a ] ], [ "getOwnPropertyDescriptor", [ $h͏_a => getOwnPropertyDescriptor = $h͏_a ] ], [ "hasOwn", [ $h͏_a => hasOwn = $h͏_a ] ], [ "is", [ $h͏_a => is = $h͏_a ] ], [ "max", [ $h͏_a => max = $h͏_a ] ], [ "trunc", [ $h͏_a => trunc = $h͏_a ] ], [ "uncurryThis", [ $h͏_a => uncurryThis = $h͏_a ] ] ] ] ]);
                const {setFloat16: FERAL_SET_FLOAT16, setFloat32: FERAL_SET_FLOAT32, setFloat64: FERAL_SET_FLOAT64, setUint16: setUint16, setUint32: setUint32, setBigUint64: setBigUint64} = dataViewPrototype;
                const dataViewGetBuffer = uncurryThis(getOwnPropertyDescriptor(dataViewPrototype, "buffer").get);
                const canonicalNaN64Encoding = 0x7ff8000000000000n;
                const canonicalNaN32Encoding = 2143289344;
                const canonicalNaN16Encoding = 32256;
                const requireDataView = obj => {
                    dataViewGetBuffer(obj);
                };
                const toIndex = v => {
                    const n = trunc(v);
                    if (n === 0 || is(n, NaN)) {
                        return 0;
                    }
                    if (n < 0 || n > MAX_SAFE_INTEGER) {
                        throw RangeError("Invalid offset");
                    }
                    return n;
                };
                const toNumber = v => max(v);
                const methods = {
                    setFloat16(byteOffset, value, isLittleEndian = undefined) {
                        requireDataView(this);
                        byteOffset = toIndex(byteOffset);
                        value = toNumber(value);
                        if (is(value, NaN)) {
                            return apply(setUint16, this, [ byteOffset, canonicalNaN16Encoding, isLittleEndian ]);
                        } else {
                            return apply(FERAL_SET_FLOAT16, this, [ byteOffset, value, isLittleEndian ]);
                        }
                    },
                    setFloat32(byteOffset, value, isLittleEndian = undefined) {
                        requireDataView(this);
                        byteOffset = toIndex(byteOffset);
                        value = toNumber(value);
                        if (is(value, NaN)) {
                            return apply(setUint32, this, [ byteOffset, canonicalNaN32Encoding, isLittleEndian ]);
                        } else {
                            return apply(FERAL_SET_FLOAT32, this, [ byteOffset, value, isLittleEndian ]);
                        }
                    },
                    setFloat64(byteOffset, value, isLittleEndian = undefined) {
                        requireDataView(this);
                        byteOffset = toIndex(byteOffset);
                        value = toNumber(value);
                        if (is(value, NaN)) {
                            return apply(setBigUint64, this, [ byteOffset, canonicalNaN64Encoding, isLittleEndian ]);
                        } else {
                            return apply(FERAL_SET_FLOAT64, this, [ byteOffset, value, isLittleEndian ]);
                        }
                    }
                };
                const tameNaNSideChannel = () => {
                    for (const [name, method] of entries(methods)) {
                        if (hasOwn(dataViewPrototype, name)) {
                            defineProperty(dataViewPrototype, name, {
                                value: method
                            });
                        }
                    }
                };
                $h͏_once.tameNaNSideChannel(tameNaNSideChannel);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let FERAL_REG_EXP, TypeError, construct, defineProperties, getOwnPropertyDescriptor, speciesSymbol;
                $h͏_imports([ [ "./commons.js", [ [ "FERAL_REG_EXP", [ $h͏_a => FERAL_REG_EXP = $h͏_a ] ], [ "TypeError", [ $h͏_a => TypeError = $h͏_a ] ], [ "construct", [ $h͏_a => construct = $h͏_a ] ], [ "defineProperties", [ $h͏_a => defineProperties = $h͏_a ] ], [ "getOwnPropertyDescriptor", [ $h͏_a => getOwnPropertyDescriptor = $h͏_a ] ], [ "speciesSymbol", [ $h͏_a => speciesSymbol = $h͏_a ] ] ] ] ]);
                function tameRegExpConstructor(regExpTaming = "safe") {
                    const RegExpPrototype = FERAL_REG_EXP.prototype;
                    const makeRegExpConstructor = (_ = {}) => {
                        const ResultRegExp = function RegExp(...rest) {
                            if (new.target === undefined) {
                                return FERAL_REG_EXP(...rest);
                            }
                            return construct(FERAL_REG_EXP, rest, new.target);
                        };
                        defineProperties(ResultRegExp, {
                            length: {
                                value: 2
                            },
                            prototype: {
                                value: RegExpPrototype,
                                writable: false,
                                enumerable: false,
                                configurable: false
                            }
                        });
                        if (speciesSymbol) {
                            const speciesDesc = getOwnPropertyDescriptor(FERAL_REG_EXP, speciesSymbol);
                            if (!speciesDesc) {
                                throw TypeError("no RegExp[Symbol.species] descriptor");
                            }
                            defineProperties(ResultRegExp, {
                                [speciesSymbol]: speciesDesc
                            });
                        }
                        return ResultRegExp;
                    };
                    const InitialRegExp = makeRegExpConstructor();
                    const SharedRegExp = makeRegExpConstructor();
                    if (regExpTaming !== "unsafe") {
                        delete RegExpPrototype.compile;
                    }
                    defineProperties(RegExpPrototype, {
                        constructor: {
                            value: SharedRegExp
                        }
                    });
                    return {
                        "%InitialRegExp%": InitialRegExp,
                        "%SharedRegExp%": SharedRegExp
                    };
                }
                $h͏_once.default(tameRegExpConstructor);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let toStringTagSymbol, iteratorSymbol;
                $h͏_imports([ [ "./commons.js", [ [ "toStringTagSymbol", [ $h͏_a => toStringTagSymbol = $h͏_a ] ], [ "iteratorSymbol", [ $h͏_a => iteratorSymbol = $h͏_a ] ] ] ] ]);
                const minEnablements = {
                    "%ObjectPrototype%": {
                        toString: true
                    },
                    "%FunctionPrototype%": {
                        toString: true
                    },
                    "%ErrorPrototype%": {
                        name: true
                    },
                    "%IteratorPrototype%": {
                        toString: true,
                        constructor: true,
                        [toStringTagSymbol]: true
                    }
                };
                $h͏_once.minEnablements(minEnablements);
                const moderateEnablements = {
                    ...minEnablements,
                    "%ObjectPrototype%": {
                        ...minEnablements["%ObjectPrototype%"],
                        valueOf: true
                    },
                    "%FunctionPrototype%": {
                        ...minEnablements["%FunctionPrototype%"],
                        constructor: true,
                        bind: true
                    },
                    "%ErrorPrototype%": {
                        ...minEnablements["%ErrorPrototype%"],
                        constructor: true,
                        message: true,
                        toString: true
                    },
                    "%IteratorPrototype%": {
                        ...minEnablements["%IteratorPrototype%"],
                        [iteratorSymbol]: true
                    },
                    "%ArrayPrototype%": {
                        toString: true,
                        push: true,
                        concat: true,
                        [iteratorSymbol]: true
                    },
                    "%TypeErrorPrototype%": {
                        constructor: true,
                        message: true,
                        name: true
                    },
                    "%SyntaxErrorPrototype%": {
                        message: true,
                        name: true
                    },
                    "%RangeErrorPrototype%": {
                        message: true,
                        name: true
                    },
                    "%URIErrorPrototype%": {
                        message: true,
                        name: true
                    },
                    "%EvalErrorPrototype%": {
                        message: true,
                        name: true
                    },
                    "%ReferenceErrorPrototype%": {
                        message: true,
                        name: true
                    },
                    "%AggregateErrorPrototype%": {
                        message: true,
                        name: true
                    },
                    "%PromisePrototype%": {
                        constructor: true
                    },
                    "%TypedArrayPrototype%": "*",
                    "%Generator%": {
                        constructor: true,
                        name: true,
                        toString: true
                    }
                };
                $h͏_once.moderateEnablements(moderateEnablements);
                const severeEnablements = {
                    ...moderateEnablements,
                    "%ObjectPrototype%": "*",
                    "%TypedArrayPrototype%": "*",
                    "%MapPrototype%": "*",
                    "%SetPrototype%": "*"
                };
                $h͏_once.severeEnablements(severeEnablements);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let Set, String, TypeError, arrayForEach, defineProperty, getOwnPropertyDescriptor, getOwnPropertyDescriptors, isPrimitive, hasOwn, ownKeys, setHas, minEnablements, moderateEnablements, severeEnablements;
                $h͏_imports([ [ "./commons.js", [ [ "Set", [ $h͏_a => Set = $h͏_a ] ], [ "String", [ $h͏_a => String = $h͏_a ] ], [ "TypeError", [ $h͏_a => TypeError = $h͏_a ] ], [ "arrayForEach", [ $h͏_a => arrayForEach = $h͏_a ] ], [ "defineProperty", [ $h͏_a => defineProperty = $h͏_a ] ], [ "getOwnPropertyDescriptor", [ $h͏_a => getOwnPropertyDescriptor = $h͏_a ] ], [ "getOwnPropertyDescriptors", [ $h͏_a => getOwnPropertyDescriptors = $h͏_a ] ], [ "isPrimitive", [ $h͏_a => isPrimitive = $h͏_a ] ], [ "hasOwn", [ $h͏_a => hasOwn = $h͏_a ] ], [ "ownKeys", [ $h͏_a => ownKeys = $h͏_a ] ], [ "setHas", [ $h͏_a => setHas = $h͏_a ] ] ] ], [ "./enablements.js", [ [ "minEnablements", [ $h͏_a => minEnablements = $h͏_a ] ], [ "moderateEnablements", [ $h͏_a => moderateEnablements = $h͏_a ] ], [ "severeEnablements", [ $h͏_a => severeEnablements = $h͏_a ] ] ] ] ]);
                function enablePropertyOverrides(intrinsics, overrideTaming, {warn: warn}, overrideDebug = []) {
                    const debugProperties = new Set(overrideDebug);
                    function enable(path, obj, prop, desc) {
                        if ("value" in desc && desc.configurable) {
                            const {value: value} = desc;
                            const isDebug = setHas(debugProperties, prop);
                            const {get: getter, set: setter} = getOwnPropertyDescriptor({
                                get [prop]() {
                                    return value;
                                },
                                set [prop](newValue) {
                                    if (obj === this) {
                                        throw TypeError(`Cannot assign to read only property '${String(prop)}' of '${path}'`);
                                    }
                                    if (hasOwn(this, prop)) {
                                        this[prop] = newValue;
                                    } else {
                                        if (isDebug) {
                                            warn(TypeError(`Override property ${prop}`));
                                        }
                                        defineProperty(this, prop, {
                                            value: newValue,
                                            writable: true,
                                            enumerable: true,
                                            configurable: true
                                        });
                                    }
                                }
                            }, prop);
                            defineProperty(getter, "originalValue", {
                                value: value,
                                writable: false,
                                enumerable: false,
                                configurable: false
                            });
                            defineProperty(obj, prop, {
                                get: getter,
                                set: setter,
                                enumerable: desc.enumerable,
                                configurable: desc.configurable
                            });
                        }
                    }
                    function enableProperty(path, obj, prop) {
                        const desc = getOwnPropertyDescriptor(obj, prop);
                        if (!desc) {
                            return;
                        }
                        enable(path, obj, prop, desc);
                    }
                    function enableAllProperties(path, obj) {
                        const descs = getOwnPropertyDescriptors(obj);
                        if (!descs) {
                            return;
                        }
                        arrayForEach(ownKeys(descs), prop => enable(path, obj, prop, descs[prop]));
                    }
                    function enableProperties(path, obj, plan) {
                        for (const prop of ownKeys(plan)) {
                            const desc = getOwnPropertyDescriptor(obj, prop);
                            if (!desc || desc.get || desc.set) {
                                continue;
                            }
                            const subPath = `${path}.${String(prop)}`;
                            const subPlan = plan[prop];
                            if (subPlan === true) {
                                enableProperty(subPath, obj, prop);
                            } else if (subPlan === "*") {
                                enableAllProperties(subPath, desc.value);
                            } else if (!isPrimitive(subPlan)) {
                                enableProperties(subPath, desc.value, subPlan);
                            } else {
                                throw TypeError(`Unexpected override enablement plan ${subPath}`);
                            }
                        }
                    }
                    let plan;
                    switch (overrideTaming) {
                      case "min":
                        {
                            plan = minEnablements;
                            break;
                        }

                      case "moderate":
                        {
                            plan = moderateEnablements;
                            break;
                        }

                      case "severe":
                        {
                            plan = severeEnablements;
                            break;
                        }

                      default:
                        {
                            throw TypeError(`unrecognized overrideTaming ${overrideTaming}`);
                        }
                    }
                    enableProperties("root", intrinsics, plan);
                }
                $h͏_once.default(enablePropertyOverrides);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let Number, String, TypeError, defineProperty, freezeRegexp, getOwnPropertyNames, isPrimitive, regexpExec, assert;
                $h͏_imports([ [ "./commons.js", [ [ "Number", [ $h͏_a => Number = $h͏_a ] ], [ "String", [ $h͏_a => String = $h͏_a ] ], [ "TypeError", [ $h͏_a => TypeError = $h͏_a ] ], [ "defineProperty", [ $h͏_a => defineProperty = $h͏_a ] ], [ "freezeRegexp", [ $h͏_a => freezeRegexp = $h͏_a ] ], [ "getOwnPropertyNames", [ $h͏_a => getOwnPropertyNames = $h͏_a ] ], [ "isPrimitive", [ $h͏_a => isPrimitive = $h͏_a ] ], [ "regexpExec", [ $h͏_a => regexpExec = $h͏_a ] ] ] ], [ "./error/assert.js", [ [ "assert", [ $h͏_a => assert = $h͏_a ] ] ] ] ]);
                const {Fail: Fail, quote: q} = assert;
                const localePattern = freezeRegexp(/^(\w*[a-z])Locale([A-Z]\w*)$/);
                const tamedMethods = {
                    localeCompare(arg) {
                        if (this === null || this === undefined) {
                            throw TypeError('Cannot localeCompare with null or undefined "this" value');
                        }
                        const s = `${this}`;
                        const that = `${arg}`;
                        if (s < that) {
                            return -1;
                        }
                        if (s > that) {
                            return 1;
                        }
                        s === that || Fail`expected ${q(s)} and ${q(that)} to compare`;
                        return 0;
                    },
                    toString() {
                        return `${this}`;
                    }
                };
                const nonLocaleCompare = tamedMethods.localeCompare;
                const numberToString = tamedMethods.toString;
                function tameLocaleMethods(intrinsics, localeTaming = "safe") {
                    if (localeTaming === "unsafe") {
                        return;
                    }
                    defineProperty(String.prototype, "localeCompare", {
                        value: nonLocaleCompare
                    });
                    for (const intrinsicName of getOwnPropertyNames(intrinsics)) {
                        const intrinsic = intrinsics[intrinsicName];
                        if (!isPrimitive(intrinsic)) {
                            for (const methodName of getOwnPropertyNames(intrinsic)) {
                                const match = regexpExec(localePattern, methodName);
                                if (match) {
                                    typeof intrinsic[methodName] === "function" || Fail`expected ${q(methodName)} to be a function`;
                                    const nonLocaleMethodName = `${match[1]}${match[2]}`;
                                    const method = intrinsic[nonLocaleMethodName];
                                    typeof method === "function" || Fail`function ${q(nonLocaleMethodName)} not found`;
                                    defineProperty(intrinsic, methodName, {
                                        value: method
                                    });
                                }
                            }
                        }
                    }
                    defineProperty(Number.prototype, "toLocaleString", {
                        value: numberToString
                    });
                }
                $h͏_once.default(tameLocaleMethods);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                $h͏_imports([]);
                const makeEvalFunction = evaluator => {
                    const newEval = {
                        eval(source) {
                            if (typeof source !== "string") {
                                return source;
                            }
                            return evaluator(source);
                        }
                    }.eval;
                    return newEval;
                };
                $h͏_once.makeEvalFunction(makeEvalFunction);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let FERAL_FUNCTION, arrayJoin, arrayPop, defineProperties, getPrototypeOf, assert;
                $h͏_imports([ [ "./commons.js", [ [ "FERAL_FUNCTION", [ $h͏_a => FERAL_FUNCTION = $h͏_a ] ], [ "arrayJoin", [ $h͏_a => arrayJoin = $h͏_a ] ], [ "arrayPop", [ $h͏_a => arrayPop = $h͏_a ] ], [ "defineProperties", [ $h͏_a => defineProperties = $h͏_a ] ], [ "getPrototypeOf", [ $h͏_a => getPrototypeOf = $h͏_a ] ] ] ], [ "./error/assert.js", [ [ "assert", [ $h͏_a => assert = $h͏_a ] ] ] ] ]);
                const {Fail: Fail} = assert;
                const makeFunctionConstructor = evaluator => {
                    const newFunction = function Function(_body) {
                        const bodyText = `${arrayPop(arguments) || ""}`;
                        const parameters = `${arrayJoin(arguments, ",")}`;
                        new FERAL_FUNCTION(parameters, "");
                        new FERAL_FUNCTION(bodyText);
                        const src = `(function anonymous(${parameters}\n) {\n${bodyText}\n})`;
                        return evaluator(src);
                    };
                    defineProperties(newFunction, {
                        prototype: {
                            value: FERAL_FUNCTION.prototype,
                            writable: false,
                            enumerable: false,
                            configurable: false
                        }
                    });
                    getPrototypeOf(FERAL_FUNCTION) === FERAL_FUNCTION.prototype || Fail`Function prototype is the same accross compartments`;
                    getPrototypeOf(newFunction) === FERAL_FUNCTION.prototype || Fail`Function constructor prototype is the same across compartments`;
                    return newFunction;
                };
                $h͏_once.makeFunctionConstructor(makeFunctionConstructor);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let TypeError, assign, create, defineProperty, entries, freeze, hasOwn, unscopablesSymbol, makeEvalFunction, makeFunctionConstructor, constantProperties, universalPropertyNames;
                $h͏_imports([ [ "./commons.js", [ [ "TypeError", [ $h͏_a => TypeError = $h͏_a ] ], [ "assign", [ $h͏_a => assign = $h͏_a ] ], [ "create", [ $h͏_a => create = $h͏_a ] ], [ "defineProperty", [ $h͏_a => defineProperty = $h͏_a ] ], [ "entries", [ $h͏_a => entries = $h͏_a ] ], [ "freeze", [ $h͏_a => freeze = $h͏_a ] ], [ "hasOwn", [ $h͏_a => hasOwn = $h͏_a ] ], [ "unscopablesSymbol", [ $h͏_a => unscopablesSymbol = $h͏_a ] ] ] ], [ "./make-eval-function.js", [ [ "makeEvalFunction", [ $h͏_a => makeEvalFunction = $h͏_a ] ] ] ], [ "./make-function-constructor.js", [ [ "makeFunctionConstructor", [ $h͏_a => makeFunctionConstructor = $h͏_a ] ] ] ], [ "./permits.js", [ [ "constantProperties", [ $h͏_a => constantProperties = $h͏_a ] ], [ "universalPropertyNames", [ $h͏_a => universalPropertyNames = $h͏_a ] ] ] ] ]);
                const setGlobalObjectSymbolUnscopables = globalObject => {
                    defineProperty(globalObject, unscopablesSymbol, freeze(assign(create(null), {
                        set: freeze(() => {
                            throw TypeError(`Cannot set Symbol.unscopables of a Compartment's globalThis`);
                        }),
                        enumerable: false,
                        configurable: false
                    })));
                };
                $h͏_once.setGlobalObjectSymbolUnscopables(setGlobalObjectSymbolUnscopables);
                const setGlobalObjectConstantProperties = globalObject => {
                    for (const [name, constant] of entries(constantProperties)) {
                        defineProperty(globalObject, name, {
                            value: constant,
                            writable: false,
                            enumerable: false,
                            configurable: false
                        });
                    }
                };
                $h͏_once.setGlobalObjectConstantProperties(setGlobalObjectConstantProperties);
                const setGlobalObjectMutableProperties = (globalObject, {intrinsics: intrinsics, newGlobalPropertyNames: newGlobalPropertyNames, makeCompartmentConstructor: makeCompartmentConstructor, markVirtualizedNativeFunction: markVirtualizedNativeFunction, parentCompartment: parentCompartment}) => {
                    for (const [name, intrinsicName] of entries(universalPropertyNames)) {
                        if (hasOwn(intrinsics, intrinsicName)) {
                            defineProperty(globalObject, name, {
                                value: intrinsics[intrinsicName],
                                writable: true,
                                enumerable: false,
                                configurable: true
                            });
                        }
                    }
                    for (const [name, intrinsicName] of entries(newGlobalPropertyNames)) {
                        if (hasOwn(intrinsics, intrinsicName)) {
                            defineProperty(globalObject, name, {
                                value: intrinsics[intrinsicName],
                                writable: true,
                                enumerable: false,
                                configurable: true
                            });
                        }
                    }
                    const perCompartmentGlobals = {
                        globalThis: globalObject
                    };
                    perCompartmentGlobals.Compartment = freeze(makeCompartmentConstructor(makeCompartmentConstructor, intrinsics, markVirtualizedNativeFunction, {
                        parentCompartment: parentCompartment,
                        enforceNew: true
                    }));
                    for (const [name, value] of entries(perCompartmentGlobals)) {
                        defineProperty(globalObject, name, {
                            value: value,
                            writable: true,
                            enumerable: false,
                            configurable: true
                        });
                        if (typeof value === "function") {
                            markVirtualizedNativeFunction(value);
                        }
                    }
                };
                $h͏_once.setGlobalObjectMutableProperties(setGlobalObjectMutableProperties);
                const setGlobalObjectEvaluators = (globalObject, evaluator, markVirtualizedNativeFunction) => {
                    {
                        const f = freeze(makeEvalFunction(evaluator));
                        markVirtualizedNativeFunction(f);
                        defineProperty(globalObject, "eval", {
                            value: f,
                            writable: true,
                            enumerable: false,
                            configurable: true
                        });
                    }
                    {
                        const f = freeze(makeFunctionConstructor(evaluator));
                        markVirtualizedNativeFunction(f);
                        defineProperty(globalObject, "Function", {
                            value: f,
                            writable: true,
                            enumerable: false,
                            configurable: true
                        });
                    }
                };
                $h͏_once.setGlobalObjectEvaluators(setGlobalObjectEvaluators);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let Proxy, String, TypeError, ReferenceError, create, freeze, getOwnPropertyDescriptors, assert;
                $h͏_imports([ [ "./commons.js", [ [ "Proxy", [ $h͏_a => Proxy = $h͏_a ] ], [ "String", [ $h͏_a => String = $h͏_a ] ], [ "TypeError", [ $h͏_a => TypeError = $h͏_a ] ], [ "ReferenceError", [ $h͏_a => ReferenceError = $h͏_a ] ], [ "create", [ $h͏_a => create = $h͏_a ] ], [ "freeze", [ $h͏_a => freeze = $h͏_a ] ], [ "getOwnPropertyDescriptors", [ $h͏_a => getOwnPropertyDescriptors = $h͏_a ] ] ] ], [ "./error/assert.js", [ [ "assert", [ $h͏_a => assert = $h͏_a ] ] ] ] ]);
                const {Fail: Fail, quote: q} = assert;
                const objTarget = freeze({
                    __proto__: null
                });
                const alwaysThrowHandler = new Proxy(objTarget, freeze({
                    get(_shadow, prop) {
                        Fail`Please report unexpected scope handler trap: ${q(String(prop))}`;
                    }
                }));
                $h͏_once.alwaysThrowHandler(alwaysThrowHandler);
                const scopeProxyHandlerProperties = {
                    get(_shadow, _prop) {
                        return undefined;
                    },
                    set(_shadow, prop, _value) {
                        throw ReferenceError(`${String(prop)} is not defined`);
                    },
                    has(_shadow, prop) {
                        return true;
                    },
                    getPrototypeOf(_shadow) {
                        return null;
                    },
                    getOwnPropertyDescriptor(_shadow, prop) {
                        const quotedProp = q(String(prop));
                        console.warn(`getOwnPropertyDescriptor trap on scopeTerminatorHandler for ${quotedProp}`, TypeError().stack);
                        return undefined;
                    },
                    ownKeys(_shadow) {
                        return [];
                    }
                };
                const strictScopeTerminatorHandler = freeze(create(alwaysThrowHandler, getOwnPropertyDescriptors(scopeProxyHandlerProperties)));
                $h͏_once.strictScopeTerminatorHandler(strictScopeTerminatorHandler);
                const strictScopeTerminator = new Proxy(objTarget, strictScopeTerminatorHandler);
                $h͏_once.strictScopeTerminator(strictScopeTerminator);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let Proxy, create, freeze, getOwnPropertyDescriptors, reflectSet, strictScopeTerminatorHandler, alwaysThrowHandler;
                $h͏_imports([ [ "./commons.js", [ [ "Proxy", [ $h͏_a => Proxy = $h͏_a ] ], [ "create", [ $h͏_a => create = $h͏_a ] ], [ "freeze", [ $h͏_a => freeze = $h͏_a ] ], [ "getOwnPropertyDescriptors", [ $h͏_a => getOwnPropertyDescriptors = $h͏_a ] ], [ "reflectSet", [ $h͏_a => reflectSet = $h͏_a ] ] ] ], [ "./strict-scope-terminator.js", [ [ "strictScopeTerminatorHandler", [ $h͏_a => strictScopeTerminatorHandler = $h͏_a ] ], [ "alwaysThrowHandler", [ $h͏_a => alwaysThrowHandler = $h͏_a ] ] ] ] ]);
                const objTarget = freeze({
                    __proto__: null
                });
                const createSloppyGlobalsScopeTerminator = globalObject => {
                    const scopeProxyHandlerProperties = {
                        ...strictScopeTerminatorHandler,
                        set(_shadow, prop, value) {
                            return reflectSet(globalObject, prop, value);
                        },
                        has(_shadow, _prop) {
                            return true;
                        }
                    };
                    const sloppyGlobalsScopeTerminatorHandler = freeze(create(alwaysThrowHandler, getOwnPropertyDescriptors(scopeProxyHandlerProperties)));
                    const sloppyGlobalsScopeTerminator = new Proxy(objTarget, sloppyGlobalsScopeTerminatorHandler);
                    return sloppyGlobalsScopeTerminator;
                };
                $h͏_once.createSloppyGlobalsScopeTerminator(createSloppyGlobalsScopeTerminator);
                freeze(createSloppyGlobalsScopeTerminator);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let FERAL_EVAL, create, defineProperties, freeze, assert;
                $h͏_imports([ [ "./commons.js", [ [ "FERAL_EVAL", [ $h͏_a => FERAL_EVAL = $h͏_a ] ], [ "create", [ $h͏_a => create = $h͏_a ] ], [ "defineProperties", [ $h͏_a => defineProperties = $h͏_a ] ], [ "freeze", [ $h͏_a => freeze = $h͏_a ] ] ] ], [ "./error/assert.js", [ [ "assert", [ $h͏_a => assert = $h͏_a ] ] ] ] ]);
                const {Fail: Fail} = assert;
                const makeEvalScopeKit = () => {
                    const evalScope = create(null);
                    const oneTimeEvalProperties = freeze({
                        eval: {
                            get() {
                                delete evalScope.eval;
                                return FERAL_EVAL;
                            },
                            enumerable: false,
                            configurable: true
                        }
                    });
                    const evalScopeKit = {
                        evalScope: evalScope,
                        allowNextEvalToBeUnsafe() {
                            const {revoked: revoked} = evalScopeKit;
                            if (revoked !== null) {
                                Fail`a handler did not reset allowNextEvalToBeUnsafe ${revoked.err}`;
                            }
                            defineProperties(evalScope, oneTimeEvalProperties);
                        },
                        revoked: null
                    };
                    return evalScopeKit;
                };
                $h͏_once.makeEvalScopeKit(makeEvalScopeKit);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let FERAL_REG_EXP, freezeRegexp, regexpExec, stringSlice;
                $h͏_imports([ [ "./commons.js", [ [ "FERAL_REG_EXP", [ $h͏_a => FERAL_REG_EXP = $h͏_a ] ], [ "freezeRegexp", [ $h͏_a => freezeRegexp = $h͏_a ] ], [ "regexpExec", [ $h͏_a => regexpExec = $h͏_a ] ], [ "stringSlice", [ $h͏_a => stringSlice = $h͏_a ] ] ] ] ]);
                const sourceMetaEntryRegExp = "\\s*[@#]\\s*([a-zA-Z][a-zA-Z0-9]*)\\s*=\\s*([^\\s\\*]*)";
                const sourceMetaEntriesRegExp = freezeRegexp(new FERAL_REG_EXP(`(?:\\s*//${sourceMetaEntryRegExp}|/\\*${sourceMetaEntryRegExp}\\s*\\*/)\\s*$`));
                const getSourceURL = src => {
                    let sourceURL = "<unknown>";
                    while (src.length > 0) {
                        const match = regexpExec(sourceMetaEntriesRegExp, src);
                        if (match === null) {
                            break;
                        }
                        src = stringSlice(src, 0, -match[0].length);
                        if (match[3] === "sourceURL") {
                            sourceURL = match[4];
                        } else if (match[1] === "sourceURL") {
                            sourceURL = match[2];
                        }
                    }
                    return sourceURL;
                };
                $h͏_once.getSourceURL(getSourceURL);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let FERAL_REG_EXP, SyntaxError, freezeRegexp, regexpReplace, regexpSearch, sealRegexp, stringSlice, stringSplit, freeze, getSourceURL;
                $h͏_imports([ [ "./commons.js", [ [ "FERAL_REG_EXP", [ $h͏_a => FERAL_REG_EXP = $h͏_a ] ], [ "SyntaxError", [ $h͏_a => SyntaxError = $h͏_a ] ], [ "freezeRegexp", [ $h͏_a => freezeRegexp = $h͏_a ] ], [ "regexpReplace", [ $h͏_a => regexpReplace = $h͏_a ] ], [ "regexpSearch", [ $h͏_a => regexpSearch = $h͏_a ] ], [ "sealRegexp", [ $h͏_a => sealRegexp = $h͏_a ] ], [ "stringSlice", [ $h͏_a => stringSlice = $h͏_a ] ], [ "stringSplit", [ $h͏_a => stringSplit = $h͏_a ] ], [ "freeze", [ $h͏_a => freeze = $h͏_a ] ] ] ], [ "./get-source-url.js", [ [ "getSourceURL", [ $h͏_a => getSourceURL = $h͏_a ] ] ] ] ]);
                function getLineNumber(src, pattern) {
                    const index = regexpSearch(pattern, src);
                    if (index < 0) {
                        return -1;
                    }
                    const adjustment = src[index] === "\n" ? 1 : 0;
                    return stringSplit(stringSlice(src, 0, index), "\n").length + adjustment;
                }
                const htmlCommentPattern = sealRegexp(new FERAL_REG_EXP(`(?:${"<"}!--|--${">"})`, "g"));
                const rejectHtmlComments = src => {
                    const lineNumber = getLineNumber(src, htmlCommentPattern);
                    if (lineNumber < 0) {
                        return src;
                    }
                    const name = getSourceURL(src);
                    throw SyntaxError(`Possible HTML comment rejected at ${name}:${lineNumber}. (SES_HTML_COMMENT_REJECTED)`);
                };
                $h͏_once.rejectHtmlComments(rejectHtmlComments);
                const evadeHtmlCommentTest = src => {
                    const replaceFn = match => match[0] === "<" ? "< ! --" : "-- >";
                    return regexpReplace(htmlCommentPattern, src, replaceFn);
                };
                $h͏_once.evadeHtmlCommentTest(evadeHtmlCommentTest);
                const importPattern = sealRegexp(new FERAL_REG_EXP("(^|[^.]|\\.\\.\\.)\\bimport(\\s*(?:\\(|/[/*]))", "g"));
                const rejectImportExpressions = src => {
                    const lineNumber = getLineNumber(src, importPattern);
                    if (lineNumber < 0) {
                        return src;
                    }
                    const name = getSourceURL(src);
                    throw SyntaxError(`Possible import expression rejected at ${name}:${lineNumber}. (SES_IMPORT_REJECTED)`);
                };
                $h͏_once.rejectImportExpressions(rejectImportExpressions);
                const evadeImportExpressionTest = src => {
                    const replaceFn = (_, p1, p2) => `${p1}__import__${p2}`;
                    return regexpReplace(importPattern, src, replaceFn);
                };
                $h͏_once.evadeImportExpressionTest(evadeImportExpressionTest);
                const someDirectEvalPattern = freezeRegexp(new FERAL_REG_EXP("(^|[^.])\\beval(\\s*\\()"));
                const rejectSomeDirectEvalExpressions = src => {
                    const lineNumber = getLineNumber(src, someDirectEvalPattern);
                    if (lineNumber < 0) {
                        return src;
                    }
                    const name = getSourceURL(src);
                    throw SyntaxError(`Possible direct eval expression rejected at ${name}:${lineNumber}. (SES_EVAL_REJECTED)`);
                };
                $h͏_once.rejectSomeDirectEvalExpressions(rejectSomeDirectEvalExpressions);
                const mandatoryTransforms = source => {
                    source = rejectHtmlComments(source);
                    source = rejectImportExpressions(source);
                    return source;
                };
                $h͏_once.mandatoryTransforms(mandatoryTransforms);
                const applyTransforms = (source, transforms) => {
                    for (let i = 0, l = transforms.length; i < l; i += 1) {
                        const transform = transforms[i];
                        source = transform(source);
                    }
                    return source;
                };
                $h͏_once.applyTransforms(applyTransforms);
                const transforms = freeze({
                    rejectHtmlComments: freeze(rejectHtmlComments),
                    evadeHtmlCommentTest: freeze(evadeHtmlCommentTest),
                    rejectImportExpressions: freeze(rejectImportExpressions),
                    evadeImportExpressionTest: freeze(evadeImportExpressionTest),
                    rejectSomeDirectEvalExpressions: freeze(rejectSomeDirectEvalExpressions),
                    mandatoryTransforms: freeze(mandatoryTransforms),
                    applyTransforms: freeze(applyTransforms)
                });
                $h͏_once.transforms(transforms);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let arrayFilter, arrayIncludes, freezeRegexp, getOwnPropertyDescriptor, getOwnPropertyNames, hasOwn, regexpSearch, Set, setHas;
                $h͏_imports([ [ "./commons.js", [ [ "arrayFilter", [ $h͏_a => arrayFilter = $h͏_a ] ], [ "arrayIncludes", [ $h͏_a => arrayIncludes = $h͏_a ] ], [ "freezeRegexp", [ $h͏_a => freezeRegexp = $h͏_a ] ], [ "getOwnPropertyDescriptor", [ $h͏_a => getOwnPropertyDescriptor = $h͏_a ] ], [ "getOwnPropertyNames", [ $h͏_a => getOwnPropertyNames = $h͏_a ] ], [ "hasOwn", [ $h͏_a => hasOwn = $h͏_a ] ], [ "regexpSearch", [ $h͏_a => regexpSearch = $h͏_a ] ], [ "Set", [ $h͏_a => Set = $h͏_a ] ], [ "setHas", [ $h͏_a => setHas = $h͏_a ] ] ] ] ]);
                const reservedNames = new Set([ "await", "break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete", "do", "else", "export", "extends", "finally", "for", "function", "if", "import", "in", "instanceof", "new", "return", "super", "switch", "this", "throw", "try", "typeof", "var", "void", "while", "with", "yield", "let", "static", "enum", "implements", "package", "protected", "interface", "private", "public", "await", "null", "true", "false", "this", "arguments", "eval" ]);
                const identifierPattern = freezeRegexp(/^[a-zA-Z_$][\w$]*$/);
                const isValidIdentifierName = name => !setHas(reservedNames, name) && regexpSearch(identifierPattern, name) !== -1;
                $h͏_once.isValidIdentifierName(isValidIdentifierName);
                function isImmutableDataProperty(obj, name) {
                    const desc = getOwnPropertyDescriptor(obj, name);
                    return desc && desc.configurable === false && desc.writable === false && hasOwn(desc, "value");
                }
                const getScopeConstants = (globalObject, moduleLexicals = {}) => {
                    const globalObjectNames = getOwnPropertyNames(globalObject);
                    const moduleLexicalNames = getOwnPropertyNames(moduleLexicals);
                    const moduleLexicalConstants = arrayFilter(moduleLexicalNames, name => isValidIdentifierName(name) && isImmutableDataProperty(moduleLexicals, name));
                    const globalObjectConstants = arrayFilter(globalObjectNames, name => !arrayIncludes(moduleLexicalNames, name) && isValidIdentifierName(name) && isImmutableDataProperty(globalObject, name));
                    return {
                        globalObjectConstants: globalObjectConstants,
                        moduleLexicalConstants: moduleLexicalConstants
                    };
                };
                $h͏_once.getScopeConstants(getScopeConstants);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let FERAL_FUNCTION, arrayJoin, apply, getScopeConstants;
                $h͏_imports([ [ "./commons.js", [ [ "FERAL_FUNCTION", [ $h͏_a => FERAL_FUNCTION = $h͏_a ] ], [ "arrayJoin", [ $h͏_a => arrayJoin = $h͏_a ] ], [ "apply", [ $h͏_a => apply = $h͏_a ] ] ] ], [ "./scope-constants.js", [ [ "getScopeConstants", [ $h͏_a => getScopeConstants = $h͏_a ] ] ] ] ]);
                function buildOptimizer(constants, name) {
                    if (constants.length === 0) return "";
                    return `const {${arrayJoin(constants, ",")}} = this.${name};`;
                }
                const makeEvaluate = context => {
                    const {globalObjectConstants: globalObjectConstants, moduleLexicalConstants: moduleLexicalConstants} = getScopeConstants(context.globalObject, context.moduleLexicals);
                    const globalObjectOptimizer = buildOptimizer(globalObjectConstants, "globalObject");
                    const moduleLexicalOptimizer = buildOptimizer(moduleLexicalConstants, "moduleLexicals");
                    const evaluateFactory = FERAL_FUNCTION(`\n    with (this.scopeTerminator) {\n      with (this.globalObject) {\n        with (this.moduleLexicals) {\n          with (this.evalScope) {\n            ${globalObjectOptimizer}\n            ${moduleLexicalOptimizer}\n            return function() {\n              'use strict';\n              return eval(arguments[0]);\n            };\n          }\n        }\n      }\n    }\n  `);
                    return apply(evaluateFactory, context, []);
                };
                $h͏_once.makeEvaluate(makeEvaluate);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let apply, arrayFlatMap, freeze, identity, strictScopeTerminator, createSloppyGlobalsScopeTerminator, makeEvalScopeKit, applyTransforms, mandatoryTransforms, makeEvaluate, assert;
                $h͏_imports([ [ "./commons.js", [ [ "apply", [ $h͏_a => apply = $h͏_a ] ], [ "arrayFlatMap", [ $h͏_a => arrayFlatMap = $h͏_a ] ], [ "freeze", [ $h͏_a => freeze = $h͏_a ] ], [ "identity", [ $h͏_a => identity = $h͏_a ] ] ] ], [ "./strict-scope-terminator.js", [ [ "strictScopeTerminator", [ $h͏_a => strictScopeTerminator = $h͏_a ] ] ] ], [ "./sloppy-globals-scope-terminator.js", [ [ "createSloppyGlobalsScopeTerminator", [ $h͏_a => createSloppyGlobalsScopeTerminator = $h͏_a ] ] ] ], [ "./eval-scope.js", [ [ "makeEvalScopeKit", [ $h͏_a => makeEvalScopeKit = $h͏_a ] ] ] ], [ "./transforms.js", [ [ "applyTransforms", [ $h͏_a => applyTransforms = $h͏_a ] ], [ "mandatoryTransforms", [ $h͏_a => mandatoryTransforms = $h͏_a ] ] ] ], [ "./make-evaluate.js", [ [ "makeEvaluate", [ $h͏_a => makeEvaluate = $h͏_a ] ] ] ], [ "./error/assert.js", [ [ "assert", [ $h͏_a => assert = $h͏_a ] ] ] ] ]);
                const {Fail: Fail} = assert;
                const makeSafeEvaluator = ({globalObject: globalObject, moduleLexicals: moduleLexicals = {}, globalTransforms: globalTransforms = [], sloppyGlobalsMode: sloppyGlobalsMode = false}) => {
                    const scopeTerminator = sloppyGlobalsMode ? createSloppyGlobalsScopeTerminator(globalObject) : strictScopeTerminator;
                    const evalScopeKit = makeEvalScopeKit();
                    const {evalScope: evalScope} = evalScopeKit;
                    const evaluateContext = freeze({
                        evalScope: evalScope,
                        moduleLexicals: moduleLexicals,
                        globalObject: globalObject,
                        scopeTerminator: scopeTerminator
                    });
                    let evaluate;
                    const provideEvaluate = () => {
                        if (!evaluate) {
                            evaluate = makeEvaluate(evaluateContext);
                        }
                    };
                    const safeEvaluate = (source, options) => {
                        const {localTransforms: localTransforms = []} = options || {};
                        provideEvaluate();
                        source = applyTransforms(source, arrayFlatMap([ localTransforms, globalTransforms, [ mandatoryTransforms ] ], identity));
                        let err;
                        try {
                            evalScopeKit.allowNextEvalToBeUnsafe();
                            return apply(evaluate, globalObject, [ source ]);
                        } catch (e) {
                            err = e;
                            throw e;
                        } finally {
                            const unsafeEvalWasStillExposed = "eval" in evalScope;
                            delete evalScope.eval;
                            if (unsafeEvalWasStillExposed) {
                                evalScopeKit.revoked = {
                                    err: err
                                };
                                Fail`handler did not reset allowNextEvalToBeUnsafe ${err}`;
                            }
                        }
                    };
                    return {
                        safeEvaluate: safeEvaluate
                    };
                };
                $h͏_once.makeSafeEvaluator(makeSafeEvaluator);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let WeakSet, defineProperty, freeze, functionPrototype, functionToString, stringEndsWith, weaksetAdd, weaksetHas;
                $h͏_imports([ [ "./commons.js", [ [ "WeakSet", [ $h͏_a => WeakSet = $h͏_a ] ], [ "defineProperty", [ $h͏_a => defineProperty = $h͏_a ] ], [ "freeze", [ $h͏_a => freeze = $h͏_a ] ], [ "functionPrototype", [ $h͏_a => functionPrototype = $h͏_a ] ], [ "functionToString", [ $h͏_a => functionToString = $h͏_a ] ], [ "stringEndsWith", [ $h͏_a => stringEndsWith = $h͏_a ] ], [ "weaksetAdd", [ $h͏_a => weaksetAdd = $h͏_a ] ], [ "weaksetHas", [ $h͏_a => weaksetHas = $h͏_a ] ] ] ] ]);
                const nativeSuffix = ") { [native code] }";
                let markVirtualizedNativeFunction;
                const tameFunctionToString = () => {
                    if (markVirtualizedNativeFunction === undefined) {
                        const virtualizedNativeFunctions = new WeakSet;
                        const tamingMethods = {
                            toString() {
                                const str = functionToString(this);
                                if (stringEndsWith(str, nativeSuffix) || !weaksetHas(virtualizedNativeFunctions, this)) {
                                    return str;
                                }
                                return `function ${this.name}() { [native code] }`;
                            }
                        };
                        defineProperty(functionPrototype, "toString", {
                            value: tamingMethods.toString
                        });
                        markVirtualizedNativeFunction = freeze(func => weaksetAdd(virtualizedNativeFunctions, func));
                    }
                    return markVirtualizedNativeFunction;
                };
                $h͏_once.tameFunctionToString(tameFunctionToString);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let TypeError, globalThis, getOwnPropertyDescriptor, defineProperty;
                $h͏_imports([ [ "./commons.js", [ [ "TypeError", [ $h͏_a => TypeError = $h͏_a ] ], [ "globalThis", [ $h͏_a => globalThis = $h͏_a ] ], [ "getOwnPropertyDescriptor", [ $h͏_a => getOwnPropertyDescriptor = $h͏_a ] ], [ "defineProperty", [ $h͏_a => defineProperty = $h͏_a ] ] ] ] ]);
                Object.defineProperty(tameDomains, "name", {
                    value: "tameDomains"
                });
                $h͏_once.tameDomains(tameDomains);
                function tameDomains(domainTaming = "safe") {
                    if (domainTaming === "unsafe") {
                        return;
                    }
                    const globalProcess = globalThis.process || undefined;
                    if (typeof globalProcess === "object") {
                        const domainDescriptor = getOwnPropertyDescriptor(globalProcess, "domain");
                        if (domainDescriptor !== undefined && domainDescriptor.get !== undefined) {
                            throw TypeError(`SES failed to lockdown, Node.js domains have been initialized (SES_NO_DOMAINS)`);
                        }
                        defineProperty(globalProcess, "domain", {
                            value: null,
                            configurable: false,
                            writable: false,
                            enumerable: false
                        });
                    }
                }
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let functionPrototype, getPrototypeOf, globalThis, objectPrototype, setPrototypeOf;
                $h͏_imports([ [ "./commons.js", [ [ "functionPrototype", [ $h͏_a => functionPrototype = $h͏_a ] ], [ "getPrototypeOf", [ $h͏_a => getPrototypeOf = $h͏_a ] ], [ "globalThis", [ $h͏_a => globalThis = $h͏_a ] ], [ "objectPrototype", [ $h͏_a => objectPrototype = $h͏_a ] ], [ "setPrototypeOf", [ $h͏_a => setPrototypeOf = $h͏_a ] ] ] ] ]);
                const tameModuleSource = () => {
                    const newIntrinsics = {};
                    const ModuleSource = globalThis.ModuleSource;
                    if (ModuleSource !== undefined) {
                        newIntrinsics.ModuleSource = ModuleSource;
                        function AbstractModuleSource() {}
                        const ModuleSourceProto = getPrototypeOf(ModuleSource);
                        if (ModuleSourceProto === functionPrototype) {
                            setPrototypeOf(ModuleSource, AbstractModuleSource);
                            newIntrinsics["%AbstractModuleSource%"] = AbstractModuleSource;
                            newIntrinsics["%AbstractModuleSourcePrototype%"] = AbstractModuleSource.prototype;
                        } else {
                            newIntrinsics["%AbstractModuleSource%"] = ModuleSourceProto;
                            newIntrinsics["%AbstractModuleSourcePrototype%"] = ModuleSourceProto.prototype;
                        }
                        const ModuleSourcePrototype = ModuleSource.prototype;
                        if (ModuleSourcePrototype !== undefined) {
                            newIntrinsics["%ModuleSourcePrototype%"] = ModuleSourcePrototype;
                            const ModuleSourcePrototypeProto = getPrototypeOf(ModuleSourcePrototype);
                            if (ModuleSourcePrototypeProto === objectPrototype) {
                                setPrototypeOf(ModuleSource.prototype, AbstractModuleSource.prototype);
                            }
                        }
                    }
                    return newIntrinsics;
                };
                $h͏_once.tameModuleSource(tameModuleSource);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let WeakSet, arrayFilter, arrayFlatMap, arrayMap, arrayPop, arrayPush, defineProperty, freeze, fromEntries, globalThis, isError, stringEndsWith, stringIncludes, stringSplit, weaksetAdd, weaksetHas, stringIndexOf, stringSlice;
                $h͏_imports([ [ "../commons.js", [ [ "WeakSet", [ $h͏_a => WeakSet = $h͏_a ] ], [ "arrayFilter", [ $h͏_a => arrayFilter = $h͏_a ] ], [ "arrayFlatMap", [ $h͏_a => arrayFlatMap = $h͏_a ] ], [ "arrayMap", [ $h͏_a => arrayMap = $h͏_a ] ], [ "arrayPop", [ $h͏_a => arrayPop = $h͏_a ] ], [ "arrayPush", [ $h͏_a => arrayPush = $h͏_a ] ], [ "defineProperty", [ $h͏_a => defineProperty = $h͏_a ] ], [ "freeze", [ $h͏_a => freeze = $h͏_a ] ], [ "fromEntries", [ $h͏_a => fromEntries = $h͏_a ] ], [ "globalThis", [ $h͏_a => globalThis = $h͏_a ] ], [ "isError", [ $h͏_a => isError = $h͏_a ] ], [ "stringEndsWith", [ $h͏_a => stringEndsWith = $h͏_a ] ], [ "stringIncludes", [ $h͏_a => stringIncludes = $h͏_a ] ], [ "stringSplit", [ $h͏_a => stringSplit = $h͏_a ] ], [ "weaksetAdd", [ $h͏_a => weaksetAdd = $h͏_a ] ], [ "weaksetHas", [ $h͏_a => weaksetHas = $h͏_a ] ], [ "stringIndexOf", [ $h͏_a => stringIndexOf = $h͏_a ] ], [ "stringSlice", [ $h͏_a => stringSlice = $h͏_a ] ] ] ] ]);
                const defineName = (name, fn) => defineProperty(fn, "name", {
                    value: name
                });
                const consoleLevelMethods = freeze([ [ "debug", "debug" ], [ "log", "log" ], [ "info", "info" ], [ "warn", "warn" ], [ "error", "error" ], [ "trace", "log" ], [ "dirxml", "log" ], [ "group", "log" ], [ "groupCollapsed", "log" ] ]);
                $h͏_once.consoleLevelMethods(consoleLevelMethods);
                const consoleSpecialMethods = freeze([ [ "assert", "error" ], [ "timeLog", "log" ] ]);
                $h͏_once.consoleSpecialMethods(consoleSpecialMethods);
                const consoleOtherMethods = freeze([ [ "clear", "info" ], [ "count", "info" ], [ "countReset", "info" ], [ "dir", "log" ], [ "groupEnd", "log" ], [ "table", "log" ], [ "time", "info" ], [ "timeEnd", "info" ], [ "profile", "info" ], [ "profileEnd", "info" ], [ "timeStamp", "info" ] ]);
                $h͏_once.consoleOtherMethods(consoleOtherMethods);
                const consoleMethodPermits = freeze([ ...consoleLevelMethods, ...consoleSpecialMethods, ...consoleOtherMethods ]);
                const sanitizeFormatData = ([...formatData]) => {
                    freeze(formatData);
                    if (formatData.length <= 1) {
                        return formatData;
                    }
                    const [fmt, ...args] = formatData;
                    if (typeof fmt !== "string" || !stringIncludes(fmt, "%")) {
                        return formatData;
                    }
                    let startPos = 0;
                    let argI = 0;
                    let newFmt = "";
                    const newArgs = [];
                    for (let percentPos = stringIndexOf(fmt, "%"); percentPos >= startPos && percentPos < fmt.length - 1 && argI < args.length; percentPos = stringIndexOf(fmt, "%", startPos)) {
                        const char = fmt[percentPos + 1];
                        switch (char) {
                          case "s":
                          case "d":
                          case "i":
                          case "f":
                          case "o":
                          case "O":
                            {
                                newFmt += stringSlice(fmt, startPos, percentPos + 2);
                                startPos = percentPos + 2;
                                arrayPush(newArgs, args[argI]);
                                argI += 1;
                                break;
                            }

                          case "c":
                            {
                                newFmt += stringSlice(fmt, startPos, percentPos);
                                startPos = percentPos + 2;
                                argI += 1;
                                break;
                            }

                          case "%":
                            {
                                newFmt += stringSlice(fmt, startPos, percentPos + 2);
                                startPos = percentPos + 2;
                                break;
                            }

                          default:
                            {
                                newFmt += stringSlice(fmt, startPos, percentPos);
                                newFmt += `%%${char}`;
                                startPos = percentPos + 2;
                                break;
                            }
                        }
                    }
                    if (startPos < fmt.length) {
                        newFmt += stringSlice(fmt, startPos, fmt.length);
                    }
                    for (;argI < args.length; argI += 1) {
                        arrayPush(newArgs, args[argI]);
                    }
                    return freeze([ newFmt, ...newArgs ]);
                };
                $h͏_once.sanitizeFormatData(sanitizeFormatData);
                freeze(sanitizeFormatData);
                const makeLoggingConsoleKit = (loggedErrorHandler, {shouldResetForDebugging: shouldResetForDebugging = false} = {}) => {
                    if (shouldResetForDebugging) {
                        loggedErrorHandler.resetErrorTagNum();
                    }
                    let logArray = [];
                    const loggingConsole = fromEntries(arrayMap(consoleMethodPermits, ([name, _]) => {
                        const method = defineName(name, (...args) => {
                            arrayPush(logArray, [ name, ...args ]);
                        });
                        return [ name, freeze(method) ];
                    }));
                    freeze(loggingConsole);
                    const takeLog = () => {
                        const result = freeze(logArray);
                        logArray = [];
                        return result;
                    };
                    freeze(takeLog);
                    const typedLoggingConsole = loggingConsole;
                    return freeze({
                        loggingConsole: typedLoggingConsole,
                        takeLog: takeLog
                    });
                };
                $h͏_once.makeLoggingConsoleKit(makeLoggingConsoleKit);
                freeze(makeLoggingConsoleKit);
                const pumpLogToConsole = (log, baseConsole) => {
                    for (const [name, ...args] of log) {
                        baseConsole[name](...args);
                    }
                };
                $h͏_once.pumpLogToConsole(pumpLogToConsole);
                const ErrorInfo = {
                    NOTE: "ERROR_NOTE:",
                    MESSAGE: "ERROR_MESSAGE:",
                    CAUSE: "cause:",
                    ERRORS: "errors:"
                };
                freeze(ErrorInfo);
                const makeCausalConsole = (feralConsole, loggedErrorHandler) => {
                    if (!feralConsole) {
                        return undefined;
                    }
                    const Console = feralConsole.Console;
                    const {stdout: stdout, stderr: stderr} = globalThis.process || {
                        __proto__: null
                    };
                    const baseConsole = typeof Console === "function" && (stdout || stderr) ? new Console({
                        stdout: stdout,
                        stderr: stderr,
                        inspectOptions: {
                            colors: undefined,
                            customInspect: false
                        }
                    }) : feralConsole;
                    const {getStackString: getStackString, tagError: tagError, takeMessageLogArgs: takeMessageLogArgs, takeNoteLogArgsArray: takeNoteLogArgsArray} = loggedErrorHandler;
                    const extractErrorArgs = (logArgs, subErrorsSink) => {
                        const argTags = arrayMap(logArgs, arg => {
                            if (isError(arg)) {
                                arrayPush(subErrorsSink, arg);
                                return `(${tagError(arg)})`;
                            }
                            return arg;
                        });
                        return argTags;
                    };
                    const logErrorInfo = (severity, error, kind, logArgs, subErrorsSink) => {
                        const errorTag = tagError(error);
                        const errorName = kind === ErrorInfo.MESSAGE ? `${errorTag}:` : `${errorTag} ${kind}`;
                        const argTags = extractErrorArgs(logArgs, subErrorsSink);
                        baseConsole[severity](errorName, ...argTags);
                    };
                    const logSubErrors = (severity, subErrors, optTag = undefined) => {
                        if (subErrors.length === 0) {
                            return;
                        }
                        if (subErrors.length === 1 && optTag === undefined) {
                            logError(severity, subErrors[0]);
                            return;
                        }
                        let label;
                        if (subErrors.length === 1) {
                            label = `Nested error`;
                        } else {
                            label = `Nested ${subErrors.length} errors`;
                        }
                        if (optTag !== undefined) {
                            label = `${label} under ${optTag}`;
                        }
                        baseConsole.group(label);
                        try {
                            for (const subError of subErrors) {
                                logError(severity, subError);
                            }
                        } finally {
                            if (baseConsole.groupEnd) {
                                baseConsole.groupEnd();
                            }
                        }
                    };
                    const errorsLogged = new WeakSet;
                    const makeNoteCallback = severity => (error, noteLogArgs) => {
                        const subErrors = [];
                        logErrorInfo(severity, error, ErrorInfo.NOTE, noteLogArgs, subErrors);
                        logSubErrors(severity, subErrors, tagError(error));
                    };
                    const logError = (severity, error) => {
                        if (weaksetHas(errorsLogged, error)) {
                            return;
                        }
                        const errorTag = tagError(error);
                        weaksetAdd(errorsLogged, error);
                        const subErrors = [];
                        const messageLogArgs = takeMessageLogArgs(error);
                        const noteLogArgsArray = takeNoteLogArgsArray(error, makeNoteCallback(severity));
                        if (messageLogArgs === undefined) {
                            baseConsole[severity](`${errorTag}:`, error.message);
                        } else {
                            logErrorInfo(severity, error, ErrorInfo.MESSAGE, messageLogArgs, subErrors);
                        }
                        let stackString = getStackString(error);
                        if (typeof stackString === "string" && stackString.length >= 1 && !stringEndsWith(stackString, "\n")) {
                            stackString += "\n";
                        }
                        baseConsole[severity](stackString);
                        if (error.cause) {
                            logErrorInfo(severity, error, ErrorInfo.CAUSE, [ error.cause ], subErrors);
                        }
                        if (error.errors) {
                            logErrorInfo(severity, error, ErrorInfo.ERRORS, error.errors, subErrors);
                        }
                        for (const noteLogArgs of noteLogArgsArray) {
                            logErrorInfo(severity, error, ErrorInfo.NOTE, noteLogArgs, subErrors);
                        }
                        logSubErrors(severity, subErrors, errorTag);
                    };
                    const levelMethods = arrayMap(consoleLevelMethods, ([name, level]) => {
                        const levelMethod = defineName(name, (...logArgs) => {
                            const subErrors = [];
                            const argTags = extractErrorArgs(sanitizeFormatData(logArgs), subErrors);
                            baseConsole[name](...argTags);
                            logSubErrors(level, subErrors);
                        });
                        return [ name, freeze(levelMethod) ];
                    });
                    const assertMethod = defineName("assert", (...assertArgs) => {
                        if (assertArgs.length <= 1) {
                            baseConsole.assert(...assertArgs);
                        } else {
                            const [cond, ...logArgs] = assertArgs;
                            const subErrors = [];
                            const argTags = extractErrorArgs(sanitizeFormatData(logArgs), subErrors);
                            baseConsole.assert(cond, ...argTags);
                            logSubErrors("error", subErrors);
                        }
                    });
                    const timeLogMethod = defineName("timeLog", (...timeLogArgs) => {
                        if (timeLogArgs.length <= 1) {
                            baseConsole.timeLog(...timeLogArgs);
                        } else {
                            const [label, ...logArgs] = timeLogArgs;
                            const subErrors = [];
                            const argTags = extractErrorArgs(sanitizeFormatData(logArgs), subErrors);
                            baseConsole.timeLog(label, ...argTags);
                            logSubErrors("log", subErrors);
                        }
                    });
                    const otherMethods = arrayMap(consoleOtherMethods, ([name, _level]) => {
                        const otherMethod = defineName(name, (...args) => {
                            baseConsole[name](...args);
                            return undefined;
                        });
                        return [ name, freeze(otherMethod) ];
                    });
                    const methodEntries = arrayFilter([ ...levelMethods, [ "assert", assertMethod ], [ "timeLog", timeLogMethod ], ...otherMethods ], ([name, _]) => name in baseConsole);
                    const causalConsole = fromEntries(methodEntries);
                    return freeze(causalConsole);
                };
                $h͏_once.makeCausalConsole(makeCausalConsole);
                freeze(makeCausalConsole);
                const indentAfterAllSeps = (str, sep, indents) => {
                    const [firstLine, ...restLines] = stringSplit(str, sep);
                    const indentedRest = arrayFlatMap(restLines, line => [ sep, ...indents, line ]);
                    return [ "", firstLine, ...indentedRest ];
                };
                const defineCausalConsoleFromLogger = loggedErrorHandler => {
                    const makeCausalConsoleFromLogger = tlogger => {
                        const indents = [];
                        const logWithIndent = (...args) => {
                            if (indents.length > 0) {
                                args = arrayFlatMap(args, arg => typeof arg === "string" && stringIncludes(arg, "\n") ? indentAfterAllSeps(arg, "\n", indents) : [ arg ]);
                                args = [ ...indents, ...args ];
                            }
                            return tlogger(...args);
                        };
                        const baseConsole = fromEntries([ ...arrayMap(consoleLevelMethods, ([name]) => [ name, defineName(name, (...args) => logWithIndent(...args)) ]), ...arrayMap(consoleOtherMethods, ([name]) => [ name, defineName(name, (...args) => logWithIndent(name, ...args)) ]) ]);
                        for (const name of [ "group", "groupCollapsed" ]) {
                            if (baseConsole[name]) {
                                baseConsole[name] = defineName(name, (...args) => {
                                    if (args.length >= 1) {
                                        logWithIndent(...args);
                                    }
                                    arrayPush(indents, " ");
                                });
                            } else {
                                baseConsole[name] = defineName(name, () => {});
                            }
                        }
                        baseConsole.groupEnd = defineName("groupEnd", baseConsole.groupEnd ? (...args) => {
                            arrayPop(indents);
                        } : () => {});
                        harden(baseConsole);
                        const causalConsole = makeCausalConsole(baseConsole, loggedErrorHandler);
                        return causalConsole;
                    };
                    return freeze(makeCausalConsoleFromLogger);
                };
                $h͏_once.defineCausalConsoleFromLogger(defineCausalConsoleFromLogger);
                freeze(defineCausalConsoleFromLogger);
                const filterConsole = (baseConsole, filter, _topic = undefined) => {
                    const methodPermits = arrayFilter(consoleMethodPermits, ([name, _]) => name in baseConsole);
                    const methods = arrayMap(methodPermits, ([name, severity]) => {
                        const method = defineName(name, (...args) => {
                            if (severity === undefined || filter.canLog(severity)) {
                                baseConsole[name](...args);
                            }
                        });
                        return [ name, freeze(method) ];
                    });
                    const filteringConsole = fromEntries(methods);
                    return freeze(filteringConsole);
                };
                $h͏_once.filterConsole(filterConsole);
                freeze(filterConsole);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let FinalizationRegistry, Map, mapGet, mapDelete, WeakMap, mapSet, finalizationRegistryRegister, weakmapSet, weakmapGet, mapEntries, mapHas;
                $h͏_imports([ [ "../commons.js", [ [ "FinalizationRegistry", [ $h͏_a => FinalizationRegistry = $h͏_a ] ], [ "Map", [ $h͏_a => Map = $h͏_a ] ], [ "mapGet", [ $h͏_a => mapGet = $h͏_a ] ], [ "mapDelete", [ $h͏_a => mapDelete = $h͏_a ] ], [ "WeakMap", [ $h͏_a => WeakMap = $h͏_a ] ], [ "mapSet", [ $h͏_a => mapSet = $h͏_a ] ], [ "finalizationRegistryRegister", [ $h͏_a => finalizationRegistryRegister = $h͏_a ] ], [ "weakmapSet", [ $h͏_a => weakmapSet = $h͏_a ] ], [ "weakmapGet", [ $h͏_a => weakmapGet = $h͏_a ] ], [ "mapEntries", [ $h͏_a => mapEntries = $h͏_a ] ], [ "mapHas", [ $h͏_a => mapHas = $h͏_a ] ] ] ] ]);
                const makeRejectionHandlers = reportReason => {
                    if (FinalizationRegistry === undefined) {
                        return undefined;
                    }
                    let lastReasonId = 0;
                    const idToReason = new Map;
                    let cancelChecking;
                    const removeReasonId = reasonId => {
                        mapDelete(idToReason, reasonId);
                        if (cancelChecking && idToReason.size === 0) {
                            cancelChecking();
                            cancelChecking = undefined;
                        }
                    };
                    const promiseToReasonId = new WeakMap;
                    const finalizeDroppedPromise = heldReasonId => {
                        if (mapHas(idToReason, heldReasonId)) {
                            const reason = mapGet(idToReason, heldReasonId);
                            removeReasonId(heldReasonId);
                            reportReason(reason);
                        }
                    };
                    const promiseToReason = new FinalizationRegistry(finalizeDroppedPromise);
                    const unhandledRejectionHandler = (reason, pr) => {
                        lastReasonId += 1;
                        const reasonId = lastReasonId;
                        mapSet(idToReason, reasonId, reason);
                        weakmapSet(promiseToReasonId, pr, reasonId);
                        finalizationRegistryRegister(promiseToReason, pr, reasonId, pr);
                    };
                    const rejectionHandledHandler = pr => {
                        const reasonId = weakmapGet(promiseToReasonId, pr);
                        removeReasonId(reasonId);
                    };
                    const processTerminationHandler = () => {
                        for (const [reasonId, reason] of mapEntries(idToReason)) {
                            removeReasonId(reasonId);
                            reportReason(reason);
                        }
                    };
                    return {
                        rejectionHandledHandler: rejectionHandledHandler,
                        unhandledRejectionHandler: unhandledRejectionHandler,
                        processTerminationHandler: processTerminationHandler
                    };
                };
                $h͏_once.makeRejectionHandlers(makeRejectionHandlers);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let TypeError, apply, defineProperty, freeze, globalThis, defaultHandler, makeCausalConsole, makeRejectionHandlers;
                $h͏_imports([ [ "../commons.js", [ [ "TypeError", [ $h͏_a => TypeError = $h͏_a ] ], [ "apply", [ $h͏_a => apply = $h͏_a ] ], [ "defineProperty", [ $h͏_a => defineProperty = $h͏_a ] ], [ "freeze", [ $h͏_a => freeze = $h͏_a ] ], [ "globalThis", [ $h͏_a => globalThis = $h͏_a ] ] ] ], [ "./assert.js", [ [ "loggedErrorHandler", [ $h͏_a => defaultHandler = $h͏_a ] ] ] ], [ "./console.js", [ [ "makeCausalConsole", [ $h͏_a => makeCausalConsole = $h͏_a ] ] ] ], [ "./unhandled-rejection.js", [ [ "makeRejectionHandlers", [ $h͏_a => makeRejectionHandlers = $h͏_a ] ] ] ] ]);
                const failFast = message => {
                    throw TypeError(message);
                };
                const wrapLogger = (logger, thisArg) => freeze((...args) => apply(logger, thisArg, args));
                const tameConsole = (consoleTaming = "safe", errorTrapping = "platform", unhandledRejectionTrapping = "report", optGetStackString = undefined) => {
                    let loggedErrorHandler;
                    if (optGetStackString === undefined) {
                        loggedErrorHandler = defaultHandler;
                    } else {
                        loggedErrorHandler = {
                            ...defaultHandler,
                            getStackString: optGetStackString
                        };
                    }
                    const originalConsole = typeof globalThis.console !== "undefined" ? globalThis.console : typeof globalThis.print === "function" ? (p => freeze({
                        debug: p,
                        log: p,
                        info: p,
                        warn: p,
                        error: p
                    }))(wrapLogger(globalThis.print)) : undefined;
                    if (originalConsole && originalConsole.log) {
                        for (const methodName of [ "warn", "error" ]) {
                            if (!originalConsole[methodName]) {
                                defineProperty(originalConsole, methodName, {
                                    value: wrapLogger(originalConsole.log, originalConsole)
                                });
                            }
                        }
                    }
                    const ourConsole = consoleTaming === "unsafe" ? originalConsole : makeCausalConsole(originalConsole, loggedErrorHandler);
                    const globalProcess = globalThis.process || undefined;
                    if (errorTrapping !== "none" && typeof globalProcess === "object" && typeof globalProcess.on === "function") {
                        let terminate;
                        if (errorTrapping === "platform" || errorTrapping === "exit") {
                            const {exit: exit} = globalProcess;
                            typeof exit === "function" || failFast("missing process.exit");
                            terminate = () => exit(globalProcess.exitCode || -1);
                        } else if (errorTrapping === "abort") {
                            terminate = globalProcess.abort;
                            typeof terminate === "function" || failFast("missing process.abort");
                        }
                        globalProcess.on("uncaughtException", error => {
                            ourConsole.error("SES_UNCAUGHT_EXCEPTION:", error);
                            if (terminate) {
                                terminate();
                            }
                        });
                    }
                    if (unhandledRejectionTrapping !== "none" && typeof globalProcess === "object" && typeof globalProcess.on === "function") {
                        const handleRejection = reason => {
                            ourConsole.error("SES_UNHANDLED_REJECTION:", reason);
                        };
                        const h = makeRejectionHandlers(handleRejection);
                        if (h) {
                            globalProcess.on("unhandledRejection", h.unhandledRejectionHandler);
                            globalProcess.on("rejectionHandled", h.rejectionHandledHandler);
                            globalProcess.on("exit", h.processTerminationHandler);
                        }
                    }
                    const globalWindow = globalThis.window || undefined;
                    if (errorTrapping !== "none" && typeof globalWindow === "object" && typeof globalWindow.addEventListener === "function") {
                        globalWindow.addEventListener("error", event => {
                            event.preventDefault();
                            ourConsole.error("SES_UNCAUGHT_EXCEPTION:", event.error);
                            if (errorTrapping === "exit" || errorTrapping === "abort") {
                                globalWindow.location.href = `about:blank`;
                            }
                        });
                    }
                    if (unhandledRejectionTrapping !== "none" && typeof globalWindow === "object" && typeof globalWindow.addEventListener === "function") {
                        const handleRejection = reason => {
                            ourConsole.error("SES_UNHANDLED_REJECTION:", reason);
                        };
                        const h = makeRejectionHandlers(handleRejection);
                        if (h) {
                            globalWindow.addEventListener("unhandledrejection", event => {
                                event.preventDefault();
                                h.unhandledRejectionHandler(event.reason, event.promise);
                            });
                            globalWindow.addEventListener("rejectionhandled", event => {
                                event.preventDefault();
                                h.rejectionHandledHandler(event.promise);
                            });
                            globalWindow.addEventListener("beforeunload", _event => {
                                h.processTerminationHandler();
                            });
                        }
                    }
                    return {
                        console: ourConsole
                    };
                };
                $h͏_once.tameConsole(tameConsole);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let WeakMap, WeakSet, apply, arrayFilter, arrayJoin, arrayMap, arraySlice, create, defineProperties, freezeRegexp, fromEntries, reflectSet, regexpExec, regexpSearch, weakmapGet, weakmapSet, weaksetAdd, weaksetHas, TypeError;
                $h͏_imports([ [ "../commons.js", [ [ "WeakMap", [ $h͏_a => WeakMap = $h͏_a ] ], [ "WeakSet", [ $h͏_a => WeakSet = $h͏_a ] ], [ "apply", [ $h͏_a => apply = $h͏_a ] ], [ "arrayFilter", [ $h͏_a => arrayFilter = $h͏_a ] ], [ "arrayJoin", [ $h͏_a => arrayJoin = $h͏_a ] ], [ "arrayMap", [ $h͏_a => arrayMap = $h͏_a ] ], [ "arraySlice", [ $h͏_a => arraySlice = $h͏_a ] ], [ "create", [ $h͏_a => create = $h͏_a ] ], [ "defineProperties", [ $h͏_a => defineProperties = $h͏_a ] ], [ "freezeRegexp", [ $h͏_a => freezeRegexp = $h͏_a ] ], [ "fromEntries", [ $h͏_a => fromEntries = $h͏_a ] ], [ "reflectSet", [ $h͏_a => reflectSet = $h͏_a ] ], [ "regexpExec", [ $h͏_a => regexpExec = $h͏_a ] ], [ "regexpSearch", [ $h͏_a => regexpSearch = $h͏_a ] ], [ "weakmapGet", [ $h͏_a => weakmapGet = $h͏_a ] ], [ "weakmapSet", [ $h͏_a => weakmapSet = $h͏_a ] ], [ "weaksetAdd", [ $h͏_a => weaksetAdd = $h͏_a ] ], [ "weaksetHas", [ $h͏_a => weaksetHas = $h͏_a ] ], [ "TypeError", [ $h͏_a => TypeError = $h͏_a ] ] ] ] ]);
                const safeV8CallSiteMethodNames = [ "getTypeName", "getFunctionName", "getMethodName", "getFileName", "getLineNumber", "getColumnNumber", "getEvalOrigin", "isToplevel", "isEval", "isNative", "isConstructor", "isAsync", "getPosition", "getScriptNameOrSourceURL", "toString" ];
                const safeV8CallSiteFacet = callSite => {
                    const methodEntry = name => {
                        const method = callSite[name];
                        return [ name, () => apply(method, callSite, []) ];
                    };
                    const o = fromEntries(arrayMap(safeV8CallSiteMethodNames, methodEntry));
                    return create(o, {});
                };
                const safeV8SST = sst => arrayMap(sst, safeV8CallSiteFacet);
                const FILENAME_NODE_DEPENDENTS_CENSOR = freezeRegexp(/\/node_modules\//);
                const FILENAME_NODE_INTERNALS_CENSOR = freezeRegexp(/^(?:node:)?internal\//);
                const FILENAME_ASSERT_CENSOR = freezeRegexp(/\/packages\/ses\/src\/error\/assert\.js$/);
                const FILENAME_EVENTUAL_SEND_CENSOR = freezeRegexp(/\/packages\/eventual-send\/src\//);
                const FILENAME_SES_AVA_CENSOR = freezeRegexp(/\/packages\/ses-ava\/src\/ses-ava-test\.js$/);
                const FILENAME_CENSORS = [ FILENAME_NODE_DEPENDENTS_CENSOR, FILENAME_NODE_INTERNALS_CENSOR, FILENAME_ASSERT_CENSOR, FILENAME_EVENTUAL_SEND_CENSOR, FILENAME_SES_AVA_CENSOR ];
                const filterFileName = fileName => {
                    if (fileName === null) {
                        return false;
                    }
                    for (const filter of FILENAME_CENSORS) {
                        if (regexpSearch(filter, fileName) !== -1) {
                            return false;
                        }
                    }
                    return true;
                };
                $h͏_once.filterFileName(filterFileName);
                const CALLSITE_ELLIPSIS_PATTERN1 = freezeRegexp(/^((?:.*[( ])?)[:/\w_-]*\/\.\.\.\/(.+)$/);
                const CALLSITE_ELLIPSIS_PATTERN2 = freezeRegexp(/^((?:.*[( ])?)\.\.\.\/(.+)$/);
                const CALLSITE_PACKAGES_PATTERN = freezeRegexp(/^((?:.*[( ])?)[:/\w_-]*\/(packages\/.+)$/);
                const CALLSITE_FILE_2SLASH_PATTERN = freezeRegexp(/^((?:.*[( ])?)file:\/\/([^/].*)$/);
                const CALLSITE_PATTERNS = [ CALLSITE_ELLIPSIS_PATTERN1, CALLSITE_ELLIPSIS_PATTERN2, CALLSITE_PACKAGES_PATTERN, CALLSITE_FILE_2SLASH_PATTERN ];
                const shortenCallSiteString = callSiteString => {
                    for (const filter of CALLSITE_PATTERNS) {
                        const match = regexpExec(filter, callSiteString);
                        if (match) {
                            return arrayJoin(arraySlice(match, 1), "");
                        }
                    }
                    return callSiteString;
                };
                $h͏_once.shortenCallSiteString(shortenCallSiteString);
                const tameV8ErrorConstructor = (OriginalError, InitialError, errorTaming, stackFiltering) => {
                    if (errorTaming === "unsafe-debug") {
                        throw TypeError("internal: v8+unsafe-debug special case should already be done");
                    }
                    const originalCaptureStackTrace = OriginalError.captureStackTrace;
                    const omitFrames = stackFiltering === "concise" || stackFiltering === "omit-frames";
                    const shortenPaths = stackFiltering === "concise" || stackFiltering === "shorten-paths";
                    const callSiteFilter = callSite => {
                        if (omitFrames) {
                            if (callSite.getFunctionName()?.startsWith("__HIDE_")) {
                                return false;
                            }
                            return filterFileName(callSite.getFileName());
                        }
                        return true;
                    };
                    const callSiteStringifier = callSite => {
                        let callSiteString = `${callSite}`;
                        if (shortenPaths) {
                            callSiteString = shortenCallSiteString(callSiteString);
                        }
                        return `\n  at ${callSiteString}`;
                    };
                    const stackStringFromSST = (_error, sst) => arrayJoin(arrayMap(arrayFilter(sst, callSiteFilter), callSiteStringifier), "");
                    const stackInfos = new WeakMap;
                    const tamedMethods = {
                        captureStackTrace(error, optFn = tamedMethods.captureStackTrace) {
                            if (typeof originalCaptureStackTrace === "function") {
                                apply(originalCaptureStackTrace, OriginalError, [ error, optFn ]);
                                return;
                            }
                            reflectSet(error, "stack", "");
                        },
                        getStackString(error) {
                            let stackInfo = weakmapGet(stackInfos, error);
                            if (stackInfo === undefined) {
                                void error.stack;
                                stackInfo = weakmapGet(stackInfos, error);
                                if (!stackInfo) {
                                    stackInfo = {
                                        stackString: ""
                                    };
                                    weakmapSet(stackInfos, error, stackInfo);
                                }
                            }
                            if (stackInfo.stackString !== undefined) {
                                return stackInfo.stackString;
                            }
                            const stackString = stackStringFromSST(error, stackInfo.callSites);
                            weakmapSet(stackInfos, error, {
                                stackString: stackString
                            });
                            return stackString;
                        },
                        prepareStackTrace(error, sst) {
                            if (errorTaming === "unsafe") {
                                const stackString = stackStringFromSST(error, sst);
                                weakmapSet(stackInfos, error, {
                                    stackString: stackString
                                });
                                return `${error}${stackString}`;
                            } else {
                                weakmapSet(stackInfos, error, {
                                    callSites: sst
                                });
                                return "";
                            }
                        }
                    };
                    const defaultPrepareFn = tamedMethods.prepareStackTrace;
                    OriginalError.prepareStackTrace = defaultPrepareFn;
                    const systemPrepareFnSet = new WeakSet([ defaultPrepareFn ]);
                    const systemPrepareFnFor = inputPrepareFn => {
                        if (weaksetHas(systemPrepareFnSet, inputPrepareFn)) {
                            return inputPrepareFn;
                        }
                        const systemMethods = {
                            prepareStackTrace(error, sst) {
                                weakmapSet(stackInfos, error, {
                                    callSites: sst
                                });
                                return inputPrepareFn(error, safeV8SST(sst));
                            }
                        };
                        weaksetAdd(systemPrepareFnSet, systemMethods.prepareStackTrace);
                        return systemMethods.prepareStackTrace;
                    };
                    defineProperties(InitialError, {
                        captureStackTrace: {
                            value: tamedMethods.captureStackTrace,
                            writable: true,
                            enumerable: false,
                            configurable: true
                        },
                        prepareStackTrace: {
                            get() {
                                return OriginalError.prepareStackTrace;
                            },
                            set(inputPrepareStackTraceFn) {
                                if (typeof inputPrepareStackTraceFn === "function") {
                                    const systemPrepareFn = systemPrepareFnFor(inputPrepareStackTraceFn);
                                    OriginalError.prepareStackTrace = systemPrepareFn;
                                } else {
                                    OriginalError.prepareStackTrace = defaultPrepareFn;
                                }
                            },
                            enumerable: false,
                            configurable: true
                        }
                    });
                    return tamedMethods.getStackString;
                };
                $h͏_once.tameV8ErrorConstructor(tameV8ErrorConstructor);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let FERAL_ERROR, apply, construct, defineProperties, setPrototypeOf, getOwnPropertyDescriptor, defineProperty, getOwnPropertyDescriptors, NativeErrors, tameV8ErrorConstructor;
                $h͏_imports([ [ "../commons.js", [ [ "FERAL_ERROR", [ $h͏_a => FERAL_ERROR = $h͏_a ] ], [ "apply", [ $h͏_a => apply = $h͏_a ] ], [ "construct", [ $h͏_a => construct = $h͏_a ] ], [ "defineProperties", [ $h͏_a => defineProperties = $h͏_a ] ], [ "setPrototypeOf", [ $h͏_a => setPrototypeOf = $h͏_a ] ], [ "getOwnPropertyDescriptor", [ $h͏_a => getOwnPropertyDescriptor = $h͏_a ] ], [ "defineProperty", [ $h͏_a => defineProperty = $h͏_a ] ], [ "getOwnPropertyDescriptors", [ $h͏_a => getOwnPropertyDescriptors = $h͏_a ] ] ] ], [ "../permits.js", [ [ "NativeErrors", [ $h͏_a => NativeErrors = $h͏_a ] ] ] ], [ "./tame-v8-error-constructor.js", [ [ "tameV8ErrorConstructor", [ $h͏_a => tameV8ErrorConstructor = $h͏_a ] ] ] ] ]);
                const stackDesc = getOwnPropertyDescriptor(FERAL_ERROR.prototype, "stack");
                const stackGetter = stackDesc && stackDesc.get;
                const tamedMethods = {
                    getStackString(error) {
                        if (typeof stackGetter === "function") {
                            return apply(stackGetter, error, []);
                        } else if ("stack" in error) {
                            return `${error.stack}`;
                        }
                        return "";
                    }
                };
                let initialGetStackString = tamedMethods.getStackString;
                function tameErrorConstructor(errorTaming = "safe", stackFiltering = "concise") {
                    const ErrorPrototype = FERAL_ERROR.prototype;
                    const {captureStackTrace: originalCaptureStackTrace} = FERAL_ERROR;
                    const platform = typeof originalCaptureStackTrace === "function" ? "v8" : "unknown";
                    const makeErrorConstructor = (_ = {}) => {
                        const ResultError = function Error(...rest) {
                            let error;
                            if (new.target === undefined) {
                                error = apply(FERAL_ERROR, this, rest);
                            } else {
                                error = construct(FERAL_ERROR, rest, new.target);
                            }
                            if (platform === "v8") {
                                apply(originalCaptureStackTrace, FERAL_ERROR, [ error, ResultError ]);
                            }
                            return error;
                        };
                        defineProperties(ResultError, {
                            length: {
                                value: 1
                            },
                            prototype: {
                                value: ErrorPrototype,
                                writable: false,
                                enumerable: false,
                                configurable: false
                            }
                        });
                        return ResultError;
                    };
                    const InitialError = makeErrorConstructor({
                        powers: "original"
                    });
                    const SharedError = makeErrorConstructor({
                        powers: "none"
                    });
                    defineProperties(ErrorPrototype, {
                        constructor: {
                            value: SharedError
                        }
                    });
                    for (const NativeError of NativeErrors) {
                        setPrototypeOf(NativeError, SharedError);
                    }
                    defineProperties(InitialError, {
                        stackTraceLimit: {
                            get() {
                                if (typeof FERAL_ERROR.stackTraceLimit === "number") {
                                    return FERAL_ERROR.stackTraceLimit;
                                }
                                return undefined;
                            },
                            set(newLimit) {
                                if (typeof newLimit !== "number") {
                                    return;
                                }
                                if (typeof FERAL_ERROR.stackTraceLimit === "number") {
                                    FERAL_ERROR.stackTraceLimit = newLimit;
                                    return;
                                }
                            },
                            enumerable: false,
                            configurable: true
                        }
                    });
                    if (errorTaming === "unsafe-debug" && platform === "v8") {
                        defineProperties(InitialError, {
                            prepareStackTrace: {
                                get() {
                                    return FERAL_ERROR.prepareStackTrace;
                                },
                                set(newPrepareStackTrace) {
                                    FERAL_ERROR.prepareStackTrace = newPrepareStackTrace;
                                },
                                enumerable: false,
                                configurable: true
                            },
                            captureStackTrace: {
                                value: FERAL_ERROR.captureStackTrace,
                                writable: true,
                                enumerable: false,
                                configurable: true
                            }
                        });
                        const descs = getOwnPropertyDescriptors(InitialError);
                        defineProperties(SharedError, {
                            stackTraceLimit: descs.stackTraceLimit,
                            prepareStackTrace: descs.prepareStackTrace,
                            captureStackTrace: descs.captureStackTrace
                        });
                        return {
                            "%InitialGetStackString%": initialGetStackString,
                            "%InitialError%": InitialError,
                            "%SharedError%": SharedError
                        };
                    }
                    defineProperties(SharedError, {
                        stackTraceLimit: {
                            get() {
                                return undefined;
                            },
                            set(_newLimit) {},
                            enumerable: false,
                            configurable: true
                        }
                    });
                    if (platform === "v8") {
                        defineProperties(SharedError, {
                            prepareStackTrace: {
                                get() {
                                    return () => "";
                                },
                                set(_prepareFn) {},
                                enumerable: false,
                                configurable: true
                            },
                            captureStackTrace: {
                                value: (errorish, _constructorOpt) => {
                                    defineProperty(errorish, "stack", {
                                        value: ""
                                    });
                                },
                                writable: false,
                                enumerable: false,
                                configurable: true
                            }
                        });
                    }
                    if (platform === "v8") {
                        initialGetStackString = tameV8ErrorConstructor(FERAL_ERROR, InitialError, errorTaming, stackFiltering);
                    } else if (errorTaming === "unsafe" || errorTaming === "unsafe-debug") {
                        defineProperties(ErrorPrototype, {
                            stack: {
                                get() {
                                    return initialGetStackString(this);
                                },
                                set(newValue) {
                                    defineProperties(this, {
                                        stack: {
                                            value: newValue,
                                            writable: true,
                                            enumerable: true,
                                            configurable: true
                                        }
                                    });
                                }
                            }
                        });
                    } else {
                        defineProperties(ErrorPrototype, {
                            stack: {
                                get() {
                                    return `${this}`;
                                },
                                set(newValue) {
                                    defineProperties(this, {
                                        stack: {
                                            value: newValue,
                                            writable: true,
                                            enumerable: true,
                                            configurable: true
                                        }
                                    });
                                }
                            }
                        });
                    }
                    return {
                        "%InitialGetStackString%": initialGetStackString,
                        "%InitialError%": InitialError,
                        "%SharedError%": SharedError
                    };
                }
                $h͏_once.default(tameErrorConstructor);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let getenv, Map, Set, TypeError, arrayJoin, arrayMap, arrayPush, arraySome, create, freeze, generatorNext, generatorThrow, getOwnPropertyNames, isArray, isPrimitive, mapGet, mapHas, mapSet, promiseThen, setAdd, values, weakmapGet, weakmapHas, makeError, annotateError, q, b, X;
                $h͏_imports([ [ "@endo/env-options", [ [ "getEnvironmentOption", [ $h͏_a => getenv = $h͏_a ] ] ] ], [ "./commons.js", [ [ "Map", [ $h͏_a => Map = $h͏_a ] ], [ "Set", [ $h͏_a => Set = $h͏_a ] ], [ "TypeError", [ $h͏_a => TypeError = $h͏_a ] ], [ "arrayJoin", [ $h͏_a => arrayJoin = $h͏_a ] ], [ "arrayMap", [ $h͏_a => arrayMap = $h͏_a ] ], [ "arrayPush", [ $h͏_a => arrayPush = $h͏_a ] ], [ "arraySome", [ $h͏_a => arraySome = $h͏_a ] ], [ "create", [ $h͏_a => create = $h͏_a ] ], [ "freeze", [ $h͏_a => freeze = $h͏_a ] ], [ "generatorNext", [ $h͏_a => generatorNext = $h͏_a ] ], [ "generatorThrow", [ $h͏_a => generatorThrow = $h͏_a ] ], [ "getOwnPropertyNames", [ $h͏_a => getOwnPropertyNames = $h͏_a ] ], [ "isArray", [ $h͏_a => isArray = $h͏_a ] ], [ "isPrimitive", [ $h͏_a => isPrimitive = $h͏_a ] ], [ "mapGet", [ $h͏_a => mapGet = $h͏_a ] ], [ "mapHas", [ $h͏_a => mapHas = $h͏_a ] ], [ "mapSet", [ $h͏_a => mapSet = $h͏_a ] ], [ "promiseThen", [ $h͏_a => promiseThen = $h͏_a ] ], [ "setAdd", [ $h͏_a => setAdd = $h͏_a ] ], [ "values", [ $h͏_a => values = $h͏_a ] ], [ "weakmapGet", [ $h͏_a => weakmapGet = $h͏_a ] ], [ "weakmapHas", [ $h͏_a => weakmapHas = $h͏_a ] ] ] ], [ "./error/assert.js", [ [ "makeError", [ $h͏_a => makeError = $h͏_a ] ], [ "annotateError", [ $h͏_a => annotateError = $h͏_a ] ], [ "q", [ $h͏_a => q = $h͏_a ] ], [ "b", [ $h͏_a => b = $h͏_a ] ], [ "X", [ $h͏_a => X = $h͏_a ] ] ] ] ]);
                const noop = () => {};
                const asyncTrampoline = async (generatorFunc, args, errorWrapper) => {
                    await null;
                    const iterator = generatorFunc(...args);
                    let result = generatorNext(iterator);
                    while (!result.done) {
                        try {
                            const val = await result.value;
                            result = generatorNext(iterator, val);
                        } catch (error) {
                            result = generatorThrow(iterator, errorWrapper(error));
                        }
                    }
                    return result.value;
                };
                const syncTrampoline = (generatorFunc, args) => {
                    const iterator = generatorFunc(...args);
                    let result = generatorNext(iterator);
                    while (!result.done) {
                        try {
                            result = generatorNext(iterator, result.value);
                        } catch (error) {
                            result = generatorThrow(iterator, error);
                        }
                    }
                    return result.value;
                };
                const makeAlias = (compartment, specifier) => freeze({
                    compartment: compartment,
                    specifier: specifier
                });
                $h͏_once.makeAlias(makeAlias);
                const resolveAll = (imports, resolveHook, fullReferrerSpecifier) => {
                    const resolvedImports = create(null);
                    for (const importSpecifier of imports) {
                        const fullSpecifier = resolveHook(importSpecifier, fullReferrerSpecifier);
                        resolvedImports[importSpecifier] = fullSpecifier;
                    }
                    return freeze(resolvedImports);
                };
                const loadModuleSource = (compartmentPrivateFields, moduleAliases, compartment, moduleSpecifier, moduleSource, enqueueJob, selectImplementation, moduleLoads, importMeta) => {
                    const {resolveHook: resolveHook, name: compartmentName} = weakmapGet(compartmentPrivateFields, compartment);
                    const {imports: imports} = moduleSource;
                    if (!isArray(imports) || arraySome(imports, specifier => typeof specifier !== "string")) {
                        throw makeError(X`Invalid module source: 'imports' must be an array of strings, got ${imports} for module ${q(moduleSpecifier)} of compartment ${q(compartmentName)}`);
                    }
                    const resolvedImports = resolveAll(imports, resolveHook, moduleSpecifier);
                    const moduleRecord = freeze({
                        compartment: compartment,
                        moduleSource: moduleSource,
                        moduleSpecifier: moduleSpecifier,
                        resolvedImports: resolvedImports,
                        importMeta: importMeta
                    });
                    for (const fullSpecifier of values(resolvedImports)) {
                        enqueueJob(memoizedLoadWithErrorAnnotation, [ compartmentPrivateFields, moduleAliases, compartment, fullSpecifier, enqueueJob, selectImplementation, moduleLoads ]);
                    }
                    return moduleRecord;
                };
                function* loadWithoutErrorAnnotation(compartmentPrivateFields, moduleAliases, compartment, moduleSpecifier, enqueueJob, selectImplementation, moduleLoads) {
                    const {importHook: importHook, importNowHook: importNowHook, moduleMap: moduleMap, moduleMapHook: moduleMapHook, moduleRecords: moduleRecords, parentCompartment: parentCompartment} = weakmapGet(compartmentPrivateFields, compartment);
                    if (mapHas(moduleRecords, moduleSpecifier)) {
                        return mapGet(moduleRecords, moduleSpecifier);
                    }
                    let moduleDescriptor = moduleMap[moduleSpecifier];
                    if (moduleDescriptor === undefined && moduleMapHook !== undefined) {
                        moduleDescriptor = moduleMapHook(moduleSpecifier);
                    }
                    if (moduleDescriptor === undefined) {
                        const moduleHook = selectImplementation(importHook, importNowHook);
                        if (moduleHook === undefined) {
                            const moduleHookName = selectImplementation("importHook", "importNowHook");
                            throw makeError(X`${b(moduleHookName)} needed to load module ${q(moduleSpecifier)} in compartment ${q(compartment.name)}`);
                        }
                        moduleDescriptor = moduleHook(moduleSpecifier);
                        if (!weakmapHas(moduleAliases, moduleDescriptor)) {
                            moduleDescriptor = yield moduleDescriptor;
                        }
                    }
                    if (typeof moduleDescriptor === "string") {
                        throw makeError(X`Cannot map module ${q(moduleSpecifier)} to ${q(moduleDescriptor)} in parent compartment, use {source} module descriptor`, TypeError);
                    } else if (!isPrimitive(moduleDescriptor)) {
                        let aliasDescriptor = weakmapGet(moduleAliases, moduleDescriptor);
                        if (aliasDescriptor !== undefined) {
                            moduleDescriptor = aliasDescriptor;
                        }
                        if (moduleDescriptor.namespace !== undefined) {
                            if (typeof moduleDescriptor.namespace === "string") {
                                const {compartment: aliasCompartment = parentCompartment, namespace: aliasSpecifier} = moduleDescriptor;
                                if (isPrimitive(aliasCompartment) || !weakmapHas(compartmentPrivateFields, aliasCompartment)) {
                                    throw makeError(X`Invalid compartment in module descriptor for specifier ${q(moduleSpecifier)} in compartment ${q(compartment.name)}`);
                                }
                                const aliasRecord = yield memoizedLoadWithErrorAnnotation(compartmentPrivateFields, moduleAliases, aliasCompartment, aliasSpecifier, enqueueJob, selectImplementation, moduleLoads);
                                mapSet(moduleRecords, moduleSpecifier, aliasRecord);
                                return aliasRecord;
                            }
                            if (!isPrimitive(moduleDescriptor.namespace)) {
                                const {namespace: namespace} = moduleDescriptor;
                                aliasDescriptor = weakmapGet(moduleAliases, namespace);
                                if (aliasDescriptor !== undefined) {
                                    moduleDescriptor = aliasDescriptor;
                                } else {
                                    const exports = getOwnPropertyNames(namespace);
                                    const moduleSource = {
                                        imports: [],
                                        exports: exports,
                                        execute(env) {
                                            for (const name of exports) {
                                                env[name] = namespace[name];
                                            }
                                        }
                                    };
                                    const importMeta = undefined;
                                    const moduleRecord = loadModuleSource(compartmentPrivateFields, moduleAliases, compartment, moduleSpecifier, moduleSource, enqueueJob, selectImplementation, moduleLoads, importMeta);
                                    mapSet(moduleRecords, moduleSpecifier, moduleRecord);
                                    return moduleRecord;
                                }
                            } else {
                                throw makeError(X`Invalid compartment in module descriptor for specifier ${q(moduleSpecifier)} in compartment ${q(compartment.name)}`);
                            }
                        }
                        if (moduleDescriptor.source !== undefined) {
                            if (typeof moduleDescriptor.source === "string") {
                                const {source: loaderSpecifier, specifier: instanceSpecifier = moduleSpecifier, compartment: loaderCompartment = parentCompartment, importMeta: importMeta = undefined} = moduleDescriptor;
                                const loaderRecord = yield memoizedLoadWithErrorAnnotation(compartmentPrivateFields, moduleAliases, loaderCompartment, loaderSpecifier, enqueueJob, selectImplementation, moduleLoads);
                                const {moduleSource: moduleSource} = loaderRecord;
                                const moduleRecord = loadModuleSource(compartmentPrivateFields, moduleAliases, compartment, instanceSpecifier, moduleSource, enqueueJob, selectImplementation, moduleLoads, importMeta);
                                mapSet(moduleRecords, moduleSpecifier, moduleRecord);
                                return moduleRecord;
                            } else {
                                const {source: moduleSource, specifier: aliasSpecifier = moduleSpecifier, importMeta: importMeta} = moduleDescriptor;
                                const aliasRecord = loadModuleSource(compartmentPrivateFields, moduleAliases, compartment, aliasSpecifier, moduleSource, enqueueJob, selectImplementation, moduleLoads, importMeta);
                                mapSet(moduleRecords, moduleSpecifier, aliasRecord);
                                return aliasRecord;
                            }
                        }
                        if (moduleDescriptor.archive !== undefined) {
                            throw makeError(X`Unsupported archive module descriptor for specifier ${q(moduleSpecifier)} in compartment ${q(compartment.name)}`);
                        }
                        if (moduleDescriptor.record !== undefined) {
                            const {compartment: aliasCompartment = compartment, specifier: aliasSpecifier = moduleSpecifier, record: moduleSource, importMeta: importMeta} = moduleDescriptor;
                            const aliasRecord = loadModuleSource(compartmentPrivateFields, moduleAliases, aliasCompartment, aliasSpecifier, moduleSource, enqueueJob, selectImplementation, moduleLoads, importMeta);
                            mapSet(moduleRecords, moduleSpecifier, aliasRecord);
                            mapSet(moduleRecords, aliasSpecifier, aliasRecord);
                            return aliasRecord;
                        }
                        if (moduleDescriptor.compartment !== undefined && moduleDescriptor.specifier !== undefined) {
                            if (isPrimitive(moduleDescriptor.compartment) || !weakmapHas(compartmentPrivateFields, moduleDescriptor.compartment) || typeof moduleDescriptor.specifier !== "string") {
                                throw makeError(X`Invalid compartment in module descriptor for specifier ${q(moduleSpecifier)} in compartment ${q(compartment.name)}`);
                            }
                            const aliasRecord = yield memoizedLoadWithErrorAnnotation(compartmentPrivateFields, moduleAliases, moduleDescriptor.compartment, moduleDescriptor.specifier, enqueueJob, selectImplementation, moduleLoads);
                            mapSet(moduleRecords, moduleSpecifier, aliasRecord);
                            return aliasRecord;
                        }
                        const moduleSource = moduleDescriptor;
                        const moduleRecord = loadModuleSource(compartmentPrivateFields, moduleAliases, compartment, moduleSpecifier, moduleSource, enqueueJob, selectImplementation, moduleLoads);
                        mapSet(moduleRecords, moduleSpecifier, moduleRecord);
                        return moduleRecord;
                    } else {
                        throw makeError(X`module descriptor must be a string or object for specifier ${q(moduleSpecifier)} in compartment ${q(compartment.name)}`);
                    }
                }
                const memoizedLoadWithErrorAnnotation = (compartmentPrivateFields, moduleAliases, compartment, moduleSpecifier, enqueueJob, selectImplementation, moduleLoads) => {
                    const {name: compartmentName} = weakmapGet(compartmentPrivateFields, compartment);
                    let compartmentLoading = mapGet(moduleLoads, compartment);
                    if (compartmentLoading === undefined) {
                        compartmentLoading = new Map;
                        mapSet(moduleLoads, compartment, compartmentLoading);
                    }
                    let moduleLoading = mapGet(compartmentLoading, moduleSpecifier);
                    if (moduleLoading !== undefined) {
                        return moduleLoading;
                    }
                    moduleLoading = selectImplementation(asyncTrampoline, syncTrampoline)(loadWithoutErrorAnnotation, [ compartmentPrivateFields, moduleAliases, compartment, moduleSpecifier, enqueueJob, selectImplementation, moduleLoads ], error => {
                        annotateError(error, X`${error.message}, loading ${q(moduleSpecifier)} in compartment ${q(compartmentName)}`);
                        throw error;
                    });
                    mapSet(compartmentLoading, moduleSpecifier, moduleLoading);
                    return moduleLoading;
                };
                const asyncJobQueue = ({errors: errors = [], noAggregateErrors: noAggregateErrors = false} = {}) => {
                    const pendingJobs = new Set;
                    const enqueueJob = (func, args) => {
                        setAdd(pendingJobs, promiseThen(func(...args), noop, error => {
                            if (noAggregateErrors) {
                                throw error;
                            } else {
                                arrayPush(errors, error);
                            }
                        }));
                    };
                    const drainQueue = async () => {
                        await null;
                        for (const job of pendingJobs) {
                            await job;
                        }
                    };
                    return {
                        enqueueJob: enqueueJob,
                        drainQueue: drainQueue,
                        errors: errors
                    };
                };
                const syncJobQueue = ({errors: errors = [], noAggregateErrors: noAggregateErrors = false} = {}) => {
                    let current = [];
                    let next = [];
                    const enqueueJob = (func, args) => {
                        arrayPush(next, [ func, args ]);
                    };
                    const drainQueue = () => {
                        for (const [func, args] of current) {
                            try {
                                func(...args);
                            } catch (error) {
                                if (noAggregateErrors) {
                                    throw error;
                                } else {
                                    arrayPush(errors, error);
                                }
                            }
                        }
                        current = next;
                        next = [];
                        if (current.length > 0) drainQueue();
                    };
                    return {
                        enqueueJob: enqueueJob,
                        drainQueue: drainQueue,
                        errors: errors
                    };
                };
                const throwAggregateError = ({errors: errors, errorPrefix: errorPrefix}) => {
                    if (errors.length > 0) {
                        const verbose = getenv("COMPARTMENT_LOAD_ERRORS", "", [ "verbose" ]) === "verbose";
                        throw TypeError(`${errorPrefix} (${errors.length} underlying failures: ${arrayJoin(arrayMap(errors, error => error.message + (verbose ? error.stack : "")), ", ")}`);
                    }
                };
                const preferSync = (_asyncImpl, syncImpl) => syncImpl;
                const preferAsync = (asyncImpl, _syncImpl) => asyncImpl;
                const load = async (compartmentPrivateFields, moduleAliases, compartment, moduleSpecifier, {noAggregateErrors: noAggregateErrors = false} = {}) => {
                    const {name: compartmentName} = weakmapGet(compartmentPrivateFields, compartment);
                    const moduleLoads = new Map;
                    const {enqueueJob: enqueueJob, drainQueue: drainQueue, errors: errors} = asyncJobQueue({
                        noAggregateErrors: noAggregateErrors
                    });
                    enqueueJob(memoizedLoadWithErrorAnnotation, [ compartmentPrivateFields, moduleAliases, compartment, moduleSpecifier, enqueueJob, preferAsync, moduleLoads ]);
                    await drainQueue();
                    throwAggregateError({
                        errors: errors,
                        errorPrefix: `Failed to load module ${q(moduleSpecifier)} in package ${q(compartmentName)}`
                    });
                };
                $h͏_once.load(load);
                const loadNow = (compartmentPrivateFields, moduleAliases, compartment, moduleSpecifier, {noAggregateErrors: noAggregateErrors = false} = {}) => {
                    const {name: compartmentName} = weakmapGet(compartmentPrivateFields, compartment);
                    const moduleLoads = new Map;
                    const {enqueueJob: enqueueJob, drainQueue: drainQueue, errors: errors} = syncJobQueue({
                        noAggregateErrors: noAggregateErrors
                    });
                    enqueueJob(memoizedLoadWithErrorAnnotation, [ compartmentPrivateFields, moduleAliases, compartment, moduleSpecifier, enqueueJob, preferSync, moduleLoads ]);
                    drainQueue();
                    throwAggregateError({
                        errors: errors,
                        errorPrefix: `Failed to load module ${q(moduleSpecifier)} in package ${q(compartmentName)}`
                    });
                };
                $h͏_once.loadNow(loadNow);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let makeAlias, Proxy, TypeError, create, freeze, mapGet, mapHas, mapSet, ownKeys, reflectGet, reflectGetOwnPropertyDescriptor, reflectHas, reflectIsExtensible, reflectPreventExtensions, toStringTagSymbol, weakmapSet, assert;
                $h͏_imports([ [ "./module-load.js", [ [ "makeAlias", [ $h͏_a => makeAlias = $h͏_a ] ] ] ], [ "./commons.js", [ [ "Proxy", [ $h͏_a => Proxy = $h͏_a ] ], [ "TypeError", [ $h͏_a => TypeError = $h͏_a ] ], [ "create", [ $h͏_a => create = $h͏_a ] ], [ "freeze", [ $h͏_a => freeze = $h͏_a ] ], [ "mapGet", [ $h͏_a => mapGet = $h͏_a ] ], [ "mapHas", [ $h͏_a => mapHas = $h͏_a ] ], [ "mapSet", [ $h͏_a => mapSet = $h͏_a ] ], [ "ownKeys", [ $h͏_a => ownKeys = $h͏_a ] ], [ "reflectGet", [ $h͏_a => reflectGet = $h͏_a ] ], [ "reflectGetOwnPropertyDescriptor", [ $h͏_a => reflectGetOwnPropertyDescriptor = $h͏_a ] ], [ "reflectHas", [ $h͏_a => reflectHas = $h͏_a ] ], [ "reflectIsExtensible", [ $h͏_a => reflectIsExtensible = $h͏_a ] ], [ "reflectPreventExtensions", [ $h͏_a => reflectPreventExtensions = $h͏_a ] ], [ "toStringTagSymbol", [ $h͏_a => toStringTagSymbol = $h͏_a ] ], [ "weakmapSet", [ $h͏_a => weakmapSet = $h͏_a ] ] ] ], [ "./error/assert.js", [ [ "assert", [ $h͏_a => assert = $h͏_a ] ] ] ] ]);
                const {quote: q} = assert;
                const deferExports = () => {
                    let active = false;
                    const exportsTarget = create(null, {
                        [toStringTagSymbol]: {
                            value: "Module",
                            writable: false,
                            enumerable: false,
                            configurable: false
                        }
                    });
                    return freeze({
                        activate() {
                            active = true;
                        },
                        exportsTarget: exportsTarget,
                        exportsProxy: new Proxy(exportsTarget, {
                            get(_target, name, receiver) {
                                if (!active) {
                                    throw TypeError(`Cannot get property ${q(name)} of module exports namespace, the module has not yet begun to execute`);
                                }
                                return reflectGet(exportsTarget, name, receiver);
                            },
                            set(_target, name, _value) {
                                throw TypeError(`Cannot set property ${q(name)} of module exports namespace`);
                            },
                            has(_target, name) {
                                if (!active) {
                                    throw TypeError(`Cannot check property ${q(name)}, the module has not yet begun to execute`);
                                }
                                return reflectHas(exportsTarget, name);
                            },
                            deleteProperty(_target, name) {
                                throw TypeError(`Cannot delete property ${q(name)}s of module exports namespace`);
                            },
                            ownKeys(_target) {
                                if (!active) {
                                    throw TypeError("Cannot enumerate keys, the module has not yet begun to execute");
                                }
                                return ownKeys(exportsTarget);
                            },
                            getOwnPropertyDescriptor(_target, name) {
                                if (!active) {
                                    throw TypeError(`Cannot get own property descriptor ${q(name)}, the module has not yet begun to execute`);
                                }
                                return reflectGetOwnPropertyDescriptor(exportsTarget, name);
                            },
                            preventExtensions(_target) {
                                if (!active) {
                                    throw TypeError("Cannot prevent extensions of module exports namespace, the module has not yet begun to execute");
                                }
                                return reflectPreventExtensions(exportsTarget);
                            },
                            isExtensible() {
                                if (!active) {
                                    throw TypeError("Cannot check extensibility of module exports namespace, the module has not yet begun to execute");
                                }
                                return reflectIsExtensible(exportsTarget);
                            },
                            getPrototypeOf(_target) {
                                return null;
                            },
                            setPrototypeOf(_target, _proto) {
                                throw TypeError("Cannot set prototype of module exports namespace");
                            },
                            defineProperty(_target, name, _descriptor) {
                                throw TypeError(`Cannot define property ${q(name)} of module exports namespace`);
                            },
                            apply(_target, _thisArg, _args) {
                                throw TypeError("Cannot call module exports namespace, it is not a function");
                            },
                            construct(_target, _args) {
                                throw TypeError("Cannot construct module exports namespace, it is not a constructor");
                            }
                        })
                    });
                };
                $h͏_once.deferExports(deferExports);
                const getDeferredExports = (compartment, compartmentPrivateFields, moduleAliases, specifier) => {
                    const {deferredExports: deferredExports} = compartmentPrivateFields;
                    if (!mapHas(deferredExports, specifier)) {
                        const deferred = deferExports();
                        weakmapSet(moduleAliases, deferred.exportsProxy, makeAlias(compartment, specifier));
                        mapSet(deferredExports, specifier, deferred);
                    }
                    return mapGet(deferredExports, specifier);
                };
                $h͏_once.getDeferredExports(getDeferredExports);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let TypeError, arrayPush, create, getOwnPropertyDescriptors, evadeHtmlCommentTest, evadeImportExpressionTest, rejectSomeDirectEvalExpressions, makeSafeEvaluator;
                $h͏_imports([ [ "./commons.js", [ [ "TypeError", [ $h͏_a => TypeError = $h͏_a ] ], [ "arrayPush", [ $h͏_a => arrayPush = $h͏_a ] ], [ "create", [ $h͏_a => create = $h͏_a ] ], [ "getOwnPropertyDescriptors", [ $h͏_a => getOwnPropertyDescriptors = $h͏_a ] ] ] ], [ "./transforms.js", [ [ "evadeHtmlCommentTest", [ $h͏_a => evadeHtmlCommentTest = $h͏_a ] ], [ "evadeImportExpressionTest", [ $h͏_a => evadeImportExpressionTest = $h͏_a ] ], [ "rejectSomeDirectEvalExpressions", [ $h͏_a => rejectSomeDirectEvalExpressions = $h͏_a ] ] ] ], [ "./make-safe-evaluator.js", [ [ "makeSafeEvaluator", [ $h͏_a => makeSafeEvaluator = $h͏_a ] ] ] ] ]);
                const provideCompartmentEvaluator = (compartmentFields, options) => {
                    const {sloppyGlobalsMode: sloppyGlobalsMode = false, __moduleShimLexicals__: __moduleShimLexicals__ = undefined} = options;
                    let safeEvaluate;
                    if (__moduleShimLexicals__ === undefined && !sloppyGlobalsMode) {
                        ({safeEvaluate: safeEvaluate} = compartmentFields);
                    } else {
                        let {globalTransforms: globalTransforms} = compartmentFields;
                        const {globalObject: globalObject} = compartmentFields;
                        let moduleLexicals;
                        if (__moduleShimLexicals__ !== undefined) {
                            globalTransforms = undefined;
                            moduleLexicals = create(null, getOwnPropertyDescriptors(__moduleShimLexicals__));
                        }
                        ({safeEvaluate: safeEvaluate} = makeSafeEvaluator({
                            globalObject: globalObject,
                            moduleLexicals: moduleLexicals,
                            globalTransforms: globalTransforms,
                            sloppyGlobalsMode: sloppyGlobalsMode
                        }));
                    }
                    return {
                        safeEvaluate: safeEvaluate
                    };
                };
                $h͏_once.provideCompartmentEvaluator(provideCompartmentEvaluator);
                const compartmentEvaluate = (compartmentFields, source, options) => {
                    if (typeof source !== "string") {
                        throw TypeError("first argument of evaluate() must be a string");
                    }
                    const {transforms: transforms = [], __evadeHtmlCommentTest__: __evadeHtmlCommentTest__ = false, __evadeImportExpressionTest__: __evadeImportExpressionTest__ = false, __rejectSomeDirectEvalExpressions__: __rejectSomeDirectEvalExpressions__ = true} = options;
                    const localTransforms = [ ...transforms ];
                    if (__evadeHtmlCommentTest__ === true) {
                        arrayPush(localTransforms, evadeHtmlCommentTest);
                    }
                    if (__evadeImportExpressionTest__ === true) {
                        arrayPush(localTransforms, evadeImportExpressionTest);
                    }
                    if (__rejectSomeDirectEvalExpressions__ === true) {
                        arrayPush(localTransforms, rejectSomeDirectEvalExpressions);
                    }
                    const {safeEvaluate: safeEvaluate} = provideCompartmentEvaluator(compartmentFields, options);
                    return safeEvaluate(source, {
                        localTransforms: localTransforms
                    });
                };
                $h͏_once.compartmentEvaluate(compartmentEvaluate);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let assert, getDeferredExports, ReferenceError, SyntaxError, TypeError, arrayForEach, arrayIncludes, arrayPush, arraySome, arraySort, create, defineProperty, entries, freeze, isArray, keys, mapGet, weakmapGet, reflectHas, assign, compartmentEvaluate;
                $h͏_imports([ [ "./error/assert.js", [ [ "assert", [ $h͏_a => assert = $h͏_a ] ] ] ], [ "./module-proxy.js", [ [ "getDeferredExports", [ $h͏_a => getDeferredExports = $h͏_a ] ] ] ], [ "./commons.js", [ [ "ReferenceError", [ $h͏_a => ReferenceError = $h͏_a ] ], [ "SyntaxError", [ $h͏_a => SyntaxError = $h͏_a ] ], [ "TypeError", [ $h͏_a => TypeError = $h͏_a ] ], [ "arrayForEach", [ $h͏_a => arrayForEach = $h͏_a ] ], [ "arrayIncludes", [ $h͏_a => arrayIncludes = $h͏_a ] ], [ "arrayPush", [ $h͏_a => arrayPush = $h͏_a ] ], [ "arraySome", [ $h͏_a => arraySome = $h͏_a ] ], [ "arraySort", [ $h͏_a => arraySort = $h͏_a ] ], [ "create", [ $h͏_a => create = $h͏_a ] ], [ "defineProperty", [ $h͏_a => defineProperty = $h͏_a ] ], [ "entries", [ $h͏_a => entries = $h͏_a ] ], [ "freeze", [ $h͏_a => freeze = $h͏_a ] ], [ "isArray", [ $h͏_a => isArray = $h͏_a ] ], [ "keys", [ $h͏_a => keys = $h͏_a ] ], [ "mapGet", [ $h͏_a => mapGet = $h͏_a ] ], [ "weakmapGet", [ $h͏_a => weakmapGet = $h͏_a ] ], [ "reflectHas", [ $h͏_a => reflectHas = $h͏_a ] ], [ "assign", [ $h͏_a => assign = $h͏_a ] ] ] ], [ "./compartment-evaluate.js", [ [ "compartmentEvaluate", [ $h͏_a => compartmentEvaluate = $h͏_a ] ] ] ] ]);
                const {quote: q} = assert;
                const makeVirtualModuleInstance = (compartmentPrivateFields, moduleSource, compartment, moduleAliases, moduleSpecifier, resolvedImports) => {
                    const {exportsProxy: exportsProxy, exportsTarget: exportsTarget, activate: activate} = getDeferredExports(compartment, weakmapGet(compartmentPrivateFields, compartment), moduleAliases, moduleSpecifier);
                    const notifiers = create(null);
                    if (moduleSource.exports) {
                        if (!isArray(moduleSource.exports) || arraySome(moduleSource.exports, name => typeof name !== "string")) {
                            throw TypeError(`SES virtual module source "exports" property must be an array of strings for module ${moduleSpecifier}`);
                        }
                        arrayForEach(moduleSource.exports, name => {
                            let value = exportsTarget[name];
                            const updaters = [];
                            const get = () => value;
                            const set = newValue => {
                                value = newValue;
                                for (const updater of updaters) {
                                    updater(newValue);
                                }
                            };
                            defineProperty(exportsTarget, name, {
                                get: get,
                                set: set,
                                enumerable: true,
                                configurable: false
                            });
                            notifiers[name] = update => {
                                arrayPush(updaters, update);
                                update(value);
                            };
                        });
                        notifiers["*"] = update => {
                            update(exportsTarget);
                        };
                    }
                    const localState = {
                        activated: false
                    };
                    return freeze({
                        notifiers: notifiers,
                        exportsProxy: exportsProxy,
                        execute() {
                            if (reflectHas(localState, "errorFromExecute")) {
                                throw localState.errorFromExecute;
                            }
                            if (!localState.activated) {
                                activate();
                                localState.activated = true;
                                try {
                                    moduleSource.execute(exportsTarget, compartment, resolvedImports);
                                } catch (err) {
                                    localState.errorFromExecute = err;
                                    throw err;
                                }
                            }
                        }
                    });
                };
                $h͏_once.makeVirtualModuleInstance(makeVirtualModuleInstance);
                const makeModuleInstance = (privateFields, moduleAliases, moduleRecord, importedInstances) => {
                    const {compartment: compartment, moduleSpecifier: moduleSpecifier, moduleSource: moduleSource, importMeta: moduleRecordMeta} = moduleRecord;
                    const {reexports: exportAlls = [], __syncModuleProgram__: functorSource, __fixedExportMap__: fixedExportMap = {}, __liveExportMap__: liveExportMap = {}, __reexportMap__: reexportMap = {}, __needsImport__: needsImport = false, __needsImportMeta__: needsImportMeta = false, __syncModuleFunctor__: __syncModuleFunctor__} = moduleSource;
                    const compartmentFields = weakmapGet(privateFields, compartment);
                    const {__shimTransforms__: __shimTransforms__, resolveHook: resolveHook, importMetaHook: importMetaHook, compartmentImport: compartmentImport} = compartmentFields;
                    const {exportsProxy: exportsProxy, exportsTarget: exportsTarget, activate: activate} = getDeferredExports(compartment, compartmentFields, moduleAliases, moduleSpecifier);
                    const exportsProps = create(null);
                    const moduleLexicals = create(null);
                    const onceVar = create(null);
                    const liveVar = create(null);
                    const importMeta = create(null);
                    if (moduleRecordMeta) {
                        assign(importMeta, moduleRecordMeta);
                    }
                    if (needsImportMeta && importMetaHook) {
                        importMetaHook(moduleSpecifier, importMeta);
                    }
                    let dynamicImport;
                    if (needsImport) {
                        dynamicImport = async importSpecifier => compartmentImport(resolveHook(importSpecifier, moduleSpecifier));
                    }
                    const localGetNotify = create(null);
                    const notifiers = create(null);
                    arrayForEach(entries(fixedExportMap), ([fixedExportName, [localName]]) => {
                        let fixedGetNotify = localGetNotify[localName];
                        if (!fixedGetNotify) {
                            let value;
                            let tdz = true;
                            let optUpdaters = [];
                            const get = () => {
                                if (tdz) {
                                    throw ReferenceError(`binding ${q(localName)} not yet initialized`);
                                }
                                return value;
                            };
                            const init = freeze(initValue => {
                                if (!tdz) {
                                    throw TypeError(`Internal: binding ${q(localName)} already initialized`);
                                }
                                value = initValue;
                                const updaters = optUpdaters;
                                optUpdaters = null;
                                tdz = false;
                                for (const updater of updaters || []) {
                                    updater(initValue);
                                }
                                return initValue;
                            });
                            const notify = updater => {
                                if (updater === init) {
                                    return;
                                }
                                if (tdz) {
                                    arrayPush(optUpdaters || [], updater);
                                } else {
                                    updater(value);
                                }
                            };
                            fixedGetNotify = {
                                get: get,
                                notify: notify
                            };
                            localGetNotify[localName] = fixedGetNotify;
                            onceVar[localName] = init;
                        }
                        exportsProps[fixedExportName] = {
                            get: fixedGetNotify.get,
                            set: undefined,
                            enumerable: true,
                            configurable: false
                        };
                        notifiers[fixedExportName] = fixedGetNotify.notify;
                    });
                    arrayForEach(entries(liveExportMap), ([liveExportName, [localName, setProxyTrap]]) => {
                        let liveGetNotify = localGetNotify[localName];
                        if (!liveGetNotify) {
                            let value;
                            let tdz = true;
                            const updaters = [];
                            const get = () => {
                                if (tdz) {
                                    throw ReferenceError(`binding ${q(liveExportName)} not yet initialized`);
                                }
                                return value;
                            };
                            const update = freeze(newValue => {
                                value = newValue;
                                tdz = false;
                                for (const updater of updaters) {
                                    updater(newValue);
                                }
                            });
                            const set = newValue => {
                                if (tdz) {
                                    throw ReferenceError(`binding ${q(localName)} not yet initialized`);
                                }
                                value = newValue;
                                for (const updater of updaters) {
                                    updater(newValue);
                                }
                            };
                            const notify = updater => {
                                if (updater === update) {
                                    return;
                                }
                                arrayPush(updaters, updater);
                                if (!tdz) {
                                    updater(value);
                                }
                            };
                            liveGetNotify = {
                                get: get,
                                notify: notify
                            };
                            localGetNotify[localName] = liveGetNotify;
                            if (setProxyTrap) {
                                defineProperty(moduleLexicals, localName, {
                                    get: get,
                                    set: set,
                                    enumerable: true,
                                    configurable: false
                                });
                            }
                            liveVar[localName] = update;
                        }
                        exportsProps[liveExportName] = {
                            get: liveGetNotify.get,
                            set: undefined,
                            enumerable: true,
                            configurable: false
                        };
                        notifiers[liveExportName] = liveGetNotify.notify;
                    });
                    const notifyStar = update => {
                        update(exportsTarget);
                    };
                    notifiers["*"] = notifyStar;
                    const wireUpExportNotifier = (exportName, notify) => {
                        if (!notifiers[exportName] && notify !== false) {
                            notifiers[exportName] = notify;
                            let value;
                            const update = newValue => value = newValue;
                            notify(update);
                            exportsProps[exportName] = {
                                get() {
                                    return value;
                                },
                                set: undefined,
                                enumerable: true,
                                configurable: false
                            };
                        }
                    };
                    function imports(updateRecord) {
                        const candidateAll = create(null);
                        candidateAll.default = false;
                        for (const [specifier, importUpdaters] of updateRecord) {
                            const instance = mapGet(importedInstances, specifier);
                            instance.execute();
                            const {notifiers: importNotifiers} = instance;
                            for (const [importName, updaters] of importUpdaters) {
                                const importNotify = importNotifiers[importName];
                                if (!importNotify) {
                                    throw SyntaxError(`The requested module '${specifier}' does not provide an export named '${importName}'`);
                                }
                                for (const updater of updaters) {
                                    importNotify(updater);
                                }
                            }
                            if (arrayIncludes(exportAlls, specifier)) {
                                for (const [importAndExportName, importNotify] of entries(importNotifiers)) {
                                    if (candidateAll[importAndExportName] === undefined) {
                                        candidateAll[importAndExportName] = importNotify;
                                    } else {
                                        candidateAll[importAndExportName] = false;
                                    }
                                }
                            }
                            if (reexportMap[specifier]) {
                                for (const [localName, exportedName] of reexportMap[specifier]) {
                                    wireUpExportNotifier(exportedName, importNotifiers[localName]);
                                }
                            }
                        }
                        for (const [exportName, notify] of entries(candidateAll)) {
                            wireUpExportNotifier(exportName, notify);
                        }
                        arrayForEach(arraySort(keys(exportsProps)), k => defineProperty(exportsTarget, k, exportsProps[k]));
                        freeze(exportsTarget);
                        activate();
                    }
                    let optFunctor;
                    if (__syncModuleFunctor__ !== undefined) {
                        optFunctor = __syncModuleFunctor__;
                    } else {
                        optFunctor = compartmentEvaluate(compartmentFields, functorSource, {
                            globalObject: compartment.globalThis,
                            transforms: __shimTransforms__,
                            __moduleShimLexicals__: moduleLexicals
                        });
                    }
                    let didThrow = false;
                    let thrownError;
                    function execute() {
                        if (optFunctor) {
                            const functor = optFunctor;
                            optFunctor = null;
                            try {
                                functor(freeze({
                                    imports: freeze(imports),
                                    onceVar: freeze(onceVar),
                                    liveVar: freeze(liveVar),
                                    import: dynamicImport,
                                    importMeta: importMeta
                                }));
                            } catch (e) {
                                didThrow = true;
                                thrownError = e;
                            }
                        }
                        if (didThrow) {
                            throw thrownError;
                        }
                    }
                    return freeze({
                        notifiers: notifiers,
                        exportsProxy: exportsProxy,
                        execute: execute
                    });
                };
                $h͏_once.makeModuleInstance(makeModuleInstance);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let assert, makeModuleInstance, makeVirtualModuleInstance, Map, ReferenceError, TypeError, entries, isArray, isPrimitive, mapGet, mapHas, mapSet, weakmapGet;
                $h͏_imports([ [ "./error/assert.js", [ [ "assert", [ $h͏_a => assert = $h͏_a ] ] ] ], [ "./module-instance.js", [ [ "makeModuleInstance", [ $h͏_a => makeModuleInstance = $h͏_a ] ], [ "makeVirtualModuleInstance", [ $h͏_a => makeVirtualModuleInstance = $h͏_a ] ] ] ], [ "./commons.js", [ [ "Map", [ $h͏_a => Map = $h͏_a ] ], [ "ReferenceError", [ $h͏_a => ReferenceError = $h͏_a ] ], [ "TypeError", [ $h͏_a => TypeError = $h͏_a ] ], [ "entries", [ $h͏_a => entries = $h͏_a ] ], [ "isArray", [ $h͏_a => isArray = $h͏_a ] ], [ "isPrimitive", [ $h͏_a => isPrimitive = $h͏_a ] ], [ "mapGet", [ $h͏_a => mapGet = $h͏_a ] ], [ "mapHas", [ $h͏_a => mapHas = $h͏_a ] ], [ "mapSet", [ $h͏_a => mapSet = $h͏_a ] ], [ "weakmapGet", [ $h͏_a => weakmapGet = $h͏_a ] ] ] ] ]);
                const {Fail: Fail, quote: q} = assert;
                const link = (compartmentPrivateFields, moduleAliases, compartment, moduleSpecifier) => {
                    const {name: compartmentName, moduleRecords: moduleRecords} = weakmapGet(compartmentPrivateFields, compartment);
                    const moduleRecord = mapGet(moduleRecords, moduleSpecifier);
                    if (moduleRecord === undefined) {
                        throw ReferenceError(`Missing link to module ${q(moduleSpecifier)} from compartment ${q(compartmentName)}`);
                    }
                    return instantiate(compartmentPrivateFields, moduleAliases, moduleRecord);
                };
                $h͏_once.link(link);
                function mayBePrecompiledModuleSource(moduleSource) {
                    return typeof moduleSource.__syncModuleProgram__ === "string";
                }
                function validatePrecompiledModuleSource(moduleSource, moduleSpecifier) {
                    const {__fixedExportMap__: __fixedExportMap__, __liveExportMap__: __liveExportMap__} = moduleSource;
                    !isPrimitive(__fixedExportMap__) || Fail`Property '__fixedExportMap__' of a precompiled module source must be an object, got ${q(__fixedExportMap__)}, for module ${q(moduleSpecifier)}`;
                    !isPrimitive(__liveExportMap__) || Fail`Property '__liveExportMap__' of a precompiled module source must be an object, got ${q(__liveExportMap__)}, for module ${q(moduleSpecifier)}`;
                }
                function mayBeVirtualModuleSource(moduleSource) {
                    return typeof moduleSource.execute === "function";
                }
                function validateVirtualModuleSource(moduleSource, moduleSpecifier) {
                    const {exports: exports} = moduleSource;
                    isArray(exports) || Fail`Invalid module source: 'exports' of a virtual module source must be an array, got ${q(exports)}, for module ${q(moduleSpecifier)}`;
                }
                function validateModuleSource(moduleSource, moduleSpecifier) {
                    !isPrimitive(moduleSource) || Fail`Invalid module source: must be of type object, got ${q(moduleSource)}, for module ${q(moduleSpecifier)}`;
                    const {imports: imports, exports: exports, reexports: reexports = []} = moduleSource;
                    isArray(imports) || Fail`Invalid module source: 'imports' must be an array, got ${q(imports)}, for module ${q(moduleSpecifier)}`;
                    isArray(exports) || Fail`Invalid module source: 'exports' must be an array, got ${q(exports)}, for module ${q(moduleSpecifier)}`;
                    isArray(reexports) || Fail`Invalid module source: 'reexports' must be an array if present, got ${q(reexports)}, for module ${q(moduleSpecifier)}`;
                }
                const instantiate = (compartmentPrivateFields, moduleAliases, moduleRecord) => {
                    const {compartment: compartment, moduleSpecifier: moduleSpecifier, resolvedImports: resolvedImports, moduleSource: moduleSource} = moduleRecord;
                    const {instances: instances} = weakmapGet(compartmentPrivateFields, compartment);
                    if (mapHas(instances, moduleSpecifier)) {
                        return mapGet(instances, moduleSpecifier);
                    }
                    validateModuleSource(moduleSource, moduleSpecifier);
                    const importedInstances = new Map;
                    let moduleInstance;
                    if (mayBePrecompiledModuleSource(moduleSource)) {
                        validatePrecompiledModuleSource(moduleSource, moduleSpecifier);
                        moduleInstance = makeModuleInstance(compartmentPrivateFields, moduleAliases, moduleRecord, importedInstances);
                    } else if (mayBeVirtualModuleSource(moduleSource)) {
                        validateVirtualModuleSource(moduleSource, moduleSpecifier);
                        moduleInstance = makeVirtualModuleInstance(compartmentPrivateFields, moduleSource, compartment, moduleAliases, moduleSpecifier, resolvedImports);
                    } else {
                        throw TypeError(`Invalid module source, got ${q(moduleSource)}`);
                    }
                    mapSet(instances, moduleSpecifier, moduleInstance);
                    for (const [importSpecifier, resolvedSpecifier] of entries(resolvedImports)) {
                        const importedInstance = link(compartmentPrivateFields, moduleAliases, compartment, resolvedSpecifier);
                        mapSet(importedInstances, importSpecifier, importedInstance);
                    }
                    return moduleInstance;
                };
                $h͏_once.instantiate(instantiate);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let Map, TypeError, WeakMap, arrayFlatMap, assign, defineProperties, identity, promiseThen, toStringTagSymbol, weakmapGet, weakmapSet, setGlobalObjectSymbolUnscopables, setGlobalObjectConstantProperties, setGlobalObjectMutableProperties, setGlobalObjectEvaluators, assert, assertEqual, q, sharedGlobalPropertyNames, load, loadNow, link, getDeferredExports, compartmentEvaluate, makeSafeEvaluator;
                $h͏_imports([ [ "./commons.js", [ [ "Map", [ $h͏_a => Map = $h͏_a ] ], [ "TypeError", [ $h͏_a => TypeError = $h͏_a ] ], [ "WeakMap", [ $h͏_a => WeakMap = $h͏_a ] ], [ "arrayFlatMap", [ $h͏_a => arrayFlatMap = $h͏_a ] ], [ "assign", [ $h͏_a => assign = $h͏_a ] ], [ "defineProperties", [ $h͏_a => defineProperties = $h͏_a ] ], [ "identity", [ $h͏_a => identity = $h͏_a ] ], [ "promiseThen", [ $h͏_a => promiseThen = $h͏_a ] ], [ "toStringTagSymbol", [ $h͏_a => toStringTagSymbol = $h͏_a ] ], [ "weakmapGet", [ $h͏_a => weakmapGet = $h͏_a ] ], [ "weakmapSet", [ $h͏_a => weakmapSet = $h͏_a ] ] ] ], [ "./global-object.js", [ [ "setGlobalObjectSymbolUnscopables", [ $h͏_a => setGlobalObjectSymbolUnscopables = $h͏_a ] ], [ "setGlobalObjectConstantProperties", [ $h͏_a => setGlobalObjectConstantProperties = $h͏_a ] ], [ "setGlobalObjectMutableProperties", [ $h͏_a => setGlobalObjectMutableProperties = $h͏_a ] ], [ "setGlobalObjectEvaluators", [ $h͏_a => setGlobalObjectEvaluators = $h͏_a ] ] ] ], [ "./error/assert.js", [ [ "assert", [ $h͏_a => assert = $h͏_a ] ], [ "assertEqual", [ $h͏_a => assertEqual = $h͏_a ] ], [ "q", [ $h͏_a => q = $h͏_a ] ] ] ], [ "./permits.js", [ [ "sharedGlobalPropertyNames", [ $h͏_a => sharedGlobalPropertyNames = $h͏_a ] ] ] ], [ "./module-load.js", [ [ "load", [ $h͏_a => load = $h͏_a ] ], [ "loadNow", [ $h͏_a => loadNow = $h͏_a ] ] ] ], [ "./module-link.js", [ [ "link", [ $h͏_a => link = $h͏_a ] ] ] ], [ "./module-proxy.js", [ [ "getDeferredExports", [ $h͏_a => getDeferredExports = $h͏_a ] ] ] ], [ "./compartment-evaluate.js", [ [ "compartmentEvaluate", [ $h͏_a => compartmentEvaluate = $h͏_a ] ] ] ], [ "./make-safe-evaluator.js", [ [ "makeSafeEvaluator", [ $h͏_a => makeSafeEvaluator = $h͏_a ] ] ] ] ]);
                const moduleAliases = new WeakMap;
                const privateFields = new WeakMap;
                const InertCompartment = function Compartment(_endowments = {}, _modules = {}, _options = {}) {
                    throw TypeError("Compartment.prototype.constructor is not a valid constructor.");
                };
                $h͏_once.InertCompartment(InertCompartment);
                const compartmentImportNow = (compartment, specifier) => {
                    const {execute: execute, exportsProxy: exportsProxy} = link(privateFields, moduleAliases, compartment, specifier);
                    execute();
                    return exportsProxy;
                };
                const CompartmentPrototype = {
                    constructor: InertCompartment,
                    get globalThis() {
                        return weakmapGet(privateFields, this).globalObject;
                    },
                    get name() {
                        return weakmapGet(privateFields, this).name;
                    },
                    get __noNamespaceBox__() {
                        return weakmapGet(privateFields, this).noNamespaceBox;
                    },
                    evaluate(source, options = {}) {
                        const compartmentFields = weakmapGet(privateFields, this);
                        return compartmentEvaluate(compartmentFields, source, options);
                    },
                    module(specifier) {
                        if (typeof specifier !== "string") {
                            throw TypeError("first argument of module() must be a string");
                        }
                        const {exportsProxy: exportsProxy} = getDeferredExports(this, weakmapGet(privateFields, this), moduleAliases, specifier);
                        return exportsProxy;
                    },
                    async import(specifier) {
                        const {noNamespaceBox: noNamespaceBox, noAggregateLoadErrors: noAggregateLoadErrors} = weakmapGet(privateFields, this);
                        if (typeof specifier !== "string") {
                            throw TypeError("first argument of import() must be a string");
                        }
                        return promiseThen(load(privateFields, moduleAliases, this, specifier, {
                            noAggregateErrors: noAggregateLoadErrors
                        }), () => {
                            const namespace = compartmentImportNow(this, specifier);
                            if (noNamespaceBox) {
                                return namespace;
                            }
                            return {
                                namespace: namespace
                            };
                        });
                    },
                    async load(specifier) {
                        if (typeof specifier !== "string") {
                            throw TypeError("first argument of load() must be a string");
                        }
                        const {noAggregateLoadErrors: noAggregateLoadErrors} = weakmapGet(privateFields, this);
                        return load(privateFields, moduleAliases, this, specifier, {
                            noAggregateErrors: noAggregateLoadErrors
                        });
                    },
                    importNow(specifier) {
                        if (typeof specifier !== "string") {
                            throw TypeError("first argument of importNow() must be a string");
                        }
                        const {noAggregateLoadErrors: noAggregateLoadErrors} = weakmapGet(privateFields, this);
                        loadNow(privateFields, moduleAliases, this, specifier, {
                            noAggregateErrors: noAggregateLoadErrors
                        });
                        return compartmentImportNow(this, specifier);
                    }
                };
                $h͏_once.CompartmentPrototype(CompartmentPrototype);
                defineProperties(CompartmentPrototype, {
                    [toStringTagSymbol]: {
                        value: "Compartment",
                        writable: false,
                        enumerable: false,
                        configurable: true
                    }
                });
                defineProperties(InertCompartment, {
                    prototype: {
                        value: CompartmentPrototype
                    }
                });
                const compartmentOptions = (...args) => {
                    if (args.length === 0) {
                        return {};
                    }
                    if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && "__options__" in args[0]) {
                        const {__options__: __options__, ...options} = args[0];
                        assert(__options__ === true, `Compartment constructor only supports true __options__ sigil, got ${__options__}`);
                        return options;
                    } else {
                        const [globals = {}, modules = {}, options = {}] = args;
                        assertEqual(options.modules, undefined, `Compartment constructor must receive either a module map argument or modules option, not both`);
                        assertEqual(options.globals, undefined, `Compartment constructor must receive either globals argument or option, not both`);
                        return {
                            ...options,
                            globals: globals,
                            modules: modules
                        };
                    }
                };
                $h͏_once.compartmentOptions(compartmentOptions);
                const makeCompartmentConstructor = (targetMakeCompartmentConstructor, intrinsics, markVirtualizedNativeFunction, {parentCompartment: parentCompartment = undefined, enforceNew: enforceNew = false} = {}) => {
                    function Compartment(...args) {
                        if (enforceNew && new.target === undefined) {
                            throw TypeError("Class constructor Compartment cannot be invoked without 'new'");
                        }
                        const {name: name = "<unknown>", transforms: transforms = [], __shimTransforms__: __shimTransforms__ = [], globals: endowmentsOption = {}, modules: moduleMapOption = {}, resolveHook: resolveHook, importHook: importHook, importNowHook: importNowHook, moduleMapHook: moduleMapHook, importMetaHook: importMetaHook, __noNamespaceBox__: noNamespaceBox = false, noAggregateLoadErrors: noAggregateLoadErrors = false} = compartmentOptions(...args);
                        const globalTransforms = arrayFlatMap([ transforms, __shimTransforms__ ], identity);
                        const endowments = {
                            __proto__: null,
                            ...endowmentsOption
                        };
                        const moduleMap = {
                            __proto__: null,
                            ...moduleMapOption
                        };
                        const moduleRecords = new Map;
                        const instances = new Map;
                        const deferredExports = new Map;
                        const globalObject = {};
                        const compartment = this;
                        setGlobalObjectSymbolUnscopables(globalObject);
                        setGlobalObjectConstantProperties(globalObject);
                        const {safeEvaluate: safeEvaluate} = makeSafeEvaluator({
                            globalObject: globalObject,
                            globalTransforms: globalTransforms,
                            sloppyGlobalsMode: false
                        });
                        setGlobalObjectMutableProperties(globalObject, {
                            intrinsics: intrinsics,
                            newGlobalPropertyNames: sharedGlobalPropertyNames,
                            makeCompartmentConstructor: targetMakeCompartmentConstructor,
                            parentCompartment: compartment,
                            markVirtualizedNativeFunction: markVirtualizedNativeFunction
                        });
                        setGlobalObjectEvaluators(globalObject, safeEvaluate, markVirtualizedNativeFunction);
                        assign(globalObject, endowments);
                        const compartmentImport = async fullSpecifier => {
                            if (typeof resolveHook !== "function") {
                                throw TypeError(`Compartment does not support dynamic import: no configured resolveHook for compartment ${q(name)}`);
                            }
                            await load(privateFields, moduleAliases, compartment, fullSpecifier, {
                                noAggregateErrors: noAggregateLoadErrors
                            });
                            const {execute: execute, exportsProxy: exportsProxy} = link(privateFields, moduleAliases, compartment, fullSpecifier);
                            execute();
                            return exportsProxy;
                        };
                        weakmapSet(privateFields, compartment, {
                            name: `${name}`,
                            globalTransforms: globalTransforms,
                            globalObject: globalObject,
                            safeEvaluate: safeEvaluate,
                            resolveHook: resolveHook,
                            importHook: importHook,
                            importNowHook: importNowHook,
                            moduleMap: moduleMap,
                            moduleMapHook: moduleMapHook,
                            importMetaHook: importMetaHook,
                            moduleRecords: moduleRecords,
                            __shimTransforms__: __shimTransforms__,
                            deferredExports: deferredExports,
                            instances: instances,
                            parentCompartment: parentCompartment,
                            noNamespaceBox: noNamespaceBox,
                            compartmentImport: compartmentImport,
                            noAggregateLoadErrors: noAggregateLoadErrors
                        });
                    }
                    Compartment.prototype = CompartmentPrototype;
                    return Compartment;
                };
                $h͏_once.makeCompartmentConstructor(makeCompartmentConstructor);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let FERAL_FUNCTION, FERAL_FLOAT64_ARRAY, Map, Set, String, getOwnPropertyDescriptor, getPrototypeOf, iterateArray, iterateMap, iterateSet, iterateString, matchAllRegExp, matchAllSymbol, regexpPrototype, globalThis, assign, AsyncGeneratorFunctionInstance, InertCompartment;
                $h͏_imports([ [ "./commons.js", [ [ "FERAL_FUNCTION", [ $h͏_a => FERAL_FUNCTION = $h͏_a ] ], [ "FERAL_FLOAT64_ARRAY", [ $h͏_a => FERAL_FLOAT64_ARRAY = $h͏_a ] ], [ "Map", [ $h͏_a => Map = $h͏_a ] ], [ "Set", [ $h͏_a => Set = $h͏_a ] ], [ "String", [ $h͏_a => String = $h͏_a ] ], [ "getOwnPropertyDescriptor", [ $h͏_a => getOwnPropertyDescriptor = $h͏_a ] ], [ "getPrototypeOf", [ $h͏_a => getPrototypeOf = $h͏_a ] ], [ "iterateArray", [ $h͏_a => iterateArray = $h͏_a ] ], [ "iterateMap", [ $h͏_a => iterateMap = $h͏_a ] ], [ "iterateSet", [ $h͏_a => iterateSet = $h͏_a ] ], [ "iterateString", [ $h͏_a => iterateString = $h͏_a ] ], [ "matchAllRegExp", [ $h͏_a => matchAllRegExp = $h͏_a ] ], [ "matchAllSymbol", [ $h͏_a => matchAllSymbol = $h͏_a ] ], [ "regexpPrototype", [ $h͏_a => regexpPrototype = $h͏_a ] ], [ "globalThis", [ $h͏_a => globalThis = $h͏_a ] ], [ "assign", [ $h͏_a => assign = $h͏_a ] ], [ "AsyncGeneratorFunctionInstance", [ $h͏_a => AsyncGeneratorFunctionInstance = $h͏_a ] ] ] ], [ "./compartment.js", [ [ "InertCompartment", [ $h͏_a => InertCompartment = $h͏_a ] ] ] ] ]);
                function getConstructorOf(obj) {
                    return getPrototypeOf(obj).constructor;
                }
                function makeArguments() {
                    return arguments;
                }
                const getAnonymousIntrinsics = () => {
                    const InertFunction = FERAL_FUNCTION.prototype.constructor;
                    const argsCalleeDesc = getOwnPropertyDescriptor(makeArguments(), "callee");
                    const ThrowTypeError = argsCalleeDesc && argsCalleeDesc.get;
                    const StringIteratorObject = iterateString(new String);
                    const StringIteratorPrototype = getPrototypeOf(StringIteratorObject);
                    const RegExpStringIterator = regexpPrototype[matchAllSymbol] && matchAllRegExp(/./, "");
                    const RegExpStringIteratorPrototype = RegExpStringIterator && getPrototypeOf(RegExpStringIterator);
                    const ArrayIteratorObject = iterateArray([]);
                    const ArrayIteratorPrototype = getPrototypeOf(ArrayIteratorObject);
                    const TypedArray = getPrototypeOf(FERAL_FLOAT64_ARRAY);
                    const MapIteratorObject = iterateMap(new Map);
                    const MapIteratorPrototype = getPrototypeOf(MapIteratorObject);
                    const SetIteratorObject = iterateSet(new Set);
                    const SetIteratorPrototype = getPrototypeOf(SetIteratorObject);
                    const IteratorPrototype = getPrototypeOf(ArrayIteratorPrototype);
                    function* GeneratorFunctionInstance() {}
                    const GeneratorFunction = getConstructorOf(GeneratorFunctionInstance);
                    const Generator = GeneratorFunction.prototype;
                    async function AsyncFunctionInstance() {}
                    const AsyncFunction = getConstructorOf(AsyncFunctionInstance);
                    const intrinsics = {
                        "%InertFunction%": InertFunction,
                        "%ArrayIteratorPrototype%": ArrayIteratorPrototype,
                        "%InertAsyncFunction%": AsyncFunction,
                        "%Generator%": Generator,
                        "%InertGeneratorFunction%": GeneratorFunction,
                        "%IteratorPrototype%": IteratorPrototype,
                        "%MapIteratorPrototype%": MapIteratorPrototype,
                        "%RegExpStringIteratorPrototype%": RegExpStringIteratorPrototype,
                        "%SetIteratorPrototype%": SetIteratorPrototype,
                        "%StringIteratorPrototype%": StringIteratorPrototype,
                        "%ThrowTypeError%": ThrowTypeError,
                        "%TypedArray%": TypedArray,
                        "%InertCompartment%": InertCompartment
                    };
                    if (AsyncGeneratorFunctionInstance !== undefined) {
                        const AsyncGeneratorFunction = getConstructorOf(AsyncGeneratorFunctionInstance);
                        const AsyncGenerator = AsyncGeneratorFunction.prototype;
                        const AsyncGeneratorPrototype = AsyncGenerator.prototype;
                        const AsyncIteratorPrototype = getPrototypeOf(AsyncGeneratorPrototype);
                        assign(intrinsics, {
                            "%AsyncGenerator%": AsyncGenerator,
                            "%InertAsyncGeneratorFunction%": AsyncGeneratorFunction,
                            "%AsyncGeneratorPrototype%": AsyncGeneratorPrototype,
                            "%AsyncIteratorPrototype%": AsyncIteratorPrototype
                        });
                    }
                    if (globalThis.Iterator) {
                        intrinsics["%IteratorHelperPrototype%"] = getPrototypeOf(globalThis.Iterator.from([]).take(0));
                        intrinsics["%WrapForValidIteratorPrototype%"] = getPrototypeOf(globalThis.Iterator.from({
                            next() {
                                return {
                                    value: undefined
                                };
                            }
                        }));
                    }
                    if (globalThis.AsyncIterator) {
                        intrinsics["%AsyncIteratorHelperPrototype%"] = getPrototypeOf(globalThis.AsyncIterator.from([]).take(0));
                        intrinsics["%WrapForValidAsyncIteratorPrototype%"] = getPrototypeOf(globalThis.AsyncIterator.from({
                            next() {}
                        }));
                    }
                    return intrinsics;
                };
                $h͏_once.getAnonymousIntrinsics(getAnonymousIntrinsics);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let freeze;
                $h͏_imports([ [ "./commons.js", [ [ "freeze", [ $h͏_a => freeze = $h͏_a ] ] ] ] ]);
                const tameHarden = (safeHarden, hardenTaming) => {
                    if (hardenTaming === "safe") {
                        return safeHarden;
                    }
                    Object.isExtensible = () => false;
                    Object.isFrozen = () => true;
                    Object.isSealed = () => true;
                    Reflect.isExtensible = () => false;
                    if (safeHarden.isFake) {
                        return safeHarden;
                    }
                    const fakeHarden = arg => arg;
                    fakeHarden.isFake = true;
                    return freeze(fakeHarden);
                };
                $h͏_once.tameHarden(tameHarden);
                freeze(tameHarden);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let Symbol, entries, fromEntries, getOwnPropertyDescriptors, defineProperties, arrayMap, functionBind;
                $h͏_imports([ [ "./commons.js", [ [ "Symbol", [ $h͏_a => Symbol = $h͏_a ] ], [ "entries", [ $h͏_a => entries = $h͏_a ] ], [ "fromEntries", [ $h͏_a => fromEntries = $h͏_a ] ], [ "getOwnPropertyDescriptors", [ $h͏_a => getOwnPropertyDescriptors = $h͏_a ] ], [ "defineProperties", [ $h͏_a => defineProperties = $h͏_a ] ], [ "arrayMap", [ $h͏_a => arrayMap = $h͏_a ] ], [ "functionBind", [ $h͏_a => functionBind = $h͏_a ] ] ] ] ]);
                const tameSymbolConstructor = () => {
                    const OriginalSymbol = Symbol;
                    const SymbolPrototype = OriginalSymbol.prototype;
                    const SharedSymbol = functionBind(Symbol, undefined);
                    defineProperties(SymbolPrototype, {
                        constructor: {
                            value: SharedSymbol
                        }
                    });
                    const originalDescsEntries = entries(getOwnPropertyDescriptors(OriginalSymbol));
                    const descs = fromEntries(arrayMap(originalDescsEntries, ([name, desc]) => [ name, {
                        ...desc,
                        configurable: true
                    } ]));
                    defineProperties(SharedSymbol, descs);
                    return {
                        "%SharedSymbol%": SharedSymbol
                    };
                };
                $h͏_once.tameSymbolConstructor(tameSymbolConstructor);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let getOwnPropertyDescriptor, apply, defineProperty, toStringTagSymbol;
                $h͏_imports([ [ "./commons.js", [ [ "getOwnPropertyDescriptor", [ $h͏_a => getOwnPropertyDescriptor = $h͏_a ] ], [ "apply", [ $h͏_a => apply = $h͏_a ] ], [ "defineProperty", [ $h͏_a => defineProperty = $h͏_a ] ], [ "toStringTagSymbol", [ $h͏_a => toStringTagSymbol = $h͏_a ] ] ] ] ]);
                const throws = thunk => {
                    try {
                        thunk();
                        return false;
                    } catch (_err) {
                        return true;
                    }
                };
                const tameFauxDataProperty = (obj, prop, expectedValue) => {
                    if (obj === undefined) {
                        return false;
                    }
                    const desc = getOwnPropertyDescriptor(obj, prop);
                    if (!desc || "value" in desc) {
                        return false;
                    }
                    const {get: get, set: set} = desc;
                    if (typeof get !== "function" || typeof set !== "function") {
                        return false;
                    }
                    if (get() !== expectedValue) {
                        return false;
                    }
                    if (apply(get, obj, []) !== expectedValue) {
                        return false;
                    }
                    const testValue = "Seems to be a setter";
                    const subject1 = {
                        __proto__: null
                    };
                    apply(set, subject1, [ testValue ]);
                    if (subject1[prop] !== testValue) {
                        return false;
                    }
                    const subject2 = {
                        __proto__: obj
                    };
                    apply(set, subject2, [ testValue ]);
                    if (subject2[prop] !== testValue) {
                        return false;
                    }
                    if (!throws(() => apply(set, obj, [ expectedValue ]))) {
                        return false;
                    }
                    if ("originalValue" in get) {
                        return false;
                    }
                    if (desc.configurable === false) {
                        return false;
                    }
                    defineProperty(obj, prop, {
                        value: expectedValue,
                        writable: true,
                        enumerable: desc.enumerable,
                        configurable: true
                    });
                    return true;
                };
                $h͏_once.tameFauxDataProperty(tameFauxDataProperty);
                const tameFauxDataProperties = intrinsics => {
                    tameFauxDataProperty(intrinsics["%IteratorPrototype%"], "constructor", intrinsics.Iterator);
                    tameFauxDataProperty(intrinsics["%IteratorPrototype%"], toStringTagSymbol, "Iterator");
                };
                $h͏_once.tameFauxDataProperties(tameFauxDataProperties);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let defineProperty, iteratorPrototype, iteratorSymbol, hasOwn;
                $h͏_imports([ [ "./commons.js", [ [ "defineProperty", [ $h͏_a => defineProperty = $h͏_a ] ], [ "iteratorPrototype", [ $h͏_a => iteratorPrototype = $h͏_a ] ], [ "iteratorSymbol", [ $h͏_a => iteratorSymbol = $h͏_a ] ], [ "hasOwn", [ $h͏_a => hasOwn = $h͏_a ] ] ] ] ]);
                const tameRegeneratorRuntime = () => {
                    const iter = iteratorPrototype[iteratorSymbol];
                    defineProperty(iteratorPrototype, iteratorSymbol, {
                        configurable: true,
                        get() {
                            return iter;
                        },
                        set(value) {
                            if (this === iteratorPrototype) return;
                            if (hasOwn(this, iteratorSymbol)) {
                                this[iteratorSymbol] = value;
                            }
                            defineProperty(this, iteratorSymbol, {
                                value: value,
                                writable: true,
                                enumerable: true,
                                configurable: true
                            });
                        }
                    });
                };
                $h͏_once.tameRegeneratorRuntime(tameRegeneratorRuntime);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let ArrayBuffer, arrayBufferPrototype, arrayBufferSlice, arrayBufferGetByteLength, Uint8Array, typedArraySet, globalThis, TypeError, defineProperty;
                $h͏_imports([ [ "./commons.js", [ [ "ArrayBuffer", [ $h͏_a => ArrayBuffer = $h͏_a ] ], [ "arrayBufferPrototype", [ $h͏_a => arrayBufferPrototype = $h͏_a ] ], [ "arrayBufferSlice", [ $h͏_a => arrayBufferSlice = $h͏_a ] ], [ "arrayBufferGetByteLength", [ $h͏_a => arrayBufferGetByteLength = $h͏_a ] ], [ "Uint8Array", [ $h͏_a => Uint8Array = $h͏_a ] ], [ "typedArraySet", [ $h͏_a => typedArraySet = $h͏_a ] ], [ "globalThis", [ $h͏_a => globalThis = $h͏_a ] ], [ "TypeError", [ $h͏_a => TypeError = $h͏_a ] ], [ "defineProperty", [ $h͏_a => defineProperty = $h͏_a ] ] ] ] ]);
                const shimArrayBufferTransfer = () => {
                    if (typeof arrayBufferPrototype.transfer === "function") {
                        return {};
                    }
                    const clone = globalThis.structuredClone;
                    if (typeof clone !== "function") {
                        return {};
                    }
                    const methods = {
                        transfer(newLength = undefined) {
                            const oldLength = arrayBufferGetByteLength(this);
                            if (newLength === undefined || newLength === oldLength) {
                                return clone(this, {
                                    transfer: [ this ]
                                });
                            }
                            if (typeof newLength !== "number") {
                                throw TypeError(`transfer newLength if provided must be a number`);
                            }
                            if (newLength > oldLength) {
                                const result = new ArrayBuffer(newLength);
                                const taOld = new Uint8Array(this);
                                const taNew = new Uint8Array(result);
                                typedArraySet(taNew, taOld);
                                clone(this, {
                                    transfer: [ this ]
                                });
                                return result;
                            } else {
                                const result = arrayBufferSlice(this, 0, newLength);
                                clone(this, {
                                    transfer: [ this ]
                                });
                                return result;
                            }
                        }
                    };
                    defineProperty(arrayBufferPrototype, "transfer", {
                        value: methods.transfer,
                        writable: true,
                        enumerable: false,
                        configurable: true
                    });
                    return {};
                };
                $h͏_once.shimArrayBufferTransfer(shimArrayBufferTransfer);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let globalThis, assert;
                $h͏_imports([ [ "./commons.js", [ [ "globalThis", [ $h͏_a => globalThis = $h͏_a ] ] ] ], [ "./error/assert.js", [ [ "assert", [ $h͏_a => assert = $h͏_a ] ] ] ] ]);
                const consoleReporter = {
                    warn(...args) {
                        globalThis.console.warn(...args);
                    },
                    error(...args) {
                        globalThis.console.error(...args);
                    },
                    ...globalThis.console?.groupCollapsed ? {
                        groupCollapsed(...args) {
                            globalThis.console.groupCollapsed(...args);
                        }
                    } : undefined,
                    ...globalThis.console?.groupEnd ? {
                        groupEnd() {
                            globalThis.console.groupEnd();
                        }
                    } : undefined
                };
                const makeReportPrinter = print => {
                    let indent = false;
                    const printIndent = (...args) => {
                        if (indent) {
                            print(" ", ...args);
                        } else {
                            print(...args);
                        }
                    };
                    return {
                        warn(...args) {
                            printIndent(...args);
                        },
                        error(...args) {
                            printIndent(...args);
                        },
                        groupCollapsed(...args) {
                            assert(!indent);
                            print(...args);
                            indent = true;
                        },
                        groupEnd() {
                            indent = false;
                        }
                    };
                };
                const mute = () => {};
                const chooseReporter = reporting => {
                    if (reporting === "none") {
                        return makeReportPrinter(mute);
                    }
                    if (globalThis.console !== undefined) {
                        if (reporting === "console" || globalThis.window === globalThis || globalThis.importScripts !== undefined) {
                            return consoleReporter;
                        }
                        assert(reporting === "platform");
                        return makeReportPrinter(consoleReporter.error);
                    }
                    if (globalThis.print !== undefined) {
                        return makeReportPrinter(globalThis.print);
                    }
                    return makeReportPrinter(mute);
                };
                $h͏_once.chooseReporter(chooseReporter);
                const reportInGroup = (groupLabel, console, callback) => {
                    const {warn: warn, error: error, groupCollapsed: groupCollapsed, groupEnd: groupEnd} = console;
                    const grouping = groupCollapsed && groupEnd;
                    let groupStarted = false;
                    try {
                        return callback({
                            warn(...args) {
                                if (grouping && !groupStarted) {
                                    groupCollapsed(groupLabel);
                                    groupStarted = true;
                                }
                                warn(...args);
                            },
                            error(...args) {
                                if (grouping && !groupStarted) {
                                    groupCollapsed(groupLabel);
                                    groupStarted = true;
                                }
                                error(...args);
                            }
                        });
                    } finally {
                        if (grouping && groupStarted) {
                            groupEnd();
                            groupStarted = false;
                        }
                    }
                };
                $h͏_once.reportInGroup(reportInGroup);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let getenv, FERAL_FUNCTION, FERAL_EVAL, TypeError, arrayFilter, globalThis, is, ownKeys, stringSplit, symbolFor, noEvalEvaluate, getOwnPropertyNames, getPrototypeOf, makeHardener, makeIntrinsicsCollector, removeUnpermittedIntrinsics, tameFunctionConstructors, tameDateConstructor, tameMathObject, tameTemporalObject, tameNaNSideChannel, tameRegExpConstructor, enablePropertyOverrides, tameLocaleMethods, setGlobalObjectConstantProperties, setGlobalObjectMutableProperties, setGlobalObjectEvaluators, makeSafeEvaluator, initialGlobalPropertyNames, tameFunctionToString, tameDomains, tameModuleSource, tameConsole, tameErrorConstructor, assert, makeAssert, getAnonymousIntrinsics, makeCompartmentConstructor, tameHarden, tameSymbolConstructor, tameFauxDataProperties, tameRegeneratorRuntime, shimArrayBufferTransfer, reportInGroup, chooseReporter;
                $h͏_imports([ [ "@endo/env-options", [ [ "getEnvironmentOption", [ $h͏_a => getenv = $h͏_a ] ] ] ], [ "@endo/immutable-arraybuffer/shim.js", [] ], [ "./commons.js", [ [ "FERAL_FUNCTION", [ $h͏_a => FERAL_FUNCTION = $h͏_a ] ], [ "FERAL_EVAL", [ $h͏_a => FERAL_EVAL = $h͏_a ] ], [ "TypeError", [ $h͏_a => TypeError = $h͏_a ] ], [ "arrayFilter", [ $h͏_a => arrayFilter = $h͏_a ] ], [ "globalThis", [ $h͏_a => globalThis = $h͏_a ] ], [ "is", [ $h͏_a => is = $h͏_a ] ], [ "ownKeys", [ $h͏_a => ownKeys = $h͏_a ] ], [ "stringSplit", [ $h͏_a => stringSplit = $h͏_a ] ], [ "symbolFor", [ $h͏_a => symbolFor = $h͏_a ] ], [ "noEvalEvaluate", [ $h͏_a => noEvalEvaluate = $h͏_a ] ], [ "getOwnPropertyNames", [ $h͏_a => getOwnPropertyNames = $h͏_a ] ], [ "getPrototypeOf", [ $h͏_a => getPrototypeOf = $h͏_a ] ] ] ], [ "./make-hardener.js", [ [ "makeHardener", [ $h͏_a => makeHardener = $h͏_a ] ] ] ], [ "./intrinsics.js", [ [ "makeIntrinsicsCollector", [ $h͏_a => makeIntrinsicsCollector = $h͏_a ] ] ] ], [ "./permits-intrinsics.js", [ [ "default", [ $h͏_a => removeUnpermittedIntrinsics = $h͏_a ] ] ] ], [ "./tame-function-constructors.js", [ [ "default", [ $h͏_a => tameFunctionConstructors = $h͏_a ] ] ] ], [ "./tame-date-constructor.js", [ [ "default", [ $h͏_a => tameDateConstructor = $h͏_a ] ] ] ], [ "./tame-math-object.js", [ [ "default", [ $h͏_a => tameMathObject = $h͏_a ] ] ] ], [ "./tame-temporal-object.js", [ [ "default", [ $h͏_a => tameTemporalObject = $h͏_a ] ] ] ], [ "./tame-nan-sidechannel.js", [ [ "tameNaNSideChannel", [ $h͏_a => tameNaNSideChannel = $h͏_a ] ] ] ], [ "./tame-regexp-constructor.js", [ [ "default", [ $h͏_a => tameRegExpConstructor = $h͏_a ] ] ] ], [ "./enable-property-overrides.js", [ [ "default", [ $h͏_a => enablePropertyOverrides = $h͏_a ] ] ] ], [ "./tame-locale-methods.js", [ [ "default", [ $h͏_a => tameLocaleMethods = $h͏_a ] ] ] ], [ "./global-object.js", [ [ "setGlobalObjectConstantProperties", [ $h͏_a => setGlobalObjectConstantProperties = $h͏_a ] ], [ "setGlobalObjectMutableProperties", [ $h͏_a => setGlobalObjectMutableProperties = $h͏_a ] ], [ "setGlobalObjectEvaluators", [ $h͏_a => setGlobalObjectEvaluators = $h͏_a ] ] ] ], [ "./make-safe-evaluator.js", [ [ "makeSafeEvaluator", [ $h͏_a => makeSafeEvaluator = $h͏_a ] ] ] ], [ "./permits.js", [ [ "initialGlobalPropertyNames", [ $h͏_a => initialGlobalPropertyNames = $h͏_a ] ] ] ], [ "./tame-function-tostring.js", [ [ "tameFunctionToString", [ $h͏_a => tameFunctionToString = $h͏_a ] ] ] ], [ "./tame-domains.js", [ [ "tameDomains", [ $h͏_a => tameDomains = $h͏_a ] ] ] ], [ "./tame-module-source.js", [ [ "tameModuleSource", [ $h͏_a => tameModuleSource = $h͏_a ] ] ] ], [ "./error/tame-console.js", [ [ "tameConsole", [ $h͏_a => tameConsole = $h͏_a ] ] ] ], [ "./error/tame-error-constructor.js", [ [ "default", [ $h͏_a => tameErrorConstructor = $h͏_a ] ] ] ], [ "./error/assert.js", [ [ "assert", [ $h͏_a => assert = $h͏_a ] ], [ "makeAssert", [ $h͏_a => makeAssert = $h͏_a ] ] ] ], [ "./get-anonymous-intrinsics.js", [ [ "getAnonymousIntrinsics", [ $h͏_a => getAnonymousIntrinsics = $h͏_a ] ] ] ], [ "./compartment.js", [ [ "makeCompartmentConstructor", [ $h͏_a => makeCompartmentConstructor = $h͏_a ] ] ] ], [ "./tame-harden.js", [ [ "tameHarden", [ $h͏_a => tameHarden = $h͏_a ] ] ] ], [ "./tame-symbol-constructor.js", [ [ "tameSymbolConstructor", [ $h͏_a => tameSymbolConstructor = $h͏_a ] ] ] ], [ "./tame-faux-data-properties.js", [ [ "tameFauxDataProperties", [ $h͏_a => tameFauxDataProperties = $h͏_a ] ] ] ], [ "./tame-regenerator-runtime.js", [ [ "tameRegeneratorRuntime", [ $h͏_a => tameRegeneratorRuntime = $h͏_a ] ] ] ], [ "./shim-arraybuffer-transfer.js", [ [ "shimArrayBufferTransfer", [ $h͏_a => shimArrayBufferTransfer = $h͏_a ] ] ] ], [ "./reporting.js", [ [ "reportInGroup", [ $h͏_a => reportInGroup = $h͏_a ] ], [ "chooseReporter", [ $h͏_a => chooseReporter = $h͏_a ] ] ] ] ]);
                const {Fail: Fail, details: X, quote: q} = assert;
                let priorRepairIntrinsics;
                let priorHardenIntrinsics;
                const safeHarden = makeHardener();
                const probeHostEvaluators = () => {
                    let functionAllowed;
                    try {
                        functionAllowed = FERAL_FUNCTION("return true")();
                    } catch (_error) {
                        functionAllowed = false;
                    }
                    let evalAllowed;
                    try {
                        evalAllowed = FERAL_EVAL("true");
                    } catch (_error) {
                        evalAllowed = false;
                    }
                    let directEvalAllowed;
                    if (functionAllowed && evalAllowed) {
                        directEvalAllowed = FERAL_FUNCTION("eval", "SES_changed", `        eval("SES_changed = true");\n        return SES_changed;\n      `)(FERAL_EVAL, false);
                        if (!directEvalAllowed) {
                            delete globalThis.SES_changed;
                        }
                    }
                    return {
                        functionAllowed: functionAllowed,
                        evalAllowed: evalAllowed,
                        directEvalAllowed: directEvalAllowed
                    };
                };
                const repairIntrinsics = (options = {}) => {
                    const {errorTaming: errorTaming = getenv("LOCKDOWN_ERROR_TAMING", "safe", [ "unsafe", "unsafe-debug" ]), errorTrapping: errorTrapping = getenv("LOCKDOWN_ERROR_TRAPPING", "platform", [ "none", "report", "abort", "exit" ]), reporting: reporting = getenv("LOCKDOWN_REPORTING", "platform", [ "console", "none" ]), unhandledRejectionTrapping: unhandledRejectionTrapping = getenv("LOCKDOWN_UNHANDLED_REJECTION_TRAPPING", "report", [ "none" ]), regExpTaming: regExpTaming = getenv("LOCKDOWN_REGEXP_TAMING", "safe", [ "unsafe" ]), localeTaming: localeTaming = getenv("LOCKDOWN_LOCALE_TAMING", "safe", [ "unsafe" ]), consoleTaming: consoleTaming = getenv("LOCKDOWN_CONSOLE_TAMING", "safe", [ "unsafe" ]), overrideTaming: overrideTaming = getenv("LOCKDOWN_OVERRIDE_TAMING", "moderate", [ "min", "severe" ]), stackFiltering: stackFiltering = getenv("LOCKDOWN_STACK_FILTERING", "concise", [ "omit-frames", "shorten-paths", "verbose" ]), domainTaming: domainTaming = getenv("LOCKDOWN_DOMAIN_TAMING", "safe", [ "unsafe" ]), evalTaming: evalTaming = getenv("LOCKDOWN_EVAL_TAMING", "safe-eval", [ "unsafe-eval", "no-eval", "safeEval", "unsafeEval", "noEval" ]), overrideDebug: overrideDebug = arrayFilter(stringSplit(getenv("LOCKDOWN_OVERRIDE_DEBUG", ""), ","), debugName => debugName !== ""), legacyRegeneratorRuntimeTaming: legacyRegeneratorRuntimeTaming = getenv("LOCKDOWN_LEGACY_REGENERATOR_RUNTIME_TAMING", "safe", [ "unsafe-ignore" ]), __hardenTaming__: __hardenTaming__ = getenv("LOCKDOWN_HARDEN_TAMING", "safe", [ "unsafe" ]), dateTaming: dateTaming, mathTaming: mathTaming, ...extraOptions} = options;
                    const extraOptionsNames = ownKeys(extraOptions);
                    extraOptionsNames.length === 0 || Fail`lockdown(): non supported option ${q(extraOptionsNames)}`;
                    const reporter = chooseReporter(reporting);
                    const {warn: warn} = reporter;
                    if (dateTaming !== undefined) {
                        warn(`SES The 'dateTaming' option is deprecated and does nothing. In the future specifying it will be an error.`);
                    }
                    if (mathTaming !== undefined) {
                        warn(`SES The 'mathTaming' option is deprecated and does nothing. In the future specifying it will be an error.`);
                    }
                    priorRepairIntrinsics === undefined || assert.fail(X`Already locked down at ${priorRepairIntrinsics} (SES_ALREADY_LOCKED_DOWN)`, TypeError);
                    priorRepairIntrinsics = TypeError("Prior lockdown (SES_ALREADY_LOCKED_DOWN)");
                    priorRepairIntrinsics.stack;
                    const {functionAllowed: functionAllowed, evalAllowed: evalAllowed, directEvalAllowed: directEvalAllowed} = probeHostEvaluators();
                    if (directEvalAllowed === false && evalTaming === "safe-eval" && (functionAllowed || evalAllowed)) {
                        throw TypeError("SES cannot initialize unless 'eval' is the original intrinsic 'eval', suitable for direct eval (dynamically scoped eval) (SES_DIRECT_EVAL)");
                    }
                    const seemsToBeLockedDown = () => globalThis.Function.prototype.constructor !== globalThis.Function && typeof globalThis.harden === "function" && typeof globalThis.lockdown === "function" && globalThis.Date.prototype.constructor !== globalThis.Date && typeof globalThis.Date.now === "function" && is(globalThis.Date.prototype.constructor.now(), NaN);
                    if (seemsToBeLockedDown()) {
                        throw TypeError(`Already locked down but not by this SES instance (SES_MULTIPLE_INSTANCES)`);
                    }
                    tameDomains(domainTaming);
                    const markVirtualizedNativeFunction = tameFunctionToString();
                    const {addIntrinsics: addIntrinsics, completePrototypes: completePrototypes, finalIntrinsics: finalIntrinsics} = makeIntrinsicsCollector(reporter);
                    const tamedHarden = tameHarden(safeHarden, __hardenTaming__);
                    addIntrinsics({
                        harden: tamedHarden
                    });
                    addIntrinsics(tameFunctionConstructors());
                    addIntrinsics(tameDateConstructor());
                    addIntrinsics(tameErrorConstructor(errorTaming, stackFiltering));
                    addIntrinsics(tameMathObject());
                    addIntrinsics(tameTemporalObject());
                    tameNaNSideChannel();
                    addIntrinsics(tameRegExpConstructor(regExpTaming));
                    addIntrinsics(tameSymbolConstructor());
                    addIntrinsics(shimArrayBufferTransfer());
                    addIntrinsics(tameModuleSource());
                    addIntrinsics(getAnonymousIntrinsics());
                    completePrototypes();
                    const intrinsics = finalIntrinsics();
                    const symbolForHarden = symbolFor("harden");
                    const priorHarden = intrinsics.Object[symbolForHarden];
                    if (priorHarden) {
                        if (priorHarden.lockdownError) {
                            throw priorHarden.lockdownError;
                        }
                        throw new TypeError("Cannot lockdown (repairIntrinsics) if a prior harden implementation has been used and installed. Check for libraries using @endo/harden before lockdown.");
                    }
                    intrinsics.Object[symbolForHarden] = tamedHarden;
                    const hostIntrinsics = {
                        __proto__: null
                    };
                    if (typeof globalThis.Buffer === "function") {
                        hostIntrinsics.Buffer = globalThis.Buffer;
                    }
                    let optGetStackString;
                    if (errorTaming === "safe") {
                        optGetStackString = intrinsics["%InitialGetStackString%"];
                    }
                    const consoleRecord = tameConsole(consoleTaming, errorTrapping, unhandledRejectionTrapping, optGetStackString);
                    globalThis.console = consoleRecord.console;
                    if (typeof consoleRecord.console._times === "object") {
                        hostIntrinsics.SafeMap = getPrototypeOf(consoleRecord.console._times);
                    }
                    if (errorTaming !== "unsafe" && errorTaming !== "unsafe-debug") {
                        globalThis.assert = makeAssert();
                    }
                    tameLocaleMethods(intrinsics, localeTaming);
                    tameFauxDataProperties(intrinsics);
                    reportInGroup("SES Removing unpermitted intrinsics", reporter, groupReporter => removeUnpermittedIntrinsics(intrinsics, markVirtualizedNativeFunction, groupReporter));
                    setGlobalObjectConstantProperties(globalThis);
                    setGlobalObjectMutableProperties(globalThis, {
                        intrinsics: intrinsics,
                        newGlobalPropertyNames: initialGlobalPropertyNames,
                        makeCompartmentConstructor: makeCompartmentConstructor,
                        markVirtualizedNativeFunction: markVirtualizedNativeFunction
                    });
                    if (evalTaming === "no-eval" || evalTaming === "noEval") {
                        setGlobalObjectEvaluators(globalThis, noEvalEvaluate, markVirtualizedNativeFunction);
                    } else if (evalTaming === "safe-eval" || evalTaming === "safeEval") {
                        const {safeEvaluate: safeEvaluate} = makeSafeEvaluator({
                            globalObject: globalThis
                        });
                        setGlobalObjectEvaluators(globalThis, safeEvaluate, markVirtualizedNativeFunction);
                    } else if (evalTaming === "unsafe-eval" || evalTaming === "unsafeEval") {}
                    const hardenIntrinsics = () => {
                        priorHardenIntrinsics === undefined || assert.fail(X`Already locked down at ${priorHardenIntrinsics} (SES_ALREADY_LOCKED_DOWN)`, TypeError);
                        priorHardenIntrinsics = TypeError("Prior lockdown (SES_ALREADY_LOCKED_DOWN)");
                        priorHardenIntrinsics.stack;
                        reportInGroup("SES Enabling property overrides", reporter, groupReporter => enablePropertyOverrides(intrinsics, overrideTaming, groupReporter, overrideDebug));
                        if (legacyRegeneratorRuntimeTaming === "unsafe-ignore") {
                            tameRegeneratorRuntime();
                        }
                        const toHarden = {
                            intrinsics: intrinsics,
                            hostIntrinsics: hostIntrinsics,
                            globals: {
                                Function: globalThis.Function,
                                eval: globalThis.eval,
                                Compartment: globalThis.Compartment,
                                Symbol: globalThis.Symbol
                            }
                        };
                        for (const prop of getOwnPropertyNames(initialGlobalPropertyNames)) {
                            toHarden.globals[prop] = globalThis[prop];
                        }
                        tamedHarden(toHarden);
                        return tamedHarden;
                    };
                    return hardenIntrinsics;
                };
                $h͏_once.repairIntrinsics(repairIntrinsics);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let globalThis, repairIntrinsics;
                $h͏_imports([ [ "./assert-sloppy-mode.js", [] ], [ "./commons.js", [ [ "globalThis", [ $h͏_a => globalThis = $h͏_a ] ] ] ], [ "./lockdown.js", [ [ "repairIntrinsics", [ $h͏_a => repairIntrinsics = $h͏_a ] ] ] ] ]);
                globalThis.lockdown = options => {
                    const hardenIntrinsics = repairIntrinsics(options);
                    globalThis.harden = hardenIntrinsics();
                };
                globalThis.repairIntrinsics = options => {
                    const hardenIntrinsics = repairIntrinsics(options);
                    globalThis.hardenIntrinsics = () => {
                        globalThis.harden = hardenIntrinsics();
                    };
                };
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let globalThis, makeCompartmentConstructor, tameFunctionToString, getGlobalIntrinsics, chooseReporter;
                $h͏_imports([ [ "./commons.js", [ [ "globalThis", [ $h͏_a => globalThis = $h͏_a ] ] ] ], [ "./compartment.js", [ [ "makeCompartmentConstructor", [ $h͏_a => makeCompartmentConstructor = $h͏_a ] ] ] ], [ "./tame-function-tostring.js", [ [ "tameFunctionToString", [ $h͏_a => tameFunctionToString = $h͏_a ] ] ] ], [ "./intrinsics.js", [ [ "getGlobalIntrinsics", [ $h͏_a => getGlobalIntrinsics = $h͏_a ] ] ] ], [ "./reporting.js", [ [ "chooseReporter", [ $h͏_a => chooseReporter = $h͏_a ] ] ] ] ]);
                const markVirtualizedNativeFunction = tameFunctionToString();
                const muteReporter = chooseReporter("none");
                globalThis.Compartment = makeCompartmentConstructor(makeCompartmentConstructor, getGlobalIntrinsics(globalThis, muteReporter), markVirtualizedNativeFunction, {
                    enforceNew: true
                });
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let globalThis, makeAssert;
                $h͏_imports([ [ "./commons.js", [ [ "globalThis", [ $h͏_a => globalThis = $h͏_a ] ] ] ], [ "./error/assert.js", [ [ "makeAssert", [ $h͏_a => makeAssert = $h͏_a ] ] ] ] ]);
                globalThis.assert = makeAssert(undefined, true);
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                let symbolFor, globalThis, defineCausalConsoleFromLogger, loggedErrorHandler;
                $h͏_imports([ [ "./commons.js", [ [ "symbolFor", [ $h͏_a => symbolFor = $h͏_a ] ], [ "globalThis", [ $h͏_a => globalThis = $h͏_a ] ] ] ], [ "./error/console.js", [ [ "defineCausalConsoleFromLogger", [ $h͏_a => defineCausalConsoleFromLogger = $h͏_a ] ] ] ], [ "./error/assert.js", [ [ "loggedErrorHandler", [ $h͏_a => loggedErrorHandler = $h͏_a ] ] ] ] ]);
                const makeCausalConsoleFromLoggerForSesAva = defineCausalConsoleFromLogger(loggedErrorHandler);
                const MAKE_CAUSAL_CONSOLE_FROM_LOGGER_KEY_FOR_SES_AVA = symbolFor("MAKE_CAUSAL_CONSOLE_FROM_LOGGER_KEY_FOR_SES_AVA");
                globalThis[MAKE_CAUSAL_CONSOLE_FROM_LOGGER_KEY_FOR_SES_AVA] = makeCausalConsoleFromLoggerForSesAva;
            }(), ({imports: $h͏_imports, liveVar: $h͏_live, onceVar: $h͏_once, import: $h͏_import, importMeta: $h͏____meta}) => function() {
                "use strict";
                $h͏_imports([ [ "./src/lockdown-shim.js", [] ], [ "./src/compartment-shim.js", [] ], [ "./src/assert-shim.js", [] ], [ "./src/console-shim.js", [] ] ]);
            }() ])();
        }
    };
    const __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        const cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== undefined) {
            return cachedModule.exports;
        }
        const module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        if (!(moduleId in __webpack_modules__)) {
            delete __webpack_module_cache__[moduleId];
            const e = new Error("Cannot find module '" + moduleId + "'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
        }
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        globalThis.ses = __webpack_require__("./node_modules/ses/dist/ses.cjs");
    })();
})();
