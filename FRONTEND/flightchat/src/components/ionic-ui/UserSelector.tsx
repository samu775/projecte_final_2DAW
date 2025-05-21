import { IonSelect, IonSelectOption, IonLabel } from '@ionic/react';
import { useEffect, useState } from 'react';

interface Props {
  onSelect: (email: string) => void;
  currentUserEmail: string;
}

const UserSelector: React.FC<Props> = ({ onSelect, currentUserEmail }) => {
  const [users, setUsers] = useState<string[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/online-users')
      .then((res) => res.json())
      .then((data) => setUsers(data.filter((u: string) => u !== currentUserEmail)))
      .catch((err) => console.error('Error carregant usuaris:', err));
  }, [currentUserEmail]);

  return (
    <>
      <IonLabel>Selecciona un usuari</IonLabel>
      <IonSelect
        placeholder="Tria destinatari"
        onIonChange={(e) => onSelect(e.detail.value)}
      >
        {users.map((user) => (
          <IonSelectOption key={user} value={user}>
            {user}
          </IonSelectOption>
        ))}
      </IonSelect>
    </>
  );
};

export default UserSelector;
