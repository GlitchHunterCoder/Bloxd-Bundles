(() => {
    var __webpack_modules__ = {
        "./node_modules/base64-js/index.js"(__unused_webpack_module, exports) {
            "use strict";
            exports.byteLength = byteLength;
            exports.toByteArray = toByteArray;
            exports.fromByteArray = fromByteArray;
            var lookup = [];
            var revLookup = [];
            var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
            var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            for (var i = 0, len = code.length; i < len; ++i) {
                lookup[i] = code[i];
                revLookup[code.charCodeAt(i)] = i;
            }
            revLookup["-".charCodeAt(0)] = 62;
            revLookup["_".charCodeAt(0)] = 63;
            function getLens(b64) {
                var len = b64.length;
                if (len % 4 > 0) {
                    throw new Error("Invalid string. Length must be a multiple of 4");
                }
                var validLen = b64.indexOf("=");
                if (validLen === -1) validLen = len;
                var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
                return [ validLen, placeHoldersLen ];
            }
            function byteLength(b64) {
                var lens = getLens(b64);
                var validLen = lens[0];
                var placeHoldersLen = lens[1];
                return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
            }
            function _byteLength(b64, validLen, placeHoldersLen) {
                return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
            }
            function toByteArray(b64) {
                var tmp;
                var lens = getLens(b64);
                var validLen = lens[0];
                var placeHoldersLen = lens[1];
                var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
                var curByte = 0;
                var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
                var i;
                for (i = 0; i < len; i += 4) {
                    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
                    arr[curByte++] = tmp >> 16 & 255;
                    arr[curByte++] = tmp >> 8 & 255;
                    arr[curByte++] = tmp & 255;
                }
                if (placeHoldersLen === 2) {
                    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
                    arr[curByte++] = tmp & 255;
                }
                if (placeHoldersLen === 1) {
                    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
                    arr[curByte++] = tmp >> 8 & 255;
                    arr[curByte++] = tmp & 255;
                }
                return arr;
            }
            function tripletToBase64(num) {
                return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
            }
            function encodeChunk(uint8, start, end) {
                var tmp;
                var output = [];
                for (var i = start; i < end; i += 3) {
                    tmp = (uint8[i] << 16 & 16711680) + (uint8[i + 1] << 8 & 65280) + (uint8[i + 2] & 255);
                    output.push(tripletToBase64(tmp));
                }
                return output.join("");
            }
            function fromByteArray(uint8) {
                var tmp;
                var len = uint8.length;
                var extraBytes = len % 3;
                var parts = [];
                var maxChunkLength = 16383;
                for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
                    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
                }
                if (extraBytes === 1) {
                    tmp = uint8[len - 1];
                    parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==");
                } else if (extraBytes === 2) {
                    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
                    parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "=");
                }
                return parts.join("");
            }
        },
        "./node_modules/esbuild-wasm/lib/browser.js"(module, __unused_webpack_exports, __webpack_require__) {
            module = __webpack_require__.nmd(module);
            var Buffer = __webpack_require__("./node_modules/node-stdlib-browser/node_modules/buffer/index.js").Buffer;
            (module => {
                "use strict";
                var __defProp = Object.defineProperty;
                var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
                var __getOwnPropNames = Object.getOwnPropertyNames;
                var __hasOwnProp = Object.prototype.hasOwnProperty;
                var __export = (target, all) => {
                    for (var name in all) __defProp(target, name, {
                        get: all[name],
                        enumerable: true
                    });
                };
                var __copyProps = (to, from, except, desc) => {
                    if (from && typeof from === "object" || typeof from === "function") {
                        for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                            get: () => from[key],
                            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                        });
                    }
                    return to;
                };
                var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
                    value: true
                }), mod);
                var __async = (__this, __arguments, generator) => new Promise((resolve, reject) => {
                    var fulfilled = value => {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    };
                    var rejected = value => {
                        try {
                            step(generator.throw(value));
                        } catch (e) {
                            reject(e);
                        }
                    };
                    var step = x => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
                    step((generator = generator.apply(__this, __arguments)).next());
                });
                var browser_exports = {};
                __export(browser_exports, {
                    analyzeMetafile: () => analyzeMetafile,
                    analyzeMetafileSync: () => analyzeMetafileSync,
                    build: () => build,
                    buildSync: () => buildSync,
                    context: () => context,
                    default: () => browser_default,
                    formatMessages: () => formatMessages,
                    formatMessagesSync: () => formatMessagesSync,
                    initialize: () => initialize,
                    stop: () => stop,
                    transform: () => transform,
                    transformSync: () => transformSync,
                    version: () => version
                });
                module.exports = __toCommonJS(browser_exports);
                function encodePacket(packet) {
                    let visit = value => {
                        if (value === null) {
                            bb.write8(0);
                        } else if (typeof value === "boolean") {
                            bb.write8(1);
                            bb.write8(+value);
                        } else if (typeof value === "number") {
                            bb.write8(2);
                            bb.write32(value | 0);
                        } else if (typeof value === "string") {
                            bb.write8(3);
                            bb.write(encodeUTF8(value));
                        } else if (value instanceof Uint8Array) {
                            bb.write8(4);
                            bb.write(value);
                        } else if (value instanceof Array) {
                            bb.write8(5);
                            bb.write32(value.length);
                            for (let item of value) {
                                visit(item);
                            }
                        } else {
                            let keys = Object.keys(value);
                            bb.write8(6);
                            bb.write32(keys.length);
                            for (let key of keys) {
                                bb.write(encodeUTF8(key));
                                visit(value[key]);
                            }
                        }
                    };
                    let bb = new ByteBuffer;
                    bb.write32(0);
                    bb.write32(packet.id << 1 | +!packet.isRequest);
                    visit(packet.value);
                    writeUInt32LE(bb.buf, bb.len - 4, 0);
                    return bb.buf.subarray(0, bb.len);
                }
                function decodePacket(bytes) {
                    let visit = () => {
                        switch (bb.read8()) {
                          case 0:
                            return null;

                          case 1:
                            return !!bb.read8();

                          case 2:
                            return bb.read32();

                          case 3:
                            return decodeUTF8(bb.read());

                          case 4:
                            return bb.read();

                          case 5:
                            {
                                let count = bb.read32();
                                let value2 = [];
                                for (let i = 0; i < count; i++) {
                                    value2.push(visit());
                                }
                                return value2;
                            }

                          case 6:
                            {
                                let count = bb.read32();
                                let value2 = {};
                                for (let i = 0; i < count; i++) {
                                    value2[decodeUTF8(bb.read())] = visit();
                                }
                                return value2;
                            }

                          default:
                            throw new Error("Invalid packet");
                        }
                    };
                    let bb = new ByteBuffer(bytes);
                    let id = bb.read32();
                    let isRequest = (id & 1) === 0;
                    id >>>= 1;
                    let value = visit();
                    if (bb.ptr !== bytes.length) {
                        throw new Error("Invalid packet");
                    }
                    return {
                        id: id,
                        isRequest: isRequest,
                        value: value
                    };
                }
                var ByteBuffer = class {
                    constructor(buf = new Uint8Array(1024)) {
                        this.buf = buf;
                        this.len = 0;
                        this.ptr = 0;
                    }
                    _write(delta) {
                        if (this.len + delta > this.buf.length) {
                            let clone = new Uint8Array((this.len + delta) * 2);
                            clone.set(this.buf);
                            this.buf = clone;
                        }
                        this.len += delta;
                        return this.len - delta;
                    }
                    write8(value) {
                        let offset = this._write(1);
                        this.buf[offset] = value;
                    }
                    write32(value) {
                        let offset = this._write(4);
                        writeUInt32LE(this.buf, value, offset);
                    }
                    write(bytes) {
                        let offset = this._write(4 + bytes.length);
                        writeUInt32LE(this.buf, bytes.length, offset);
                        this.buf.set(bytes, offset + 4);
                    }
                    _read(delta) {
                        if (this.ptr + delta > this.buf.length) {
                            throw new Error("Invalid packet");
                        }
                        this.ptr += delta;
                        return this.ptr - delta;
                    }
                    read8() {
                        return this.buf[this._read(1)];
                    }
                    read32() {
                        return readUInt32LE(this.buf, this._read(4));
                    }
                    read() {
                        let length = this.read32();
                        let bytes = new Uint8Array(length);
                        let ptr = this._read(bytes.length);
                        bytes.set(this.buf.subarray(ptr, ptr + length));
                        return bytes;
                    }
                };
                var encodeUTF8;
                var decodeUTF8;
                var encodeInvariant;
                if (typeof TextEncoder !== "undefined" && typeof TextDecoder !== "undefined") {
                    let encoder = new TextEncoder;
                    let decoder = new TextDecoder;
                    encodeUTF8 = text => encoder.encode(text);
                    decodeUTF8 = bytes => decoder.decode(bytes);
                    encodeInvariant = 'new TextEncoder().encode("")';
                } else if (typeof Buffer !== "undefined") {
                    encodeUTF8 = text => Buffer.from(text);
                    decodeUTF8 = bytes => {
                        let {buffer: buffer, byteOffset: byteOffset, byteLength: byteLength} = bytes;
                        return Buffer.from(buffer, byteOffset, byteLength).toString();
                    };
                    encodeInvariant = 'Buffer.from("")';
                } else {
                    throw new Error("No UTF-8 codec found");
                }
                if (!(encodeUTF8("") instanceof Uint8Array)) throw new Error(`Invariant violation: "${encodeInvariant} instanceof Uint8Array" is incorrectly false\n\nThis indicates that your JavaScript environment is broken. You cannot use\nesbuild in this environment because esbuild relies on this invariant. This\nis not a problem with esbuild. You need to fix your environment instead.\n`);
                function readUInt32LE(buffer, offset) {
                    return (buffer[offset++] | buffer[offset++] << 8 | buffer[offset++] << 16 | buffer[offset++] << 24) >>> 0;
                }
                function writeUInt32LE(buffer, value, offset) {
                    buffer[offset++] = value;
                    buffer[offset++] = value >> 8;
                    buffer[offset++] = value >> 16;
                    buffer[offset++] = value >> 24;
                }
                var fromCharCode = String.fromCharCode;
                function throwSyntaxError(bytes, index, message) {
                    const c = bytes[index];
                    let line = 1;
                    let column = 0;
                    for (let i = 0; i < index; i++) {
                        if (bytes[i] === 10) {
                            line++;
                            column = 0;
                        } else {
                            column++;
                        }
                    }
                    throw new SyntaxError(message ? message : index === bytes.length ? "Unexpected end of input while parsing JSON" : c >= 32 && c <= 126 ? `Unexpected character ${fromCharCode(c)} in JSON at position ${index} (line ${line}, column ${column})` : `Unexpected byte 0x${c.toString(16)} in JSON at position ${index} (line ${line}, column ${column})`);
                }
                function JSON_parse(bytes) {
                    if (!(bytes instanceof Uint8Array)) {
                        throw new Error(`JSON input must be a Uint8Array`);
                    }
                    const propertyStack = [];
                    const objectStack = [];
                    const stateStack = [];
                    const length = bytes.length;
                    let property = null;
                    let state = 0;
                    let object;
                    let i = 0;
                    while (i < length) {
                        let c = bytes[i++];
                        if (c <= 32) {
                            continue;
                        }
                        let value;
                        if (state === 2 && property === null && c !== 34 && c !== 125) {
                            throwSyntaxError(bytes, --i);
                        }
                        switch (c) {
                          case 116:
                            {
                                if (bytes[i++] !== 114 || bytes[i++] !== 117 || bytes[i++] !== 101) {
                                    throwSyntaxError(bytes, --i);
                                }
                                value = true;
                                break;
                            }

                          case 102:
                            {
                                if (bytes[i++] !== 97 || bytes[i++] !== 108 || bytes[i++] !== 115 || bytes[i++] !== 101) {
                                    throwSyntaxError(bytes, --i);
                                }
                                value = false;
                                break;
                            }

                          case 110:
                            {
                                if (bytes[i++] !== 117 || bytes[i++] !== 108 || bytes[i++] !== 108) {
                                    throwSyntaxError(bytes, --i);
                                }
                                value = null;
                                break;
                            }

                          case 45:
                          case 46:
                          case 48:
                          case 49:
                          case 50:
                          case 51:
                          case 52:
                          case 53:
                          case 54:
                          case 55:
                          case 56:
                          case 57:
                            {
                                let index = i;
                                value = fromCharCode(c);
                                c = bytes[i];
                                while (true) {
                                    switch (c) {
                                      case 43:
                                      case 45:
                                      case 46:
                                      case 48:
                                      case 49:
                                      case 50:
                                      case 51:
                                      case 52:
                                      case 53:
                                      case 54:
                                      case 55:
                                      case 56:
                                      case 57:
                                      case 101:
                                      case 69:
                                        {
                                            value += fromCharCode(c);
                                            c = bytes[++i];
                                            continue;
                                        }
                                    }
                                    break;
                                }
                                value = +value;
                                if (isNaN(value)) {
                                    throwSyntaxError(bytes, --index, "Invalid number");
                                }
                                break;
                            }

                          case 34:
                            {
                                value = "";
                                while (true) {
                                    if (i >= length) {
                                        throwSyntaxError(bytes, length);
                                    }
                                    c = bytes[i++];
                                    if (c === 34) {
                                        break;
                                    } else if (c === 92) {
                                        switch (bytes[i++]) {
                                          case 34:
                                            value += '"';
                                            break;

                                          case 47:
                                            value += "/";
                                            break;

                                          case 92:
                                            value += "\\";
                                            break;

                                          case 98:
                                            value += "\b";
                                            break;

                                          case 102:
                                            value += "\f";
                                            break;

                                          case 110:
                                            value += "\n";
                                            break;

                                          case 114:
                                            value += "\r";
                                            break;

                                          case 116:
                                            value += "\t";
                                            break;

                                          case 117:
                                            {
                                                let code = 0;
                                                for (let j = 0; j < 4; j++) {
                                                    c = bytes[i++];
                                                    code <<= 4;
                                                    if (c >= 48 && c <= 57) code |= c - 48; else if (c >= 97 && c <= 102) code |= c + (10 - 97); else if (c >= 65 && c <= 70) code |= c + (10 - 65); else throwSyntaxError(bytes, --i);
                                                }
                                                value += fromCharCode(code);
                                                break;
                                            }

                                          default:
                                            throwSyntaxError(bytes, --i);
                                            break;
                                        }
                                    } else if (c <= 127) {
                                        value += fromCharCode(c);
                                    } else if ((c & 224) === 192) {
                                        value += fromCharCode((c & 31) << 6 | bytes[i++] & 63);
                                    } else if ((c & 240) === 224) {
                                        value += fromCharCode((c & 15) << 12 | (bytes[i++] & 63) << 6 | bytes[i++] & 63);
                                    } else if ((c & 248) == 240) {
                                        let codePoint = (c & 7) << 18 | (bytes[i++] & 63) << 12 | (bytes[i++] & 63) << 6 | bytes[i++] & 63;
                                        if (codePoint > 65535) {
                                            codePoint -= 65536;
                                            value += fromCharCode(codePoint >> 10 & 1023 | 55296);
                                            codePoint = 56320 | codePoint & 1023;
                                        }
                                        value += fromCharCode(codePoint);
                                    }
                                }
                                value[0];
                                break;
                            }

                          case 91:
                            {
                                value = [];
                                propertyStack.push(property);
                                objectStack.push(object);
                                stateStack.push(state);
                                property = null;
                                object = value;
                                state = 1;
                                continue;
                            }

                          case 123:
                            {
                                value = {};
                                propertyStack.push(property);
                                objectStack.push(object);
                                stateStack.push(state);
                                property = null;
                                object = value;
                                state = 2;
                                continue;
                            }

                          case 93:
                            {
                                if (state !== 1) {
                                    throwSyntaxError(bytes, --i);
                                }
                                value = object;
                                property = propertyStack.pop();
                                object = objectStack.pop();
                                state = stateStack.pop();
                                break;
                            }

                          case 125:
                            {
                                if (state !== 2) {
                                    throwSyntaxError(bytes, --i);
                                }
                                value = object;
                                property = propertyStack.pop();
                                object = objectStack.pop();
                                state = stateStack.pop();
                                break;
                            }

                          default:
                            {
                                throwSyntaxError(bytes, --i);
                            }
                        }
                        c = bytes[i];
                        while (c <= 32) {
                            c = bytes[++i];
                        }
                        switch (state) {
                          case 0:
                            {
                                if (i === length) {
                                    return value;
                                }
                                break;
                            }

                          case 1:
                            {
                                object.push(value);
                                if (c === 44) {
                                    i++;
                                    continue;
                                }
                                if (c === 93) {
                                    continue;
                                }
                                break;
                            }

                          case 2:
                            {
                                if (property === null) {
                                    property = value;
                                    if (c === 58) {
                                        i++;
                                        continue;
                                    }
                                } else {
                                    object[property] = value;
                                    property = null;
                                    if (c === 44) {
                                        i++;
                                        continue;
                                    }
                                    if (c === 125) {
                                        continue;
                                    }
                                }
                                break;
                            }
                        }
                        break;
                    }
                    throwSyntaxError(bytes, i);
                }
                var quote = JSON.stringify;
                var buildLogLevelDefault = "warning";
                var transformLogLevelDefault = "silent";
                function validateAndJoinStringArray(values, what) {
                    const toJoin = [];
                    for (const value of values) {
                        validateStringValue(value, what);
                        if (value.indexOf(",") >= 0) throw new Error(`Invalid ${what}: ${value}`);
                        toJoin.push(value);
                    }
                    return toJoin.join(",");
                }
                var canBeAnything = () => null;
                var mustBeBoolean = value => typeof value === "boolean" ? null : "a boolean";
                var mustBeString = value => typeof value === "string" ? null : "a string";
                var mustBeRegExp = value => value instanceof RegExp ? null : "a RegExp object";
                var mustBeInteger = value => typeof value === "number" && value === (value | 0) ? null : "an integer";
                var mustBeValidPortNumber = value => typeof value === "number" && value === (value | 0) && value >= 0 && value <= 65535 ? null : "a valid port number";
                var mustBeFunction = value => typeof value === "function" ? null : "a function";
                var mustBeArray = value => Array.isArray(value) ? null : "an array";
                var mustBeArrayOfStrings = value => Array.isArray(value) && value.every(x => typeof x === "string") ? null : "an array of strings";
                var mustBeObject = value => typeof value === "object" && value !== null && !Array.isArray(value) ? null : "an object";
                var mustBeEntryPoints = value => typeof value === "object" && value !== null ? null : "an array or an object";
                var mustBeWebAssemblyModule = value => value instanceof WebAssembly.Module ? null : "a WebAssembly.Module";
                var mustBeObjectOrNull = value => typeof value === "object" && !Array.isArray(value) ? null : "an object or null";
                var mustBeStringOrBoolean = value => typeof value === "string" || typeof value === "boolean" ? null : "a string or a boolean";
                var mustBeStringOrObject = value => typeof value === "string" || typeof value === "object" && value !== null && !Array.isArray(value) ? null : "a string or an object";
                var mustBeStringOrArrayOfStrings = value => typeof value === "string" || Array.isArray(value) && value.every(x => typeof x === "string") ? null : "a string or an array of strings";
                var mustBeStringOrUint8Array = value => typeof value === "string" || value instanceof Uint8Array ? null : "a string or a Uint8Array";
                var mustBeStringOrURL = value => typeof value === "string" || value instanceof URL ? null : "a string or a URL";
                function getFlag(object, keys, key, mustBeFn) {
                    let value = object[key];
                    keys[key + ""] = true;
                    if (value === void 0) return void 0;
                    let mustBe = mustBeFn(value);
                    if (mustBe !== null) throw new Error(`${quote(key)} must be ${mustBe}`);
                    return value;
                }
                function checkForInvalidFlags(object, keys, where) {
                    for (let key in object) {
                        if (!(key in keys)) {
                            throw new Error(`Invalid option ${where}: ${quote(key)}`);
                        }
                    }
                }
                function validateInitializeOptions(options) {
                    let keys = Object.create(null);
                    let wasmURL = getFlag(options, keys, "wasmURL", mustBeStringOrURL);
                    let wasmModule = getFlag(options, keys, "wasmModule", mustBeWebAssemblyModule);
                    let worker = getFlag(options, keys, "worker", mustBeBoolean);
                    checkForInvalidFlags(options, keys, "in initialize() call");
                    return {
                        wasmURL: wasmURL,
                        wasmModule: wasmModule,
                        worker: worker
                    };
                }
                function validateMangleCache(mangleCache) {
                    let validated;
                    if (mangleCache !== void 0) {
                        validated = Object.create(null);
                        for (let key in mangleCache) {
                            let value = mangleCache[key];
                            if (typeof value === "string" || value === false) {
                                validated[key] = value;
                            } else {
                                throw new Error(`Expected ${quote(key)} in mangle cache to map to either a string or false`);
                            }
                        }
                    }
                    return validated;
                }
                function pushLogFlags(flags, options, keys, isTTY, logLevelDefault) {
                    let color = getFlag(options, keys, "color", mustBeBoolean);
                    let logLevel = getFlag(options, keys, "logLevel", mustBeString);
                    let logLimit = getFlag(options, keys, "logLimit", mustBeInteger);
                    let logStyle = getFlag(options, keys, "logStyle", mustBeString);
                    if (color !== void 0) flags.push(`--color=${color}`); else if (isTTY) flags.push(`--color=true`);
                    flags.push(`--log-level=${logLevel || logLevelDefault}`);
                    flags.push(`--log-limit=${logLimit || 0}`);
                    if (logStyle) flags.push(`--log-style=${logStyle}`);
                }
                function validateStringValue(value, what, key) {
                    if (typeof value !== "string") {
                        throw new Error(`Expected value for ${what}${key !== void 0 ? " " + quote(key) : ""} to be a string, got ${typeof value} instead`);
                    }
                    return value;
                }
                function pushCommonFlags(flags, options, keys) {
                    let legalComments = getFlag(options, keys, "legalComments", mustBeString);
                    let sourceRoot = getFlag(options, keys, "sourceRoot", mustBeString);
                    let sourcesContent = getFlag(options, keys, "sourcesContent", mustBeBoolean);
                    let target = getFlag(options, keys, "target", mustBeStringOrArrayOfStrings);
                    let format = getFlag(options, keys, "format", mustBeString);
                    let globalName = getFlag(options, keys, "globalName", mustBeString);
                    let mangleProps = getFlag(options, keys, "mangleProps", mustBeRegExp);
                    let reserveProps = getFlag(options, keys, "reserveProps", mustBeRegExp);
                    let mangleQuoted = getFlag(options, keys, "mangleQuoted", mustBeBoolean);
                    let minify = getFlag(options, keys, "minify", mustBeBoolean);
                    let minifySyntax = getFlag(options, keys, "minifySyntax", mustBeBoolean);
                    let minifyWhitespace = getFlag(options, keys, "minifyWhitespace", mustBeBoolean);
                    let minifyIdentifiers = getFlag(options, keys, "minifyIdentifiers", mustBeBoolean);
                    let lineLimit = getFlag(options, keys, "lineLimit", mustBeInteger);
                    let drop = getFlag(options, keys, "drop", mustBeArrayOfStrings);
                    let dropLabels = getFlag(options, keys, "dropLabels", mustBeArrayOfStrings);
                    let charset = getFlag(options, keys, "charset", mustBeString);
                    let treeShaking = getFlag(options, keys, "treeShaking", mustBeBoolean);
                    let ignoreAnnotations = getFlag(options, keys, "ignoreAnnotations", mustBeBoolean);
                    let jsx = getFlag(options, keys, "jsx", mustBeString);
                    let jsxFactory = getFlag(options, keys, "jsxFactory", mustBeString);
                    let jsxFragment = getFlag(options, keys, "jsxFragment", mustBeString);
                    let jsxImportSource = getFlag(options, keys, "jsxImportSource", mustBeString);
                    let jsxDev = getFlag(options, keys, "jsxDev", mustBeBoolean);
                    let jsxSideEffects = getFlag(options, keys, "jsxSideEffects", mustBeBoolean);
                    let define = getFlag(options, keys, "define", mustBeObject);
                    let logOverride = getFlag(options, keys, "logOverride", mustBeObject);
                    let supported = getFlag(options, keys, "supported", mustBeObject);
                    let pure = getFlag(options, keys, "pure", mustBeArrayOfStrings);
                    let keepNames = getFlag(options, keys, "keepNames", mustBeBoolean);
                    let platform = getFlag(options, keys, "platform", mustBeString);
                    let tsconfigRaw = getFlag(options, keys, "tsconfigRaw", mustBeStringOrObject);
                    let absPaths = getFlag(options, keys, "absPaths", mustBeArrayOfStrings);
                    if (legalComments) flags.push(`--legal-comments=${legalComments}`);
                    if (sourceRoot !== void 0) flags.push(`--source-root=${sourceRoot}`);
                    if (sourcesContent !== void 0) flags.push(`--sources-content=${sourcesContent}`);
                    if (target) flags.push(`--target=${validateAndJoinStringArray(Array.isArray(target) ? target : [ target ], "target")}`);
                    if (format) flags.push(`--format=${format}`);
                    if (globalName) flags.push(`--global-name=${globalName}`);
                    if (platform) flags.push(`--platform=${platform}`);
                    if (tsconfigRaw) flags.push(`--tsconfig-raw=${typeof tsconfigRaw === "string" ? tsconfigRaw : JSON.stringify(tsconfigRaw)}`);
                    if (minify) flags.push("--minify");
                    if (minifySyntax) flags.push("--minify-syntax");
                    if (minifyWhitespace) flags.push("--minify-whitespace");
                    if (minifyIdentifiers) flags.push("--minify-identifiers");
                    if (lineLimit) flags.push(`--line-limit=${lineLimit}`);
                    if (charset) flags.push(`--charset=${charset}`);
                    if (treeShaking !== void 0) flags.push(`--tree-shaking=${treeShaking}`);
                    if (ignoreAnnotations) flags.push(`--ignore-annotations`);
                    if (drop) for (let what of drop) flags.push(`--drop:${validateStringValue(what, "drop")}`);
                    if (dropLabels) flags.push(`--drop-labels=${validateAndJoinStringArray(dropLabels, "drop label")}`);
                    if (absPaths) flags.push(`--abs-paths=${validateAndJoinStringArray(absPaths, "abs paths")}`);
                    if (mangleProps) flags.push(`--mangle-props=${jsRegExpToGoRegExp(mangleProps)}`);
                    if (reserveProps) flags.push(`--reserve-props=${jsRegExpToGoRegExp(reserveProps)}`);
                    if (mangleQuoted !== void 0) flags.push(`--mangle-quoted=${mangleQuoted}`);
                    if (jsx) flags.push(`--jsx=${jsx}`);
                    if (jsxFactory) flags.push(`--jsx-factory=${jsxFactory}`);
                    if (jsxFragment) flags.push(`--jsx-fragment=${jsxFragment}`);
                    if (jsxImportSource) flags.push(`--jsx-import-source=${jsxImportSource}`);
                    if (jsxDev) flags.push(`--jsx-dev`);
                    if (jsxSideEffects) flags.push(`--jsx-side-effects`);
                    if (define) {
                        for (let key in define) {
                            if (key.indexOf("=") >= 0) throw new Error(`Invalid define: ${key}`);
                            flags.push(`--define:${key}=${validateStringValue(define[key], "define", key)}`);
                        }
                    }
                    if (logOverride) {
                        for (let key in logOverride) {
                            if (key.indexOf("=") >= 0) throw new Error(`Invalid log override: ${key}`);
                            flags.push(`--log-override:${key}=${validateStringValue(logOverride[key], "log override", key)}`);
                        }
                    }
                    if (supported) {
                        for (let key in supported) {
                            if (key.indexOf("=") >= 0) throw new Error(`Invalid supported: ${key}`);
                            const value = supported[key];
                            if (typeof value !== "boolean") throw new Error(`Expected value for supported ${quote(key)} to be a boolean, got ${typeof value} instead`);
                            flags.push(`--supported:${key}=${value}`);
                        }
                    }
                    if (pure) for (let fn of pure) flags.push(`--pure:${validateStringValue(fn, "pure")}`);
                    if (keepNames) flags.push(`--keep-names`);
                }
                function flagsForBuildOptions(callName, options, isTTY, logLevelDefault, writeDefault) {
                    var _a;
                    let flags = [];
                    let entries = [];
                    let keys = Object.create(null);
                    let stdinContents = null;
                    let stdinResolveDir = null;
                    pushLogFlags(flags, options, keys, isTTY, logLevelDefault);
                    pushCommonFlags(flags, options, keys);
                    let sourcemap = getFlag(options, keys, "sourcemap", mustBeStringOrBoolean);
                    let bundle = getFlag(options, keys, "bundle", mustBeBoolean);
                    let splitting = getFlag(options, keys, "splitting", mustBeBoolean);
                    let preserveSymlinks = getFlag(options, keys, "preserveSymlinks", mustBeBoolean);
                    let metafile = getFlag(options, keys, "metafile", mustBeBoolean);
                    let outfile = getFlag(options, keys, "outfile", mustBeString);
                    let outdir = getFlag(options, keys, "outdir", mustBeString);
                    let outbase = getFlag(options, keys, "outbase", mustBeString);
                    let tsconfig = getFlag(options, keys, "tsconfig", mustBeString);
                    let resolveExtensions = getFlag(options, keys, "resolveExtensions", mustBeArrayOfStrings);
                    let nodePathsInput = getFlag(options, keys, "nodePaths", mustBeArrayOfStrings);
                    let mainFields = getFlag(options, keys, "mainFields", mustBeArrayOfStrings);
                    let conditions = getFlag(options, keys, "conditions", mustBeArrayOfStrings);
                    let external = getFlag(options, keys, "external", mustBeArrayOfStrings);
                    let packages = getFlag(options, keys, "packages", mustBeString);
                    let alias = getFlag(options, keys, "alias", mustBeObject);
                    let loader = getFlag(options, keys, "loader", mustBeObject);
                    let outExtension = getFlag(options, keys, "outExtension", mustBeObject);
                    let publicPath = getFlag(options, keys, "publicPath", mustBeString);
                    let entryNames = getFlag(options, keys, "entryNames", mustBeString);
                    let chunkNames = getFlag(options, keys, "chunkNames", mustBeString);
                    let assetNames = getFlag(options, keys, "assetNames", mustBeString);
                    let inject = getFlag(options, keys, "inject", mustBeArrayOfStrings);
                    let banner = getFlag(options, keys, "banner", mustBeObject);
                    let footer = getFlag(options, keys, "footer", mustBeObject);
                    let entryPoints = getFlag(options, keys, "entryPoints", mustBeEntryPoints);
                    let absWorkingDir = getFlag(options, keys, "absWorkingDir", mustBeString);
                    let stdin = getFlag(options, keys, "stdin", mustBeObject);
                    let write = (_a = getFlag(options, keys, "write", mustBeBoolean)) != null ? _a : writeDefault;
                    let allowOverwrite = getFlag(options, keys, "allowOverwrite", mustBeBoolean);
                    let mangleCache = getFlag(options, keys, "mangleCache", mustBeObject);
                    keys.plugins = true;
                    checkForInvalidFlags(options, keys, `in ${callName}() call`);
                    if (sourcemap) flags.push(`--sourcemap${sourcemap === true ? "" : `=${sourcemap}`}`);
                    if (bundle) flags.push("--bundle");
                    if (allowOverwrite) flags.push("--allow-overwrite");
                    if (splitting) flags.push("--splitting");
                    if (preserveSymlinks) flags.push("--preserve-symlinks");
                    if (metafile) flags.push(`--metafile`);
                    if (outfile) flags.push(`--outfile=${outfile}`);
                    if (outdir) flags.push(`--outdir=${outdir}`);
                    if (outbase) flags.push(`--outbase=${outbase}`);
                    if (tsconfig) flags.push(`--tsconfig=${tsconfig}`);
                    if (packages) flags.push(`--packages=${packages}`);
                    if (resolveExtensions) flags.push(`--resolve-extensions=${validateAndJoinStringArray(resolveExtensions, "resolve extension")}`);
                    if (publicPath) flags.push(`--public-path=${publicPath}`);
                    if (entryNames) flags.push(`--entry-names=${entryNames}`);
                    if (chunkNames) flags.push(`--chunk-names=${chunkNames}`);
                    if (assetNames) flags.push(`--asset-names=${assetNames}`);
                    if (mainFields) flags.push(`--main-fields=${validateAndJoinStringArray(mainFields, "main field")}`);
                    if (conditions) flags.push(`--conditions=${validateAndJoinStringArray(conditions, "condition")}`);
                    if (external) for (let name of external) flags.push(`--external:${validateStringValue(name, "external")}`);
                    if (alias) {
                        for (let old in alias) {
                            if (old.indexOf("=") >= 0) throw new Error(`Invalid package name in alias: ${old}`);
                            flags.push(`--alias:${old}=${validateStringValue(alias[old], "alias", old)}`);
                        }
                    }
                    if (banner) {
                        for (let type in banner) {
                            if (type.indexOf("=") >= 0) throw new Error(`Invalid banner file type: ${type}`);
                            flags.push(`--banner:${type}=${validateStringValue(banner[type], "banner", type)}`);
                        }
                    }
                    if (footer) {
                        for (let type in footer) {
                            if (type.indexOf("=") >= 0) throw new Error(`Invalid footer file type: ${type}`);
                            flags.push(`--footer:${type}=${validateStringValue(footer[type], "footer", type)}`);
                        }
                    }
                    if (inject) for (let path of inject) flags.push(`--inject:${validateStringValue(path, "inject")}`);
                    if (loader) {
                        for (let ext in loader) {
                            if (ext.indexOf("=") >= 0) throw new Error(`Invalid loader extension: ${ext}`);
                            flags.push(`--loader:${ext}=${validateStringValue(loader[ext], "loader", ext)}`);
                        }
                    }
                    if (outExtension) {
                        for (let ext in outExtension) {
                            if (ext.indexOf("=") >= 0) throw new Error(`Invalid out extension: ${ext}`);
                            flags.push(`--out-extension:${ext}=${validateStringValue(outExtension[ext], "out extension", ext)}`);
                        }
                    }
                    if (entryPoints) {
                        if (Array.isArray(entryPoints)) {
                            for (let i = 0, n = entryPoints.length; i < n; i++) {
                                let entryPoint = entryPoints[i];
                                if (typeof entryPoint === "object" && entryPoint !== null) {
                                    let entryPointKeys = Object.create(null);
                                    let input = getFlag(entryPoint, entryPointKeys, "in", mustBeString);
                                    let output = getFlag(entryPoint, entryPointKeys, "out", mustBeString);
                                    checkForInvalidFlags(entryPoint, entryPointKeys, "in entry point at index " + i);
                                    if (input === void 0) throw new Error('Missing property "in" for entry point at index ' + i);
                                    if (output === void 0) throw new Error('Missing property "out" for entry point at index ' + i);
                                    entries.push([ output, input ]);
                                } else {
                                    entries.push([ "", validateStringValue(entryPoint, "entry point at index " + i) ]);
                                }
                            }
                        } else {
                            for (let key in entryPoints) {
                                entries.push([ key, validateStringValue(entryPoints[key], "entry point", key) ]);
                            }
                        }
                    }
                    if (stdin) {
                        let stdinKeys = Object.create(null);
                        let contents = getFlag(stdin, stdinKeys, "contents", mustBeStringOrUint8Array);
                        let resolveDir = getFlag(stdin, stdinKeys, "resolveDir", mustBeString);
                        let sourcefile = getFlag(stdin, stdinKeys, "sourcefile", mustBeString);
                        let loader2 = getFlag(stdin, stdinKeys, "loader", mustBeString);
                        checkForInvalidFlags(stdin, stdinKeys, 'in "stdin" object');
                        if (sourcefile) flags.push(`--sourcefile=${sourcefile}`);
                        if (loader2) flags.push(`--loader=${loader2}`);
                        if (resolveDir) stdinResolveDir = resolveDir;
                        if (typeof contents === "string") stdinContents = encodeUTF8(contents); else if (contents instanceof Uint8Array) stdinContents = contents;
                    }
                    let nodePaths = [];
                    if (nodePathsInput) {
                        for (let value of nodePathsInput) {
                            value += "";
                            nodePaths.push(value);
                        }
                    }
                    return {
                        entries: entries,
                        flags: flags,
                        write: write,
                        stdinContents: stdinContents,
                        stdinResolveDir: stdinResolveDir,
                        absWorkingDir: absWorkingDir,
                        nodePaths: nodePaths,
                        mangleCache: validateMangleCache(mangleCache)
                    };
                }
                function flagsForTransformOptions(callName, options, isTTY, logLevelDefault) {
                    let flags = [];
                    let keys = Object.create(null);
                    pushLogFlags(flags, options, keys, isTTY, logLevelDefault);
                    pushCommonFlags(flags, options, keys);
                    let sourcemap = getFlag(options, keys, "sourcemap", mustBeStringOrBoolean);
                    let sourcefile = getFlag(options, keys, "sourcefile", mustBeString);
                    let loader = getFlag(options, keys, "loader", mustBeString);
                    let banner = getFlag(options, keys, "banner", mustBeString);
                    let footer = getFlag(options, keys, "footer", mustBeString);
                    let mangleCache = getFlag(options, keys, "mangleCache", mustBeObject);
                    checkForInvalidFlags(options, keys, `in ${callName}() call`);
                    if (sourcemap) flags.push(`--sourcemap=${sourcemap === true ? "external" : sourcemap}`);
                    if (sourcefile) flags.push(`--sourcefile=${sourcefile}`);
                    if (loader) flags.push(`--loader=${loader}`);
                    if (banner) flags.push(`--banner=${banner}`);
                    if (footer) flags.push(`--footer=${footer}`);
                    return {
                        flags: flags,
                        mangleCache: validateMangleCache(mangleCache)
                    };
                }
                function createChannel(streamIn) {
                    const requestCallbacksByKey = {};
                    const closeData = {
                        didClose: false,
                        reason: ""
                    };
                    let responseCallbacks = {};
                    let nextRequestID = 0;
                    let nextBuildKey = 0;
                    let stdout = new Uint8Array(16 * 1024);
                    let stdoutUsed = 0;
                    let readFromStdout = chunk => {
                        let limit = stdoutUsed + chunk.length;
                        if (limit > stdout.length) {
                            let swap = new Uint8Array(limit * 2);
                            swap.set(stdout);
                            stdout = swap;
                        }
                        stdout.set(chunk, stdoutUsed);
                        stdoutUsed += chunk.length;
                        let offset = 0;
                        while (offset + 4 <= stdoutUsed) {
                            let length = readUInt32LE(stdout, offset);
                            if (offset + 4 + length > stdoutUsed) {
                                break;
                            }
                            offset += 4;
                            handleIncomingPacket(stdout.subarray(offset, offset + length));
                            offset += length;
                        }
                        if (offset > 0) {
                            stdout.copyWithin(0, offset, stdoutUsed);
                            stdoutUsed -= offset;
                        }
                    };
                    let afterClose = error => {
                        closeData.didClose = true;
                        if (error) closeData.reason = ": " + (error.message || error);
                        const text = "The service was stopped" + closeData.reason;
                        for (let id in responseCallbacks) {
                            responseCallbacks[id](text, null);
                        }
                        responseCallbacks = {};
                    };
                    let sendRequest = (refs, value, callback) => {
                        if (closeData.didClose) return callback("The service is no longer running" + closeData.reason, null);
                        let id = nextRequestID++;
                        responseCallbacks[id] = (error, response) => {
                            try {
                                callback(error, response);
                            } finally {
                                if (refs) refs.unref();
                            }
                        };
                        if (refs) refs.ref();
                        streamIn.writeToStdin(encodePacket({
                            id: id,
                            isRequest: true,
                            value: value
                        }));
                    };
                    let sendResponse = (id, value) => {
                        if (closeData.didClose) throw new Error("The service is no longer running" + closeData.reason);
                        streamIn.writeToStdin(encodePacket({
                            id: id,
                            isRequest: false,
                            value: value
                        }));
                    };
                    let handleRequest = (id, request) => __async(null, null, function*() {
                        try {
                            if (request.command === "ping") {
                                sendResponse(id, {});
                                return;
                            }
                            if (typeof request.key === "number") {
                                const requestCallbacks = requestCallbacksByKey[request.key];
                                if (!requestCallbacks) {
                                    return;
                                }
                                const callback = requestCallbacks[request.command];
                                if (callback) {
                                    yield callback(id, request);
                                    return;
                                }
                            }
                            throw new Error(`Invalid command: ` + request.command);
                        } catch (e) {
                            const errors = [ extractErrorMessageV8(e, streamIn, null, void 0, "") ];
                            try {
                                sendResponse(id, {
                                    errors: errors
                                });
                            } catch (e2) {}
                        }
                    });
                    let isFirstPacket = true;
                    let handleIncomingPacket = bytes => {
                        if (isFirstPacket) {
                            isFirstPacket = false;
                            let binaryVersion = String.fromCharCode(...bytes);
                            if (binaryVersion !== "0.28.2") {
                                throw new Error(`Cannot start service: Host version "${"0.28.2"}" does not match binary version ${quote(binaryVersion)}`);
                            }
                            return;
                        }
                        let packet = decodePacket(bytes);
                        if (packet.isRequest) {
                            handleRequest(packet.id, packet.value);
                        } else {
                            let callback = responseCallbacks[packet.id];
                            delete responseCallbacks[packet.id];
                            if (packet.value.error) callback(packet.value.error, {}); else callback(null, packet.value);
                        }
                    };
                    let buildOrContext = ({callName: callName, refs: refs, options: options, isTTY: isTTY, defaultWD: defaultWD, callback: callback}) => {
                        let refCount = 0;
                        const buildKey = nextBuildKey++;
                        const requestCallbacks = {};
                        const buildRefs = {
                            ref() {
                                if (++refCount === 1) {
                                    if (refs) refs.ref();
                                }
                            },
                            unref() {
                                if (--refCount === 0) {
                                    delete requestCallbacksByKey[buildKey];
                                    if (refs) refs.unref();
                                }
                            }
                        };
                        requestCallbacksByKey[buildKey] = requestCallbacks;
                        buildRefs.ref();
                        buildOrContextImpl(callName, buildKey, sendRequest, sendResponse, buildRefs, streamIn, requestCallbacks, options, isTTY, defaultWD, (err, res) => {
                            try {
                                callback(err, res);
                            } finally {
                                buildRefs.unref();
                            }
                        });
                    };
                    let transform2 = ({callName: callName, refs: refs, input: input, options: options, isTTY: isTTY, fs: fs, callback: callback}) => {
                        const details = createObjectStash();
                        let start = inputPath => {
                            try {
                                if (typeof input !== "string" && !(input instanceof Uint8Array)) throw new Error('The input to "transform" must be a string or a Uint8Array');
                                let {flags: flags, mangleCache: mangleCache} = flagsForTransformOptions(callName, options, isTTY, transformLogLevelDefault);
                                let request = {
                                    command: "transform",
                                    flags: flags,
                                    inputFS: inputPath !== null,
                                    input: inputPath !== null ? encodeUTF8(inputPath) : typeof input === "string" ? encodeUTF8(input) : input
                                };
                                if (mangleCache) request.mangleCache = mangleCache;
                                sendRequest(refs, request, (error, response) => {
                                    if (error) return callback(new Error(error), null);
                                    let errors = replaceDetailsInMessages(response.errors, details);
                                    let warnings = replaceDetailsInMessages(response.warnings, details);
                                    let outstanding = 1;
                                    let next = () => {
                                        if (--outstanding === 0) {
                                            let result = {
                                                warnings: warnings,
                                                code: response.code,
                                                map: response.map,
                                                mangleCache: void 0,
                                                legalComments: void 0
                                            };
                                            if ("legalComments" in response) result.legalComments = response == null ? void 0 : response.legalComments;
                                            if (response.mangleCache) result.mangleCache = response == null ? void 0 : response.mangleCache;
                                            callback(null, result);
                                        }
                                    };
                                    if (errors.length > 0) return callback(failureErrorWithLog("Transform failed", errors, warnings), null);
                                    if (response.codeFS) {
                                        outstanding++;
                                        fs.readFile(response.code, (err, contents) => {
                                            if (err !== null) {
                                                callback(err, null);
                                            } else {
                                                response.code = contents;
                                                next();
                                            }
                                        });
                                    }
                                    if (response.mapFS) {
                                        outstanding++;
                                        fs.readFile(response.map, (err, contents) => {
                                            if (err !== null) {
                                                callback(err, null);
                                            } else {
                                                response.map = contents;
                                                next();
                                            }
                                        });
                                    }
                                    next();
                                });
                            } catch (e) {
                                let flags = [];
                                try {
                                    pushLogFlags(flags, options, {}, isTTY, transformLogLevelDefault);
                                } catch (e2) {}
                                const error = extractErrorMessageV8(e, streamIn, details, void 0, "");
                                sendRequest(refs, {
                                    command: "error",
                                    flags: flags,
                                    error: error
                                }, () => {
                                    error.detail = details.load(error.detail);
                                    callback(failureErrorWithLog("Transform failed", [ error ], []), null);
                                });
                            }
                        };
                        if ((typeof input === "string" || input instanceof Uint8Array) && input.length > 1024 * 1024) {
                            let next = start;
                            start = () => fs.writeFile(input, next);
                        }
                        start(null);
                    };
                    let formatMessages2 = ({callName: callName, refs: refs, messages: messages, options: options, callback: callback}) => {
                        if (!options) throw new Error(`Missing second argument in ${callName}() call`);
                        let keys = {};
                        let kind = getFlag(options, keys, "kind", mustBeString);
                        let color = getFlag(options, keys, "color", mustBeBoolean);
                        let terminalWidth = getFlag(options, keys, "terminalWidth", mustBeInteger);
                        let logStyle = getFlag(options, keys, "logStyle", mustBeString);
                        checkForInvalidFlags(options, keys, `in ${callName}() call`);
                        if (kind === void 0) throw new Error(`Missing "kind" in ${callName}() call`);
                        if (kind !== "error" && kind !== "warning") throw new Error(`Expected "kind" to be "error" or "warning" in ${callName}() call`);
                        let request = {
                            command: "format-msgs",
                            messages: sanitizeMessages(messages, "messages", null, "", terminalWidth),
                            isWarning: kind === "warning"
                        };
                        if (color !== void 0) request.color = color;
                        if (terminalWidth !== void 0) request.terminalWidth = terminalWidth;
                        if (logStyle !== void 0) request.logStyle = logStyle;
                        sendRequest(refs, request, (error, response) => {
                            if (error) return callback(new Error(error), null);
                            callback(null, response.messages);
                        });
                    };
                    let analyzeMetafile2 = ({callName: callName, refs: refs, metafile: metafile, options: options, callback: callback}) => {
                        if (options === void 0) options = {};
                        let keys = {};
                        let color = getFlag(options, keys, "color", mustBeBoolean);
                        let verbose = getFlag(options, keys, "verbose", mustBeBoolean);
                        checkForInvalidFlags(options, keys, `in ${callName}() call`);
                        let request = {
                            command: "analyze-metafile",
                            metafile: metafile
                        };
                        if (color !== void 0) request.color = color;
                        if (verbose !== void 0) request.verbose = verbose;
                        sendRequest(refs, request, (error, response) => {
                            if (error) return callback(new Error(error), null);
                            callback(null, response.result);
                        });
                    };
                    return {
                        readFromStdout: readFromStdout,
                        afterClose: afterClose,
                        service: {
                            buildOrContext: buildOrContext,
                            transform: transform2,
                            formatMessages: formatMessages2,
                            analyzeMetafile: analyzeMetafile2
                        }
                    };
                }
                function buildOrContextImpl(callName, buildKey, sendRequest, sendResponse, refs, streamIn, requestCallbacks, options, isTTY, defaultWD, callback) {
                    const details = createObjectStash();
                    const isContext = callName === "context";
                    const handleError = (e, pluginName) => {
                        const flags = [];
                        try {
                            pushLogFlags(flags, options, {}, isTTY, buildLogLevelDefault);
                        } catch (e2) {}
                        const message = extractErrorMessageV8(e, streamIn, details, void 0, pluginName);
                        sendRequest(refs, {
                            command: "error",
                            flags: flags,
                            error: message
                        }, () => {
                            message.detail = details.load(message.detail);
                            callback(failureErrorWithLog(isContext ? "Context failed" : "Build failed", [ message ], []), null);
                        });
                    };
                    let plugins;
                    if (typeof options === "object") {
                        const value = options.plugins;
                        if (value !== void 0) {
                            if (!Array.isArray(value)) return handleError(new Error(`"plugins" must be an array`), "");
                            plugins = value;
                        }
                    }
                    if (plugins && plugins.length > 0) {
                        if (streamIn.isSync) return handleError(new Error("Cannot use plugins in synchronous API calls"), "");
                        handlePlugins(buildKey, sendRequest, sendResponse, refs, streamIn, requestCallbacks, options, plugins, details).then(result => {
                            if (!result.ok) return handleError(result.error, result.pluginName);
                            try {
                                buildOrContextContinue(result.requestPlugins, result.runOnEndCallbacks, result.scheduleOnDisposeCallbacks);
                            } catch (e) {
                                handleError(e, "");
                            }
                        }, e => handleError(e, ""));
                        return;
                    }
                    try {
                        buildOrContextContinue(null, (result, done) => done([], []), () => {});
                    } catch (e) {
                        handleError(e, "");
                    }
                    function buildOrContextContinue(requestPlugins, runOnEndCallbacks, scheduleOnDisposeCallbacks) {
                        const writeDefault = streamIn.hasFS;
                        const {entries: entries, flags: flags, write: write, stdinContents: stdinContents, stdinResolveDir: stdinResolveDir, absWorkingDir: absWorkingDir, nodePaths: nodePaths, mangleCache: mangleCache} = flagsForBuildOptions(callName, options, isTTY, buildLogLevelDefault, writeDefault);
                        if (write && !streamIn.hasFS) throw new Error(`The "write" option is unavailable in this environment`);
                        const request = {
                            command: "build",
                            key: buildKey,
                            entries: entries,
                            flags: flags,
                            write: write,
                            stdinContents: stdinContents,
                            stdinResolveDir: stdinResolveDir,
                            absWorkingDir: absWorkingDir || defaultWD,
                            nodePaths: nodePaths,
                            context: isContext
                        };
                        if (requestPlugins) request.plugins = requestPlugins;
                        if (mangleCache) request.mangleCache = mangleCache;
                        const buildResponseToResult = (response, callback2) => {
                            const result = {
                                errors: replaceDetailsInMessages(response.errors, details),
                                warnings: replaceDetailsInMessages(response.warnings, details),
                                outputFiles: void 0,
                                metafile: void 0,
                                mangleCache: void 0
                            };
                            const originalErrors = result.errors.slice();
                            const originalWarnings = result.warnings.slice();
                            if (response.outputFiles) result.outputFiles = response.outputFiles.map(convertOutputFiles);
                            if (response.metafile && response.metafile.length) result.metafile = parseJSON(response.metafile);
                            if (response.mangleCache) result.mangleCache = response.mangleCache;
                            if (response.writeToStdout !== void 0) console.log(decodeUTF8(response.writeToStdout).replace(/\n$/, ""));
                            runOnEndCallbacks(result, (onEndErrors, onEndWarnings) => {
                                if (originalErrors.length > 0 || onEndErrors.length > 0) {
                                    const error = failureErrorWithLog("Build failed", originalErrors.concat(onEndErrors), originalWarnings.concat(onEndWarnings));
                                    return callback2(error, null, onEndErrors, onEndWarnings);
                                }
                                callback2(null, result, onEndErrors, onEndWarnings);
                            });
                        };
                        let latestResultPromise;
                        let provideLatestResult;
                        if (isContext) requestCallbacks["on-end"] = (id, request2) => new Promise(resolve => {
                            buildResponseToResult(request2, (err, result, onEndErrors, onEndWarnings) => {
                                const response = {
                                    errors: onEndErrors,
                                    warnings: onEndWarnings
                                };
                                if (provideLatestResult) provideLatestResult(err, result);
                                latestResultPromise = void 0;
                                provideLatestResult = void 0;
                                sendResponse(id, response);
                                resolve();
                            });
                        });
                        sendRequest(refs, request, (error, response) => {
                            if (error) return callback(new Error(error), null);
                            if (!isContext) {
                                return buildResponseToResult(response, (err, res) => {
                                    scheduleOnDisposeCallbacks();
                                    return callback(err, res);
                                });
                            }
                            if (response.errors.length > 0) {
                                return callback(failureErrorWithLog("Context failed", response.errors, response.warnings), null);
                            }
                            let didDispose = false;
                            const result = {
                                rebuild: () => {
                                    if (!latestResultPromise) latestResultPromise = new Promise((resolve, reject) => {
                                        let settlePromise;
                                        provideLatestResult = (err, result2) => {
                                            if (!settlePromise) settlePromise = () => err ? reject(err) : resolve(result2);
                                        };
                                        const triggerAnotherBuild = () => {
                                            const request2 = {
                                                command: "rebuild",
                                                key: buildKey
                                            };
                                            sendRequest(refs, request2, (error2, response2) => {
                                                if (error2) {
                                                    reject(new Error(error2));
                                                } else if (settlePromise) {
                                                    settlePromise();
                                                } else {
                                                    triggerAnotherBuild();
                                                }
                                            });
                                        };
                                        triggerAnotherBuild();
                                    });
                                    return latestResultPromise;
                                },
                                watch: (options2 = {}) => new Promise((resolve, reject) => {
                                    if (!streamIn.hasFS) throw new Error(`Cannot use the "watch" API in this environment`);
                                    const keys = {};
                                    const delay = getFlag(options2, keys, "delay", mustBeInteger);
                                    checkForInvalidFlags(options2, keys, `in watch() call`);
                                    const request2 = {
                                        command: "watch",
                                        key: buildKey
                                    };
                                    if (delay) request2.delay = delay;
                                    sendRequest(refs, request2, error2 => {
                                        if (error2) reject(new Error(error2)); else resolve(void 0);
                                    });
                                }),
                                serve: (options2 = {}) => new Promise((resolve, reject) => {
                                    if (!streamIn.hasFS) throw new Error(`Cannot use the "serve" API in this environment`);
                                    const keys = {};
                                    const port = getFlag(options2, keys, "port", mustBeValidPortNumber);
                                    const host = getFlag(options2, keys, "host", mustBeString);
                                    const servedir = getFlag(options2, keys, "servedir", mustBeString);
                                    const keyfile = getFlag(options2, keys, "keyfile", mustBeString);
                                    const certfile = getFlag(options2, keys, "certfile", mustBeString);
                                    const fallback = getFlag(options2, keys, "fallback", mustBeString);
                                    const cors = getFlag(options2, keys, "cors", mustBeObject);
                                    const onRequest = getFlag(options2, keys, "onRequest", mustBeFunction);
                                    checkForInvalidFlags(options2, keys, `in serve() call`);
                                    const request2 = {
                                        command: "serve",
                                        key: buildKey,
                                        onRequest: !!onRequest
                                    };
                                    if (port !== void 0) request2.port = port;
                                    if (host !== void 0) request2.host = host;
                                    if (servedir !== void 0) request2.servedir = servedir;
                                    if (keyfile !== void 0) request2.keyfile = keyfile;
                                    if (certfile !== void 0) request2.certfile = certfile;
                                    if (fallback !== void 0) request2.fallback = fallback;
                                    if (cors) {
                                        const corsKeys = {};
                                        const origin = getFlag(cors, corsKeys, "origin", mustBeStringOrArrayOfStrings);
                                        checkForInvalidFlags(cors, corsKeys, `on "cors" object`);
                                        if (Array.isArray(origin)) request2.corsOrigin = origin; else if (origin !== void 0) request2.corsOrigin = [ origin ];
                                    }
                                    sendRequest(refs, request2, (error2, response2) => {
                                        if (error2) return reject(new Error(error2));
                                        if (onRequest) {
                                            requestCallbacks["serve-request"] = (id, request3) => {
                                                onRequest(request3.args);
                                                sendResponse(id, {});
                                            };
                                        }
                                        resolve(response2);
                                    });
                                }),
                                cancel: () => new Promise(resolve => {
                                    if (didDispose) return resolve();
                                    const request2 = {
                                        command: "cancel",
                                        key: buildKey
                                    };
                                    sendRequest(refs, request2, () => {
                                        resolve();
                                    });
                                }),
                                dispose: () => new Promise(resolve => {
                                    if (didDispose) return resolve();
                                    didDispose = true;
                                    const request2 = {
                                        command: "dispose",
                                        key: buildKey
                                    };
                                    sendRequest(refs, request2, () => {
                                        resolve();
                                        scheduleOnDisposeCallbacks();
                                        refs.unref();
                                    });
                                })
                            };
                            refs.ref();
                            callback(null, result);
                        });
                    }
                }
                var handlePlugins = (buildKey, sendRequest, sendResponse, refs, streamIn, requestCallbacks, initialOptions, plugins, details) => __async(null, null, function*() {
                    let onStartCallbacks = [];
                    let onEndCallbacks = [];
                    let onResolveCallbacks = {};
                    let onLoadCallbacks = {};
                    let onDisposeCallbacks = [];
                    let nextCallbackID = 0;
                    let i = 0;
                    let requestPlugins = [];
                    let isSetupDone = false;
                    plugins = [ ...plugins ];
                    for (let item of plugins) {
                        let keys = {};
                        if (typeof item !== "object") throw new Error(`Plugin at index ${i} must be an object`);
                        const name = getFlag(item, keys, "name", mustBeString);
                        if (typeof name !== "string" || name === "") throw new Error(`Plugin at index ${i} is missing a name`);
                        try {
                            let setup = getFlag(item, keys, "setup", mustBeFunction);
                            if (typeof setup !== "function") throw new Error(`Plugin is missing a setup function`);
                            checkForInvalidFlags(item, keys, `on plugin ${quote(name)}`);
                            let plugin = {
                                name: name,
                                onStart: false,
                                onEnd: false,
                                onResolve: [],
                                onLoad: []
                            };
                            i++;
                            let resolve = (path, options = {}) => {
                                if (!isSetupDone) throw new Error('Cannot call "resolve" before plugin setup has completed');
                                if (typeof path !== "string") throw new Error(`The path to resolve must be a string`);
                                let keys2 = Object.create(null);
                                let pluginName = getFlag(options, keys2, "pluginName", mustBeString);
                                let importer = getFlag(options, keys2, "importer", mustBeString);
                                let namespace = getFlag(options, keys2, "namespace", mustBeString);
                                let resolveDir = getFlag(options, keys2, "resolveDir", mustBeString);
                                let kind = getFlag(options, keys2, "kind", mustBeString);
                                let pluginData = getFlag(options, keys2, "pluginData", canBeAnything);
                                let importAttributes = getFlag(options, keys2, "with", mustBeObject);
                                checkForInvalidFlags(options, keys2, "in resolve() call");
                                return new Promise((resolve2, reject) => {
                                    const request = {
                                        command: "resolve",
                                        path: path,
                                        key: buildKey,
                                        pluginName: name
                                    };
                                    if (pluginName != null) request.pluginName = pluginName;
                                    if (importer != null) request.importer = importer;
                                    if (namespace != null) request.namespace = namespace;
                                    if (resolveDir != null) request.resolveDir = resolveDir;
                                    if (kind != null) request.kind = kind; else throw new Error(`Must specify "kind" when calling "resolve"`);
                                    if (pluginData != null) request.pluginData = details.store(pluginData);
                                    if (importAttributes != null) request.with = sanitizeStringMap(importAttributes, "with");
                                    sendRequest(refs, request, (error, response) => {
                                        if (error !== null) reject(new Error(error)); else resolve2({
                                            errors: replaceDetailsInMessages(response.errors, details),
                                            warnings: replaceDetailsInMessages(response.warnings, details),
                                            path: response.path,
                                            external: response.external,
                                            sideEffects: response.sideEffects,
                                            namespace: response.namespace,
                                            suffix: response.suffix,
                                            pluginData: details.load(response.pluginData)
                                        });
                                    });
                                });
                            };
                            let promise = setup({
                                initialOptions: initialOptions,
                                resolve: resolve,
                                onStart(callback) {
                                    let registeredText = `This error came from the "onStart" callback registered here:`;
                                    let registeredNote = extractCallerV8(new Error(registeredText), streamIn, "onStart");
                                    onStartCallbacks.push({
                                        name: name,
                                        callback: callback,
                                        note: registeredNote
                                    });
                                    plugin.onStart = true;
                                },
                                onEnd(callback) {
                                    let registeredText = `This error came from the "onEnd" callback registered here:`;
                                    let registeredNote = extractCallerV8(new Error(registeredText), streamIn, "onEnd");
                                    onEndCallbacks.push({
                                        name: name,
                                        callback: callback,
                                        note: registeredNote
                                    });
                                    plugin.onEnd = true;
                                },
                                onResolve(options, callback) {
                                    let registeredText = `This error came from the "onResolve" callback registered here:`;
                                    let registeredNote = extractCallerV8(new Error(registeredText), streamIn, "onResolve");
                                    let keys2 = {};
                                    let filter = getFlag(options, keys2, "filter", mustBeRegExp);
                                    let namespace = getFlag(options, keys2, "namespace", mustBeString);
                                    checkForInvalidFlags(options, keys2, `in onResolve() call for plugin ${quote(name)}`);
                                    if (filter == null) throw new Error(`onResolve() call is missing a filter`);
                                    let id = nextCallbackID++;
                                    onResolveCallbacks[id] = {
                                        name: name,
                                        callback: callback,
                                        note: registeredNote
                                    };
                                    plugin.onResolve.push({
                                        id: id,
                                        filter: jsRegExpToGoRegExp(filter),
                                        namespace: namespace || ""
                                    });
                                },
                                onLoad(options, callback) {
                                    let registeredText = `This error came from the "onLoad" callback registered here:`;
                                    let registeredNote = extractCallerV8(new Error(registeredText), streamIn, "onLoad");
                                    let keys2 = {};
                                    let filter = getFlag(options, keys2, "filter", mustBeRegExp);
                                    let namespace = getFlag(options, keys2, "namespace", mustBeString);
                                    checkForInvalidFlags(options, keys2, `in onLoad() call for plugin ${quote(name)}`);
                                    if (filter == null) throw new Error(`onLoad() call is missing a filter`);
                                    let id = nextCallbackID++;
                                    onLoadCallbacks[id] = {
                                        name: name,
                                        callback: callback,
                                        note: registeredNote
                                    };
                                    plugin.onLoad.push({
                                        id: id,
                                        filter: jsRegExpToGoRegExp(filter),
                                        namespace: namespace || ""
                                    });
                                },
                                onDispose(callback) {
                                    onDisposeCallbacks.push(callback);
                                },
                                esbuild: streamIn.esbuild
                            });
                            if (promise) yield promise;
                            requestPlugins.push(plugin);
                        } catch (e) {
                            return {
                                ok: false,
                                error: e,
                                pluginName: name
                            };
                        }
                    }
                    requestCallbacks["on-start"] = (id, request) => __async(null, null, function*() {
                        details.clear();
                        let response = {
                            errors: [],
                            warnings: []
                        };
                        yield Promise.all(onStartCallbacks.map(_0 => __async(null, [ _0 ], function*({name: name, callback: callback, note: note}) {
                            try {
                                let result = yield callback();
                                if (result != null) {
                                    if (typeof result !== "object") throw new Error(`Expected onStart() callback in plugin ${quote(name)} to return an object`);
                                    let keys = {};
                                    let errors = getFlag(result, keys, "errors", mustBeArray);
                                    let warnings = getFlag(result, keys, "warnings", mustBeArray);
                                    checkForInvalidFlags(result, keys, `from onStart() callback in plugin ${quote(name)}`);
                                    if (errors != null) response.errors.push(...sanitizeMessages(errors, "errors", details, name, void 0));
                                    if (warnings != null) response.warnings.push(...sanitizeMessages(warnings, "warnings", details, name, void 0));
                                }
                            } catch (e) {
                                response.errors.push(extractErrorMessageV8(e, streamIn, details, note && note(), name));
                            }
                        })));
                        sendResponse(id, response);
                    });
                    requestCallbacks["on-resolve"] = (id, request) => __async(null, null, function*() {
                        let response = {}, name = "", callback, note;
                        for (let id2 of request.ids) {
                            try {
                                ({name: name, callback: callback, note: note} = onResolveCallbacks[id2]);
                                let result = yield callback({
                                    path: request.path,
                                    importer: request.importer,
                                    namespace: request.namespace,
                                    resolveDir: request.resolveDir,
                                    kind: request.kind,
                                    pluginData: details.load(request.pluginData),
                                    with: request.with
                                });
                                if (result != null) {
                                    if (typeof result !== "object") throw new Error(`Expected onResolve() callback in plugin ${quote(name)} to return an object`);
                                    let keys = {};
                                    let pluginName = getFlag(result, keys, "pluginName", mustBeString);
                                    let path = getFlag(result, keys, "path", mustBeString);
                                    let namespace = getFlag(result, keys, "namespace", mustBeString);
                                    let suffix = getFlag(result, keys, "suffix", mustBeString);
                                    let external = getFlag(result, keys, "external", mustBeBoolean);
                                    let sideEffects = getFlag(result, keys, "sideEffects", mustBeBoolean);
                                    let pluginData = getFlag(result, keys, "pluginData", canBeAnything);
                                    let errors = getFlag(result, keys, "errors", mustBeArray);
                                    let warnings = getFlag(result, keys, "warnings", mustBeArray);
                                    let watchFiles = getFlag(result, keys, "watchFiles", mustBeArrayOfStrings);
                                    let watchDirs = getFlag(result, keys, "watchDirs", mustBeArrayOfStrings);
                                    checkForInvalidFlags(result, keys, `from onResolve() callback in plugin ${quote(name)}`);
                                    response.id = id2;
                                    if (pluginName != null) response.pluginName = pluginName;
                                    if (path != null) response.path = path;
                                    if (namespace != null) response.namespace = namespace;
                                    if (suffix != null) response.suffix = suffix;
                                    if (external != null) response.external = external;
                                    if (sideEffects != null) response.sideEffects = sideEffects;
                                    if (pluginData != null) response.pluginData = details.store(pluginData);
                                    if (errors != null) response.errors = sanitizeMessages(errors, "errors", details, name, void 0);
                                    if (warnings != null) response.warnings = sanitizeMessages(warnings, "warnings", details, name, void 0);
                                    if (watchFiles != null) response.watchFiles = sanitizeStringArray(watchFiles, "watchFiles");
                                    if (watchDirs != null) response.watchDirs = sanitizeStringArray(watchDirs, "watchDirs");
                                    break;
                                }
                            } catch (e) {
                                response = {
                                    id: id2,
                                    errors: [ extractErrorMessageV8(e, streamIn, details, note && note(), name) ]
                                };
                                break;
                            }
                        }
                        sendResponse(id, response);
                    });
                    requestCallbacks["on-load"] = (id, request) => __async(null, null, function*() {
                        let response = {}, name = "", callback, note;
                        for (let id2 of request.ids) {
                            try {
                                ({name: name, callback: callback, note: note} = onLoadCallbacks[id2]);
                                let result = yield callback({
                                    path: request.path,
                                    namespace: request.namespace,
                                    suffix: request.suffix,
                                    pluginData: details.load(request.pluginData),
                                    with: request.with
                                });
                                if (result != null) {
                                    if (typeof result !== "object") throw new Error(`Expected onLoad() callback in plugin ${quote(name)} to return an object`);
                                    let keys = {};
                                    let pluginName = getFlag(result, keys, "pluginName", mustBeString);
                                    let contents = getFlag(result, keys, "contents", mustBeStringOrUint8Array);
                                    let resolveDir = getFlag(result, keys, "resolveDir", mustBeString);
                                    let pluginData = getFlag(result, keys, "pluginData", canBeAnything);
                                    let loader = getFlag(result, keys, "loader", mustBeString);
                                    let errors = getFlag(result, keys, "errors", mustBeArray);
                                    let warnings = getFlag(result, keys, "warnings", mustBeArray);
                                    let watchFiles = getFlag(result, keys, "watchFiles", mustBeArrayOfStrings);
                                    let watchDirs = getFlag(result, keys, "watchDirs", mustBeArrayOfStrings);
                                    checkForInvalidFlags(result, keys, `from onLoad() callback in plugin ${quote(name)}`);
                                    response.id = id2;
                                    if (pluginName != null) response.pluginName = pluginName;
                                    if (contents instanceof Uint8Array) response.contents = contents; else if (contents != null) response.contents = encodeUTF8(contents);
                                    if (resolveDir != null) response.resolveDir = resolveDir;
                                    if (pluginData != null) response.pluginData = details.store(pluginData);
                                    if (loader != null) response.loader = loader;
                                    if (errors != null) response.errors = sanitizeMessages(errors, "errors", details, name, void 0);
                                    if (warnings != null) response.warnings = sanitizeMessages(warnings, "warnings", details, name, void 0);
                                    if (watchFiles != null) response.watchFiles = sanitizeStringArray(watchFiles, "watchFiles");
                                    if (watchDirs != null) response.watchDirs = sanitizeStringArray(watchDirs, "watchDirs");
                                    break;
                                }
                            } catch (e) {
                                response = {
                                    id: id2,
                                    errors: [ extractErrorMessageV8(e, streamIn, details, note && note(), name) ]
                                };
                                break;
                            }
                        }
                        sendResponse(id, response);
                    });
                    let runOnEndCallbacks = (result, done) => done([], []);
                    if (onEndCallbacks.length > 0) {
                        runOnEndCallbacks = (result, done) => {
                            (() => __async(null, null, function*() {
                                const onEndErrors = [];
                                const onEndWarnings = [];
                                for (const {name: name, callback: callback, note: note} of onEndCallbacks) {
                                    let newErrors;
                                    let newWarnings;
                                    try {
                                        const value = yield callback(result);
                                        if (value != null) {
                                            if (typeof value !== "object") throw new Error(`Expected onEnd() callback in plugin ${quote(name)} to return an object`);
                                            let keys = {};
                                            let errors = getFlag(value, keys, "errors", mustBeArray);
                                            let warnings = getFlag(value, keys, "warnings", mustBeArray);
                                            checkForInvalidFlags(value, keys, `from onEnd() callback in plugin ${quote(name)}`);
                                            if (errors != null) newErrors = sanitizeMessages(errors, "errors", details, name, void 0);
                                            if (warnings != null) newWarnings = sanitizeMessages(warnings, "warnings", details, name, void 0);
                                        }
                                    } catch (e) {
                                        newErrors = [ extractErrorMessageV8(e, streamIn, details, note && note(), name) ];
                                    }
                                    if (newErrors) {
                                        onEndErrors.push(...newErrors);
                                        try {
                                            result.errors.push(...newErrors);
                                        } catch (e) {}
                                    }
                                    if (newWarnings) {
                                        onEndWarnings.push(...newWarnings);
                                        try {
                                            result.warnings.push(...newWarnings);
                                        } catch (e) {}
                                    }
                                }
                                done(onEndErrors, onEndWarnings);
                            }))();
                        };
                    }
                    let scheduleOnDisposeCallbacks = () => {
                        for (const cb of onDisposeCallbacks) {
                            setTimeout(() => cb(), 0);
                        }
                    };
                    isSetupDone = true;
                    return {
                        ok: true,
                        requestPlugins: requestPlugins,
                        runOnEndCallbacks: runOnEndCallbacks,
                        scheduleOnDisposeCallbacks: scheduleOnDisposeCallbacks
                    };
                });
                function createObjectStash() {
                    const map = new Map;
                    let nextID = 0;
                    return {
                        clear() {
                            map.clear();
                        },
                        load(id) {
                            return map.get(id);
                        },
                        store(value) {
                            if (value === void 0) return -1;
                            const id = nextID++;
                            map.set(id, value);
                            return id;
                        }
                    };
                }
                function extractCallerV8(e, streamIn, ident) {
                    let note;
                    let tried = false;
                    return () => {
                        if (tried) return note;
                        tried = true;
                        try {
                            let lines = (e.stack + "").split("\n");
                            lines.splice(1, 1);
                            let location2 = parseStackLinesV8(streamIn, lines, ident);
                            if (location2) {
                                note = {
                                    text: e.message,
                                    location: location2
                                };
                                return note;
                            }
                        } catch (e2) {}
                    };
                }
                function extractErrorMessageV8(e, streamIn, stash, note, pluginName) {
                    let text = "Internal error";
                    let location2 = null;
                    try {
                        text = (e && e.message || e) + "";
                    } catch (e2) {}
                    try {
                        location2 = parseStackLinesV8(streamIn, (e.stack + "").split("\n"), "");
                    } catch (e2) {}
                    return {
                        id: "",
                        pluginName: pluginName,
                        text: text,
                        location: location2,
                        notes: note ? [ note ] : [],
                        detail: stash ? stash.store(e) : -1
                    };
                }
                function parseStackLinesV8(streamIn, lines, ident) {
                    let at = "    at ";
                    if (streamIn.readFileSync && !lines[0].startsWith(at) && lines[1].startsWith(at)) {
                        for (let i = 1; i < lines.length; i++) {
                            let line = lines[i];
                            if (!line.startsWith(at)) continue;
                            line = line.slice(at.length);
                            while (true) {
                                let match = /^(?:new |async )?\S+ \((.*)\)$/.exec(line);
                                if (match) {
                                    line = match[1];
                                    continue;
                                }
                                match = /^eval at \S+ \((.*)\)(?:, \S+:\d+:\d+)?$/.exec(line);
                                if (match) {
                                    line = match[1];
                                    continue;
                                }
                                match = /^(\S+):(\d+):(\d+)$/.exec(line);
                                if (match) {
                                    let contents;
                                    try {
                                        contents = streamIn.readFileSync(match[1], "utf8");
                                    } catch (e) {
                                        break;
                                    }
                                    let lineText = contents.split(/\r\n|\r|\n|\u2028|\u2029/)[+match[2] - 1] || "";
                                    let column = +match[3] - 1;
                                    let length = lineText.slice(column, column + ident.length) === ident ? ident.length : 0;
                                    return {
                                        file: match[1],
                                        namespace: "file",
                                        line: +match[2],
                                        column: encodeUTF8(lineText.slice(0, column)).length,
                                        length: encodeUTF8(lineText.slice(column, column + length)).length,
                                        lineText: lineText + "\n" + lines.slice(1).join("\n"),
                                        suggestion: ""
                                    };
                                }
                                break;
                            }
                        }
                    }
                    return null;
                }
                function failureErrorWithLog(text, errors, warnings) {
                    let limit = 5;
                    text += errors.length < 1 ? "" : ` with ${errors.length} error${errors.length < 2 ? "" : "s"}:` + errors.slice(0, limit + 1).map((e, i) => {
                        if (i === limit) return "\n...";
                        if (!e.location) return `\nerror: ${e.text}`;
                        let {file: file, line: line, column: column} = e.location;
                        let pluginText = e.pluginName ? `[plugin: ${e.pluginName}] ` : "";
                        return `\n${file}:${line}:${column}: ERROR: ${pluginText}${e.text}`;
                    }).join("");
                    let error = new Error(text);
                    for (const [key, value] of [ [ "errors", errors ], [ "warnings", warnings ] ]) {
                        Object.defineProperty(error, key, {
                            configurable: true,
                            enumerable: true,
                            get: () => value,
                            set: value2 => Object.defineProperty(error, key, {
                                configurable: true,
                                enumerable: true,
                                value: value2
                            })
                        });
                    }
                    return error;
                }
                function replaceDetailsInMessages(messages, stash) {
                    for (const message of messages) {
                        message.detail = stash.load(message.detail);
                    }
                    return messages;
                }
                function sanitizeLocation(location2, where, terminalWidth) {
                    if (location2 == null) return null;
                    let keys = {};
                    let file = getFlag(location2, keys, "file", mustBeString);
                    let namespace = getFlag(location2, keys, "namespace", mustBeString);
                    let line = getFlag(location2, keys, "line", mustBeInteger);
                    let column = getFlag(location2, keys, "column", mustBeInteger);
                    let length = getFlag(location2, keys, "length", mustBeInteger);
                    let lineText = getFlag(location2, keys, "lineText", mustBeString);
                    let suggestion = getFlag(location2, keys, "suggestion", mustBeString);
                    checkForInvalidFlags(location2, keys, where);
                    if (lineText) {
                        const relevantASCII = lineText.slice(0, (column && column > 0 ? column : 0) + (length && length > 0 ? length : 0) + (terminalWidth && terminalWidth > 0 ? terminalWidth : 80));
                        if (!/[\x7F-\uFFFF]/.test(relevantASCII) && !/\n/.test(lineText)) {
                            lineText = relevantASCII;
                        }
                    }
                    return {
                        file: file || "",
                        namespace: namespace || "",
                        line: line || 0,
                        column: column || 0,
                        length: length || 0,
                        lineText: lineText || "",
                        suggestion: suggestion || ""
                    };
                }
                function sanitizeMessages(messages, property, stash, fallbackPluginName, terminalWidth) {
                    let messagesClone = [];
                    let index = 0;
                    for (const message of messages) {
                        let keys = {};
                        let id = getFlag(message, keys, "id", mustBeString);
                        let pluginName = getFlag(message, keys, "pluginName", mustBeString);
                        let text = getFlag(message, keys, "text", mustBeString);
                        let location2 = getFlag(message, keys, "location", mustBeObjectOrNull);
                        let notes = getFlag(message, keys, "notes", mustBeArray);
                        let detail = getFlag(message, keys, "detail", canBeAnything);
                        let where = `in element ${index} of "${property}"`;
                        checkForInvalidFlags(message, keys, where);
                        let notesClone = [];
                        if (notes) {
                            for (const note of notes) {
                                let noteKeys = {};
                                let noteText = getFlag(note, noteKeys, "text", mustBeString);
                                let noteLocation = getFlag(note, noteKeys, "location", mustBeObjectOrNull);
                                checkForInvalidFlags(note, noteKeys, where);
                                notesClone.push({
                                    text: noteText || "",
                                    location: sanitizeLocation(noteLocation, where, terminalWidth)
                                });
                            }
                        }
                        messagesClone.push({
                            id: id || "",
                            pluginName: pluginName || fallbackPluginName,
                            text: text || "",
                            location: sanitizeLocation(location2, where, terminalWidth),
                            notes: notesClone,
                            detail: stash ? stash.store(detail) : -1
                        });
                        index++;
                    }
                    return messagesClone;
                }
                function sanitizeStringArray(values, property) {
                    const result = [];
                    for (const value of values) {
                        if (typeof value !== "string") throw new Error(`${quote(property)} must be an array of strings`);
                        result.push(value);
                    }
                    return result;
                }
                function sanitizeStringMap(map, property) {
                    const result = Object.create(null);
                    for (const key in map) {
                        const value = map[key];
                        if (typeof value !== "string") throw new Error(`key ${quote(key)} in object ${quote(property)} must be a string`);
                        result[key] = value;
                    }
                    return result;
                }
                function convertOutputFiles({path: path, contents: contents, hash: hash}) {
                    let text = null;
                    return {
                        path: path,
                        contents: contents,
                        hash: hash,
                        get text() {
                            const binary = this.contents;
                            if (text === null || binary !== contents) {
                                contents = binary;
                                text = decodeUTF8(binary);
                            }
                            return text;
                        }
                    };
                }
                function jsRegExpToGoRegExp(regexp) {
                    let result = regexp.source;
                    if (regexp.flags) result = `(?${regexp.flags})${result}`;
                    return result;
                }
                function parseJSON(bytes) {
                    let text;
                    try {
                        text = decodeUTF8(bytes);
                    } catch (e) {
                        return JSON_parse(bytes);
                    }
                    return JSON.parse(text);
                }
                var version = "0.28.2";
                var build = options => ensureServiceIsRunning().build(options);
                var context = options => ensureServiceIsRunning().context(options);
                var transform = (input, options) => ensureServiceIsRunning().transform(input, options);
                var formatMessages = (messages, options) => ensureServiceIsRunning().formatMessages(messages, options);
                var analyzeMetafile = (metafile, options) => ensureServiceIsRunning().analyzeMetafile(metafile, options);
                var buildSync = () => {
                    throw new Error(`The "buildSync" API only works in node`);
                };
                var transformSync = () => {
                    throw new Error(`The "transformSync" API only works in node`);
                };
                var formatMessagesSync = () => {
                    throw new Error(`The "formatMessagesSync" API only works in node`);
                };
                var analyzeMetafileSync = () => {
                    throw new Error(`The "analyzeMetafileSync" API only works in node`);
                };
                var stop = () => {
                    if (stopService) stopService();
                    return Promise.resolve();
                };
                var initializePromise;
                var stopService;
                var longLivedService;
                var ensureServiceIsRunning = () => {
                    if (longLivedService) return longLivedService;
                    if (initializePromise) throw new Error('You need to wait for the promise returned from "initialize" to be resolved before calling this');
                    throw new Error('You need to call "initialize" before calling this');
                };
                var initialize = options => {
                    options = validateInitializeOptions(options || {});
                    let wasmURL = options.wasmURL;
                    let wasmModule = options.wasmModule;
                    let useWorker = options.worker !== false;
                    if (!wasmURL && !wasmModule) throw new Error('Must provide either the "wasmURL" option or the "wasmModule" option');
                    if (initializePromise) throw new Error('Cannot call "initialize" more than once');
                    initializePromise = startRunningService(wasmURL || "", wasmModule, useWorker);
                    initializePromise.catch(() => {
                        initializePromise = void 0;
                    });
                    return initializePromise;
                };
                var startRunningService = (wasmURL, wasmModule, useWorker) => __async(null, null, function*() {
                    let worker;
                    let rejectAllWith;
                    const rejectAllPromise = new Promise(resolve => rejectAllWith = resolve);
                    if (useWorker) {
                        let blob = new Blob([ `onmessage=${'((postMessage) => {\n      // Copyright 2018 The Go Authors. All rights reserved.\n      // Use of this source code is governed by a BSD-style\n      // license that can be found in the LICENSE file.\n      var __async = (__this, __arguments, generator) => {\n        return new Promise((resolve, reject) => {\n          var fulfilled = (value) => {\n            try {\n              step(generator.next(value));\n            } catch (e) {\n              reject(e);\n            }\n          };\n          var rejected = (value) => {\n            try {\n              step(generator.throw(value));\n            } catch (e) {\n              reject(e);\n            }\n          };\n          var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);\n          step((generator = generator.apply(__this, __arguments)).next());\n        });\n      };\n      let onmessage;\n      let globalThis = {};\n      for (let o = self; o; o = Object.getPrototypeOf(o))\n        for (let k of Object.getOwnPropertyNames(o))\n          if (!(k in globalThis))\n            Object.defineProperty(globalThis, k, { get: () => self[k] });\n      "use strict";\n      (() => {\n        const enosys = () => {\n          const err = new Error("not implemented");\n          err.code = "ENOSYS";\n          return err;\n        };\n        if (!globalThis.fs) {\n          let outputBuf = "";\n          globalThis.fs = {\n            constants: { O_WRONLY: -1, O_RDWR: -1, O_CREAT: -1, O_TRUNC: -1, O_APPEND: -1, O_EXCL: -1, O_DIRECTORY: -1 },\n            // unused\n            writeSync(fd, buf) {\n              outputBuf += decoder.decode(buf);\n              const nl = outputBuf.lastIndexOf("\\n");\n              if (nl != -1) {\n                console.log(outputBuf.substring(0, nl));\n                outputBuf = outputBuf.substring(nl + 1);\n              }\n              return buf.length;\n            },\n            write(fd, buf, offset, length, position, callback) {\n              if (offset !== 0 || length !== buf.length || position !== null) {\n                callback(enosys());\n                return;\n              }\n              const n = this.writeSync(fd, buf);\n              callback(null, n);\n            },\n            chmod(path, mode, callback) {\n              callback(enosys());\n            },\n            chown(path, uid, gid, callback) {\n              callback(enosys());\n            },\n            close(fd, callback) {\n              callback(enosys());\n            },\n            fchmod(fd, mode, callback) {\n              callback(enosys());\n            },\n            fchown(fd, uid, gid, callback) {\n              callback(enosys());\n            },\n            fstat(fd, callback) {\n              callback(enosys());\n            },\n            fsync(fd, callback) {\n              callback(null);\n            },\n            ftruncate(fd, length, callback) {\n              callback(enosys());\n            },\n            lchown(path, uid, gid, callback) {\n              callback(enosys());\n            },\n            link(path, link, callback) {\n              callback(enosys());\n            },\n            lstat(path, callback) {\n              callback(enosys());\n            },\n            mkdir(path, perm, callback) {\n              callback(enosys());\n            },\n            open(path, flags, mode, callback) {\n              callback(enosys());\n            },\n            read(fd, buffer, offset, length, position, callback) {\n              callback(enosys());\n            },\n            readdir(path, callback) {\n              callback(enosys());\n            },\n            readlink(path, callback) {\n              callback(enosys());\n            },\n            rename(from, to, callback) {\n              callback(enosys());\n            },\n            rmdir(path, callback) {\n              callback(enosys());\n            },\n            stat(path, callback) {\n              callback(enosys());\n            },\n            symlink(path, link, callback) {\n              callback(enosys());\n            },\n            truncate(path, length, callback) {\n              callback(enosys());\n            },\n            unlink(path, callback) {\n              callback(enosys());\n            },\n            utimes(path, atime, mtime, callback) {\n              callback(enosys());\n            }\n          };\n        }\n        if (!globalThis.process) {\n          globalThis.process = {\n            getuid() {\n              return -1;\n            },\n            getgid() {\n              return -1;\n            },\n            geteuid() {\n              return -1;\n            },\n            getegid() {\n              return -1;\n            },\n            getgroups() {\n              throw enosys();\n            },\n            pid: -1,\n            ppid: -1,\n            umask() {\n              throw enosys();\n            },\n            cwd() {\n              throw enosys();\n            },\n            chdir() {\n              throw enosys();\n            }\n          };\n        }\n        if (!globalThis.path) {\n          globalThis.path = {\n            resolve(...pathSegments) {\n              return pathSegments.join("/");\n            }\n          };\n        }\n        if (!globalThis.crypto) {\n          throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");\n        }\n        if (!globalThis.performance) {\n          throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");\n        }\n        if (!globalThis.TextEncoder) {\n          throw new Error("globalThis.TextEncoder is not available, polyfill required");\n        }\n        if (!globalThis.TextDecoder) {\n          throw new Error("globalThis.TextDecoder is not available, polyfill required");\n        }\n        const encoder = new TextEncoder("utf-8");\n        const decoder = new TextDecoder("utf-8");\n        globalThis.Go = class {\n          constructor() {\n            this.argv = ["js"];\n            this.env = {};\n            this.exit = (code) => {\n              if (code !== 0) {\n                console.warn("exit code:", code);\n              }\n            };\n            this._exitPromise = new Promise((resolve) => {\n              this._resolveExitPromise = resolve;\n            });\n            this._pendingEvent = null;\n            this._scheduledTimeouts = /* @__PURE__ */ new Map();\n            this._nextCallbackTimeoutID = 1;\n            const setInt64 = (addr, v) => {\n              this.mem.setUint32(addr + 0, v, true);\n              this.mem.setUint32(addr + 4, Math.floor(v / 4294967296), true);\n            };\n            const setInt32 = (addr, v) => {\n              this.mem.setUint32(addr + 0, v, true);\n            };\n            const getInt64 = (addr) => {\n              const low = this.mem.getUint32(addr + 0, true);\n              const high = this.mem.getInt32(addr + 4, true);\n              return low + high * 4294967296;\n            };\n            const loadValue = (addr) => {\n              const f = this.mem.getFloat64(addr, true);\n              if (f === 0) {\n                return void 0;\n              }\n              if (!isNaN(f)) {\n                return f;\n              }\n              const id = this.mem.getUint32(addr, true);\n              return this._values[id];\n            };\n            const storeValue = (addr, v) => {\n              const nanHead = 2146959360;\n              if (typeof v === "number" && v !== 0) {\n                if (isNaN(v)) {\n                  this.mem.setUint32(addr + 4, nanHead, true);\n                  this.mem.setUint32(addr, 0, true);\n                  return;\n                }\n                this.mem.setFloat64(addr, v, true);\n                return;\n              }\n              if (v === void 0) {\n                this.mem.setFloat64(addr, 0, true);\n                return;\n              }\n              let id = this._ids.get(v);\n              if (id === void 0) {\n                id = this._idPool.pop();\n                if (id === void 0) {\n                  id = this._values.length;\n                }\n                this._values[id] = v;\n                this._goRefCounts[id] = 0;\n                this._ids.set(v, id);\n              }\n              this._goRefCounts[id]++;\n              let typeFlag = 0;\n              switch (typeof v) {\n                case "object":\n                  if (v !== null) {\n                    typeFlag = 1;\n                  }\n                  break;\n                case "string":\n                  typeFlag = 2;\n                  break;\n                case "symbol":\n                  typeFlag = 3;\n                  break;\n                case "function":\n                  typeFlag = 4;\n                  break;\n              }\n              this.mem.setUint32(addr + 4, nanHead | typeFlag, true);\n              this.mem.setUint32(addr, id, true);\n            };\n            const loadSlice = (addr) => {\n              const array = getInt64(addr + 0);\n              const len = getInt64(addr + 8);\n              return new Uint8Array(this._inst.exports.mem.buffer, array, len);\n            };\n            const loadSliceOfValues = (addr) => {\n              const array = getInt64(addr + 0);\n              const len = getInt64(addr + 8);\n              const a = new Array(len);\n              for (let i = 0; i < len; i++) {\n                a[i] = loadValue(array + i * 8);\n              }\n              return a;\n            };\n            const loadString = (addr) => {\n              const saddr = getInt64(addr + 0);\n              const len = getInt64(addr + 8);\n              return decoder.decode(new DataView(this._inst.exports.mem.buffer, saddr, len));\n            };\n            const testCallExport = (a, b) => {\n              this._inst.exports.testExport0();\n              return this._inst.exports.testExport(a, b);\n            };\n            const timeOrigin = Date.now() - performance.now();\n            this.importObject = {\n              _gotest: {\n                add: (a, b) => a + b,\n                callExport: testCallExport\n              },\n              gojs: {\n                // Go\'s SP does not change as long as no Go code is running. Some operations (e.g. calls, getters and setters)\n                // may synchronously trigger a Go event handler. This makes Go code get executed in the middle of the imported\n                // function. A goroutine can switch to a new stack if the current stack is too small (see morestack function).\n                // This changes the SP, thus we have to update the SP used by the imported function.\n                // func wasmExit(code int32)\n                "runtime.wasmExit": (sp) => {\n                  sp >>>= 0;\n                  const code = this.mem.getInt32(sp + 8, true);\n                  this.exited = true;\n                  delete this._inst;\n                  delete this._values;\n                  delete this._goRefCounts;\n                  delete this._ids;\n                  delete this._idPool;\n                  this.exit(code);\n                },\n                // func wasmWrite(fd uintptr, p unsafe.Pointer, n int32)\n                "runtime.wasmWrite": (sp) => {\n                  sp >>>= 0;\n                  const fd = getInt64(sp + 8);\n                  const p = getInt64(sp + 16);\n                  const n = this.mem.getInt32(sp + 24, true);\n                  globalThis.fs.writeSync(fd, new Uint8Array(this._inst.exports.mem.buffer, p, n));\n                },\n                // func resetMemoryDataView()\n                "runtime.resetMemoryDataView": (sp) => {\n                  sp >>>= 0;\n                  this.mem = new DataView(this._inst.exports.mem.buffer);\n                },\n                // func nanotime1() int64\n                "runtime.nanotime1": (sp) => {\n                  sp >>>= 0;\n                  setInt64(sp + 8, (timeOrigin + performance.now()) * 1e6);\n                },\n                // func walltime() (sec int64, nsec int32)\n                "runtime.walltime": (sp) => {\n                  sp >>>= 0;\n                  const msec = (/* @__PURE__ */ new Date()).getTime();\n                  setInt64(sp + 8, msec / 1e3);\n                  this.mem.setInt32(sp + 16, msec % 1e3 * 1e6, true);\n                },\n                // func scheduleTimeoutEvent(delay int64) int32\n                "runtime.scheduleTimeoutEvent": (sp) => {\n                  sp >>>= 0;\n                  const id = this._nextCallbackTimeoutID;\n                  this._nextCallbackTimeoutID++;\n                  this._scheduledTimeouts.set(id, setTimeout(\n                    () => {\n                      this._resume();\n                      while (this._scheduledTimeouts.has(id)) {\n                        console.warn("scheduleTimeoutEvent: missed timeout event");\n                        this._resume();\n                      }\n                    },\n                    getInt64(sp + 8)\n                  ));\n                  this.mem.setInt32(sp + 16, id, true);\n                },\n                // func clearTimeoutEvent(id int32)\n                "runtime.clearTimeoutEvent": (sp) => {\n                  sp >>>= 0;\n                  const id = this.mem.getInt32(sp + 8, true);\n                  clearTimeout(this._scheduledTimeouts.get(id));\n                  this._scheduledTimeouts.delete(id);\n                },\n                // func getRandomData(r []byte)\n                "runtime.getRandomData": (sp) => {\n                  sp >>>= 0;\n                  crypto.getRandomValues(loadSlice(sp + 8));\n                },\n                // func finalizeRef(v ref)\n                "syscall/js.finalizeRef": (sp) => {\n                  sp >>>= 0;\n                  const id = this.mem.getUint32(sp + 8, true);\n                  this._goRefCounts[id]--;\n                  if (this._goRefCounts[id] === 0) {\n                    const v = this._values[id];\n                    this._values[id] = null;\n                    this._ids.delete(v);\n                    this._idPool.push(id);\n                  }\n                },\n                // func stringVal(value string) ref\n                "syscall/js.stringVal": (sp) => {\n                  sp >>>= 0;\n                  storeValue(sp + 24, loadString(sp + 8));\n                },\n                // func valueGet(v ref, p string) ref\n                "syscall/js.valueGet": (sp) => {\n                  sp >>>= 0;\n                  const result = Reflect.get(loadValue(sp + 8), loadString(sp + 16));\n                  sp = this._inst.exports.getsp() >>> 0;\n                  storeValue(sp + 32, result);\n                },\n                // func valueSet(v ref, p string, x ref)\n                "syscall/js.valueSet": (sp) => {\n                  sp >>>= 0;\n                  Reflect.set(loadValue(sp + 8), loadString(sp + 16), loadValue(sp + 32));\n                },\n                // func valueDelete(v ref, p string)\n                "syscall/js.valueDelete": (sp) => {\n                  sp >>>= 0;\n                  Reflect.deleteProperty(loadValue(sp + 8), loadString(sp + 16));\n                },\n                // func valueIndex(v ref, i int) ref\n                "syscall/js.valueIndex": (sp) => {\n                  sp >>>= 0;\n                  storeValue(sp + 24, Reflect.get(loadValue(sp + 8), getInt64(sp + 16)));\n                },\n                // valueSetIndex(v ref, i int, x ref)\n                "syscall/js.valueSetIndex": (sp) => {\n                  sp >>>= 0;\n                  Reflect.set(loadValue(sp + 8), getInt64(sp + 16), loadValue(sp + 24));\n                },\n                // func valueCall(v ref, m string, args []ref) (ref, bool)\n                "syscall/js.valueCall": (sp) => {\n                  sp >>>= 0;\n                  try {\n                    const v = loadValue(sp + 8);\n                    const m = Reflect.get(v, loadString(sp + 16));\n                    const args = loadSliceOfValues(sp + 32);\n                    const result = Reflect.apply(m, v, args);\n                    sp = this._inst.exports.getsp() >>> 0;\n                    storeValue(sp + 56, result);\n                    this.mem.setUint8(sp + 64, 1);\n                  } catch (err) {\n                    sp = this._inst.exports.getsp() >>> 0;\n                    storeValue(sp + 56, err);\n                    this.mem.setUint8(sp + 64, 0);\n                  }\n                },\n                // func valueInvoke(v ref, args []ref) (ref, bool)\n                "syscall/js.valueInvoke": (sp) => {\n                  sp >>>= 0;\n                  try {\n                    const v = loadValue(sp + 8);\n                    const args = loadSliceOfValues(sp + 16);\n                    const result = Reflect.apply(v, void 0, args);\n                    sp = this._inst.exports.getsp() >>> 0;\n                    storeValue(sp + 40, result);\n                    this.mem.setUint8(sp + 48, 1);\n                  } catch (err) {\n                    sp = this._inst.exports.getsp() >>> 0;\n                    storeValue(sp + 40, err);\n                    this.mem.setUint8(sp + 48, 0);\n                  }\n                },\n                // func valueNew(v ref, args []ref) (ref, bool)\n                "syscall/js.valueNew": (sp) => {\n                  sp >>>= 0;\n                  try {\n                    const v = loadValue(sp + 8);\n                    const args = loadSliceOfValues(sp + 16);\n                    const result = Reflect.construct(v, args);\n                    sp = this._inst.exports.getsp() >>> 0;\n                    storeValue(sp + 40, result);\n                    this.mem.setUint8(sp + 48, 1);\n                  } catch (err) {\n                    sp = this._inst.exports.getsp() >>> 0;\n                    storeValue(sp + 40, err);\n                    this.mem.setUint8(sp + 48, 0);\n                  }\n                },\n                // func valueLength(v ref) int\n                "syscall/js.valueLength": (sp) => {\n                  sp >>>= 0;\n                  setInt64(sp + 16, parseInt(loadValue(sp + 8).length));\n                },\n                // valuePrepareString(v ref) (ref, int)\n                "syscall/js.valuePrepareString": (sp) => {\n                  sp >>>= 0;\n                  const str = encoder.encode(String(loadValue(sp + 8)));\n                  storeValue(sp + 16, str);\n                  setInt64(sp + 24, str.length);\n                },\n                // valueLoadString(v ref, b []byte)\n                "syscall/js.valueLoadString": (sp) => {\n                  sp >>>= 0;\n                  const str = loadValue(sp + 8);\n                  loadSlice(sp + 16).set(str);\n                },\n                // func valueInstanceOf(v ref, t ref) bool\n                "syscall/js.valueInstanceOf": (sp) => {\n                  sp >>>= 0;\n                  this.mem.setUint8(sp + 24, loadValue(sp + 8) instanceof loadValue(sp + 16) ? 1 : 0);\n                },\n                // func copyBytesToGo(dst []byte, src ref) (int, bool)\n                "syscall/js.copyBytesToGo": (sp) => {\n                  sp >>>= 0;\n                  const dst = loadSlice(sp + 8);\n                  const src = loadValue(sp + 32);\n                  if (!(src instanceof Uint8Array || src instanceof Uint8ClampedArray)) {\n                    this.mem.setUint8(sp + 48, 0);\n                    return;\n                  }\n                  const toCopy = src.subarray(0, dst.length);\n                  dst.set(toCopy);\n                  setInt64(sp + 40, toCopy.length);\n                  this.mem.setUint8(sp + 48, 1);\n                },\n                // func copyBytesToJS(dst ref, src []byte) (int, bool)\n                "syscall/js.copyBytesToJS": (sp) => {\n                  sp >>>= 0;\n                  const dst = loadValue(sp + 8);\n                  const src = loadSlice(sp + 16);\n                  if (!(dst instanceof Uint8Array || dst instanceof Uint8ClampedArray)) {\n                    this.mem.setUint8(sp + 48, 0);\n                    return;\n                  }\n                  const toCopy = src.subarray(0, dst.length);\n                  dst.set(toCopy);\n                  setInt64(sp + 40, toCopy.length);\n                  this.mem.setUint8(sp + 48, 1);\n                },\n                "debug": (value) => {\n                  console.log(value);\n                }\n              }\n            };\n          }\n          run(instance) {\n            return __async(this, null, function* () {\n              if (!(instance instanceof WebAssembly.Instance)) {\n                throw new Error("Go.run: WebAssembly.Instance expected");\n              }\n              this._inst = instance;\n              this.mem = new DataView(this._inst.exports.mem.buffer);\n              this._values = [\n                // JS values that Go currently has references to, indexed by reference id\n                NaN,\n                0,\n                null,\n                true,\n                false,\n                globalThis,\n                this\n              ];\n              this._goRefCounts = new Array(this._values.length).fill(Infinity);\n              this._ids = /* @__PURE__ */ new Map([\n                // mapping from JS values to reference ids\n                [0, 1],\n                [null, 2],\n                [true, 3],\n                [false, 4],\n                [globalThis, 5],\n                [this, 6]\n              ]);\n              this._idPool = [];\n              this.exited = false;\n              let offset = 4096;\n              const strPtr = (str) => {\n                const ptr = offset;\n                const bytes = encoder.encode(str + "\\0");\n                new Uint8Array(this.mem.buffer, offset, bytes.length).set(bytes);\n                offset += bytes.length;\n                if (offset % 8 !== 0) {\n                  offset += 8 - offset % 8;\n                }\n                return ptr;\n              };\n              const argc = this.argv.length;\n              const argvPtrs = [];\n              this.argv.forEach((arg) => {\n                argvPtrs.push(strPtr(arg));\n              });\n              argvPtrs.push(0);\n              const keys = Object.keys(this.env).sort();\n              keys.forEach((key) => {\n                argvPtrs.push(strPtr(`${key}=${this.env[key]}`));\n              });\n              argvPtrs.push(0);\n              const argv = offset;\n              argvPtrs.forEach((ptr) => {\n                this.mem.setUint32(offset, ptr, true);\n                this.mem.setUint32(offset + 4, 0, true);\n                offset += 8;\n              });\n              const wasmMinDataAddr = 4096 + 8192;\n              if (offset >= wasmMinDataAddr) {\n                throw new Error("total length of command line and environment variables exceeds limit");\n              }\n              this._inst.exports.run(argc, argv);\n              if (this.exited) {\n                this._resolveExitPromise();\n              }\n              yield this._exitPromise;\n            });\n          }\n          _resume() {\n            if (this.exited) {\n              throw new Error("Go program has already exited");\n            }\n            this._inst.exports.resume();\n            if (this.exited) {\n              this._resolveExitPromise();\n            }\n          }\n          _makeFuncWrapper(id) {\n            const go = this;\n            return function() {\n              const event = { id, this: this, args: arguments };\n              go._pendingEvent = event;\n              go._resume();\n              return event.result;\n            };\n          }\n        };\n      })();\n      onmessage = ({ data: wasm }) => {\n        let decoder = new TextDecoder();\n        let fs = globalThis.fs;\n        let stderr = "";\n        fs.writeSync = (fd, buffer) => {\n          if (fd === 1) {\n            postMessage(buffer);\n          } else if (fd === 2) {\n            stderr += decoder.decode(buffer);\n            let parts = stderr.split("\\n");\n            if (parts.length > 1) console.log(parts.slice(0, -1).join("\\n"));\n            stderr = parts[parts.length - 1];\n          } else {\n            throw new Error("Bad write");\n          }\n          return buffer.length;\n        };\n        let stdin = [];\n        let resumeStdin;\n        let stdinPos = 0;\n        onmessage = ({ data }) => {\n          if (data.length > 0) {\n            stdin.push(data);\n            if (resumeStdin) resumeStdin();\n          }\n          return go;\n        };\n        fs.read = (fd, buffer, offset, length, position, callback) => {\n          if (fd !== 0 || offset !== 0 || length !== buffer.length || position !== null) {\n            throw new Error("Bad read");\n          }\n          if (stdin.length === 0) {\n            resumeStdin = () => fs.read(fd, buffer, offset, length, position, callback);\n            return;\n          }\n          let first = stdin[0];\n          let count = Math.max(0, Math.min(length, first.length - stdinPos));\n          buffer.set(first.subarray(stdinPos, stdinPos + count), offset);\n          stdinPos += count;\n          if (stdinPos === first.length) {\n            stdin.shift();\n            stdinPos = 0;\n          }\n          callback(null, count);\n        };\n        let go = new globalThis.Go();\n        go.argv = ["", `--service=${"0.28.2"}`];\n        tryToInstantiateModule(wasm, go).then(\n          (instance) => {\n            postMessage(null);\n            go.run(instance);\n          },\n          (error) => {\n            postMessage(error);\n          }\n        );\n        return go;\n      };\n      function tryToInstantiateModule(wasm, go) {\n        return __async(this, null, function* () {\n          if (wasm instanceof WebAssembly.Module) {\n            return WebAssembly.instantiate(wasm, go.importObject);\n          }\n          const res = yield fetch(wasm);\n          if (!res.ok) throw new Error(`Failed to download ${JSON.stringify(wasm)}`);\n          if ("instantiateStreaming" in WebAssembly && /^application\\/wasm($|;)/i.test(res.headers.get("Content-Type") || "")) {\n            const result2 = yield WebAssembly.instantiateStreaming(res, go.importObject);\n            return result2.instance;\n          }\n          const bytes = yield res.arrayBuffer();\n          const result = yield WebAssembly.instantiate(bytes, go.importObject);\n          return result.instance;\n        });\n      }\n      return (m) => onmessage(m);\n    })'}(postMessage)` ], {
                            type: "text/javascript"
                        });
                        worker = new Worker(URL.createObjectURL(blob));
                    } else {
                        let onmessage = (postMessage => {
                            var __async = (__this, __arguments, generator) => new Promise((resolve, reject) => {
                                var fulfilled = value => {
                                    try {
                                        step(generator.next(value));
                                    } catch (e) {
                                        reject(e);
                                    }
                                };
                                var rejected = value => {
                                    try {
                                        step(generator.throw(value));
                                    } catch (e) {
                                        reject(e);
                                    }
                                };
                                var step = x => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
                                step((generator = generator.apply(__this, __arguments)).next());
                            });
                            let onmessage;
                            let globalThis = {};
                            for (let o = self; o; o = Object.getPrototypeOf(o)) for (let k of Object.getOwnPropertyNames(o)) if (!(k in globalThis)) Object.defineProperty(globalThis, k, {
                                get: () => self[k]
                            });
                            "use strict";
                            (() => {
                                const enosys = () => {
                                    const err = new Error("not implemented");
                                    err.code = "ENOSYS";
                                    return err;
                                };
                                if (!globalThis.fs) {
                                    let outputBuf = "";
                                    globalThis.fs = {
                                        constants: {
                                            O_WRONLY: -1,
                                            O_RDWR: -1,
                                            O_CREAT: -1,
                                            O_TRUNC: -1,
                                            O_APPEND: -1,
                                            O_EXCL: -1,
                                            O_DIRECTORY: -1
                                        },
                                        writeSync(fd, buf) {
                                            outputBuf += decoder.decode(buf);
                                            const nl = outputBuf.lastIndexOf("\n");
                                            if (nl != -1) {
                                                console.log(outputBuf.substring(0, nl));
                                                outputBuf = outputBuf.substring(nl + 1);
                                            }
                                            return buf.length;
                                        },
                                        write(fd, buf, offset, length, position, callback) {
                                            if (offset !== 0 || length !== buf.length || position !== null) {
                                                callback(enosys());
                                                return;
                                            }
                                            const n = this.writeSync(fd, buf);
                                            callback(null, n);
                                        },
                                        chmod(path, mode, callback) {
                                            callback(enosys());
                                        },
                                        chown(path, uid, gid, callback) {
                                            callback(enosys());
                                        },
                                        close(fd, callback) {
                                            callback(enosys());
                                        },
                                        fchmod(fd, mode, callback) {
                                            callback(enosys());
                                        },
                                        fchown(fd, uid, gid, callback) {
                                            callback(enosys());
                                        },
                                        fstat(fd, callback) {
                                            callback(enosys());
                                        },
                                        fsync(fd, callback) {
                                            callback(null);
                                        },
                                        ftruncate(fd, length, callback) {
                                            callback(enosys());
                                        },
                                        lchown(path, uid, gid, callback) {
                                            callback(enosys());
                                        },
                                        link(path, link, callback) {
                                            callback(enosys());
                                        },
                                        lstat(path, callback) {
                                            callback(enosys());
                                        },
                                        mkdir(path, perm, callback) {
                                            callback(enosys());
                                        },
                                        open(path, flags, mode, callback) {
                                            callback(enosys());
                                        },
                                        read(fd, buffer, offset, length, position, callback) {
                                            callback(enosys());
                                        },
                                        readdir(path, callback) {
                                            callback(enosys());
                                        },
                                        readlink(path, callback) {
                                            callback(enosys());
                                        },
                                        rename(from, to, callback) {
                                            callback(enosys());
                                        },
                                        rmdir(path, callback) {
                                            callback(enosys());
                                        },
                                        stat(path, callback) {
                                            callback(enosys());
                                        },
                                        symlink(path, link, callback) {
                                            callback(enosys());
                                        },
                                        truncate(path, length, callback) {
                                            callback(enosys());
                                        },
                                        unlink(path, callback) {
                                            callback(enosys());
                                        },
                                        utimes(path, atime, mtime, callback) {
                                            callback(enosys());
                                        }
                                    };
                                }
                                if (!globalThis.process) {
                                    globalThis.process = {
                                        getuid() {
                                            return -1;
                                        },
                                        getgid() {
                                            return -1;
                                        },
                                        geteuid() {
                                            return -1;
                                        },
                                        getegid() {
                                            return -1;
                                        },
                                        getgroups() {
                                            throw enosys();
                                        },
                                        pid: -1,
                                        ppid: -1,
                                        umask() {
                                            throw enosys();
                                        },
                                        cwd() {
                                            throw enosys();
                                        },
                                        chdir() {
                                            throw enosys();
                                        }
                                    };
                                }
                                if (!globalThis.path) {
                                    globalThis.path = {
                                        resolve(...pathSegments) {
                                            return pathSegments.join("/");
                                        }
                                    };
                                }
                                if (!globalThis.crypto) {
                                    throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");
                                }
                                if (!globalThis.performance) {
                                    throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");
                                }
                                if (!globalThis.TextEncoder) {
                                    throw new Error("globalThis.TextEncoder is not available, polyfill required");
                                }
                                if (!globalThis.TextDecoder) {
                                    throw new Error("globalThis.TextDecoder is not available, polyfill required");
                                }
                                const encoder = new TextEncoder("utf-8");
                                const decoder = new TextDecoder("utf-8");
                                globalThis.Go = class {
                                    constructor() {
                                        this.argv = [ "js" ];
                                        this.env = {};
                                        this.exit = code => {
                                            if (code !== 0) {
                                                console.warn("exit code:", code);
                                            }
                                        };
                                        this._exitPromise = new Promise(resolve => {
                                            this._resolveExitPromise = resolve;
                                        });
                                        this._pendingEvent = null;
                                        this._scheduledTimeouts = new Map;
                                        this._nextCallbackTimeoutID = 1;
                                        const setInt64 = (addr, v) => {
                                            this.mem.setUint32(addr + 0, v, true);
                                            this.mem.setUint32(addr + 4, Math.floor(v / 4294967296), true);
                                        };
                                        const setInt32 = (addr, v) => {
                                            this.mem.setUint32(addr + 0, v, true);
                                        };
                                        const getInt64 = addr => {
                                            const low = this.mem.getUint32(addr + 0, true);
                                            const high = this.mem.getInt32(addr + 4, true);
                                            return low + high * 4294967296;
                                        };
                                        const loadValue = addr => {
                                            const f = this.mem.getFloat64(addr, true);
                                            if (f === 0) {
                                                return void 0;
                                            }
                                            if (!isNaN(f)) {
                                                return f;
                                            }
                                            const id = this.mem.getUint32(addr, true);
                                            return this._values[id];
                                        };
                                        const storeValue = (addr, v) => {
                                            const nanHead = 2146959360;
                                            if (typeof v === "number" && v !== 0) {
                                                if (isNaN(v)) {
                                                    this.mem.setUint32(addr + 4, nanHead, true);
                                                    this.mem.setUint32(addr, 0, true);
                                                    return;
                                                }
                                                this.mem.setFloat64(addr, v, true);
                                                return;
                                            }
                                            if (v === void 0) {
                                                this.mem.setFloat64(addr, 0, true);
                                                return;
                                            }
                                            let id = this._ids.get(v);
                                            if (id === void 0) {
                                                id = this._idPool.pop();
                                                if (id === void 0) {
                                                    id = this._values.length;
                                                }
                                                this._values[id] = v;
                                                this._goRefCounts[id] = 0;
                                                this._ids.set(v, id);
                                            }
                                            this._goRefCounts[id]++;
                                            let typeFlag = 0;
                                            switch (typeof v) {
                                              case "object":
                                                if (v !== null) {
                                                    typeFlag = 1;
                                                }
                                                break;

                                              case "string":
                                                typeFlag = 2;
                                                break;

                                              case "symbol":
                                                typeFlag = 3;
                                                break;

                                              case "function":
                                                typeFlag = 4;
                                                break;
                                            }
                                            this.mem.setUint32(addr + 4, nanHead | typeFlag, true);
                                            this.mem.setUint32(addr, id, true);
                                        };
                                        const loadSlice = addr => {
                                            const array = getInt64(addr + 0);
                                            const len = getInt64(addr + 8);
                                            return new Uint8Array(this._inst.exports.mem.buffer, array, len);
                                        };
                                        const loadSliceOfValues = addr => {
                                            const array = getInt64(addr + 0);
                                            const len = getInt64(addr + 8);
                                            const a = new Array(len);
                                            for (let i = 0; i < len; i++) {
                                                a[i] = loadValue(array + i * 8);
                                            }
                                            return a;
                                        };
                                        const loadString = addr => {
                                            const saddr = getInt64(addr + 0);
                                            const len = getInt64(addr + 8);
                                            return decoder.decode(new DataView(this._inst.exports.mem.buffer, saddr, len));
                                        };
                                        const testCallExport = (a, b) => {
                                            this._inst.exports.testExport0();
                                            return this._inst.exports.testExport(a, b);
                                        };
                                        const timeOrigin = Date.now() - performance.now();
                                        this.importObject = {
                                            _gotest: {
                                                add: (a, b) => a + b,
                                                callExport: testCallExport
                                            },
                                            gojs: {
                                                "runtime.wasmExit": sp => {
                                                    sp >>>= 0;
                                                    const code = this.mem.getInt32(sp + 8, true);
                                                    this.exited = true;
                                                    delete this._inst;
                                                    delete this._values;
                                                    delete this._goRefCounts;
                                                    delete this._ids;
                                                    delete this._idPool;
                                                    this.exit(code);
                                                },
                                                "runtime.wasmWrite": sp => {
                                                    sp >>>= 0;
                                                    const fd = getInt64(sp + 8);
                                                    const p = getInt64(sp + 16);
                                                    const n = this.mem.getInt32(sp + 24, true);
                                                    globalThis.fs.writeSync(fd, new Uint8Array(this._inst.exports.mem.buffer, p, n));
                                                },
                                                "runtime.resetMemoryDataView": sp => {
                                                    sp >>>= 0;
                                                    this.mem = new DataView(this._inst.exports.mem.buffer);
                                                },
                                                "runtime.nanotime1": sp => {
                                                    sp >>>= 0;
                                                    setInt64(sp + 8, (timeOrigin + performance.now()) * 1e6);
                                                },
                                                "runtime.walltime": sp => {
                                                    sp >>>= 0;
                                                    const msec = (new Date).getTime();
                                                    setInt64(sp + 8, msec / 1e3);
                                                    this.mem.setInt32(sp + 16, msec % 1e3 * 1e6, true);
                                                },
                                                "runtime.scheduleTimeoutEvent": sp => {
                                                    sp >>>= 0;
                                                    const id = this._nextCallbackTimeoutID;
                                                    this._nextCallbackTimeoutID++;
                                                    this._scheduledTimeouts.set(id, setTimeout(() => {
                                                        this._resume();
                                                        while (this._scheduledTimeouts.has(id)) {
                                                            console.warn("scheduleTimeoutEvent: missed timeout event");
                                                            this._resume();
                                                        }
                                                    }, getInt64(sp + 8)));
                                                    this.mem.setInt32(sp + 16, id, true);
                                                },
                                                "runtime.clearTimeoutEvent": sp => {
                                                    sp >>>= 0;
                                                    const id = this.mem.getInt32(sp + 8, true);
                                                    clearTimeout(this._scheduledTimeouts.get(id));
                                                    this._scheduledTimeouts.delete(id);
                                                },
                                                "runtime.getRandomData": sp => {
                                                    sp >>>= 0;
                                                    crypto.getRandomValues(loadSlice(sp + 8));
                                                },
                                                "syscall/js.finalizeRef": sp => {
                                                    sp >>>= 0;
                                                    const id = this.mem.getUint32(sp + 8, true);
                                                    this._goRefCounts[id]--;
                                                    if (this._goRefCounts[id] === 0) {
                                                        const v = this._values[id];
                                                        this._values[id] = null;
                                                        this._ids.delete(v);
                                                        this._idPool.push(id);
                                                    }
                                                },
                                                "syscall/js.stringVal": sp => {
                                                    sp >>>= 0;
                                                    storeValue(sp + 24, loadString(sp + 8));
                                                },
                                                "syscall/js.valueGet": sp => {
                                                    sp >>>= 0;
                                                    const result = Reflect.get(loadValue(sp + 8), loadString(sp + 16));
                                                    sp = this._inst.exports.getsp() >>> 0;
                                                    storeValue(sp + 32, result);
                                                },
                                                "syscall/js.valueSet": sp => {
                                                    sp >>>= 0;
                                                    Reflect.set(loadValue(sp + 8), loadString(sp + 16), loadValue(sp + 32));
                                                },
                                                "syscall/js.valueDelete": sp => {
                                                    sp >>>= 0;
                                                    Reflect.deleteProperty(loadValue(sp + 8), loadString(sp + 16));
                                                },
                                                "syscall/js.valueIndex": sp => {
                                                    sp >>>= 0;
                                                    storeValue(sp + 24, Reflect.get(loadValue(sp + 8), getInt64(sp + 16)));
                                                },
                                                "syscall/js.valueSetIndex": sp => {
                                                    sp >>>= 0;
                                                    Reflect.set(loadValue(sp + 8), getInt64(sp + 16), loadValue(sp + 24));
                                                },
                                                "syscall/js.valueCall": sp => {
                                                    sp >>>= 0;
                                                    try {
                                                        const v = loadValue(sp + 8);
                                                        const m = Reflect.get(v, loadString(sp + 16));
                                                        const args = loadSliceOfValues(sp + 32);
                                                        const result = Reflect.apply(m, v, args);
                                                        sp = this._inst.exports.getsp() >>> 0;
                                                        storeValue(sp + 56, result);
                                                        this.mem.setUint8(sp + 64, 1);
                                                    } catch (err) {
                                                        sp = this._inst.exports.getsp() >>> 0;
                                                        storeValue(sp + 56, err);
                                                        this.mem.setUint8(sp + 64, 0);
                                                    }
                                                },
                                                "syscall/js.valueInvoke": sp => {
                                                    sp >>>= 0;
                                                    try {
                                                        const v = loadValue(sp + 8);
                                                        const args = loadSliceOfValues(sp + 16);
                                                        const result = Reflect.apply(v, void 0, args);
                                                        sp = this._inst.exports.getsp() >>> 0;
                                                        storeValue(sp + 40, result);
                                                        this.mem.setUint8(sp + 48, 1);
                                                    } catch (err) {
                                                        sp = this._inst.exports.getsp() >>> 0;
                                                        storeValue(sp + 40, err);
                                                        this.mem.setUint8(sp + 48, 0);
                                                    }
                                                },
                                                "syscall/js.valueNew": sp => {
                                                    sp >>>= 0;
                                                    try {
                                                        const v = loadValue(sp + 8);
                                                        const args = loadSliceOfValues(sp + 16);
                                                        const result = Reflect.construct(v, args);
                                                        sp = this._inst.exports.getsp() >>> 0;
                                                        storeValue(sp + 40, result);
                                                        this.mem.setUint8(sp + 48, 1);
                                                    } catch (err) {
                                                        sp = this._inst.exports.getsp() >>> 0;
                                                        storeValue(sp + 40, err);
                                                        this.mem.setUint8(sp + 48, 0);
                                                    }
                                                },
                                                "syscall/js.valueLength": sp => {
                                                    sp >>>= 0;
                                                    setInt64(sp + 16, parseInt(loadValue(sp + 8).length));
                                                },
                                                "syscall/js.valuePrepareString": sp => {
                                                    sp >>>= 0;
                                                    const str = encoder.encode(String(loadValue(sp + 8)));
                                                    storeValue(sp + 16, str);
                                                    setInt64(sp + 24, str.length);
                                                },
                                                "syscall/js.valueLoadString": sp => {
                                                    sp >>>= 0;
                                                    const str = loadValue(sp + 8);
                                                    loadSlice(sp + 16).set(str);
                                                },
                                                "syscall/js.valueInstanceOf": sp => {
                                                    sp >>>= 0;
                                                    this.mem.setUint8(sp + 24, loadValue(sp + 8) instanceof loadValue(sp + 16) ? 1 : 0);
                                                },
                                                "syscall/js.copyBytesToGo": sp => {
                                                    sp >>>= 0;
                                                    const dst = loadSlice(sp + 8);
                                                    const src = loadValue(sp + 32);
                                                    if (!(src instanceof Uint8Array || src instanceof Uint8ClampedArray)) {
                                                        this.mem.setUint8(sp + 48, 0);
                                                        return;
                                                    }
                                                    const toCopy = src.subarray(0, dst.length);
                                                    dst.set(toCopy);
                                                    setInt64(sp + 40, toCopy.length);
                                                    this.mem.setUint8(sp + 48, 1);
                                                },
                                                "syscall/js.copyBytesToJS": sp => {
                                                    sp >>>= 0;
                                                    const dst = loadValue(sp + 8);
                                                    const src = loadSlice(sp + 16);
                                                    if (!(dst instanceof Uint8Array || dst instanceof Uint8ClampedArray)) {
                                                        this.mem.setUint8(sp + 48, 0);
                                                        return;
                                                    }
                                                    const toCopy = src.subarray(0, dst.length);
                                                    dst.set(toCopy);
                                                    setInt64(sp + 40, toCopy.length);
                                                    this.mem.setUint8(sp + 48, 1);
                                                },
                                                debug: value => {
                                                    console.log(value);
                                                }
                                            }
                                        };
                                    }
                                    run(instance) {
                                        return __async(this, null, function*() {
                                            if (!(instance instanceof WebAssembly.Instance)) {
                                                throw new Error("Go.run: WebAssembly.Instance expected");
                                            }
                                            this._inst = instance;
                                            this.mem = new DataView(this._inst.exports.mem.buffer);
                                            this._values = [ NaN, 0, null, true, false, globalThis, this ];
                                            this._goRefCounts = new Array(this._values.length).fill(Infinity);
                                            this._ids = new Map([ [ 0, 1 ], [ null, 2 ], [ true, 3 ], [ false, 4 ], [ globalThis, 5 ], [ this, 6 ] ]);
                                            this._idPool = [];
                                            this.exited = false;
                                            let offset = 4096;
                                            const strPtr = str => {
                                                const ptr = offset;
                                                const bytes = encoder.encode(str + "\0");
                                                new Uint8Array(this.mem.buffer, offset, bytes.length).set(bytes);
                                                offset += bytes.length;
                                                if (offset % 8 !== 0) {
                                                    offset += 8 - offset % 8;
                                                }
                                                return ptr;
                                            };
                                            const argc = this.argv.length;
                                            const argvPtrs = [];
                                            this.argv.forEach(arg => {
                                                argvPtrs.push(strPtr(arg));
                                            });
                                            argvPtrs.push(0);
                                            const keys = Object.keys(this.env).sort();
                                            keys.forEach(key => {
                                                argvPtrs.push(strPtr(`${key}=${this.env[key]}`));
                                            });
                                            argvPtrs.push(0);
                                            const argv = offset;
                                            argvPtrs.forEach(ptr => {
                                                this.mem.setUint32(offset, ptr, true);
                                                this.mem.setUint32(offset + 4, 0, true);
                                                offset += 8;
                                            });
                                            const wasmMinDataAddr = 4096 + 8192;
                                            if (offset >= wasmMinDataAddr) {
                                                throw new Error("total length of command line and environment variables exceeds limit");
                                            }
                                            this._inst.exports.run(argc, argv);
                                            if (this.exited) {
                                                this._resolveExitPromise();
                                            }
                                            yield this._exitPromise;
                                        });
                                    }
                                    _resume() {
                                        if (this.exited) {
                                            throw new Error("Go program has already exited");
                                        }
                                        this._inst.exports.resume();
                                        if (this.exited) {
                                            this._resolveExitPromise();
                                        }
                                    }
                                    _makeFuncWrapper(id) {
                                        const go = this;
                                        return function() {
                                            const event = {
                                                id: id,
                                                this: this,
                                                args: arguments
                                            };
                                            go._pendingEvent = event;
                                            go._resume();
                                            return event.result;
                                        };
                                    }
                                };
                            })();
                            onmessage = ({data: wasm}) => {
                                let decoder = new TextDecoder;
                                let fs = globalThis.fs;
                                let stderr = "";
                                fs.writeSync = (fd, buffer) => {
                                    if (fd === 1) {
                                        postMessage(buffer);
                                    } else if (fd === 2) {
                                        stderr += decoder.decode(buffer);
                                        let parts = stderr.split("\n");
                                        if (parts.length > 1) console.log(parts.slice(0, -1).join("\n"));
                                        stderr = parts[parts.length - 1];
                                    } else {
                                        throw new Error("Bad write");
                                    }
                                    return buffer.length;
                                };
                                let stdin = [];
                                let resumeStdin;
                                let stdinPos = 0;
                                onmessage = ({data: data}) => {
                                    if (data.length > 0) {
                                        stdin.push(data);
                                        if (resumeStdin) resumeStdin();
                                    }
                                    return go;
                                };
                                fs.read = (fd, buffer, offset, length, position, callback) => {
                                    if (fd !== 0 || offset !== 0 || length !== buffer.length || position !== null) {
                                        throw new Error("Bad read");
                                    }
                                    if (stdin.length === 0) {
                                        resumeStdin = () => fs.read(fd, buffer, offset, length, position, callback);
                                        return;
                                    }
                                    let first = stdin[0];
                                    let count = Math.max(0, Math.min(length, first.length - stdinPos));
                                    buffer.set(first.subarray(stdinPos, stdinPos + count), offset);
                                    stdinPos += count;
                                    if (stdinPos === first.length) {
                                        stdin.shift();
                                        stdinPos = 0;
                                    }
                                    callback(null, count);
                                };
                                let go = new globalThis.Go;
                                go.argv = [ "", `--service=${"0.28.2"}` ];
                                tryToInstantiateModule(wasm, go).then(instance => {
                                    postMessage(null);
                                    go.run(instance);
                                }, error => {
                                    postMessage(error);
                                });
                                return go;
                            };
                            function tryToInstantiateModule(wasm, go) {
                                return __async(this, null, function*() {
                                    if (wasm instanceof WebAssembly.Module) {
                                        return WebAssembly.instantiate(wasm, go.importObject);
                                    }
                                    const res = yield fetch(wasm);
                                    if (!res.ok) throw new Error(`Failed to download ${JSON.stringify(wasm)}`);
                                    if ("instantiateStreaming" in WebAssembly && /^application\/wasm($|;)/i.test(res.headers.get("Content-Type") || "")) {
                                        const result2 = yield WebAssembly.instantiateStreaming(res, go.importObject);
                                        return result2.instance;
                                    }
                                    const bytes = yield res.arrayBuffer();
                                    const result = yield WebAssembly.instantiate(bytes, go.importObject);
                                    return result.instance;
                                });
                            }
                            return m => onmessage(m);
                        })(data => worker.onmessage({
                            data: data
                        }));
                        let go;
                        worker = {
                            onmessage: null,
                            postMessage: data => setTimeout(() => {
                                try {
                                    go = onmessage({
                                        data: data
                                    });
                                } catch (error) {
                                    rejectAllWith(error);
                                }
                            }),
                            terminate() {
                                if (go) for (let timeout of go._scheduledTimeouts.values()) clearTimeout(timeout);
                            }
                        };
                    }
                    let firstMessageResolve;
                    let firstMessageReject;
                    const firstMessagePromise = new Promise((resolve, reject) => {
                        firstMessageResolve = resolve;
                        firstMessageReject = reject;
                    });
                    worker.onmessage = ({data: error}) => {
                        worker.onmessage = ({data: data}) => readFromStdout(data);
                        if (error) firstMessageReject(error); else firstMessageResolve();
                    };
                    worker.postMessage(wasmModule || new URL(wasmURL, location.href).toString());
                    let {readFromStdout: readFromStdout, service: service} = createChannel({
                        writeToStdin(bytes) {
                            worker.postMessage(bytes);
                        },
                        isSync: false,
                        hasFS: false,
                        esbuild: browser_exports
                    });
                    yield firstMessagePromise;
                    stopService = () => {
                        worker.terminate();
                        initializePromise = void 0;
                        stopService = void 0;
                        longLivedService = void 0;
                    };
                    longLivedService = {
                        build: options => new Promise((resolve, reject) => {
                            rejectAllPromise.then(reject);
                            service.buildOrContext({
                                callName: "build",
                                refs: null,
                                options: options,
                                isTTY: false,
                                defaultWD: "/",
                                callback: (err, res) => err ? reject(err) : resolve(res)
                            });
                        }),
                        context: options => new Promise((resolve, reject) => {
                            rejectAllPromise.then(reject);
                            service.buildOrContext({
                                callName: "context",
                                refs: null,
                                options: options,
                                isTTY: false,
                                defaultWD: "/",
                                callback: (err, res) => err ? reject(err) : resolve(res)
                            });
                        }),
                        transform: (input, options) => new Promise((resolve, reject) => {
                            rejectAllPromise.then(reject);
                            service.transform({
                                callName: "transform",
                                refs: null,
                                input: input,
                                options: options || {},
                                isTTY: false,
                                fs: {
                                    readFile(_, callback) {
                                        callback(new Error("Internal error"), null);
                                    },
                                    writeFile(_, callback) {
                                        callback(null);
                                    }
                                },
                                callback: (err, res) => err ? reject(err) : resolve(res)
                            });
                        }),
                        formatMessages: (messages, options) => new Promise((resolve, reject) => {
                            rejectAllPromise.then(reject);
                            service.formatMessages({
                                callName: "formatMessages",
                                refs: null,
                                messages: messages,
                                options: options,
                                callback: (err, res) => err ? reject(err) : resolve(res)
                            });
                        }),
                        analyzeMetafile: (metafile, options) => new Promise((resolve, reject) => {
                            rejectAllPromise.then(reject);
                            service.analyzeMetafile({
                                callName: "analyzeMetafile",
                                refs: null,
                                metafile: typeof metafile === "string" ? metafile : JSON.stringify(metafile),
                                options: options,
                                callback: (err, res) => err ? reject(err) : resolve(res)
                            });
                        })
                    };
                });
                var browser_default = browser_exports;
            })(true ? module : 0);
        },
        "./node_modules/ieee754/index.js"(__unused_webpack_module, exports) {
            exports.read = function(buffer, offset, isLE, mLen, nBytes) {
                var e, m;
                var eLen = nBytes * 8 - mLen - 1;
                var eMax = (1 << eLen) - 1;
                var eBias = eMax >> 1;
                var nBits = -7;
                var i = isLE ? nBytes - 1 : 0;
                var d = isLE ? -1 : 1;
                var s = buffer[offset + i];
                i += d;
                e = s & (1 << -nBits) - 1;
                s >>= -nBits;
                nBits += eLen;
                for (;nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
                m = e & (1 << -nBits) - 1;
                e >>= -nBits;
                nBits += mLen;
                for (;nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
                if (e === 0) {
                    e = 1 - eBias;
                } else if (e === eMax) {
                    return m ? NaN : (s ? -1 : 1) * Infinity;
                } else {
                    m = m + Math.pow(2, mLen);
                    e = e - eBias;
                }
                return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
            };
            exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
                var e, m, c;
                var eLen = nBytes * 8 - mLen - 1;
                var eMax = (1 << eLen) - 1;
                var eBias = eMax >> 1;
                var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
                var i = isLE ? 0 : nBytes - 1;
                var d = isLE ? 1 : -1;
                var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
                value = Math.abs(value);
                if (isNaN(value) || value === Infinity) {
                    m = isNaN(value) ? 1 : 0;
                    e = eMax;
                } else {
                    e = Math.floor(Math.log(value) / Math.LN2);
                    if (value * (c = Math.pow(2, -e)) < 1) {
                        e--;
                        c *= 2;
                    }
                    if (e + eBias >= 1) {
                        value += rt / c;
                    } else {
                        value += rt * Math.pow(2, 1 - eBias);
                    }
                    if (value * c >= 2) {
                        e++;
                        c /= 2;
                    }
                    if (e + eBias >= eMax) {
                        m = 0;
                        e = eMax;
                    } else if (e + eBias >= 1) {
                        m = (value * c - 1) * Math.pow(2, mLen);
                        e = e + eBias;
                    } else {
                        m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
                        e = 0;
                    }
                }
                for (;mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {}
                e = e << mLen | m;
                eLen += mLen;
                for (;eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {}
                buffer[offset + i - d] |= s * 128;
            };
        },
        "./node_modules/node-stdlib-browser/node_modules/buffer/index.js"(__unused_webpack_module, exports, __webpack_require__) {
            "use strict";
            var base64 = __webpack_require__("./node_modules/base64-js/index.js");
            var ieee754 = __webpack_require__("./node_modules/ieee754/index.js");
            var customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
            exports.Buffer = Buffer;
            exports.SlowBuffer = SlowBuffer;
            exports.INSPECT_MAX_BYTES = 50;
            var K_MAX_LENGTH = 2147483647;
            exports.kMaxLength = K_MAX_LENGTH;
            Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
            if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
                console.error("This browser lacks typed array (Uint8Array) support which is required by " + "`buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
            }
            function typedArraySupport() {
                try {
                    var arr = new Uint8Array(1);
                    var proto = {
                        foo: function() {
                            return 42;
                        }
                    };
                    Object.setPrototypeOf(proto, Uint8Array.prototype);
                    Object.setPrototypeOf(arr, proto);
                    return arr.foo() === 42;
                } catch (e) {
                    return false;
                }
            }
            Object.defineProperty(Buffer.prototype, "parent", {
                enumerable: true,
                get: function() {
                    if (!Buffer.isBuffer(this)) return undefined;
                    return this.buffer;
                }
            });
            Object.defineProperty(Buffer.prototype, "offset", {
                enumerable: true,
                get: function() {
                    if (!Buffer.isBuffer(this)) return undefined;
                    return this.byteOffset;
                }
            });
            function createBuffer(length) {
                if (length > K_MAX_LENGTH) {
                    throw new RangeError('The value "' + length + '" is invalid for option "size"');
                }
                var buf = new Uint8Array(length);
                Object.setPrototypeOf(buf, Buffer.prototype);
                return buf;
            }
            function Buffer(arg, encodingOrOffset, length) {
                if (typeof arg === "number") {
                    if (typeof encodingOrOffset === "string") {
                        throw new TypeError('The "string" argument must be of type string. Received type number');
                    }
                    return allocUnsafe(arg);
                }
                return from(arg, encodingOrOffset, length);
            }
            Buffer.poolSize = 8192;
            function from(value, encodingOrOffset, length) {
                if (typeof value === "string") {
                    return fromString(value, encodingOrOffset);
                }
                if (ArrayBuffer.isView(value)) {
                    return fromArrayView(value);
                }
                if (value == null) {
                    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof value);
                }
                if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
                    return fromArrayBuffer(value, encodingOrOffset, length);
                }
                if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
                    return fromArrayBuffer(value, encodingOrOffset, length);
                }
                if (typeof value === "number") {
                    throw new TypeError('The "value" argument must not be of type number. Received type number');
                }
                var valueOf = value.valueOf && value.valueOf();
                if (valueOf != null && valueOf !== value) {
                    return Buffer.from(valueOf, encodingOrOffset, length);
                }
                var b = fromObject(value);
                if (b) return b;
                if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
                    return Buffer.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
                }
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof value);
            }
            Buffer.from = function(value, encodingOrOffset, length) {
                return from(value, encodingOrOffset, length);
            };
            Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
            Object.setPrototypeOf(Buffer, Uint8Array);
            function assertSize(size) {
                if (typeof size !== "number") {
                    throw new TypeError('"size" argument must be of type number');
                } else if (size < 0) {
                    throw new RangeError('The value "' + size + '" is invalid for option "size"');
                }
            }
            function alloc(size, fill, encoding) {
                assertSize(size);
                if (size <= 0) {
                    return createBuffer(size);
                }
                if (fill !== undefined) {
                    return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
                }
                return createBuffer(size);
            }
            Buffer.alloc = function(size, fill, encoding) {
                return alloc(size, fill, encoding);
            };
            function allocUnsafe(size) {
                assertSize(size);
                return createBuffer(size < 0 ? 0 : checked(size) | 0);
            }
            Buffer.allocUnsafe = function(size) {
                return allocUnsafe(size);
            };
            Buffer.allocUnsafeSlow = function(size) {
                return allocUnsafe(size);
            };
            function fromString(string, encoding) {
                if (typeof encoding !== "string" || encoding === "") {
                    encoding = "utf8";
                }
                if (!Buffer.isEncoding(encoding)) {
                    throw new TypeError("Unknown encoding: " + encoding);
                }
                var length = byteLength(string, encoding) | 0;
                var buf = createBuffer(length);
                var actual = buf.write(string, encoding);
                if (actual !== length) {
                    buf = buf.slice(0, actual);
                }
                return buf;
            }
            function fromArrayLike(array) {
                var length = array.length < 0 ? 0 : checked(array.length) | 0;
                var buf = createBuffer(length);
                for (var i = 0; i < length; i += 1) {
                    buf[i] = array[i] & 255;
                }
                return buf;
            }
            function fromArrayView(arrayView) {
                if (isInstance(arrayView, Uint8Array)) {
                    var copy = new Uint8Array(arrayView);
                    return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
                }
                return fromArrayLike(arrayView);
            }
            function fromArrayBuffer(array, byteOffset, length) {
                if (byteOffset < 0 || array.byteLength < byteOffset) {
                    throw new RangeError('"offset" is outside of buffer bounds');
                }
                if (array.byteLength < byteOffset + (length || 0)) {
                    throw new RangeError('"length" is outside of buffer bounds');
                }
                var buf;
                if (byteOffset === undefined && length === undefined) {
                    buf = new Uint8Array(array);
                } else if (length === undefined) {
                    buf = new Uint8Array(array, byteOffset);
                } else {
                    buf = new Uint8Array(array, byteOffset, length);
                }
                Object.setPrototypeOf(buf, Buffer.prototype);
                return buf;
            }
            function fromObject(obj) {
                if (Buffer.isBuffer(obj)) {
                    var len = checked(obj.length) | 0;
                    var buf = createBuffer(len);
                    if (buf.length === 0) {
                        return buf;
                    }
                    obj.copy(buf, 0, 0, len);
                    return buf;
                }
                if (obj.length !== undefined) {
                    if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
                        return createBuffer(0);
                    }
                    return fromArrayLike(obj);
                }
                if (obj.type === "Buffer" && Array.isArray(obj.data)) {
                    return fromArrayLike(obj.data);
                }
            }
            function checked(length) {
                if (length >= K_MAX_LENGTH) {
                    throw new RangeError("Attempt to allocate Buffer larger than maximum " + "size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
                }
                return length | 0;
            }
            function SlowBuffer(length) {
                if (+length != length) {
                    length = 0;
                }
                return Buffer.alloc(+length);
            }
            Buffer.isBuffer = function isBuffer(b) {
                return b != null && b._isBuffer === true && b !== Buffer.prototype;
            };
            Buffer.compare = function compare(a, b) {
                if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
                if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
                if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
                    throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                }
                if (a === b) return 0;
                var x = a.length;
                var y = b.length;
                for (var i = 0, len = Math.min(x, y); i < len; ++i) {
                    if (a[i] !== b[i]) {
                        x = a[i];
                        y = b[i];
                        break;
                    }
                }
                if (x < y) return -1;
                if (y < x) return 1;
                return 0;
            };
            Buffer.isEncoding = function isEncoding(encoding) {
                switch (String(encoding).toLowerCase()) {
                  case "hex":
                  case "utf8":
                  case "utf-8":
                  case "ascii":
                  case "latin1":
                  case "binary":
                  case "base64":
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return true;

                  default:
                    return false;
                }
            };
            Buffer.concat = function concat(list, length) {
                if (!Array.isArray(list)) {
                    throw new TypeError('"list" argument must be an Array of Buffers');
                }
                if (list.length === 0) {
                    return Buffer.alloc(0);
                }
                var i;
                if (length === undefined) {
                    length = 0;
                    for (i = 0; i < list.length; ++i) {
                        length += list[i].length;
                    }
                }
                var buffer = Buffer.allocUnsafe(length);
                var pos = 0;
                for (i = 0; i < list.length; ++i) {
                    var buf = list[i];
                    if (isInstance(buf, Uint8Array)) {
                        if (pos + buf.length > buffer.length) {
                            Buffer.from(buf).copy(buffer, pos);
                        } else {
                            Uint8Array.prototype.set.call(buffer, buf, pos);
                        }
                    } else if (!Buffer.isBuffer(buf)) {
                        throw new TypeError('"list" argument must be an Array of Buffers');
                    } else {
                        buf.copy(buffer, pos);
                    }
                    pos += buf.length;
                }
                return buffer;
            };
            function byteLength(string, encoding) {
                if (Buffer.isBuffer(string)) {
                    return string.length;
                }
                if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
                    return string.byteLength;
                }
                if (typeof string !== "string") {
                    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' + "Received type " + typeof string);
                }
                var len = string.length;
                var mustMatch = arguments.length > 2 && arguments[2] === true;
                if (!mustMatch && len === 0) return 0;
                var loweredCase = false;
                for (;;) {
                    switch (encoding) {
                      case "ascii":
                      case "latin1":
                      case "binary":
                        return len;

                      case "utf8":
                      case "utf-8":
                        return utf8ToBytes(string).length;

                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return len * 2;

                      case "hex":
                        return len >>> 1;

                      case "base64":
                        return base64ToBytes(string).length;

                      default:
                        if (loweredCase) {
                            return mustMatch ? -1 : utf8ToBytes(string).length;
                        }
                        encoding = ("" + encoding).toLowerCase();
                        loweredCase = true;
                    }
                }
            }
            Buffer.byteLength = byteLength;
            function slowToString(encoding, start, end) {
                var loweredCase = false;
                if (start === undefined || start < 0) {
                    start = 0;
                }
                if (start > this.length) {
                    return "";
                }
                if (end === undefined || end > this.length) {
                    end = this.length;
                }
                if (end <= 0) {
                    return "";
                }
                end >>>= 0;
                start >>>= 0;
                if (end <= start) {
                    return "";
                }
                if (!encoding) encoding = "utf8";
                while (true) {
                    switch (encoding) {
                      case "hex":
                        return hexSlice(this, start, end);

                      case "utf8":
                      case "utf-8":
                        return utf8Slice(this, start, end);

                      case "ascii":
                        return asciiSlice(this, start, end);

                      case "latin1":
                      case "binary":
                        return latin1Slice(this, start, end);

                      case "base64":
                        return base64Slice(this, start, end);

                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return utf16leSlice(this, start, end);

                      default:
                        if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
                        encoding = (encoding + "").toLowerCase();
                        loweredCase = true;
                    }
                }
            }
            Buffer.prototype._isBuffer = true;
            function swap(b, n, m) {
                var i = b[n];
                b[n] = b[m];
                b[m] = i;
            }
            Buffer.prototype.swap16 = function swap16() {
                var len = this.length;
                if (len % 2 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 16-bits");
                }
                for (var i = 0; i < len; i += 2) {
                    swap(this, i, i + 1);
                }
                return this;
            };
            Buffer.prototype.swap32 = function swap32() {
                var len = this.length;
                if (len % 4 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 32-bits");
                }
                for (var i = 0; i < len; i += 4) {
                    swap(this, i, i + 3);
                    swap(this, i + 1, i + 2);
                }
                return this;
            };
            Buffer.prototype.swap64 = function swap64() {
                var len = this.length;
                if (len % 8 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 64-bits");
                }
                for (var i = 0; i < len; i += 8) {
                    swap(this, i, i + 7);
                    swap(this, i + 1, i + 6);
                    swap(this, i + 2, i + 5);
                    swap(this, i + 3, i + 4);
                }
                return this;
            };
            Buffer.prototype.toString = function toString() {
                var length = this.length;
                if (length === 0) return "";
                if (arguments.length === 0) return utf8Slice(this, 0, length);
                return slowToString.apply(this, arguments);
            };
            Buffer.prototype.toLocaleString = Buffer.prototype.toString;
            Buffer.prototype.equals = function equals(b) {
                if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
                if (this === b) return true;
                return Buffer.compare(this, b) === 0;
            };
            Buffer.prototype.inspect = function inspect() {
                var str = "";
                var max = exports.INSPECT_MAX_BYTES;
                str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
                if (this.length > max) str += " ... ";
                return "<Buffer " + str + ">";
            };
            if (customInspectSymbol) {
                Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
            }
            Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
                if (isInstance(target, Uint8Array)) {
                    target = Buffer.from(target, target.offset, target.byteLength);
                }
                if (!Buffer.isBuffer(target)) {
                    throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. ' + "Received type " + typeof target);
                }
                if (start === undefined) {
                    start = 0;
                }
                if (end === undefined) {
                    end = target ? target.length : 0;
                }
                if (thisStart === undefined) {
                    thisStart = 0;
                }
                if (thisEnd === undefined) {
                    thisEnd = this.length;
                }
                if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
                    throw new RangeError("out of range index");
                }
                if (thisStart >= thisEnd && start >= end) {
                    return 0;
                }
                if (thisStart >= thisEnd) {
                    return -1;
                }
                if (start >= end) {
                    return 1;
                }
                start >>>= 0;
                end >>>= 0;
                thisStart >>>= 0;
                thisEnd >>>= 0;
                if (this === target) return 0;
                var x = thisEnd - thisStart;
                var y = end - start;
                var len = Math.min(x, y);
                var thisCopy = this.slice(thisStart, thisEnd);
                var targetCopy = target.slice(start, end);
                for (var i = 0; i < len; ++i) {
                    if (thisCopy[i] !== targetCopy[i]) {
                        x = thisCopy[i];
                        y = targetCopy[i];
                        break;
                    }
                }
                if (x < y) return -1;
                if (y < x) return 1;
                return 0;
            };
            function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
                if (buffer.length === 0) return -1;
                if (typeof byteOffset === "string") {
                    encoding = byteOffset;
                    byteOffset = 0;
                } else if (byteOffset > 2147483647) {
                    byteOffset = 2147483647;
                } else if (byteOffset < -2147483648) {
                    byteOffset = -2147483648;
                }
                byteOffset = +byteOffset;
                if (numberIsNaN(byteOffset)) {
                    byteOffset = dir ? 0 : buffer.length - 1;
                }
                if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
                if (byteOffset >= buffer.length) {
                    if (dir) return -1; else byteOffset = buffer.length - 1;
                } else if (byteOffset < 0) {
                    if (dir) byteOffset = 0; else return -1;
                }
                if (typeof val === "string") {
                    val = Buffer.from(val, encoding);
                }
                if (Buffer.isBuffer(val)) {
                    if (val.length === 0) {
                        return -1;
                    }
                    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
                } else if (typeof val === "number") {
                    val = val & 255;
                    if (typeof Uint8Array.prototype.indexOf === "function") {
                        if (dir) {
                            return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
                        } else {
                            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
                        }
                    }
                    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir);
                }
                throw new TypeError("val must be string, number or Buffer");
            }
            function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
                var indexSize = 1;
                var arrLength = arr.length;
                var valLength = val.length;
                if (encoding !== undefined) {
                    encoding = String(encoding).toLowerCase();
                    if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
                        if (arr.length < 2 || val.length < 2) {
                            return -1;
                        }
                        indexSize = 2;
                        arrLength /= 2;
                        valLength /= 2;
                        byteOffset /= 2;
                    }
                }
                function read(buf, i) {
                    if (indexSize === 1) {
                        return buf[i];
                    } else {
                        return buf.readUInt16BE(i * indexSize);
                    }
                }
                var i;
                if (dir) {
                    var foundIndex = -1;
                    for (i = byteOffset; i < arrLength; i++) {
                        if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
                            if (foundIndex === -1) foundIndex = i;
                            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
                        } else {
                            if (foundIndex !== -1) i -= i - foundIndex;
                            foundIndex = -1;
                        }
                    }
                } else {
                    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
                    for (i = byteOffset; i >= 0; i--) {
                        var found = true;
                        for (var j = 0; j < valLength; j++) {
                            if (read(arr, i + j) !== read(val, j)) {
                                found = false;
                                break;
                            }
                        }
                        if (found) return i;
                    }
                }
                return -1;
            }
            Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
                return this.indexOf(val, byteOffset, encoding) !== -1;
            };
            Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
                return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
            };
            Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
                return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
            };
            function hexWrite(buf, string, offset, length) {
                offset = Number(offset) || 0;
                var remaining = buf.length - offset;
                if (!length) {
                    length = remaining;
                } else {
                    length = Number(length);
                    if (length > remaining) {
                        length = remaining;
                    }
                }
                var strLen = string.length;
                if (length > strLen / 2) {
                    length = strLen / 2;
                }
                for (var i = 0; i < length; ++i) {
                    var parsed = parseInt(string.substr(i * 2, 2), 16);
                    if (numberIsNaN(parsed)) return i;
                    buf[offset + i] = parsed;
                }
                return i;
            }
            function utf8Write(buf, string, offset, length) {
                return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
            }
            function asciiWrite(buf, string, offset, length) {
                return blitBuffer(asciiToBytes(string), buf, offset, length);
            }
            function base64Write(buf, string, offset, length) {
                return blitBuffer(base64ToBytes(string), buf, offset, length);
            }
            function ucs2Write(buf, string, offset, length) {
                return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
            }
            Buffer.prototype.write = function write(string, offset, length, encoding) {
                if (offset === undefined) {
                    encoding = "utf8";
                    length = this.length;
                    offset = 0;
                } else if (length === undefined && typeof offset === "string") {
                    encoding = offset;
                    length = this.length;
                    offset = 0;
                } else if (isFinite(offset)) {
                    offset = offset >>> 0;
                    if (isFinite(length)) {
                        length = length >>> 0;
                        if (encoding === undefined) encoding = "utf8";
                    } else {
                        encoding = length;
                        length = undefined;
                    }
                } else {
                    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                }
                var remaining = this.length - offset;
                if (length === undefined || length > remaining) length = remaining;
                if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
                    throw new RangeError("Attempt to write outside buffer bounds");
                }
                if (!encoding) encoding = "utf8";
                var loweredCase = false;
                for (;;) {
                    switch (encoding) {
                      case "hex":
                        return hexWrite(this, string, offset, length);

                      case "utf8":
                      case "utf-8":
                        return utf8Write(this, string, offset, length);

                      case "ascii":
                      case "latin1":
                      case "binary":
                        return asciiWrite(this, string, offset, length);

                      case "base64":
                        return base64Write(this, string, offset, length);

                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return ucs2Write(this, string, offset, length);

                      default:
                        if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
                        encoding = ("" + encoding).toLowerCase();
                        loweredCase = true;
                    }
                }
            };
            Buffer.prototype.toJSON = function toJSON() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                };
            };
            function base64Slice(buf, start, end) {
                if (start === 0 && end === buf.length) {
                    return base64.fromByteArray(buf);
                } else {
                    return base64.fromByteArray(buf.slice(start, end));
                }
            }
            function utf8Slice(buf, start, end) {
                end = Math.min(buf.length, end);
                var res = [];
                var i = start;
                while (i < end) {
                    var firstByte = buf[i];
                    var codePoint = null;
                    var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
                    if (i + bytesPerSequence <= end) {
                        var secondByte, thirdByte, fourthByte, tempCodePoint;
                        switch (bytesPerSequence) {
                          case 1:
                            if (firstByte < 128) {
                                codePoint = firstByte;
                            }
                            break;

                          case 2:
                            secondByte = buf[i + 1];
                            if ((secondByte & 192) === 128) {
                                tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                                if (tempCodePoint > 127) {
                                    codePoint = tempCodePoint;
                                }
                            }
                            break;

                          case 3:
                            secondByte = buf[i + 1];
                            thirdByte = buf[i + 2];
                            if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                                tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                                if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                                    codePoint = tempCodePoint;
                                }
                            }
                            break;

                          case 4:
                            secondByte = buf[i + 1];
                            thirdByte = buf[i + 2];
                            fourthByte = buf[i + 3];
                            if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                                tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                                if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                                    codePoint = tempCodePoint;
                                }
                            }
                        }
                    }
                    if (codePoint === null) {
                        codePoint = 65533;
                        bytesPerSequence = 1;
                    } else if (codePoint > 65535) {
                        codePoint -= 65536;
                        res.push(codePoint >>> 10 & 1023 | 55296);
                        codePoint = 56320 | codePoint & 1023;
                    }
                    res.push(codePoint);
                    i += bytesPerSequence;
                }
                return decodeCodePointsArray(res);
            }
            var MAX_ARGUMENTS_LENGTH = 4096;
            function decodeCodePointsArray(codePoints) {
                var len = codePoints.length;
                if (len <= MAX_ARGUMENTS_LENGTH) {
                    return String.fromCharCode.apply(String, codePoints);
                }
                var res = "";
                var i = 0;
                while (i < len) {
                    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
                }
                return res;
            }
            function asciiSlice(buf, start, end) {
                var ret = "";
                end = Math.min(buf.length, end);
                for (var i = start; i < end; ++i) {
                    ret += String.fromCharCode(buf[i] & 127);
                }
                return ret;
            }
            function latin1Slice(buf, start, end) {
                var ret = "";
                end = Math.min(buf.length, end);
                for (var i = start; i < end; ++i) {
                    ret += String.fromCharCode(buf[i]);
                }
                return ret;
            }
            function hexSlice(buf, start, end) {
                var len = buf.length;
                if (!start || start < 0) start = 0;
                if (!end || end < 0 || end > len) end = len;
                var out = "";
                for (var i = start; i < end; ++i) {
                    out += hexSliceLookupTable[buf[i]];
                }
                return out;
            }
            function utf16leSlice(buf, start, end) {
                var bytes = buf.slice(start, end);
                var res = "";
                for (var i = 0; i < bytes.length - 1; i += 2) {
                    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
                }
                return res;
            }
            Buffer.prototype.slice = function slice(start, end) {
                var len = this.length;
                start = ~~start;
                end = end === undefined ? len : ~~end;
                if (start < 0) {
                    start += len;
                    if (start < 0) start = 0;
                } else if (start > len) {
                    start = len;
                }
                if (end < 0) {
                    end += len;
                    if (end < 0) end = 0;
                } else if (end > len) {
                    end = len;
                }
                if (end < start) end = start;
                var newBuf = this.subarray(start, end);
                Object.setPrototypeOf(newBuf, Buffer.prototype);
                return newBuf;
            };
            function checkOffset(offset, ext, length) {
                if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
                if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
            }
            Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
                offset = offset >>> 0;
                byteLength = byteLength >>> 0;
                if (!noAssert) checkOffset(offset, byteLength, this.length);
                var val = this[offset];
                var mul = 1;
                var i = 0;
                while (++i < byteLength && (mul *= 256)) {
                    val += this[offset + i] * mul;
                }
                return val;
            };
            Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
                offset = offset >>> 0;
                byteLength = byteLength >>> 0;
                if (!noAssert) {
                    checkOffset(offset, byteLength, this.length);
                }
                var val = this[offset + --byteLength];
                var mul = 1;
                while (byteLength > 0 && (mul *= 256)) {
                    val += this[offset + --byteLength] * mul;
                }
                return val;
            };
            Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
                offset = offset >>> 0;
                if (!noAssert) checkOffset(offset, 1, this.length);
                return this[offset];
            };
            Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
                offset = offset >>> 0;
                if (!noAssert) checkOffset(offset, 2, this.length);
                return this[offset] | this[offset + 1] << 8;
            };
            Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
                offset = offset >>> 0;
                if (!noAssert) checkOffset(offset, 2, this.length);
                return this[offset] << 8 | this[offset + 1];
            };
            Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
                offset = offset >>> 0;
                if (!noAssert) checkOffset(offset, 4, this.length);
                return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
            };
            Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
                offset = offset >>> 0;
                if (!noAssert) checkOffset(offset, 4, this.length);
                return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
            };
            Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
                offset = offset >>> 0;
                byteLength = byteLength >>> 0;
                if (!noAssert) checkOffset(offset, byteLength, this.length);
                var val = this[offset];
                var mul = 1;
                var i = 0;
                while (++i < byteLength && (mul *= 256)) {
                    val += this[offset + i] * mul;
                }
                mul *= 128;
                if (val >= mul) val -= Math.pow(2, 8 * byteLength);
                return val;
            };
            Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
                offset = offset >>> 0;
                byteLength = byteLength >>> 0;
                if (!noAssert) checkOffset(offset, byteLength, this.length);
                var i = byteLength;
                var mul = 1;
                var val = this[offset + --i];
                while (i > 0 && (mul *= 256)) {
                    val += this[offset + --i] * mul;
                }
                mul *= 128;
                if (val >= mul) val -= Math.pow(2, 8 * byteLength);
                return val;
            };
            Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
                offset = offset >>> 0;
                if (!noAssert) checkOffset(offset, 1, this.length);
                if (!(this[offset] & 128)) return this[offset];
                return (255 - this[offset] + 1) * -1;
            };
            Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
                offset = offset >>> 0;
                if (!noAssert) checkOffset(offset, 2, this.length);
                var val = this[offset] | this[offset + 1] << 8;
                return val & 32768 ? val | 4294901760 : val;
            };
            Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
                offset = offset >>> 0;
                if (!noAssert) checkOffset(offset, 2, this.length);
                var val = this[offset + 1] | this[offset] << 8;
                return val & 32768 ? val | 4294901760 : val;
            };
            Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
                offset = offset >>> 0;
                if (!noAssert) checkOffset(offset, 4, this.length);
                return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
            };
            Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
                offset = offset >>> 0;
                if (!noAssert) checkOffset(offset, 4, this.length);
                return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
            };
            Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
                offset = offset >>> 0;
                if (!noAssert) checkOffset(offset, 4, this.length);
                return ieee754.read(this, offset, true, 23, 4);
            };
            Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
                offset = offset >>> 0;
                if (!noAssert) checkOffset(offset, 4, this.length);
                return ieee754.read(this, offset, false, 23, 4);
            };
            Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
                offset = offset >>> 0;
                if (!noAssert) checkOffset(offset, 8, this.length);
                return ieee754.read(this, offset, true, 52, 8);
            };
            Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
                offset = offset >>> 0;
                if (!noAssert) checkOffset(offset, 8, this.length);
                return ieee754.read(this, offset, false, 52, 8);
            };
            function checkInt(buf, value, offset, ext, max, min) {
                if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
                if (offset + ext > buf.length) throw new RangeError("Index out of range");
            }
            Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
                value = +value;
                offset = offset >>> 0;
                byteLength = byteLength >>> 0;
                if (!noAssert) {
                    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
                    checkInt(this, value, offset, byteLength, maxBytes, 0);
                }
                var mul = 1;
                var i = 0;
                this[offset] = value & 255;
                while (++i < byteLength && (mul *= 256)) {
                    this[offset + i] = value / mul & 255;
                }
                return offset + byteLength;
            };
            Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
                value = +value;
                offset = offset >>> 0;
                byteLength = byteLength >>> 0;
                if (!noAssert) {
                    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
                    checkInt(this, value, offset, byteLength, maxBytes, 0);
                }
                var i = byteLength - 1;
                var mul = 1;
                this[offset + i] = value & 255;
                while (--i >= 0 && (mul *= 256)) {
                    this[offset + i] = value / mul & 255;
                }
                return offset + byteLength;
            };
            Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
                value = +value;
                offset = offset >>> 0;
                if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
                this[offset] = value & 255;
                return offset + 1;
            };
            Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
                value = +value;
                offset = offset >>> 0;
                if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
                this[offset] = value & 255;
                this[offset + 1] = value >>> 8;
                return offset + 2;
            };
            Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
                value = +value;
                offset = offset >>> 0;
                if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
                this[offset] = value >>> 8;
                this[offset + 1] = value & 255;
                return offset + 2;
            };
            Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
                value = +value;
                offset = offset >>> 0;
                if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
                this[offset + 3] = value >>> 24;
                this[offset + 2] = value >>> 16;
                this[offset + 1] = value >>> 8;
                this[offset] = value & 255;
                return offset + 4;
            };
            Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
                value = +value;
                offset = offset >>> 0;
                if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
                this[offset] = value >>> 24;
                this[offset + 1] = value >>> 16;
                this[offset + 2] = value >>> 8;
                this[offset + 3] = value & 255;
                return offset + 4;
            };
            Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
                value = +value;
                offset = offset >>> 0;
                if (!noAssert) {
                    var limit = Math.pow(2, 8 * byteLength - 1);
                    checkInt(this, value, offset, byteLength, limit - 1, -limit);
                }
                var i = 0;
                var mul = 1;
                var sub = 0;
                this[offset] = value & 255;
                while (++i < byteLength && (mul *= 256)) {
                    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
                        sub = 1;
                    }
                    this[offset + i] = (value / mul >> 0) - sub & 255;
                }
                return offset + byteLength;
            };
            Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
                value = +value;
                offset = offset >>> 0;
                if (!noAssert) {
                    var limit = Math.pow(2, 8 * byteLength - 1);
                    checkInt(this, value, offset, byteLength, limit - 1, -limit);
                }
                var i = byteLength - 1;
                var mul = 1;
                var sub = 0;
                this[offset + i] = value & 255;
                while (--i >= 0 && (mul *= 256)) {
                    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
                        sub = 1;
                    }
                    this[offset + i] = (value / mul >> 0) - sub & 255;
                }
                return offset + byteLength;
            };
            Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
                value = +value;
                offset = offset >>> 0;
                if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
                if (value < 0) value = 255 + value + 1;
                this[offset] = value & 255;
                return offset + 1;
            };
            Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
                value = +value;
                offset = offset >>> 0;
                if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
                this[offset] = value & 255;
                this[offset + 1] = value >>> 8;
                return offset + 2;
            };
            Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
                value = +value;
                offset = offset >>> 0;
                if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
                this[offset] = value >>> 8;
                this[offset + 1] = value & 255;
                return offset + 2;
            };
            Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
                value = +value;
                offset = offset >>> 0;
                if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
                this[offset] = value & 255;
                this[offset + 1] = value >>> 8;
                this[offset + 2] = value >>> 16;
                this[offset + 3] = value >>> 24;
                return offset + 4;
            };
            Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
                value = +value;
                offset = offset >>> 0;
                if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
                if (value < 0) value = 4294967295 + value + 1;
                this[offset] = value >>> 24;
                this[offset + 1] = value >>> 16;
                this[offset + 2] = value >>> 8;
                this[offset + 3] = value & 255;
                return offset + 4;
            };
            function checkIEEE754(buf, value, offset, ext, max, min) {
                if (offset + ext > buf.length) throw new RangeError("Index out of range");
                if (offset < 0) throw new RangeError("Index out of range");
            }
            function writeFloat(buf, value, offset, littleEndian, noAssert) {
                value = +value;
                offset = offset >>> 0;
                if (!noAssert) {
                    checkIEEE754(buf, value, offset, 4, 34028234663852886e22, -34028234663852886e22);
                }
                ieee754.write(buf, value, offset, littleEndian, 23, 4);
                return offset + 4;
            }
            Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
                return writeFloat(this, value, offset, true, noAssert);
            };
            Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
                return writeFloat(this, value, offset, false, noAssert);
            };
            function writeDouble(buf, value, offset, littleEndian, noAssert) {
                value = +value;
                offset = offset >>> 0;
                if (!noAssert) {
                    checkIEEE754(buf, value, offset, 8, 17976931348623157e292, -17976931348623157e292);
                }
                ieee754.write(buf, value, offset, littleEndian, 52, 8);
                return offset + 8;
            }
            Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
                return writeDouble(this, value, offset, true, noAssert);
            };
            Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
                return writeDouble(this, value, offset, false, noAssert);
            };
            Buffer.prototype.copy = function copy(target, targetStart, start, end) {
                if (!Buffer.isBuffer(target)) throw new TypeError("argument should be a Buffer");
                if (!start) start = 0;
                if (!end && end !== 0) end = this.length;
                if (targetStart >= target.length) targetStart = target.length;
                if (!targetStart) targetStart = 0;
                if (end > 0 && end < start) end = start;
                if (end === start) return 0;
                if (target.length === 0 || this.length === 0) return 0;
                if (targetStart < 0) {
                    throw new RangeError("targetStart out of bounds");
                }
                if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
                if (end < 0) throw new RangeError("sourceEnd out of bounds");
                if (end > this.length) end = this.length;
                if (target.length - targetStart < end - start) {
                    end = target.length - targetStart + start;
                }
                var len = end - start;
                if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
                    this.copyWithin(targetStart, start, end);
                } else {
                    Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
                }
                return len;
            };
            Buffer.prototype.fill = function fill(val, start, end, encoding) {
                if (typeof val === "string") {
                    if (typeof start === "string") {
                        encoding = start;
                        start = 0;
                        end = this.length;
                    } else if (typeof end === "string") {
                        encoding = end;
                        end = this.length;
                    }
                    if (encoding !== undefined && typeof encoding !== "string") {
                        throw new TypeError("encoding must be a string");
                    }
                    if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) {
                        throw new TypeError("Unknown encoding: " + encoding);
                    }
                    if (val.length === 1) {
                        var code = val.charCodeAt(0);
                        if (encoding === "utf8" && code < 128 || encoding === "latin1") {
                            val = code;
                        }
                    }
                } else if (typeof val === "number") {
                    val = val & 255;
                } else if (typeof val === "boolean") {
                    val = Number(val);
                }
                if (start < 0 || this.length < start || this.length < end) {
                    throw new RangeError("Out of range index");
                }
                if (end <= start) {
                    return this;
                }
                start = start >>> 0;
                end = end === undefined ? this.length : end >>> 0;
                if (!val) val = 0;
                var i;
                if (typeof val === "number") {
                    for (i = start; i < end; ++i) {
                        this[i] = val;
                    }
                } else {
                    var bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
                    var len = bytes.length;
                    if (len === 0) {
                        throw new TypeError('The value "' + val + '" is invalid for argument "value"');
                    }
                    for (i = 0; i < end - start; ++i) {
                        this[i + start] = bytes[i % len];
                    }
                }
                return this;
            };
            var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
            function base64clean(str) {
                str = str.split("=")[0];
                str = str.trim().replace(INVALID_BASE64_RE, "");
                if (str.length < 2) return "";
                while (str.length % 4 !== 0) {
                    str = str + "=";
                }
                return str;
            }
            function utf8ToBytes(string, units) {
                units = units || Infinity;
                var codePoint;
                var length = string.length;
                var leadSurrogate = null;
                var bytes = [];
                for (var i = 0; i < length; ++i) {
                    codePoint = string.charCodeAt(i);
                    if (codePoint > 55295 && codePoint < 57344) {
                        if (!leadSurrogate) {
                            if (codePoint > 56319) {
                                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                                continue;
                            } else if (i + 1 === length) {
                                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                                continue;
                            }
                            leadSurrogate = codePoint;
                            continue;
                        }
                        if (codePoint < 56320) {
                            if ((units -= 3) > -1) bytes.push(239, 191, 189);
                            leadSurrogate = codePoint;
                            continue;
                        }
                        codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
                    } else if (leadSurrogate) {
                        if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    }
                    leadSurrogate = null;
                    if (codePoint < 128) {
                        if ((units -= 1) < 0) break;
                        bytes.push(codePoint);
                    } else if (codePoint < 2048) {
                        if ((units -= 2) < 0) break;
                        bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
                    } else if (codePoint < 65536) {
                        if ((units -= 3) < 0) break;
                        bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
                    } else if (codePoint < 1114112) {
                        if ((units -= 4) < 0) break;
                        bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
                    } else {
                        throw new Error("Invalid code point");
                    }
                }
                return bytes;
            }
            function asciiToBytes(str) {
                var byteArray = [];
                for (var i = 0; i < str.length; ++i) {
                    byteArray.push(str.charCodeAt(i) & 255);
                }
                return byteArray;
            }
            function utf16leToBytes(str, units) {
                var c, hi, lo;
                var byteArray = [];
                for (var i = 0; i < str.length; ++i) {
                    if ((units -= 2) < 0) break;
                    c = str.charCodeAt(i);
                    hi = c >> 8;
                    lo = c % 256;
                    byteArray.push(lo);
                    byteArray.push(hi);
                }
                return byteArray;
            }
            function base64ToBytes(str) {
                return base64.toByteArray(base64clean(str));
            }
            function blitBuffer(src, dst, offset, length) {
                for (var i = 0; i < length; ++i) {
                    if (i + offset >= dst.length || i >= src.length) break;
                    dst[i + offset] = src[i];
                }
                return i;
            }
            function isInstance(obj, type) {
                return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
            }
            function numberIsNaN(obj) {
                return obj !== obj;
            }
            var hexSliceLookupTable = function() {
                var alphabet = "0123456789abcdef";
                var table = new Array(256);
                for (var i = 0; i < 16; ++i) {
                    var i16 = i * 16;
                    for (var j = 0; j < 16; ++j) {
                        table[i16 + j] = alphabet[i] + alphabet[j];
                    }
                }
                return table;
            }();
        }
    };
    const __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        const cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== undefined) {
            return cachedModule.exports;
        }
        const module = __webpack_module_cache__[moduleId] = {
            id: moduleId,
            loaded: false,
            exports: {}
        };
        if (!(moduleId in __webpack_modules__)) {
            delete __webpack_module_cache__[moduleId];
            const e = new Error("Cannot find module '" + moduleId + "'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
        }
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        module.loaded = true;
        return module.exports;
    }
    __webpack_require__.nmd = module => {
        module.paths = [];
        if (!module.children) module.children = [];
        return module;
    };
    let __webpack_exports__ = {};
    (() => {
        globalThis.esbuild = __webpack_require__("./node_modules/esbuild-wasm/lib/browser.js");
    })();
})();
