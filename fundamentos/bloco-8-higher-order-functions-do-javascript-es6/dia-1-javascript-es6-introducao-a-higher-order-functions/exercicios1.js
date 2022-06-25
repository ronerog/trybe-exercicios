const formatedEmployees = (name) => ({ nome: `${name}`, email: `${name.split(' ')[0].toLowerCase()}@trybe.com` })

const newEmployees = () => {
  const employees = {
    id1: formatedEmployees('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: formatedEmployees('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: formatedEmployees('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees())