import {
  require_react
} from "./chunk-2CLD7BNN.js";
import {
  __commonJS,
  __toESM
} from "./chunk-WOOG5QLI.js";

// node_modules/entities/maps/decode.json
var require_decode = __commonJS({
  "node_modules/entities/maps/decode.json"(exports, module) {
    module.exports = { "0": 65533, "128": 8364, "130": 8218, "131": 402, "132": 8222, "133": 8230, "134": 8224, "135": 8225, "136": 710, "137": 8240, "138": 352, "139": 8249, "140": 338, "142": 381, "145": 8216, "146": 8217, "147": 8220, "148": 8221, "149": 8226, "150": 8211, "151": 8212, "152": 732, "153": 8482, "154": 353, "155": 8250, "156": 339, "158": 382, "159": 376 };
  }
});

// node_modules/entities/lib/decode_codepoint.js
var require_decode_codepoint = __commonJS({
  "node_modules/entities/lib/decode_codepoint.js"(exports, module) {
    var decodeMap = require_decode();
    module.exports = decodeCodePoint;
    function decodeCodePoint(codePoint) {
      if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
        return "�";
      }
      if (codePoint in decodeMap) {
        codePoint = decodeMap[codePoint];
      }
      var output = "";
      if (codePoint > 65535) {
        codePoint -= 65536;
        output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
        codePoint = 56320 | codePoint & 1023;
      }
      output += String.fromCharCode(codePoint);
      return output;
    }
  }
});

// node_modules/entities/maps/entities.json
var require_entities = __commonJS({
  "node_modules/entities/maps/entities.json"(exports, module) {
    module.exports = { Aacute: "Á", aacute: "á", Abreve: "Ă", abreve: "ă", ac: "∾", acd: "∿", acE: "∾̳", Acirc: "Â", acirc: "â", acute: "´", Acy: "А", acy: "а", AElig: "Æ", aelig: "æ", af: "⁡", Afr: "𝔄", afr: "𝔞", Agrave: "À", agrave: "à", alefsym: "ℵ", aleph: "ℵ", Alpha: "Α", alpha: "α", Amacr: "Ā", amacr: "ā", amalg: "⨿", amp: "&", AMP: "&", andand: "⩕", And: "⩓", and: "∧", andd: "⩜", andslope: "⩘", andv: "⩚", ang: "∠", ange: "⦤", angle: "∠", angmsdaa: "⦨", angmsdab: "⦩", angmsdac: "⦪", angmsdad: "⦫", angmsdae: "⦬", angmsdaf: "⦭", angmsdag: "⦮", angmsdah: "⦯", angmsd: "∡", angrt: "∟", angrtvb: "⊾", angrtvbd: "⦝", angsph: "∢", angst: "Å", angzarr: "⍼", Aogon: "Ą", aogon: "ą", Aopf: "𝔸", aopf: "𝕒", apacir: "⩯", ap: "≈", apE: "⩰", ape: "≊", apid: "≋", apos: "'", ApplyFunction: "⁡", approx: "≈", approxeq: "≊", Aring: "Å", aring: "å", Ascr: "𝒜", ascr: "𝒶", Assign: "≔", ast: "*", asymp: "≈", asympeq: "≍", Atilde: "Ã", atilde: "ã", Auml: "Ä", auml: "ä", awconint: "∳", awint: "⨑", backcong: "≌", backepsilon: "϶", backprime: "‵", backsim: "∽", backsimeq: "⋍", Backslash: "∖", Barv: "⫧", barvee: "⊽", barwed: "⌅", Barwed: "⌆", barwedge: "⌅", bbrk: "⎵", bbrktbrk: "⎶", bcong: "≌", Bcy: "Б", bcy: "б", bdquo: "„", becaus: "∵", because: "∵", Because: "∵", bemptyv: "⦰", bepsi: "϶", bernou: "ℬ", Bernoullis: "ℬ", Beta: "Β", beta: "β", beth: "ℶ", between: "≬", Bfr: "𝔅", bfr: "𝔟", bigcap: "⋂", bigcirc: "◯", bigcup: "⋃", bigodot: "⨀", bigoplus: "⨁", bigotimes: "⨂", bigsqcup: "⨆", bigstar: "★", bigtriangledown: "▽", bigtriangleup: "△", biguplus: "⨄", bigvee: "⋁", bigwedge: "⋀", bkarow: "⤍", blacklozenge: "⧫", blacksquare: "▪", blacktriangle: "▴", blacktriangledown: "▾", blacktriangleleft: "◂", blacktriangleright: "▸", blank: "␣", blk12: "▒", blk14: "░", blk34: "▓", block: "█", bne: "=⃥", bnequiv: "≡⃥", bNot: "⫭", bnot: "⌐", Bopf: "𝔹", bopf: "𝕓", bot: "⊥", bottom: "⊥", bowtie: "⋈", boxbox: "⧉", boxdl: "┐", boxdL: "╕", boxDl: "╖", boxDL: "╗", boxdr: "┌", boxdR: "╒", boxDr: "╓", boxDR: "╔", boxh: "─", boxH: "═", boxhd: "┬", boxHd: "╤", boxhD: "╥", boxHD: "╦", boxhu: "┴", boxHu: "╧", boxhU: "╨", boxHU: "╩", boxminus: "⊟", boxplus: "⊞", boxtimes: "⊠", boxul: "┘", boxuL: "╛", boxUl: "╜", boxUL: "╝", boxur: "└", boxuR: "╘", boxUr: "╙", boxUR: "╚", boxv: "│", boxV: "║", boxvh: "┼", boxvH: "╪", boxVh: "╫", boxVH: "╬", boxvl: "┤", boxvL: "╡", boxVl: "╢", boxVL: "╣", boxvr: "├", boxvR: "╞", boxVr: "╟", boxVR: "╠", bprime: "‵", breve: "˘", Breve: "˘", brvbar: "¦", bscr: "𝒷", Bscr: "ℬ", bsemi: "⁏", bsim: "∽", bsime: "⋍", bsolb: "⧅", bsol: "\\", bsolhsub: "⟈", bull: "•", bullet: "•", bump: "≎", bumpE: "⪮", bumpe: "≏", Bumpeq: "≎", bumpeq: "≏", Cacute: "Ć", cacute: "ć", capand: "⩄", capbrcup: "⩉", capcap: "⩋", cap: "∩", Cap: "⋒", capcup: "⩇", capdot: "⩀", CapitalDifferentialD: "ⅅ", caps: "∩︀", caret: "⁁", caron: "ˇ", Cayleys: "ℭ", ccaps: "⩍", Ccaron: "Č", ccaron: "č", Ccedil: "Ç", ccedil: "ç", Ccirc: "Ĉ", ccirc: "ĉ", Cconint: "∰", ccups: "⩌", ccupssm: "⩐", Cdot: "Ċ", cdot: "ċ", cedil: "¸", Cedilla: "¸", cemptyv: "⦲", cent: "¢", centerdot: "·", CenterDot: "·", cfr: "𝔠", Cfr: "ℭ", CHcy: "Ч", chcy: "ч", check: "✓", checkmark: "✓", Chi: "Χ", chi: "χ", circ: "ˆ", circeq: "≗", circlearrowleft: "↺", circlearrowright: "↻", circledast: "⊛", circledcirc: "⊚", circleddash: "⊝", CircleDot: "⊙", circledR: "®", circledS: "Ⓢ", CircleMinus: "⊖", CirclePlus: "⊕", CircleTimes: "⊗", cir: "○", cirE: "⧃", cire: "≗", cirfnint: "⨐", cirmid: "⫯", cirscir: "⧂", ClockwiseContourIntegral: "∲", CloseCurlyDoubleQuote: "”", CloseCurlyQuote: "’", clubs: "♣", clubsuit: "♣", colon: ":", Colon: "∷", Colone: "⩴", colone: "≔", coloneq: "≔", comma: ",", commat: "@", comp: "∁", compfn: "∘", complement: "∁", complexes: "ℂ", cong: "≅", congdot: "⩭", Congruent: "≡", conint: "∮", Conint: "∯", ContourIntegral: "∮", copf: "𝕔", Copf: "ℂ", coprod: "∐", Coproduct: "∐", copy: "©", COPY: "©", copysr: "℗", CounterClockwiseContourIntegral: "∳", crarr: "↵", cross: "✗", Cross: "⨯", Cscr: "𝒞", cscr: "𝒸", csub: "⫏", csube: "⫑", csup: "⫐", csupe: "⫒", ctdot: "⋯", cudarrl: "⤸", cudarrr: "⤵", cuepr: "⋞", cuesc: "⋟", cularr: "↶", cularrp: "⤽", cupbrcap: "⩈", cupcap: "⩆", CupCap: "≍", cup: "∪", Cup: "⋓", cupcup: "⩊", cupdot: "⊍", cupor: "⩅", cups: "∪︀", curarr: "↷", curarrm: "⤼", curlyeqprec: "⋞", curlyeqsucc: "⋟", curlyvee: "⋎", curlywedge: "⋏", curren: "¤", curvearrowleft: "↶", curvearrowright: "↷", cuvee: "⋎", cuwed: "⋏", cwconint: "∲", cwint: "∱", cylcty: "⌭", dagger: "†", Dagger: "‡", daleth: "ℸ", darr: "↓", Darr: "↡", dArr: "⇓", dash: "‐", Dashv: "⫤", dashv: "⊣", dbkarow: "⤏", dblac: "˝", Dcaron: "Ď", dcaron: "ď", Dcy: "Д", dcy: "д", ddagger: "‡", ddarr: "⇊", DD: "ⅅ", dd: "ⅆ", DDotrahd: "⤑", ddotseq: "⩷", deg: "°", Del: "∇", Delta: "Δ", delta: "δ", demptyv: "⦱", dfisht: "⥿", Dfr: "𝔇", dfr: "𝔡", dHar: "⥥", dharl: "⇃", dharr: "⇂", DiacriticalAcute: "´", DiacriticalDot: "˙", DiacriticalDoubleAcute: "˝", DiacriticalGrave: "`", DiacriticalTilde: "˜", diam: "⋄", diamond: "⋄", Diamond: "⋄", diamondsuit: "♦", diams: "♦", die: "¨", DifferentialD: "ⅆ", digamma: "ϝ", disin: "⋲", div: "÷", divide: "÷", divideontimes: "⋇", divonx: "⋇", DJcy: "Ђ", djcy: "ђ", dlcorn: "⌞", dlcrop: "⌍", dollar: "$", Dopf: "𝔻", dopf: "𝕕", Dot: "¨", dot: "˙", DotDot: "⃜", doteq: "≐", doteqdot: "≑", DotEqual: "≐", dotminus: "∸", dotplus: "∔", dotsquare: "⊡", doublebarwedge: "⌆", DoubleContourIntegral: "∯", DoubleDot: "¨", DoubleDownArrow: "⇓", DoubleLeftArrow: "⇐", DoubleLeftRightArrow: "⇔", DoubleLeftTee: "⫤", DoubleLongLeftArrow: "⟸", DoubleLongLeftRightArrow: "⟺", DoubleLongRightArrow: "⟹", DoubleRightArrow: "⇒", DoubleRightTee: "⊨", DoubleUpArrow: "⇑", DoubleUpDownArrow: "⇕", DoubleVerticalBar: "∥", DownArrowBar: "⤓", downarrow: "↓", DownArrow: "↓", Downarrow: "⇓", DownArrowUpArrow: "⇵", DownBreve: "̑", downdownarrows: "⇊", downharpoonleft: "⇃", downharpoonright: "⇂", DownLeftRightVector: "⥐", DownLeftTeeVector: "⥞", DownLeftVectorBar: "⥖", DownLeftVector: "↽", DownRightTeeVector: "⥟", DownRightVectorBar: "⥗", DownRightVector: "⇁", DownTeeArrow: "↧", DownTee: "⊤", drbkarow: "⤐", drcorn: "⌟", drcrop: "⌌", Dscr: "𝒟", dscr: "𝒹", DScy: "Ѕ", dscy: "ѕ", dsol: "⧶", Dstrok: "Đ", dstrok: "đ", dtdot: "⋱", dtri: "▿", dtrif: "▾", duarr: "⇵", duhar: "⥯", dwangle: "⦦", DZcy: "Џ", dzcy: "џ", dzigrarr: "⟿", Eacute: "É", eacute: "é", easter: "⩮", Ecaron: "Ě", ecaron: "ě", Ecirc: "Ê", ecirc: "ê", ecir: "≖", ecolon: "≕", Ecy: "Э", ecy: "э", eDDot: "⩷", Edot: "Ė", edot: "ė", eDot: "≑", ee: "ⅇ", efDot: "≒", Efr: "𝔈", efr: "𝔢", eg: "⪚", Egrave: "È", egrave: "è", egs: "⪖", egsdot: "⪘", el: "⪙", Element: "∈", elinters: "⏧", ell: "ℓ", els: "⪕", elsdot: "⪗", Emacr: "Ē", emacr: "ē", empty: "∅", emptyset: "∅", EmptySmallSquare: "◻", emptyv: "∅", EmptyVerySmallSquare: "▫", emsp13: " ", emsp14: " ", emsp: " ", ENG: "Ŋ", eng: "ŋ", ensp: " ", Eogon: "Ę", eogon: "ę", Eopf: "𝔼", eopf: "𝕖", epar: "⋕", eparsl: "⧣", eplus: "⩱", epsi: "ε", Epsilon: "Ε", epsilon: "ε", epsiv: "ϵ", eqcirc: "≖", eqcolon: "≕", eqsim: "≂", eqslantgtr: "⪖", eqslantless: "⪕", Equal: "⩵", equals: "=", EqualTilde: "≂", equest: "≟", Equilibrium: "⇌", equiv: "≡", equivDD: "⩸", eqvparsl: "⧥", erarr: "⥱", erDot: "≓", escr: "ℯ", Escr: "ℰ", esdot: "≐", Esim: "⩳", esim: "≂", Eta: "Η", eta: "η", ETH: "Ð", eth: "ð", Euml: "Ë", euml: "ë", euro: "€", excl: "!", exist: "∃", Exists: "∃", expectation: "ℰ", exponentiale: "ⅇ", ExponentialE: "ⅇ", fallingdotseq: "≒", Fcy: "Ф", fcy: "ф", female: "♀", ffilig: "ﬃ", fflig: "ﬀ", ffllig: "ﬄ", Ffr: "𝔉", ffr: "𝔣", filig: "ﬁ", FilledSmallSquare: "◼", FilledVerySmallSquare: "▪", fjlig: "fj", flat: "♭", fllig: "ﬂ", fltns: "▱", fnof: "ƒ", Fopf: "𝔽", fopf: "𝕗", forall: "∀", ForAll: "∀", fork: "⋔", forkv: "⫙", Fouriertrf: "ℱ", fpartint: "⨍", frac12: "½", frac13: "⅓", frac14: "¼", frac15: "⅕", frac16: "⅙", frac18: "⅛", frac23: "⅔", frac25: "⅖", frac34: "¾", frac35: "⅗", frac38: "⅜", frac45: "⅘", frac56: "⅚", frac58: "⅝", frac78: "⅞", frasl: "⁄", frown: "⌢", fscr: "𝒻", Fscr: "ℱ", gacute: "ǵ", Gamma: "Γ", gamma: "γ", Gammad: "Ϝ", gammad: "ϝ", gap: "⪆", Gbreve: "Ğ", gbreve: "ğ", Gcedil: "Ģ", Gcirc: "Ĝ", gcirc: "ĝ", Gcy: "Г", gcy: "г", Gdot: "Ġ", gdot: "ġ", ge: "≥", gE: "≧", gEl: "⪌", gel: "⋛", geq: "≥", geqq: "≧", geqslant: "⩾", gescc: "⪩", ges: "⩾", gesdot: "⪀", gesdoto: "⪂", gesdotol: "⪄", gesl: "⋛︀", gesles: "⪔", Gfr: "𝔊", gfr: "𝔤", gg: "≫", Gg: "⋙", ggg: "⋙", gimel: "ℷ", GJcy: "Ѓ", gjcy: "ѓ", gla: "⪥", gl: "≷", glE: "⪒", glj: "⪤", gnap: "⪊", gnapprox: "⪊", gne: "⪈", gnE: "≩", gneq: "⪈", gneqq: "≩", gnsim: "⋧", Gopf: "𝔾", gopf: "𝕘", grave: "`", GreaterEqual: "≥", GreaterEqualLess: "⋛", GreaterFullEqual: "≧", GreaterGreater: "⪢", GreaterLess: "≷", GreaterSlantEqual: "⩾", GreaterTilde: "≳", Gscr: "𝒢", gscr: "ℊ", gsim: "≳", gsime: "⪎", gsiml: "⪐", gtcc: "⪧", gtcir: "⩺", gt: ">", GT: ">", Gt: "≫", gtdot: "⋗", gtlPar: "⦕", gtquest: "⩼", gtrapprox: "⪆", gtrarr: "⥸", gtrdot: "⋗", gtreqless: "⋛", gtreqqless: "⪌", gtrless: "≷", gtrsim: "≳", gvertneqq: "≩︀", gvnE: "≩︀", Hacek: "ˇ", hairsp: " ", half: "½", hamilt: "ℋ", HARDcy: "Ъ", hardcy: "ъ", harrcir: "⥈", harr: "↔", hArr: "⇔", harrw: "↭", Hat: "^", hbar: "ℏ", Hcirc: "Ĥ", hcirc: "ĥ", hearts: "♥", heartsuit: "♥", hellip: "…", hercon: "⊹", hfr: "𝔥", Hfr: "ℌ", HilbertSpace: "ℋ", hksearow: "⤥", hkswarow: "⤦", hoarr: "⇿", homtht: "∻", hookleftarrow: "↩", hookrightarrow: "↪", hopf: "𝕙", Hopf: "ℍ", horbar: "―", HorizontalLine: "─", hscr: "𝒽", Hscr: "ℋ", hslash: "ℏ", Hstrok: "Ħ", hstrok: "ħ", HumpDownHump: "≎", HumpEqual: "≏", hybull: "⁃", hyphen: "‐", Iacute: "Í", iacute: "í", ic: "⁣", Icirc: "Î", icirc: "î", Icy: "И", icy: "и", Idot: "İ", IEcy: "Е", iecy: "е", iexcl: "¡", iff: "⇔", ifr: "𝔦", Ifr: "ℑ", Igrave: "Ì", igrave: "ì", ii: "ⅈ", iiiint: "⨌", iiint: "∭", iinfin: "⧜", iiota: "℩", IJlig: "Ĳ", ijlig: "ĳ", Imacr: "Ī", imacr: "ī", image: "ℑ", ImaginaryI: "ⅈ", imagline: "ℐ", imagpart: "ℑ", imath: "ı", Im: "ℑ", imof: "⊷", imped: "Ƶ", Implies: "⇒", incare: "℅", in: "∈", infin: "∞", infintie: "⧝", inodot: "ı", intcal: "⊺", int: "∫", Int: "∬", integers: "ℤ", Integral: "∫", intercal: "⊺", Intersection: "⋂", intlarhk: "⨗", intprod: "⨼", InvisibleComma: "⁣", InvisibleTimes: "⁢", IOcy: "Ё", iocy: "ё", Iogon: "Į", iogon: "į", Iopf: "𝕀", iopf: "𝕚", Iota: "Ι", iota: "ι", iprod: "⨼", iquest: "¿", iscr: "𝒾", Iscr: "ℐ", isin: "∈", isindot: "⋵", isinE: "⋹", isins: "⋴", isinsv: "⋳", isinv: "∈", it: "⁢", Itilde: "Ĩ", itilde: "ĩ", Iukcy: "І", iukcy: "і", Iuml: "Ï", iuml: "ï", Jcirc: "Ĵ", jcirc: "ĵ", Jcy: "Й", jcy: "й", Jfr: "𝔍", jfr: "𝔧", jmath: "ȷ", Jopf: "𝕁", jopf: "𝕛", Jscr: "𝒥", jscr: "𝒿", Jsercy: "Ј", jsercy: "ј", Jukcy: "Є", jukcy: "є", Kappa: "Κ", kappa: "κ", kappav: "ϰ", Kcedil: "Ķ", kcedil: "ķ", Kcy: "К", kcy: "к", Kfr: "𝔎", kfr: "𝔨", kgreen: "ĸ", KHcy: "Х", khcy: "х", KJcy: "Ќ", kjcy: "ќ", Kopf: "𝕂", kopf: "𝕜", Kscr: "𝒦", kscr: "𝓀", lAarr: "⇚", Lacute: "Ĺ", lacute: "ĺ", laemptyv: "⦴", lagran: "ℒ", Lambda: "Λ", lambda: "λ", lang: "⟨", Lang: "⟪", langd: "⦑", langle: "⟨", lap: "⪅", Laplacetrf: "ℒ", laquo: "«", larrb: "⇤", larrbfs: "⤟", larr: "←", Larr: "↞", lArr: "⇐", larrfs: "⤝", larrhk: "↩", larrlp: "↫", larrpl: "⤹", larrsim: "⥳", larrtl: "↢", latail: "⤙", lAtail: "⤛", lat: "⪫", late: "⪭", lates: "⪭︀", lbarr: "⤌", lBarr: "⤎", lbbrk: "❲", lbrace: "{", lbrack: "[", lbrke: "⦋", lbrksld: "⦏", lbrkslu: "⦍", Lcaron: "Ľ", lcaron: "ľ", Lcedil: "Ļ", lcedil: "ļ", lceil: "⌈", lcub: "{", Lcy: "Л", lcy: "л", ldca: "⤶", ldquo: "“", ldquor: "„", ldrdhar: "⥧", ldrushar: "⥋", ldsh: "↲", le: "≤", lE: "≦", LeftAngleBracket: "⟨", LeftArrowBar: "⇤", leftarrow: "←", LeftArrow: "←", Leftarrow: "⇐", LeftArrowRightArrow: "⇆", leftarrowtail: "↢", LeftCeiling: "⌈", LeftDoubleBracket: "⟦", LeftDownTeeVector: "⥡", LeftDownVectorBar: "⥙", LeftDownVector: "⇃", LeftFloor: "⌊", leftharpoondown: "↽", leftharpoonup: "↼", leftleftarrows: "⇇", leftrightarrow: "↔", LeftRightArrow: "↔", Leftrightarrow: "⇔", leftrightarrows: "⇆", leftrightharpoons: "⇋", leftrightsquigarrow: "↭", LeftRightVector: "⥎", LeftTeeArrow: "↤", LeftTee: "⊣", LeftTeeVector: "⥚", leftthreetimes: "⋋", LeftTriangleBar: "⧏", LeftTriangle: "⊲", LeftTriangleEqual: "⊴", LeftUpDownVector: "⥑", LeftUpTeeVector: "⥠", LeftUpVectorBar: "⥘", LeftUpVector: "↿", LeftVectorBar: "⥒", LeftVector: "↼", lEg: "⪋", leg: "⋚", leq: "≤", leqq: "≦", leqslant: "⩽", lescc: "⪨", les: "⩽", lesdot: "⩿", lesdoto: "⪁", lesdotor: "⪃", lesg: "⋚︀", lesges: "⪓", lessapprox: "⪅", lessdot: "⋖", lesseqgtr: "⋚", lesseqqgtr: "⪋", LessEqualGreater: "⋚", LessFullEqual: "≦", LessGreater: "≶", lessgtr: "≶", LessLess: "⪡", lesssim: "≲", LessSlantEqual: "⩽", LessTilde: "≲", lfisht: "⥼", lfloor: "⌊", Lfr: "𝔏", lfr: "𝔩", lg: "≶", lgE: "⪑", lHar: "⥢", lhard: "↽", lharu: "↼", lharul: "⥪", lhblk: "▄", LJcy: "Љ", ljcy: "љ", llarr: "⇇", ll: "≪", Ll: "⋘", llcorner: "⌞", Lleftarrow: "⇚", llhard: "⥫", lltri: "◺", Lmidot: "Ŀ", lmidot: "ŀ", lmoustache: "⎰", lmoust: "⎰", lnap: "⪉", lnapprox: "⪉", lne: "⪇", lnE: "≨", lneq: "⪇", lneqq: "≨", lnsim: "⋦", loang: "⟬", loarr: "⇽", lobrk: "⟦", longleftarrow: "⟵", LongLeftArrow: "⟵", Longleftarrow: "⟸", longleftrightarrow: "⟷", LongLeftRightArrow: "⟷", Longleftrightarrow: "⟺", longmapsto: "⟼", longrightarrow: "⟶", LongRightArrow: "⟶", Longrightarrow: "⟹", looparrowleft: "↫", looparrowright: "↬", lopar: "⦅", Lopf: "𝕃", lopf: "𝕝", loplus: "⨭", lotimes: "⨴", lowast: "∗", lowbar: "_", LowerLeftArrow: "↙", LowerRightArrow: "↘", loz: "◊", lozenge: "◊", lozf: "⧫", lpar: "(", lparlt: "⦓", lrarr: "⇆", lrcorner: "⌟", lrhar: "⇋", lrhard: "⥭", lrm: "‎", lrtri: "⊿", lsaquo: "‹", lscr: "𝓁", Lscr: "ℒ", lsh: "↰", Lsh: "↰", lsim: "≲", lsime: "⪍", lsimg: "⪏", lsqb: "[", lsquo: "‘", lsquor: "‚", Lstrok: "Ł", lstrok: "ł", ltcc: "⪦", ltcir: "⩹", lt: "<", LT: "<", Lt: "≪", ltdot: "⋖", lthree: "⋋", ltimes: "⋉", ltlarr: "⥶", ltquest: "⩻", ltri: "◃", ltrie: "⊴", ltrif: "◂", ltrPar: "⦖", lurdshar: "⥊", luruhar: "⥦", lvertneqq: "≨︀", lvnE: "≨︀", macr: "¯", male: "♂", malt: "✠", maltese: "✠", Map: "⤅", map: "↦", mapsto: "↦", mapstodown: "↧", mapstoleft: "↤", mapstoup: "↥", marker: "▮", mcomma: "⨩", Mcy: "М", mcy: "м", mdash: "—", mDDot: "∺", measuredangle: "∡", MediumSpace: " ", Mellintrf: "ℳ", Mfr: "𝔐", mfr: "𝔪", mho: "℧", micro: "µ", midast: "*", midcir: "⫰", mid: "∣", middot: "·", minusb: "⊟", minus: "−", minusd: "∸", minusdu: "⨪", MinusPlus: "∓", mlcp: "⫛", mldr: "…", mnplus: "∓", models: "⊧", Mopf: "𝕄", mopf: "𝕞", mp: "∓", mscr: "𝓂", Mscr: "ℳ", mstpos: "∾", Mu: "Μ", mu: "μ", multimap: "⊸", mumap: "⊸", nabla: "∇", Nacute: "Ń", nacute: "ń", nang: "∠⃒", nap: "≉", napE: "⩰̸", napid: "≋̸", napos: "ŉ", napprox: "≉", natural: "♮", naturals: "ℕ", natur: "♮", nbsp: " ", nbump: "≎̸", nbumpe: "≏̸", ncap: "⩃", Ncaron: "Ň", ncaron: "ň", Ncedil: "Ņ", ncedil: "ņ", ncong: "≇", ncongdot: "⩭̸", ncup: "⩂", Ncy: "Н", ncy: "н", ndash: "–", nearhk: "⤤", nearr: "↗", neArr: "⇗", nearrow: "↗", ne: "≠", nedot: "≐̸", NegativeMediumSpace: "​", NegativeThickSpace: "​", NegativeThinSpace: "​", NegativeVeryThinSpace: "​", nequiv: "≢", nesear: "⤨", nesim: "≂̸", NestedGreaterGreater: "≫", NestedLessLess: "≪", NewLine: "\n", nexist: "∄", nexists: "∄", Nfr: "𝔑", nfr: "𝔫", ngE: "≧̸", nge: "≱", ngeq: "≱", ngeqq: "≧̸", ngeqslant: "⩾̸", nges: "⩾̸", nGg: "⋙̸", ngsim: "≵", nGt: "≫⃒", ngt: "≯", ngtr: "≯", nGtv: "≫̸", nharr: "↮", nhArr: "⇎", nhpar: "⫲", ni: "∋", nis: "⋼", nisd: "⋺", niv: "∋", NJcy: "Њ", njcy: "њ", nlarr: "↚", nlArr: "⇍", nldr: "‥", nlE: "≦̸", nle: "≰", nleftarrow: "↚", nLeftarrow: "⇍", nleftrightarrow: "↮", nLeftrightarrow: "⇎", nleq: "≰", nleqq: "≦̸", nleqslant: "⩽̸", nles: "⩽̸", nless: "≮", nLl: "⋘̸", nlsim: "≴", nLt: "≪⃒", nlt: "≮", nltri: "⋪", nltrie: "⋬", nLtv: "≪̸", nmid: "∤", NoBreak: "⁠", NonBreakingSpace: " ", nopf: "𝕟", Nopf: "ℕ", Not: "⫬", not: "¬", NotCongruent: "≢", NotCupCap: "≭", NotDoubleVerticalBar: "∦", NotElement: "∉", NotEqual: "≠", NotEqualTilde: "≂̸", NotExists: "∄", NotGreater: "≯", NotGreaterEqual: "≱", NotGreaterFullEqual: "≧̸", NotGreaterGreater: "≫̸", NotGreaterLess: "≹", NotGreaterSlantEqual: "⩾̸", NotGreaterTilde: "≵", NotHumpDownHump: "≎̸", NotHumpEqual: "≏̸", notin: "∉", notindot: "⋵̸", notinE: "⋹̸", notinva: "∉", notinvb: "⋷", notinvc: "⋶", NotLeftTriangleBar: "⧏̸", NotLeftTriangle: "⋪", NotLeftTriangleEqual: "⋬", NotLess: "≮", NotLessEqual: "≰", NotLessGreater: "≸", NotLessLess: "≪̸", NotLessSlantEqual: "⩽̸", NotLessTilde: "≴", NotNestedGreaterGreater: "⪢̸", NotNestedLessLess: "⪡̸", notni: "∌", notniva: "∌", notnivb: "⋾", notnivc: "⋽", NotPrecedes: "⊀", NotPrecedesEqual: "⪯̸", NotPrecedesSlantEqual: "⋠", NotReverseElement: "∌", NotRightTriangleBar: "⧐̸", NotRightTriangle: "⋫", NotRightTriangleEqual: "⋭", NotSquareSubset: "⊏̸", NotSquareSubsetEqual: "⋢", NotSquareSuperset: "⊐̸", NotSquareSupersetEqual: "⋣", NotSubset: "⊂⃒", NotSubsetEqual: "⊈", NotSucceeds: "⊁", NotSucceedsEqual: "⪰̸", NotSucceedsSlantEqual: "⋡", NotSucceedsTilde: "≿̸", NotSuperset: "⊃⃒", NotSupersetEqual: "⊉", NotTilde: "≁", NotTildeEqual: "≄", NotTildeFullEqual: "≇", NotTildeTilde: "≉", NotVerticalBar: "∤", nparallel: "∦", npar: "∦", nparsl: "⫽⃥", npart: "∂̸", npolint: "⨔", npr: "⊀", nprcue: "⋠", nprec: "⊀", npreceq: "⪯̸", npre: "⪯̸", nrarrc: "⤳̸", nrarr: "↛", nrArr: "⇏", nrarrw: "↝̸", nrightarrow: "↛", nRightarrow: "⇏", nrtri: "⋫", nrtrie: "⋭", nsc: "⊁", nsccue: "⋡", nsce: "⪰̸", Nscr: "𝒩", nscr: "𝓃", nshortmid: "∤", nshortparallel: "∦", nsim: "≁", nsime: "≄", nsimeq: "≄", nsmid: "∤", nspar: "∦", nsqsube: "⋢", nsqsupe: "⋣", nsub: "⊄", nsubE: "⫅̸", nsube: "⊈", nsubset: "⊂⃒", nsubseteq: "⊈", nsubseteqq: "⫅̸", nsucc: "⊁", nsucceq: "⪰̸", nsup: "⊅", nsupE: "⫆̸", nsupe: "⊉", nsupset: "⊃⃒", nsupseteq: "⊉", nsupseteqq: "⫆̸", ntgl: "≹", Ntilde: "Ñ", ntilde: "ñ", ntlg: "≸", ntriangleleft: "⋪", ntrianglelefteq: "⋬", ntriangleright: "⋫", ntrianglerighteq: "⋭", Nu: "Ν", nu: "ν", num: "#", numero: "№", numsp: " ", nvap: "≍⃒", nvdash: "⊬", nvDash: "⊭", nVdash: "⊮", nVDash: "⊯", nvge: "≥⃒", nvgt: ">⃒", nvHarr: "⤄", nvinfin: "⧞", nvlArr: "⤂", nvle: "≤⃒", nvlt: "<⃒", nvltrie: "⊴⃒", nvrArr: "⤃", nvrtrie: "⊵⃒", nvsim: "∼⃒", nwarhk: "⤣", nwarr: "↖", nwArr: "⇖", nwarrow: "↖", nwnear: "⤧", Oacute: "Ó", oacute: "ó", oast: "⊛", Ocirc: "Ô", ocirc: "ô", ocir: "⊚", Ocy: "О", ocy: "о", odash: "⊝", Odblac: "Ő", odblac: "ő", odiv: "⨸", odot: "⊙", odsold: "⦼", OElig: "Œ", oelig: "œ", ofcir: "⦿", Ofr: "𝔒", ofr: "𝔬", ogon: "˛", Ograve: "Ò", ograve: "ò", ogt: "⧁", ohbar: "⦵", ohm: "Ω", oint: "∮", olarr: "↺", olcir: "⦾", olcross: "⦻", oline: "‾", olt: "⧀", Omacr: "Ō", omacr: "ō", Omega: "Ω", omega: "ω", Omicron: "Ο", omicron: "ο", omid: "⦶", ominus: "⊖", Oopf: "𝕆", oopf: "𝕠", opar: "⦷", OpenCurlyDoubleQuote: "“", OpenCurlyQuote: "‘", operp: "⦹", oplus: "⊕", orarr: "↻", Or: "⩔", or: "∨", ord: "⩝", order: "ℴ", orderof: "ℴ", ordf: "ª", ordm: "º", origof: "⊶", oror: "⩖", orslope: "⩗", orv: "⩛", oS: "Ⓢ", Oscr: "𝒪", oscr: "ℴ", Oslash: "Ø", oslash: "ø", osol: "⊘", Otilde: "Õ", otilde: "õ", otimesas: "⨶", Otimes: "⨷", otimes: "⊗", Ouml: "Ö", ouml: "ö", ovbar: "⌽", OverBar: "‾", OverBrace: "⏞", OverBracket: "⎴", OverParenthesis: "⏜", para: "¶", parallel: "∥", par: "∥", parsim: "⫳", parsl: "⫽", part: "∂", PartialD: "∂", Pcy: "П", pcy: "п", percnt: "%", period: ".", permil: "‰", perp: "⊥", pertenk: "‱", Pfr: "𝔓", pfr: "𝔭", Phi: "Φ", phi: "φ", phiv: "ϕ", phmmat: "ℳ", phone: "☎", Pi: "Π", pi: "π", pitchfork: "⋔", piv: "ϖ", planck: "ℏ", planckh: "ℎ", plankv: "ℏ", plusacir: "⨣", plusb: "⊞", pluscir: "⨢", plus: "+", plusdo: "∔", plusdu: "⨥", pluse: "⩲", PlusMinus: "±", plusmn: "±", plussim: "⨦", plustwo: "⨧", pm: "±", Poincareplane: "ℌ", pointint: "⨕", popf: "𝕡", Popf: "ℙ", pound: "£", prap: "⪷", Pr: "⪻", pr: "≺", prcue: "≼", precapprox: "⪷", prec: "≺", preccurlyeq: "≼", Precedes: "≺", PrecedesEqual: "⪯", PrecedesSlantEqual: "≼", PrecedesTilde: "≾", preceq: "⪯", precnapprox: "⪹", precneqq: "⪵", precnsim: "⋨", pre: "⪯", prE: "⪳", precsim: "≾", prime: "′", Prime: "″", primes: "ℙ", prnap: "⪹", prnE: "⪵", prnsim: "⋨", prod: "∏", Product: "∏", profalar: "⌮", profline: "⌒", profsurf: "⌓", prop: "∝", Proportional: "∝", Proportion: "∷", propto: "∝", prsim: "≾", prurel: "⊰", Pscr: "𝒫", pscr: "𝓅", Psi: "Ψ", psi: "ψ", puncsp: " ", Qfr: "𝔔", qfr: "𝔮", qint: "⨌", qopf: "𝕢", Qopf: "ℚ", qprime: "⁗", Qscr: "𝒬", qscr: "𝓆", quaternions: "ℍ", quatint: "⨖", quest: "?", questeq: "≟", quot: '"', QUOT: '"', rAarr: "⇛", race: "∽̱", Racute: "Ŕ", racute: "ŕ", radic: "√", raemptyv: "⦳", rang: "⟩", Rang: "⟫", rangd: "⦒", range: "⦥", rangle: "⟩", raquo: "»", rarrap: "⥵", rarrb: "⇥", rarrbfs: "⤠", rarrc: "⤳", rarr: "→", Rarr: "↠", rArr: "⇒", rarrfs: "⤞", rarrhk: "↪", rarrlp: "↬", rarrpl: "⥅", rarrsim: "⥴", Rarrtl: "⤖", rarrtl: "↣", rarrw: "↝", ratail: "⤚", rAtail: "⤜", ratio: "∶", rationals: "ℚ", rbarr: "⤍", rBarr: "⤏", RBarr: "⤐", rbbrk: "❳", rbrace: "}", rbrack: "]", rbrke: "⦌", rbrksld: "⦎", rbrkslu: "⦐", Rcaron: "Ř", rcaron: "ř", Rcedil: "Ŗ", rcedil: "ŗ", rceil: "⌉", rcub: "}", Rcy: "Р", rcy: "р", rdca: "⤷", rdldhar: "⥩", rdquo: "”", rdquor: "”", rdsh: "↳", real: "ℜ", realine: "ℛ", realpart: "ℜ", reals: "ℝ", Re: "ℜ", rect: "▭", reg: "®", REG: "®", ReverseElement: "∋", ReverseEquilibrium: "⇋", ReverseUpEquilibrium: "⥯", rfisht: "⥽", rfloor: "⌋", rfr: "𝔯", Rfr: "ℜ", rHar: "⥤", rhard: "⇁", rharu: "⇀", rharul: "⥬", Rho: "Ρ", rho: "ρ", rhov: "ϱ", RightAngleBracket: "⟩", RightArrowBar: "⇥", rightarrow: "→", RightArrow: "→", Rightarrow: "⇒", RightArrowLeftArrow: "⇄", rightarrowtail: "↣", RightCeiling: "⌉", RightDoubleBracket: "⟧", RightDownTeeVector: "⥝", RightDownVectorBar: "⥕", RightDownVector: "⇂", RightFloor: "⌋", rightharpoondown: "⇁", rightharpoonup: "⇀", rightleftarrows: "⇄", rightleftharpoons: "⇌", rightrightarrows: "⇉", rightsquigarrow: "↝", RightTeeArrow: "↦", RightTee: "⊢", RightTeeVector: "⥛", rightthreetimes: "⋌", RightTriangleBar: "⧐", RightTriangle: "⊳", RightTriangleEqual: "⊵", RightUpDownVector: "⥏", RightUpTeeVector: "⥜", RightUpVectorBar: "⥔", RightUpVector: "↾", RightVectorBar: "⥓", RightVector: "⇀", ring: "˚", risingdotseq: "≓", rlarr: "⇄", rlhar: "⇌", rlm: "‏", rmoustache: "⎱", rmoust: "⎱", rnmid: "⫮", roang: "⟭", roarr: "⇾", robrk: "⟧", ropar: "⦆", ropf: "𝕣", Ropf: "ℝ", roplus: "⨮", rotimes: "⨵", RoundImplies: "⥰", rpar: ")", rpargt: "⦔", rppolint: "⨒", rrarr: "⇉", Rrightarrow: "⇛", rsaquo: "›", rscr: "𝓇", Rscr: "ℛ", rsh: "↱", Rsh: "↱", rsqb: "]", rsquo: "’", rsquor: "’", rthree: "⋌", rtimes: "⋊", rtri: "▹", rtrie: "⊵", rtrif: "▸", rtriltri: "⧎", RuleDelayed: "⧴", ruluhar: "⥨", rx: "℞", Sacute: "Ś", sacute: "ś", sbquo: "‚", scap: "⪸", Scaron: "Š", scaron: "š", Sc: "⪼", sc: "≻", sccue: "≽", sce: "⪰", scE: "⪴", Scedil: "Ş", scedil: "ş", Scirc: "Ŝ", scirc: "ŝ", scnap: "⪺", scnE: "⪶", scnsim: "⋩", scpolint: "⨓", scsim: "≿", Scy: "С", scy: "с", sdotb: "⊡", sdot: "⋅", sdote: "⩦", searhk: "⤥", searr: "↘", seArr: "⇘", searrow: "↘", sect: "§", semi: ";", seswar: "⤩", setminus: "∖", setmn: "∖", sext: "✶", Sfr: "𝔖", sfr: "𝔰", sfrown: "⌢", sharp: "♯", SHCHcy: "Щ", shchcy: "щ", SHcy: "Ш", shcy: "ш", ShortDownArrow: "↓", ShortLeftArrow: "←", shortmid: "∣", shortparallel: "∥", ShortRightArrow: "→", ShortUpArrow: "↑", shy: "­", Sigma: "Σ", sigma: "σ", sigmaf: "ς", sigmav: "ς", sim: "∼", simdot: "⩪", sime: "≃", simeq: "≃", simg: "⪞", simgE: "⪠", siml: "⪝", simlE: "⪟", simne: "≆", simplus: "⨤", simrarr: "⥲", slarr: "←", SmallCircle: "∘", smallsetminus: "∖", smashp: "⨳", smeparsl: "⧤", smid: "∣", smile: "⌣", smt: "⪪", smte: "⪬", smtes: "⪬︀", SOFTcy: "Ь", softcy: "ь", solbar: "⌿", solb: "⧄", sol: "/", Sopf: "𝕊", sopf: "𝕤", spades: "♠", spadesuit: "♠", spar: "∥", sqcap: "⊓", sqcaps: "⊓︀", sqcup: "⊔", sqcups: "⊔︀", Sqrt: "√", sqsub: "⊏", sqsube: "⊑", sqsubset: "⊏", sqsubseteq: "⊑", sqsup: "⊐", sqsupe: "⊒", sqsupset: "⊐", sqsupseteq: "⊒", square: "□", Square: "□", SquareIntersection: "⊓", SquareSubset: "⊏", SquareSubsetEqual: "⊑", SquareSuperset: "⊐", SquareSupersetEqual: "⊒", SquareUnion: "⊔", squarf: "▪", squ: "□", squf: "▪", srarr: "→", Sscr: "𝒮", sscr: "𝓈", ssetmn: "∖", ssmile: "⌣", sstarf: "⋆", Star: "⋆", star: "☆", starf: "★", straightepsilon: "ϵ", straightphi: "ϕ", strns: "¯", sub: "⊂", Sub: "⋐", subdot: "⪽", subE: "⫅", sube: "⊆", subedot: "⫃", submult: "⫁", subnE: "⫋", subne: "⊊", subplus: "⪿", subrarr: "⥹", subset: "⊂", Subset: "⋐", subseteq: "⊆", subseteqq: "⫅", SubsetEqual: "⊆", subsetneq: "⊊", subsetneqq: "⫋", subsim: "⫇", subsub: "⫕", subsup: "⫓", succapprox: "⪸", succ: "≻", succcurlyeq: "≽", Succeeds: "≻", SucceedsEqual: "⪰", SucceedsSlantEqual: "≽", SucceedsTilde: "≿", succeq: "⪰", succnapprox: "⪺", succneqq: "⪶", succnsim: "⋩", succsim: "≿", SuchThat: "∋", sum: "∑", Sum: "∑", sung: "♪", sup1: "¹", sup2: "²", sup3: "³", sup: "⊃", Sup: "⋑", supdot: "⪾", supdsub: "⫘", supE: "⫆", supe: "⊇", supedot: "⫄", Superset: "⊃", SupersetEqual: "⊇", suphsol: "⟉", suphsub: "⫗", suplarr: "⥻", supmult: "⫂", supnE: "⫌", supne: "⊋", supplus: "⫀", supset: "⊃", Supset: "⋑", supseteq: "⊇", supseteqq: "⫆", supsetneq: "⊋", supsetneqq: "⫌", supsim: "⫈", supsub: "⫔", supsup: "⫖", swarhk: "⤦", swarr: "↙", swArr: "⇙", swarrow: "↙", swnwar: "⤪", szlig: "ß", Tab: "	", target: "⌖", Tau: "Τ", tau: "τ", tbrk: "⎴", Tcaron: "Ť", tcaron: "ť", Tcedil: "Ţ", tcedil: "ţ", Tcy: "Т", tcy: "т", tdot: "⃛", telrec: "⌕", Tfr: "𝔗", tfr: "𝔱", there4: "∴", therefore: "∴", Therefore: "∴", Theta: "Θ", theta: "θ", thetasym: "ϑ", thetav: "ϑ", thickapprox: "≈", thicksim: "∼", ThickSpace: "  ", ThinSpace: " ", thinsp: " ", thkap: "≈", thksim: "∼", THORN: "Þ", thorn: "þ", tilde: "˜", Tilde: "∼", TildeEqual: "≃", TildeFullEqual: "≅", TildeTilde: "≈", timesbar: "⨱", timesb: "⊠", times: "×", timesd: "⨰", tint: "∭", toea: "⤨", topbot: "⌶", topcir: "⫱", top: "⊤", Topf: "𝕋", topf: "𝕥", topfork: "⫚", tosa: "⤩", tprime: "‴", trade: "™", TRADE: "™", triangle: "▵", triangledown: "▿", triangleleft: "◃", trianglelefteq: "⊴", triangleq: "≜", triangleright: "▹", trianglerighteq: "⊵", tridot: "◬", trie: "≜", triminus: "⨺", TripleDot: "⃛", triplus: "⨹", trisb: "⧍", tritime: "⨻", trpezium: "⏢", Tscr: "𝒯", tscr: "𝓉", TScy: "Ц", tscy: "ц", TSHcy: "Ћ", tshcy: "ћ", Tstrok: "Ŧ", tstrok: "ŧ", twixt: "≬", twoheadleftarrow: "↞", twoheadrightarrow: "↠", Uacute: "Ú", uacute: "ú", uarr: "↑", Uarr: "↟", uArr: "⇑", Uarrocir: "⥉", Ubrcy: "Ў", ubrcy: "ў", Ubreve: "Ŭ", ubreve: "ŭ", Ucirc: "Û", ucirc: "û", Ucy: "У", ucy: "у", udarr: "⇅", Udblac: "Ű", udblac: "ű", udhar: "⥮", ufisht: "⥾", Ufr: "𝔘", ufr: "𝔲", Ugrave: "Ù", ugrave: "ù", uHar: "⥣", uharl: "↿", uharr: "↾", uhblk: "▀", ulcorn: "⌜", ulcorner: "⌜", ulcrop: "⌏", ultri: "◸", Umacr: "Ū", umacr: "ū", uml: "¨", UnderBar: "_", UnderBrace: "⏟", UnderBracket: "⎵", UnderParenthesis: "⏝", Union: "⋃", UnionPlus: "⊎", Uogon: "Ų", uogon: "ų", Uopf: "𝕌", uopf: "𝕦", UpArrowBar: "⤒", uparrow: "↑", UpArrow: "↑", Uparrow: "⇑", UpArrowDownArrow: "⇅", updownarrow: "↕", UpDownArrow: "↕", Updownarrow: "⇕", UpEquilibrium: "⥮", upharpoonleft: "↿", upharpoonright: "↾", uplus: "⊎", UpperLeftArrow: "↖", UpperRightArrow: "↗", upsi: "υ", Upsi: "ϒ", upsih: "ϒ", Upsilon: "Υ", upsilon: "υ", UpTeeArrow: "↥", UpTee: "⊥", upuparrows: "⇈", urcorn: "⌝", urcorner: "⌝", urcrop: "⌎", Uring: "Ů", uring: "ů", urtri: "◹", Uscr: "𝒰", uscr: "𝓊", utdot: "⋰", Utilde: "Ũ", utilde: "ũ", utri: "▵", utrif: "▴", uuarr: "⇈", Uuml: "Ü", uuml: "ü", uwangle: "⦧", vangrt: "⦜", varepsilon: "ϵ", varkappa: "ϰ", varnothing: "∅", varphi: "ϕ", varpi: "ϖ", varpropto: "∝", varr: "↕", vArr: "⇕", varrho: "ϱ", varsigma: "ς", varsubsetneq: "⊊︀", varsubsetneqq: "⫋︀", varsupsetneq: "⊋︀", varsupsetneqq: "⫌︀", vartheta: "ϑ", vartriangleleft: "⊲", vartriangleright: "⊳", vBar: "⫨", Vbar: "⫫", vBarv: "⫩", Vcy: "В", vcy: "в", vdash: "⊢", vDash: "⊨", Vdash: "⊩", VDash: "⊫", Vdashl: "⫦", veebar: "⊻", vee: "∨", Vee: "⋁", veeeq: "≚", vellip: "⋮", verbar: "|", Verbar: "‖", vert: "|", Vert: "‖", VerticalBar: "∣", VerticalLine: "|", VerticalSeparator: "❘", VerticalTilde: "≀", VeryThinSpace: " ", Vfr: "𝔙", vfr: "𝔳", vltri: "⊲", vnsub: "⊂⃒", vnsup: "⊃⃒", Vopf: "𝕍", vopf: "𝕧", vprop: "∝", vrtri: "⊳", Vscr: "𝒱", vscr: "𝓋", vsubnE: "⫋︀", vsubne: "⊊︀", vsupnE: "⫌︀", vsupne: "⊋︀", Vvdash: "⊪", vzigzag: "⦚", Wcirc: "Ŵ", wcirc: "ŵ", wedbar: "⩟", wedge: "∧", Wedge: "⋀", wedgeq: "≙", weierp: "℘", Wfr: "𝔚", wfr: "𝔴", Wopf: "𝕎", wopf: "𝕨", wp: "℘", wr: "≀", wreath: "≀", Wscr: "𝒲", wscr: "𝓌", xcap: "⋂", xcirc: "◯", xcup: "⋃", xdtri: "▽", Xfr: "𝔛", xfr: "𝔵", xharr: "⟷", xhArr: "⟺", Xi: "Ξ", xi: "ξ", xlarr: "⟵", xlArr: "⟸", xmap: "⟼", xnis: "⋻", xodot: "⨀", Xopf: "𝕏", xopf: "𝕩", xoplus: "⨁", xotime: "⨂", xrarr: "⟶", xrArr: "⟹", Xscr: "𝒳", xscr: "𝓍", xsqcup: "⨆", xuplus: "⨄", xutri: "△", xvee: "⋁", xwedge: "⋀", Yacute: "Ý", yacute: "ý", YAcy: "Я", yacy: "я", Ycirc: "Ŷ", ycirc: "ŷ", Ycy: "Ы", ycy: "ы", yen: "¥", Yfr: "𝔜", yfr: "𝔶", YIcy: "Ї", yicy: "ї", Yopf: "𝕐", yopf: "𝕪", Yscr: "𝒴", yscr: "𝓎", YUcy: "Ю", yucy: "ю", yuml: "ÿ", Yuml: "Ÿ", Zacute: "Ź", zacute: "ź", Zcaron: "Ž", zcaron: "ž", Zcy: "З", zcy: "з", Zdot: "Ż", zdot: "ż", zeetrf: "ℨ", ZeroWidthSpace: "​", Zeta: "Ζ", zeta: "ζ", zfr: "𝔷", Zfr: "ℨ", ZHcy: "Ж", zhcy: "ж", zigrarr: "⇝", zopf: "𝕫", Zopf: "ℤ", Zscr: "𝒵", zscr: "𝓏", zwj: "‍", zwnj: "‌" };
  }
});

// node_modules/entities/maps/legacy.json
var require_legacy = __commonJS({
  "node_modules/entities/maps/legacy.json"(exports, module) {
    module.exports = { Aacute: "Á", aacute: "á", Acirc: "Â", acirc: "â", acute: "´", AElig: "Æ", aelig: "æ", Agrave: "À", agrave: "à", amp: "&", AMP: "&", Aring: "Å", aring: "å", Atilde: "Ã", atilde: "ã", Auml: "Ä", auml: "ä", brvbar: "¦", Ccedil: "Ç", ccedil: "ç", cedil: "¸", cent: "¢", copy: "©", COPY: "©", curren: "¤", deg: "°", divide: "÷", Eacute: "É", eacute: "é", Ecirc: "Ê", ecirc: "ê", Egrave: "È", egrave: "è", ETH: "Ð", eth: "ð", Euml: "Ë", euml: "ë", frac12: "½", frac14: "¼", frac34: "¾", gt: ">", GT: ">", Iacute: "Í", iacute: "í", Icirc: "Î", icirc: "î", iexcl: "¡", Igrave: "Ì", igrave: "ì", iquest: "¿", Iuml: "Ï", iuml: "ï", laquo: "«", lt: "<", LT: "<", macr: "¯", micro: "µ", middot: "·", nbsp: " ", not: "¬", Ntilde: "Ñ", ntilde: "ñ", Oacute: "Ó", oacute: "ó", Ocirc: "Ô", ocirc: "ô", Ograve: "Ò", ograve: "ò", ordf: "ª", ordm: "º", Oslash: "Ø", oslash: "ø", Otilde: "Õ", otilde: "õ", Ouml: "Ö", ouml: "ö", para: "¶", plusmn: "±", pound: "£", quot: '"', QUOT: '"', raquo: "»", reg: "®", REG: "®", sect: "§", shy: "­", sup1: "¹", sup2: "²", sup3: "³", szlig: "ß", THORN: "Þ", thorn: "þ", times: "×", Uacute: "Ú", uacute: "ú", Ucirc: "Û", ucirc: "û", Ugrave: "Ù", ugrave: "ù", uml: "¨", Uuml: "Ü", uuml: "ü", Yacute: "Ý", yacute: "ý", yen: "¥", yuml: "ÿ" };
  }
});

// node_modules/entities/maps/xml.json
var require_xml = __commonJS({
  "node_modules/entities/maps/xml.json"(exports, module) {
    module.exports = { amp: "&", apos: "'", gt: ">", lt: "<", quot: '"' };
  }
});

// node_modules/htmlparser2/lib/Tokenizer.js
var require_Tokenizer = __commonJS({
  "node_modules/htmlparser2/lib/Tokenizer.js"(exports, module) {
    module.exports = Tokenizer;
    var decodeCodePoint = require_decode_codepoint();
    var entityMap = require_entities();
    var legacyMap = require_legacy();
    var xmlMap = require_xml();
    var i = 0;
    var TEXT = i++;
    var BEFORE_TAG_NAME = i++;
    var IN_TAG_NAME = i++;
    var IN_SELF_CLOSING_TAG = i++;
    var BEFORE_CLOSING_TAG_NAME = i++;
    var IN_CLOSING_TAG_NAME = i++;
    var AFTER_CLOSING_TAG_NAME = i++;
    var BEFORE_ATTRIBUTE_NAME = i++;
    var IN_ATTRIBUTE_NAME = i++;
    var AFTER_ATTRIBUTE_NAME = i++;
    var BEFORE_ATTRIBUTE_VALUE = i++;
    var IN_ATTRIBUTE_VALUE_DQ = i++;
    var IN_ATTRIBUTE_VALUE_SQ = i++;
    var IN_ATTRIBUTE_VALUE_NQ = i++;
    var BEFORE_DECLARATION = i++;
    var IN_DECLARATION = i++;
    var IN_PROCESSING_INSTRUCTION = i++;
    var BEFORE_COMMENT = i++;
    var IN_COMMENT = i++;
    var AFTER_COMMENT_1 = i++;
    var AFTER_COMMENT_2 = i++;
    var BEFORE_CDATA_1 = i++;
    var BEFORE_CDATA_2 = i++;
    var BEFORE_CDATA_3 = i++;
    var BEFORE_CDATA_4 = i++;
    var BEFORE_CDATA_5 = i++;
    var BEFORE_CDATA_6 = i++;
    var IN_CDATA = i++;
    var AFTER_CDATA_1 = i++;
    var AFTER_CDATA_2 = i++;
    var BEFORE_SPECIAL = i++;
    var BEFORE_SPECIAL_END = i++;
    var BEFORE_SCRIPT_1 = i++;
    var BEFORE_SCRIPT_2 = i++;
    var BEFORE_SCRIPT_3 = i++;
    var BEFORE_SCRIPT_4 = i++;
    var BEFORE_SCRIPT_5 = i++;
    var AFTER_SCRIPT_1 = i++;
    var AFTER_SCRIPT_2 = i++;
    var AFTER_SCRIPT_3 = i++;
    var AFTER_SCRIPT_4 = i++;
    var AFTER_SCRIPT_5 = i++;
    var BEFORE_STYLE_1 = i++;
    var BEFORE_STYLE_2 = i++;
    var BEFORE_STYLE_3 = i++;
    var BEFORE_STYLE_4 = i++;
    var AFTER_STYLE_1 = i++;
    var AFTER_STYLE_2 = i++;
    var AFTER_STYLE_3 = i++;
    var AFTER_STYLE_4 = i++;
    var BEFORE_ENTITY = i++;
    var BEFORE_NUMERIC_ENTITY = i++;
    var IN_NAMED_ENTITY = i++;
    var IN_NUMERIC_ENTITY = i++;
    var IN_HEX_ENTITY = i++;
    var j = 0;
    var SPECIAL_NONE = j++;
    var SPECIAL_SCRIPT = j++;
    var SPECIAL_STYLE = j++;
    function whitespace(c) {
      return c === " " || c === "\n" || c === "	" || c === "\f" || c === "\r";
    }
    function ifElseState(upper, SUCCESS, FAILURE) {
      var lower = upper.toLowerCase();
      if (upper === lower) {
        return function(c) {
          if (c === lower) {
            this._state = SUCCESS;
          } else {
            this._state = FAILURE;
            this._index--;
          }
        };
      } else {
        return function(c) {
          if (c === lower || c === upper) {
            this._state = SUCCESS;
          } else {
            this._state = FAILURE;
            this._index--;
          }
        };
      }
    }
    function consumeSpecialNameChar(upper, NEXT_STATE) {
      var lower = upper.toLowerCase();
      return function(c) {
        if (c === lower || c === upper) {
          this._state = NEXT_STATE;
        } else {
          this._state = IN_TAG_NAME;
          this._index--;
        }
      };
    }
    function Tokenizer(options, cbs) {
      this._state = TEXT;
      this._buffer = "";
      this._sectionStart = 0;
      this._index = 0;
      this._bufferOffset = 0;
      this._baseState = TEXT;
      this._special = SPECIAL_NONE;
      this._cbs = cbs;
      this._running = true;
      this._ended = false;
      this._xmlMode = !!(options && options.xmlMode);
      this._decodeEntities = !!(options && options.decodeEntities);
    }
    Tokenizer.prototype._stateText = function(c) {
      if (c === "<") {
        if (this._index > this._sectionStart) {
          this._cbs.ontext(this._getSection());
        }
        this._state = BEFORE_TAG_NAME;
        this._sectionStart = this._index;
      } else if (this._decodeEntities && this._special === SPECIAL_NONE && c === "&") {
        if (this._index > this._sectionStart) {
          this._cbs.ontext(this._getSection());
        }
        this._baseState = TEXT;
        this._state = BEFORE_ENTITY;
        this._sectionStart = this._index;
      }
    };
    Tokenizer.prototype._stateBeforeTagName = function(c) {
      if (c === "/") {
        this._state = BEFORE_CLOSING_TAG_NAME;
      } else if (c === "<") {
        this._cbs.ontext(this._getSection());
        this._sectionStart = this._index;
      } else if (c === ">" || this._special !== SPECIAL_NONE || whitespace(c)) {
        this._state = TEXT;
      } else if (c === "!") {
        this._state = BEFORE_DECLARATION;
        this._sectionStart = this._index + 1;
      } else if (c === "?") {
        this._state = IN_PROCESSING_INSTRUCTION;
        this._sectionStart = this._index + 1;
      } else {
        this._state = !this._xmlMode && (c === "s" || c === "S") ? BEFORE_SPECIAL : IN_TAG_NAME;
        this._sectionStart = this._index;
      }
    };
    Tokenizer.prototype._stateInTagName = function(c) {
      if (c === "/" || c === ">" || whitespace(c)) {
        this._emitToken("onopentagname");
        this._state = BEFORE_ATTRIBUTE_NAME;
        this._index--;
      }
    };
    Tokenizer.prototype._stateBeforeCloseingTagName = function(c) {
      if (whitespace(c)) ;
      else if (c === ">") {
        this._state = TEXT;
      } else if (this._special !== SPECIAL_NONE) {
        if (c === "s" || c === "S") {
          this._state = BEFORE_SPECIAL_END;
        } else {
          this._state = TEXT;
          this._index--;
        }
      } else {
        this._state = IN_CLOSING_TAG_NAME;
        this._sectionStart = this._index;
      }
    };
    Tokenizer.prototype._stateInCloseingTagName = function(c) {
      if (c === ">" || whitespace(c)) {
        this._emitToken("onclosetag");
        this._state = AFTER_CLOSING_TAG_NAME;
        this._index--;
      }
    };
    Tokenizer.prototype._stateAfterCloseingTagName = function(c) {
      if (c === ">") {
        this._state = TEXT;
        this._sectionStart = this._index + 1;
      }
    };
    Tokenizer.prototype._stateBeforeAttributeName = function(c) {
      if (c === ">") {
        this._cbs.onopentagend();
        this._state = TEXT;
        this._sectionStart = this._index + 1;
      } else if (c === "/") {
        this._state = IN_SELF_CLOSING_TAG;
      } else if (!whitespace(c)) {
        this._state = IN_ATTRIBUTE_NAME;
        this._sectionStart = this._index;
      }
    };
    Tokenizer.prototype._stateInSelfClosingTag = function(c) {
      if (c === ">") {
        this._cbs.onselfclosingtag();
        this._state = TEXT;
        this._sectionStart = this._index + 1;
      } else if (!whitespace(c)) {
        this._state = BEFORE_ATTRIBUTE_NAME;
        this._index--;
      }
    };
    Tokenizer.prototype._stateInAttributeName = function(c) {
      if (c === "=" || c === "/" || c === ">" || whitespace(c)) {
        this._cbs.onattribname(this._getSection());
        this._sectionStart = -1;
        this._state = AFTER_ATTRIBUTE_NAME;
        this._index--;
      }
    };
    Tokenizer.prototype._stateAfterAttributeName = function(c) {
      if (c === "=") {
        this._state = BEFORE_ATTRIBUTE_VALUE;
      } else if (c === "/" || c === ">") {
        this._cbs.onattribend();
        this._state = BEFORE_ATTRIBUTE_NAME;
        this._index--;
      } else if (!whitespace(c)) {
        this._cbs.onattribend();
        this._state = IN_ATTRIBUTE_NAME;
        this._sectionStart = this._index;
      }
    };
    Tokenizer.prototype._stateBeforeAttributeValue = function(c) {
      if (c === '"') {
        this._state = IN_ATTRIBUTE_VALUE_DQ;
        this._sectionStart = this._index + 1;
      } else if (c === "'") {
        this._state = IN_ATTRIBUTE_VALUE_SQ;
        this._sectionStart = this._index + 1;
      } else if (!whitespace(c)) {
        this._state = IN_ATTRIBUTE_VALUE_NQ;
        this._sectionStart = this._index;
        this._index--;
      }
    };
    Tokenizer.prototype._stateInAttributeValueDoubleQuotes = function(c) {
      if (c === '"') {
        this._emitToken("onattribdata");
        this._cbs.onattribend();
        this._state = BEFORE_ATTRIBUTE_NAME;
      } else if (this._decodeEntities && c === "&") {
        this._emitToken("onattribdata");
        this._baseState = this._state;
        this._state = BEFORE_ENTITY;
        this._sectionStart = this._index;
      }
    };
    Tokenizer.prototype._stateInAttributeValueSingleQuotes = function(c) {
      if (c === "'") {
        this._emitToken("onattribdata");
        this._cbs.onattribend();
        this._state = BEFORE_ATTRIBUTE_NAME;
      } else if (this._decodeEntities && c === "&") {
        this._emitToken("onattribdata");
        this._baseState = this._state;
        this._state = BEFORE_ENTITY;
        this._sectionStart = this._index;
      }
    };
    Tokenizer.prototype._stateInAttributeValueNoQuotes = function(c) {
      if (whitespace(c) || c === ">") {
        this._emitToken("onattribdata");
        this._cbs.onattribend();
        this._state = BEFORE_ATTRIBUTE_NAME;
        this._index--;
      } else if (this._decodeEntities && c === "&") {
        this._emitToken("onattribdata");
        this._baseState = this._state;
        this._state = BEFORE_ENTITY;
        this._sectionStart = this._index;
      }
    };
    Tokenizer.prototype._stateBeforeDeclaration = function(c) {
      this._state = c === "[" ? BEFORE_CDATA_1 : c === "-" ? BEFORE_COMMENT : IN_DECLARATION;
    };
    Tokenizer.prototype._stateInDeclaration = function(c) {
      if (c === ">") {
        this._cbs.ondeclaration(this._getSection());
        this._state = TEXT;
        this._sectionStart = this._index + 1;
      }
    };
    Tokenizer.prototype._stateInProcessingInstruction = function(c) {
      if (c === ">") {
        this._cbs.onprocessinginstruction(this._getSection());
        this._state = TEXT;
        this._sectionStart = this._index + 1;
      }
    };
    Tokenizer.prototype._stateBeforeComment = function(c) {
      if (c === "-") {
        this._state = IN_COMMENT;
        this._sectionStart = this._index + 1;
      } else {
        this._state = IN_DECLARATION;
      }
    };
    Tokenizer.prototype._stateInComment = function(c) {
      if (c === "-") this._state = AFTER_COMMENT_1;
    };
    Tokenizer.prototype._stateAfterComment1 = function(c) {
      if (c === "-") {
        this._state = AFTER_COMMENT_2;
      } else {
        this._state = IN_COMMENT;
      }
    };
    Tokenizer.prototype._stateAfterComment2 = function(c) {
      if (c === ">") {
        this._cbs.oncomment(
          this._buffer.substring(this._sectionStart, this._index - 2)
        );
        this._state = TEXT;
        this._sectionStart = this._index + 1;
      } else if (c !== "-") {
        this._state = IN_COMMENT;
      }
    };
    Tokenizer.prototype._stateBeforeCdata1 = ifElseState(
      "C",
      BEFORE_CDATA_2,
      IN_DECLARATION
    );
    Tokenizer.prototype._stateBeforeCdata2 = ifElseState(
      "D",
      BEFORE_CDATA_3,
      IN_DECLARATION
    );
    Tokenizer.prototype._stateBeforeCdata3 = ifElseState(
      "A",
      BEFORE_CDATA_4,
      IN_DECLARATION
    );
    Tokenizer.prototype._stateBeforeCdata4 = ifElseState(
      "T",
      BEFORE_CDATA_5,
      IN_DECLARATION
    );
    Tokenizer.prototype._stateBeforeCdata5 = ifElseState(
      "A",
      BEFORE_CDATA_6,
      IN_DECLARATION
    );
    Tokenizer.prototype._stateBeforeCdata6 = function(c) {
      if (c === "[") {
        this._state = IN_CDATA;
        this._sectionStart = this._index + 1;
      } else {
        this._state = IN_DECLARATION;
        this._index--;
      }
    };
    Tokenizer.prototype._stateInCdata = function(c) {
      if (c === "]") this._state = AFTER_CDATA_1;
    };
    Tokenizer.prototype._stateAfterCdata1 = function(c) {
      if (c === "]") this._state = AFTER_CDATA_2;
      else this._state = IN_CDATA;
    };
    Tokenizer.prototype._stateAfterCdata2 = function(c) {
      if (c === ">") {
        this._cbs.oncdata(
          this._buffer.substring(this._sectionStart, this._index - 2)
        );
        this._state = TEXT;
        this._sectionStart = this._index + 1;
      } else if (c !== "]") {
        this._state = IN_CDATA;
      }
    };
    Tokenizer.prototype._stateBeforeSpecial = function(c) {
      if (c === "c" || c === "C") {
        this._state = BEFORE_SCRIPT_1;
      } else if (c === "t" || c === "T") {
        this._state = BEFORE_STYLE_1;
      } else {
        this._state = IN_TAG_NAME;
        this._index--;
      }
    };
    Tokenizer.prototype._stateBeforeSpecialEnd = function(c) {
      if (this._special === SPECIAL_SCRIPT && (c === "c" || c === "C")) {
        this._state = AFTER_SCRIPT_1;
      } else if (this._special === SPECIAL_STYLE && (c === "t" || c === "T")) {
        this._state = AFTER_STYLE_1;
      } else this._state = TEXT;
    };
    Tokenizer.prototype._stateBeforeScript1 = consumeSpecialNameChar(
      "R",
      BEFORE_SCRIPT_2
    );
    Tokenizer.prototype._stateBeforeScript2 = consumeSpecialNameChar(
      "I",
      BEFORE_SCRIPT_3
    );
    Tokenizer.prototype._stateBeforeScript3 = consumeSpecialNameChar(
      "P",
      BEFORE_SCRIPT_4
    );
    Tokenizer.prototype._stateBeforeScript4 = consumeSpecialNameChar(
      "T",
      BEFORE_SCRIPT_5
    );
    Tokenizer.prototype._stateBeforeScript5 = function(c) {
      if (c === "/" || c === ">" || whitespace(c)) {
        this._special = SPECIAL_SCRIPT;
      }
      this._state = IN_TAG_NAME;
      this._index--;
    };
    Tokenizer.prototype._stateAfterScript1 = ifElseState("R", AFTER_SCRIPT_2, TEXT);
    Tokenizer.prototype._stateAfterScript2 = ifElseState("I", AFTER_SCRIPT_3, TEXT);
    Tokenizer.prototype._stateAfterScript3 = ifElseState("P", AFTER_SCRIPT_4, TEXT);
    Tokenizer.prototype._stateAfterScript4 = ifElseState("T", AFTER_SCRIPT_5, TEXT);
    Tokenizer.prototype._stateAfterScript5 = function(c) {
      if (c === ">" || whitespace(c)) {
        this._special = SPECIAL_NONE;
        this._state = IN_CLOSING_TAG_NAME;
        this._sectionStart = this._index - 6;
        this._index--;
      } else this._state = TEXT;
    };
    Tokenizer.prototype._stateBeforeStyle1 = consumeSpecialNameChar(
      "Y",
      BEFORE_STYLE_2
    );
    Tokenizer.prototype._stateBeforeStyle2 = consumeSpecialNameChar(
      "L",
      BEFORE_STYLE_3
    );
    Tokenizer.prototype._stateBeforeStyle3 = consumeSpecialNameChar(
      "E",
      BEFORE_STYLE_4
    );
    Tokenizer.prototype._stateBeforeStyle4 = function(c) {
      if (c === "/" || c === ">" || whitespace(c)) {
        this._special = SPECIAL_STYLE;
      }
      this._state = IN_TAG_NAME;
      this._index--;
    };
    Tokenizer.prototype._stateAfterStyle1 = ifElseState("Y", AFTER_STYLE_2, TEXT);
    Tokenizer.prototype._stateAfterStyle2 = ifElseState("L", AFTER_STYLE_3, TEXT);
    Tokenizer.prototype._stateAfterStyle3 = ifElseState("E", AFTER_STYLE_4, TEXT);
    Tokenizer.prototype._stateAfterStyle4 = function(c) {
      if (c === ">" || whitespace(c)) {
        this._special = SPECIAL_NONE;
        this._state = IN_CLOSING_TAG_NAME;
        this._sectionStart = this._index - 5;
        this._index--;
      } else this._state = TEXT;
    };
    Tokenizer.prototype._stateBeforeEntity = ifElseState(
      "#",
      BEFORE_NUMERIC_ENTITY,
      IN_NAMED_ENTITY
    );
    Tokenizer.prototype._stateBeforeNumericEntity = ifElseState(
      "X",
      IN_HEX_ENTITY,
      IN_NUMERIC_ENTITY
    );
    Tokenizer.prototype._parseNamedEntityStrict = function() {
      if (this._sectionStart + 1 < this._index) {
        var entity = this._buffer.substring(
          this._sectionStart + 1,
          this._index
        ), map = this._xmlMode ? xmlMap : entityMap;
        if (map.hasOwnProperty(entity)) {
          this._emitPartial(map[entity]);
          this._sectionStart = this._index + 1;
        }
      }
    };
    Tokenizer.prototype._parseLegacyEntity = function() {
      var start = this._sectionStart + 1, limit = this._index - start;
      if (limit > 6) limit = 6;
      while (limit >= 2) {
        var entity = this._buffer.substr(start, limit);
        if (legacyMap.hasOwnProperty(entity)) {
          this._emitPartial(legacyMap[entity]);
          this._sectionStart += limit + 1;
          return;
        } else {
          limit--;
        }
      }
    };
    Tokenizer.prototype._stateInNamedEntity = function(c) {
      if (c === ";") {
        this._parseNamedEntityStrict();
        if (this._sectionStart + 1 < this._index && !this._xmlMode) {
          this._parseLegacyEntity();
        }
        this._state = this._baseState;
      } else if ((c < "a" || c > "z") && (c < "A" || c > "Z") && (c < "0" || c > "9")) {
        if (this._xmlMode) ;
        else if (this._sectionStart + 1 === this._index) ;
        else if (this._baseState !== TEXT) {
          if (c !== "=") {
            this._parseNamedEntityStrict();
          }
        } else {
          this._parseLegacyEntity();
        }
        this._state = this._baseState;
        this._index--;
      }
    };
    Tokenizer.prototype._decodeNumericEntity = function(offset, base) {
      var sectionStart = this._sectionStart + offset;
      if (sectionStart !== this._index) {
        var entity = this._buffer.substring(sectionStart, this._index);
        var parsed = parseInt(entity, base);
        this._emitPartial(decodeCodePoint(parsed));
        this._sectionStart = this._index;
      } else {
        this._sectionStart--;
      }
      this._state = this._baseState;
    };
    Tokenizer.prototype._stateInNumericEntity = function(c) {
      if (c === ";") {
        this._decodeNumericEntity(2, 10);
        this._sectionStart++;
      } else if (c < "0" || c > "9") {
        if (!this._xmlMode) {
          this._decodeNumericEntity(2, 10);
        } else {
          this._state = this._baseState;
        }
        this._index--;
      }
    };
    Tokenizer.prototype._stateInHexEntity = function(c) {
      if (c === ";") {
        this._decodeNumericEntity(3, 16);
        this._sectionStart++;
      } else if ((c < "a" || c > "f") && (c < "A" || c > "F") && (c < "0" || c > "9")) {
        if (!this._xmlMode) {
          this._decodeNumericEntity(3, 16);
        } else {
          this._state = this._baseState;
        }
        this._index--;
      }
    };
    Tokenizer.prototype._cleanup = function() {
      if (this._sectionStart < 0) {
        this._buffer = "";
        this._bufferOffset += this._index;
        this._index = 0;
      } else if (this._running) {
        if (this._state === TEXT) {
          if (this._sectionStart !== this._index) {
            this._cbs.ontext(this._buffer.substr(this._sectionStart));
          }
          this._buffer = "";
          this._bufferOffset += this._index;
          this._index = 0;
        } else if (this._sectionStart === this._index) {
          this._buffer = "";
          this._bufferOffset += this._index;
          this._index = 0;
        } else {
          this._buffer = this._buffer.substr(this._sectionStart);
          this._index -= this._sectionStart;
          this._bufferOffset += this._sectionStart;
        }
        this._sectionStart = 0;
      }
    };
    Tokenizer.prototype.write = function(chunk) {
      if (this._ended) this._cbs.onerror(Error(".write() after done!"));
      this._buffer += chunk;
      this._parse();
    };
    Tokenizer.prototype._parse = function() {
      while (this._index < this._buffer.length && this._running) {
        var c = this._buffer.charAt(this._index);
        if (this._state === TEXT) {
          this._stateText(c);
        } else if (this._state === BEFORE_TAG_NAME) {
          this._stateBeforeTagName(c);
        } else if (this._state === IN_TAG_NAME) {
          this._stateInTagName(c);
        } else if (this._state === BEFORE_CLOSING_TAG_NAME) {
          this._stateBeforeCloseingTagName(c);
        } else if (this._state === IN_CLOSING_TAG_NAME) {
          this._stateInCloseingTagName(c);
        } else if (this._state === AFTER_CLOSING_TAG_NAME) {
          this._stateAfterCloseingTagName(c);
        } else if (this._state === IN_SELF_CLOSING_TAG) {
          this._stateInSelfClosingTag(c);
        } else if (this._state === BEFORE_ATTRIBUTE_NAME) {
          this._stateBeforeAttributeName(c);
        } else if (this._state === IN_ATTRIBUTE_NAME) {
          this._stateInAttributeName(c);
        } else if (this._state === AFTER_ATTRIBUTE_NAME) {
          this._stateAfterAttributeName(c);
        } else if (this._state === BEFORE_ATTRIBUTE_VALUE) {
          this._stateBeforeAttributeValue(c);
        } else if (this._state === IN_ATTRIBUTE_VALUE_DQ) {
          this._stateInAttributeValueDoubleQuotes(c);
        } else if (this._state === IN_ATTRIBUTE_VALUE_SQ) {
          this._stateInAttributeValueSingleQuotes(c);
        } else if (this._state === IN_ATTRIBUTE_VALUE_NQ) {
          this._stateInAttributeValueNoQuotes(c);
        } else if (this._state === BEFORE_DECLARATION) {
          this._stateBeforeDeclaration(c);
        } else if (this._state === IN_DECLARATION) {
          this._stateInDeclaration(c);
        } else if (this._state === IN_PROCESSING_INSTRUCTION) {
          this._stateInProcessingInstruction(c);
        } else if (this._state === BEFORE_COMMENT) {
          this._stateBeforeComment(c);
        } else if (this._state === IN_COMMENT) {
          this._stateInComment(c);
        } else if (this._state === AFTER_COMMENT_1) {
          this._stateAfterComment1(c);
        } else if (this._state === AFTER_COMMENT_2) {
          this._stateAfterComment2(c);
        } else if (this._state === BEFORE_CDATA_1) {
          this._stateBeforeCdata1(c);
        } else if (this._state === BEFORE_CDATA_2) {
          this._stateBeforeCdata2(c);
        } else if (this._state === BEFORE_CDATA_3) {
          this._stateBeforeCdata3(c);
        } else if (this._state === BEFORE_CDATA_4) {
          this._stateBeforeCdata4(c);
        } else if (this._state === BEFORE_CDATA_5) {
          this._stateBeforeCdata5(c);
        } else if (this._state === BEFORE_CDATA_6) {
          this._stateBeforeCdata6(c);
        } else if (this._state === IN_CDATA) {
          this._stateInCdata(c);
        } else if (this._state === AFTER_CDATA_1) {
          this._stateAfterCdata1(c);
        } else if (this._state === AFTER_CDATA_2) {
          this._stateAfterCdata2(c);
        } else if (this._state === BEFORE_SPECIAL) {
          this._stateBeforeSpecial(c);
        } else if (this._state === BEFORE_SPECIAL_END) {
          this._stateBeforeSpecialEnd(c);
        } else if (this._state === BEFORE_SCRIPT_1) {
          this._stateBeforeScript1(c);
        } else if (this._state === BEFORE_SCRIPT_2) {
          this._stateBeforeScript2(c);
        } else if (this._state === BEFORE_SCRIPT_3) {
          this._stateBeforeScript3(c);
        } else if (this._state === BEFORE_SCRIPT_4) {
          this._stateBeforeScript4(c);
        } else if (this._state === BEFORE_SCRIPT_5) {
          this._stateBeforeScript5(c);
        } else if (this._state === AFTER_SCRIPT_1) {
          this._stateAfterScript1(c);
        } else if (this._state === AFTER_SCRIPT_2) {
          this._stateAfterScript2(c);
        } else if (this._state === AFTER_SCRIPT_3) {
          this._stateAfterScript3(c);
        } else if (this._state === AFTER_SCRIPT_4) {
          this._stateAfterScript4(c);
        } else if (this._state === AFTER_SCRIPT_5) {
          this._stateAfterScript5(c);
        } else if (this._state === BEFORE_STYLE_1) {
          this._stateBeforeStyle1(c);
        } else if (this._state === BEFORE_STYLE_2) {
          this._stateBeforeStyle2(c);
        } else if (this._state === BEFORE_STYLE_3) {
          this._stateBeforeStyle3(c);
        } else if (this._state === BEFORE_STYLE_4) {
          this._stateBeforeStyle4(c);
        } else if (this._state === AFTER_STYLE_1) {
          this._stateAfterStyle1(c);
        } else if (this._state === AFTER_STYLE_2) {
          this._stateAfterStyle2(c);
        } else if (this._state === AFTER_STYLE_3) {
          this._stateAfterStyle3(c);
        } else if (this._state === AFTER_STYLE_4) {
          this._stateAfterStyle4(c);
        } else if (this._state === BEFORE_ENTITY) {
          this._stateBeforeEntity(c);
        } else if (this._state === BEFORE_NUMERIC_ENTITY) {
          this._stateBeforeNumericEntity(c);
        } else if (this._state === IN_NAMED_ENTITY) {
          this._stateInNamedEntity(c);
        } else if (this._state === IN_NUMERIC_ENTITY) {
          this._stateInNumericEntity(c);
        } else if (this._state === IN_HEX_ENTITY) {
          this._stateInHexEntity(c);
        } else {
          this._cbs.onerror(Error("unknown _state"), this._state);
        }
        this._index++;
      }
      this._cleanup();
    };
    Tokenizer.prototype.pause = function() {
      this._running = false;
    };
    Tokenizer.prototype.resume = function() {
      this._running = true;
      if (this._index < this._buffer.length) {
        this._parse();
      }
      if (this._ended) {
        this._finish();
      }
    };
    Tokenizer.prototype.end = function(chunk) {
      if (this._ended) this._cbs.onerror(Error(".end() after done!"));
      if (chunk) this.write(chunk);
      this._ended = true;
      if (this._running) this._finish();
    };
    Tokenizer.prototype._finish = function() {
      if (this._sectionStart < this._index) {
        this._handleTrailingData();
      }
      this._cbs.onend();
    };
    Tokenizer.prototype._handleTrailingData = function() {
      var data = this._buffer.substr(this._sectionStart);
      if (this._state === IN_CDATA || this._state === AFTER_CDATA_1 || this._state === AFTER_CDATA_2) {
        this._cbs.oncdata(data);
      } else if (this._state === IN_COMMENT || this._state === AFTER_COMMENT_1 || this._state === AFTER_COMMENT_2) {
        this._cbs.oncomment(data);
      } else if (this._state === IN_NAMED_ENTITY && !this._xmlMode) {
        this._parseLegacyEntity();
        if (this._sectionStart < this._index) {
          this._state = this._baseState;
          this._handleTrailingData();
        }
      } else if (this._state === IN_NUMERIC_ENTITY && !this._xmlMode) {
        this._decodeNumericEntity(2, 10);
        if (this._sectionStart < this._index) {
          this._state = this._baseState;
          this._handleTrailingData();
        }
      } else if (this._state === IN_HEX_ENTITY && !this._xmlMode) {
        this._decodeNumericEntity(3, 16);
        if (this._sectionStart < this._index) {
          this._state = this._baseState;
          this._handleTrailingData();
        }
      } else if (this._state !== IN_TAG_NAME && this._state !== BEFORE_ATTRIBUTE_NAME && this._state !== BEFORE_ATTRIBUTE_VALUE && this._state !== AFTER_ATTRIBUTE_NAME && this._state !== IN_ATTRIBUTE_NAME && this._state !== IN_ATTRIBUTE_VALUE_SQ && this._state !== IN_ATTRIBUTE_VALUE_DQ && this._state !== IN_ATTRIBUTE_VALUE_NQ && this._state !== IN_CLOSING_TAG_NAME) {
        this._cbs.ontext(data);
      }
    };
    Tokenizer.prototype.reset = function() {
      Tokenizer.call(
        this,
        { xmlMode: this._xmlMode, decodeEntities: this._decodeEntities },
        this._cbs
      );
    };
    Tokenizer.prototype.getAbsoluteIndex = function() {
      return this._bufferOffset + this._index;
    };
    Tokenizer.prototype._getSection = function() {
      return this._buffer.substring(this._sectionStart, this._index);
    };
    Tokenizer.prototype._emitToken = function(name) {
      this._cbs[name](this._getSection());
      this._sectionStart = -1;
    };
    Tokenizer.prototype._emitPartial = function(value) {
      if (this._baseState !== TEXT) {
        this._cbs.onattribdata(value);
      } else {
        this._cbs.ontext(value);
      }
    };
  }
});

// node_modules/inherits/inherits_browser.js
var require_inherits_browser = __commonJS({
  "node_modules/inherits/inherits_browser.js"(exports, module) {
    if (typeof Object.create === "function") {
      module.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
              value: ctor,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        }
      };
    } else {
      module.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          var TempCtor = function() {
          };
          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        }
      };
    }
  }
});

// browser-external:events
var require_events = __commonJS({
  "browser-external:events"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "events" has been externalized for browser compatibility. Cannot access "events.${key}" in client code. See https://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// node_modules/htmlparser2/lib/Parser.js
var require_Parser = __commonJS({
  "node_modules/htmlparser2/lib/Parser.js"(exports, module) {
    var Tokenizer = require_Tokenizer();
    var formTags = {
      input: true,
      option: true,
      optgroup: true,
      select: true,
      button: true,
      datalist: true,
      textarea: true
    };
    var openImpliesClose = {
      tr: { tr: true, th: true, td: true },
      th: { th: true },
      td: { thead: true, th: true, td: true },
      body: { head: true, link: true, script: true },
      li: { li: true },
      p: { p: true },
      h1: { p: true },
      h2: { p: true },
      h3: { p: true },
      h4: { p: true },
      h5: { p: true },
      h6: { p: true },
      select: formTags,
      input: formTags,
      output: formTags,
      button: formTags,
      datalist: formTags,
      textarea: formTags,
      option: { option: true },
      optgroup: { optgroup: true }
    };
    var voidElements = {
      __proto__: null,
      area: true,
      base: true,
      basefont: true,
      br: true,
      col: true,
      command: true,
      embed: true,
      frame: true,
      hr: true,
      img: true,
      input: true,
      isindex: true,
      keygen: true,
      link: true,
      meta: true,
      param: true,
      source: true,
      track: true,
      wbr: true
    };
    var foreignContextElements = {
      __proto__: null,
      math: true,
      svg: true
    };
    var htmlIntegrationElements = {
      __proto__: null,
      mi: true,
      mo: true,
      mn: true,
      ms: true,
      mtext: true,
      "annotation-xml": true,
      foreignObject: true,
      desc: true,
      title: true
    };
    var re_nameEnd = /\s|\//;
    function Parser(cbs, options) {
      this._options = options || {};
      this._cbs = cbs || {};
      this._tagname = "";
      this._attribname = "";
      this._attribvalue = "";
      this._attribs = null;
      this._stack = [];
      this._foreignContext = [];
      this.startIndex = 0;
      this.endIndex = null;
      this._lowerCaseTagNames = "lowerCaseTags" in this._options ? !!this._options.lowerCaseTags : !this._options.xmlMode;
      this._lowerCaseAttributeNames = "lowerCaseAttributeNames" in this._options ? !!this._options.lowerCaseAttributeNames : !this._options.xmlMode;
      if (this._options.Tokenizer) {
        Tokenizer = this._options.Tokenizer;
      }
      this._tokenizer = new Tokenizer(this._options, this);
      if (this._cbs.onparserinit) this._cbs.onparserinit(this);
    }
    require_inherits_browser()(Parser, require_events().EventEmitter);
    Parser.prototype._updatePosition = function(initialOffset) {
      if (this.endIndex === null) {
        if (this._tokenizer._sectionStart <= initialOffset) {
          this.startIndex = 0;
        } else {
          this.startIndex = this._tokenizer._sectionStart - initialOffset;
        }
      } else this.startIndex = this.endIndex + 1;
      this.endIndex = this._tokenizer.getAbsoluteIndex();
    };
    Parser.prototype.ontext = function(data) {
      this._updatePosition(1);
      this.endIndex--;
      if (this._cbs.ontext) this._cbs.ontext(data);
    };
    Parser.prototype.onopentagname = function(name) {
      if (this._lowerCaseTagNames) {
        name = name.toLowerCase();
      }
      this._tagname = name;
      if (!this._options.xmlMode && name in openImpliesClose) {
        for (var el; (el = this._stack[this._stack.length - 1]) in openImpliesClose[name]; this.onclosetag(el)) ;
      }
      if (this._options.xmlMode || !(name in voidElements)) {
        this._stack.push(name);
        if (name in foreignContextElements) this._foreignContext.push(true);
        else if (name in htmlIntegrationElements)
          this._foreignContext.push(false);
      }
      if (this._cbs.onopentagname) this._cbs.onopentagname(name);
      if (this._cbs.onopentag) this._attribs = {};
    };
    Parser.prototype.onopentagend = function() {
      this._updatePosition(1);
      if (this._attribs) {
        if (this._cbs.onopentag)
          this._cbs.onopentag(this._tagname, this._attribs);
        this._attribs = null;
      }
      if (!this._options.xmlMode && this._cbs.onclosetag && this._tagname in voidElements) {
        this._cbs.onclosetag(this._tagname);
      }
      this._tagname = "";
    };
    Parser.prototype.onclosetag = function(name) {
      this._updatePosition(1);
      if (this._lowerCaseTagNames) {
        name = name.toLowerCase();
      }
      if (name in foreignContextElements || name in htmlIntegrationElements) {
        this._foreignContext.pop();
      }
      if (this._stack.length && (!(name in voidElements) || this._options.xmlMode)) {
        var pos = this._stack.lastIndexOf(name);
        if (pos !== -1) {
          if (this._cbs.onclosetag) {
            pos = this._stack.length - pos;
            while (pos--) this._cbs.onclosetag(this._stack.pop());
          } else this._stack.length = pos;
        } else if (name === "p" && !this._options.xmlMode) {
          this.onopentagname(name);
          this._closeCurrentTag();
        }
      } else if (!this._options.xmlMode && (name === "br" || name === "p")) {
        this.onopentagname(name);
        this._closeCurrentTag();
      }
    };
    Parser.prototype.onselfclosingtag = function() {
      if (this._options.xmlMode || this._options.recognizeSelfClosing || this._foreignContext[this._foreignContext.length - 1]) {
        this._closeCurrentTag();
      } else {
        this.onopentagend();
      }
    };
    Parser.prototype._closeCurrentTag = function() {
      var name = this._tagname;
      this.onopentagend();
      if (this._stack[this._stack.length - 1] === name) {
        if (this._cbs.onclosetag) {
          this._cbs.onclosetag(name);
        }
        this._stack.pop();
      }
    };
    Parser.prototype.onattribname = function(name) {
      if (this._lowerCaseAttributeNames) {
        name = name.toLowerCase();
      }
      this._attribname = name;
    };
    Parser.prototype.onattribdata = function(value) {
      this._attribvalue += value;
    };
    Parser.prototype.onattribend = function() {
      if (this._cbs.onattribute)
        this._cbs.onattribute(this._attribname, this._attribvalue);
      if (this._attribs && !Object.prototype.hasOwnProperty.call(this._attribs, this._attribname)) {
        this._attribs[this._attribname] = this._attribvalue;
      }
      this._attribname = "";
      this._attribvalue = "";
    };
    Parser.prototype._getInstructionName = function(value) {
      var idx = value.search(re_nameEnd), name = idx < 0 ? value : value.substr(0, idx);
      if (this._lowerCaseTagNames) {
        name = name.toLowerCase();
      }
      return name;
    };
    Parser.prototype.ondeclaration = function(value) {
      if (this._cbs.onprocessinginstruction) {
        var name = this._getInstructionName(value);
        this._cbs.onprocessinginstruction("!" + name, "!" + value);
      }
    };
    Parser.prototype.onprocessinginstruction = function(value) {
      if (this._cbs.onprocessinginstruction) {
        var name = this._getInstructionName(value);
        this._cbs.onprocessinginstruction("?" + name, "?" + value);
      }
    };
    Parser.prototype.oncomment = function(value) {
      this._updatePosition(4);
      if (this._cbs.oncomment) this._cbs.oncomment(value);
      if (this._cbs.oncommentend) this._cbs.oncommentend();
    };
    Parser.prototype.oncdata = function(value) {
      this._updatePosition(1);
      if (this._options.xmlMode || this._options.recognizeCDATA) {
        if (this._cbs.oncdatastart) this._cbs.oncdatastart();
        if (this._cbs.ontext) this._cbs.ontext(value);
        if (this._cbs.oncdataend) this._cbs.oncdataend();
      } else {
        this.oncomment("[CDATA[" + value + "]]");
      }
    };
    Parser.prototype.onerror = function(err) {
      if (this._cbs.onerror) this._cbs.onerror(err);
    };
    Parser.prototype.onend = function() {
      if (this._cbs.onclosetag) {
        for (var i = this._stack.length; i > 0; this._cbs.onclosetag(this._stack[--i])) ;
      }
      if (this._cbs.onend) this._cbs.onend();
    };
    Parser.prototype.reset = function() {
      if (this._cbs.onreset) this._cbs.onreset();
      this._tokenizer.reset();
      this._tagname = "";
      this._attribname = "";
      this._attribs = null;
      this._stack = [];
      if (this._cbs.onparserinit) this._cbs.onparserinit(this);
    };
    Parser.prototype.parseComplete = function(data) {
      this.reset();
      this.end(data);
    };
    Parser.prototype.write = function(chunk) {
      this._tokenizer.write(chunk);
    };
    Parser.prototype.end = function(chunk) {
      this._tokenizer.end(chunk);
    };
    Parser.prototype.pause = function() {
      this._tokenizer.pause();
    };
    Parser.prototype.resume = function() {
      this._tokenizer.resume();
    };
    Parser.prototype.parseChunk = Parser.prototype.write;
    Parser.prototype.done = Parser.prototype.end;
    module.exports = Parser;
  }
});

// node_modules/domelementtype/index.js
var require_domelementtype = __commonJS({
  "node_modules/domelementtype/index.js"(exports, module) {
    module.exports = {
      Text: "text",
      //Text
      Directive: "directive",
      //<? ... ?>
      Comment: "comment",
      //<!-- ... -->
      Script: "script",
      //<script> tags
      Style: "style",
      //<style> tags
      Tag: "tag",
      //Any tag
      CDATA: "cdata",
      //<![CDATA[ ... ]]>
      Doctype: "doctype",
      isTag: function(elem) {
        return elem.type === "tag" || elem.type === "script" || elem.type === "style";
      }
    };
  }
});

// node_modules/domhandler/lib/node.js
var require_node = __commonJS({
  "node_modules/domhandler/lib/node.js"(exports, module) {
    var NodePrototype = module.exports = {
      get firstChild() {
        var children = this.children;
        return children && children[0] || null;
      },
      get lastChild() {
        var children = this.children;
        return children && children[children.length - 1] || null;
      },
      get nodeType() {
        return nodeTypes[this.type] || nodeTypes.element;
      }
    };
    var domLvl1 = {
      tagName: "name",
      childNodes: "children",
      parentNode: "parent",
      previousSibling: "prev",
      nextSibling: "next",
      nodeValue: "data"
    };
    var nodeTypes = {
      element: 1,
      text: 3,
      cdata: 4,
      comment: 8
    };
    Object.keys(domLvl1).forEach(function(key) {
      var shorthand = domLvl1[key];
      Object.defineProperty(NodePrototype, key, {
        get: function() {
          return this[shorthand] || null;
        },
        set: function(val) {
          this[shorthand] = val;
          return val;
        }
      });
    });
  }
});

// node_modules/domhandler/lib/element.js
var require_element = __commonJS({
  "node_modules/domhandler/lib/element.js"(exports, module) {
    var NodePrototype = require_node();
    var ElementPrototype = module.exports = Object.create(NodePrototype);
    var domLvl1 = {
      tagName: "name"
    };
    Object.keys(domLvl1).forEach(function(key) {
      var shorthand = domLvl1[key];
      Object.defineProperty(ElementPrototype, key, {
        get: function() {
          return this[shorthand] || null;
        },
        set: function(val) {
          this[shorthand] = val;
          return val;
        }
      });
    });
  }
});

// node_modules/domhandler/index.js
var require_domhandler = __commonJS({
  "node_modules/domhandler/index.js"(exports, module) {
    var ElementType2 = require_domelementtype();
    var re_whitespace = /\s+/g;
    var NodePrototype = require_node();
    var ElementPrototype = require_element();
    function DomHandler(callback, options, elementCB) {
      if (typeof callback === "object") {
        elementCB = options;
        options = callback;
        callback = null;
      } else if (typeof options === "function") {
        elementCB = options;
        options = defaultOpts;
      }
      this._callback = callback;
      this._options = options || defaultOpts;
      this._elementCB = elementCB;
      this.dom = [];
      this._done = false;
      this._tagStack = [];
      this._parser = this._parser || null;
    }
    var defaultOpts = {
      normalizeWhitespace: false,
      //Replace all whitespace with single spaces
      withStartIndices: false,
      //Add startIndex properties to nodes
      withEndIndices: false
      //Add endIndex properties to nodes
    };
    DomHandler.prototype.onparserinit = function(parser) {
      this._parser = parser;
    };
    DomHandler.prototype.onreset = function() {
      DomHandler.call(this, this._callback, this._options, this._elementCB);
    };
    DomHandler.prototype.onend = function() {
      if (this._done) return;
      this._done = true;
      this._parser = null;
      this._handleCallback(null);
    };
    DomHandler.prototype._handleCallback = DomHandler.prototype.onerror = function(error) {
      if (typeof this._callback === "function") {
        this._callback(error, this.dom);
      } else {
        if (error) throw error;
      }
    };
    DomHandler.prototype.onclosetag = function() {
      var elem = this._tagStack.pop();
      if (this._options.withEndIndices && elem) {
        elem.endIndex = this._parser.endIndex;
      }
      if (this._elementCB) this._elementCB(elem);
    };
    DomHandler.prototype._createDomElement = function(properties) {
      if (!this._options.withDomLvl1) return properties;
      var element;
      if (properties.type === "tag") {
        element = Object.create(ElementPrototype);
      } else {
        element = Object.create(NodePrototype);
      }
      for (var key in properties) {
        if (properties.hasOwnProperty(key)) {
          element[key] = properties[key];
        }
      }
      return element;
    };
    DomHandler.prototype._addDomElement = function(element) {
      var parent = this._tagStack[this._tagStack.length - 1];
      var siblings = parent ? parent.children : this.dom;
      var previousSibling = siblings[siblings.length - 1];
      element.next = null;
      if (this._options.withStartIndices) {
        element.startIndex = this._parser.startIndex;
      }
      if (this._options.withEndIndices) {
        element.endIndex = this._parser.endIndex;
      }
      if (previousSibling) {
        element.prev = previousSibling;
        previousSibling.next = element;
      } else {
        element.prev = null;
      }
      siblings.push(element);
      element.parent = parent || null;
    };
    DomHandler.prototype.onopentag = function(name, attribs) {
      var properties = {
        type: name === "script" ? ElementType2.Script : name === "style" ? ElementType2.Style : ElementType2.Tag,
        name,
        attribs,
        children: []
      };
      var element = this._createDomElement(properties);
      this._addDomElement(element);
      this._tagStack.push(element);
    };
    DomHandler.prototype.ontext = function(data) {
      var normalize = this._options.normalizeWhitespace || this._options.ignoreWhitespace;
      var lastTag;
      if (!this._tagStack.length && this.dom.length && (lastTag = this.dom[this.dom.length - 1]).type === ElementType2.Text) {
        if (normalize) {
          lastTag.data = (lastTag.data + data).replace(re_whitespace, " ");
        } else {
          lastTag.data += data;
        }
      } else {
        if (this._tagStack.length && (lastTag = this._tagStack[this._tagStack.length - 1]) && (lastTag = lastTag.children[lastTag.children.length - 1]) && lastTag.type === ElementType2.Text) {
          if (normalize) {
            lastTag.data = (lastTag.data + data).replace(re_whitespace, " ");
          } else {
            lastTag.data += data;
          }
        } else {
          if (normalize) {
            data = data.replace(re_whitespace, " ");
          }
          var element = this._createDomElement({
            data,
            type: ElementType2.Text
          });
          this._addDomElement(element);
        }
      }
    };
    DomHandler.prototype.oncomment = function(data) {
      var lastTag = this._tagStack[this._tagStack.length - 1];
      if (lastTag && lastTag.type === ElementType2.Comment) {
        lastTag.data += data;
        return;
      }
      var properties = {
        data,
        type: ElementType2.Comment
      };
      var element = this._createDomElement(properties);
      this._addDomElement(element);
      this._tagStack.push(element);
    };
    DomHandler.prototype.oncdatastart = function() {
      var properties = {
        children: [{
          data: "",
          type: ElementType2.Text
        }],
        type: ElementType2.CDATA
      };
      var element = this._createDomElement(properties);
      this._addDomElement(element);
      this._tagStack.push(element);
    };
    DomHandler.prototype.oncommentend = DomHandler.prototype.oncdataend = function() {
      this._tagStack.pop();
    };
    DomHandler.prototype.onprocessinginstruction = function(name, data) {
      var element = this._createDomElement({
        name,
        data,
        type: ElementType2.Directive
      });
      this._addDomElement(element);
    };
    module.exports = DomHandler;
  }
});

// node_modules/dom-serializer/node_modules/domelementtype/lib/index.js
var require_lib = __commonJS({
  "node_modules/dom-serializer/node_modules/domelementtype/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Doctype = exports.CDATA = exports.Tag = exports.Style = exports.Script = exports.Comment = exports.Directive = exports.Text = exports.Root = exports.isTag = exports.ElementType = void 0;
    var ElementType2;
    (function(ElementType3) {
      ElementType3["Root"] = "root";
      ElementType3["Text"] = "text";
      ElementType3["Directive"] = "directive";
      ElementType3["Comment"] = "comment";
      ElementType3["Script"] = "script";
      ElementType3["Style"] = "style";
      ElementType3["Tag"] = "tag";
      ElementType3["CDATA"] = "cdata";
      ElementType3["Doctype"] = "doctype";
    })(ElementType2 = exports.ElementType || (exports.ElementType = {}));
    function isTag(elem) {
      return elem.type === ElementType2.Tag || elem.type === ElementType2.Script || elem.type === ElementType2.Style;
    }
    exports.isTag = isTag;
    exports.Root = ElementType2.Root;
    exports.Text = ElementType2.Text;
    exports.Directive = ElementType2.Directive;
    exports.Comment = ElementType2.Comment;
    exports.Script = ElementType2.Script;
    exports.Style = ElementType2.Style;
    exports.Tag = ElementType2.Tag;
    exports.CDATA = ElementType2.CDATA;
    exports.Doctype = ElementType2.Doctype;
  }
});

// node_modules/dom-serializer/node_modules/entities/lib/maps/entities.json
var require_entities2 = __commonJS({
  "node_modules/dom-serializer/node_modules/entities/lib/maps/entities.json"(exports, module) {
    module.exports = { Aacute: "Á", aacute: "á", Abreve: "Ă", abreve: "ă", ac: "∾", acd: "∿", acE: "∾̳", Acirc: "Â", acirc: "â", acute: "´", Acy: "А", acy: "а", AElig: "Æ", aelig: "æ", af: "⁡", Afr: "𝔄", afr: "𝔞", Agrave: "À", agrave: "à", alefsym: "ℵ", aleph: "ℵ", Alpha: "Α", alpha: "α", Amacr: "Ā", amacr: "ā", amalg: "⨿", amp: "&", AMP: "&", andand: "⩕", And: "⩓", and: "∧", andd: "⩜", andslope: "⩘", andv: "⩚", ang: "∠", ange: "⦤", angle: "∠", angmsdaa: "⦨", angmsdab: "⦩", angmsdac: "⦪", angmsdad: "⦫", angmsdae: "⦬", angmsdaf: "⦭", angmsdag: "⦮", angmsdah: "⦯", angmsd: "∡", angrt: "∟", angrtvb: "⊾", angrtvbd: "⦝", angsph: "∢", angst: "Å", angzarr: "⍼", Aogon: "Ą", aogon: "ą", Aopf: "𝔸", aopf: "𝕒", apacir: "⩯", ap: "≈", apE: "⩰", ape: "≊", apid: "≋", apos: "'", ApplyFunction: "⁡", approx: "≈", approxeq: "≊", Aring: "Å", aring: "å", Ascr: "𝒜", ascr: "𝒶", Assign: "≔", ast: "*", asymp: "≈", asympeq: "≍", Atilde: "Ã", atilde: "ã", Auml: "Ä", auml: "ä", awconint: "∳", awint: "⨑", backcong: "≌", backepsilon: "϶", backprime: "‵", backsim: "∽", backsimeq: "⋍", Backslash: "∖", Barv: "⫧", barvee: "⊽", barwed: "⌅", Barwed: "⌆", barwedge: "⌅", bbrk: "⎵", bbrktbrk: "⎶", bcong: "≌", Bcy: "Б", bcy: "б", bdquo: "„", becaus: "∵", because: "∵", Because: "∵", bemptyv: "⦰", bepsi: "϶", bernou: "ℬ", Bernoullis: "ℬ", Beta: "Β", beta: "β", beth: "ℶ", between: "≬", Bfr: "𝔅", bfr: "𝔟", bigcap: "⋂", bigcirc: "◯", bigcup: "⋃", bigodot: "⨀", bigoplus: "⨁", bigotimes: "⨂", bigsqcup: "⨆", bigstar: "★", bigtriangledown: "▽", bigtriangleup: "△", biguplus: "⨄", bigvee: "⋁", bigwedge: "⋀", bkarow: "⤍", blacklozenge: "⧫", blacksquare: "▪", blacktriangle: "▴", blacktriangledown: "▾", blacktriangleleft: "◂", blacktriangleright: "▸", blank: "␣", blk12: "▒", blk14: "░", blk34: "▓", block: "█", bne: "=⃥", bnequiv: "≡⃥", bNot: "⫭", bnot: "⌐", Bopf: "𝔹", bopf: "𝕓", bot: "⊥", bottom: "⊥", bowtie: "⋈", boxbox: "⧉", boxdl: "┐", boxdL: "╕", boxDl: "╖", boxDL: "╗", boxdr: "┌", boxdR: "╒", boxDr: "╓", boxDR: "╔", boxh: "─", boxH: "═", boxhd: "┬", boxHd: "╤", boxhD: "╥", boxHD: "╦", boxhu: "┴", boxHu: "╧", boxhU: "╨", boxHU: "╩", boxminus: "⊟", boxplus: "⊞", boxtimes: "⊠", boxul: "┘", boxuL: "╛", boxUl: "╜", boxUL: "╝", boxur: "└", boxuR: "╘", boxUr: "╙", boxUR: "╚", boxv: "│", boxV: "║", boxvh: "┼", boxvH: "╪", boxVh: "╫", boxVH: "╬", boxvl: "┤", boxvL: "╡", boxVl: "╢", boxVL: "╣", boxvr: "├", boxvR: "╞", boxVr: "╟", boxVR: "╠", bprime: "‵", breve: "˘", Breve: "˘", brvbar: "¦", bscr: "𝒷", Bscr: "ℬ", bsemi: "⁏", bsim: "∽", bsime: "⋍", bsolb: "⧅", bsol: "\\", bsolhsub: "⟈", bull: "•", bullet: "•", bump: "≎", bumpE: "⪮", bumpe: "≏", Bumpeq: "≎", bumpeq: "≏", Cacute: "Ć", cacute: "ć", capand: "⩄", capbrcup: "⩉", capcap: "⩋", cap: "∩", Cap: "⋒", capcup: "⩇", capdot: "⩀", CapitalDifferentialD: "ⅅ", caps: "∩︀", caret: "⁁", caron: "ˇ", Cayleys: "ℭ", ccaps: "⩍", Ccaron: "Č", ccaron: "č", Ccedil: "Ç", ccedil: "ç", Ccirc: "Ĉ", ccirc: "ĉ", Cconint: "∰", ccups: "⩌", ccupssm: "⩐", Cdot: "Ċ", cdot: "ċ", cedil: "¸", Cedilla: "¸", cemptyv: "⦲", cent: "¢", centerdot: "·", CenterDot: "·", cfr: "𝔠", Cfr: "ℭ", CHcy: "Ч", chcy: "ч", check: "✓", checkmark: "✓", Chi: "Χ", chi: "χ", circ: "ˆ", circeq: "≗", circlearrowleft: "↺", circlearrowright: "↻", circledast: "⊛", circledcirc: "⊚", circleddash: "⊝", CircleDot: "⊙", circledR: "®", circledS: "Ⓢ", CircleMinus: "⊖", CirclePlus: "⊕", CircleTimes: "⊗", cir: "○", cirE: "⧃", cire: "≗", cirfnint: "⨐", cirmid: "⫯", cirscir: "⧂", ClockwiseContourIntegral: "∲", CloseCurlyDoubleQuote: "”", CloseCurlyQuote: "’", clubs: "♣", clubsuit: "♣", colon: ":", Colon: "∷", Colone: "⩴", colone: "≔", coloneq: "≔", comma: ",", commat: "@", comp: "∁", compfn: "∘", complement: "∁", complexes: "ℂ", cong: "≅", congdot: "⩭", Congruent: "≡", conint: "∮", Conint: "∯", ContourIntegral: "∮", copf: "𝕔", Copf: "ℂ", coprod: "∐", Coproduct: "∐", copy: "©", COPY: "©", copysr: "℗", CounterClockwiseContourIntegral: "∳", crarr: "↵", cross: "✗", Cross: "⨯", Cscr: "𝒞", cscr: "𝒸", csub: "⫏", csube: "⫑", csup: "⫐", csupe: "⫒", ctdot: "⋯", cudarrl: "⤸", cudarrr: "⤵", cuepr: "⋞", cuesc: "⋟", cularr: "↶", cularrp: "⤽", cupbrcap: "⩈", cupcap: "⩆", CupCap: "≍", cup: "∪", Cup: "⋓", cupcup: "⩊", cupdot: "⊍", cupor: "⩅", cups: "∪︀", curarr: "↷", curarrm: "⤼", curlyeqprec: "⋞", curlyeqsucc: "⋟", curlyvee: "⋎", curlywedge: "⋏", curren: "¤", curvearrowleft: "↶", curvearrowright: "↷", cuvee: "⋎", cuwed: "⋏", cwconint: "∲", cwint: "∱", cylcty: "⌭", dagger: "†", Dagger: "‡", daleth: "ℸ", darr: "↓", Darr: "↡", dArr: "⇓", dash: "‐", Dashv: "⫤", dashv: "⊣", dbkarow: "⤏", dblac: "˝", Dcaron: "Ď", dcaron: "ď", Dcy: "Д", dcy: "д", ddagger: "‡", ddarr: "⇊", DD: "ⅅ", dd: "ⅆ", DDotrahd: "⤑", ddotseq: "⩷", deg: "°", Del: "∇", Delta: "Δ", delta: "δ", demptyv: "⦱", dfisht: "⥿", Dfr: "𝔇", dfr: "𝔡", dHar: "⥥", dharl: "⇃", dharr: "⇂", DiacriticalAcute: "´", DiacriticalDot: "˙", DiacriticalDoubleAcute: "˝", DiacriticalGrave: "`", DiacriticalTilde: "˜", diam: "⋄", diamond: "⋄", Diamond: "⋄", diamondsuit: "♦", diams: "♦", die: "¨", DifferentialD: "ⅆ", digamma: "ϝ", disin: "⋲", div: "÷", divide: "÷", divideontimes: "⋇", divonx: "⋇", DJcy: "Ђ", djcy: "ђ", dlcorn: "⌞", dlcrop: "⌍", dollar: "$", Dopf: "𝔻", dopf: "𝕕", Dot: "¨", dot: "˙", DotDot: "⃜", doteq: "≐", doteqdot: "≑", DotEqual: "≐", dotminus: "∸", dotplus: "∔", dotsquare: "⊡", doublebarwedge: "⌆", DoubleContourIntegral: "∯", DoubleDot: "¨", DoubleDownArrow: "⇓", DoubleLeftArrow: "⇐", DoubleLeftRightArrow: "⇔", DoubleLeftTee: "⫤", DoubleLongLeftArrow: "⟸", DoubleLongLeftRightArrow: "⟺", DoubleLongRightArrow: "⟹", DoubleRightArrow: "⇒", DoubleRightTee: "⊨", DoubleUpArrow: "⇑", DoubleUpDownArrow: "⇕", DoubleVerticalBar: "∥", DownArrowBar: "⤓", downarrow: "↓", DownArrow: "↓", Downarrow: "⇓", DownArrowUpArrow: "⇵", DownBreve: "̑", downdownarrows: "⇊", downharpoonleft: "⇃", downharpoonright: "⇂", DownLeftRightVector: "⥐", DownLeftTeeVector: "⥞", DownLeftVectorBar: "⥖", DownLeftVector: "↽", DownRightTeeVector: "⥟", DownRightVectorBar: "⥗", DownRightVector: "⇁", DownTeeArrow: "↧", DownTee: "⊤", drbkarow: "⤐", drcorn: "⌟", drcrop: "⌌", Dscr: "𝒟", dscr: "𝒹", DScy: "Ѕ", dscy: "ѕ", dsol: "⧶", Dstrok: "Đ", dstrok: "đ", dtdot: "⋱", dtri: "▿", dtrif: "▾", duarr: "⇵", duhar: "⥯", dwangle: "⦦", DZcy: "Џ", dzcy: "џ", dzigrarr: "⟿", Eacute: "É", eacute: "é", easter: "⩮", Ecaron: "Ě", ecaron: "ě", Ecirc: "Ê", ecirc: "ê", ecir: "≖", ecolon: "≕", Ecy: "Э", ecy: "э", eDDot: "⩷", Edot: "Ė", edot: "ė", eDot: "≑", ee: "ⅇ", efDot: "≒", Efr: "𝔈", efr: "𝔢", eg: "⪚", Egrave: "È", egrave: "è", egs: "⪖", egsdot: "⪘", el: "⪙", Element: "∈", elinters: "⏧", ell: "ℓ", els: "⪕", elsdot: "⪗", Emacr: "Ē", emacr: "ē", empty: "∅", emptyset: "∅", EmptySmallSquare: "◻", emptyv: "∅", EmptyVerySmallSquare: "▫", emsp13: " ", emsp14: " ", emsp: " ", ENG: "Ŋ", eng: "ŋ", ensp: " ", Eogon: "Ę", eogon: "ę", Eopf: "𝔼", eopf: "𝕖", epar: "⋕", eparsl: "⧣", eplus: "⩱", epsi: "ε", Epsilon: "Ε", epsilon: "ε", epsiv: "ϵ", eqcirc: "≖", eqcolon: "≕", eqsim: "≂", eqslantgtr: "⪖", eqslantless: "⪕", Equal: "⩵", equals: "=", EqualTilde: "≂", equest: "≟", Equilibrium: "⇌", equiv: "≡", equivDD: "⩸", eqvparsl: "⧥", erarr: "⥱", erDot: "≓", escr: "ℯ", Escr: "ℰ", esdot: "≐", Esim: "⩳", esim: "≂", Eta: "Η", eta: "η", ETH: "Ð", eth: "ð", Euml: "Ë", euml: "ë", euro: "€", excl: "!", exist: "∃", Exists: "∃", expectation: "ℰ", exponentiale: "ⅇ", ExponentialE: "ⅇ", fallingdotseq: "≒", Fcy: "Ф", fcy: "ф", female: "♀", ffilig: "ﬃ", fflig: "ﬀ", ffllig: "ﬄ", Ffr: "𝔉", ffr: "𝔣", filig: "ﬁ", FilledSmallSquare: "◼", FilledVerySmallSquare: "▪", fjlig: "fj", flat: "♭", fllig: "ﬂ", fltns: "▱", fnof: "ƒ", Fopf: "𝔽", fopf: "𝕗", forall: "∀", ForAll: "∀", fork: "⋔", forkv: "⫙", Fouriertrf: "ℱ", fpartint: "⨍", frac12: "½", frac13: "⅓", frac14: "¼", frac15: "⅕", frac16: "⅙", frac18: "⅛", frac23: "⅔", frac25: "⅖", frac34: "¾", frac35: "⅗", frac38: "⅜", frac45: "⅘", frac56: "⅚", frac58: "⅝", frac78: "⅞", frasl: "⁄", frown: "⌢", fscr: "𝒻", Fscr: "ℱ", gacute: "ǵ", Gamma: "Γ", gamma: "γ", Gammad: "Ϝ", gammad: "ϝ", gap: "⪆", Gbreve: "Ğ", gbreve: "ğ", Gcedil: "Ģ", Gcirc: "Ĝ", gcirc: "ĝ", Gcy: "Г", gcy: "г", Gdot: "Ġ", gdot: "ġ", ge: "≥", gE: "≧", gEl: "⪌", gel: "⋛", geq: "≥", geqq: "≧", geqslant: "⩾", gescc: "⪩", ges: "⩾", gesdot: "⪀", gesdoto: "⪂", gesdotol: "⪄", gesl: "⋛︀", gesles: "⪔", Gfr: "𝔊", gfr: "𝔤", gg: "≫", Gg: "⋙", ggg: "⋙", gimel: "ℷ", GJcy: "Ѓ", gjcy: "ѓ", gla: "⪥", gl: "≷", glE: "⪒", glj: "⪤", gnap: "⪊", gnapprox: "⪊", gne: "⪈", gnE: "≩", gneq: "⪈", gneqq: "≩", gnsim: "⋧", Gopf: "𝔾", gopf: "𝕘", grave: "`", GreaterEqual: "≥", GreaterEqualLess: "⋛", GreaterFullEqual: "≧", GreaterGreater: "⪢", GreaterLess: "≷", GreaterSlantEqual: "⩾", GreaterTilde: "≳", Gscr: "𝒢", gscr: "ℊ", gsim: "≳", gsime: "⪎", gsiml: "⪐", gtcc: "⪧", gtcir: "⩺", gt: ">", GT: ">", Gt: "≫", gtdot: "⋗", gtlPar: "⦕", gtquest: "⩼", gtrapprox: "⪆", gtrarr: "⥸", gtrdot: "⋗", gtreqless: "⋛", gtreqqless: "⪌", gtrless: "≷", gtrsim: "≳", gvertneqq: "≩︀", gvnE: "≩︀", Hacek: "ˇ", hairsp: " ", half: "½", hamilt: "ℋ", HARDcy: "Ъ", hardcy: "ъ", harrcir: "⥈", harr: "↔", hArr: "⇔", harrw: "↭", Hat: "^", hbar: "ℏ", Hcirc: "Ĥ", hcirc: "ĥ", hearts: "♥", heartsuit: "♥", hellip: "…", hercon: "⊹", hfr: "𝔥", Hfr: "ℌ", HilbertSpace: "ℋ", hksearow: "⤥", hkswarow: "⤦", hoarr: "⇿", homtht: "∻", hookleftarrow: "↩", hookrightarrow: "↪", hopf: "𝕙", Hopf: "ℍ", horbar: "―", HorizontalLine: "─", hscr: "𝒽", Hscr: "ℋ", hslash: "ℏ", Hstrok: "Ħ", hstrok: "ħ", HumpDownHump: "≎", HumpEqual: "≏", hybull: "⁃", hyphen: "‐", Iacute: "Í", iacute: "í", ic: "⁣", Icirc: "Î", icirc: "î", Icy: "И", icy: "и", Idot: "İ", IEcy: "Е", iecy: "е", iexcl: "¡", iff: "⇔", ifr: "𝔦", Ifr: "ℑ", Igrave: "Ì", igrave: "ì", ii: "ⅈ", iiiint: "⨌", iiint: "∭", iinfin: "⧜", iiota: "℩", IJlig: "Ĳ", ijlig: "ĳ", Imacr: "Ī", imacr: "ī", image: "ℑ", ImaginaryI: "ⅈ", imagline: "ℐ", imagpart: "ℑ", imath: "ı", Im: "ℑ", imof: "⊷", imped: "Ƶ", Implies: "⇒", incare: "℅", in: "∈", infin: "∞", infintie: "⧝", inodot: "ı", intcal: "⊺", int: "∫", Int: "∬", integers: "ℤ", Integral: "∫", intercal: "⊺", Intersection: "⋂", intlarhk: "⨗", intprod: "⨼", InvisibleComma: "⁣", InvisibleTimes: "⁢", IOcy: "Ё", iocy: "ё", Iogon: "Į", iogon: "į", Iopf: "𝕀", iopf: "𝕚", Iota: "Ι", iota: "ι", iprod: "⨼", iquest: "¿", iscr: "𝒾", Iscr: "ℐ", isin: "∈", isindot: "⋵", isinE: "⋹", isins: "⋴", isinsv: "⋳", isinv: "∈", it: "⁢", Itilde: "Ĩ", itilde: "ĩ", Iukcy: "І", iukcy: "і", Iuml: "Ï", iuml: "ï", Jcirc: "Ĵ", jcirc: "ĵ", Jcy: "Й", jcy: "й", Jfr: "𝔍", jfr: "𝔧", jmath: "ȷ", Jopf: "𝕁", jopf: "𝕛", Jscr: "𝒥", jscr: "𝒿", Jsercy: "Ј", jsercy: "ј", Jukcy: "Є", jukcy: "є", Kappa: "Κ", kappa: "κ", kappav: "ϰ", Kcedil: "Ķ", kcedil: "ķ", Kcy: "К", kcy: "к", Kfr: "𝔎", kfr: "𝔨", kgreen: "ĸ", KHcy: "Х", khcy: "х", KJcy: "Ќ", kjcy: "ќ", Kopf: "𝕂", kopf: "𝕜", Kscr: "𝒦", kscr: "𝓀", lAarr: "⇚", Lacute: "Ĺ", lacute: "ĺ", laemptyv: "⦴", lagran: "ℒ", Lambda: "Λ", lambda: "λ", lang: "⟨", Lang: "⟪", langd: "⦑", langle: "⟨", lap: "⪅", Laplacetrf: "ℒ", laquo: "«", larrb: "⇤", larrbfs: "⤟", larr: "←", Larr: "↞", lArr: "⇐", larrfs: "⤝", larrhk: "↩", larrlp: "↫", larrpl: "⤹", larrsim: "⥳", larrtl: "↢", latail: "⤙", lAtail: "⤛", lat: "⪫", late: "⪭", lates: "⪭︀", lbarr: "⤌", lBarr: "⤎", lbbrk: "❲", lbrace: "{", lbrack: "[", lbrke: "⦋", lbrksld: "⦏", lbrkslu: "⦍", Lcaron: "Ľ", lcaron: "ľ", Lcedil: "Ļ", lcedil: "ļ", lceil: "⌈", lcub: "{", Lcy: "Л", lcy: "л", ldca: "⤶", ldquo: "“", ldquor: "„", ldrdhar: "⥧", ldrushar: "⥋", ldsh: "↲", le: "≤", lE: "≦", LeftAngleBracket: "⟨", LeftArrowBar: "⇤", leftarrow: "←", LeftArrow: "←", Leftarrow: "⇐", LeftArrowRightArrow: "⇆", leftarrowtail: "↢", LeftCeiling: "⌈", LeftDoubleBracket: "⟦", LeftDownTeeVector: "⥡", LeftDownVectorBar: "⥙", LeftDownVector: "⇃", LeftFloor: "⌊", leftharpoondown: "↽", leftharpoonup: "↼", leftleftarrows: "⇇", leftrightarrow: "↔", LeftRightArrow: "↔", Leftrightarrow: "⇔", leftrightarrows: "⇆", leftrightharpoons: "⇋", leftrightsquigarrow: "↭", LeftRightVector: "⥎", LeftTeeArrow: "↤", LeftTee: "⊣", LeftTeeVector: "⥚", leftthreetimes: "⋋", LeftTriangleBar: "⧏", LeftTriangle: "⊲", LeftTriangleEqual: "⊴", LeftUpDownVector: "⥑", LeftUpTeeVector: "⥠", LeftUpVectorBar: "⥘", LeftUpVector: "↿", LeftVectorBar: "⥒", LeftVector: "↼", lEg: "⪋", leg: "⋚", leq: "≤", leqq: "≦", leqslant: "⩽", lescc: "⪨", les: "⩽", lesdot: "⩿", lesdoto: "⪁", lesdotor: "⪃", lesg: "⋚︀", lesges: "⪓", lessapprox: "⪅", lessdot: "⋖", lesseqgtr: "⋚", lesseqqgtr: "⪋", LessEqualGreater: "⋚", LessFullEqual: "≦", LessGreater: "≶", lessgtr: "≶", LessLess: "⪡", lesssim: "≲", LessSlantEqual: "⩽", LessTilde: "≲", lfisht: "⥼", lfloor: "⌊", Lfr: "𝔏", lfr: "𝔩", lg: "≶", lgE: "⪑", lHar: "⥢", lhard: "↽", lharu: "↼", lharul: "⥪", lhblk: "▄", LJcy: "Љ", ljcy: "љ", llarr: "⇇", ll: "≪", Ll: "⋘", llcorner: "⌞", Lleftarrow: "⇚", llhard: "⥫", lltri: "◺", Lmidot: "Ŀ", lmidot: "ŀ", lmoustache: "⎰", lmoust: "⎰", lnap: "⪉", lnapprox: "⪉", lne: "⪇", lnE: "≨", lneq: "⪇", lneqq: "≨", lnsim: "⋦", loang: "⟬", loarr: "⇽", lobrk: "⟦", longleftarrow: "⟵", LongLeftArrow: "⟵", Longleftarrow: "⟸", longleftrightarrow: "⟷", LongLeftRightArrow: "⟷", Longleftrightarrow: "⟺", longmapsto: "⟼", longrightarrow: "⟶", LongRightArrow: "⟶", Longrightarrow: "⟹", looparrowleft: "↫", looparrowright: "↬", lopar: "⦅", Lopf: "𝕃", lopf: "𝕝", loplus: "⨭", lotimes: "⨴", lowast: "∗", lowbar: "_", LowerLeftArrow: "↙", LowerRightArrow: "↘", loz: "◊", lozenge: "◊", lozf: "⧫", lpar: "(", lparlt: "⦓", lrarr: "⇆", lrcorner: "⌟", lrhar: "⇋", lrhard: "⥭", lrm: "‎", lrtri: "⊿", lsaquo: "‹", lscr: "𝓁", Lscr: "ℒ", lsh: "↰", Lsh: "↰", lsim: "≲", lsime: "⪍", lsimg: "⪏", lsqb: "[", lsquo: "‘", lsquor: "‚", Lstrok: "Ł", lstrok: "ł", ltcc: "⪦", ltcir: "⩹", lt: "<", LT: "<", Lt: "≪", ltdot: "⋖", lthree: "⋋", ltimes: "⋉", ltlarr: "⥶", ltquest: "⩻", ltri: "◃", ltrie: "⊴", ltrif: "◂", ltrPar: "⦖", lurdshar: "⥊", luruhar: "⥦", lvertneqq: "≨︀", lvnE: "≨︀", macr: "¯", male: "♂", malt: "✠", maltese: "✠", Map: "⤅", map: "↦", mapsto: "↦", mapstodown: "↧", mapstoleft: "↤", mapstoup: "↥", marker: "▮", mcomma: "⨩", Mcy: "М", mcy: "м", mdash: "—", mDDot: "∺", measuredangle: "∡", MediumSpace: " ", Mellintrf: "ℳ", Mfr: "𝔐", mfr: "𝔪", mho: "℧", micro: "µ", midast: "*", midcir: "⫰", mid: "∣", middot: "·", minusb: "⊟", minus: "−", minusd: "∸", minusdu: "⨪", MinusPlus: "∓", mlcp: "⫛", mldr: "…", mnplus: "∓", models: "⊧", Mopf: "𝕄", mopf: "𝕞", mp: "∓", mscr: "𝓂", Mscr: "ℳ", mstpos: "∾", Mu: "Μ", mu: "μ", multimap: "⊸", mumap: "⊸", nabla: "∇", Nacute: "Ń", nacute: "ń", nang: "∠⃒", nap: "≉", napE: "⩰̸", napid: "≋̸", napos: "ŉ", napprox: "≉", natural: "♮", naturals: "ℕ", natur: "♮", nbsp: " ", nbump: "≎̸", nbumpe: "≏̸", ncap: "⩃", Ncaron: "Ň", ncaron: "ň", Ncedil: "Ņ", ncedil: "ņ", ncong: "≇", ncongdot: "⩭̸", ncup: "⩂", Ncy: "Н", ncy: "н", ndash: "–", nearhk: "⤤", nearr: "↗", neArr: "⇗", nearrow: "↗", ne: "≠", nedot: "≐̸", NegativeMediumSpace: "​", NegativeThickSpace: "​", NegativeThinSpace: "​", NegativeVeryThinSpace: "​", nequiv: "≢", nesear: "⤨", nesim: "≂̸", NestedGreaterGreater: "≫", NestedLessLess: "≪", NewLine: "\n", nexist: "∄", nexists: "∄", Nfr: "𝔑", nfr: "𝔫", ngE: "≧̸", nge: "≱", ngeq: "≱", ngeqq: "≧̸", ngeqslant: "⩾̸", nges: "⩾̸", nGg: "⋙̸", ngsim: "≵", nGt: "≫⃒", ngt: "≯", ngtr: "≯", nGtv: "≫̸", nharr: "↮", nhArr: "⇎", nhpar: "⫲", ni: "∋", nis: "⋼", nisd: "⋺", niv: "∋", NJcy: "Њ", njcy: "њ", nlarr: "↚", nlArr: "⇍", nldr: "‥", nlE: "≦̸", nle: "≰", nleftarrow: "↚", nLeftarrow: "⇍", nleftrightarrow: "↮", nLeftrightarrow: "⇎", nleq: "≰", nleqq: "≦̸", nleqslant: "⩽̸", nles: "⩽̸", nless: "≮", nLl: "⋘̸", nlsim: "≴", nLt: "≪⃒", nlt: "≮", nltri: "⋪", nltrie: "⋬", nLtv: "≪̸", nmid: "∤", NoBreak: "⁠", NonBreakingSpace: " ", nopf: "𝕟", Nopf: "ℕ", Not: "⫬", not: "¬", NotCongruent: "≢", NotCupCap: "≭", NotDoubleVerticalBar: "∦", NotElement: "∉", NotEqual: "≠", NotEqualTilde: "≂̸", NotExists: "∄", NotGreater: "≯", NotGreaterEqual: "≱", NotGreaterFullEqual: "≧̸", NotGreaterGreater: "≫̸", NotGreaterLess: "≹", NotGreaterSlantEqual: "⩾̸", NotGreaterTilde: "≵", NotHumpDownHump: "≎̸", NotHumpEqual: "≏̸", notin: "∉", notindot: "⋵̸", notinE: "⋹̸", notinva: "∉", notinvb: "⋷", notinvc: "⋶", NotLeftTriangleBar: "⧏̸", NotLeftTriangle: "⋪", NotLeftTriangleEqual: "⋬", NotLess: "≮", NotLessEqual: "≰", NotLessGreater: "≸", NotLessLess: "≪̸", NotLessSlantEqual: "⩽̸", NotLessTilde: "≴", NotNestedGreaterGreater: "⪢̸", NotNestedLessLess: "⪡̸", notni: "∌", notniva: "∌", notnivb: "⋾", notnivc: "⋽", NotPrecedes: "⊀", NotPrecedesEqual: "⪯̸", NotPrecedesSlantEqual: "⋠", NotReverseElement: "∌", NotRightTriangleBar: "⧐̸", NotRightTriangle: "⋫", NotRightTriangleEqual: "⋭", NotSquareSubset: "⊏̸", NotSquareSubsetEqual: "⋢", NotSquareSuperset: "⊐̸", NotSquareSupersetEqual: "⋣", NotSubset: "⊂⃒", NotSubsetEqual: "⊈", NotSucceeds: "⊁", NotSucceedsEqual: "⪰̸", NotSucceedsSlantEqual: "⋡", NotSucceedsTilde: "≿̸", NotSuperset: "⊃⃒", NotSupersetEqual: "⊉", NotTilde: "≁", NotTildeEqual: "≄", NotTildeFullEqual: "≇", NotTildeTilde: "≉", NotVerticalBar: "∤", nparallel: "∦", npar: "∦", nparsl: "⫽⃥", npart: "∂̸", npolint: "⨔", npr: "⊀", nprcue: "⋠", nprec: "⊀", npreceq: "⪯̸", npre: "⪯̸", nrarrc: "⤳̸", nrarr: "↛", nrArr: "⇏", nrarrw: "↝̸", nrightarrow: "↛", nRightarrow: "⇏", nrtri: "⋫", nrtrie: "⋭", nsc: "⊁", nsccue: "⋡", nsce: "⪰̸", Nscr: "𝒩", nscr: "𝓃", nshortmid: "∤", nshortparallel: "∦", nsim: "≁", nsime: "≄", nsimeq: "≄", nsmid: "∤", nspar: "∦", nsqsube: "⋢", nsqsupe: "⋣", nsub: "⊄", nsubE: "⫅̸", nsube: "⊈", nsubset: "⊂⃒", nsubseteq: "⊈", nsubseteqq: "⫅̸", nsucc: "⊁", nsucceq: "⪰̸", nsup: "⊅", nsupE: "⫆̸", nsupe: "⊉", nsupset: "⊃⃒", nsupseteq: "⊉", nsupseteqq: "⫆̸", ntgl: "≹", Ntilde: "Ñ", ntilde: "ñ", ntlg: "≸", ntriangleleft: "⋪", ntrianglelefteq: "⋬", ntriangleright: "⋫", ntrianglerighteq: "⋭", Nu: "Ν", nu: "ν", num: "#", numero: "№", numsp: " ", nvap: "≍⃒", nvdash: "⊬", nvDash: "⊭", nVdash: "⊮", nVDash: "⊯", nvge: "≥⃒", nvgt: ">⃒", nvHarr: "⤄", nvinfin: "⧞", nvlArr: "⤂", nvle: "≤⃒", nvlt: "<⃒", nvltrie: "⊴⃒", nvrArr: "⤃", nvrtrie: "⊵⃒", nvsim: "∼⃒", nwarhk: "⤣", nwarr: "↖", nwArr: "⇖", nwarrow: "↖", nwnear: "⤧", Oacute: "Ó", oacute: "ó", oast: "⊛", Ocirc: "Ô", ocirc: "ô", ocir: "⊚", Ocy: "О", ocy: "о", odash: "⊝", Odblac: "Ő", odblac: "ő", odiv: "⨸", odot: "⊙", odsold: "⦼", OElig: "Œ", oelig: "œ", ofcir: "⦿", Ofr: "𝔒", ofr: "𝔬", ogon: "˛", Ograve: "Ò", ograve: "ò", ogt: "⧁", ohbar: "⦵", ohm: "Ω", oint: "∮", olarr: "↺", olcir: "⦾", olcross: "⦻", oline: "‾", olt: "⧀", Omacr: "Ō", omacr: "ō", Omega: "Ω", omega: "ω", Omicron: "Ο", omicron: "ο", omid: "⦶", ominus: "⊖", Oopf: "𝕆", oopf: "𝕠", opar: "⦷", OpenCurlyDoubleQuote: "“", OpenCurlyQuote: "‘", operp: "⦹", oplus: "⊕", orarr: "↻", Or: "⩔", or: "∨", ord: "⩝", order: "ℴ", orderof: "ℴ", ordf: "ª", ordm: "º", origof: "⊶", oror: "⩖", orslope: "⩗", orv: "⩛", oS: "Ⓢ", Oscr: "𝒪", oscr: "ℴ", Oslash: "Ø", oslash: "ø", osol: "⊘", Otilde: "Õ", otilde: "õ", otimesas: "⨶", Otimes: "⨷", otimes: "⊗", Ouml: "Ö", ouml: "ö", ovbar: "⌽", OverBar: "‾", OverBrace: "⏞", OverBracket: "⎴", OverParenthesis: "⏜", para: "¶", parallel: "∥", par: "∥", parsim: "⫳", parsl: "⫽", part: "∂", PartialD: "∂", Pcy: "П", pcy: "п", percnt: "%", period: ".", permil: "‰", perp: "⊥", pertenk: "‱", Pfr: "𝔓", pfr: "𝔭", Phi: "Φ", phi: "φ", phiv: "ϕ", phmmat: "ℳ", phone: "☎", Pi: "Π", pi: "π", pitchfork: "⋔", piv: "ϖ", planck: "ℏ", planckh: "ℎ", plankv: "ℏ", plusacir: "⨣", plusb: "⊞", pluscir: "⨢", plus: "+", plusdo: "∔", plusdu: "⨥", pluse: "⩲", PlusMinus: "±", plusmn: "±", plussim: "⨦", plustwo: "⨧", pm: "±", Poincareplane: "ℌ", pointint: "⨕", popf: "𝕡", Popf: "ℙ", pound: "£", prap: "⪷", Pr: "⪻", pr: "≺", prcue: "≼", precapprox: "⪷", prec: "≺", preccurlyeq: "≼", Precedes: "≺", PrecedesEqual: "⪯", PrecedesSlantEqual: "≼", PrecedesTilde: "≾", preceq: "⪯", precnapprox: "⪹", precneqq: "⪵", precnsim: "⋨", pre: "⪯", prE: "⪳", precsim: "≾", prime: "′", Prime: "″", primes: "ℙ", prnap: "⪹", prnE: "⪵", prnsim: "⋨", prod: "∏", Product: "∏", profalar: "⌮", profline: "⌒", profsurf: "⌓", prop: "∝", Proportional: "∝", Proportion: "∷", propto: "∝", prsim: "≾", prurel: "⊰", Pscr: "𝒫", pscr: "𝓅", Psi: "Ψ", psi: "ψ", puncsp: " ", Qfr: "𝔔", qfr: "𝔮", qint: "⨌", qopf: "𝕢", Qopf: "ℚ", qprime: "⁗", Qscr: "𝒬", qscr: "𝓆", quaternions: "ℍ", quatint: "⨖", quest: "?", questeq: "≟", quot: '"', QUOT: '"', rAarr: "⇛", race: "∽̱", Racute: "Ŕ", racute: "ŕ", radic: "√", raemptyv: "⦳", rang: "⟩", Rang: "⟫", rangd: "⦒", range: "⦥", rangle: "⟩", raquo: "»", rarrap: "⥵", rarrb: "⇥", rarrbfs: "⤠", rarrc: "⤳", rarr: "→", Rarr: "↠", rArr: "⇒", rarrfs: "⤞", rarrhk: "↪", rarrlp: "↬", rarrpl: "⥅", rarrsim: "⥴", Rarrtl: "⤖", rarrtl: "↣", rarrw: "↝", ratail: "⤚", rAtail: "⤜", ratio: "∶", rationals: "ℚ", rbarr: "⤍", rBarr: "⤏", RBarr: "⤐", rbbrk: "❳", rbrace: "}", rbrack: "]", rbrke: "⦌", rbrksld: "⦎", rbrkslu: "⦐", Rcaron: "Ř", rcaron: "ř", Rcedil: "Ŗ", rcedil: "ŗ", rceil: "⌉", rcub: "}", Rcy: "Р", rcy: "р", rdca: "⤷", rdldhar: "⥩", rdquo: "”", rdquor: "”", rdsh: "↳", real: "ℜ", realine: "ℛ", realpart: "ℜ", reals: "ℝ", Re: "ℜ", rect: "▭", reg: "®", REG: "®", ReverseElement: "∋", ReverseEquilibrium: "⇋", ReverseUpEquilibrium: "⥯", rfisht: "⥽", rfloor: "⌋", rfr: "𝔯", Rfr: "ℜ", rHar: "⥤", rhard: "⇁", rharu: "⇀", rharul: "⥬", Rho: "Ρ", rho: "ρ", rhov: "ϱ", RightAngleBracket: "⟩", RightArrowBar: "⇥", rightarrow: "→", RightArrow: "→", Rightarrow: "⇒", RightArrowLeftArrow: "⇄", rightarrowtail: "↣", RightCeiling: "⌉", RightDoubleBracket: "⟧", RightDownTeeVector: "⥝", RightDownVectorBar: "⥕", RightDownVector: "⇂", RightFloor: "⌋", rightharpoondown: "⇁", rightharpoonup: "⇀", rightleftarrows: "⇄", rightleftharpoons: "⇌", rightrightarrows: "⇉", rightsquigarrow: "↝", RightTeeArrow: "↦", RightTee: "⊢", RightTeeVector: "⥛", rightthreetimes: "⋌", RightTriangleBar: "⧐", RightTriangle: "⊳", RightTriangleEqual: "⊵", RightUpDownVector: "⥏", RightUpTeeVector: "⥜", RightUpVectorBar: "⥔", RightUpVector: "↾", RightVectorBar: "⥓", RightVector: "⇀", ring: "˚", risingdotseq: "≓", rlarr: "⇄", rlhar: "⇌", rlm: "‏", rmoustache: "⎱", rmoust: "⎱", rnmid: "⫮", roang: "⟭", roarr: "⇾", robrk: "⟧", ropar: "⦆", ropf: "𝕣", Ropf: "ℝ", roplus: "⨮", rotimes: "⨵", RoundImplies: "⥰", rpar: ")", rpargt: "⦔", rppolint: "⨒", rrarr: "⇉", Rrightarrow: "⇛", rsaquo: "›", rscr: "𝓇", Rscr: "ℛ", rsh: "↱", Rsh: "↱", rsqb: "]", rsquo: "’", rsquor: "’", rthree: "⋌", rtimes: "⋊", rtri: "▹", rtrie: "⊵", rtrif: "▸", rtriltri: "⧎", RuleDelayed: "⧴", ruluhar: "⥨", rx: "℞", Sacute: "Ś", sacute: "ś", sbquo: "‚", scap: "⪸", Scaron: "Š", scaron: "š", Sc: "⪼", sc: "≻", sccue: "≽", sce: "⪰", scE: "⪴", Scedil: "Ş", scedil: "ş", Scirc: "Ŝ", scirc: "ŝ", scnap: "⪺", scnE: "⪶", scnsim: "⋩", scpolint: "⨓", scsim: "≿", Scy: "С", scy: "с", sdotb: "⊡", sdot: "⋅", sdote: "⩦", searhk: "⤥", searr: "↘", seArr: "⇘", searrow: "↘", sect: "§", semi: ";", seswar: "⤩", setminus: "∖", setmn: "∖", sext: "✶", Sfr: "𝔖", sfr: "𝔰", sfrown: "⌢", sharp: "♯", SHCHcy: "Щ", shchcy: "щ", SHcy: "Ш", shcy: "ш", ShortDownArrow: "↓", ShortLeftArrow: "←", shortmid: "∣", shortparallel: "∥", ShortRightArrow: "→", ShortUpArrow: "↑", shy: "­", Sigma: "Σ", sigma: "σ", sigmaf: "ς", sigmav: "ς", sim: "∼", simdot: "⩪", sime: "≃", simeq: "≃", simg: "⪞", simgE: "⪠", siml: "⪝", simlE: "⪟", simne: "≆", simplus: "⨤", simrarr: "⥲", slarr: "←", SmallCircle: "∘", smallsetminus: "∖", smashp: "⨳", smeparsl: "⧤", smid: "∣", smile: "⌣", smt: "⪪", smte: "⪬", smtes: "⪬︀", SOFTcy: "Ь", softcy: "ь", solbar: "⌿", solb: "⧄", sol: "/", Sopf: "𝕊", sopf: "𝕤", spades: "♠", spadesuit: "♠", spar: "∥", sqcap: "⊓", sqcaps: "⊓︀", sqcup: "⊔", sqcups: "⊔︀", Sqrt: "√", sqsub: "⊏", sqsube: "⊑", sqsubset: "⊏", sqsubseteq: "⊑", sqsup: "⊐", sqsupe: "⊒", sqsupset: "⊐", sqsupseteq: "⊒", square: "□", Square: "□", SquareIntersection: "⊓", SquareSubset: "⊏", SquareSubsetEqual: "⊑", SquareSuperset: "⊐", SquareSupersetEqual: "⊒", SquareUnion: "⊔", squarf: "▪", squ: "□", squf: "▪", srarr: "→", Sscr: "𝒮", sscr: "𝓈", ssetmn: "∖", ssmile: "⌣", sstarf: "⋆", Star: "⋆", star: "☆", starf: "★", straightepsilon: "ϵ", straightphi: "ϕ", strns: "¯", sub: "⊂", Sub: "⋐", subdot: "⪽", subE: "⫅", sube: "⊆", subedot: "⫃", submult: "⫁", subnE: "⫋", subne: "⊊", subplus: "⪿", subrarr: "⥹", subset: "⊂", Subset: "⋐", subseteq: "⊆", subseteqq: "⫅", SubsetEqual: "⊆", subsetneq: "⊊", subsetneqq: "⫋", subsim: "⫇", subsub: "⫕", subsup: "⫓", succapprox: "⪸", succ: "≻", succcurlyeq: "≽", Succeeds: "≻", SucceedsEqual: "⪰", SucceedsSlantEqual: "≽", SucceedsTilde: "≿", succeq: "⪰", succnapprox: "⪺", succneqq: "⪶", succnsim: "⋩", succsim: "≿", SuchThat: "∋", sum: "∑", Sum: "∑", sung: "♪", sup1: "¹", sup2: "²", sup3: "³", sup: "⊃", Sup: "⋑", supdot: "⪾", supdsub: "⫘", supE: "⫆", supe: "⊇", supedot: "⫄", Superset: "⊃", SupersetEqual: "⊇", suphsol: "⟉", suphsub: "⫗", suplarr: "⥻", supmult: "⫂", supnE: "⫌", supne: "⊋", supplus: "⫀", supset: "⊃", Supset: "⋑", supseteq: "⊇", supseteqq: "⫆", supsetneq: "⊋", supsetneqq: "⫌", supsim: "⫈", supsub: "⫔", supsup: "⫖", swarhk: "⤦", swarr: "↙", swArr: "⇙", swarrow: "↙", swnwar: "⤪", szlig: "ß", Tab: "	", target: "⌖", Tau: "Τ", tau: "τ", tbrk: "⎴", Tcaron: "Ť", tcaron: "ť", Tcedil: "Ţ", tcedil: "ţ", Tcy: "Т", tcy: "т", tdot: "⃛", telrec: "⌕", Tfr: "𝔗", tfr: "𝔱", there4: "∴", therefore: "∴", Therefore: "∴", Theta: "Θ", theta: "θ", thetasym: "ϑ", thetav: "ϑ", thickapprox: "≈", thicksim: "∼", ThickSpace: "  ", ThinSpace: " ", thinsp: " ", thkap: "≈", thksim: "∼", THORN: "Þ", thorn: "þ", tilde: "˜", Tilde: "∼", TildeEqual: "≃", TildeFullEqual: "≅", TildeTilde: "≈", timesbar: "⨱", timesb: "⊠", times: "×", timesd: "⨰", tint: "∭", toea: "⤨", topbot: "⌶", topcir: "⫱", top: "⊤", Topf: "𝕋", topf: "𝕥", topfork: "⫚", tosa: "⤩", tprime: "‴", trade: "™", TRADE: "™", triangle: "▵", triangledown: "▿", triangleleft: "◃", trianglelefteq: "⊴", triangleq: "≜", triangleright: "▹", trianglerighteq: "⊵", tridot: "◬", trie: "≜", triminus: "⨺", TripleDot: "⃛", triplus: "⨹", trisb: "⧍", tritime: "⨻", trpezium: "⏢", Tscr: "𝒯", tscr: "𝓉", TScy: "Ц", tscy: "ц", TSHcy: "Ћ", tshcy: "ћ", Tstrok: "Ŧ", tstrok: "ŧ", twixt: "≬", twoheadleftarrow: "↞", twoheadrightarrow: "↠", Uacute: "Ú", uacute: "ú", uarr: "↑", Uarr: "↟", uArr: "⇑", Uarrocir: "⥉", Ubrcy: "Ў", ubrcy: "ў", Ubreve: "Ŭ", ubreve: "ŭ", Ucirc: "Û", ucirc: "û", Ucy: "У", ucy: "у", udarr: "⇅", Udblac: "Ű", udblac: "ű", udhar: "⥮", ufisht: "⥾", Ufr: "𝔘", ufr: "𝔲", Ugrave: "Ù", ugrave: "ù", uHar: "⥣", uharl: "↿", uharr: "↾", uhblk: "▀", ulcorn: "⌜", ulcorner: "⌜", ulcrop: "⌏", ultri: "◸", Umacr: "Ū", umacr: "ū", uml: "¨", UnderBar: "_", UnderBrace: "⏟", UnderBracket: "⎵", UnderParenthesis: "⏝", Union: "⋃", UnionPlus: "⊎", Uogon: "Ų", uogon: "ų", Uopf: "𝕌", uopf: "𝕦", UpArrowBar: "⤒", uparrow: "↑", UpArrow: "↑", Uparrow: "⇑", UpArrowDownArrow: "⇅", updownarrow: "↕", UpDownArrow: "↕", Updownarrow: "⇕", UpEquilibrium: "⥮", upharpoonleft: "↿", upharpoonright: "↾", uplus: "⊎", UpperLeftArrow: "↖", UpperRightArrow: "↗", upsi: "υ", Upsi: "ϒ", upsih: "ϒ", Upsilon: "Υ", upsilon: "υ", UpTeeArrow: "↥", UpTee: "⊥", upuparrows: "⇈", urcorn: "⌝", urcorner: "⌝", urcrop: "⌎", Uring: "Ů", uring: "ů", urtri: "◹", Uscr: "𝒰", uscr: "𝓊", utdot: "⋰", Utilde: "Ũ", utilde: "ũ", utri: "▵", utrif: "▴", uuarr: "⇈", Uuml: "Ü", uuml: "ü", uwangle: "⦧", vangrt: "⦜", varepsilon: "ϵ", varkappa: "ϰ", varnothing: "∅", varphi: "ϕ", varpi: "ϖ", varpropto: "∝", varr: "↕", vArr: "⇕", varrho: "ϱ", varsigma: "ς", varsubsetneq: "⊊︀", varsubsetneqq: "⫋︀", varsupsetneq: "⊋︀", varsupsetneqq: "⫌︀", vartheta: "ϑ", vartriangleleft: "⊲", vartriangleright: "⊳", vBar: "⫨", Vbar: "⫫", vBarv: "⫩", Vcy: "В", vcy: "в", vdash: "⊢", vDash: "⊨", Vdash: "⊩", VDash: "⊫", Vdashl: "⫦", veebar: "⊻", vee: "∨", Vee: "⋁", veeeq: "≚", vellip: "⋮", verbar: "|", Verbar: "‖", vert: "|", Vert: "‖", VerticalBar: "∣", VerticalLine: "|", VerticalSeparator: "❘", VerticalTilde: "≀", VeryThinSpace: " ", Vfr: "𝔙", vfr: "𝔳", vltri: "⊲", vnsub: "⊂⃒", vnsup: "⊃⃒", Vopf: "𝕍", vopf: "𝕧", vprop: "∝", vrtri: "⊳", Vscr: "𝒱", vscr: "𝓋", vsubnE: "⫋︀", vsubne: "⊊︀", vsupnE: "⫌︀", vsupne: "⊋︀", Vvdash: "⊪", vzigzag: "⦚", Wcirc: "Ŵ", wcirc: "ŵ", wedbar: "⩟", wedge: "∧", Wedge: "⋀", wedgeq: "≙", weierp: "℘", Wfr: "𝔚", wfr: "𝔴", Wopf: "𝕎", wopf: "𝕨", wp: "℘", wr: "≀", wreath: "≀", Wscr: "𝒲", wscr: "𝓌", xcap: "⋂", xcirc: "◯", xcup: "⋃", xdtri: "▽", Xfr: "𝔛", xfr: "𝔵", xharr: "⟷", xhArr: "⟺", Xi: "Ξ", xi: "ξ", xlarr: "⟵", xlArr: "⟸", xmap: "⟼", xnis: "⋻", xodot: "⨀", Xopf: "𝕏", xopf: "𝕩", xoplus: "⨁", xotime: "⨂", xrarr: "⟶", xrArr: "⟹", Xscr: "𝒳", xscr: "𝓍", xsqcup: "⨆", xuplus: "⨄", xutri: "△", xvee: "⋁", xwedge: "⋀", Yacute: "Ý", yacute: "ý", YAcy: "Я", yacy: "я", Ycirc: "Ŷ", ycirc: "ŷ", Ycy: "Ы", ycy: "ы", yen: "¥", Yfr: "𝔜", yfr: "𝔶", YIcy: "Ї", yicy: "ї", Yopf: "𝕐", yopf: "𝕪", Yscr: "𝒴", yscr: "𝓎", YUcy: "Ю", yucy: "ю", yuml: "ÿ", Yuml: "Ÿ", Zacute: "Ź", zacute: "ź", Zcaron: "Ž", zcaron: "ž", Zcy: "З", zcy: "з", Zdot: "Ż", zdot: "ż", zeetrf: "ℨ", ZeroWidthSpace: "​", Zeta: "Ζ", zeta: "ζ", zfr: "𝔷", Zfr: "ℨ", ZHcy: "Ж", zhcy: "ж", zigrarr: "⇝", zopf: "𝕫", Zopf: "ℤ", Zscr: "𝒵", zscr: "𝓏", zwj: "‍", zwnj: "‌" };
  }
});

// node_modules/dom-serializer/node_modules/entities/lib/maps/legacy.json
var require_legacy2 = __commonJS({
  "node_modules/dom-serializer/node_modules/entities/lib/maps/legacy.json"(exports, module) {
    module.exports = { Aacute: "Á", aacute: "á", Acirc: "Â", acirc: "â", acute: "´", AElig: "Æ", aelig: "æ", Agrave: "À", agrave: "à", amp: "&", AMP: "&", Aring: "Å", aring: "å", Atilde: "Ã", atilde: "ã", Auml: "Ä", auml: "ä", brvbar: "¦", Ccedil: "Ç", ccedil: "ç", cedil: "¸", cent: "¢", copy: "©", COPY: "©", curren: "¤", deg: "°", divide: "÷", Eacute: "É", eacute: "é", Ecirc: "Ê", ecirc: "ê", Egrave: "È", egrave: "è", ETH: "Ð", eth: "ð", Euml: "Ë", euml: "ë", frac12: "½", frac14: "¼", frac34: "¾", gt: ">", GT: ">", Iacute: "Í", iacute: "í", Icirc: "Î", icirc: "î", iexcl: "¡", Igrave: "Ì", igrave: "ì", iquest: "¿", Iuml: "Ï", iuml: "ï", laquo: "«", lt: "<", LT: "<", macr: "¯", micro: "µ", middot: "·", nbsp: " ", not: "¬", Ntilde: "Ñ", ntilde: "ñ", Oacute: "Ó", oacute: "ó", Ocirc: "Ô", ocirc: "ô", Ograve: "Ò", ograve: "ò", ordf: "ª", ordm: "º", Oslash: "Ø", oslash: "ø", Otilde: "Õ", otilde: "õ", Ouml: "Ö", ouml: "ö", para: "¶", plusmn: "±", pound: "£", quot: '"', QUOT: '"', raquo: "»", reg: "®", REG: "®", sect: "§", shy: "­", sup1: "¹", sup2: "²", sup3: "³", szlig: "ß", THORN: "Þ", thorn: "þ", times: "×", Uacute: "Ú", uacute: "ú", Ucirc: "Û", ucirc: "û", Ugrave: "Ù", ugrave: "ù", uml: "¨", Uuml: "Ü", uuml: "ü", Yacute: "Ý", yacute: "ý", yen: "¥", yuml: "ÿ" };
  }
});

// node_modules/dom-serializer/node_modules/entities/lib/maps/xml.json
var require_xml2 = __commonJS({
  "node_modules/dom-serializer/node_modules/entities/lib/maps/xml.json"(exports, module) {
    module.exports = { amp: "&", apos: "'", gt: ">", lt: "<", quot: '"' };
  }
});

// node_modules/dom-serializer/node_modules/entities/lib/maps/decode.json
var require_decode2 = __commonJS({
  "node_modules/dom-serializer/node_modules/entities/lib/maps/decode.json"(exports, module) {
    module.exports = { "0": 65533, "128": 8364, "130": 8218, "131": 402, "132": 8222, "133": 8230, "134": 8224, "135": 8225, "136": 710, "137": 8240, "138": 352, "139": 8249, "140": 338, "142": 381, "145": 8216, "146": 8217, "147": 8220, "148": 8221, "149": 8226, "150": 8211, "151": 8212, "152": 732, "153": 8482, "154": 353, "155": 8250, "156": 339, "158": 382, "159": 376 };
  }
});

// node_modules/dom-serializer/node_modules/entities/lib/decode_codepoint.js
var require_decode_codepoint2 = __commonJS({
  "node_modules/dom-serializer/node_modules/entities/lib/decode_codepoint.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var decode_json_1 = __importDefault(require_decode2());
    var fromCodePoint = (
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      String.fromCodePoint || function(codePoint) {
        var output = "";
        if (codePoint > 65535) {
          codePoint -= 65536;
          output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        output += String.fromCharCode(codePoint);
        return output;
      }
    );
    function decodeCodePoint(codePoint) {
      if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
        return "�";
      }
      if (codePoint in decode_json_1.default) {
        codePoint = decode_json_1.default[codePoint];
      }
      return fromCodePoint(codePoint);
    }
    exports.default = decodeCodePoint;
  }
});

// node_modules/dom-serializer/node_modules/entities/lib/decode.js
var require_decode3 = __commonJS({
  "node_modules/dom-serializer/node_modules/entities/lib/decode.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.decodeHTML = exports.decodeHTMLStrict = exports.decodeXML = void 0;
    var entities_json_1 = __importDefault(require_entities2());
    var legacy_json_1 = __importDefault(require_legacy2());
    var xml_json_1 = __importDefault(require_xml2());
    var decode_codepoint_1 = __importDefault(require_decode_codepoint2());
    var strictEntityRe = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
    exports.decodeXML = getStrictDecoder(xml_json_1.default);
    exports.decodeHTMLStrict = getStrictDecoder(entities_json_1.default);
    function getStrictDecoder(map) {
      var replace = getReplacer(map);
      return function(str) {
        return String(str).replace(strictEntityRe, replace);
      };
    }
    var sorter = function(a, b) {
      return a < b ? 1 : -1;
    };
    exports.decodeHTML = function() {
      var legacy = Object.keys(legacy_json_1.default).sort(sorter);
      var keys = Object.keys(entities_json_1.default).sort(sorter);
      for (var i = 0, j = 0; i < keys.length; i++) {
        if (legacy[j] === keys[i]) {
          keys[i] += ";?";
          j++;
        } else {
          keys[i] += ";";
        }
      }
      var re = new RegExp("&(?:" + keys.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g");
      var replace = getReplacer(entities_json_1.default);
      function replacer(str) {
        if (str.substr(-1) !== ";")
          str += ";";
        return replace(str);
      }
      return function(str) {
        return String(str).replace(re, replacer);
      };
    }();
    function getReplacer(map) {
      return function replace(str) {
        if (str.charAt(1) === "#") {
          var secondChar = str.charAt(2);
          if (secondChar === "X" || secondChar === "x") {
            return decode_codepoint_1.default(parseInt(str.substr(3), 16));
          }
          return decode_codepoint_1.default(parseInt(str.substr(2), 10));
        }
        return map[str.slice(1, -1)] || str;
      };
    }
  }
});

// node_modules/dom-serializer/node_modules/entities/lib/encode.js
var require_encode = __commonJS({
  "node_modules/dom-serializer/node_modules/entities/lib/encode.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.escapeUTF8 = exports.escape = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.encodeXML = void 0;
    var xml_json_1 = __importDefault(require_xml2());
    var inverseXML = getInverseObj(xml_json_1.default);
    var xmlReplacer = getInverseReplacer(inverseXML);
    exports.encodeXML = getASCIIEncoder(inverseXML);
    var entities_json_1 = __importDefault(require_entities2());
    var inverseHTML = getInverseObj(entities_json_1.default);
    var htmlReplacer = getInverseReplacer(inverseHTML);
    exports.encodeHTML = getInverse(inverseHTML, htmlReplacer);
    exports.encodeNonAsciiHTML = getASCIIEncoder(inverseHTML);
    function getInverseObj(obj) {
      return Object.keys(obj).sort().reduce(function(inverse, name) {
        inverse[obj[name]] = "&" + name + ";";
        return inverse;
      }, {});
    }
    function getInverseReplacer(inverse) {
      var single = [];
      var multiple = [];
      for (var _i = 0, _a = Object.keys(inverse); _i < _a.length; _i++) {
        var k = _a[_i];
        if (k.length === 1) {
          single.push("\\" + k);
        } else {
          multiple.push(k);
        }
      }
      single.sort();
      for (var start = 0; start < single.length - 1; start++) {
        var end = start;
        while (end < single.length - 1 && single[end].charCodeAt(1) + 1 === single[end + 1].charCodeAt(1)) {
          end += 1;
        }
        var count = 1 + end - start;
        if (count < 3)
          continue;
        single.splice(start, count, single[start] + "-" + single[end]);
      }
      multiple.unshift("[" + single.join("") + "]");
      return new RegExp(multiple.join("|"), "g");
    }
    var reNonASCII = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g;
    var getCodePoint = (
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      String.prototype.codePointAt != null ? (
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        function(str) {
          return str.codePointAt(0);
        }
      ) : (
        // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
        function(c) {
          return (c.charCodeAt(0) - 55296) * 1024 + c.charCodeAt(1) - 56320 + 65536;
        }
      )
    );
    function singleCharReplacer(c) {
      return "&#x" + (c.length > 1 ? getCodePoint(c) : c.charCodeAt(0)).toString(16).toUpperCase() + ";";
    }
    function getInverse(inverse, re) {
      return function(data) {
        return data.replace(re, function(name) {
          return inverse[name];
        }).replace(reNonASCII, singleCharReplacer);
      };
    }
    var reEscapeChars = new RegExp(xmlReplacer.source + "|" + reNonASCII.source, "g");
    function escape(data) {
      return data.replace(reEscapeChars, singleCharReplacer);
    }
    exports.escape = escape;
    function escapeUTF8(data) {
      return data.replace(xmlReplacer, singleCharReplacer);
    }
    exports.escapeUTF8 = escapeUTF8;
    function getASCIIEncoder(obj) {
      return function(data) {
        return data.replace(reEscapeChars, function(c) {
          return obj[c] || singleCharReplacer(c);
        });
      };
    }
  }
});

// node_modules/dom-serializer/node_modules/entities/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/dom-serializer/node_modules/entities/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.decodeXMLStrict = exports.decodeHTML5Strict = exports.decodeHTML4Strict = exports.decodeHTML5 = exports.decodeHTML4 = exports.decodeHTMLStrict = exports.decodeHTML = exports.decodeXML = exports.encodeHTML5 = exports.encodeHTML4 = exports.escapeUTF8 = exports.escape = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.encodeXML = exports.encode = exports.decodeStrict = exports.decode = void 0;
    var decode_1 = require_decode3();
    var encode_1 = require_encode();
    function decode(data, level) {
      return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTML)(data);
    }
    exports.decode = decode;
    function decodeStrict(data, level) {
      return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTMLStrict)(data);
    }
    exports.decodeStrict = decodeStrict;
    function encode(data, level) {
      return (!level || level <= 0 ? encode_1.encodeXML : encode_1.encodeHTML)(data);
    }
    exports.encode = encode;
    var encode_2 = require_encode();
    Object.defineProperty(exports, "encodeXML", { enumerable: true, get: function() {
      return encode_2.encodeXML;
    } });
    Object.defineProperty(exports, "encodeHTML", { enumerable: true, get: function() {
      return encode_2.encodeHTML;
    } });
    Object.defineProperty(exports, "encodeNonAsciiHTML", { enumerable: true, get: function() {
      return encode_2.encodeNonAsciiHTML;
    } });
    Object.defineProperty(exports, "escape", { enumerable: true, get: function() {
      return encode_2.escape;
    } });
    Object.defineProperty(exports, "escapeUTF8", { enumerable: true, get: function() {
      return encode_2.escapeUTF8;
    } });
    Object.defineProperty(exports, "encodeHTML4", { enumerable: true, get: function() {
      return encode_2.encodeHTML;
    } });
    Object.defineProperty(exports, "encodeHTML5", { enumerable: true, get: function() {
      return encode_2.encodeHTML;
    } });
    var decode_2 = require_decode3();
    Object.defineProperty(exports, "decodeXML", { enumerable: true, get: function() {
      return decode_2.decodeXML;
    } });
    Object.defineProperty(exports, "decodeHTML", { enumerable: true, get: function() {
      return decode_2.decodeHTML;
    } });
    Object.defineProperty(exports, "decodeHTMLStrict", { enumerable: true, get: function() {
      return decode_2.decodeHTMLStrict;
    } });
    Object.defineProperty(exports, "decodeHTML4", { enumerable: true, get: function() {
      return decode_2.decodeHTML;
    } });
    Object.defineProperty(exports, "decodeHTML5", { enumerable: true, get: function() {
      return decode_2.decodeHTML;
    } });
    Object.defineProperty(exports, "decodeHTML4Strict", { enumerable: true, get: function() {
      return decode_2.decodeHTMLStrict;
    } });
    Object.defineProperty(exports, "decodeHTML5Strict", { enumerable: true, get: function() {
      return decode_2.decodeHTMLStrict;
    } });
    Object.defineProperty(exports, "decodeXMLStrict", { enumerable: true, get: function() {
      return decode_2.decodeXML;
    } });
  }
});

// node_modules/dom-serializer/foreignNames.json
var require_foreignNames = __commonJS({
  "node_modules/dom-serializer/foreignNames.json"(exports, module) {
    module.exports = {
      elementNames: {
        altglyph: "altGlyph",
        altglyphdef: "altGlyphDef",
        altglyphitem: "altGlyphItem",
        animatecolor: "animateColor",
        animatemotion: "animateMotion",
        animatetransform: "animateTransform",
        clippath: "clipPath",
        feblend: "feBlend",
        fecolormatrix: "feColorMatrix",
        fecomponenttransfer: "feComponentTransfer",
        fecomposite: "feComposite",
        feconvolvematrix: "feConvolveMatrix",
        fediffuselighting: "feDiffuseLighting",
        fedisplacementmap: "feDisplacementMap",
        fedistantlight: "feDistantLight",
        fedropshadow: "feDropShadow",
        feflood: "feFlood",
        fefunca: "feFuncA",
        fefuncb: "feFuncB",
        fefuncg: "feFuncG",
        fefuncr: "feFuncR",
        fegaussianblur: "feGaussianBlur",
        feimage: "feImage",
        femerge: "feMerge",
        femergenode: "feMergeNode",
        femorphology: "feMorphology",
        feoffset: "feOffset",
        fepointlight: "fePointLight",
        fespecularlighting: "feSpecularLighting",
        fespotlight: "feSpotLight",
        fetile: "feTile",
        feturbulence: "feTurbulence",
        foreignobject: "foreignObject",
        glyphref: "glyphRef",
        lineargradient: "linearGradient",
        radialgradient: "radialGradient",
        textpath: "textPath"
      },
      attributeNames: {
        definitionurl: "definitionURL",
        attributename: "attributeName",
        attributetype: "attributeType",
        basefrequency: "baseFrequency",
        baseprofile: "baseProfile",
        calcmode: "calcMode",
        clippathunits: "clipPathUnits",
        diffuseconstant: "diffuseConstant",
        edgemode: "edgeMode",
        filterunits: "filterUnits",
        glyphref: "glyphRef",
        gradienttransform: "gradientTransform",
        gradientunits: "gradientUnits",
        kernelmatrix: "kernelMatrix",
        kernelunitlength: "kernelUnitLength",
        keypoints: "keyPoints",
        keysplines: "keySplines",
        keytimes: "keyTimes",
        lengthadjust: "lengthAdjust",
        limitingconeangle: "limitingConeAngle",
        markerheight: "markerHeight",
        markerunits: "markerUnits",
        markerwidth: "markerWidth",
        maskcontentunits: "maskContentUnits",
        maskunits: "maskUnits",
        numoctaves: "numOctaves",
        pathlength: "pathLength",
        patterncontentunits: "patternContentUnits",
        patterntransform: "patternTransform",
        patternunits: "patternUnits",
        pointsatx: "pointsAtX",
        pointsaty: "pointsAtY",
        pointsatz: "pointsAtZ",
        preservealpha: "preserveAlpha",
        preserveaspectratio: "preserveAspectRatio",
        primitiveunits: "primitiveUnits",
        refx: "refX",
        refy: "refY",
        repeatcount: "repeatCount",
        repeatdur: "repeatDur",
        requiredextensions: "requiredExtensions",
        requiredfeatures: "requiredFeatures",
        specularconstant: "specularConstant",
        specularexponent: "specularExponent",
        spreadmethod: "spreadMethod",
        startoffset: "startOffset",
        stddeviation: "stdDeviation",
        stitchtiles: "stitchTiles",
        surfacescale: "surfaceScale",
        systemlanguage: "systemLanguage",
        tablevalues: "tableValues",
        targetx: "targetX",
        targety: "targetY",
        textlength: "textLength",
        viewbox: "viewBox",
        viewtarget: "viewTarget",
        xchannelselector: "xChannelSelector",
        ychannelselector: "yChannelSelector",
        zoomandpan: "zoomAndPan"
      }
    };
  }
});

// node_modules/dom-serializer/index.js
var require_dom_serializer = __commonJS({
  "node_modules/dom-serializer/index.js"(exports, module) {
    var ElementType2 = require_lib();
    var entities = require_lib2();
    var foreignNames = require_foreignNames();
    foreignNames.elementNames.__proto__ = null;
    foreignNames.attributeNames.__proto__ = null;
    var unencodedElements = {
      __proto__: null,
      style: true,
      script: true,
      xmp: true,
      iframe: true,
      noembed: true,
      noframes: true,
      plaintext: true,
      noscript: true
    };
    function formatAttrs(attributes, opts) {
      if (!attributes) return;
      var output = "";
      var value;
      for (var key in attributes) {
        value = attributes[key];
        if (output) {
          output += " ";
        }
        if (opts.xmlMode === "foreign") {
          key = foreignNames.attributeNames[key] || key;
        }
        output += key;
        if (value !== null && value !== "" || opts.xmlMode) {
          output += '="' + (opts.decodeEntities ? entities.encodeXML(value) : value.replace(/\"/g, "&quot;")) + '"';
        }
      }
      return output;
    }
    var singleTag = {
      __proto__: null,
      area: true,
      base: true,
      basefont: true,
      br: true,
      col: true,
      command: true,
      embed: true,
      frame: true,
      hr: true,
      img: true,
      input: true,
      isindex: true,
      keygen: true,
      link: true,
      meta: true,
      param: true,
      source: true,
      track: true,
      wbr: true
    };
    var render = module.exports = function(dom, opts) {
      if (!Array.isArray(dom) && !dom.cheerio) dom = [dom];
      opts = opts || {};
      var output = "";
      for (var i = 0; i < dom.length; i++) {
        var elem = dom[i];
        if (elem.type === "root") output += render(elem.children, opts);
        else if (ElementType2.isTag(elem)) output += renderTag(elem, opts);
        else if (elem.type === ElementType2.Directive)
          output += renderDirective(elem);
        else if (elem.type === ElementType2.Comment) output += renderComment(elem);
        else if (elem.type === ElementType2.CDATA) output += renderCdata(elem);
        else output += renderText(elem, opts);
      }
      return output;
    };
    var foreignModeIntegrationPoints = [
      "mi",
      "mo",
      "mn",
      "ms",
      "mtext",
      "annotation-xml",
      "foreignObject",
      "desc",
      "title"
    ];
    function renderTag(elem, opts) {
      if (opts.xmlMode === "foreign") {
        elem.name = foreignNames.elementNames[elem.name] || elem.name;
        if (elem.parent && foreignModeIntegrationPoints.indexOf(elem.parent.name) >= 0)
          opts = Object.assign({}, opts, { xmlMode: false });
      }
      if (!opts.xmlMode && ["svg", "math"].indexOf(elem.name) >= 0) {
        opts = Object.assign({}, opts, { xmlMode: "foreign" });
      }
      var tag = "<" + elem.name;
      var attribs = formatAttrs(elem.attribs, opts);
      if (attribs) {
        tag += " " + attribs;
      }
      if (opts.xmlMode && (!elem.children || elem.children.length === 0)) {
        tag += "/>";
      } else {
        tag += ">";
        if (elem.children) {
          tag += render(elem.children, opts);
        }
        if (!singleTag[elem.name] || opts.xmlMode) {
          tag += "</" + elem.name + ">";
        }
      }
      return tag;
    }
    function renderDirective(elem) {
      return "<" + elem.data + ">";
    }
    function renderText(elem, opts) {
      var data = elem.data || "";
      if (opts.decodeEntities && !(elem.parent && elem.parent.name in unencodedElements)) {
        data = entities.encodeXML(data);
      }
      return data;
    }
    function renderCdata(elem) {
      return "<![CDATA[" + elem.children[0].data + "]]>";
    }
    function renderComment(elem) {
      return "<!--" + elem.data + "-->";
    }
  }
});

// node_modules/domutils/lib/stringify.js
var require_stringify = __commonJS({
  "node_modules/domutils/lib/stringify.js"(exports, module) {
    var ElementType2 = require_domelementtype();
    var getOuterHTML = require_dom_serializer();
    var isTag = ElementType2.isTag;
    module.exports = {
      getInnerHTML,
      getOuterHTML,
      getText
    };
    function getInnerHTML(elem, opts) {
      return elem.children ? elem.children.map(function(elem2) {
        return getOuterHTML(elem2, opts);
      }).join("") : "";
    }
    function getText(elem) {
      if (Array.isArray(elem)) return elem.map(getText).join("");
      if (isTag(elem)) return elem.name === "br" ? "\n" : getText(elem.children);
      if (elem.type === ElementType2.CDATA) return getText(elem.children);
      if (elem.type === ElementType2.Text) return elem.data;
      return "";
    }
  }
});

// node_modules/domutils/lib/traversal.js
var require_traversal = __commonJS({
  "node_modules/domutils/lib/traversal.js"(exports) {
    var getChildren = exports.getChildren = function(elem) {
      return elem.children;
    };
    var getParent = exports.getParent = function(elem) {
      return elem.parent;
    };
    exports.getSiblings = function(elem) {
      var parent = getParent(elem);
      return parent ? getChildren(parent) : [elem];
    };
    exports.getAttributeValue = function(elem, name) {
      return elem.attribs && elem.attribs[name];
    };
    exports.hasAttrib = function(elem, name) {
      return !!elem.attribs && hasOwnProperty.call(elem.attribs, name);
    };
    exports.getName = function(elem) {
      return elem.name;
    };
  }
});

// node_modules/domutils/lib/manipulation.js
var require_manipulation = __commonJS({
  "node_modules/domutils/lib/manipulation.js"(exports) {
    exports.removeElement = function(elem) {
      if (elem.prev) elem.prev.next = elem.next;
      if (elem.next) elem.next.prev = elem.prev;
      if (elem.parent) {
        var childs = elem.parent.children;
        childs.splice(childs.lastIndexOf(elem), 1);
      }
    };
    exports.replaceElement = function(elem, replacement) {
      var prev = replacement.prev = elem.prev;
      if (prev) {
        prev.next = replacement;
      }
      var next = replacement.next = elem.next;
      if (next) {
        next.prev = replacement;
      }
      var parent = replacement.parent = elem.parent;
      if (parent) {
        var childs = parent.children;
        childs[childs.lastIndexOf(elem)] = replacement;
      }
    };
    exports.appendChild = function(elem, child) {
      child.parent = elem;
      if (elem.children.push(child) !== 1) {
        var sibling = elem.children[elem.children.length - 2];
        sibling.next = child;
        child.prev = sibling;
        child.next = null;
      }
    };
    exports.append = function(elem, next) {
      var parent = elem.parent, currNext = elem.next;
      next.next = currNext;
      next.prev = elem;
      elem.next = next;
      next.parent = parent;
      if (currNext) {
        currNext.prev = next;
        if (parent) {
          var childs = parent.children;
          childs.splice(childs.lastIndexOf(currNext), 0, next);
        }
      } else if (parent) {
        parent.children.push(next);
      }
    };
    exports.prepend = function(elem, prev) {
      var parent = elem.parent;
      if (parent) {
        var childs = parent.children;
        childs.splice(childs.lastIndexOf(elem), 0, prev);
      }
      if (elem.prev) {
        elem.prev.next = prev;
      }
      prev.parent = parent;
      prev.prev = elem.prev;
      prev.next = elem;
      elem.prev = prev;
    };
  }
});

// node_modules/domutils/lib/querying.js
var require_querying = __commonJS({
  "node_modules/domutils/lib/querying.js"(exports, module) {
    var isTag = require_domelementtype().isTag;
    module.exports = {
      filter,
      find,
      findOneChild,
      findOne,
      existsOne,
      findAll
    };
    function filter(test, element, recurse, limit) {
      if (!Array.isArray(element)) element = [element];
      if (typeof limit !== "number" || !isFinite(limit)) {
        limit = Infinity;
      }
      return find(test, element, recurse !== false, limit);
    }
    function find(test, elems, recurse, limit) {
      var result = [], childs;
      for (var i = 0, j = elems.length; i < j; i++) {
        if (test(elems[i])) {
          result.push(elems[i]);
          if (--limit <= 0) break;
        }
        childs = elems[i].children;
        if (recurse && childs && childs.length > 0) {
          childs = find(test, childs, recurse, limit);
          result = result.concat(childs);
          limit -= childs.length;
          if (limit <= 0) break;
        }
      }
      return result;
    }
    function findOneChild(test, elems) {
      for (var i = 0, l = elems.length; i < l; i++) {
        if (test(elems[i])) return elems[i];
      }
      return null;
    }
    function findOne(test, elems) {
      var elem = null;
      for (var i = 0, l = elems.length; i < l && !elem; i++) {
        if (!isTag(elems[i])) {
          continue;
        } else if (test(elems[i])) {
          elem = elems[i];
        } else if (elems[i].children.length > 0) {
          elem = findOne(test, elems[i].children);
        }
      }
      return elem;
    }
    function existsOne(test, elems) {
      for (var i = 0, l = elems.length; i < l; i++) {
        if (isTag(elems[i]) && (test(elems[i]) || elems[i].children.length > 0 && existsOne(test, elems[i].children))) {
          return true;
        }
      }
      return false;
    }
    function findAll(test, rootElems) {
      var result = [];
      var stack = rootElems.slice();
      while (stack.length) {
        var elem = stack.shift();
        if (!isTag(elem)) continue;
        if (elem.children && elem.children.length > 0) {
          stack.unshift.apply(stack, elem.children);
        }
        if (test(elem)) result.push(elem);
      }
      return result;
    }
  }
});

// node_modules/domutils/lib/legacy.js
var require_legacy3 = __commonJS({
  "node_modules/domutils/lib/legacy.js"(exports) {
    var ElementType2 = require_domelementtype();
    var isTag = exports.isTag = ElementType2.isTag;
    exports.testElement = function(options, element) {
      for (var key in options) {
        if (!options.hasOwnProperty(key)) ;
        else if (key === "tag_name") {
          if (!isTag(element) || !options.tag_name(element.name)) {
            return false;
          }
        } else if (key === "tag_type") {
          if (!options.tag_type(element.type)) return false;
        } else if (key === "tag_contains") {
          if (isTag(element) || !options.tag_contains(element.data)) {
            return false;
          }
        } else if (!element.attribs || !options[key](element.attribs[key])) {
          return false;
        }
      }
      return true;
    };
    var Checks = {
      tag_name: function(name) {
        if (typeof name === "function") {
          return function(elem) {
            return isTag(elem) && name(elem.name);
          };
        } else if (name === "*") {
          return isTag;
        } else {
          return function(elem) {
            return isTag(elem) && elem.name === name;
          };
        }
      },
      tag_type: function(type) {
        if (typeof type === "function") {
          return function(elem) {
            return type(elem.type);
          };
        } else {
          return function(elem) {
            return elem.type === type;
          };
        }
      },
      tag_contains: function(data) {
        if (typeof data === "function") {
          return function(elem) {
            return !isTag(elem) && data(elem.data);
          };
        } else {
          return function(elem) {
            return !isTag(elem) && elem.data === data;
          };
        }
      }
    };
    function getAttribCheck(attrib, value) {
      if (typeof value === "function") {
        return function(elem) {
          return elem.attribs && value(elem.attribs[attrib]);
        };
      } else {
        return function(elem) {
          return elem.attribs && elem.attribs[attrib] === value;
        };
      }
    }
    function combineFuncs(a, b) {
      return function(elem) {
        return a(elem) || b(elem);
      };
    }
    exports.getElements = function(options, element, recurse, limit) {
      var funcs = Object.keys(options).map(function(key) {
        var value = options[key];
        return key in Checks ? Checks[key](value) : getAttribCheck(key, value);
      });
      return funcs.length === 0 ? [] : this.filter(
        funcs.reduce(combineFuncs),
        element,
        recurse,
        limit
      );
    };
    exports.getElementById = function(id, element, recurse) {
      if (!Array.isArray(element)) element = [element];
      return this.findOne(getAttribCheck("id", id), element, recurse !== false);
    };
    exports.getElementsByTagName = function(name, element, recurse, limit) {
      return this.filter(Checks.tag_name(name), element, recurse, limit);
    };
    exports.getElementsByTagType = function(type, element, recurse, limit) {
      return this.filter(Checks.tag_type(type), element, recurse, limit);
    };
  }
});

// node_modules/domutils/lib/helpers.js
var require_helpers = __commonJS({
  "node_modules/domutils/lib/helpers.js"(exports) {
    exports.removeSubsets = function(nodes) {
      var idx = nodes.length, node, ancestor, replace;
      while (--idx > -1) {
        node = ancestor = nodes[idx];
        nodes[idx] = null;
        replace = true;
        while (ancestor) {
          if (nodes.indexOf(ancestor) > -1) {
            replace = false;
            nodes.splice(idx, 1);
            break;
          }
          ancestor = ancestor.parent;
        }
        if (replace) {
          nodes[idx] = node;
        }
      }
      return nodes;
    };
    var POSITION = {
      DISCONNECTED: 1,
      PRECEDING: 2,
      FOLLOWING: 4,
      CONTAINS: 8,
      CONTAINED_BY: 16
    };
    var comparePos = exports.compareDocumentPosition = function(nodeA, nodeB) {
      var aParents = [];
      var bParents = [];
      var current, sharedParent, siblings, aSibling, bSibling, idx;
      if (nodeA === nodeB) {
        return 0;
      }
      current = nodeA;
      while (current) {
        aParents.unshift(current);
        current = current.parent;
      }
      current = nodeB;
      while (current) {
        bParents.unshift(current);
        current = current.parent;
      }
      idx = 0;
      while (aParents[idx] === bParents[idx]) {
        idx++;
      }
      if (idx === 0) {
        return POSITION.DISCONNECTED;
      }
      sharedParent = aParents[idx - 1];
      siblings = sharedParent.children;
      aSibling = aParents[idx];
      bSibling = bParents[idx];
      if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
        if (sharedParent === nodeB) {
          return POSITION.FOLLOWING | POSITION.CONTAINED_BY;
        }
        return POSITION.FOLLOWING;
      } else {
        if (sharedParent === nodeA) {
          return POSITION.PRECEDING | POSITION.CONTAINS;
        }
        return POSITION.PRECEDING;
      }
    };
    exports.uniqueSort = function(nodes) {
      var idx = nodes.length, node, position;
      nodes = nodes.slice();
      while (--idx > -1) {
        node = nodes[idx];
        position = nodes.indexOf(node);
        if (position > -1 && position < idx) {
          nodes.splice(idx, 1);
        }
      }
      nodes.sort(function(a, b) {
        var relative = comparePos(a, b);
        if (relative & POSITION.PRECEDING) {
          return -1;
        } else if (relative & POSITION.FOLLOWING) {
          return 1;
        }
        return 0;
      });
      return nodes;
    };
  }
});

// node_modules/domutils/index.js
var require_domutils = __commonJS({
  "node_modules/domutils/index.js"(exports, module) {
    var DomUtils = module.exports;
    [
      require_stringify(),
      require_traversal(),
      require_manipulation(),
      require_querying(),
      require_legacy3(),
      require_helpers()
    ].forEach(function(ext) {
      Object.keys(ext).forEach(function(key) {
        DomUtils[key] = ext[key].bind(DomUtils);
      });
    });
  }
});

// node_modules/htmlparser2/lib/FeedHandler.js
var require_FeedHandler = __commonJS({
  "node_modules/htmlparser2/lib/FeedHandler.js"(exports, module) {
    var DomHandler = require_domhandler();
    var DomUtils = require_domutils();
    function FeedHandler(callback, options) {
      this.init(callback, options);
    }
    require_inherits_browser()(FeedHandler, DomHandler);
    FeedHandler.prototype.init = DomHandler;
    function getElements(what, where) {
      return DomUtils.getElementsByTagName(what, where, true);
    }
    function getOneElement(what, where) {
      return DomUtils.getElementsByTagName(what, where, true, 1)[0];
    }
    function fetch(what, where, recurse) {
      return DomUtils.getText(
        DomUtils.getElementsByTagName(what, where, recurse, 1)
      ).trim();
    }
    function addConditionally(obj, prop, what, where, recurse) {
      var tmp = fetch(what, where, recurse);
      if (tmp) obj[prop] = tmp;
    }
    var isValidFeed = function(value) {
      return value === "rss" || value === "feed" || value === "rdf:RDF";
    };
    FeedHandler.prototype.onend = function() {
      var feed = {}, feedRoot = getOneElement(isValidFeed, this.dom), tmp, childs;
      if (feedRoot) {
        if (feedRoot.name === "feed") {
          childs = feedRoot.children;
          feed.type = "atom";
          addConditionally(feed, "id", "id", childs);
          addConditionally(feed, "title", "title", childs);
          if ((tmp = getOneElement("link", childs)) && (tmp = tmp.attribs) && (tmp = tmp.href))
            feed.link = tmp;
          addConditionally(feed, "description", "subtitle", childs);
          if (tmp = fetch("updated", childs)) feed.updated = new Date(tmp);
          addConditionally(feed, "author", "email", childs, true);
          feed.items = getElements("entry", childs).map(function(item) {
            var entry = {}, tmp2;
            item = item.children;
            addConditionally(entry, "id", "id", item);
            addConditionally(entry, "title", "title", item);
            if ((tmp2 = getOneElement("link", item)) && (tmp2 = tmp2.attribs) && (tmp2 = tmp2.href))
              entry.link = tmp2;
            if (tmp2 = fetch("summary", item) || fetch("content", item))
              entry.description = tmp2;
            if (tmp2 = fetch("updated", item))
              entry.pubDate = new Date(tmp2);
            return entry;
          });
        } else {
          childs = getOneElement("channel", feedRoot.children).children;
          feed.type = feedRoot.name.substr(0, 3);
          feed.id = "";
          addConditionally(feed, "title", "title", childs);
          addConditionally(feed, "link", "link", childs);
          addConditionally(feed, "description", "description", childs);
          if (tmp = fetch("lastBuildDate", childs))
            feed.updated = new Date(tmp);
          addConditionally(feed, "author", "managingEditor", childs, true);
          feed.items = getElements("item", feedRoot.children).map(function(item) {
            var entry = {}, tmp2;
            item = item.children;
            addConditionally(entry, "id", "guid", item);
            addConditionally(entry, "title", "title", item);
            addConditionally(entry, "link", "link", item);
            addConditionally(entry, "description", "description", item);
            if (tmp2 = fetch("pubDate", item))
              entry.pubDate = new Date(tmp2);
            return entry;
          });
        }
      }
      this.dom = feed;
      DomHandler.prototype._handleCallback.call(
        this,
        feedRoot ? null : Error("couldn't find root of feed")
      );
    };
    module.exports = FeedHandler;
  }
});

// browser-external:readable-stream
var require_readable_stream = __commonJS({
  "browser-external:readable-stream"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "readable-stream" has been externalized for browser compatibility. Cannot access "readable-stream.${key}" in client code. See https://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// browser-external:buffer
var require_buffer = __commonJS({
  "browser-external:buffer"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "buffer" has been externalized for browser compatibility. Cannot access "buffer.${key}" in client code. See https://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// node_modules/safe-buffer/index.js
var require_safe_buffer = __commonJS({
  "node_modules/safe-buffer/index.js"(exports, module) {
    var buffer = require_buffer();
    var Buffer = buffer.Buffer;
    function copyProps(src, dst) {
      for (var key in src) {
        dst[key] = src[key];
      }
    }
    if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
      module.exports = buffer;
    } else {
      copyProps(buffer, exports);
      exports.Buffer = SafeBuffer;
    }
    function SafeBuffer(arg, encodingOrOffset, length) {
      return Buffer(arg, encodingOrOffset, length);
    }
    SafeBuffer.prototype = Object.create(Buffer.prototype);
    copyProps(Buffer, SafeBuffer);
    SafeBuffer.from = function(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        throw new TypeError("Argument must not be a number");
      }
      return Buffer(arg, encodingOrOffset, length);
    };
    SafeBuffer.alloc = function(size, fill, encoding) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      var buf = Buffer(size);
      if (fill !== void 0) {
        if (typeof encoding === "string") {
          buf.fill(fill, encoding);
        } else {
          buf.fill(fill);
        }
      } else {
        buf.fill(0);
      }
      return buf;
    };
    SafeBuffer.allocUnsafe = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return Buffer(size);
    };
    SafeBuffer.allocUnsafeSlow = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return buffer.SlowBuffer(size);
    };
  }
});

// node_modules/string_decoder/lib/string_decoder.js
var require_string_decoder = __commonJS({
  "node_modules/string_decoder/lib/string_decoder.js"(exports) {
    "use strict";
    var Buffer = require_safe_buffer().Buffer;
    var isEncoding = Buffer.isEncoding || function(encoding) {
      encoding = "" + encoding;
      switch (encoding && encoding.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
          return true;
        default:
          return false;
      }
    };
    function _normalizeEncoding(enc) {
      if (!enc) return "utf8";
      var retried;
      while (true) {
        switch (enc) {
          case "utf8":
          case "utf-8":
            return "utf8";
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return "utf16le";
          case "latin1":
          case "binary":
            return "latin1";
          case "base64":
          case "ascii":
          case "hex":
            return enc;
          default:
            if (retried) return;
            enc = ("" + enc).toLowerCase();
            retried = true;
        }
      }
    }
    function normalizeEncoding(enc) {
      var nenc = _normalizeEncoding(enc);
      if (typeof nenc !== "string" && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error("Unknown encoding: " + enc);
      return nenc || enc;
    }
    exports.StringDecoder = StringDecoder;
    function StringDecoder(encoding) {
      this.encoding = normalizeEncoding(encoding);
      var nb;
      switch (this.encoding) {
        case "utf16le":
          this.text = utf16Text;
          this.end = utf16End;
          nb = 4;
          break;
        case "utf8":
          this.fillLast = utf8FillLast;
          nb = 4;
          break;
        case "base64":
          this.text = base64Text;
          this.end = base64End;
          nb = 3;
          break;
        default:
          this.write = simpleWrite;
          this.end = simpleEnd;
          return;
      }
      this.lastNeed = 0;
      this.lastTotal = 0;
      this.lastChar = Buffer.allocUnsafe(nb);
    }
    StringDecoder.prototype.write = function(buf) {
      if (buf.length === 0) return "";
      var r;
      var i;
      if (this.lastNeed) {
        r = this.fillLast(buf);
        if (r === void 0) return "";
        i = this.lastNeed;
        this.lastNeed = 0;
      } else {
        i = 0;
      }
      if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
      return r || "";
    };
    StringDecoder.prototype.end = utf8End;
    StringDecoder.prototype.text = utf8Text;
    StringDecoder.prototype.fillLast = function(buf) {
      if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      }
      buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
      this.lastNeed -= buf.length;
    };
    function utf8CheckByte(byte) {
      if (byte <= 127) return 0;
      else if (byte >> 5 === 6) return 2;
      else if (byte >> 4 === 14) return 3;
      else if (byte >> 3 === 30) return 4;
      return byte >> 6 === 2 ? -1 : -2;
    }
    function utf8CheckIncomplete(self, buf, i) {
      var j = buf.length - 1;
      if (j < i) return 0;
      var nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0) self.lastNeed = nb - 1;
        return nb;
      }
      if (--j < i || nb === -2) return 0;
      nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0) self.lastNeed = nb - 2;
        return nb;
      }
      if (--j < i || nb === -2) return 0;
      nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0) {
          if (nb === 2) nb = 0;
          else self.lastNeed = nb - 3;
        }
        return nb;
      }
      return 0;
    }
    function utf8CheckExtraBytes(self, buf, p) {
      if ((buf[0] & 192) !== 128) {
        self.lastNeed = 0;
        return "�";
      }
      if (self.lastNeed > 1 && buf.length > 1) {
        if ((buf[1] & 192) !== 128) {
          self.lastNeed = 1;
          return "�";
        }
        if (self.lastNeed > 2 && buf.length > 2) {
          if ((buf[2] & 192) !== 128) {
            self.lastNeed = 2;
            return "�";
          }
        }
      }
    }
    function utf8FillLast(buf) {
      var p = this.lastTotal - this.lastNeed;
      var r = utf8CheckExtraBytes(this, buf, p);
      if (r !== void 0) return r;
      if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, p, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      }
      buf.copy(this.lastChar, p, 0, buf.length);
      this.lastNeed -= buf.length;
    }
    function utf8Text(buf, i) {
      var total = utf8CheckIncomplete(this, buf, i);
      if (!this.lastNeed) return buf.toString("utf8", i);
      this.lastTotal = total;
      var end = buf.length - (total - this.lastNeed);
      buf.copy(this.lastChar, 0, end);
      return buf.toString("utf8", i, end);
    }
    function utf8End(buf) {
      var r = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed) return r + "�";
      return r;
    }
    function utf16Text(buf, i) {
      if ((buf.length - i) % 2 === 0) {
        var r = buf.toString("utf16le", i);
        if (r) {
          var c = r.charCodeAt(r.length - 1);
          if (c >= 55296 && c <= 56319) {
            this.lastNeed = 2;
            this.lastTotal = 4;
            this.lastChar[0] = buf[buf.length - 2];
            this.lastChar[1] = buf[buf.length - 1];
            return r.slice(0, -1);
          }
        }
        return r;
      }
      this.lastNeed = 1;
      this.lastTotal = 2;
      this.lastChar[0] = buf[buf.length - 1];
      return buf.toString("utf16le", i, buf.length - 1);
    }
    function utf16End(buf) {
      var r = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed) {
        var end = this.lastTotal - this.lastNeed;
        return r + this.lastChar.toString("utf16le", 0, end);
      }
      return r;
    }
    function base64Text(buf, i) {
      var n = (buf.length - i) % 3;
      if (n === 0) return buf.toString("base64", i);
      this.lastNeed = 3 - n;
      this.lastTotal = 3;
      if (n === 1) {
        this.lastChar[0] = buf[buf.length - 1];
      } else {
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
      }
      return buf.toString("base64", i, buf.length - n);
    }
    function base64End(buf) {
      var r = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed) return r + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
      return r;
    }
    function simpleWrite(buf) {
      return buf.toString(this.encoding);
    }
    function simpleEnd(buf) {
      return buf && buf.length ? this.write(buf) : "";
    }
  }
});

// node_modules/htmlparser2/lib/WritableStream.js
var require_WritableStream = __commonJS({
  "node_modules/htmlparser2/lib/WritableStream.js"(exports, module) {
    module.exports = Stream;
    var Parser = require_Parser();
    var WritableStream = require_readable_stream().Writable;
    var StringDecoder = require_string_decoder().StringDecoder;
    var Buffer = require_buffer().Buffer;
    function Stream(cbs, options) {
      var parser = this._parser = new Parser(cbs, options);
      var decoder = this._decoder = new StringDecoder();
      WritableStream.call(this, { decodeStrings: false });
      this.once("finish", function() {
        parser.end(decoder.end());
      });
    }
    require_inherits_browser()(Stream, WritableStream);
    Stream.prototype._write = function(chunk, encoding, cb) {
      if (chunk instanceof Buffer) chunk = this._decoder.write(chunk);
      this._parser.write(chunk);
      cb();
    };
  }
});

// node_modules/htmlparser2/lib/Stream.js
var require_Stream = __commonJS({
  "node_modules/htmlparser2/lib/Stream.js"(exports, module) {
    module.exports = Stream;
    var Parser = require_WritableStream();
    function Stream(options) {
      Parser.call(this, new Cbs(this), options);
    }
    require_inherits_browser()(Stream, Parser);
    Stream.prototype.readable = true;
    function Cbs(scope) {
      this.scope = scope;
    }
    var EVENTS = require_lib3().EVENTS;
    Object.keys(EVENTS).forEach(function(name) {
      if (EVENTS[name] === 0) {
        Cbs.prototype["on" + name] = function() {
          this.scope.emit(name);
        };
      } else if (EVENTS[name] === 1) {
        Cbs.prototype["on" + name] = function(a) {
          this.scope.emit(name, a);
        };
      } else if (EVENTS[name] === 2) {
        Cbs.prototype["on" + name] = function(a, b) {
          this.scope.emit(name, a, b);
        };
      } else {
        throw Error("wrong number of arguments!");
      }
    });
  }
});

// node_modules/htmlparser2/lib/ProxyHandler.js
var require_ProxyHandler = __commonJS({
  "node_modules/htmlparser2/lib/ProxyHandler.js"(exports, module) {
    module.exports = ProxyHandler;
    function ProxyHandler(cbs) {
      this._cbs = cbs || {};
    }
    var EVENTS = require_lib3().EVENTS;
    Object.keys(EVENTS).forEach(function(name) {
      if (EVENTS[name] === 0) {
        name = "on" + name;
        ProxyHandler.prototype[name] = function() {
          if (this._cbs[name]) this._cbs[name]();
        };
      } else if (EVENTS[name] === 1) {
        name = "on" + name;
        ProxyHandler.prototype[name] = function(a) {
          if (this._cbs[name]) this._cbs[name](a);
        };
      } else if (EVENTS[name] === 2) {
        name = "on" + name;
        ProxyHandler.prototype[name] = function(a, b) {
          if (this._cbs[name]) this._cbs[name](a, b);
        };
      } else {
        throw Error("wrong number of arguments");
      }
    });
  }
});

// node_modules/htmlparser2/lib/CollectingHandler.js
var require_CollectingHandler = __commonJS({
  "node_modules/htmlparser2/lib/CollectingHandler.js"(exports, module) {
    module.exports = CollectingHandler;
    function CollectingHandler(cbs) {
      this._cbs = cbs || {};
      this.events = [];
    }
    var EVENTS = require_lib3().EVENTS;
    Object.keys(EVENTS).forEach(function(name) {
      if (EVENTS[name] === 0) {
        name = "on" + name;
        CollectingHandler.prototype[name] = function() {
          this.events.push([name]);
          if (this._cbs[name]) this._cbs[name]();
        };
      } else if (EVENTS[name] === 1) {
        name = "on" + name;
        CollectingHandler.prototype[name] = function(a) {
          this.events.push([name, a]);
          if (this._cbs[name]) this._cbs[name](a);
        };
      } else if (EVENTS[name] === 2) {
        name = "on" + name;
        CollectingHandler.prototype[name] = function(a, b) {
          this.events.push([name, a, b]);
          if (this._cbs[name]) this._cbs[name](a, b);
        };
      } else {
        throw Error("wrong number of arguments");
      }
    });
    CollectingHandler.prototype.onreset = function() {
      this.events = [];
      if (this._cbs.onreset) this._cbs.onreset();
    };
    CollectingHandler.prototype.restart = function() {
      if (this._cbs.onreset) this._cbs.onreset();
      for (var i = 0, len = this.events.length; i < len; i++) {
        if (this._cbs[this.events[i][0]]) {
          var num = this.events[i].length;
          if (num === 1) {
            this._cbs[this.events[i][0]]();
          } else if (num === 2) {
            this._cbs[this.events[i][0]](this.events[i][1]);
          } else {
            this._cbs[this.events[i][0]](
              this.events[i][1],
              this.events[i][2]
            );
          }
        }
      }
    };
  }
});

// node_modules/htmlparser2/lib/index.js
var require_lib3 = __commonJS({
  "node_modules/htmlparser2/lib/index.js"(exports, module) {
    var Parser = require_Parser();
    var DomHandler = require_domhandler();
    function defineProp(name, value) {
      delete module.exports[name];
      module.exports[name] = value;
      return value;
    }
    module.exports = {
      Parser,
      Tokenizer: require_Tokenizer(),
      ElementType: require_domelementtype(),
      DomHandler,
      get FeedHandler() {
        return defineProp("FeedHandler", require_FeedHandler());
      },
      get Stream() {
        return defineProp("Stream", require_Stream());
      },
      get WritableStream() {
        return defineProp("WritableStream", require_WritableStream());
      },
      get ProxyHandler() {
        return defineProp("ProxyHandler", require_ProxyHandler());
      },
      get DomUtils() {
        return defineProp("DomUtils", require_domutils());
      },
      get CollectingHandler() {
        return defineProp(
          "CollectingHandler",
          require_CollectingHandler()
        );
      },
      // For legacy support
      DefaultHandler: DomHandler,
      get RssHandler() {
        return defineProp("RssHandler", this.FeedHandler);
      },
      //helper methods
      parseDOM: function(data, options) {
        var handler = new DomHandler(options);
        new Parser(handler, options).end(data);
        return handler.dom;
      },
      parseFeed: function(feed, options) {
        var handler = new module.exports.FeedHandler(options);
        new Parser(handler, options).end(feed);
        return handler.dom;
      },
      createDomStream: function(cb, options, elementCb) {
        var handler = new DomHandler(cb, options, elementCb);
        return new Parser(handler, options);
      },
      // List of all events that the parser emits
      EVENTS: {
        /* Format: eventname: number of arguments */
        attribute: 2,
        cdatastart: 0,
        cdataend: 0,
        text: 1,
        processinginstruction: 2,
        comment: 1,
        commentend: 0,
        closetag: 1,
        opentag: 2,
        opentagname: 1,
        error: 1,
        end: 0
      }
    };
  }
});

// node_modules/react-simple-captcha/react-simple-captcha.js
var import_react3 = __toESM(require_react());

// node_modules/react-simple-captcha/node_modules/react-html-parser/src/HtmlParser.js
var import_htmlparser22 = __toESM(require_lib3());

// node_modules/react-simple-captcha/node_modules/react-html-parser/src/utils/isEmptyTextNode.js
function isEmptyTextNode(node) {
  return node.type === "text" && /\r?\n/.test(node.data) && node.data.trim() === "";
}

// node_modules/react-simple-captcha/node_modules/react-html-parser/src/elementTypes/index.js
var import_htmlparser2 = __toESM(require_lib3());

// node_modules/react-simple-captcha/node_modules/react-html-parser/src/elementTypes/TextElementType.js
function TextElementType(node) {
  return node.data;
}

// node_modules/react-simple-captcha/node_modules/react-html-parser/src/elementTypes/TagElementType.js
var import_react = __toESM(require_react());

// node_modules/react-simple-captcha/node_modules/react-html-parser/src/dom/attributes/BooleanAttributes.js
var BooleanAttributes_default = [
  "allowfullScreen",
  "async",
  "autoplay",
  "capture",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "hidden",
  "loop",
  "multiple",
  "muted",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "scoped",
  "seamless",
  "selected",
  "itemscope"
];

// node_modules/react-simple-captcha/node_modules/react-html-parser/src/dom/attributes/ReactAttributes.js
var ReactAttributes_default = {
  /**
   * Standard Properties
   */
  accept: "accept",
  "accept-charset": "acceptCharset",
  accesskey: "accessKey",
  action: "action",
  allowfullscreen: "allowFullScreen",
  allowtransparency: "allowTransparency",
  alt: "alt",
  as: "as",
  async: "async",
  autocomplete: "autoComplete",
  autoplay: "autoPlay",
  capture: "capture",
  cellpadding: "cellPadding",
  cellspacing: "cellSpacing",
  charset: "charSet",
  challenge: "challenge",
  checked: "checked",
  cite: "cite",
  classid: "classID",
  class: "className",
  cols: "cols",
  colspan: "colSpan",
  content: "content",
  contenteditable: "contentEditable",
  contextmenu: "contextMenu",
  controls: "controls",
  controlsList: "controlsList",
  coords: "coords",
  crossorigin: "crossOrigin",
  data: "data",
  datetime: "dateTime",
  default: "default",
  defer: "defer",
  dir: "dir",
  disabled: "disabled",
  download: "download",
  draggable: "draggable",
  enctype: "encType",
  form: "form",
  formaction: "formAction",
  formenctype: "formEncType",
  formmethod: "formMethod",
  formnovalidate: "formNoValidate",
  formtarget: "formTarget",
  frameborder: "frameBorder",
  headers: "headers",
  height: "height",
  hidden: "hidden",
  high: "high",
  href: "href",
  hreflang: "hrefLang",
  for: "htmlFor",
  "http-equiv": "httpEquiv",
  icon: "icon",
  id: "id",
  inputmode: "inputMode",
  integrity: "integrity",
  is: "is",
  keyparams: "keyParams",
  keytype: "keyType",
  kind: "kind",
  label: "label",
  lang: "lang",
  list: "list",
  loop: "loop",
  low: "low",
  manifest: "manifest",
  marginheight: "marginHeight",
  marginwidth: "marginWidth",
  max: "max",
  maxlength: "maxLength",
  media: "media",
  mediagroup: "mediaGroup",
  method: "method",
  min: "min",
  minlength: "minLength",
  multiple: "multiple",
  muted: "muted",
  name: "name",
  nonce: "nonce",
  novalidate: "noValidate",
  open: "open",
  optimum: "optimum",
  pattern: "pattern",
  placeholder: "placeholder",
  playsinline: "playsInline",
  poster: "poster",
  preload: "preload",
  profile: "profile",
  radiogroup: "radioGroup",
  readonly: "readOnly",
  referrerpolicy: "referrerPolicy",
  rel: "rel",
  required: "required",
  reversed: "reversed",
  role: "role",
  rows: "rows",
  rowspan: "rowSpan",
  sandbox: "sandbox",
  scope: "scope",
  scoped: "scoped",
  scrolling: "scrolling",
  seamless: "seamless",
  selected: "selected",
  shape: "shape",
  size: "size",
  sizes: "sizes",
  slot: "slot",
  span: "span",
  spellcheck: "spellCheck",
  src: "src",
  srcdoc: "srcDoc",
  srclang: "srcLang",
  srcset: "srcSet",
  start: "start",
  step: "step",
  style: "style",
  summary: "summary",
  tabindex: "tabIndex",
  target: "target",
  title: "title",
  type: "type",
  usemap: "useMap",
  value: "value",
  width: "width",
  wmode: "wmode",
  wrap: "wrap",
  /**
   * RDFa Properties
   */
  about: "about",
  datatype: "datatype",
  inlist: "inlist",
  prefix: "prefix",
  property: "property",
  resource: "resource",
  typeof: "typeof",
  vocab: "vocab",
  /**
   * Non-standard Properties
   */
  autocapitalize: "autoCapitalize",
  autocorrect: "autoCorrect",
  autosave: "autoSave",
  color: "color",
  itemprop: "itemProp",
  itemscope: "itemScope",
  itemtype: "itemType",
  itemid: "itemID",
  itemref: "itemRef",
  results: "results",
  security: "security",
  unselectable: "unselectable"
};

// node_modules/react-simple-captcha/node_modules/react-html-parser/src/utils/isValidTagOrAttributeName.js
var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
var nameCache = {};
function isValidTagOrAttributeName(tagName) {
  if (!nameCache.hasOwnProperty(tagName)) {
    nameCache[tagName] = VALID_TAG_REGEX.test(tagName);
  }
  return nameCache[tagName];
}

// node_modules/react-simple-captcha/node_modules/react-html-parser/src/utils/htmlAttributesToReact.js
var getParsedAttributeValue = function(attribute, value) {
  let lowerBooleanAttributes = BooleanAttributes_default.map((attr) => attr.toLowerCase());
  if (lowerBooleanAttributes.indexOf(attribute.toLowerCase()) >= 0) {
    value = attribute;
  }
  return value;
};
function htmlAttributesToReact(attributes) {
  return Object.keys(attributes).filter((attr) => isValidTagOrAttributeName(attr)).reduce(
    (mappedAttributes, attribute) => {
      const lowerCaseAttribute = attribute.toLowerCase();
      const name = ReactAttributes_default[lowerCaseAttribute] || lowerCaseAttribute;
      mappedAttributes[name] = getParsedAttributeValue(name, attributes[attribute]);
      return mappedAttributes;
    },
    {}
  );
}

// node_modules/react-simple-captcha/node_modules/react-html-parser/src/utils/inlineStyleToObject.js
function InlineStyleToObject(inlineStyle = "") {
  if (inlineStyle === "") {
    return {};
  }
  return inlineStyle.split(";").reduce(
    (styleObject, stylePropertyValue) => {
      let [property, value] = stylePropertyValue.split(/^([^:]+):/).filter((val, i) => i > 0).map((item) => item.trim().toLowerCase());
      if (value === void 0) {
        return styleObject;
      }
      property = property.replace(/^-ms-/, "ms-").replace(/-(.)/g, (_, character) => character.toUpperCase());
      styleObject[property] = value;
      return styleObject;
    },
    {}
  );
}

// node_modules/react-simple-captcha/node_modules/react-html-parser/src/utils/generatePropsFromAttributes.js
function generatePropsFromAttributes(attributes, key) {
  const props = Object.assign({}, htmlAttributesToReact(attributes), { key });
  if (typeof props.style === "string" || props.style instanceof String) {
    props.style = InlineStyleToObject(props.style);
  } else {
    delete props.style;
  }
  return props;
}

// node_modules/react-simple-captcha/node_modules/react-html-parser/src/dom/elements/VoidElements.js
var VoidElements_default = [
  "area",
  "base",
  "br",
  "col",
  "command",
  "embed",
  "hr",
  "img",
  "input",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
];

// node_modules/react-simple-captcha/node_modules/react-html-parser/src/elementTypes/TagElementType.js
function TagElementType(node, index, transform) {
  const tagName = node.name;
  if (!isValidTagOrAttributeName(tagName)) {
    return null;
  }
  const props = generatePropsFromAttributes(node.attribs, index);
  let children = null;
  if (VoidElements_default.indexOf(tagName) === -1) {
    children = processNodes(node.children, transform);
  }
  return import_react.default.createElement(tagName, props, children);
}

// node_modules/react-simple-captcha/node_modules/react-html-parser/src/elementTypes/StyleElementType.js
var import_react2 = __toESM(require_react());
function StyleElementType(node, index) {
  let styles;
  if (node.children.length > 0) {
    styles = node.children[0].data;
  }
  const props = generatePropsFromAttributes(node.attribs, index);
  return import_react2.default.createElement("style", props, styles);
}

// node_modules/react-simple-captcha/node_modules/react-html-parser/src/elementTypes/UnsupportedElementType.js
function UnsupportedElementType() {
  return null;
}

// node_modules/react-simple-captcha/node_modules/react-html-parser/src/elementTypes/index.js
var elementTypes_default = {
  [import_htmlparser2.ElementType.Text]: TextElementType,
  [import_htmlparser2.ElementType.Tag]: TagElementType,
  [import_htmlparser2.ElementType.Style]: StyleElementType,
  [import_htmlparser2.ElementType.Directive]: UnsupportedElementType,
  [import_htmlparser2.ElementType.Comment]: UnsupportedElementType,
  [import_htmlparser2.ElementType.Script]: UnsupportedElementType,
  [import_htmlparser2.ElementType.CDATA]: UnsupportedElementType,
  [import_htmlparser2.ElementType.Doctype]: UnsupportedElementType
};

// node_modules/react-simple-captcha/node_modules/react-html-parser/src/convertNodeToElement.js
function convertNodeToElement(node, index, transform) {
  return elementTypes_default[node.type](node, index, transform);
}

// node_modules/react-simple-captcha/node_modules/react-html-parser/src/processNodes.js
function processNodes(nodes, transform) {
  return nodes.filter((node) => !isEmptyTextNode(node)).map((node, index) => {
    let transformed;
    if (typeof transform === "function") {
      transformed = transform(node, index);
      if (transformed === null || !!transformed) {
        return transformed;
      }
    }
    return convertNodeToElement(node, index, transform);
  });
}

// node_modules/react-simple-captcha/node_modules/react-html-parser/src/HtmlParser.js
function HtmlParser(html, {
  decodeEntities = true,
  transform,
  preprocessNodes = (nodes) => nodes
} = {}) {
  const nodes = preprocessNodes(import_htmlparser22.default.parseDOM(html, { decodeEntities }));
  return processNodes(nodes, transform);
}

// node_modules/react-simple-captcha/node_modules/react-html-parser/src/index.js
var import_htmlparser23 = __toESM(require_lib3());
var src_default = HtmlParser;

// node_modules/react-simple-captcha/react-simple-captcha.js
var captcha_value = "";
var captcha_number = "";
var backgroundColor_value = "";
var fontColor_value = "";
var charMap_value = "";
var LoadCanvasTemplate_HTML = '<div><canvas id="canv"></canvas><div><a id="reload_href"  style="cursor: pointer; color: blue">Reload Captcha</a></div></div>';
var LoadCanvasTemplateNoReload_HTML = '<div><canvas id="canv"></canvas><div><a id="reload_href"  style="cursor: pointer; color: blue"></a></div></div>';
var loadCaptchaEnginge = (numberOfCharacters, backgroundColor = "white", fontColor = "black", charMap = "") => {
  backgroundColor_value = backgroundColor;
  fontColor_value = fontColor;
  charMap_value = charMap;
  captcha_number = numberOfCharacters;
  let retVal = "";
  let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  if (charMap === "upper") {
    charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  } else if (charMap === "lower") {
    charset = "abcdefghijklmnopqrstuvwxyz0123456789";
  } else if (charMap === "numbers") {
    charset = "0123456789";
  } else if (charMap === "special_char") {
    charset = "~`!@#$%^&*()_+-=[]{}|:'<>,.?/";
  }
  let length = parseInt(numberOfCharacters);
  for (let i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  let captcha = retVal;
  captcha_value = captcha;
  let length_height_canvas = Math.round(parseInt(length) / 3);
  let canvas = document.getElementById("canv"), ctx = canvas.getContext("2d"), img = document.getElementById("image");
  let text = captcha;
  let x = 12.5;
  let y = 15;
  let lineheight = 30;
  let canvas_height = (parseInt(length) - parseInt(length_height_canvas)) * 20;
  let lines = text.split("\n");
  let lineLengthOrder = lines.slice(0).sort(function(a, b) {
    return b.length - a.length;
  });
  ctx.canvas.width = parseInt(length) * 25;
  ctx.canvas.height = lines.length * lineheight;
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.textBaseline = "middle";
  ctx.font = "italic 20px Arial";
  ctx.fillStyle = fontColor;
  let num = 0;
  for (let i = 0; i < parseInt(length); i++) {
    num = parseInt(num) + 1;
    let heigt_num = 20 * num;
    ctx.fillText(retVal[i], heigt_num, Math.round(Math.random() * (15 - 12) + 12));
  }
  document.getElementById("reload_href").onclick = function() {
    loadCaptchaEnginge(captcha_number, backgroundColor, fontColor, charMap);
  };
};
var validateCaptcha = (userValue, reload = true) => {
  if (userValue != captcha_value) {
    if (reload == true) {
      loadCaptchaEnginge(captcha_number, backgroundColor_value, fontColor_value, charMap_value);
    }
    return false;
  } else {
    return true;
  }
};
var LoadCanvasTemplate = class extends import_react3.Component {
  render() {
    let reload_text = "";
    let reload_color = "";
    LoadCanvasTemplate_HTML = '<div><canvas id="canv" style="background-color: blue;"></canvas><div><a id="reload_href"  style="cursor: pointer; color: blue">Reload Captcha</a></div></div>';
    if (this.props.reloadText) {
      reload_text = this.props.reloadText;
    }
    if (this.props.reloadColor) {
      reload_color = this.props.reloadColor;
    }
    if (reload_text == "") {
      reload_text = "Reload Captcha";
    }
    if (reload_color == "") {
      reload_color = "blue";
    }
    LoadCanvasTemplate_HTML = '<div><canvas id="canv"></canvas><div><a id="reload_href"  style="cursor: pointer; color: ' + reload_color + '">' + reload_text + "</a></div></div>";
    return src_default(LoadCanvasTemplate_HTML);
  }
};
var LoadCanvasTemplateNoReload = class extends import_react3.Component {
  render() {
    return src_default(LoadCanvasTemplateNoReload_HTML);
  }
};
export {
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  loadCaptchaEnginge,
  validateCaptcha
};
/*! Bundled license information:

safe-buffer/index.js:
  (*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)
*/
//# sourceMappingURL=react-simple-captcha.js.map
