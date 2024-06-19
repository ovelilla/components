// Vendors
import { Locale } from 'date-fns';
import {
  af,
  arDZ,
  arEG,
  arMA,
  arSA,
  arTN,
  ar,
  az,
  beTarask,
  be,
  bg,
  bn,
  bs,
  ca,
  ckb,
  cs,
  cy,
  da,
  deAT,
  de,
  el,
  enAU,
  enCA,
  enGB,
  enIE,
  enIN,
  enNZ,
  enUS,
  enZA,
  eo,
  es,
  et,
  eu,
  faIR,
  fi,
  frCA,
  frCH,
  fr,
  fy,
  gd,
  gl,
  gu,
  he,
  hi,
  hr,
  ht,
  hu,
  hy,
  id,
  is,
  itCH,
  it,
  jaHira,
  ja,
  ka,
  kk,
  km,
  kn,
  ko,
  lb,
  lt,
  lv,
  mk,
  mn,
  ms,
  mt,
  nb,
  nlBE,
  nl,
  nn,
  oc,
  pl,
  ptBR,
  pt,
  ro,
  ru,
  se,
  sk,
  sl,
  sq,
  srLatn,
  sr,
  sv,
  ta,
  te,
  th,
  tr,
  ug,
  uk,
  uzCyrl,
  uz,
  vi,
  zhCN,
  zhHK,
  zhTW,
} from 'date-fns/locale';

const LOCALES_MAP: Record<string, Locale> = {
  af,
  arDZ,
  arEG,
  arMA,
  arSA,
  arTN,
  ar,
  az,
  beTarask,
  be,
  bg,
  bn,
  bs,
  ca,
  ckb,
  cs,
  cy,
  da,
  deAT,
  de,
  el,
  enAU,
  enCA,
  enGB,
  enIE,
  enIN,
  enNZ,
  enUS,
  enZA,
  eo,
  es,
  et,
  eu,
  faIR,
  fi,
  frCA,
  frCH,
  fr,
  fy,
  gd,
  gl,
  gu,
  he,
  hi,
  hr,
  ht,
  hu,
  hy,
  id,
  is,
  itCH,
  it,
  jaHira,
  ja,
  ka,
  kk,
  km,
  kn,
  ko,
  lb,
  lt,
  lv,
  mk,
  mn,
  ms,
  mt,
  nb,
  nlBE,
  nl,
  nn,
  oc,
  pl,
  ptBR,
  pt,
  ro,
  ru,
  se,
  sk,
  sl,
  sq,
  srLatn,
  sr,
  sv,
  ta,
  te,
  th,
  tr,
  ug,
  uk,
  uzCyrl,
  uz,
  vi,
  zhCN,
  zhHK,
  zhTW,
} as const;

export { LOCALES_MAP };