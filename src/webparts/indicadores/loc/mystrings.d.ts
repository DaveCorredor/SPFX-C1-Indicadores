declare interface IIndicadoresWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroup1Name: string;
  BasicGroup2Name: string;
  BasicGroup3Name: string;
  DescripcionTitulo: string;
  DescripcionIndicador : string;
  DescripcionTexto : string;
  DescripcionPlaceholderTitulo : string;
  DescripcionPlaceholderIndicador : string;
  DescripcionPlaceholderTexto : string;
}

declare module 'IndicadoresWebPartStrings' {
  const strings: IIndicadoresWebPartStrings;
  export = strings;
}
