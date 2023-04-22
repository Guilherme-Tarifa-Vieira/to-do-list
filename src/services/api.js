export function loadLists() {
  return [
    {
      title: "Tarefas",
      creatable: true,
      cards: [
        {
          id: 1,
          content: "Estudar módulo 01 de NodeJS",
          labels: ["#F04D4D"],
          user: "https://api.dicebear.com/5.x/adventurer-neutral/svg?seed=Annie",
          tasks: [
            {
              id: 1,
              describe: "1. Colocar no git",
              checked: false,
            },
            {
              id: 2,
              describe: "2. criar entidades",
              checked: false,
            },
            {
              id: 3,
              describe: "3. fazer end-poitns",
              checked: false,
            },
          ],
        },
        {
          id: 2,
          content:
            "Criar vídeo para o Youtube ensinando a recriar a interface do Pipefy",
          labels: ["#F04D4D"],
          user: "https://api.dicebear.com/5.x/adventurer-neutral/svg?seed=Annie",
          tasks: [],
        },
        {
          id: 3,
          content: "Estudar módulo 03 de React Native",
          labels: ["#F04D4D"],
          user: "https://api.dicebear.com/5.x/adventurer-neutral/svg?seed=Oliver",
          tasks: [],
        },
        {
          id: 4,
          content:
            'Gravar Aula "NextJS: Utilizando server-side rendering com ReactJS"',
          labels: ["#F04D4D"],
          user: "https://api.dicebear.com/5.x/adventurer-neutral/svg?seed=Oliver",
          tasks: [],
        },
        {
          id: 5,
          content: "Gravar testes e deploy ReactJS",
          labels: ["#F04D4D"],
          user: "https://api.dicebear.com/5.x/adventurer/svg?seed=Daisy",
          tasks: [],
        },
      ],
    },
    {
      title: "Fazendo",
      creatable: true,
      cards: [
        {
          id: 6,
          content: "Recriando clone do Pipefy",
          labels: [],
          user: "https://api.dicebear.com/5.x/adventurer/svg?seed=Daisy",
          tasks: [],
        },
      ],
    },
    {
      title: "Pausado",
      creatable: true,
      cards: [
        {
          id: 7,
          content: "Gravar sobre Geolocalização e mapas com React Native",
          labels: ["#F04D4D"],
          user: "https://api.dicebear.com/5.x/adventurer-neutral/svg?seed=Jack",
          tasks: [],
        },
        {
          id: 8,
          content: "Gravar testes e deploy ReactJS",
          labels: ["#F04D4D"],
          user: "https://api.dicebear.com/5.x/adventurer-neutral/svg?seed=Jack",
          tasks: [],
        },
        {
          id: 9,
          content: "Ajustes na biblioteca unform",
          labels: [],
          tasks: [],
        },
      ],
    },
    {
      title: "Concluído",
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: "Gravar aula sobre deploy e CI com React Native",
          labels: [],
          tasks: [],
        },
        {
          id: 12,
          content: "Gravar testes e deploy ReactJS",
          labels: ["#F04D4D"],
          tasks: [],
        },
        {
          id: 13,
          content:
            'Gravar Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
          labels: ["#F04D4D"],
          tasks: [],
        },
      ],
    },
  ];
}
