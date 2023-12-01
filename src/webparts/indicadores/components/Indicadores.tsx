import * as React from 'react';
import styles from './Indicadores.module.scss';
import { IIndicadoresProps } from './IIndicadoresProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Indicadores extends React.Component<IIndicadoresProps, {}> {
  public render(): React.ReactElement<IIndicadoresProps> {
    return (
      <div className={styles.indicador}>
        <div className={styles.indicador_item1}>
          <h3 className={styles.indicador_title1}>{this.props.titulo1}</h3>
          <div className={styles.indicador__value}>{this.props.indicador1}</div>
          <p className={styles.indicador__description}>{this.props.descripcion1}</p>
        </div>
        <div className={styles.indicador_item2}>
          <h3 className={styles.indicador_title2}>{this.props.titulo2}</h3>
          <div className={styles.indicador__value}>{this.props.indicador2}</div>
          <p className={styles.indicador__description}>{this.props.descripcion2}</p>
        </div>
        <div className={styles.indicador_item3}>
          <h3 className={styles.indicador_title3}>{this.props.titulo3}</h3>
          <div className={styles.indicador__value}>{this.props.indicador3}</div>
          <p className={styles.indicador__description}>{this.props.descripcion3}</p>
        </div>
      </div>
    );
  }
}
