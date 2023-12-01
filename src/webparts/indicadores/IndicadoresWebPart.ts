import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'IndicadoresWebPartStrings';
import Indicadores from './components/Indicadores';
import { IIndicadoresProps } from './components/IIndicadoresProps';

export interface IIndicadoresWebPartProps {
  titulo1: string;
  indicador1 : string;
  descripcion1 : string;
  titulo2: string;
  indicador2 : string;
  descripcion2 : string;
  titulo3: string;
  indicador3 : string;
  descripcion3 : string;
}

export default class IndicadoresWebPart extends BaseClientSideWebPart<IIndicadoresWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IIndicadoresProps> = React.createElement(
      Indicadores,
      {
        titulo1: this.properties.titulo1,
        indicador1 : this.properties.indicador1,
        descripcion1 : this.properties.descripcion1,
        titulo2: this.properties.titulo2,
        indicador2 : this.properties.indicador2,
        descripcion2 : this.properties.descripcion2,
        titulo3: this.properties.titulo3,
        indicador3 : this.properties.indicador3,
        descripcion3 : this.properties.descripcion3,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroup1Name,
              groupFields: [
                PropertyPaneTextField('titulo1', {
                  label: strings.DescripcionTitulo,
                  maxLength: 20,
                  placeholder: strings.DescripcionPlaceholderTitulo
                }),
                PropertyPaneTextField('indicador1', {
                  label: strings.DescripcionIndicador,
                  maxLength: 10,
                  placeholder: strings.DescripcionPlaceholderIndicador
                }),
                PropertyPaneTextField('descripcion1', {
                  label: strings.DescripcionTexto,
                  maxLength: 100,
                  multiline: true,
                  placeholder: strings.DescripcionPlaceholderTexto
                }),
              ]
            },
            {
              groupName: strings.BasicGroup2Name,
              groupFields: [
                PropertyPaneTextField('titulo2', {
                  label: strings.DescripcionTitulo,
                  maxLength: 20,
                  placeholder: strings.DescripcionPlaceholderTitulo
                }),
                PropertyPaneTextField('indicador2', {
                  label: strings.DescripcionIndicador,
                  maxLength: 10,
                  placeholder: strings.DescripcionPlaceholderIndicador
                }),
                PropertyPaneTextField('descripcion2', {
                  label: strings.DescripcionTexto,
                  maxLength: 100,
                  multiline: true,
                  placeholder: strings.DescripcionPlaceholderTexto
                }),
              ]
            },
            {
              groupName: strings.BasicGroup3Name,
              groupFields: [
                PropertyPaneTextField('titulo3', {
                  label: strings.DescripcionTitulo,
                  maxLength: 20,
                  placeholder: strings.DescripcionPlaceholderTitulo
                }),
                PropertyPaneTextField('indicador3', {
                  label: strings.DescripcionIndicador,
                  maxLength: 10,
                  placeholder: strings.DescripcionPlaceholderIndicador
                }),
                PropertyPaneTextField('descripcion3', {
                  label: strings.DescripcionTexto,
                  maxLength: 100,
                  multiline: true,
                  placeholder: strings.DescripcionPlaceholderTexto
                }),
              ]
            }
          ]
        }
      ]
    };
  }
}
