import { getComponentsMap, getPropsMap } from './mapping'
// import directives from '../directives.json'

export function headlessuiReact2() {
  return {
    uiName: '@headlessui/react',
    lib: '@headlessui/react',
    map: getPropsMap(),
  }
}

export function headlessuiReact2Components() {
  return {
    map: getComponentsMap(),
    isSeperatorByHyphen: false,
    prefix: '',
    isReact: true,
    lib: '@headlessui/react',
    // directives: directives.headlessReact2,
  }
}
