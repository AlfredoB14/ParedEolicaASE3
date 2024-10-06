"use client";
import { Box, Text, Flex } from "@chakra-ui/react";
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

// Registrar los elementos necesarios
ChartJS.register(ArcElement, Tooltip, Legend);

export default function GeneratingTodayCard() {
  const data = {
    labels: ['Generated', 'Lost'],
    datasets: [
      {
        label: 'mW',
        data: [156, 44],
        backgroundColor: ['#4A5568', '#CBD5E0'], // Colores neutros y minimalistas
        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  };

  return (
    <Box
      bg="white"
      borderRadius="lg"
      shadow="md"
      p="6" 
      height="300px" 
      width="100%"
      display="flex"
      flexDirection="column"
      // justifyContent="space-between" 
    >
      {/* Título del componente */}
      <Text fontSize="lg" fontWeight="bold" mb="1" width="100%" textAlign="left">
        Generating today
      </Text> <br/>

      {/* Distribución del gráfico y la información */}
      <Flex justifyContent="space-evenly" alignItems="center" width="70%" mt="2">
        {/* Contenedor del gráfico con ajuste de tamaño */}
        <Box width="140px" height="140px"> 
          <Doughnut 
            data={data} 
            options={{
              plugins: {
                legend: {
                  display: false, 
                },
                tooltip: {
                  enabled: true, 
                },
              },
              cutout: "75%", 
            }} 
          />
        </Box>

        {/* Información de generación y eficiencia */}
        <Flex flexDirection="column" alignItems="flex-start" justifyContent="left">
          {/* Valor de mW */}
          <Flex alignItems="baseline" mb="1">
            <Text fontSize="3xl" fontWeight="bold" mr="1">156</Text>
            <Text fontSize="sm" color="gray.500">mW</Text> {/* Texto más pequeño y minimalista */}
          </Flex>

          {/* Eficiencia */}
          <Flex alignItems="baseline">
            <Text fontSize="3xl" fontWeight="bold" mr="1">80%</Text>
            <Text fontSize="sm" color="gray.500">Efficiency</Text> {/* Texto más pequeño y minimalista */}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}