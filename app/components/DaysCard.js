"use client";

import { Box, Text, Flex, Progress, VStack } from "@chakra-ui/react";



const maxValue = 20 * 0.01; // Valor máximo para las barras de progreso

export default function DayProgress({weekData}) {

  const data = weekData?.week_totals;

  // Lista de días de la semana en orden
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  // Crear un diccionario más simple con solo los nombres de los días
  const dayValues = {};
  for (let dateString in data) {
      // Extraer el día del string de fecha
      const dayName = dateString.split(",")[0]; // Toma la primera parte antes de la coma
      dayValues[dayName] = data[dateString];
  }

  // Crear la estructura final
  const daysData = daysOfWeek.map((day) => ({
      day: day,
      value: dayValues[day] || 0 // Si no existe el valor, se asigna 0
  }));

  
  return (
    <Box
      bg="white"
      borderRadius="lg"
      shadow="md"
      p="4"
      height="370px" // Ajustar la altura a 370px
      display="flex"
      flexDirection="column"
      justifyContent="center" // Centrar el contenido verticalmente
    >
      <Text fontSize="xl" fontWeight="bold" mb="4">
        Days
      </Text>
      <VStack align="stretch" spacing="1" flex="1" justifyContent="space-evenly"> {/* Distribuir espacio entre elementos */}
        {daysData.map((data, index) => (
          <Flex key={index} justify="space-between" align="center" w="full" py="1">
            <Text fontWeight="medium" w="25%" fontSize="sm"> {/* Reducir tamaño del texto */}
              {data.day}
            </Text>
            <Box w="50%" mx="2"> {/* Ajustar ancho y agregar margen horizontal */}
              <Progress
                value={(data.value / maxValue) * 100} // Calcular el porcentaje en base al valor máximo
                size="xs" // Tamaño pequeño para la barra de progreso
                colorScheme="teal"
                borderRadius="md"
                hasStripe
                height="4px" // Reducir altura de la barra
                isAnimated
              />
            </Box>
            <Text w="25%" textAlign="right" fontSize="sm"> {/* Reducir tamaño del texto y ajustar ancho */}
              {data.value.toFixed(4)} Watts
            </Text>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
}
