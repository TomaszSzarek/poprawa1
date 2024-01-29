import React from 'react';
import { Text  } from 'react-native';

export default function SumaKomponent({ sumA, sumB }) {
  const suma = sumA + sumB;

  return (
    <Text>
      Suma: {suma}
    </Text>
  );
}