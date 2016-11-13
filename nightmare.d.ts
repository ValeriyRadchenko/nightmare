// Generated by typings
// Source: https://raw.githubusercontent.com/ValeriyRadchenko/nightmare/55cb80d2f53b78c5c8a931362b675f7fabe95658/nightmare.d.ts
declare module "nightmare" {
  class Nightmare {
    constructor(options?: Nightmare.IConstructorOptions);
    version: string;

    // Interact with the Page

    engineVersions(): Nightmare;
    useragent(useragent: string): Nightmare;
    authentication(user: string, password: string): Nightmare;
    end(): Nightmare;
    halt(error: any, done: () => void): Nightmare;
    goto(url: string, headers?: any): Nightmare;
    back(): Nightmare;
    forward(): Nightmare;
    refresh(): Nightmare;
    click(selector: string): Nightmare;
    mousedown(selector: string): Nightmare;
    mouseover(selector: string): Nightmare;
    type(selector: string, text?: string): Nightmare;
    insert(selector: string, text?: string): Nightmare;
    check(selector: string): Nightmare;
    uncheck(selector: string): Nightmare;
    select(selector: string, option: string): Nightmare;
    scrollTo(top: number, left: number): Nightmare;
    viewport(width: number, height: number): Nightmare;
    inject(type: Nightmare.InjectType, file: string): Nightmare;
    evaluate(fn?: (...args: any[]) => void, ...params: any[]): Nightmare;
    wait(ms: number): Nightmare;
    wait(selector: string): Nightmare;
    wait(fn?: (...args: any[]) => boolean, ...params: any[]): Nightmare;
    header(header?: string, value?: string): Nightmare;

    // Extract from the Page

    exists(selector: string): Nightmare;
    visible(selector: string): Nightmare;
    on(event: string, callback: (...args: any[]) => void): Nightmare;
    once(event: string, callback: (...args: any[]) => void): Nightmare;
    removeListener(event: string, callback: (...args: any[]) => void): Nightmare;
    screenshot(path: string, clip: string): Nightmare;
    screenshot(path: string): Nightmare;
    screenshot(clip: string): Nightmare;
    screenshot(): Nightmare;
    html(path: string, saveType: Nightmare.SaveType): Nightmare;
    pdf(path: string, options: Object): Nightmare;
    title(): Nightmare;
    url(): Nightmare;

    // Cookies

    cookies: Nightmare.ICookies;

    // Extending Nightmare
    use(plugin: any): any;

    // Others

    then(...args: any[]): any

  }

  namespace Nightmare {
    export interface IConstructorOptions {
      waitTimeout?: number;
      gotoTimeout?: number;
      loadTimeout?: number;
      executionTimeout?: number;
      paths?: IPath;
      switches?: ISwitches;
      electronPath?: any; // require('electron')
      dock?: boolean;
      openDevTools?: IOpenDevTools;
      typeInterval?: number;
      pollInterval?: number;
      maxAuthRetries?: number;
      webPreferences?: Object;
      show: boolean;
    }

    export interface IPath {
      userData?: string;
    }

    export interface ISwitches {
      'proxy-server'?: string;
      'ignore-certificate-errors'?: boolean;
    }

    export interface IOpenDevTools {
      mode?: string;
    }

    export interface ICookies {
      get(): Nightmare;
      get(name: string): Nightmare;
      set(name: string, value: string): Nightmare;
      set<T>(cookie: T): Nightmare;
      clear(name?: string): Nightmare;
      clearAll(): Nightmare;
    }

    export enum InjectType {'js', 'css'}
    export enum SaveType {'HTMLOnly', 'HTMLComplete', 'MHTML'}

  }

  export = Nightmare;
}
