import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tarefas.css';

const Tarefas: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tarefas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tarefas</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tarefas" />
      </IonContent>
    </IonPage>
  );
};

export default Tarefas;
